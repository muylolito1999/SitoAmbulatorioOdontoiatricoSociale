import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/cn';

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

function parseValue(raw: string) {
  const match = raw.match(/^([~€]*\s*€?\s*)([0-9.]+)(\+?)$/);
  if (!match) return null;
  const prefix = match[1]!;
  const numericStr = match[2]!;
  const suffix = match[3] || '';
  const useThousands = numericStr.includes('.');
  const numeric = Number(numericStr.replace(/\./g, ''));
  if (isNaN(numeric)) return null;
  return { prefix, numeric, suffix, useThousands };
}

function formatNumber(n: number, useThousands: boolean): string {
  if (!useThousands) return String(n);
  return n.toLocaleString('it-IT');
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function StatCard({ value, label, description, className }: StatCardProps) {
  const [visible, setVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animate = useCallback(() => {
    const parsed = parseValue(value);
    if (!parsed) {
      setDisplayValue(value);
      return;
    }

    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const current = Math.round(eased * parsed.numeric);
      setDisplayValue(`${parsed.prefix}${formatNumber(current, parsed.useThousands)}${parsed.suffix}`);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(tick);
      }
    };

    animationRef.current = requestAnimationFrame(tick);
  }, [value]);

  useEffect(() => {
    if (visible) {
      animate();
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [visible, animate]);

  return (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-500',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        className,
      )}
    >
      <div className="text-4xl font-extrabold tabular-nums text-primary-500 md:text-5xl">
        {displayValue}
      </div>
      <div className="mt-2 text-lg font-semibold text-neutral-700">{label}</div>
      {description && (
        <p className="mt-1 text-sm text-neutral-500">{description}</p>
      )}
    </div>
  );
}
