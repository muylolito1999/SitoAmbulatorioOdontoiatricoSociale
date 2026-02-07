import { useContent } from '../../hooks/useContent';
import SectionHeading from '../ui/SectionHeading';
import StatCard from '../ui/StatCard';
import ScrollReveal from '../ui/ScrollReveal';

export default function Impatto() {
  const { content } = useContent();
  const { impatto } = content;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-500 to-primary-600 py-20 sm:py-28">
      {/* Decorative orbs */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title={impatto.title}
            subtitle={impatto.subtitle}
            className="[&_h2]:text-white [&_p]:text-white/80 [&_div.h-1]:bg-secondary-400"
          />
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
  );
}
