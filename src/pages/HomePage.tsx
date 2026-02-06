import Hero from '../components/sections/Hero';
import ChiSiamo from '../components/sections/ChiSiamo';
import CosaFacciamo from '../components/sections/CosaFacciamo';
import Impatto from '../components/sections/Impatto';
import Timeline from '../components/sections/Timeline';
import ComeFunziona from '../components/sections/ComeFunziona';
import Trasparenza from '../components/sections/Trasparenza';
import Partner from '../components/sections/Partner';
import ContactBand from '../components/sections/ContactBand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChiSiamo />
      <CosaFacciamo />
      <Impatto />
      <ComeFunziona />
      <Timeline />
      <Trasparenza />
      <Partner />
      <ContactBand />
    </>
  );
}
