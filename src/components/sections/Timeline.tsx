import { useState } from 'react';
import { useContent } from '../../hooks/useContent';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

function ImageLightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <button type="button" onClick={onClose} className="absolute right-4 top-4 text-white/80 hover:text-white" aria-label="Chiudi">
        <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img src={src} alt="" className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default function Timeline() {
  const { content } = useContent();
  const { timeline } = content;
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      {lightbox && <ImageLightbox src={lightbox} onClose={() => setLightbox(null)} />}

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title={timeline.title} subtitle={timeline.subtitle} />
          </ScrollReveal>
          <div className="relative mx-auto max-w-3xl">
            {/* Gradient vertical line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-secondary-400 md:left-1/2 md:-translate-x-px" />

            {timeline.events.map((event, i) => (
              <ScrollReveal key={event.date} delay={i * 100}>
                <div className={`relative mb-12 flex items-start md:mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* 3-layer dot */}
                  <div className="absolute left-4 top-1 z-10 -translate-x-1/2 md:left-1/2">
                    {/* Pulse ring */}
                    <div className="absolute inset-0 h-5 w-5 rounded-full bg-primary-400/30 animate-ringPulse" />
                    {/* Border circle */}
                    <div className="relative flex h-5 w-5 items-center justify-center rounded-full border-[3px] border-primary-500 bg-white">
                      {/* Inner dot */}
                      <div className="h-2 w-2 rounded-full bg-primary-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
                    <span className="inline-block rounded-full bg-primary-500 px-3 py-1 text-sm font-semibold text-white shadow-sm">
                      {event.date}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-neutral-900">{event.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{event.description}</p>

                    {/* Images */}
                    {event.images && event.images.length > 0 && (
                      <div className={`mt-3 ${event.images.length === 1 ? '' : 'grid grid-cols-2 gap-2'}`}>
                        {event.images.map((img, idx) => (
                          <button
                            key={img}
                            type="button"
                            onClick={() => setLightbox(img)}
                            className={`overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.02] ${
                              event.images!.length === 3 && idx === 0 ? 'col-span-2' : ''
                            }`}
                          >
                            <img
                              src={img}
                              alt={`${event.title} ${idx + 1}`}
                              className="h-auto w-full object-cover"
                              loading="lazy"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
