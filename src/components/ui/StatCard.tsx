import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/cn';

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export default function StatCard({ value, label, description, className }: StatCardProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-500',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        className,
      )}
    >
      <div className="text-4xl font-extrabold text-primary-500 md:text-5xl">
        {visible ? value : '—'}
      </div>
      <div className="mt-2 text-lg font-semibold text-neutral-700">{label}</div>
      {description && (
        <p className="mt-1 text-sm text-neutral-500">{description}</p>
      )}
    </div>
  );
}
