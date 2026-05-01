import Link from 'next/link';
import { Check, Sparkles, ShieldCheck, CreditCard, Receipt, Zap } from 'lucide-react';
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
        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          {PRICING.tiers.map((tier, i) => (
            <Reveal
              key={tier.slug}
              variant="up"
              delay={i * 200}
              as="article"
            >
              <Link
                href={tier.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'block h-full rounded-[2rem] border p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-2 cursor-pointer group',
                  tier.destaque
                    ? 'border-brand-teal-800 shadow-large lg:scale-[1.03] z-10'
                    : 'border-border shadow-soft hover:shadow-medium',
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
                  <div className="flex flex-col gap-0.5">
                    <div className="flex flex-col">
                      <span className="text-sm text-brand-neutral-light line-through decoration-brand-neutral-light/50 font-medium mb-0.5">
                        {formatBRL(tier.preco)}
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-brand-teal-800">
                          {formatBRL(tier.preco * 0.9)}
                        </span>
                        <span className="text-sm text-brand-neutral-muted">/mês</span>
                      </div>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan-50 text-brand-cyan-700 text-[10px] font-black uppercase tracking-wider border border-brand-cyan-100 w-fit">
                      <Zap className="w-3 h-3 fill-current" /> 10% OFF no Anual
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-2 border-t border-border/50 pt-4">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-brand-cyan-600 uppercase tracking-wide bg-brand-cyan-50 px-2 py-1 rounded-md w-fit">
                      <Sparkles className="w-3.5 h-3.5" /> Isenção total de instalação
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-brand-neutral-muted px-2">
                      <Check className="w-3 h-3 text-emerald-500" /> Cartão ou Boleto
                    </div>
                  </div>
                  <p className="mt-3 text-[10px] text-brand-neutral-light leading-tight font-medium">
                    * Economia de R$ {PRICING.setup} na adesão ao garantir o plano anual hoje.
                  </p>
                  <p className="mt-2 text-xs font-mono uppercase tracking-wider text-brand-neutral-light">
                    Até {tier.medicosLimite} médicos · Ilimitado
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

                <div
                  className={cn(
                    'block text-center rounded-full px-6 py-3.5 font-semibold transition-all group-hover:scale-[1.02]',
                    tier.destaque
                      ? 'bg-brand-teal-800 text-white shadow-cta hover:bg-brand-teal-700'
                      : 'border-2 border-brand-teal-800 text-brand-teal-800 hover:bg-brand-teal-800 hover:text-white',
                  )}
                >
                  Assinar {tier.nome.replace('ServarClin ', '')}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Setup + garantia */}
        <Reveal variant="up">
          <div className="rounded-[2rem] border-2 border-brand-cyan-400 bg-brand-cyan-50/50 p-8 relative overflow-hidden group hover:shadow-large transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-24 h-24 text-brand-cyan-600" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-100 text-brand-cyan-700 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                <ShieldCheck className="w-3.5 h-3.5" /> Segurança Garantida
              </div>
              <h4 className="text-3xl font-bold text-brand-teal-800 mb-3">
                {PRICING.garantiaDias} dias de Garantia Incondicional
              </h4>
              <p className="text-brand-neutral-muted leading-relaxed max-w-lg">
                Nós assumimos todo o risco por você. Se em 30 dias você não estiver satisfeito com a automação da sua clínica, devolvemos seu dinheiro integralmente. <strong>Sem perguntas, sem burocracia.</strong>
              </p>
            </div>
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
