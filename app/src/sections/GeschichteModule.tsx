import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import InfoBadge from '@/components/InfoBadge';
import Timeline from '@/components/Timeline';
import QuizQuestion from '@/components/QuizQuestion';

const timelineEvents = [
  {
    year: '1863',
    title: 'Erster deutscher Arbeiterverein',
    description:
      'Der erste deutsche Arbeiterverein wird gegründet. Die Arbeiterschaft organisiert sich in Vereinen, um gegen die schlechten Arbeitsbedingungen und geringen Löhne vorzugehen.',
    image: '/assets/images/arbeiterverein-1863.jpg',
  },
  {
    year: '1878',
    title: 'Sozialistengesetz',
    description:
      'Reichskanzler Otto von Bismarck sieht in der erstarkenden Arbeiterbewegung eine Gefahr für den Staat und verbietet die sozialen Vereine mithilfe des sogenannten "Sozialistengesetzes".',
    image: '/assets/images/bismarck-portrait.jpg',
  },
  {
    year: '1881',
    title: 'Bismarcks Vorschlag',
    description:
      'Bismarck macht dem Deutschen Reichstag den Vorschlag, Gesetze zum Schutz der Arbeiter bei Krankheit, Unfall, Invalidität und zur Altersversorgung zu erlassen.',
  },
  {
    year: '1883',
    title: 'Bismarcksche Sozialgesetze',
    description:
      'Die Gesetze treten in Kraft und gelten als die Geburtsstunde der deutschen Sozialversicherung. Damit gehört Deutschland zu den ersten Ländern weltweit mit einem staatlichen Sozialversicherungssystem.',
    image: '/assets/images/sozialgesetze-1883.jpg',
  },
  {
    year: '1919',
    title: 'Weimarer Republik',
    description:
      'In die Verfassung der Weimarer Republik werden soziale Grundrechte aufgenommen. Das Sozialversicherungssystem wird weiter ausgebaut.',
  },
  {
    year: '1929',
    title: 'Weltwirtschaftskrise',
    description:
      'Nach einigen wirtschaftlich guten Jahren kommt es zur Weltwirtschaftskrise. Extreme Armut und Massenarbeitslosigkeit prägen Deutschland.',
  },
  {
    year: '1933–1945',
    title: 'Nationalsozialismus',
    description:
      'Die Nationalsozialisten lösen Gewerkschaften und Parteien auf. Die gesamte Wirtschaft ist auf Krieg ausgerichtet, was in die Katastrophe des Zweiten Weltkrieges führt.',
  },
  {
    year: '1949',
    title: 'Neuanfang in BRD und DDR',
    description:
      'Nach Kriegsende werden die Sozialversicherungen im nun geteilten Deutschland wieder eingerichtet. In der BRD gibt es erneut das fünfgliedrige Sozialversicherungssystem.',
  },
  {
    year: '1990',
    title: 'Deutsche Wiedervereinigung',
    description:
      'Am 3. Oktober 1990 wird Deutschland wiedervereinigt. Das Sozialversicherungssystem der DDR wird durch das System der Bundesrepublik ersetzt.',
  },
  {
    year: '2003–2005',
    title: 'Agenda 2010',
    description:
      'Der damalige Bundeskanzler Gerhard Schröder führt mit der "Agenda 2010" umfassende Reformen der Sozialversicherungen durch — hin zu mehr Eigenleistungen und Eigenvorsorge.',
    image: '/assets/images/agenda-2010.jpg',
  },
];

const quizQuestions = [
  {
    question: 'In welchem Jahr traten die Bismarckschen Sozialgesetze in Kraft?',
    options: ['1878', '1881', '1883', '1919'],
    correctIndex: 2,
    explanation:
      'Die Bismarckschen Sozialgesetze traten 1883 in Kraft und gelten als die Geburtsstunde der deutschen Sozialversicherung.',
  },
  {
    question: 'Was war das Hauptziel des Sozialistengesetzes von 1878?',
    options: [
      'Arbeiterrechte stärken',
      'Soziale Vereine verbieten',
      'Sozialversicherung einführen',
      'Gewerkschaften gründen',
    ],
    correctIndex: 1,
    explanation:
      'Bismarck verbot 1878 die entstandenen sozialen Vereine mithilfe des sogenannten "Sozialistengesetzes", da er die Arbeiterbewegung als Gefahr für den Staat sah.',
  },
  {
    question:
      'Welches Ereignis löste 1929 extreme Armut und Massenarbeitslosigkeit in Deutschland aus?',
    options: [
      'Der Erste Weltkrieg',
      'Die Weltwirtschaftskrise',
      'Die Wiedervereinigung',
      'Die Agenda 2010',
    ],
    correctIndex: 1,
    explanation:
      '1929 kam es zur Weltwirtschaftskrise, auf die extreme Armut und Massenarbeitslosigkeit in Deutschland folgten.',
  },
  {
    question: 'Was wurde mit der Agenda 2010 verfolgt?',
    options: [
      'Abschaffung der Sozialversicherung',
      'Mehr Eigenleistungen und Eigenvorsorge',
      'Gratis Krankenversicherung für alle',
      'Anhebung des Rentenalters auf 75',
    ],
    correctIndex: 1,
    explanation:
      'Die Agenda 2010 des Bundeskanzlers Gerhard Schröder führte zu umfassenden Reformen der Sozialversicherungen hin zu mehr Eigenleistungen und Eigenvorsorge der Bürger.',
  },
];

