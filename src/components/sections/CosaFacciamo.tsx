import type { ReactNode } from 'react';
import { useContent } from '../../hooks/useContent';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import ScrollReveal from '../ui/ScrollReveal';

const borderColors = [
  'border-t-primary-500',
  'border-t-secondary-400',
  'border-t-primary-400',
  'border-t-secondary-500',
];

const iconBgColors = [
  'bg-primary-50 text-primary-500',
  'bg-secondary-50 text-secondary-500',
  'bg-primary-50 text-primary-400',
  'bg-secondary-50 text-secondary-400',
];

const iconMap: Record<string, ReactNode> = {
  '🦷': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C9.5 2 7 3.5 7 6.5c0 2 .5 3.5 1 5.5.5 2 1 4.5 1.5 7 .2.8.8 1 1.2 1h.6c.4 0 1-.2 1.2-1 .3-1.5.5-2.5.5-3.5s.2-2 .5-3.5c.5-2 1-3.5 1-5.5C14.5 3.5 14.5 2 12 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 6.5C7 3.5 9.5 2 12 2s5 1.5 5 4.5c0 2-.5 3.5-1 5.5-.5 2-1 4.5-1.5 7-.2.8-.8 1-1.2 1h-.6c-.4 0-1-.2-1.2-1-.5-2.5-1-5-1.5-7-.5-2-1-3.5-1-5.5z" />
    </svg>
  ),
  '⚕️': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16" />
      <circle cx="12" cy="12" r="10" strokeLinecap="round" />
    </svg>
  ),
  '🛡️': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  ),
  '😊': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M8 14s1.5 2 4 2 4-2 4-2" />
      <circle cx="9" cy="9.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="9.5" r="1" fill="currentColor" stroke="none" />
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
