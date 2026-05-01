import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Bot,
  Calendar,
  CheckCircle2,
  Cpu,
  LayoutDashboard,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users,
  ExternalLink,
} from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SITE, PRICING } from '@/lib/site';

export const metadata: Metadata = {
  title: 'ServarClin — Secretária IA para Clínicas no WhatsApp',
  description:
    'O ServarClin coloca uma IA no WhatsApp da sua clínica que agenda, confirma e lembra pacientes 24h. Integrado ao Google Calendar. LGPD compliant. A partir de R$ 297/mês.',
};

/* ─── Data ───────────────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: MessageSquare,
    title: 'Atendimento 24h no WhatsApp',
    desc: 'A IA responde, agenda e tira dúvidas mesmo quando sua recepção está fechada — em português real, sem "digite 1".',
  },
  {
    icon: Calendar,
    title: 'Google Calendar integrado',
    desc: 'Cada médico vê os agendamentos no calendário que já usa. Sem conflito de horário, sem double-booking.',
  },
  {
    icon: Bell,
    title: 'Lembrete automático -40% no-show',
    desc: 'Envia lembrete 24h antes. O paciente confirma ou remarca com 1 mensagem — sem você ligar para ninguém.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard em tempo real',
    desc: 'Novos contatos, agendamentos do dia e próximas consultas na tela principal assim que você abre o sistema.',
  },
  {
    icon: Users,
    title: 'Gestão de pacientes (LGPD)',
    desc: 'Cadastro automático via conversa. Dados criptografados com AES-256 — conformidade total com a LGPD.',
  },
  {
    icon: Bot,
    title: 'IA com personalidade configurável',
    desc: 'Você define o nome, tom de voz e escopo da assistente. Ela se apresenta como parte da sua clínica, não como um robô genérico.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Conecte seu WhatsApp',
    desc: 'Em 5 minutos, escaneando um QR Code. Sem trocar de número, sem depender de TI.',
  },
  {
    n: '02',
    title: 'Configure sua clínica',
    desc: 'Cadastre médicos, horários e convênios. A IA aprende as regras da sua clínica automaticamente.',
  },
  {
    n: '03',
    title: 'Sua clínica nunca mais perde paciente',
    desc: 'O WhatsApp começa a atender sozinho 24h. Você monitora tudo pelo painel.',
  },
];

/* ─── Page ───────────────────────────────────────────────────────── */

