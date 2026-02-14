import { Link } from 'react-router';
import { useContent } from '../../hooks/useContent';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Chi Siamo', href: '/about' },
  { label: 'Impatto', href: '/impact' },
  { label: 'Sostieni', href: '/support' },
  { label: 'Volontariato', href: '/volunteer' },
  { label: 'Contatti', href: '/contact' },
];

export default function Footer() {
  const { content } = useContent();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="" className="h-8 w-auto" />
              <h3 className="text-lg font-bold text-white">{content.navbar.brandName}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              {content.footer.description}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Navigazione
            </h4>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Contatti
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {content.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${content.contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {content.contact.phone}
                </a>
              </li>
              <li>{content.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} {content.navbar.brandName} &mdash;
            Associazione di Volontariato
          </p>
          <p className="mt-4 text-xs text-neutral-600">
            L'Ambulatorio Odontoiatrico Solidale OdV tratta i dati personali nel pieno rispetto del GDPR (Reg. UE 2016/679). Per maggiori informazioni, contattare la segreteria.
          </p>
        </div>
      </div>
    </footer>
  );
}
