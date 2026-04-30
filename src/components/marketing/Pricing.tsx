import Link from 'next/link';
import { Check, Sparkles, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { PRICING } from '@/lib/site';
import { cn } from '@/lib/cn';

const formatBRL = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(value);

export function Pricing() {
  return (
    <section className="px-6 py-20 lg:px-12 lg:py-28">
      <div className="max-w-page-xl mx-auto">
        <Reveal variant="up">
          <div className="text-center mb-12">
            <p
              className="mb-6 font-mono uppercase tracking-[0.18em] text-brand-cyan-600"
              style={{ fontSize: 'var(--text-eyebrow)' }}
            >
              PLANOS · ESCOLHA O DA SUA CLÍNICA
            </p>
            <h2
              className="font-bold tracking-tight text-brand-teal-800 leading-[1.1] mx-auto max-w-page-lg mb-4"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Mensalidade fixa por clínica — não por médico.
            </h2>
            <p className="text-brand-neutral-muted max-w-page-md mx-auto text-base lg:text-lg leading-relaxed">
              Você paga pela clínica. Não importa se tem 1 ou 10 médicos atendendo.
              Sem licença extra escondida.
            </p>
          </div>
        </Reveal>

        {/* Cards dos 3 tiers */}
        <div className="grid gap-6 lg:grid-cols-3 mb-10">
          {PRICING.tiers.map((tier, i) => (
            <Reveal
              key={tier.slug}
              variant="up"
              delay={i * 200}
              as="article"
              className={cn(
                'rounded-3xl border bg-surface p-8 flex flex-col relative',
                tier.destaque
                  ? 'border-brand-teal-800 shadow-large lg:scale-[1.03] z-10'
                  : 'border-border shadow-soft',
              )}
            >
              {tier.destaque && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-brand-teal-800 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-cyan-400">
                  <Sparkles className="w-3.5 h-3.5" /> Mais popular
                </div>
              )}

              <header className="mb-6">
                <h3 className="text-xl font-bold text-brand-teal-800 mb-2">
                  {tier.nome}
                </h3>
                <p className="text-sm text-brand-neutral-muted">
                  {tier.publico}
                </p>
              </header>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-brand-teal-800">
                    {formatBRL(tier.preco)}
                  </span>
                  <span className="text-sm text-brand-neutral-muted">/mês</span>
                </div>
                <p className="mt-2 text-xs font-mono uppercase tracking-wider text-brand-neutral-light">
                  Até {tier.medicosLimite} médicos · {tier.mensagensLimite.toLocaleString('pt-BR')} mensagens IA / mês
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-brand-neutral-muted">
                    <Check className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/contato?ref=${tier.slug}`}
                className={cn(
                  'block text-center rounded-full px-6 py-3.5 font-semibold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-ring)]',
                  tier.destaque
                    ? 'bg-brand-teal-800 text-white shadow-cta hover:bg-brand-teal-700'
                    : 'border-2 border-brand-teal-800 text-brand-teal-800 hover:bg-brand-teal-800 hover:text-white',
                )}
              >
                Falar sobre o {tier.nome.replace('ServarClin ', '')}
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Setup + garantia */}
        <Reveal variant="up" className="grid gap-4 md:grid-cols-2 mb-8">
          <div className="rounded-2xl border border-border bg-brand-neutral-bg p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-brand-neutral-light mb-2">
              Implantação assistida (única)
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-2xl font-bold text-brand-teal-800">{formatBRL(PRICING.setup)}</span>
              <span className="text-sm text-brand-neutral-muted">/ uma vez</span>
            </div>
            <p className="text-sm text-brand-neutral-muted leading-relaxed">
              {PRICING.setupNarrativa}.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-brand-cyan-400 bg-brand-cyan-50 p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-brand-cyan-600 mb-2 inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Garantia
            </p>
            <p className="text-2xl font-bold text-brand-teal-800 mb-2">
              {PRICING.garantiaDias} dias com reembolso
            </p>
            <p className="text-sm text-brand-neutral-muted leading-relaxed">
              Não gostou? A gente devolve o valor da mensalidade. Sem perguntas, sem letrinha miúda.
            </p>
          </div>
        </Reveal>

        {/* Add-ons */}
        <Reveal variant="fade" className="rounded-2xl border border-border bg-surface px-6 py-5">
          <p className="font-mono text-xs uppercase tracking-wider text-brand-neutral-light mb-3">
            Add-ons (cobrados só se usar)
          </p>
          <ul className="grid gap-2 sm:grid-cols-2 text-sm">
            {PRICING.addons.map((addon) => (
              <li key={addon.nome} className="flex items-baseline gap-2 text-brand-neutral-muted">
                <span className="font-bold text-brand-teal-800">{addon.nome}</span>
                <span>{formatBRL(addon.preco)}</span>
                <span className="text-brand-neutral-light">— {addon.descricao}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Limit nota */}
        <p className="mt-6 text-center text-sm text-brand-neutral-muted">
          Pra clínicas com mais de 10 médicos:{' '}
          <Link href="/contato?ref=enterprise" className="text-brand-teal-800 font-semibold hover:underline">
            fala com a gente
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
