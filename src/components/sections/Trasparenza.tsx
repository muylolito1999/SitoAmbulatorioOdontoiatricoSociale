import { useContent } from '../../hooks/useContent';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import ScrollReveal from '../ui/ScrollReveal';

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
                <div className="text-2xl font-extrabold text-primary-500">{item.value}</div>
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
