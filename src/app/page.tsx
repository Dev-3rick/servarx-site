import { Logo } from '@/components/brand/Logo';
import { LogoIA } from '@/components/brand/LogoIA';
import { SITE } from '@/lib/site';

/**
 * Home placeholder do Dia 1 (com logo final aprovado — conceito A).
 *
 * Mostra o logo em diferentes contextos pra você validar antes de avançar
 * pro Dia 2 (Header + Footer + Hero estruturado + WhatsAppFab + Cookie banner).
 */
export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ background: 'var(--gradient-hero-glow), var(--color-bg)' }}
    >
      {/* Header (preview) */}
      <header className="px-6 py-6 lg:px-12 lg:py-8 border-b border-border bg-surface/80 backdrop-blur-sm">
        <div className="max-w-page-xl mx-auto flex items-center justify-between">
          <Logo variant="full" size="md" />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-neutral-muted">
            <a href="#" className="hover:text-brand-teal-800 transition-colors">Quem somos</a>
            <a href="#" className="hover:text-brand-teal-800 transition-colors">Produtos</a>
            <a href="#" className="hover:text-brand-teal-800 transition-colors">Blog</a>
            <a href="#" className="rounded-full bg-brand-teal-800 px-5 py-2 font-semibold text-white hover:bg-brand-teal-700 transition-colors">
              Falar com a gente
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 px-6 py-16 lg:px-12">
        <div className="max-w-page-xl mx-auto">

          {/* Hero (preview com logo XL no centro) */}
          <section className="text-center mb-24">
            <p
              className="mb-8 font-mono uppercase tracking-[0.18em] text-brand-cyan-600"
              style={{ fontSize: 'var(--text-eyebrow)' }}
            >
              PARA CENTROS MÉDICOS DO INTERIOR · {SITE.endereco.cidade}
            </p>

            <h1
              className="mb-8 font-bold tracking-tight text-brand-teal-800 leading-[1.05]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, var(--text-hero))' }}
            >
              Não é só mais um SaaS.
              <br />
              Não é só mais um atendente de IA.
            </h1>

            <p className="max-w-page-md mx-auto text-lg leading-relaxed text-brand-neutral-muted lg:text-xl mb-12">
              {SITE.description}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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

            <p className="mt-8 text-sm text-brand-neutral-muted">
              30 dias de garantia · sem fidelidade · suporte humano
            </p>
          </section>

          {/* Logo institucional — variantes */}
          <section className="mb-20">
            <h2
              className="text-center mb-2 font-bold text-brand-teal-800"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
            >
              Logo institucional
            </h2>
            <p className="text-center text-brand-neutral-muted mb-12">
              Variantes do <strong>conceito A</strong> — wordmark com X em gradient.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Sobre fundo claro */}
              <div className="rounded-2xl bg-brand-neutral-bg border border-border px-12 py-16 flex flex-col items-center justify-center gap-8">
                <p className="font-mono uppercase tracking-wider text-xs text-brand-neutral-light">Sobre fundo claro</p>
                <Logo variant="full" size="xl" />
                <Logo variant="full" size="lg" />
                <Logo variant="full" size="md" />
              </div>

              {/* Sobre fundo escuro */}
              <div className="rounded-2xl bg-brand-teal-800 px-12 py-16 flex flex-col items-center justify-center gap-8">
                <p className="font-mono uppercase tracking-wider text-xs text-white/50">Sobre fundo escuro (footer / hero dark)</p>
                <Logo variant="inverted" size="xl" />
                <Logo variant="inverted" size="lg" />
                <Logo variant="inverted" size="md" />
              </div>
            </div>

            {/* Ícone isolado (favicon / OG / app) */}
            <div className="mt-6 rounded-2xl bg-surface border border-border px-12 py-12">
              <p className="text-center mb-8 font-mono uppercase tracking-wider text-xs text-brand-neutral-light">
                Ícone isolado (favicon · OG image · app icon)
              </p>
              <div className="flex items-end justify-center gap-12 flex-wrap">
                {(['sm', 'md', 'lg', 'xl'] as const).map((s) => (
                  <div key={s} className="flex flex-col items-center gap-3">
                    <Logo variant="icon" size={s} />
                    <span className="font-mono text-xs text-brand-neutral-muted uppercase">{s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex items-center justify-center gap-6">
                <div className="rounded-2xl bg-brand-teal-800 p-6">
                  <Logo variant="icon" size="xl" />
                </div>
                <div className="rounded-2xl bg-white border border-border p-6">
                  <Logo variant="icon" size="xl" />
                </div>
                <div className="rounded-2xl bg-brand-neutral-bg p-6">
                  <Logo variant="icon" size="xl" />
                </div>
              </div>
            </div>
          </section>

          {/* Logo IA das sub-marcas (conceito E preservado) */}
          <section className="mb-20">
            <h2
              className="text-center mb-2 font-bold text-brand-teal-800"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
            >
              Logo das sub-marcas IA
            </h2>
            <p className="text-center text-brand-neutral-muted mb-2">
              Conceito E preservado pra produtos de IA dentro do guarda-chuva ServarX.
            </p>
            <p className="text-center font-mono text-xs text-brand-neutral-light mb-12 uppercase tracking-wider">
              Componente: <code className="bg-surface px-2 py-1 rounded">{`<LogoIA name="..." />`}</code>
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-brand-neutral-bg border border-border px-12 py-16 flex flex-col items-center justify-center gap-10">
                <p className="font-mono uppercase tracking-wider text-xs text-brand-neutral-light">Sobre fundo claro</p>
                <LogoIA name="ServarX.IA" size="xl" />
                <LogoIA name="ServarVet.IA" size="lg" />
                <LogoIA name="ServarLaw.IA" size="md" />
              </div>

              <div className="rounded-2xl bg-brand-teal-800 px-12 py-16 flex flex-col items-center justify-center gap-10">
                <p className="font-mono uppercase tracking-wider text-xs text-white/50">Sobre fundo escuro</p>
                <LogoIA name="ServarX.IA" size="xl" inverted />
                <LogoIA name="ServarVet.IA" size="lg" inverted />
                <LogoIA name="ServarLaw.IA" size="md" inverted />
              </div>
            </div>

            <p className="mt-6 text-sm text-brand-neutral-muted text-center max-w-page-md mx-auto">
              O ponto cyan <strong>pulsa</strong> (animação CSS pulse-soft 2s) — comunica
              "ao vivo / agente ativo". Pode desligar com <code className="bg-surface px-1 rounded">pulse=&#123;false&#125;</code>.
            </p>
          </section>

          {/* Confirmação */}
          <div className="text-center pt-12 border-t border-border">
            <p className="font-mono uppercase tracking-wider text-xs text-brand-neutral-light mb-2">
              Status Dia 1
            </p>
            <h3 className="text-2xl font-bold text-brand-teal-800 mb-2">
              ✅ Logo institucional aprovado · LogoIA preservado
            </h3>
            <p className="text-brand-neutral-muted">
              Pronto pra avançar Dia 2: Header real · Footer · Hero estruturado · WhatsApp FAB · Cookie banner.
            </p>
          </div>

        </div>
      </main>

      <footer className="border-t border-border px-6 py-12 lg:px-12 mt-16 bg-surface">
        <div className="max-w-page-xl mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Logo variant="full" size="sm" />
          <p className="text-sm text-brand-neutral-muted text-center sm:text-right">
            © 2026 {SITE.name} · {SITE.endereco.full}
            <br />
            <span className="font-mono text-xs">{SITE.empresa.razaoSocial}</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
