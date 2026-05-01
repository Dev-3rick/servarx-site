import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, Bot, User } from 'lucide-react';
import { ContactForm } from '@/components/marketing/ContactForm';
import { Reveal } from '@/components/motion/Reveal';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Falar com a ServarX — Agende sua demonstração',
  description:
    'Quer ver a ServarX.IA em ação na sua clínica? Fala com o fundador. A demonstração é gratuita, sem compromisso e feita sob medida para o seu tipo de atendimento.',
};

export default function ContatoPage() {
  return (
    <>
      {/* Hero — DARK (padrão escuro do site) */}
      <section className="relative overflow-hidden bg-brand-teal-800 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'var(--gradient-hero-spot)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-page-md mx-auto px-6 lg:px-12 py-20 lg:py-28 text-center">
          <Reveal immediate variant="up" delay={0} duration={1.0}>
            <p
              className="mb-6 font-mono uppercase tracking-[0.18em] text-brand-cyan-400"
              style={{ fontSize: 'var(--text-eyebrow)' }}
            >
              DEMONSTRAÇÃO GRATUITA
            </p>
          </Reveal>

          <Reveal immediate variant="up" delay={200} duration={1.1}>
            <h1
              className="font-bold tracking-tight text-white leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              A IA cuida dos seus pacientes.
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #67e8f9 0%, #22d3ee 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                O fundador cuida da sua clínica.
              </span>
            </h1>
          </Reveal>

          <Reveal immediate variant="up" delay={420} duration={1.1}>
            <p className="text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
              Preencha abaixo e o Erick — fundador da ServarX — entra em contato
              pessoalmente para entender o fluxo da sua clínica e montar a demonstração
              certa para você.
            </p>
          </Reveal>

          {/* Contextual banner — resolve the "human vs AI" paradox */}
          <Reveal immediate variant="up" delay={600} duration={1.0}>
            <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-sm">
              <div className="flex items-center gap-2 text-white/80">
                <Bot className="w-5 h-5 text-brand-cyan-400" />
                <span>
                  <strong className="text-white">ServarX.IA</strong>{' '}
                  → cuida dos seus pacientes 24h
                </span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2 text-white/80">
                <User className="w-5 h-5 text-brand-cyan-300" />
                <span>
                  <strong className="text-white">Erick (fundador)</strong>{' '}
                  → cuida de você
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form + sidebar — claro */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-page-lg mx-auto">
          <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
            {/* Form */}
            <Reveal variant="up">
              <div className="rounded-3xl border border-border bg-surface p-8 lg:p-10 shadow-soft">
                <h2 className="text-2xl font-bold text-brand-teal-800 mb-2">
                  Solicitar demonstração
                </h2>
                <p className="text-brand-neutral-muted mb-8">
                  Quanto mais você contar sobre a sua clínica, mais certeira é a demo. Prometemos mostrar a IA resolvendo um problema real do seu dia a dia.
                </p>
                <Suspense fallback={<div className="h-96 animate-pulse bg-brand-neutral-bg rounded-xl" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </Reveal>

            {/* Info lateral */}
            <Reveal variant="up" delay={150} as="aside" className="space-y-8">

              {/* O que acontece após o envio */}
              <div className="rounded-2xl bg-brand-cyan-50 border border-brand-cyan-400/20 p-6">
                <h3 className="text-base font-bold text-brand-teal-800 mb-4">
                  O que acontece depois?
                </h3>
                <ol className="space-y-3 text-sm text-brand-neutral-muted">
                  {[
                    'Erick analisa o perfil da sua clínica',
                    'Entra em contato em até 24h pelo WhatsApp',
                    'Agenda uma demo ao vivo da IA no seu fluxo real',
                    'Sem script genérico — a demo é feita sob medida',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-teal-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-teal-800 mb-4">
                  Prefere falar direto?
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-mono uppercase tracking-wider text-xs text-brand-neutral-light mb-1">WhatsApp</p>
                      <a
                        href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-teal-800 font-semibold hover:underline"
                      >
                        Falar com o fundador
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-mono uppercase tracking-wider text-xs text-brand-neutral-light mb-1">Email</p>
                      <a
                        href={`mailto:${SITE.email.contato}`}
                        className="text-brand-teal-800 font-semibold hover:underline break-all"
                      >
                        {SITE.email.contato}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-teal-800 mb-4">
                  Onde a gente fica
                </h3>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono uppercase tracking-wider text-xs text-brand-neutral-light mb-1">Sede</p>
                    <p className="text-brand-neutral-muted">{SITE.endereco.full}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-teal-800 mb-4">
                  Prazo de retorno
                </h3>
                <div className="flex items-start gap-3 text-sm">
                  <Clock className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono uppercase tracking-wider text-xs text-brand-neutral-light mb-1">SLA</p>
                    <p className="text-brand-neutral-muted">
                      Em até 24h — geralmente no mesmo dia. O Erick analisa cada solicitação pessoalmente antes de entrar em contato.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-brand-neutral-bg border border-border p-6">
                <p className="text-sm text-brand-neutral-muted leading-relaxed">
                  <strong className="text-brand-teal-800">Para questões de privacidade / LGPD:</strong>{' '}
                  <a href={`mailto:${SITE.email.lgpd}`} className="text-brand-teal-800 underline">
                    {SITE.email.lgpd}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WhatsApp direto — DARK */}
      <section className="relative overflow-hidden bg-brand-teal-800 text-white">
        <div className="absolute inset-0 opacity-40" style={{ background: 'var(--gradient-hero-spot)' }} aria-hidden="true" />
        <div className="relative max-w-page-md mx-auto px-6 lg:px-12 py-20 lg:py-24 text-center">
          <Reveal variant="up">
            <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-400 text-xs mb-4">
              ACESSO RÁPIDO
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Prefere começar pelo WhatsApp?
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-md mx-auto">
              Manda uma mensagem direta para o Erick. Ele analisa o perfil da sua clínica e te chama para a demonstração.
            </p>
            <Link
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(SITE.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white shadow-cta-accent hover:bg-[#1da851] hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com o fundador no WhatsApp
            </Link>
            <p className="mt-4 text-sm text-white/50">
              Resposta em até 24h · Demonstração gratuita · Sem compromisso
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
