import { useContent } from '../hooks/useContent';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const professionalRoles = [
  'Odontoiatri',
  'Igienisti dentali',
  'Assistenti alla poltrona',
  'Odontotecnici',
];

const supportRoles = [
  'Accoglienza pazienti',
  'Gestione appuntamenti',
  'Supporto amministrativo',
  'Comunicazione e fundraising',
];

const benefits = [
  'Formazione continua e aggiornamento professionale a cadenza mensile',
  'Assicurazione per lo svolgimento dell\'attività',
  'Attestati di partecipazione e certificazioni',
];

export default function VolunteerPage() {
  const { content } = useContent();
  const { contact } = content;

  return (
    <div className="pt-24">
      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Diventa Volontario" />
            <p className="mx-auto -mt-4 mb-12 max-w-2xl text-center text-lg text-neutral-600">
              L'ambulatorio vive grazie al contributo di volontari che mettono a disposizione il loro tempo, le loro competenze e la loro passione per aiutare chi ha bisogno.
            </p>
          </ScrollReveal>

          {/* Cerchiamo Volontari */}
          <ScrollReveal>
            <h3 className="mb-8 text-center text-2xl font-bold text-neutral-900">Cerchiamo Volontari</h3>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal delay={100}>
              <Card className="h-full border-t-4 border-t-primary-400">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Professionisti Sanitari</h3>
                <ul className="mt-4 space-y-2">
                  {professionalRoles.map((role) => (
                    <li key={role} className="flex items-center gap-2 text-sm text-neutral-700">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      {role}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full border-t-4 border-t-secondary-400">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary-50 text-secondary-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Supporto Organizzativo</h3>
                <ul className="mt-4 space-y-2">
                  {supportRoles.map((role) => (
                    <li key={role} className="flex items-center gap-2 text-sm text-neutral-700">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-500" />
                      {role}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cosa Offriamo */}
      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Che Cosa Offriamo ai Volontari" />
          </ScrollReveal>
          <ScrollReveal>
            <div className="mx-auto max-w-2xl">
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-neutral-700">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-12 text-center">
              <p className="mb-6 text-lg text-neutral-600">
                Sei interessato? Contattaci per maggiori informazioni su come diventare volontario. Ogni contributo, anche di poche ore al mese, fa la differenza!
              </p>
              <Button href={`mailto:${contact.email}?subject=Volontariato`} size="lg">
                Contattaci per il Volontariato
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
