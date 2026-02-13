import { useContent } from '../hooks/useContent';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const donationTypes = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Donazione Economica',
    description: 'Anche un piccolo contributo ci permette di acquistare materiali, strumenti, manufatti protesici e ortodontici e mantenere la struttura efficiente.',
    borderColor: 'border-t-secondary-400',
    iconBg: 'bg-secondary-50 text-secondary-500',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Donazione di Materiali',
    description: 'Materiali odontoiatrici, strumenti professionali, attrezzature medicali sono sempre necessari.',
    borderColor: 'border-t-primary-400',
    iconBg: 'bg-primary-50 text-primary-500',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Sostegno Aziendale',
    description: 'La tua azienda può sostenere le nostre attività attraverso donazioni, sponsorizzazioni, progetti di Corporate Social Responsibility (CSR).',
    borderColor: 'border-t-green-500',
    iconBg: 'bg-green-50 text-green-600',
  },
];

export default function SupportPage() {
  const { content } = useContent();
  const { supportPage, contact } = content;

  return (
    <div className="pt-24">
      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title={supportPage.title} />
            <p className="mx-auto -mt-4 mb-12 max-w-2xl text-center text-lg text-neutral-600">
              {supportPage.donateText}
            </p>
          </ScrollReveal>

          {/* Come Puoi Aiutarci */}
          <ScrollReveal>
            <h3 className="mb-8 text-center text-2xl font-bold text-neutral-900">Come Puoi Aiutarci</h3>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {donationTypes.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <Card className={`h-full border-t-4 ${item.borderColor}`}>
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modalità di Donazione */}
      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Modalità di Donazione" />
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Coordinate Bancarie */}
            <ScrollReveal delay={100}>
              <Card className="h-full">
                <h3 className="text-xl font-bold text-neutral-900">Coordinate Bancarie</h3>
                <div className="mt-4 space-y-3">
                  <div>
                    <span className="text-xs font-semibold uppercase text-neutral-500">Intestatario</span>
                    <p className="mt-1 text-sm text-neutral-800">Ambulatorio Odontoiatrico Solidale OdV</p>
                  </div>
                  {supportPage.donateIban && (
                    <div>
                      <span className="text-xs font-semibold uppercase text-neutral-500">IBAN</span>
                      <p className="mt-1 font-mono text-sm text-neutral-800">{supportPage.donateIban}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-xs font-semibold uppercase text-neutral-500">Causale</span>
                    <p className="mt-1 text-sm text-neutral-800">Donazione liberale</p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-neutral-500">
                  Deducibilità fiscale: Tutte le donazioni sono fiscalmente deducibili. Conserva la ricevuta del bonifico per la dichiarazione dei redditi.
                </p>
              </Card>
            </ScrollReveal>

            {/* 5x1000 */}
            <ScrollReveal delay={200}>
              <Card className="h-full">
                <h3 className="text-xl font-bold text-neutral-900">5x1000</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Puoi destinare il tuo 5x1000 all'Ambulatorio Odontoiatrico Solidale OdV. È un gesto che non ti costa nulla ma fa una grande differenza!
                </p>
                <div className="mt-4 rounded-lg bg-neutral-50 p-3">
                  <span className="text-xs font-semibold uppercase text-neutral-500">Codice Fiscale</span>
                  <p className="mt-1 font-mono text-sm text-neutral-800">XXXXXXXXXXXXXXXX</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  Indica semplicemente il nostro codice fiscale nella tua dichiarazione dei redditi, nell'apposita sezione dedicata al sostegno del volontariato.
                </p>
              </Card>
            </ScrollReveal>
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-12 text-center">
              <Button href={`mailto:${contact.email}?subject=Donazione`} size="lg">
                Contattaci per Donare
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
