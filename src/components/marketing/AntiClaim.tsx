import { Reveal } from '@/components/motion/Reveal';

/**
 * Section "Não é só mais um SaaS. Não é só mais um atendente de IA."
 *
 * Anti-claims diretos do dono (Bloco 5.3 do briefing). Tipografia faz tudo.
 */
export function AntiClaim() {
  return (
    <section className="px-6 py-20 lg:px-12 lg:py-28 border-y border-border bg-surface">
      <div className="max-w-page-lg mx-auto text-center">
        <Reveal variant="up">
          <p
          className="mb-8 font-mono uppercase tracking-[0.18em] text-brand-cyan-600"
          style={{ fontSize: 'var(--text-eyebrow)' }}
        >
          O QUE A SERVARX NÃO É
        </p>
        <h2
          className="font-bold tracking-tight text-brand-teal-800 leading-[1.1]"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          Não é só mais um SaaS.
          <br />
          Não é só mais um atendente de IA.
        </h2>
        <p className="mt-8 text-lg text-brand-neutral-muted max-w-page-md mx-auto leading-relaxed">
          A gente acredita que <strong className="text-brand-teal-800">satisfação no atendimento</strong> não pode cair quando você troca uma pessoa por uma IA — tem que subir.
          Por isso construímos a ServarX como uma empresa <strong className="text-brand-teal-800">tier 1</strong>:
          IA que executa de verdade, dados de paciente cifrados nível bancário,
          e tom de voz brasileiro — não corporativês.
        </p>
        </Reveal>
      </div>
    </section>
  );
}
