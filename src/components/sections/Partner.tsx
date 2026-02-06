import { useContent } from '../../hooks/useContent';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

export default function Partner() {
  const { content } = useContent();
  const { partner } = content;

  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title={partner.title} subtitle={partner.subtitle} />
        </ScrollReveal>
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 md:grid-cols-3">
          {partner.partners.map((name, i) => (
            <ScrollReveal key={name} delay={i * 80}>
              <div className="rounded-xl border border-neutral-200 bg-white px-6 py-5 text-center font-semibold text-neutral-700 shadow-sm transition-all hover:shadow-md hover:border-primary-200">
                {name}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
