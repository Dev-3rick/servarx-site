import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  Zap,
  HelpCircle,
  ArrowRight,
  Monitor,
  UserCheck,
  Rocket,
} from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Planos e Preços — ServarClin',
  description:
    'Encontre o plano ideal para automatizar sua clínica. Mensalidade fixa, sem cobrança por médico atendido. Garantia de 30 dias.',
};

/* ─── Data ───────────────────────────────────────────────────────── */

const PRICING_DATA = {
  setup: 499,
  tiers: [
    {
      slug: 'solo',
      nome: 'Clínica Solo',
      preco: 297,
      publico: 'Ideal para 1 a 2 médicos',
      features: [
        'Atendimento 24h via WhatsApp',
        'Até 200 agendamentos IA/mês',
        '1 Número de WhatsApp dedicado',
        'Google Calendar integrado',
        'Lembretes automáticos 24h antes',
        'Cifragem LGPD (AES-256)',
      ],
      destaque: false,
    },
    {
      slug: 'centro-medico',
      nome: 'Centro Médico',
      preco: 597,
      publico: 'Clínicas em crescimento (mais escolhido)',
      features: [
        'Tudo do Clínica Solo',
        'Até 2.000 mensagens IA/mês',
        'Gestão de até 10 profissionais',
        'Motor de reagendamento ativo',
        'Relatório mensal de desempenho',
        'Suporte prioritário via WhatsApp',
      ],
      destaque: true,
    },
    {
      slug: 'rede-clinica',
      nome: 'Rede Clínica',
      preco: 997,
      publico: 'Volume alto e centros multidisciplinares',
      features: [
        'Tudo do Centro Médico',
        'Até 10.000 mensagens IA/mês',
        'Profissionais ilimitados',
        'Suporte VIP (canal direto ≤4h)',
        'Fine-tuning clínico personalizado',
        'Onboarding assistido premium',
      ],
      destaque: false,
    },
  ],
};

const FAQ = [
  {
    q: 'Preciso trocar meu número de WhatsApp?',
    a: 'Não. Você pode usar o número que sua clínica já tem hoje. A conexão é feita em 5 minutos via QR Code, exatamente como no WhatsApp Web.',
  },
  {
    q: 'A IA pode dar diagnóstico médico errado?',
    a: 'Nunca. O ServarClin tem um "Auditor de IA" que bloqueia qualquer tentativa de diagnóstico. Ela só responde dúvidas administrativas e agenda consultas seguindo as regras que você definir.',
  },
  {
    q: 'Funciona com convênios?',
    a: 'Sim. Você configura quais médicos atendem quais convênios e a IA filtra os horários corretamente durante a conversa com o paciente.',
  },
  {
    q: 'Como funciona a integração com o Google Calendar?',
    a: 'Cada profissional da sua clínica conecta seu Google Calendar. A IA lê a disponibilidade real em tempo real e, ao marcar a consulta, o horário aparece automaticamente no calendário do médico.',
  },
  {
    q: 'Os dados dos pacientes estão seguros?',
    a: 'Sim. Somos "LGPD por construção". Todos os dados sensíveis (PII) são cifrados e os logs de atendimento são auditáveis. Sua clínica é a única dona dos dados.',
  },
  {
    q: 'Tem fidelidade? Posso cancelar quando quiser?',
    a: 'Não há fidelidade nos planos mensais. Você pode cancelar com um clique no painel ou falando conosco. Simples e justo.',
  },
];

const ONBOARDING_STEPS = [
  {
    icon: Monitor,
    title: 'Demonstração ao Vivo',
    desc: 'Agendamos uma chamada de 15 min para mostrar o sistema rodando com os dados da sua clínica.',
  },
  {
    icon: UserCheck,
    title: 'Configuração Assistida',
    desc: 'Nossa equipe ajuda você a conectar o WhatsApp e configurar os horários dos médicos.',
  },
  {
    icon: Rocket,
    title: 'Lançamento',
    desc: 'Em menos de 24h sua clínica já está atendendo pacientes automaticamente no WhatsApp.',
  },
];

/* ─── Components ─────────────────────────────────────────────────── */

function formatBRL(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  }).format(value);
}

