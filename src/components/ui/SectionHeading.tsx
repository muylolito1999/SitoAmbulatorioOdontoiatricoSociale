import { cn } from '../../lib/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">{title}</h2>
      <div className={cn('mt-3 h-1 w-16 rounded-full bg-primary-500', centered && 'mx-auto')} />
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
