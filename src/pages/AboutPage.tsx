import { useContent } from '../hooks/useContent';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import Accordion from '../components/ui/Accordion';

export default function AboutPage() {
  const { content } = useContent();
  const { about, founders, board } = content;

  return (
    <div className="pt-24">
      {/* Mission */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title={about.title} />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-primary-500">La nostra missione</h3>
                <p className="mt-3 text-lg leading-relaxed text-neutral-700">{about.mission}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-500">La nostra visione</h3>
                <p className="mt-3 text-lg leading-relaxed text-neutral-700">{about.vision}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-500">La nostra storia</h3>
                <p className="mt-3 text-lg leading-relaxed text-neutral-700">{about.history}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Founders & Board */}
      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Accordion title={founders.title} defaultOpen>
              <ul className="grid gap-2 sm:grid-cols-2">
                {founders.names.map((name) => (
                  <li
                    key={name}
                    className="rounded-lg bg-white px-4 py-3 text-neutral-700 shadow-sm"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </Accordion>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Accordion title={board.title}>
              <ul className="grid gap-2 sm:grid-cols-2">
                {board.members.map((member) => (
                  <li
                    key={member.name}
                    className="rounded-lg bg-white px-4 py-3 shadow-sm"
                  >
                    <span className="font-semibold text-neutral-800">{member.name}</span>
                    <span className="ml-2 text-sm text-neutral-500">{member.role}</span>
                  </li>
                ))}
              </ul>
            </Accordion>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