export default function ServarClinMarketingPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 py-20 lg:px-12 lg:py-28"
        style={{ background: 'var(--gradient-hero-glow)' }}
      >
        <div className="max-w-page-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Copy */}
            <div>
              <Reveal immediate variant="up" delay={100}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-400/10 border border-brand-cyan-400/20 text-brand-cyan-600 text-xs font-semibold mb-6 uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan-400" />
                  </span>
                  ServarClin · Produto ServarX
                </div>
              </Reveal>

              <Reveal immediate variant="up" delay={200}>
                <h1
                  className="font-bold tracking-tight text-brand-teal-800 leading-[1.1] mb-6"
                  style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
                >
                  Cada mensagem sem resposta é{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #0891b2 0%, #0f766e 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    uma consulta perdida.
                  </span>
                </h1>
              </Reveal>

              <Reveal immediate variant="up" delay={320}>
                <p className="text-lg text-brand-neutral-muted leading-relaxed mb-8 max-w-[520px]">
                  O ServarClin coloca uma IA treinada no WhatsApp da sua clínica. Ela agenda,
                  confirma e lembra pacientes — enquanto você está no consultório, ou dormindo.
                </p>
              </Reveal>

              <Reveal immediate variant="up" delay={440}>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Link
                    href="/contato?ref=servarclin-hero"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-teal-800 px-8 py-4 font-bold text-white shadow-cta hover:bg-brand-teal-700 hover:scale-105 transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    Ver demonstração gratuita
                  </Link>
                  <Link
                    href={SITE.produto.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-brand-teal-800 px-8 py-4 font-semibold text-brand-teal-800 hover:bg-brand-teal-800 hover:text-white transition-all"
                  >
                    Já sou cliente <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-xs text-brand-neutral-muted">
                  🛡️ Garantia de 30 dias · Sem cartão de crédito · Suporte em PT-BR
                </p>
              </Reveal>
            </div>

            {/* Chat mockup */}
            <Reveal immediate variant="up" delay={300}>
              <div className="relative max-w-[420px] mx-auto">
                <div className="bg-white rounded-2xl shadow-large border border-brand-neutral-border overflow-hidden">
                  {/* WhatsApp header */}
                  <div className="bg-brand-teal-800 px-5 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-cyan-500/20 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-brand-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">ServarX.IA</p>
                      <p className="text-brand-cyan-400 text-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> online agora
                      </p>
                    </div>
                  </div>
                  {/* Messages */}
                  <div className="px-5 py-5 space-y-3" style={{ background: '#ECE5DD' }}>
                    {[
                      { side: 'them', text: 'Oi! Sou a assistente da Clínica São Lucas 👋' },
                      { side: 'me', text: 'Quero marcar com a Dra. Carolina' },
                      { side: 'them', text: 'Tenho quinta (08/05) às 10h30 disponível. Confirmo?' },
                      { side: 'me', text: 'Sim! Perfeito ✨' },
                      { side: 'them', text: 'Agendado! Te lembro 24h antes 🗓️' },
                    ].map((m, i) => (
                      <div key={i} className={`flex ${m.side === 'me' ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed shadow-sm ${
                            m.side === 'me'
                              ? 'bg-[#DCF8C6] text-gray-800 rounded-br-sm'
                              : 'bg-white text-gray-800 rounded-bl-sm'
                          }`}
                        >
                          {m.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Floating glow */}
                <div
                  className="absolute -inset-4 -z-10 opacity-20 blur-3xl rounded-full"
                  style={{ background: 'radial-gradient(ellipse, #22d3ee 0%, transparent 70%)' }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────────── */}
      <section className="border-y border-brand-neutral-border bg-white">
        <div className="max-w-page-xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-brand-neutral-muted">
          {[
            { icon: ShieldCheck, text: 'LGPD compliance' },
            { icon: BadgeCheck, text: 'Dados isolados por clínica' },
            { icon: Cpu, text: 'IA auditada · log completo' },
            { icon: Bell, text: '-40% no-show comprovado' },
          ].map((t) => (
            <span key={t.text} className="inline-flex items-center gap-2 font-medium">
              <t.icon className="w-4 h-4 text-brand-cyan-500" />
              {t.text}
            </span>
          ))}
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-6 lg:px-8" id="funcionalidades">
        <div className="max-w-page-xl mx-auto">
          <Reveal variant="up">
            <div className="text-center mb-14">
              <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs font-bold mb-4">
                Funcionalidades
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal-800 tracking-tight mb-4">
                Tudo que sua clínica precisa para parar de perder paciente.
              </h2>
              <p className="text-brand-neutral-muted max-w-xl mx-auto">
                Construído por engenheiros que viram clínicas perderem 30% das consultas por atendimento
                manual fora de hora.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} variant="up" delay={i * 80}>
                <div className="rounded-2xl border border-brand-neutral-border bg-white p-6 h-full hover:border-brand-cyan-400/40 hover:shadow-medium transition-all">
                  <div className="w-11 h-11 rounded-xl bg-brand-cyan-100 text-brand-cyan-600 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-brand-teal-800 mb-2">{f.title}</h3>
                  <p className="text-sm text-brand-neutral-muted leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-brand-neutral-border px-6 lg:px-8" id="como-funciona">
        <div className="max-w-page-xl mx-auto">
          <Reveal variant="up">
            <div className="text-center mb-14">
              <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs font-bold mb-4">
                Como funciona
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal-800 tracking-tight">
                3 passos. Nenhum técnico precisa ser contratado.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} variant="up" delay={i * 120}>
                <div className="relative">
                  <div className="text-5xl font-extrabold text-brand-cyan-100 mb-3">{s.n}</div>
                  <h3 className="text-xl font-bold text-brand-teal-800 mb-2">{s.title}</h3>
                  <p className="text-brand-neutral-muted leading-relaxed">{s.desc}</p>
                  {i < STEPS.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 w-5 h-5 text-brand-neutral-light" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-6 lg:px-8" id="planos">
        <div className="max-w-page-xl mx-auto">
          <Reveal variant="up">
            <div className="text-center mb-14">
              <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs font-bold mb-4">
                Planos
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal-800 tracking-tight mb-4">
                Preço por clínica — não por médico.
              </h2>
              <p className="text-brand-neutral-muted">
                Você paga pela clínica. Não importa se tem 1 ou 10 médicos atendendo.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {PRICING.tiers.map((p, i) => (
              <Reveal key={p.slug} variant="up" delay={i * 100}>
                <div
                  className={`rounded-2xl border p-8 flex flex-col relative ${
                    p.destaque
                      ? 'border-brand-teal-800 shadow-large lg:scale-[1.03] z-10 bg-white'
                      : 'border-brand-neutral-border bg-white'
                  }`}
                >
                  {p.destaque && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-teal-800 text-brand-cyan-400 text-xs font-bold uppercase tracking-wider">
                      Mais escolhido
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-brand-teal-800 mb-1">{p.nome}</h3>
                  <p className="text-xs text-brand-neutral-muted mb-5">{p.publico}</p>
                  <div className="flex flex-col gap-1 mb-6 pb-6 border-b border-brand-neutral-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-brand-teal-800">
                        R$ {Math.round(p.preco * 0.9)}
                      </span>
                      <span className="text-sm text-brand-neutral-muted">/mês</span>
                    </div>
                    <p className="text-[10px] font-bold text-brand-cyan-600 uppercase tracking-widest">No Plano Anual (10% OFF)</p>
                    <p className="text-[10px] text-brand-neutral-muted mt-2 font-medium">
                      * Isenção de instalação no cartão
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-brand-neutral-muted">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan-500 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={p.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center rounded-full px-6 py-3 font-semibold transition-all ${
                      p.destaque
                        ? 'bg-brand-teal-800 text-white hover:bg-brand-teal-700'
                        : 'border-2 border-brand-teal-800 text-brand-teal-800 hover:bg-brand-teal-800 hover:text-white'
                    }`}
                  >
                    Assinar {p.nome.replace('ServarClin ', '')}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Garantia */}
          <Reveal variant="fade">
            <div className="text-center p-6 rounded-2xl border-2 border-brand-cyan-400 bg-brand-cyan-50 max-w-xl mx-auto">
              <p className="font-bold text-brand-teal-800 mb-1">🛡️ Garantia incondicional de 30 dias</p>
              <p className="text-sm text-brand-neutral-muted">
                Não funcionou para sua clínica? Devolvemos 100% do valor da mensalidade. Sem perguntas, sem letrinha miúda.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-teal-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'var(--gradient-hero-spot)' }}
        />
        <Reveal variant="up">
          <div className="relative max-w-page-md mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Sua clínica merece uma secretária que trabalha 24h.
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Em 5 minutos a gente te mostra como fica para a sua clínica, ao vivo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contato?ref=servarclin-final"
                className="inline-flex items-center gap-2 rounded-full bg-white text-brand-teal-800 px-8 py-4 font-bold hover:bg-brand-cyan-50 hover:scale-105 transition-all shadow-cta-accent"
              >
                Ver demonstração grátis <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={SITE.produto.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                Já sou cliente — entrar <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
            <p className="mt-4 text-white/40 text-xs">
              Sem compromisso · Demonstração ao vivo · Implantação assistida inclusa
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
