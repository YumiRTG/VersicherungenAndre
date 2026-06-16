import { Shield, Calculator, Plus, User, Heart, Search, Stethoscope, Banknote, Activity, Baby } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import InfoBadge from '@/components/InfoBadge';
import CalculationSteps from '@/components/CalculationSteps';
import ExerciseCard from '@/components/ExerciseCard';

const leistungen = [
  {
    icon: Heart,
    title: 'Vorbeugung & Selbsthilfe',
    description:
      'Förderung von Selbsthilfegruppen zur Krankheitsvorbeugung oder Rehabilitation von Versicherten',
  },
  {
    icon: Search,
    title: 'Früherkennung',
    description:
      'Untersuchungen zur Früherkennung von Krebserkrankungen, Diabetes, Herz-Kreislauf-Erkrankungen etc.',
  },
  {
    icon: Stethoscope,
    title: 'Behandlungen',
    description:
      'Ärztliche und zahnärztliche Behandlung, Versorgung mit Arznei-, Verband- und Heilmitteln, Klinikaufenthalt',
  },
  {
    icon: Banknote,
    title: 'Krankengeld',
    description:
      'Wenn Arbeitnehmer durch Krankheit arbeitsunfähig werden, erhalten sie nach sechs Wochen Krankengeld. Es beträgt 70% des Arbeitsentgelts und darf 90% des Nettoarbeitsentgelts nicht übersteigen.',
  },
  {
    icon: Activity,
    title: 'Rehabilitation',
    description: 'Ambulante und stationäre Rehabilitationskuren',
  },
  {
    icon: Baby,
    title: 'Mutterschaft',
    description:
      'Ärztliche Betreuung, Hebammenhilfe, stationäre Entbindung, Haushaltshilfe, Mutterschaftsgeld',
  },
];

const calculationSteps = [
  {
    number: '01',
    title: 'Bruttogehalt identifizieren',
    formula: 'Bruttogehalt = 3.000 €',
    description:
      'Tilo verdient monatlich 3.000 Euro brutto. Dieser Betrag liegt unter der Beitragsbemessungsgrenze von 5.512,50 €, daher wird das volle Gehalt als Beitragsgrundlage verwendet.',
  },
  {
    number: '02',
    title: 'Arbeitnehmeranteil berechnen',
    formula: '3.000 € × 7,3 / 100 = 219 €',
    description:
      'Der Gesamtbeitragssatz beträgt 14,6%. Davon zahlt Tilo als Arbeitnehmer die Hälfte, also 7,3%.',
  },
  {
    number: '03',
    title: 'Ergebnis',
    formula: 'Monatlicher Beitrag = 219 €',
    description:
      'Tilo Schmitts monatlicher Beitrag für die gesetzliche Krankenversicherung beträgt 219 Euro. Sein Arbeitgeber zahlt ebenfalls 219 Euro.',
  },
];

