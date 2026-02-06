import { useContent } from '../../hooks/useContent';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import ScrollReveal from '../ui/ScrollReveal';

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
              <Card className="h-full">
                <div className="mb-4 text-4xl">{card.icon}</div>
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
