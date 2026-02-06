import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <a href="#main-content" className="skip-link">
        Vai al contenuto principale
      </a>
      <ScrollToTop />
      <Navbar />
      {/* Spacer to offset the fixed navbar on non-home pages.
          On the home page the hero already fills the viewport
          and sits behind the transparent navbar, so no spacer needed. */}
      {!isHome && <div className="h-[72px]" aria-hidden="true" />}
      <main id="main-content" className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
