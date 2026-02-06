import { useContent } from '../../hooks/useContent';
import Button from '../ui/Button';

export default function Hero() {
  const { content } = useContent();
  const { hero } = content;

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
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-500 to-primary-600" />
      )}

      {/* Decorative shapes */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/5" />
      <div className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-white/5" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          {hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
          {hero.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button variant="secondary" size="lg" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.text}
          </Button>
          <Button variant="outline" size="lg" href={hero.ctaSecondary.href} className="border-white text-white hover:bg-white/10">
            {hero.ctaSecondary.text}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-8 w-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
