import { useContent } from '../../hooks/useContent';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

export default function Timeline() {
  const { content } = useContent();
  const { timeline } = content;

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title={timeline.title} subtitle={timeline.subtitle} />
        </ScrollReveal>
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-primary-200 md:left-1/2 md:-translate-x-px" />

          {timeline.events.map((event, i) => (
            <ScrollReveal key={event.date} delay={i * 100}>
              <div className={`relative mb-10 flex items-start md:mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Dot */}
                <div className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary-500 bg-white md:left-1/2" />

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
                  <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-600">
                    {event.date}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-neutral-900">{event.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{event.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
