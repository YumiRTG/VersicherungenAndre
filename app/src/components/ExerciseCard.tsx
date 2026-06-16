import { useState, useRef } from 'react';
import { Check, X, Lightbulb } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import InfoBadge from './InfoBadge';

interface SolutionStep {
  title: string;
  content: string;
}

interface ExerciseCardProps {
  taskNumber: string;
  title: string;
  scenario: string;
  question: string;
  hint?: string;
  inputs: { label: string; suffix?: string; correctValue: number; tolerance?: number }[];
  solutionSteps: SolutionStep[];
  finalResult: string;
  isTextExercise?: boolean;
  textSolution?: string[];
}

export default function ExerciseCard({
  taskNumber,
  title,
  scenario,
  question,
  hint,
  inputs,
  solutionSteps,
  finalResult,
  isTextExercise,
  textSolution,
}: ExerciseCardProps) {
  const [values, setValues] = useState<string[]>(inputs.map(() => ''));
  const [textAnswer, setTextAnswer] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [showSolution, setShowSolution] = useState(false);
  const solutionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (showSolution && solutionRef.current) {
      gsap.fromTo(
        solutionRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [showSolution]);

  const validate = () => {
    if (isTextExercise) {
      setStatus(textAnswer.trim().length > 20 ? 'correct' : 'incorrect');
      return;
    }

    let allCorrect = true;
    for (let i = 0; i < inputs.length; i++) {
      const val = parseFloat(values[i].replace(',', '.').replace('€', '').trim());
      const tolerance = inputs[i].tolerance ?? 0.02;
      if (isNaN(val) || Math.abs(val - inputs[i].correctValue) > tolerance) {
        allCorrect = false;
        break;
      }
    }
    setStatus(allCorrect ? 'correct' : 'incorrect');
  };

  const getInputBorderClass = (_index: number) => {
    if (status === 'correct') return 'border-deep-forest bg-deep-forest/5';
    if (status === 'incorrect') return 'border-coral bg-coral/5';
    return 'border-mist focus:border-deep-forest';
  };

  return (
    <div className="bg-soft-white border border-mist rounded-2xl p-8 shadow-card">
      <div className="flex items-center gap-3 mb-4">
        <InfoBadge variant="coral">{taskNumber}</InfoBadge>
      </div>
      <h3 className="font-display text-xl font-semibold text-dark-brown mb-4">{title}</h3>

      <div className="bg-warm-sand/50 rounded-xl p-5 mb-4">
        <p className="text-dark-brown/80 italic">{scenario}</p>
      </div>

      <p className="text-dark-brown font-medium mb-6">{question}</p>

      {hint && (
        <div className="flex items-start gap-3 bg-light-sage/40 rounded-xl p-4 mb-6">
          <Lightbulb className="w-5 h-5 text-muted-sage shrink-0 mt-0.5" />
          <p className="text-sm text-dark-brown/80">{hint}</p>
        </div>
      )}

      {isTextExercise ? (
        <textarea
          value={textAnswer}
          onChange={(e) => setTextAnswer(e.target.value)}
          placeholder="Deine Erläuterung..."
          className="w-full min-h-[120px] p-4 border-2 border-mist rounded-xl text-dark-brown placeholder:text-dark-brown/30 focus:border-deep-forest focus:outline-none transition-colors resize-vertical"
        />
      ) : (
        <div className={`grid gap-4 mb-6 ${inputs.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
          {inputs.map((input, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-dark-brown mb-2">{input.label}</label>
              <div className="relative">
                <input
                  type="text"
                  value={values[index]}
                  onChange={(e) => {
                    setValues((prev) => {
                      const next = [...prev];
                      next[index] = e.target.value;
                      return next;
                    });
                    setStatus('idle');
                  }}
                  placeholder="Dein Ergebnis..."
                  className={`w-full p-4 pr-12 border-2 rounded-xl text-dark-brown placeholder:text-dark-brown/30 focus:outline-none transition-all duration-200 ${getInputBorderClass(index)}`}
                />
                {input.suffix && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-brown/40">
                    {input.suffix}
                  </span>
                )}
                {status === 'correct' && (
                  <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-deep-forest" />
                )}
                {status === 'incorrect' && (
                  <X className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-coral" />
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {status === 'correct' && (
        <div className="flex items-start gap-3 bg-deep-forest/10 border border-deep-forest/20 rounded-xl p-4 mb-4">
          <Check className="w-5 h-5 text-deep-forest shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-deep-forest text-sm">Richtig!</p>
            <p className="text-sm text-dark-brown/80">{finalResult}</p>
          </div>
        </div>
      )}

      {status === 'incorrect' && !showSolution && (
        <div className="flex items-start gap-3 bg-coral/10 border border-coral/20 rounded-xl p-4 mb-4 animate-shake">
          <X className="w-5 h-5 text-coral shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-coral text-sm">Das ist noch nicht ganz richtig.</p>
            <p className="text-sm text-dark-brown/80">Versuche es noch einmal!</p>
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <button
          onClick={validate}
          className="py-3.5 px-10 bg-coral text-soft-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-dark-brown transition-colors"
        >
          {isTextExercise ? 'Lösung anzeigen' : 'Überprüfen'}
        </button>
        {!showSolution && status === 'incorrect' && !isTextExercise && (
          <button
            onClick={() => setShowSolution(true)}
            className="py-3.5 px-8 border-[1.5px] border-mist rounded-lg text-sm font-medium text-dark-brown hover:border-coral hover:text-coral transition-colors"
          >
            Schritt-für-Schritt-Lösung
          </button>
        )}
      </div>

      {/* Solution Accordion */}
      {showSolution && (
        <div ref={solutionRef} className="mt-6 overflow-hidden">
          <div className="bg-light-sage/30 border border-light-sage rounded-xl p-6">
            <h4 className="font-display font-semibold text-deep-forest mb-4">Lösung</h4>
            {isTextExercise && textSolution ? (
              <ul className="space-y-2">
                {textSolution.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-dark-brown/80 text-[15px]">
                    <Check className="w-4 h-4 text-deep-forest shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="space-y-4">
                {solutionSteps.map((step, i) => (
                  <div key={i}>
                    <p className="font-semibold text-dark-brown text-sm mb-1">{step.title}</p>
                    <p className="text-dark-brown/80 text-[15px]">{step.content}</p>
                  </div>
                ))}
                <div className="pt-3 border-t border-muted-sage/30">
                  <p className="font-semibold text-deep-forest">{finalResult}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
