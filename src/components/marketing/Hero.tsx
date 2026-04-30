import Link from 'next/link';
import { ShieldCheck, MessageCircle } from 'lucide-react';
import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--gradient-hero-glow)' }}
    >
      <div className="max-w-page-xl mx-auto px-6 lg:px-12 py-20 lg:py-32 text-center">
        {/* Eyebrow */}
        <p
          className="mb-8 font-mono uppercase tracking-[0.18em] text-brand-cyan-600 inline-flex items-center gap-2"
          style={{ fontSize: 'var(--text-eyebrow)' }}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-brand-cyan-400 animate-[pulse-soft_2s_ease-in-out_infinite]" aria-hidden="true" />
          Para Centros Médicos do Interior · {SITE.endereco.cidade}
        </p>

        {/* H1 — anti-claim */}
        <h1
          className="mb-8 font-bold tracking-tight text-brand-teal-800 leading-[1.05] mx-auto max-w-page-lg"
          style={{ fontSize: 'clamp(2.5rem, 6vw, var(--text-hero))' }}
        >
          A primeira IA conversacional construída para o{' '}
          <span
            style={{
              background: 'var(--gradient-brand-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Centro Médico do Interior
          </span>
          .
        </h1>

        <p className="mx-auto max-w-page-md text-lg leading-relaxed text-brand-neutral-muted lg:text-xl mb-12">
          Agende todos os médicos e atenda pacientes em áudio e texto, 24h por dia,
          sem pagar licenças extras por profissional.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-8">
          <Link
            href="/contato"
            className="rounded-full bg-brand-teal-800 px-8 py-4 font-semibold text-white shadow-cta transition-all hover:bg-brand-teal-700 hover:shadow-cta-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-ring)] inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com a gente
          </Link>
          <Link
            href="/produtos/servarclin"
            className="rounded-full border-2 border-brand-teal-800 bg-transparent px-8 py-4 font-semibold text-brand-teal-800 transition-all hover:bg-brand-teal-800 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-ring)]"
          >
            Ver demonstração
          </Link>
        </div>

        {/* Trust line */}
        <p className="text-sm text-brand-neutral-muted inline-flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-cyan-600" />
          30 dias de garantia · sem fidelidade · suporte humano em 10 minutos
        </p>
      </div>
    </section>
  );
}
