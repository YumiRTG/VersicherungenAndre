import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Users, Building2, HeartPulse, BookOpen, Home, Activity, Wallet, Users2, ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import InfoBadge from '@/components/InfoBadge';
import Accordion from '@/components/Accordion';
import CalculationSteps from '@/components/CalculationSteps';
import ExerciseCard from '@/components/ExerciseCard';

gsap.registerPlugin(ScrollTrigger);

const rentenLeistungen = [
  { icon: HeartPulse, title: 'Gesundheitsaufklärung' },
  { icon: BookOpen, title: 'Forschung (z. B. Berufskrankheiten)' },
  { icon: Home, title: 'Bau von Seniorenheimen' },
  { icon: Activity, title: 'Rehabilitation' },
  { icon: Wallet, title: 'Erwerbsminderungsrenten' },
  { icon: Users2, title: 'Alters- und Hinterbliebenenrenten' },
];

const calculationSteps = [
  {
    number: '01',
    title: 'Beitragsgrundlage festlegen',
    formula: '4.500 € < 8.050 € (Beitragsbemessungsgrenze)',
    description:
      'Marias Gehalt liegt unter der Beitragsbemessungsgrenze, daher ist das volle Gehalt maßgeblich.',
  },
  {
    number: '02',
    title: 'Gesamtbeitrag berechnen',
    formula: '4.500 € × 18,6 / 100 = 837 €',
    description: 'Der Gesamtbeitrag zur Rentenversicherung beträgt 837 €.',
  },
  {
    number: '03',
    title: 'Arbeitnehmeranteil berechnen',
    formula: '837 € / 2 = 418,50 €',
    description:
      'Arbeitgeber und Arbeitnehmer tragen je die Hälfte. Marias Arbeitnehmeranteil beträgt 418,50 €.',
  },
];

const wartezeitItems = [
  {
    title: 'Wartezeit-Anforderungen',
    content: (
      <>
        <p>
          Versicherte haben Anspruch auf die Regelaltersrente, wenn sie das 67. Lebensjahr
          vollendet und eine allgemeine Wartezeit von fünf Jahren erfüllt haben.
        </p>
        <p className="mt-3">
          Für Menschen, die vor dem 1. Januar 1947 geboren wurden, besteht noch die Altersgrenze von
          65 Jahren. Zudem gibt es weitere Möglichkeiten, die Rente früher in Anspruch zu nehmen.
          Dann allerdings kann sich die Höhe der monatlichen Rente stark vermindern.
        </p>
      </>
    ),
  },
  {
    title: 'Was zählt zur Wartezeit?',
    content: (
      <>
        <p>
          Bei der Berechnung der Wartezeit werden Beitragszeiten und eventuelle Ersatzzeiten
          berücksichtigt. Als Beitragszeiten werden nicht nur die Zeiten angerechnet, in denen
          Versicherte beschäftigt waren und Beiträge eingezahlt haben, sondern auch:
        </p>
        <ul className="mt-3 space-y-1 list-disc list-inside">
          <li>Kindererziehungszeiten</li>
          <li>Zeiten einer Pflegetätigkeit (seit April 1995)</li>
          <li>Zeiten, in denen Lohnersatzleistungen bezogen wurden (z. B. Arbeitslosengeld)</li>
        </ul>
      </>
    ),
  },
];

