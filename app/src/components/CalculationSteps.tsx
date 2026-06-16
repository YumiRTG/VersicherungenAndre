import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface Step {
  number: string;
  title: string;
  formula: string;
  description: string;
}

interface CalculationStepsProps {
  steps: Step[];
  resultValue: string;
  resultLabel: string;
  resultSublabel: string;
}

export default function CalculationSteps({
  steps,
  resultValue,
  resultLabel,
  resultSublabel,
}: CalculationStepsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const stepCards = sectionRef.current.querySelectorAll('.calc-step');
    const formulas = sectionRef.current.querySelectorAll('.calc-formula');
    const resultBanner = sectionRef.current.querySelector('.result-banner');
    const connector = sectionRef.current.querySelector('.connector-line');

    // Connector line animation
    if (connector) {
      gsap.fromTo(
        connector,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'center center',
            scrub: 1,
          },
        }
      );
    }

    // Step cards stagger
    gsap.fromTo(
      stepCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Formula scaleX animation
    gsap.fromTo(
      formulas,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.4,
        stagger: 0.3,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Result banner
    if (resultBanner) {
      gsap.fromTo(
        resultBanner,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: resultBanner,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="space-y-0">
      {/* Connector line */}
      <div className="relative">
        <div className="connector-line absolute left-[23px] top-8 bottom-8 w-0.5 bg-muted-sage/40 origin-top hidden md:block" />

        {steps.map((step, index) => (
          <div key={index} className="calc-step relative flex gap-6 mb-8 last:mb-0">
            <div className="hidden md:flex w-12 h-12 rounded-full bg-deep-forest items-center justify-center text-soft-white font-semibold text-sm shrink-0 z-10">
              {step.number}
            </div>
            <div className="flex-1 bg-soft-white rounded-xl p-6 shadow-sm border border-mist/60">
              <h4 className="font-display font-semibold text-dark-brown text-lg mb-2">
                {step.title}
              </h4>
              <div className="calc-formula formula-block mb-3 origin-left">
                {step.formula}
              </div>
              <p className="text-dark-brown/80 text-[15px] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Result Banner */}
      <div className="result-banner mt-8 bg-deep-forest rounded-2xl p-8 text-center">
        <p className="text-soft-white/80 text-base mb-2">{resultLabel}</p>
        <p className="font-display text-5xl text-coral font-bold">{resultValue}</p>
        <p className="text-soft-white/60 text-sm mt-2">{resultSublabel}</p>
      </div>
    </div>
  );
}
