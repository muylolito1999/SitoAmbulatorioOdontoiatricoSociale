import type { ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { cn } from '../../lib/cn';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className, delay }: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn('reveal', className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
