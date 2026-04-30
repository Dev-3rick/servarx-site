import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Stethoscope, PawPrint, Scale, Sparkles } from 'lucide-react';
import { LogoIA } from '@/components/brand/LogoIA';

export const metadata: Metadata = {
  title: 'Produtos',
  description:
    'A ServarX constrói produtos de IA conversacional pra negócios de serviço. Hoje: ServarClin (clínicas). Em breve: outras verticais.',
};

interface Produto {
  nome: string;
  subMarcaIA: string;
  vertical: string;
  status: 'ativo' | 'em-breve' | 'pesquisa';
  icon: typeof Stethoscope;
  descricao: string;
  href?: string;
}

const PRODUTOS: Produto[] = [
  {
    nome: 'ServarClin',
    subMarcaIA: 'ServarX.IA',
    vertical: 'Clínicas e centros médicos',
    status: 'ativo',
    icon: Stethoscope,
    descricao:
      'IA conversacional que atende, agenda e confirma consultas pelo WhatsApp. Para clínicas multidisciplinares de até 10 médicos.',
    href: '/produtos/servarclin',
  },
  {
    nome: 'ServarVet',
    subMarcaIA: 'ServarVet.IA',
    vertical: 'Petshops e clínicas veterinárias',
    status: 'em-breve',
    icon: PawPrint,
    descricao:
      'A mesma tese, com vocabulário pet — agendamento de banho, tosa, vacinas e consultas. Em pesquisa de viabilidade.',
  },
  {
    nome: 'ServarLaw',
    subMarcaIA: 'ServarLaw.IA',
    vertical: 'Escritórios de advocacia',
    status: 'pesquisa',
    icon: Scale,
    descricao:
      'Triagem de cliente novo, agendamento, follow-up de processo. Avaliando demanda no interior.',
  },
];

const STATUS_COPY: Record<Produto['status'], { label: string; bg: string; fg: string }> = {
  'ativo': { label: 'Disponível', bg: 'bg-brand-cyan-100', fg: 'text-brand-teal-800' },
  'em-breve': { label: 'Em breve', bg: 'bg-warning-soft', fg: 'text-warning-fg' },
  'pesquisa': { label: 'Em pesquisa', bg: 'bg-brand-neutral-bg', fg: 'text-brand-neutral-muted' },
};

export default function ProdutosPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 py-20 lg:px-12 lg:py-28"
        style={{ background: 'var(--gradient-hero-glow)' }}
      >
        <div className="max-w-page-md mx-auto text-center">
          <p
            className="mb-6 font-mono uppercase tracking-[0.18em] text-brand-cyan-600"
            style={{ fontSize: 'var(--text-eyebrow)' }}
          >
            HOUSE OF PRODUCTS
          </p>
          <h1
            className="font-bold tracking-tight text-brand-teal-800 leading-[1.1] mb-8"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
          >
            Um produto por vertical de serviço.
          </h1>
          <p className="text-lg lg:text-xl text-brand-neutral-muted leading-relaxed">
            A gente não fez "uma IA pra qualquer negócio". Cada vertical tem um
            produto dedicado, com vocabulário e regra de negócio próprios.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-page-xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUTOS.map((p) => {
              const Icon = p.icon;
              const status = STATUS_COPY[p.status];
              const interactive = p.status === 'ativo' && p.href;
              const Wrapper = interactive ? Link : 'div';
              const wrapperProps = interactive ? { href: p.href! } : {};

              return (
                <Wrapper
                  key={p.nome}
                  {...(wrapperProps as any)}
                  className={`rounded-3xl border bg-surface p-8 flex flex-col transition-all ${
                    interactive
                      ? 'border-border hover:border-brand-teal-800 hover:shadow-medium cursor-pointer group'
                      : 'border-border/60 opacity-90'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-cyan-100 text-brand-teal-800">
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <span
                      className={`text-xs font-mono uppercase tracking-wider rounded-full px-3 py-1 ${status.bg} ${status.fg}`}
                    >
                      {status.label}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-brand-teal-800 mb-2">
                    {p.nome}
                  </h3>
                  <div className="mb-4">
                    <LogoIA name={p.subMarcaIA} size="sm" pulse={p.status === 'ativo'} />
                  </div>
                  <p className="text-sm font-mono uppercase tracking-wider text-brand-neutral-light mb-3">
                    {p.vertical}
                  </p>
                  <p className="text-brand-neutral-muted leading-relaxed flex-1">
                    {p.descricao}
                  </p>

                  {interactive && (
                    <div className="mt-6 pt-6 border-t border-border inline-flex items-center gap-2 text-brand-teal-800 font-semibold group-hover:gap-3 transition-all">
                      Ver produto <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA "tem outra vertical?" */}
      <section className="px-6 py-16 lg:px-12 lg:py-24 bg-brand-teal-800 text-white">
        <div className="max-w-page-md mx-auto text-center">
          <Sparkles className="w-12 h-12 mx-auto text-brand-cyan-400 mb-6" aria-hidden="true" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Tem uma vertical que ainda não tá aqui?
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            Se sua categoria de negócio sobrevive de relacionamento via WhatsApp,
            a gente quer ouvir. As próximas ServarX surgem das demandas reais que chegam aqui.
          </p>
          <Link
            href="/contato?ref=nova-vertical"
            className="inline-flex items-center gap-2 rounded-full bg-brand-cyan-400 text-brand-teal-800 px-8 py-4 font-semibold shadow-cta-accent hover:bg-white transition-all"
          >
            Sugerir uma vertical →
          </Link>
        </div>
      </section>
    </>
  );
}