export default function KrankenversicherungModule() {
  return (
    <section id="krankenversicherung" className="bg-warm-sand">
      {/* Module Header */}
      <div
        className="py-24 lg:py-28"
        style={{
          background: 'linear-gradient(135deg, #3D7A55 0%, #2D5A3D 100%)',
        }}
      >
        <div className="content-container">
          <SectionWrapper>
            <InfoBadge variant="light" className="mb-4">
              MODUL 02
            </InfoBadge>
            <h2 className="display-xl text-soft-white">Krankenversicherung 2025</h2>
            <p className="mt-4 text-xl text-soft-white/80 max-w-2xl">
              Die gesetzliche Krankenversicherung — Pflicht, Beiträge und Leistungen
            </p>
          </SectionWrapper>
        </div>
      </div>

      {/* Grundlagen */}
      <div className="section-padding">
        <div className="content-container">
          <SectionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12">
              <div>
                <InfoBadge>2.1 GRUNDLAGEN</InfoBadge>
                <h3 className="font-display text-2xl font-bold text-dark-brown mt-4">
                  Die gesetzliche Krankenversicherung
                </h3>
                <div className="mt-6 space-y-4 text-dark-brown/80 leading-relaxed">
                  <p>
                    Der größte Teil der deutschen Bevölkerung ist gesetzlich krankenversichert.
                    Arbeitnehmer (Arbeiter und Angestellte) sind in der gesetzlichen Krankenkasse
                    pflichtversichert, wenn ihr Einkommen eine bestimmte Höchstgrenze im Monat bzw.
                    Jahr nicht übersteigt.
                  </p>
                  <div className="bg-coral/10 border-l-4 border-coral rounded-r-xl p-5">
                    <p className="text-dark-brown font-medium">
                      Im Jahr 2025 liegt die Versicherungspflichtgrenze bei{' '}
                      <strong>6.150 Euro im Monat</strong>. Übersteigt das Einkommen diese
                      Höchstgrenze, kann der Arbeitnehmer aus der gesetzlichen Krankenversicherung
                      austreten und in die private Krankenversicherung wechseln.
                    </p>
                  </div>
                  <p>
                    Die Mitglieder finanzieren die gesetzliche Krankenversicherung durch ihre
                    Beiträge. Diese werden je zur Hälfte von dem Mitglied und dessen Arbeitgeber
                    gezahlt. Der Beitrag richtet sich nach dem jeweiligen Einkommen sowie dem
                    aktuellen Beitragssatz der Versicherung.
                  </p>
                  <p>
                    Der Beitrag ist prozentual vom Gehalt abhängig. Er steigt also desto mehr an, je
                    mehr Geld man verdient. Diese Regelung gilt bis zu einem bestimmten
                    Gehaltshöchstsatz, der als <strong>Beitragsbemessungsgrenze</strong> bezeichnet
                    wird. 2025 liegt diese Grenze bei monatlich 5.512,50 Euro.
                  </p>
                  <p>
                    Die Aufteilung des Krankenkassenbeitrags zwischen Arbeitgeber und Arbeitnehmer
                    bezeichnet man als <strong>"Beitragssolidarität"</strong>.
                  </p>
                </div>
              </div>

              {/* Key Facts Card */}
              <div className="lg:sticky lg:top-28">
                <div className="bg-soft-white border border-mist rounded-2xl p-8 shadow-card border-l-4 border-l-deep-forest">
                  <h4 className="font-display text-lg font-bold text-dark-brown mb-6">
                    Wichtige Zahlen 2025
                  </h4>
                  <div className="space-y-5">
                    {[
                      { icon: Shield, label: 'Versicherungspflichtgrenze', value: '6.150 €/Monat' },
                      { icon: Calculator, label: 'Beitragssatz', value: '14,6 %' },
                      { icon: Plus, label: 'Zusatzbeitrag (Ø)', value: '2,5 %' },
                      { icon: User, label: 'Beitragsbemessungsgrenze', value: '5.512,50 €/Monat' },
                    ].map((item, i) => (
                      <div key={i}>
                        {i > 0 && <div className="border-t border-mist mb-5" />}
                        <div className="flex items-start gap-4">
                          <item.icon className="w-6 h-6 text-deep-forest shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-dark-brown/60">{item.label}</p>
                            <p className="text-lg font-semibold text-dark-brown">{item.value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl overflow-hidden">
                  <img
src={`${import.meta.env.BASE_URL}assets/images/krankenkassen-vergleich.jpg`}
                    alt="Beitragsaufteilung Krankenversicherung"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>

      {/* Leistungen */}
      <div className="bg-soft-white section-padding">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8">
          <SectionWrapper>
            <div className="text-center mb-12">
              <InfoBadge>2.2 LEISTUNGEN</InfoBadge>
              <h2 className="font-display text-4xl font-bold text-dark-brown mt-4">
                Was leistet die gesetzliche Krankenkasse?
              </h2>
              <p className="mt-4 text-dark-brown/70">
                Alle gesetzlichen Krankenkassen übernehmen ein bestimmtes Paket an Leistungen, das
                gesetzlich vorgeschrieben ist. Darüber hinaus bieten einige Krankenkassen
                zusätzliche Mehrleistungen an.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leistungen.map((item, index) => (
              <SectionWrapper key={index} delay={index * 100}>
                <div className="bg-soft-white border border-mist rounded-2xl p-7 hover:shadow-card transition-shadow h-full">
                  <item.icon className="w-10 h-10 text-deep-forest mb-4" />
                  <h3 className="font-display text-lg font-bold text-dark-brown">{item.title}</h3>
                  <p className="mt-2 text-[15px] text-dark-brown/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SectionWrapper>
            ))}
          </div>

          <SectionWrapper delay={300}>
            <div className="mt-12 rounded-2xl overflow-hidden">
              <img
src={`${import.meta.env.BASE_URL}assets/images/arztbesuch.jpg`}
                alt="Arztbesuch"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </SectionWrapper>
        </div>
      </div>

      {/* Beispielrechnung - Tilo Schmitt */}
      <div className="bg-light-sage/30 section-padding">
        <div className="content-narrow">
          <SectionWrapper>
            <div className="text-center mb-12">
              <InfoBadge>BEISPIELRECHNUNG</InfoBadge>
              <h2 className="font-display text-4xl font-bold text-dark-brown mt-4">
                Tilo Schmitts Krankenversicherungsbeitrag
              </h2>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={150}>
            {/* Scenario Card */}
            <div className="bg-soft-white border-l-4 border-l-coral rounded-r-2xl p-6 shadow-sm mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-warm-sand flex items-center justify-center font-display font-bold text-dark-brown">
                  TS
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-dark-brown">Tilo Schmitt</h3>
                  <ul className="mt-1 text-sm text-dark-brown/70 space-y-0.5">
                    <li>Monatliches Bruttogehalt: 3.000 €</li>
                    <li>Beitragssatz GKV: 14,6%</li>
                    <li>Arbeitnehmeranteil: 7,3% (die Hälfte)</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={300}>
            <CalculationSteps
              steps={calculationSteps}
              resultValue="219 €"
              resultLabel="Tilo zahlt monatlich"
              resultSublabel="Arbeitnehmeranteil zur Krankenversicherung"
            />
          </SectionWrapper>
        </div>
      </div>

      {/* Übungsaufgaben */}
      <div className="bg-warm-sand section-padding">
        <div className="max-w-[900px] mx-auto px-5 md:px-8">
          <SectionWrapper>
            <div className="text-center mb-12">
              <InfoBadge>&Uuml;BUNGSAUFGABEN</InfoBadge>
              <h2 className="font-display text-4xl font-bold text-dark-brown mt-4">
                Jetzt selbst rechnen
              </h2>
              <p className="mt-3 text-dark-brown/70">
                Löse die Aufgaben zur Krankenversicherung.
                Schritt-für-Schritt-Lösungen helfen dir beim Nachvollziehen.
              </p>
            </div>
          </SectionWrapper>

          <div className="space-y-10">
            <SectionWrapper delay={100}>
              <ExerciseCard
                taskNumber="AUFGABE 1"
                title="Johannes Maiers Krankenkassenbeitrag"
                scenario="Johannes Maier verdient 3.860 Euro brutto im Monat. Der Beitragssatz für die gesetzliche Krankenversicherung beträgt 14,6%."
                question="Berechne den Arbeitgeber- und den Arbeitnehmeranteil des Krankenkassenbeitrages."
                hint="Denke daran: Der Beitrag wird je zur Hälfte von Arbeitgeber und Arbeitnehmer getragen."
                inputs={[
                  { label: 'Arbeitnehmeranteil (monatlich)', suffix: '€', correctValue: 281.78 },
                  { label: 'Arbeitgeberanteil (monatlich)', suffix: '€', correctValue: 281.78 },
                ]}
                solutionSteps={[
                  {
                    title: 'Schritt 1: Ermittlung der Beitragsgrundlage',
                    content:
                      'Johannes verdient 3.860 € brutto. Dieser Betrag liegt unter der Beitragsbemessungsgrenze (5.512,50 €), daher ist die volle Summe maßgeblich.',
                  },
                  {
                    title: 'Schritt 2: Berechnung des Gesamtbeitrags',
                    content: '3.860 € × 14,6 / 100 = 563,56 €',
                  },
                  {
                    title: 'Schritt 3: Aufteilung auf Arbeitgeber und Arbeitnehmer',
                    content: '563,56 € / 2 = 281,78 €',
                  },
                ]}
                finalResult="Arbeitnehmeranteil: 281,78 € | Arbeitgeberanteil: 281,78 €"
              />
            </SectionWrapper>

            <SectionWrapper delay={200}>
              <ExerciseCard
                taskNumber="AUFGABE 2"
                title="Céline Bauers Beitrag als Freiwilligversicherte"
                scenario="Céline Bauer verdient als Leiterin des Marketings eines großen Verlages 6.800 Euro im Monat. Sie ist freiwillig in der gesetzlichen Krankenkasse versichert. Der Beitragssatz beträgt 14,6%."
                question="Berechne den Arbeitgeber- und Arbeitnehmeranteil des Krankenkassenbeitrages."
                hint="Achtung: Auch wenn Céline über der Versicherungspflichtgrenze verdient, gilt bei freiwilliger Versicherung die Beitragsbemessungsgrenze!"
                inputs={[
                  { label: 'Arbeitnehmeranteil (monatlich)', suffix: '€', correctValue: 402.41 },
                  { label: 'Arbeitgeberanteil (monatlich)', suffix: '€', correctValue: 402.41 },
                ]}
                solutionSteps={[
                  {
                    title: 'Schritt 1: Beitragsbemessungsgrenze beachten',
                    content:
                      'Céline verdient 6.800 €, aber die Beitragsbemessungsgrenze liegt bei 5.512,50 €. Dieser Betrag ist maßgeblich.',
                  },
                  {
                    title: 'Schritt 2: Gesamtbeitrag berechnen',
                    content: '5.512,50 € × 14,6 / 100 = 804,83 €',
                  },
                  {
                    title: 'Schritt 3: Arbeitnehmeranteil berechnen',
                    content:
                      '804,83 € / 2 = 402,41 € (Céline zahlt zusätzlich den vollen Zusatzbeitrag allein)',
                  },
                ]}
                finalResult="Arbeitnehmeranteil: ca. 402,41 € | Arbeitgeberanteil: ca. 402,41 €"
              />
            </SectionWrapper>

            <SectionWrapper delay={300}>
              <ExerciseCard
                taskNumber="AUFGABE 3"
                title="Beitragsbemessungsgrenze vs. Versicherungspflichtgrenze"
                scenario=""
                question="Wozu dient die Beitragsbemessungsgrenze? Was ist der Unterschied zur Versicherungspflichtgrenze? Erläutere."
                isTextExercise
                textSolution={[
                  'Die Beitragsbemessungsgrenze begrenzt das zu versteuernde Einkommen, das für die Berechnung des Krankenkassenbeitrags herangezogen wird. Wer mehr verdient, zahlt nicht mehr Beiträge. Sie lag 2025 bei 5.512,50 €/Monat.',
                  'Die Versicherungspflichtgrenze (2025: 6.150 €/Monat) legt fest, bis zu welchem Einkommen Arbeitnehmer verpflichtet sind, sich in der gesetzlichen Krankenversicherung zu versichern. Wer darüber verdient, kann in die private Krankenversicherung wechseln.',
                ]}
                inputs={[]}
                solutionSteps={[]}
                finalResult=""
              />
            </SectionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
