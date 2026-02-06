import { useContent } from '../../hooks/useContent';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

export default function ComeFunziona() {
  const { content } = useContent();
  const { comeFunziona } = content;

  return (
    <section id="come-funziona" className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title={comeFunziona.title} subtitle={comeFunziona.subtitle} />
        </ScrollReveal>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-5">
          {comeFunziona.steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 100}>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-xl font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-base font-bold text-neutral-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