export default function GeschichteModule() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <section id="geschichte" className="bg-warm-sand">
      {/* Module Header */}
      <div className="bg-deep-forest py-24 lg:py-28">
        <div className="content-container">
          <SectionWrapper>
            <InfoBadge variant="light" className="mb-4">
              MODUL 01
            </InfoBadge>
            <h2 className="display-xl text-soft-white">Von Bismarck bis heute</h2>
            <p className="mt-4 text-xl text-soft-white/80 max-w-2xl">
              Die Geschichte der Sozialversicherung in Deutschland
            </p>
          </SectionWrapper>
        </div>
      </div>

      {/* Learning Content - Industrialisierung */}
      <div className="section-padding">
        <div className="content-container">
          <SectionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-start">
              <div>
                <InfoBadge>1.1 DIE ANFÄNGE</InfoBadge>
                <h3 className="font-display text-2xl font-bold text-dark-brown mt-4">
                  Die Industrialisierung veränderte alles
                </h3>
                <div className="mt-6 space-y-4 text-dark-brown/80 leading-relaxed">
                  <p>
                    Die industrielle Revolution veränderte die Lebens- und Arbeitsbedingungen in
                    Europa und Deutschland zu Beginn des 19. Jahrhunderts dramatisch. Neue
                    Erfindungen, z. B. die Dampfmaschine, machten es möglich, dass Güter viel
                    produktiver hergestellt werden konnten.
                  </p>
                  <p>
                    Dominierten vorher Handwerk und Landwirtschaft das Erwerbsleben der Menschen, so
                    waren es zunehmend Fabriken, in denen für sehr geringe Löhne gearbeitet wurde.
                  </p>
                  <p>
                    Trotz harter Arbeit und langen Schichten konnten die Arbeiter ihre Familien kaum
                    ernähren. Sie hatten weder einen ausreichenden Arbeitsschutz in den Fabriken
                    noch eine Versicherung für Unfälle oder Krankheit.
                  </p>
                  <p>
                    Dies führte dazu, dass sich in der Mitte des 19. Jahrhunderts die Arbeiter in
                    sozialen Vereinen, Gewerkschaften und Parteien zusammenschlossen, um ein
                    Gegengewicht zu den reichen Fabrikbesitzern und dem Adel zu bilden.
                  </p>
                </div>

                {/* Info Box */}
                <div className="mt-8 flex items-start gap-4 bg-light-sage/40 rounded-xl p-5 border border-light-sage">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#7A9B76"/>
                  </svg>
                  <p className="text-dark-brown/80 text-[15px]">
                    <strong>Der erste deutsche Arbeiterverein wurde im Jahr 1863 gegründet</strong>{' '}
                    — ein wichtiger Meilenstein für die spätere Sozialversicherung.
                  </p>
                </div>
              </div>

              <div className="lg:sticky lg:top-28">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="/assets/images/industrialisierung-fabrik.jpg"
                    alt="Fabrik im 19. Jahrhundert"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                    <p className="text-soft-white/90 text-sm">
                      Eine Fabrik um 1850 — Symbol der Industrialisierung
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>

      {/* Interactive Timeline */}
      <div className="bg-soft-white section-padding">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8">
          <SectionWrapper>
            <div className="text-center mb-16">
              <InfoBadge>INTERAKTIVER ZEITSTRAHL</InfoBadge>
              <h2 className="font-display text-4xl font-bold text-dark-brown mt-4">
                Die wichtigsten Meilensteine
              </h2>
              <p className="mt-3 text-dark-brown/70">
                Klicke auf die einzelnen Ereignisse, um mehr zu erfahren.
              </p>
            </div>
          </SectionWrapper>

          <Timeline events={timelineEvents} />
        </div>
      </div>

      {/* Knowledge Check - Quiz */}
      <div className="bg-warm-sand section-padding">
        <div className="content-narrow">
          <SectionWrapper>
            <div className="text-center mb-12">
              <InfoBadge>WISSENSPRÜFUNG</InfoBadge>
              <h2 className="font-display text-4xl font-bold text-dark-brown mt-4">
                Teste dein Wissen
              </h2>
              <p className="mt-3 text-dark-brown/70">
                Beantworte die Fragen zur Geschichte der Sozialversicherung.
              </p>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={200}>
            <QuizQuestion
              key={currentQuestion}
              question={quizQuestions[currentQuestion].question}
              options={quizQuestions[currentQuestion].options}
              correctIndex={quizQuestions[currentQuestion].correctIndex}
              explanation={quizQuestions[currentQuestion].explanation}
              questionNumber={currentQuestion}
              totalQuestions={quizQuestions.length}
              onNext={() =>
                setCurrentQuestion((prev) =>
                  Math.min(prev + 1, quizQuestions.length - 1)
                )
              }
            />
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
