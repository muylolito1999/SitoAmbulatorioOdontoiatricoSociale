import { useEffect, useState } from 'react';
import { useContent } from '../../hooks/useContent';
import Button from '../ui/Button';

export default function Hero() {
  const { content } = useContent();
  const { hero } = content;
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 100);
    const t2 = setTimeout(() => setStage(2), 300);
    const t3 = setTimeout(() => setStage(3), 500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      {hero.backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-primary-900/70" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-600 to-primary-500 animate-gradientShift" />
      )}

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-secondary-400/15 blur-3xl animate-floatSlow" />
      <div className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-secondary-400/10 blur-3xl animate-floatSlow" style={{ animationDelay: '-7s' }} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1
          className="text-4xl font-extrabold leading-tight text-white transition-all duration-700 sm:text-5xl md:text-6xl"
          style={{ opacity: stage >= 1 ? 1 : 0, transform: stage >= 1 ? 'translateY(0)' : 'translateY(24px)' }}
        >
          {hero.title}
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 transition-all duration-700 sm:text-xl"
          style={{ opacity: stage >= 2 ? 1 : 0, transform: stage >= 2 ? 'translateY(0)' : 'translateY(24px)' }}
        >
          {hero.subtitle.split('\n').map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </p>
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700"
          style={{ opacity: stage >= 3 ? 1 : 0, transform: stage >= 3 ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <Button variant="secondary" size="lg" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.text}
          </Button>
          <Button variant="outline" size="lg" href={hero.ctaSecondary.href} className="border-white text-white hover:bg-white/10">
            {hero.ctaSecondary.text}
          </Button>
        </div>
      </div>

      {/* Scroll indicator — mouse outline */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scrollBounce">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1.5">
          <div className="h-2 w-1 rounded-full bg-white/70 animate-pulseSubtle" />
        </div>
      </div>
    </section>
  );
}
