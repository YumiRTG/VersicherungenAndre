const moduleLinks = [
  { label: 'Geschichte', href: '#geschichte' },
  { label: 'Krankenversicherung', href: '#krankenversicherung' },
  { label: 'Rentenversicherung', href: '#rentenversicherung' },
];

const contentLinks = [
  'Zeitstrahl',
  'Rechenbeispiele',
  'Übungsaufgaben',
  'Lösungen',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-deep-forest pt-20 pb-10">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="font-display text-2xl text-soft-white font-bold">
              Sozialversicherung<span className="text-coral">+</span>
            </div>
            <p className="mt-3 text-sm text-soft-white/60 leading-relaxed">
              Interaktives Lernportal für die deutsche Sozialversicherung
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-soft-white/50 mb-4">Module</h4>
            <ul className="space-y-2">
              {moduleLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-soft-white/80 hover:text-soft-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-soft-white/50 mb-4">Lerninhalte</h4>
            <ul className="space-y-2">
              {contentLinks.map((label) => (
                <li key={label}>
                  <span className="text-sm text-soft-white/80">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-soft-white/15 flex flex-col md:flex-row justify-between gap-4">
          <span className="text-xs text-soft-white/40">
            &copy; 2025 Sozialversicherung+ Lernportal
          </span>
          <span className="text-xs text-soft-white/40">
            Quellen: BPB, Deutsche Rentenversicherung, GKV-Spitzenverband
          </span>
        </div>
      </div>
    </footer>
  );
}
