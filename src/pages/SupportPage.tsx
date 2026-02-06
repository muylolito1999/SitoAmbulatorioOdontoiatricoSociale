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
              <Card className="h-full">
                <div className="mb-4 text-4xl">💝</div>
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
              <Card className="h-full">
                <div className="mb-4 text-4xl">🤝</div>
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
