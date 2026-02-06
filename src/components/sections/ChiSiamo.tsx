import { useContent } from '../../hooks/useContent';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

export default function ChiSiamo() {
  const { content } = useContent();
  const { chiSiamo } = content;

  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title={chiSiamo.title} />
        </ScrollReveal>
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <ScrollReveal delay={100}>
            <p className="text-lg leading-relaxed text-neutral-700">
              {chiSiamo.description}
            </p>
          </ScrollReveal>
          {chiSiamo.image && (
            <ScrollReveal delay={200}>
              <img
                src={chiSiamo.image}
                alt="Il nostro ambulatorio"
                className="rounded-2xl shadow-lg"
              />
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
