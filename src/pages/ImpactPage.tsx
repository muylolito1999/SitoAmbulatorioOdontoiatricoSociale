import { useContent } from '../hooks/useContent';
import SectionHeading from '../components/ui/SectionHeading';
import StatCard from '../components/ui/StatCard';
import ScrollReveal from '../components/ui/ScrollReveal';

const patientSources = [
  { label: 'Servizi sociali', value: 72, color: '#0d7377' },
  { label: 'Caritas', value: 41, color: '#d4a853' },
  { label: 'Privati / Altro', value: 20, color: '#64748b' },
];

const maxSourceValue = Math.max(...patientSources.map((s) => s.value));

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
      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Provenienza dei pazienti"
              subtitle="Come arrivano le persone al nostro ambulatorio"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              {patientSources.map((source) => (
                <div key={source.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-neutral-700">{source.label}</span>
                    <span className="text-sm font-bold text-neutral-900">{source.value}</span>
                  </div>
                  <div className="h-8 w-full overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${(source.value / maxSourceValue) * 100}%`,
                        backgroundColor: source.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Simple SVG donut */}
          <ScrollReveal delay={200}>
            <div className="mt-16 flex flex-col items-center">
              <svg viewBox="0 0 200 200" className="h-48 w-48">
                {(() => {
                  const total = patientSources.reduce((s, p) => s + p.value, 0);
                  let offset = 0;
                  const circumference = 2 * Math.PI * 70;
                  return patientSources.map((source) => {
                    const pct = source.value / total;
                    const dashArray = `${pct * circumference} ${circumference}`;
                    const dashOffset = -offset * circumference;
                    offset += pct;
                    return (
                      <circle
                        key={source.label}
                        cx="100"
                        cy="100"
                        r="70"
                        fill="none"
                        stroke={source.color}
                        strokeWidth="30"
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        transform="rotate(-90 100 100)"
                      />
                    );
                  });
                })()}
              </svg>
              <div className="mt-6 flex flex-wrap justify-center gap-6">
                {patientSources.map((source) => (
                  <div key={source.label} className="flex items-center gap-2 text-sm">
                    <span
                      className="inline-block h-3 w-3 rounded-full"
                      style={{ backgroundColor: source.color }}
                    />
                    <span className="text-neutral-700">{source.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
