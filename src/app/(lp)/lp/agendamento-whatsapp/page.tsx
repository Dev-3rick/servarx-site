import type { Metadata } from 'next';
import { Suspense } from 'react';
import {
  Check,
  MessageCircle,
  Clock,
  CalendarCheck,
  ShieldCheck,
  Sparkles,
  UserX,
  PhoneOff,
  BrainCircuit,
  Zap,
  ArrowDown,
} from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { WhatsAppLink } from '@/components/marketing/WhatsAppLink';
import { LpContactForm } from './LpContactForm';
import { SITE, PRICING } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Agendamento pelo WhatsApp 24h para sua Clínica — ServarClin',
  description:
    'A assistente IA que responde pacientes, agenda consultas e envia lembretes — mesmo às 23h de domingo. Sem licença por médico. Teste 14 dias grátis.',
  robots: { index: false, follow: false }, // LP de campanha — não indexar
};

/* ─── Helpers ─────────────────────────────────────────────────────── */

const formatBRL = (v: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  }).format(v);

/* ─── Data ────────────────────────────────────────────────────────── */

const PAIN_POINTS = [
  {
    icon: MessageCircle,
    title: 'WhatsApp lotado',
    desc: 'Paciente manda mensagem às 20h, secretária já foi embora. Segunda de manhã, 47 mensagens esperando.',
  },
  {
    icon: UserX,
    title: 'Pacientes faltando',
    desc: '22% das consultas são perdidas por no-show. Cada falta é receita que sai pela porta.',
  },
  {
    icon: PhoneOff,
    title: 'Secretária sobrecarregada',
    desc: 'Atende telefone, responde WhatsApp, recepciona paciente e ainda organiza a agenda.',
  },
];

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Paciente manda WhatsApp',
    desc: 'A qualquer hora. A assistente responde em segundos com conversa natural.',
  },
  {
    icon: CalendarCheck,
    title: 'Assistente agenda na hora',
    desc: 'Identifica o médico, checa horário disponível e marca. Sem humano no meio.',
  },
  {
    icon: Clock,
    title: 'Médico vê na agenda',
    desc: 'A consulta aparece no Google Calendar automaticamente. Lembrete 24h antes reduz faltas.',
  },
];

const TRUST_ITEMS = [
  'Responde 24h, 7 dias — nem às 23h de domingo para',
  'Conversa natural em português — nada de menu robótico',
  'Integra com Google Calendar — agenda real, não planilha',
  'Transfere para humano quando precisa — sabe os limites',
  'LGPD nativo — dados cifrados nível bancário',
  'Suporte direto com o fundador — não com robô de SAC',
];

/* ─── Page ────────────────────────────────────────────────────────── */

