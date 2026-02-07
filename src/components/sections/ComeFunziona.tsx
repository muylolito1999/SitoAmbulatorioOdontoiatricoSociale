import { useContent } from '../../hooks/useContent';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

export default function ComeFunziona() {
  const { content } = useContent();
  const { comeFunziona } = content;
  const steps = comeFunziona.steps;

  return (
    <section id="come-funziona" className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title={comeFunziona.title} subtitle={comeFunziona.subtitle} />
        </ScrollReveal>

        {/* Desktop layout */}
        <div className="relative mx-auto hidden max-w-4xl md:block">
          {/* Horizontal connecting line */}
          <div className="absolute left-7 right-7 top-7 h-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-400" />

          <div className="relative flex justify-between">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 100}>
                <div className="relative flex w-32 flex-col items-center text-center lg:w-40">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-xl font-bold text-white shadow-lg shadow-primary-500/25 ring-4 ring-white">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-neutral-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.description}</p>

                  {/* Arrow chevron between steps */}
                  {i < steps.length - 1 && (
                    <svg
                      className="absolute -right-4 top-4 h-6 w-6 text-primary-400 lg:-right-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile layout — vertical with connecting line */}
        <div className="relative mx-auto max-w-sm md:hidden">
          {/* Vertical connecting line */}
          <div className="absolute left-7 top-0 h-full w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-secondary-400" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 100}>
              <div className="relative mb-8 flex items-start gap-4 last:mb-0">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-xl font-bold text-white shadow-lg shadow-primary-500/25 ring-4 ring-neutral-50">
                  {i + 1}
                </div>
                <div className="pt-2">
                  <h3 className="text-base font-bold text-neutral-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
