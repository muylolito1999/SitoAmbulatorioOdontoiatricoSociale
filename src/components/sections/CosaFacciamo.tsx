import type { ReactNode } from 'react';
import { useContent } from '../../hooks/useContent';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import ScrollReveal from '../ui/ScrollReveal';

const borderColors = [
  'border-t-primary-500',
  'border-t-secondary-400',
  'border-t-green-500',
  'border-t-red-400',
];

const iconBgColors = [
  'bg-primary-50 text-primary-500',
  'bg-secondary-50 text-secondary-500',
  'bg-green-50 text-green-600',
  'bg-red-50 text-red-500',
];

const iconMap: Record<string, ReactNode> = {
  '🤝': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 3h5v5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 3H3v5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c2-2 8-5 8-10V5l-3-2-5 3-5-3-3 2v7c0 5 6 8 8 10z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11h2l1 1 2-2 2 2 1-1" />
    </svg>
  ),
  '🦷': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C9.5 2 7 3.5 7 6.5c0 2 .5 3.5 1 5.5.5 2 1 4.5 1.5 7 .2.8.8 1 1.2 1h.6c.4 0 1-.2 1.2-1 .3-1.5.5-2.5.5-3.5s.2-2 .5-3.5c.5-2 1-3.5 1-5.5C14.5 3.5 14.5 2 12 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 6.5C7 3.5 9.5 2 12 2s5 1.5 5 4.5c0 2-.5 3.5-1 5.5-.5 2-1 4.5-1.5 7-.2.8-.8 1-1.2 1h-.6c-.4 0-1-.2-1.2-1-.5-2.5-1-5-1.5-7-.5-2-1-3.5-1-5.5z" />
    </svg>
  ),
  '🛡️': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  ),
  '❤️': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
};

export default function CosaFacciamo() {
  const { content } = useContent();
  const { cosaFacciamo } = content;

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title={cosaFacciamo.title} subtitle={cosaFacciamo.subtitle} />
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cosaFacciamo.cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 100}>
              <Card className={`h-full border-t-4 ${borderColors[i % borderColors.length]}`}>
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${iconBgColors[i % iconBgColors.length]}`}>
                  {iconMap[card.icon] ?? <span className="text-2xl">{card.icon}</span>}
                </div>
                <h3 className="text-lg font-bold text-neutral-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {card.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