export default function AgendamentoWhatsAppLP() {
  const featured = PRICING.tiers.find((t) => t.destaque) ?? PRICING.tiers[1];

  return (
    <main className="bg-bg">
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-teal-800 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'var(--gradient-hero-spot)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-page-md mx-auto px-6 lg:px-12 py-20 lg:py-28 text-center">
          <Reveal immediate variant="up">
            <p
              className="mb-6 font-mono uppercase tracking-[0.18em] text-brand-cyan-400"
              style={{ fontSize: 'var(--text-eyebrow)' }}
            >
              SERVARX · SERVARCLIN
            </p>
          </Reveal>

          <Reveal immediate variant="up" delay={150}>
            <h1
              className="font-bold tracking-tight text-white leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
            >
              Agendamento pelo WhatsApp{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #67e8f9 0%, #22d3ee 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                24h para sua Clínica
              </span>
            </h1>
          </Reveal>

          <Reveal immediate variant="up" delay={300}>
            <p className="text-lg text-white/80 leading-relaxed max-w-xl mx-auto mb-8">
              A assistente IA que responde pacientes, agenda consultas e envia lembretes — mesmo às 23h de domingo. Sem licença por médico.
            </p>
          </Reveal>

          <Reveal immediate variant="up" delay={450}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#formulario"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-bold text-white shadow-cta-accent hover:bg-[#1da851] hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Quero testar grátis
              </a>
              <WhatsAppLink
                text="Oi! Vi o anúncio e quero saber mais sobre o ServarClin para minha clínica."
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Falar direto no WhatsApp
              </WhatsAppLink>
            </div>
          </Reveal>

          <Reveal immediate variant="up" delay={600}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60">
              <span>Mensalidade fixa a partir de {formatBRL(PRICING.tiers[0].preco)}/mês</span>
              <span className="hidden sm:inline">·</span>
              <span>Setup em 7 dias</span>
              <span className="hidden sm:inline">·</span>
              <span>{PRICING.garantiaDias} dias de garantia</span>
            </div>
          </Reveal>

          {/* scroll hint */}
          <div className="mt-12 animate-bounce">
            <ArrowDown className="w-5 h-5 text-white/30 mx-auto" />
          </div>
        </div>
      </section>

      {/* ── DOR ───────────────────────────────────────────────────── */}
      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="max-w-page-lg mx-auto">
          <Reveal variant="up">
            <h2
              className="text-center font-bold tracking-tight text-brand-teal-800 leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            >
              Sua clínica sofre com algum desses problemas?
            </h2>
            <p className="text-center text-brand-neutral-muted mb-16 max-w-lg mx-auto">
              Se reconheceu pelo menos um, a ServarClin resolve.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {PAIN_POINTS.map((pain, i) => (
              <Reveal key={pain.title} variant="up" delay={i * 150}>
                <div className="rounded-2xl border border-border bg-white p-8 text-center group hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    <pain.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-teal-800 mb-3">{pain.title}</h3>
                  <p className="text-sm text-brand-neutral-muted leading-relaxed">{pain.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA (3 passos) ─────────────────────────────── */}
      <section className="px-6 py-20 lg:px-12 lg:py-28 bg-white border-y border-border">
        <div className="max-w-page-lg mx-auto">
          <Reveal variant="up">
            <p
              className="text-center mb-4 font-mono uppercase tracking-[0.18em] text-brand-cyan-600"
              style={{ fontSize: 'var(--text-eyebrow)' }}
            >
              COMO FUNCIONA
            </p>
            <h2
              className="text-center font-bold tracking-tight text-brand-teal-800 leading-[1.1] mb-16"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            >
              Em 3 passos simples
            </h2>
          </Reveal>

          <div className="grid gap-12 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} variant="up" delay={i * 150}>
                <div className="text-center group">
                  <div className="relative mx-auto mb-6">
                    <div className="w-16 h-16 rounded-3xl bg-brand-neutral-bg text-brand-teal-800 flex items-center justify-center mx-auto group-hover:bg-brand-teal-800 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-large group-hover:-translate-y-1">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-cyan-400 text-brand-teal-800 text-xs font-black flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-teal-800 mb-3">{step.title}</h3>
                  <p className="text-sm text-brand-neutral-muted leading-relaxed px-4">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUE CONFIAR ──────────────────────────────────────── */}
      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="max-w-page-md mx-auto">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <p
                className="mb-4 font-mono uppercase tracking-[0.18em] text-brand-cyan-600"
                style={{ fontSize: 'var(--text-eyebrow)' }}
              >
                NÃO É CHATBOT
              </p>
              <h2
                className="font-bold tracking-tight text-brand-teal-800 leading-[1.1]"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
              >
                É atendimento de verdade.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">
            {TRUST_ITEMS.map((item, i) => (
              <Reveal key={i} variant="up" delay={i * 80}>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 hover:shadow-soft transition-all">
                  <Check className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-brand-neutral-muted leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING RESUMIDO ─────────────────────────────────────── */}
      <section className="px-6 py-20 lg:px-12 lg:py-28 bg-white border-y border-border">
        <div className="max-w-page-lg mx-auto">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <p
                className="mb-4 font-mono uppercase tracking-[0.18em] text-brand-cyan-600"
                style={{ fontSize: 'var(--text-eyebrow)' }}
              >
                TRANSPARENTE · SIMPLES · SEM SURPRESA
              </p>
              <h2
                className="font-bold tracking-tight text-brand-teal-800 leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
              >
                Mensalidade fixa por clínica — não por médico.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {PRICING.tiers.map((tier, i) => (
              <Reveal key={tier.slug} variant="up" delay={i * 150}>
                <div
                  className={`rounded-2xl border p-6 text-center transition-all ${
                    tier.destaque
                      ? 'border-brand-teal-800 shadow-large relative'
                      : 'border-border shadow-soft'
                  }`}
                >
                  {tier.destaque && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-brand-teal-800 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-cyan-400">
                      <Sparkles className="w-3 h-3" /> Mais popular
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-brand-teal-800 mb-1">{tier.nome}</h3>
                  <p className="text-xs text-brand-neutral-muted mb-4">{tier.publico}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-brand-teal-800">{formatBRL(tier.preco)}</span>
                    <span className="text-sm text-brand-neutral-muted">/mês</span>
                  </div>
                  <p className="text-xs text-brand-neutral-light mb-4">
                    Até {tier.medicosLimite} médicos · Ilimitado
                  </p>
                  <ul className="text-left space-y-2 mb-6">
                    {tier.features.slice(0, 4).map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-brand-neutral-muted">
                        <Check className="w-4 h-4 text-brand-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#formulario"
                    className={`block rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                      tier.destaque
                        ? 'bg-brand-teal-800 text-white hover:bg-brand-teal-700'
                        : 'border-2 border-brand-teal-800 text-brand-teal-800 hover:bg-brand-teal-800 hover:text-white'
                    }`}
                  >
                    Quero este plano
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Garantia */}
          <Reveal variant="up">
            <div className="mt-12 rounded-2xl border-2 border-brand-cyan-400 bg-brand-cyan-50/50 p-6 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <ShieldCheck className="w-16 h-16 text-brand-cyan-600" />
              </div>
              <div className="relative z-10">
                <p className="text-2xl font-bold text-brand-teal-800 mb-2">
                  {PRICING.garantiaDias} dias de Garantia Incondicional
                </p>
                <p className="text-sm text-brand-neutral-muted max-w-md mx-auto">
                  Se em 30 dias não estiver satisfeito, devolvemos 100% do valor. Sem perguntas, sem burocracia.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA FINAL — FORMULÁRIO + WHATSAPP ────────────────────── */}
      <section id="formulario" className="px-6 py-20 lg:px-12 lg:py-28 scroll-mt-8">
        <div className="max-w-page-md mx-auto">
          <Reveal variant="up">
            <div className="text-center mb-10">
              <h2
                className="font-bold tracking-tight text-brand-teal-800 leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
              >
                Comece hoje. Teste sem compromisso.
              </h2>
              <p className="text-brand-neutral-muted max-w-lg mx-auto">
                Preencha abaixo e o Erick Henrique — fundador da ServarX — entra em contato para montar a demonstração certa para sua clínica.
              </p>
            </div>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <div className="rounded-3xl border border-border bg-white p-8 lg:p-10 shadow-soft">
              <Suspense fallback={<div className="h-96 animate-pulse bg-brand-neutral-bg rounded-xl" />}>
                <LpContactForm />
              </Suspense>
            </div>
          </Reveal>

          {/* WhatsApp alternativo */}
          <Reveal variant="up" delay={300}>
            <div className="mt-8 text-center">
              <p className="text-sm text-brand-neutral-muted mb-3">Prefere falar direto?</p>
              <WhatsAppLink
                text="Oi! Vi o anúncio e quero saber mais sobre o ServarClin para minha clínica."
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-cta-accent hover:bg-[#1da851] hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com o fundador no WhatsApp
              </WhatsAppLink>
              <p className="mt-3 text-xs text-brand-neutral-light">
                Resposta em até 24h · Demonstração gratuita · Sem compromisso
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MINI FOOTER ──────────────────────────────────────────── */}
      <footer className="py-8 px-6 border-t border-border text-center text-xs text-brand-neutral-light">
        <p>
          {SITE.empresa.nomeFantasia} · {SITE.empresa.razaoSocial} · {SITE.endereco.full}
        </p>
        <p className="mt-1">
          <a href="/privacidade" className="hover:underline">Política de Privacidade</a>
          {' · '}
          <a href="/termos" className="hover:underline">Termos de Uso</a>
        </p>
      </footer>
    </main>
  );
}
