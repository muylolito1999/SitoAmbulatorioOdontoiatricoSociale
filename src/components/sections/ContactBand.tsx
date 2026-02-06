import { useContent } from '../../hooks/useContent';
import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';

export default function ContactBand() {
  const { content } = useContent();
  const { contactBand, contact } = content;

  return (
    <section className="bg-primary-600 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white md:text-4xl">{contactBand.title}</h2>
          <p className="mt-4 text-lg text-white/80">{contactBand.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              href={`mailto:${contact.email}`}
            >
              Scrivici
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="border-white text-white hover:bg-white/10"
            >
              {contact.phone}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
