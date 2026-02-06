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
  return (
    <>
      <a href="#main-content" className="skip-link">
        Vai al contenuto principale
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
