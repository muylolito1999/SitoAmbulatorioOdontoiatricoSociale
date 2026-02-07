import type { ReactNode } from 'react';
import { useContent } from '../../hooks/useContent';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import ScrollReveal from '../ui/ScrollReveal';

const icons: ReactNode[] = [
  // Chart / bar graph
  <svg key="chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17V11m4 6V7m4 10v-4m4 4V9" />
  </svg>,
  // Gift
  <svg key="gift" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13M3 12h18v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1-2-4-4-5-3s0 3 5 3m0 0c1-2 4-4 5-3s0 3-5 3" />
  </svg>,
  // Building
  <svg key="building" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l8-4v18m6 0V11l-6-2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h1m-1 4h1m-1 4h1" />
  </svg>,
];

export default function Trasparenza() {
  const { content } = useContent();
  const { trasparenza } = content;

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title={trasparenza.title} subtitle={trasparenza.subtitle} />
        </ScrollReveal>
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {trasparenza.highlights.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 100}>
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                  {icons[i % icons.length]}
                </div>
                <div className="text-3xl font-extrabold text-primary-500 md:text-4xl">{item.value}</div>
                <div className="mt-2 text-sm font-semibold text-neutral-700">{item.label}</div>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500">{item.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        {trasparenza.note && (
          <ScrollReveal delay={400}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm italic text-neutral-500">
              {trasparenza.note}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
