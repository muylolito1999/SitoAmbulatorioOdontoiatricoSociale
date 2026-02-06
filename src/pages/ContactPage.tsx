import { useState } from 'react';
import { useContent } from '../hooks/useContent';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';

export default function ContactPage() {
  const { content } = useContent();
  const { contact } = content;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(`Messaggio da ${name}`)}&body=${encodeURIComponent(`Da: ${name} (${email})\n\n${message}`)}`;

  return (
    <div className="pt-24">
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Contatti" subtitle="Come raggiungerci" />
          </ScrollReveal>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact info */}
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                    Email
                  </h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block text-lg text-primary-500 hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                    Telefono
                  </h3>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="mt-1 block text-lg text-primary-500 hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                    Indirizzo
                  </h3>
                  <p className="mt-1 text-lg text-neutral-700">{contact.address}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Mailto form */}
            <ScrollReveal delay={200}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700">
                    Nome
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2 text-neutral-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2 text-neutral-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700">
                    Messaggio
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2 text-neutral-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none resize-none"
                  />
                </div>
                <Button href={mailtoHref}>Invia con la tua email</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
