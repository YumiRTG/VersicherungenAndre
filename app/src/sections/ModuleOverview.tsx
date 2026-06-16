import SectionWrapper from '@/components/SectionWrapper';
import ModuleCard from '@/components/ModuleCard';

const modules = [
  {
    number: '01',
    title: 'Von Bismarck bis heute',
    description:
      'Die Entwicklung der Sozialversicherung in Deutschland — von der Industrialisierung über die Bismarckschen Sozialgesetze bis zur Agenda 2010.',
    topics: [
      'Industrialisierung & Arbeiterbewegung',
      'Bismarcksche Sozialgesetze 1883',
      'Weimarer Republik & NS-Zeit',
      'Wiedervereinigung 1990',
      'Agenda 2010 Reformen',
    ],
image: import.meta.env.BASE_URL + 'assets/images/geschichte-header.jpg',
    href: '#geschichte',
  },
  {
    number: '02',
    title: 'Krankenversicherung 2025',
    description:
      'Alles über die gesetzliche Krankenversicherung: Versicherungspflicht, Beiträge, Leistungen und aktuelle Beitragssätze mit Rechenbeispielen.',
    topics: [
      'Versicherungspflicht & -grenze',
      'Beitragsberechnung 14,6% + Zusatz',
      'Leistungen der GKV',
      'Beitragsbemessungsgrenze',
      'Beitragssolidarität',
    ],
image: import.meta.env.BASE_URL + 'assets/images/krankenversicherung-header.jpg',
    href: '#krankenversicherung',
  },
  {
    number: '03',
    title: 'Rentenversicherung 2025',
    description:
      'Die gesetzliche Rentenversicherung verstehen: Generationenvertrag, Wartezeit, Altersrente und die demografische Herausforderung.',
    topics: [
      'Generationenvertrag',
      'Wartezeit & Altersgrenze',
      'Beitragssatz 18,6%',
      'Beitragsbemessungsgrenze',
      'Demografischer Wandel',
    ],
image: import.meta.env.BASE_URL + 'assets/images/rentenversicherung-header.jpg',
    href: '#rentenversicherung',
  },
];

export default function ModuleOverview() {
  return (
    <section id="module-overview" className="bg-warm-sand section-padding">
      <div className="content-container">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="eyebrow text-muted-sage">DEIN LERNPFAD</span>
            <h2 className="font-display text-4xl font-bold text-dark-brown mt-3">
              Drei Module — von der Geschichte bis zur Praxis
            </h2>
            <p className="mt-4 text-dark-brown/70 max-w-2xl mx-auto">
              Wähle ein Modul und arbeite dich Schritt für Schritt durch Theorie, Beispiele und
              Übungen.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <SectionWrapper key={module.number} delay={index * 150}>
              <ModuleCard {...module} />
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
