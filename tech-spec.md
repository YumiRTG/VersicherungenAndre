# Tech Spec — Sozialversicherung Lernportal

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.0.0 | UI framework |
| react-dom | ^19.0.0 | React DOM renderer |
| vite | ^6.0.0 | Build tool |
| @vitejs/plugin-react | ^4.4.0 | Vite React integration |
| tailwindcss | ^4.0.0 | Utility-first CSS |
| @tailwindcss/vite | ^4.0.0 | Tailwind Vite plugin |
| gsap | ^3.12.0 | Animation engine (ScrollTrigger, timelines) |
| lenis | ^1.1.0 | Smooth scrolling |
| lucide-react | ^0.460.0 | Icon library (UI icons only) |
| typescript | ^5.6.0 | Type safety |
| @types/react | ^19.0.0 | React type definitions |
| @types/react-dom | ^19.0.0 | ReactDOM type definitions |

---

## Component Inventory

### Layout Components

| Component | Source | Reuse |
|-----------|--------|-------|
| Navigation | Custom | Once — sticky nav with smooth-scroll links, hamburger on mobile |
| Footer | Custom | Once — 3-column footer with links |
| SectionWrapper | Custom | Shared — every section wrapper; handles IntersectionObserver entrance animation (translateY + opacity) |

### Reusable Components

| Component | Source | Used In |
|-----------|--------|---------|
| PrimaryButton | Custom | Hero, module cards, exercises, CTAs throughout |
| SecondaryButton | Custom | Hero, module headers |
| NavButton | Custom | Module cards ("Modul öffnen"), exercise actions |
| ContentCard | Custom | Timeline events, key facts, scenario cards, exercise cards, solution cards — universal card shell |
| InfoBadge | Custom | Hero badges, subsection badges, task badges — label/tag variant |
| ProgressBadge | Custom | Module numbers, step numbers, question progress dots — circular numbered badge |
| Accordion | Custom | Rentenversicherung Wartezeit section; single-open mode with GSAP height animation |
| QuizQuestion | Custom | Geschichte knowledge check; 4-question cycle with option selection + solution reveal |
| CalculationStep | Custom | Krankenversicherung + Rentenversicherung example calculations; step card with formula block |
| ExerciseCard | Custom | All 6 exercises across modules 2 and 3; contains scenario, inputs, validation, solution accordion |
| SolutionAccordion | Custom | All exercises; expandable step-by-step solution |
| StatsRow | Custom | Hero statistics display |
| ModuleCard | Custom | Module overview grid; hover lift + image + topic list |

### Section Components (page-level)

| Component | Notes |
|-----------|-------|
| HeroSection | GSAP clipPath timeline entrance; stats; Germany map parallax |
| ModuleOverview | 3-column card grid with stagger entrance |
| GeschichteModule | Module header + learning content + interactive timeline (10 events) + quiz (4 questions) |
| KrankenversicherungModule | Module header + GRV basics + Leistungen grid + Tilo Schmitt calculation (3 steps) + 3 exercises |
| RentenversicherungModule | Module header + GRV basics + Generationenvertrag diagram + Wartezeit accordions + demographic visualization + Maria Schmidt calculation (3 steps) + 3 exercises |

### Hooks

