import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionWrapper({ children, className = '', delay = 0 }: SectionWrapperProps) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[600ms] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      }}
    >
      {children}
    </div>
  );
}
