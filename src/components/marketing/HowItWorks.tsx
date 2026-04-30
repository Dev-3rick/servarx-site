import { MessageSquare, Brain, CalendarCheck } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

const STEPS = [
  {
    icon: MessageSquare,
    title: 'Paciente manda mensagem',
    description:
      'WhatsApp, áudio ou texto. Em qualquer hora — inclusive 23h de domingo. A ServarX.IA responde em segundos, em português puro, sem "digite 1 para".',
  },
  {
    icon: Brain,
    title: 'IA entende e age',
    description:
      'Não é chatbot decorativo. A IA interpreta intenção, consulta a agenda, respeita regras de cada médico, e age — agenda, cancela, confirma, lembra.',
  },
  {
    icon: CalendarCheck,
    title: 'Agenda atualiza sozinha',
    description:
      'Sem secretária digitando. Sem Google Agenda manual. Tudo sincronizado em tempo real. Você só recebe o paciente.',
  },
] as const;

/**
 * Section "Como funciona" — versão estática Dia 2.
 * Na Fase 2 vira section pinada com Lenis + GSAP ScrollTrigger + Lottie
 * (mockup WhatsApp animado).
 */
export function HowItWorks() {
  return (
    <section className="px-6 py-20 lg:px-12 lg:py-28">
      <div className="max-w-page-xl mx-auto">
        <Reveal variant="up">
          <div className="text-center mb-16">
            <p
              className="mb-6 font-mono uppercase tracking-[0.18em] text-brand-cyan-600"
              style={{ fontSize: 'var(--text-eyebrow)' }}
            >
              COMO FUNCIONA
            </p>
            <h2
              className="font-bold tracking-tight text-brand-teal-800 leading-[1.1] mx-auto max-w-page-lg"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Da mensagem do paciente até a agenda — sem ninguém precisar tocar.
            </h2>
          </div>
        </Reveal>

        <ol className="grid gap-6 lg:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} variant="up" delay={i * 120} as="li">
              <div
                className="relative rounded-2xl border border-border bg-surface p-8 shadow-soft hover:shadow-medium transition-shadow h-full"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-brand-teal-800 flex items-center justify-center font-mono text-sm font-bold text-brand-cyan-400">
                  {i + 1}
                </div>
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-cyan-100 text-brand-teal-800">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-brand-teal-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-neutral-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