export default function ComprasPage() {
  return (
    <main className="bg-bg">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative px-6 py-20 lg:px-12 lg:py-28 overflow-hidden" style={{ background: 'var(--gradient-hero-glow)' }}>
        <div className="max-w-page-xl mx-auto text-center relative z-10">
          <Reveal immediate variant="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-400/10 border border-brand-cyan-400/20 text-brand-cyan-600 text-xs font-semibold mb-6 uppercase tracking-wider">
              <Zap className="w-3 h-3 fill-current" /> Planos e Preços
            </div>
          </Reveal>
          <Reveal immediate variant="up" delay={100}>
            <h1 className="text-4xl lg:text-6xl font-bold text-brand-teal-800 tracking-tight mb-6">
              Invista na <span className="text-brand-cyan-600">atendente 24h</span> que sua clínica merece.
            </h1>
          </Reveal>
          <Reveal immediate variant="up" delay={200}>
            <p className="text-lg text-brand-neutral-muted max-w-2xl mx-auto">
              Preços fixos por clínica. Sem surpresas no final do mês e sem cobrar por cada médico que você cadastrar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PRICING CARDS ────────────────────────────────────────── */}
      <section className="px-6 -mt-16 pb-24 lg:px-12 relative z-20">
        <div className="max-w-page-xl mx-auto grid md:grid-cols-3 gap-6">
          {PRICING_DATA.tiers.map((tier, i) => (
            <Reveal key={tier.slug} variant="up" delay={i * 100}>
              <div
                className={`h-full rounded-3xl border p-8 flex flex-col relative transition-all hover:shadow-large ${
                  tier.destaque
                    ? 'border-brand-teal-800 shadow-large bg-white scale-105 z-10'
                    : 'border-brand-neutral-border bg-white/80 backdrop-blur-sm'
                }`}
              >
                {tier.destaque && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-brand-teal-800 text-brand-cyan-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" /> Mais escolhido
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-brand-teal-800 mb-1">{tier.nome}</h3>
                  <p className="text-sm text-brand-neutral-muted">{tier.publico}</p>
                </div>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-brand-teal-800">{formatBRL(tier.preco)}</span>
                  <span className="text-sm text-brand-neutral-muted">/mês</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-brand-neutral-muted leading-tight">
                      <Check className="w-4 h-4 text-brand-cyan-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contato?ref=pricing-${tier.slug}`}
                  className={`block w-full py-4 rounded-full font-bold text-center transition-all ${
                    tier.destaque
                      ? 'bg-brand-teal-800 text-white shadow-cta hover:bg-brand-teal-700'
                      : 'border-2 border-brand-teal-800 text-brand-teal-800 hover:bg-brand-teal-800 hover:text-white'
                  }`}
                >
                  Selecionar {tier.nome}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Setup & Guarantee */}
        <div className="max-w-page-xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
          <Reveal variant="up">
            <div className="p-6 rounded-2xl border border-brand-neutral-border bg-white flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-brand-cyan-50 flex items-center justify-center text-brand-cyan-600 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-teal-800">Garantia de 30 dias</h4>
                <p className="text-sm text-brand-neutral-muted">Não funcionou para você? Devolvemos 100% da mensalidade. Sem burocracia.</p>
              </div>
            </div>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <div className="p-6 rounded-2xl border border-brand-neutral-border bg-white flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-brand-teal-50 flex items-center justify-center text-brand-teal-700 flex-shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-teal-800">Taxa de Implantação: {formatBRL(PRICING_DATA.setup)}</h4>
                <p className="text-sm text-brand-neutral-muted">Configuração completa, treinamento e suporte premium no primeiro mês.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HOW IT WORKS / ONBOARDING ──────────────────────────── */}
      <section className="py-24 bg-white border-y border-brand-neutral-border px-6 lg:px-8">
        <div className="max-w-page-xl mx-auto">
          <Reveal variant="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal-800 mb-4">Como começar? É mais rápido do que você imagina.</h2>
              <p className="text-brand-neutral-muted">Do primeiro contato até sua clínica rodando sozinha no WhatsApp.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            {ONBOARDING_STEPS.map((step, i) => (
              <Reveal key={step.title} variant="up" delay={i * 100}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-3xl bg-brand-neutral-bg text-brand-teal-800 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-teal-800 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-large group-hover:-translate-y-1">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-teal-800 mb-3">{step.title}</h3>
                  <p className="text-sm text-brand-neutral-muted leading-relaxed px-4">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/contato" className="inline-flex items-center gap-2 font-bold text-brand-teal-800 hover:text-brand-cyan-600 transition-colors">
              Quero agendar minha demonstração <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 bg-bg" id="faq">
        <div className="max-w-page-md mx-auto">
          <Reveal variant="up">
            <h2 className="text-3xl font-bold text-brand-teal-800 text-center mb-12">Dúvidas Frequentes</h2>
          </Reveal>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <Reveal key={i} variant="up" delay={i * 50}>
                <details className="group rounded-2xl border border-brand-neutral-border bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                    <h3 className="font-bold text-brand-teal-800 group-open:text-brand-cyan-600 transition-colors leading-tight pr-4">
                      {item.q}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-brand-neutral-light group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-sm text-brand-neutral-muted leading-relaxed">
                    {item.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-teal-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at top right, #22d3ee, transparent)' }} />
        <div className="max-w-page-md mx-auto px-6 text-center relative z-10">
          <Reveal variant="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Sua clínica está perdendo consultas enquanto você lê isso.
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Mude a realidade do seu atendimento hoje mesmo. Sem compromisso, sem enrolação.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contato?ref=compras-final"
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-brand-teal-800 font-bold hover:bg-brand-cyan-50 transition-all shadow-cta-accent hover:scale-105"
              >
                Ativar atendimento 24h
              </Link>
              <Link
                href="https://wa.me/5531000000000"
                target="_blank"
                className="w-full sm:w-auto px-10 py-5 rounded-full border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all"
              >
                Falar com consultor
              </Link>
            </div>
            <p className="mt-6 text-white/40 text-xs">
              Implantação assistida inclusa · Atendimento humano de suporte
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
