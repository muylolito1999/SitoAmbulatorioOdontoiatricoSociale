import { useContent } from '../hooks/useContent';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import Accordion from '../components/ui/Accordion';

const sectionCards = [
  { key: 'mission', label: 'La nostra missione', field: 'mission' as const, borderColor: 'border-l-primary-500' },
  { key: 'vision', label: 'La nostra visione', field: 'vision' as const, borderColor: 'border-l-secondary-400' },
  { key: 'history', label: 'La nostra storia', field: 'history' as const, borderColor: 'border-l-primary-400' },
];

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

          <div className="space-y-6">
            {sectionCards.map((card, i) => (
              <ScrollReveal key={card.key} delay={i * 100}>
                <div className={`rounded-xl border-l-4 ${card.borderColor} bg-white p-6 shadow-sm`}>
                  <h3 className="text-xl font-bold text-primary-500">{card.label}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-neutral-700">{about[card.field]}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
                    className="rounded-lg border-l-2 border-l-primary-200 bg-white px-4 py-3 text-neutral-700 shadow-sm transition-all hover:border-l-primary-500 hover:shadow-md"
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
                    className="rounded-lg border-l-2 border-l-secondary-200 bg-white px-4 py-3 shadow-sm transition-all hover:border-l-secondary-400 hover:shadow-md"
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
