import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

interface CTABannerProps {
  /** Eyebrow uppercase pequeno no topo. Opcional. */
  eyebrow?: string;
  /** Headline grande — frase de conversão final. */
  title: string;
  /** Subtitle abaixo do title. Opcional. */
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * Banner CTA final em fundo dark teal-800.
 *
 * Usado no fim de páginas pra fechar a jornada com contraste forte.
 * Cor cyan-400 destaca o botão primário sobre o fundo escuro.
 */
export function CTABanner({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-brand-teal-800 text-white">
      {/* Glow ambiente */}
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: 'var(--gradient-hero-spot)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-page-xl mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center">
        <Reveal variant="up">
          {eyebrow && (
            <p
              className="mb-6 font-mono uppercase tracking-[0.18em] text-brand-cyan-400"
              style={{ fontSize: 'var(--text-eyebrow)' }}
            >
              {eyebrow}
            </p>
          )}

          <h2
            className="font-bold tracking-tight leading-[1.1] mb-6 mx-auto max-w-page-md"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {title}
          </h2>

          {subtitle && (
            <p className="text-lg lg:text-xl text-white/80 max-w-page-md mx-auto leading-relaxed mb-10">
              {subtitle}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href={ctaHref}
              className="rounded-full bg-brand-cyan-400 text-brand-teal-800 px-8 py-4 font-semibold shadow-cta-accent hover:bg-white hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-cyan-400/40 inline-flex items-center gap-2"
            >
              {ctaLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="rounded-full border-2 border-white/20 text-white px-8 py-4 font-semibold hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