export default function RentenversicherungModule() {
  const demoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!demoRef.current) return;
    const bars = demoRef.current.querySelectorAll('.demo-bar');
    gsap.fromTo(
      bars,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: demoRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: demoRef });

  return (
    <section id="rentenversicherung" className="bg-warm-sand">
      {/* Module Header */}
      <div
        className="py-24 lg:py-28"
        style={{
          background: 'linear-gradient(135deg, #2D5A3D 0%, #1A3D2A 100%)',
        }}
      >
        <div className="content-container">
          <SectionWrapper>
            <InfoBadge variant="light" className="mb-4">
              MODUL 03
            </InfoBadge>
            <h2 className="display-xl text-soft-white">Rentenversicherung 2025</h2>
            <p className="mt-4 text-xl text-soft-white/80 max-w-2xl">
              Generationenvertrag, Wartezeit und die Herausforderungen der Zukunft
            </p>
          </SectionWrapper>
        </div>
      </div>

      {/* Grundlagen */}
      <div className="section-padding">
        <div className="content-container">
          <SectionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12">
              <div>
                <InfoBadge>3.1 GRUNDLAGEN</InfoBadge>
                <h3 className="font-display text-2xl font-bold text-dark-brown mt-4">
                  Die gesetzliche Rentenversicherung
                </h3>
                <div className="mt-6 space-y-4 text-dark-brown/80 leading-relaxed">
                  <p>
                    In der Rentenversicherung sind Auszubildende, Arbeiter und Angestellte
                    pflichtversichert. Angehörige der freien Berufe (z. B. Anwälte und Ärzte) können
                    sich freiwillig in der gesetzlichen Rentenversicherung versichern. Empfänger von
                    Arbeitslosengeld oder Sozialhilfe sind ebenfalls automatisch pflichtversichert.
                  </p>
                  <p>
                    Der monatliche Rentenversicherungsbeitrag, den Arbeitgeber und Arbeitnehmer
                    jeweils zur Hälfte tragen, wird nach der jeweiligen Lohn- bzw. Gehaltshöhe
                    bemessen.
                  </p>
                </div>

                <div className="mt-8 bg-deep-forest/10 border-l-4 border-deep-forest rounded-r-xl p-5">
                  <p className="text-dark-brown">
                    <strong>Wichtige Zahlen 2025:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-dark-brown/80">
                    <li>Rentenversicherungsbeitrag: <strong>18,6%</strong> des Bruttogehaltes</li>
                    <li>Beitragsbemessungsgrenze: <strong>8.050 €/Monat</strong></li>
                    <li>Seit dem 1. Januar 2018 liegt der Beitrag bei 18,6%.</li>
                  </ul>
                </div>

                {/* Leistungen */}
                <div className="mt-8">
                  <h4 className="font-display text-lg font-bold text-dark-brown mb-4">
                    Leistungen der Rentenversicherung
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {rentenLeistungen.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-soft-white rounded-xl p-3 border border-mist"
                      >
                        <item.icon className="w-5 h-5 text-deep-forest shrink-0" />
                        <span className="text-sm text-dark-brown">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:sticky lg:top-28">
                <div className="rounded-2xl overflow-hidden">
                  <img
src={import.meta.env.BASE_URL + 'assets/images/rentner-paar.jpg'}
                    alt="Rentnerpaar"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>

                {/* Generationenvertrag Mini-Diagram */}
                <div className="mt-6 bg-soft-white border border-mist rounded-2xl p-6">
                  <h4 className="font-display text-sm font-bold text-dark-brown mb-4 text-center">
                    Der Generationenvertrag
                  </h4>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <Users className="w-8 h-8 text-deep-forest mx-auto" />
                      <p className="text-xs text-dark-brown/60 mt-1">Arbeitnehmer</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-sage" />
                    <div className="text-center">
                      <Building2 className="w-8 h-8 text-coral mx-auto" />
                      <p className="text-xs text-dark-brown/60 mt-1">Rentenkasse</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-sage" />
                    <div className="text-center">
                      <Users2 className="w-8 h-8 text-soft-gold mx-auto" />
                      <p className="text-xs text-dark-brown/60 mt-1">Rentner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>

      {/* Generationenvertrag */}
      <div className="bg-soft-white section-padding">
        <div className="max-w-[900px] mx-auto px-5 md:px-8">
          <SectionWrapper>
            <div className="text-center mb-12">
              <InfoBadge>3.2 GENERATIONENVERTRAG</InfoBadge>
              <h2 className="font-display text-4xl font-bold text-dark-brown mt-4">
                Wie funktioniert die Rentenversicherung?
              </h2>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={150}>
            <div className="space-y-4 text-dark-brown/80 leading-relaxed mb-12">
              <p>
                Die gesetzliche Rentenversicherung beruht seit ihrer Gründung auf dem sogenannten
                <strong> "Generationenvertrag"</strong>. Dies bezieht sich nicht auf ein schriftliches
                Vertragsdokument, sondern beschreibt die Situation zwischen "Einzahlern" und
                "Begünstigten".
              </p>
              <p>
                Die von der aktuell arbeitenden Generation gezahlten Versicherungsbeiträge werden
                dazu verwendet, die Renten und sonstigen Leistungen für die jeweiligen Rentenbezieher
                zu finanzieren. Die heutigen Rentenbezieher haben also ihre Beiträge für die
                Generation ihrer Eltern bezahlt. Die heutigen Jugendlichen werden also in einigen
                Jahren gemäß dem "Generationenvertrag" mit ihren Versicherungsbeiträgen die Rente
                ihrer Eltern bezahlen.
              </p>
            </div>
          </SectionWrapper>

          {/* Generationenvertrag Diagram */}
          <SectionWrapper delay={250}>
            <div className="space-y-6">
              {/* Past */}
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-light-sage/40 rounded-2xl p-6 text-center">
                  <Users className="w-10 h-10 text-deep-forest mx-auto" />
                  <p className="text-sm font-medium text-dark-brown mt-2">Elterngeneration</p>
                  <p className="text-xs text-dark-brown/60">(Einzahler)</p>
                </div>
                <div className="text-center">
                  <ArrowRight className="w-6 h-6 text-muted-sage" />
                  <p className="text-xs text-muted-sage">Beiträge gezahlt</p>
                </div>
                <div className="flex-1 bg-coral/10 rounded-2xl p-6 text-center">
                  <Users2 className="w-10 h-10 text-coral mx-auto" />
                  <p className="text-sm font-medium text-dark-brown mt-2">Großelterngeneration</p>
                  <p className="text-xs text-dark-brown/60">(Rentner)</p>
                </div>
              </div>

              {/* Present */}
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-deep-forest/10 rounded-2xl p-6 text-center border-2 border-deep-forest/20">
                  <Users className="w-10 h-10 text-deep-forest mx-auto" />
                  <p className="text-sm font-medium text-dark-brown mt-2">Heutige Arbeitnehmer</p>
                  <p className="text-xs text-dark-brown/60">(Einzahler)</p>
                </div>
                <div className="text-center">
                  <ArrowRight className="w-6 h-6 text-coral" />
                  <p className="text-xs text-coral font-medium">Beiträge zahlen</p>
                </div>
                <div className="flex-1 bg-soft-gold/10 rounded-2xl p-6 text-center border-2 border-soft-gold/30">
                  <Users2 className="w-10 h-10 text-soft-gold mx-auto" />
                  <p className="text-sm font-medium text-dark-brown mt-2">Heutige Rentner</p>
                  <p className="text-xs text-dark-brown/60">(Begünstigte)</p>
                </div>
              </div>

              {/* Future */}
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-light-sage/40 rounded-2xl p-6 text-center">
                  <Users className="w-10 h-10 text-muted-sage mx-auto" />
                  <p className="text-sm font-medium text-dark-brown mt-2">Heutige Jugendliche</p>
                  <p className="text-xs text-dark-brown/60">(Zukünftige Einzahler)</p>
                </div>
                <div className="text-center">
                  <ArrowRight className="w-6 h-6 text-muted-sage" />
                  <p className="text-xs text-muted-sage">Werden zahlen</p>
                </div>
                <div className="flex-1 bg-light-sage/40 rounded-2xl p-6 text-center">
                  <Users2 className="w-10 h-10 text-muted-sage mx-auto" />
                  <p className="text-sm font-medium text-dark-brown mt-2">Heutige Arbeitnehmer</p>
                  <p className="text-xs text-dark-brown/60">(Zukünftige Rentner)</p>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>

      {/* Wartezeit */}
      <div className="bg-warm-sand section-padding">
        <div className="content-narrow">
          <SectionWrapper>
            <InfoBadge>3.3 WARTEZEIT</InfoBadge>
            <h3 className="font-display text-2xl font-bold text-dark-brown mt-4 mb-6">
              Was ist die Wartezeit?
            </h3>
            <p className="text-dark-brown/80 leading-relaxed mb-8">
              Um die Altersrente in Anspruch nehmen zu können, müssen Arbeitnehmer bestimmte
              Voraussetzungen erfüllen: Eine Rente aus der gesetzlichen Rentenversicherung kann nur
              gezahlt werden, wenn der Versicherte der Versicherung eine bestimmte Zeit lang
              angehört hat. Diese Mindestversicherungszeit nennt man <strong>"Wartezeit"</strong>.
            </p>
          </SectionWrapper>

          <SectionWrapper delay={150}>
            <Accordion items={wartezeitItems} />
          </SectionWrapper>
        </div>
      </div>

      {/* Demografischer Wandel */}
      <div className="bg-soft-white section-padding">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8">
          <SectionWrapper>
            <div className="text-center mb-12">
              <InfoBadge>3.4 HERAUSFORDERUNG</InfoBadge>
              <h2 className="font-display text-4xl font-bold text-dark-brown mt-4">
                Die demografische Herausforderung
              </h2>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={150}>
            <div className="space-y-4 text-dark-brown/80 leading-relaxed mb-12">
              <p>
                Das Problem der gesetzlichen Rentenversicherung besteht darin, dass die deutsche
                Bevölkerung immer älter wird. So gibt es immer weniger Beitragszahler, die für
                immer mehr Rentenbezieher aufkommen müssen, da z. B. die Geburten in Deutschland
                rückläufig sind.
              </p>
              <p>
                Das Geld, das in die Rentenkasse kommt, kann also nicht gewinnbringend angelegt
                werden und sich vermehren, wie es bei einer privaten Rentenversicherung der Fall
                ist. Geht ein Arbeitnehmer in 20 Jahren in Rente, bekommt er sogar viel weniger
                Rente heraus, als er eigentlich eingezahlt hat.
              </p>
            </div>
          </SectionWrapper>

          {/* Demographic Comparison */}
          <div ref={demoRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <SectionWrapper delay={200}>
              <div className="bg-deep-forest/5 rounded-2xl p-8 border border-deep-forest/10">
                <h3 className="font-display text-xl font-bold text-dark-brown mb-4">
                  1950er Jahre
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-deep-forest" />
                      <span className="text-sm font-medium">Arbeitnehmer</span>
                    </div>
                    <div className="demo-bar h-8 bg-deep-forest rounded-full origin-left" style={{ width: '85%' }} />
                  </div>
                  <div className="w-16 text-center font-bold text-deep-forest">7:1</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Users2 className="w-5 h-5 text-coral" />
                      <span className="text-sm font-medium">Rentner</span>
                    </div>
                    <div className="demo-bar h-8 bg-coral rounded-full origin-left" style={{ width: '15%' }} />
                  </div>
                  <div className="w-16" />
                </div>
                <p className="mt-4 text-sm text-dark-brown/60">
                  7 Arbeitnehmer finanzierten 1 Rentner
                </p>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={350}>
              <div className="bg-coral/5 rounded-2xl p-8 border border-coral/10">
                <h3 className="font-display text-xl font-bold text-dark-brown mb-4">
                  2025 / 2050
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-deep-forest" />
                      <span className="text-sm font-medium">Arbeitnehmer</span>
                    </div>
                    <div className="demo-bar h-8 bg-deep-forest rounded-full origin-left" style={{ width: '40%' }} />
                  </div>
                  <div className="w-16 text-center font-bold text-coral">2:1</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Users2 className="w-5 h-5 text-coral" />
                      <span className="text-sm font-medium">Rentner</span>
                    </div>
                    <div className="demo-bar h-8 bg-coral rounded-full origin-left" style={{ width: '60%' }} />
                  </div>
                  <div className="w-16" />
                </div>
                <p className="mt-4 text-sm text-dark-brown/60">
                  Nur noch 2 Arbeitnehmer finanzieren 1 Rentner
                </p>
              </div>
            </SectionWrapper>
          </div>

          <SectionWrapper delay={400}>
            <div className="rounded-2xl overflow-hidden">
              <img
src={import.meta.env.BASE_URL + 'assets/images/demografie-chart.jpg'}
                alt="Demografische Entwicklung Deutschland"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </SectionWrapper>
        </div>
      </div>

      {/* Beispielrechnung */}
      <div className="bg-light-sage/30 section-padding">
        <div className="content-narrow">
          <SectionWrapper>
            <div className="text-center mb-12">
              <InfoBadge>BEISPIELRECHNUNG</InfoBadge>
              <h2 className="font-display text-4xl font-bold text-dark-brown mt-4">
                Berechnung des Rentenversicherungsbeitrags
              </h2>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={150}>
            <div className="bg-soft-white border-l-4 border-l-coral rounded-r-2xl p-6 shadow-sm mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-warm-sand flex items-center justify-center font-display font-bold text-dark-brown">
                  MS
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-dark-brown">Maria Schmidt</h3>
                  <p className="text-sm text-dark-brown/70">
                    Monatliches Bruttogehalt: 4.500 € &bull; Beitragssatz: 18,6%
                  </p>
                </div>
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={300}>
            <CalculationSteps
              steps={calculationSteps}
              resultValue="418,50 €"
              resultLabel="Maria zahlt monatlich"
              resultSublabel="Arbeitnehmeranteil zur Rentenversicherung"
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
                Teste dein Wissen
              </h2>
              <p className="mt-3 text-dark-brown/70">
                Löse die Aufgaben zur Rentenversicherung.
              </p>
            </div>
          </SectionWrapper>

          <div className="space-y-10">
            <SectionWrapper delay={100}>
              <ExerciseCard
                taskNumber="AUFGABE 1"
                title="Der Begriff 'Wartezeit'"
                scenario=""
                question="Erläutere den Begriff 'Wartezeit' in Bezug auf die Rentenversicherung."
                isTextExercise
                textSolution={[
                  'Die Wartezeit ist die Mindestversicherungszeit, die ein Versicherter erfüllen muss, um Anspruch auf eine Rente aus der gesetzlichen Rentenversicherung zu haben.',
                  'Für die Regelaltersrente beträgt die allgemeine Wartezeit fünf Jahre.',
                  'Zur Wartezeit zählen: Beschäftigungszeiten, Kindererziehungszeiten, Pflegezeiten und Zeiten mit Lohnersatzleistungen.',
                ]}
                inputs={[]}
                solutionSteps={[]}
                finalResult=""
              />
            </SectionWrapper>

            <SectionWrapper delay={200}>
              <ExerciseCard
                taskNumber="AUFGABE 2"
                title="Der Generationenvertrag"
                scenario=""
                question="Beschreibe das Hauptproblem der Rentenversicherung im Zusammenhang mit dem Generationenvertrag."
                isTextExercise
                textSolution={[
                  'Der Generationenvertrag basiert auf einem Umlageverfahren: Die aktuell arbeitende Generation zahlt die Renten der aktuellen Rentner.',
                  'Das Hauptproblem: Die deutsche Bevölkerung wird immer älter, es gibt immer weniger Beitragszahler für immer mehr Rentenbezieher.',
                  'Die Geburtenrate ist rückläufig, was das Verhältnis weiter verschärft.',
                  'Das eingezahlte Geld wird sofort ausgezahlt und kann sich nicht vermehren wie bei privaten Vorsorgeformen.',
                ]}
                inputs={[]}
                solutionSteps={[]}
                finalResult=""
              />
            </SectionWrapper>

            <SectionWrapper delay={300}>
              <ExerciseCard
                taskNumber="AUFGABE 3"
                title="Beitragsberechnung"
                scenario="Tom Weber verdient monatlich 5.200 Euro brutto. Der Rentenversicherungsbeitrag beträgt 18,6%."
                question="Berechne den monatlichen Arbeitnehmeranteil für die Rentenversicherung."
                hint="Denke daran: Arbeitgeber und Arbeitnehmer tragen je die Hälfte. Achte auf die Beitragsbemessungsgrenze!"
                inputs={[
                  {
                    label: 'Arbeitnehmeranteil (monatlich)',
                    suffix: '€',
                    correctValue: 483.6,
                  },
                ]}
                solutionSteps={[
                  {
                    title: 'Schritt 1: Beitragsgrundlage',
                    content: '5.200 € (unter der BBG von 8.050 €)',
                  },
                  {
                    title: 'Schritt 2: Gesamtbeitrag',
                    content: '5.200 € × 18,6 / 100 = 967,20 €',
                  },
                  {
                    title: 'Schritt 3: Arbeitnehmeranteil',
                    content: '967,20 € / 2 = 483,60 €',
                  },
                ]}
                finalResult="Tom zahlt monatlich 483,60 € Arbeitnehmeranteil."
              />
            </SectionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
