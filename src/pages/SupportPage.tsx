import { useContent } from '../hooks/useContent';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function SupportPage() {
  const { content } = useContent();
  const { supportPage, contact } = content;

  return (
    <div className="pt-24">
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title={supportPage.title} />
            <p className="mx-auto -mt-4 mb-12 max-w-2xl text-center text-lg text-neutral-600">
              {supportPage.description}
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal delay={100}>
              <Card className="h-full border-t-4 border-t-secondary-400">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary-50 text-secondary-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Dona</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {supportPage.donateText}
                </p>
                {supportPage.donateIban && (
                  <div className="mt-4 rounded-lg bg-neutral-50 p-3">
                    <span className="text-xs font-semibold uppercase text-neutral-500">IBAN</span>
                    <p className="mt-1 font-mono text-sm text-neutral-800">{supportPage.donateIban}</p>
                  </div>
                )}
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full border-t-4 border-t-primary-400">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Diventa volontario</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {supportPage.volunteerText}
                </p>
                <div className="mt-6">
                  <Button href={`mailto:${contact.email}?subject=Volontariato`} size="sm">
                    Contattaci
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
