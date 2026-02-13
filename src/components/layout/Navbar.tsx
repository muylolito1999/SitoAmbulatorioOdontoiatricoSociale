import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router';
import { useContent } from '../../hooks/useContent';
import { cn } from '../../lib/cn';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Chi Siamo', href: '/about' },
  { label: 'Impatto', href: '/impact' },
  { label: 'Sostieni', href: '/support' },
  { label: 'Volontariato', href: '/volunteer' },
  { label: 'Contatti', href: '/contact' },
];

/** Scroll‑direction threshold in px – avoids jitter on tiny scrolls */
const SCROLL_DELTA = 8;
/** Distance from top where the header is always visible */
const TOP_ZONE = 60;

export default function Navbar() {
  const { content } = useContent();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);

  const isHome = location.pathname === '/';

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const updateHeader = useCallback(() => {
    const currentY = window.scrollY;
    const delta = currentY - lastScrollY.current;

    // Always show near the top of the page
    if (currentY <= TOP_ZONE) {
      setVisible(true);
      setAtTop(true);
    } else {
      setAtTop(false);
      // Only toggle visibility when scroll exceeds the delta threshold
      if (delta > SCROLL_DELTA) {
        // Scrolling DOWN → hide (unless mobile menu is open)
        if (!menuOpen) setVisible(false);
      } else if (delta < -SCROLL_DELTA) {
        // Scrolling UP → show
        setVisible(true);
      }
    }

    lastScrollY.current = currentY;
    ticking.current = false;
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateHeader);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [updateHeader]);

  // Close mobile menu on route change & reset visibility
  useEffect(() => {
    setMenuOpen(false);
    setVisible(true);
  }, [location.pathname]);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  // Determine whether to use solid (white) or transparent styling
  const isSolid = !isHome || !atTop || menuOpen;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300 will-change-transform',
        visible ? 'translate-y-0' : '-translate-y-full',
        isSolid
          ? 'bg-white/95 shadow-sm ring-1 ring-black/5 backdrop-blur-sm'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={cn(
            'text-xl font-bold transition-colors',
            isSolid ? 'text-primary-500' : 'text-white',
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
                  : isSolid
                    ? 'text-neutral-700 hover:bg-neutral-100 hover:text-primary-500'
                    : 'text-white/90 hover:bg-white/10 hover:text-white',
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={handleMenuToggle}
          className={cn(
            'relative z-50 flex h-10 w-10 items-center justify-center rounded-lg md:hidden',
            isSolid ? 'text-neutral-700' : 'text-white',
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
