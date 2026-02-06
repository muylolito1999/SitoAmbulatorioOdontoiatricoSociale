import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { useContent } from '../../hooks/useContent';
import { cn } from '../../lib/cn';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Chi Siamo', href: '/about' },
  { label: 'Impatto', href: '/impact' },
  { label: 'Sostieni', href: '/support' },
  { label: 'Contatti', href: '/contact' },
];

export default function Navbar() {
  const { content } = useContent();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || menuOpen
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={cn(
            'text-xl font-bold transition-colors',
            scrolled || menuOpen ? 'text-primary-500' : 'text-white',
          )}
        >
          {content.navbar.brandName}
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                location.pathname === link.href
                  ? 'bg-primary-50 text-primary-600'
                  : scrolled
                    ? 'text-neutral-700 hover:bg-neutral-100 hover:text-primary-500'
                    : 'text-white/90 hover:text-white hover:bg-white/10',
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={cn(
            'relative z-50 flex h-10 w-10 items-center justify-center rounded-lg md:hidden',
            scrolled || menuOpen ? 'text-neutral-700' : 'text-white',
          )}
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                'block h-0.5 w-6 rounded-full bg-current transition-all duration-300',
                menuOpen && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-6 rounded-full bg-current transition-all duration-300',
                menuOpen && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-6 rounded-full bg-current transition-all duration-300',
                menuOpen && '-translate-y-2 -rotate-45',
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 md:hidden',
          menuOpen ? 'max-h-96' : 'max-h-0',
        )}
      >
        <div className="space-y-1 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                location.pathname === link.href
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-neutral-700 hover:bg-neutral-100',
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