| Hook | Purpose |
|------|---------|
| useLenis | Initialize and expose Lenis instance via context; handle prefers-reduced-motion fallback |
| useScrollAnimation | IntersectionObserver wrapper returning ref + isVisible; drives SectionWrapper entrance |
| useActiveSection | Track which module section is in viewport for nav active state |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Lenis smooth scrolling | lenis | Global instance in useLenis hook; scrollTo on nav click with -80px offset | Low |
| Sticky nav background transition | CSS + JS | Scroll listener toggles class past 100vh; CSS handles bg/blur/border transition | Low |
| Section entrance (translateY + opacity) | GSAP + ScrollTrigger | SectionWrapper uses ScrollTrigger with batch() for staggered children; fires once | Medium |
| Hero clipPath headline reveal | GSAP timeline | Sequential timeline on mount: clipPath inset(100% 0 0 0) → inset(0); staggered between lines | Medium |
| Hero badge/subtitle/CTA/stats stagger | GSAP timeline | Appended to same hero timeline with position offsets | Low |
| Germany map parallax | GSAP ScrollTrigger | ScrollTrigger scrub with translateY tied to scroll progress at 0.5x rate | Low |
| Module card hover lift | CSS | translateY(-6px) + shadow increase + border-color; pure CSS transition | Low |
| Module card entrance stagger | GSAP + ScrollTrigger | batch() stagger on grid children | Low |
| Timeline node hover (scale + glow) | CSS | scale(1.3) + fill change + box-shadow; CSS transition | Low |
| Timeline card parallax | GSAP ScrollTrigger | Per-card ScrollTrigger with different scrub rates for left/right cards | Medium |
| Timeline card entrance (slide from side) | GSAP + ScrollTrigger | Left cards from translateX(-40px), right from translateX(40px) | Medium |
| Calculation step reveal sequence | GSAP + ScrollTrigger | ScrollTrigger on section triggers timeline: step cards stagger in, then formula scaleX, then result opacity | High |
| Calculation connecting line growth | GSAP ScrollTrigger | scaleY from 0→1 tied to scroll scrub; glowing dot travels via motionPath or translateY | High |
| Calculation result banner entrance | GSAP | scale + opacity; countUp on number via gsap.to with snap | Medium |
| Quiz option selection | CSS | Border/background transition; instant class toggle | Low |
| Quiz solution reveal | GSAP | Correct/incorrect styling + explanation fade-in + progress dot fill; small timeline | Medium |
| Quiz question transition | GSAP | Outgoing: opacity+translateX(-30px); incoming: opacity+translateX(30px) | Medium |
| Accordion expand/collapse | GSAP | gsap.to height from 0→auto (measured) or auto→0; icon rotation 0→45deg | Medium |
| Exercise input validation feedback | CSS + GSAP | Border color change (CSS); shake on wrong (GSAP keyframes translateX); message fade-in | Medium |
| Solution accordion expand | GSAP | Height animation + solution steps stagger in | Medium |
| Mobile hamburger menu | GSAP | Full-screen overlay with links staggering translateX(30px)→0 | Medium |
| Button press effect | CSS | Active state scale(0.97)→1, 100ms | Low |
| Nav active underline | CSS | Width 0→100% transition on active state change | Low |
| Count-up number animation | GSAP | gsap.to with snap to integer/decimal on calculation result banners | Low |
| Demographic ratio bar animation | GSAP + ScrollTrigger | Bars animate width from 0 to target on scroll into view | Low |

---

## Other Key Decisions

### No External State Library

All state is local to components (useState/useContext). The app is a single page with no routing, no user accounts, and no data persistence. Quiz progress, exercise answers, and accordion states are all ephemeral and component-local.

### Font Loading Strategy

Playfair Display (700, 700i), Inter (400, 500, 600, 700), and JetBrains Mono (400) loaded via Google Fonts `<link>` in index.html. No npm font packages.

### Image Strategy

12 generated images stored in `/public/assets/images/`. Each `<img>` uses native `loading="lazy"` except hero and first module images which use `loading="eager"`. No image optimization library needed at this scale.

### prefers-reduced-motion

All GSAP timelines and ScrollTriggers check `window.matchMedia('(prefers-reduced-motion: reduce)')` before initialization. Lenis is disabled entirely when reduced motion is preferred. CSS transitions are left as-is (they are non-distracting).

### Section Lazy Loading

The three module sections (Geschichte, Krankenversicherung, Rentenversicherung) are good candidates for React.lazy() splitting since they are below the fold and contain substantial content. Hero and ModuleOverview should be eager-loaded.
