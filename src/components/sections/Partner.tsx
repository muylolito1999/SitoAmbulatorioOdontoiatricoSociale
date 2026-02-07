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
              <div className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white px-6 py-5 text-center font-semibold text-neutral-700 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary-400">
                {/* Star icon on hover */}
                <svg
                  className="absolute right-2 top-2 h-4 w-4 text-secondary-400 opacity-0 transition-opacity group-hover:opacity-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <span className="transition-colors group-hover:text-primary-600">{name}</span>

                {/* Bottom gradient accent bar */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
