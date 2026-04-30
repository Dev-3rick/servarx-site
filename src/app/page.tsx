import { Logo } from '@/components/brand/Logo';
import { SITE } from '@/lib/site';

/**
 * Home placeholder do Dia 1.
 *
 * Mostra logo, tokens funcionando, e estrutura tipográfica.
 * Conteúdo real do hero entra no Dia 2 do PLANO_FASE_1.
 */
export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ background: 'var(--gradient-hero-glow), var(--color-bg)' }}
    >
      {/* Header placeholder */}
      <header className="px-6 py-6 lg:px-12 lg:py-8">
        <Logo size="md" />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 lg:px-12">
        <div className="max-w-page-xl mx-auto text-center">
          {/* Eyebrow */}
          <p
            className="mb-6 font-mono uppercase tracking-[0.18em] text-brand-cyan-600"
            style={{ fontSize: 'var(--text-eyebrow)' }}
          >
            Dia 1 · scaffolding · {SITE.endereco.cidade}
          </p>

          {/* Hero (placeholder) */}
          <h1
            className="mb-8 font-bold tracking-tight text-brand-teal-800 leading-[1.05]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, var(--text-hero))' }}
          >
            Não é só mais um SaaS.
            <br />
            Não é só mais um atendente de IA.
          </h1>

          <p className="max-w-page-md mx-auto text-lg leading-relaxed text-brand-neutral-muted lg:text-xl">
            {SITE.description}
          </p>

          {/* CTA preview */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="rounded-full bg-brand-teal-800 px-8 py-4 font-semibold text-white shadow-cta transition-all hover:bg-brand-teal-700 hover:shadow-cta-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-ring)]"
            >
              Falar com a gente
            </button>
            <button
              type="button"
              className="rounded-full border-2 border-brand-teal-800 bg-transparent px-8 py-4 font-semibold text-brand-teal-800 transition-all hover:bg-brand-teal-800 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-ring)]"
            >
              Ver demonstração
            </button>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-sm text-brand-neutral-muted">
            30 dias de garantia · sem fidelidade · suporte humano
          </p>

          {/* Logo XL pra preview */}
          <div className="mt-24 flex flex-col items-center gap-8">
            <p
              className="font-mono uppercase tracking-[0.18em] text-brand-neutral-muted"
              style={{ fontSize: 'var(--text-eyebrow)' }}
            >
              Logo · variantes
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <Logo variant="full" size="xl" />
              <Logo variant="icon" size="xl" />
            </div>
            <div className="rounded-2xl bg-brand-teal-800 px-12 py-10">
              <Logo variant="inverted" size="xl" />
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-6 py-8 lg:px-12">
        <div className="max-w-page-xl mx-auto flex flex-col items-center justify-between gap-4 text-sm text-brand-neutral-muted sm:flex-row">
          <p>
            © 2026 {SITE.name} · {SITE.endereco.full}
          </p>
          <p className="font-mono">{SITE.empresa.razaoSocial}</p>
        </div>
      </footer>
    </div>
  );
}
