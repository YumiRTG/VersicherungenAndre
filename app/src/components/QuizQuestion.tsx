import { useState } from 'react';
import { Check, X } from 'lucide-react';

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  questionNumber: number;
  totalQuestions: number;
  onNext?: () => void;
}

export default function QuizQuestion({
  question,
  options,
  correctIndex,
  explanation,
  questionNumber,
  totalQuestions,
  onNext,
}: QuizQuestionProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (index: number) => {
    if (revealed) return;
    setSelected(index);
  };

  const handleReveal = () => {
    if (selected === null) return;
    setRevealed(true);
  };

  const handleNext = () => {
    setSelected(null);
    setRevealed(false);
    onNext?.();
  };

  return (
    <div className="bg-soft-white border border-mist rounded-2xl p-8 shadow-card">
      {/* Progress dots */}
      <div className="flex gap-2 mb-6">
        {Array.from({ length: totalQuestions }).map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i < questionNumber
                ? 'bg-coral scale-100'
                : i === questionNumber
                ? 'bg-deep-forest scale-110'
                : 'bg-mist'
            }`}
          />
        ))}
      </div>

      <h3 className="font-display text-xl font-semibold text-dark-brown mb-6">
        {question}
      </h3>

      <div className="space-y-3">
        {options.map((option, index) => {
          let optionClass =
            'w-full text-left p-4 rounded-xl border-[1.5px] transition-all duration-200 flex items-center gap-3';

          if (revealed) {
            if (index === correctIndex) {
              optionClass += ' border-deep-forest bg-deep-forest/10';
            } else if (index === selected && index !== correctIndex) {
              optionClass += ' border-coral bg-coral/10';
            } else {
              optionClass += ' border-mist opacity-50';
            }
          } else if (index === selected) {
            optionClass += ' border-deep-forest bg-light-sage/50';
          } else {
            optionClass += ' border-mist hover:border-muted-sage bg-soft-white';
          }

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={optionClass}
              disabled={revealed}
            >
              {revealed && index === correctIndex && (
                <Check className="w-5 h-5 text-deep-forest shrink-0" />
              )}
              {revealed && index === selected && index !== correctIndex && (
                <X className="w-5 h-5 text-coral shrink-0" />
              )}
              {!(revealed && (index === correctIndex || (index === selected && index !== correctIndex))) && (
                <span className="w-5 h-5 rounded-full border-2 border-muted-sage flex items-center justify-center shrink-0">
                  {index === selected && <span className="w-2.5 h-2.5 rounded-full bg-deep-forest" />}
                </span>
              )}
              <span className="text-dark-brown">{option}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex gap-4">
        {!revealed ? (
          <button
            onClick={handleReveal}
            disabled={selected === null}
            className={`py-3 px-8 border-[1.5px] border-mist rounded-lg text-sm font-medium transition-all ${
              selected !== null
                ? 'text-dark-brown hover:border-coral hover:text-coral'
                : 'text-dark-brown/30 cursor-not-allowed'
            }`}
          >
            Lösung anzeigen
          </button>
        ) : (
          <>
            <div
              className={`flex-1 p-4 rounded-xl ${
                selected === correctIndex
                  ? 'bg-deep-forest/10 border border-deep-forest/20'
                  : 'bg-coral/10 border border-coral/20'
              }`}
            >
              <p className="font-semibold text-sm mb-1">
                {selected === correctIndex ? 'Richtig!' : 'Leider falsch.'}
              </p>
              <p className="text-sm text-dark-brown/80">{explanation}</p>
            </div>
            {onNext && questionNumber < totalQuestions - 1 && (
              <button
                onClick={handleNext}
                className="self-start py-3 px-8 bg-coral text-soft-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-dark-brown transition-colors"
              >
                Nächste Frage
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
