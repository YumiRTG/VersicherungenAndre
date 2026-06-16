interface InfoBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'light' | 'inverted' | 'coral';
  className?: string;
}

export default function InfoBadge({ children, variant = 'default', className = '' }: InfoBadgeProps) {
  const styles = {
    default: 'bg-light-sage text-deep-forest',
    light: 'bg-soft-white/20 text-soft-white border border-soft-white/30',
    inverted: 'bg-deep-forest text-soft-white',
    coral: 'bg-coral text-soft-white',
  };

  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.06em] ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
