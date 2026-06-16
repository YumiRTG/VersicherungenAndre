import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { getLenis } from '@/hooks/useLenis';
import InfoBadge from '@/components/InfoBadge';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headline1Ref = useRef<HTMLDivElement>(null);
  const headline2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ delay: 0.2 });

    // Badge row
    tl.fromTo(
      '.hero-badges',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      0
    );

    // Headline line 1 - clipPath reveal
    tl.fromTo(
      headline1Ref.current,
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0% 0 0 0)', duration: 1, ease: 'power3.out' },
      0.2
    );

    // Headline line 2
    tl.fromTo(
      headline2Ref.current,
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0% 0 0 0)', duration: 1, ease: 'power3.out' },
      0.4
    );

    // Subtitle
    tl.fromTo(
      '.hero-subtitle',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      0.8
    );

    // CTA row
    tl.fromTo(
      '.hero-ctas',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      1.0
    );

    // Stats
    tl.fromTo(
      '.hero-stat',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out' },
      1.2
    );
  }, { scope: heroRef });

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2D5A3D 0%, rgba(45, 90, 61, 0.85) 50%, rgba(45, 90, 61, 0.7) 100%)',
      }}
    >
      {/* Decorative Germany map */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[60vh] h-[80vh] opacity-[0.08] pointer-events-none">
        <svg viewBox="0 0 200 240" fill="#2D5A3D" xmlns="http://www.w3.org/2000/svg">
          <path d="M95 5 L105 8 L115 5 L125 10 L130 20 L128 30 L135 35 L140 45 L138 55 L142 60 L140 70 L145 75 L143 85 L148 90 L145 100 L150 105 L148 115 L152 120 L150 130 L155 135 L152 145 L148 150 L150 160 L145 165 L148 175 L143 180 L140 190 L135 195 L130 200 L125 210 L120 215 L115 225 L105 228 L95 230 L85 228 L75 225 L70 215 L65 210 L60 200 L55 195 L50 190 L48 180 L45 175 L48 165 L45 160 L48 150 L45 145 L48 135 L50 130 L48 120 L52 115 L50 105 L55 100 L52 90 L55 85 L52 75 L55 70 L60 60 L65 55 L70 45 L75 40 L80 30 L85 25 L88 15 L95 5Z" />
        </svg>
      </div>

      {/* Decorative leaves */}
      <div className="absolute top-10 left-10 opacity-[0.05]">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M60 10 C80 30, 100 50, 60 110 C20 50, 40 30, 60 10Z" stroke="#7A9B76" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-20 opacity-[0.05]">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M40 5 C55 20, 70 35, 40 75 C10 35, 25 20, 40 5Z" stroke="#7A9B76" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      <div className="content-container relative z-10 pt-32 pb-24">
        {/* Badges */}
        <div className="hero-badges flex flex-wrap gap-3 mb-8 opacity-0">
          <InfoBadge variant="light">INTERAKTIVES LERNPORTAL</InfoBadge>
          <InfoBadge variant="light">3 MODULE &bull; MIT L&Ouml;SUNGEN</InfoBadge>
        </div>

        {/* Headlines */}
        <div className="space-y-0">
          <div ref={headline1Ref} style={{ clipPath: 'inset(100% 0 0 0)' }}>
            <h1 className="display-xxl text-soft-white">Sozialversicherung</h1>
          </div>
          <div ref={headline2Ref} style={{ clipPath: 'inset(100% 0 0 0)' }}>
            <h1 className="display-xxl text-coral italic">verstehen</h1>
          </div>
        </div>

        {/* Subtitle */}
        <p className="hero-subtitle mt-6 text-xl text-soft-white/85 max-w-2xl leading-relaxed opacity-0">
          Von Bismarck bis heute: Lerne die Geschichte, Funktionsweise und Berechnung der deutschen
          Sozialversicherung mit interaktiven Modulen, anschaulichen Erklärungen und
          Schritt-für-Schritt-Übungen.
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-wrap gap-4 mt-12 opacity-0">
          <button
            onClick={() => scrollTo('#module-overview')}
            className="py-3.5 px-10 bg-coral text-soft-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-dark-brown transition-colors"
          >
            Jetzt starten
          </button>
          <button
            onClick={() => scrollTo('#geschichte')}
            className="py-3.5 px-10 border-[1.5px] border-muted-sage text-soft-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-muted-sage transition-colors"
          >
            Zu den Aufgaben
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 md:gap-12 mt-20">
          {[
            { number: '3', label: 'Lernmodule' },
            { number: '12+', label: 'Übungsaufgaben' },
            { number: '8', label: 'Rechenbeispiele' },
          ].map((stat, i) => (
            <div key={i} className="hero-stat opacity-0">
              <div className="font-display text-5xl text-coral font-bold">{stat.number}</div>
              <div className="text-sm text-soft-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
