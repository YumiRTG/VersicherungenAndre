import { useState, useEffect } from 'react';
import { getLenis } from '@/hooks/useLenis';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Start', href: '#hero' },
  { label: 'Geschichte', href: '#geschichte' },
  { label: 'Krankenversicherung', href: '#krankenversicherung' },
  { label: 'Rentenversicherung', href: '#rentenversicherung' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'module-overview', 'geschichte', 'krankenversicherung', 'rentenversicherung'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-warm-sand/95 backdrop-blur-[12px] border-b border-mist'
            : 'bg-transparent'
        }`}
      >
        <div className="content-container w-full flex items-center justify-between">
          <button
            onClick={() => scrollTo('#hero')}
            className={`font-display text-xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-deep-forest' : 'text-soft-white'
            }`}
          >
            Sozialversicherung<span className="text-coral">+</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  scrolled ? 'text-dark-brown' : 'text-soft-white/90'
                } hover:text-coral`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-coral transition-all duration-300 ${
                    activeSection === link.href.slice(1) ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            {mobileOpen ? (
              <X className={scrolled ? 'text-dark-brown' : 'text-soft-white'} size={24} />
            ) : (
              <Menu className={scrolled ? 'text-dark-brown' : 'text-soft-white'} size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-deep-forest/98 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-soft-white text-2xl font-display font-semibold hover:text-coral transition-colors"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
