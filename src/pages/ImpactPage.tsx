import { useEffect, useRef, useState } from 'react';
import { useContent } from '../hooks/useContent';
import SectionHeading from '../components/ui/SectionHeading';
import StatCard from '../components/ui/StatCard';
import ScrollReveal from '../components/ui/ScrollReveal';

const patientSources = [
  { label: 'Servizi sociali', value: 72, color: '#0059ff' },
  { label: 'Caritas', value: 41, color: '#d4a853' },
  { label: 'Privati / Altro', value: 20, color: '#64748b' },
];

const maxSourceValue = Math.max(...patientSources.map((s) => s.value));

function BarItem({ source, delay }: { source: typeof patientSources[number]; delay: number }) {
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
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-neutral-700">{source.label}</span>
        <span className="text-sm font-bold text-neutral-900">{source.value}</span>
      </div>
      <div className="h-8 w-full overflow-hidden rounded-full bg-neutral-200">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${(source.value / maxSourceValue) * 100}%` : '0%',
            backgroundColor: source.color,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function ImpactPage() {
  const { content } = useContent();
  const { impatto } = content;

  return (
    <div className="pt-24">
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title={impatto.title} subtitle={impatto.subtitle} />
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impatto.stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SVG Chart: Patient sources */}
      <section className="bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Provenienza dei pazienti"
              subtitle="Distribuzione per canale di invio (settembre 2023 — dicembre 2024, 133 pazienti)"
            />
          </ScrollReveal>
          <div className="space-y-6">
            {patientSources.map((source, i) => (
              <BarItem key={source.label} source={source} delay={i * 200} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
