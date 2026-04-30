import { Reveal } from '@/components/motion/Reveal';

/**
 * Section "Não é só mais um SaaS. Não é só mais um atendente de IA."
 *
 * Versão DARK — bg teal-800 com glow cyan, cria contraste cinematic
 * logo após o hero claro. Anti-claims diretos do dono (Bloco 5.3 do briefing).
 */
export function AntiClaim() {
  return (
    <section className="relative overflow-hidden bg-brand-teal-800 text-white">
      {/* Glow background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: 'var(--gradient-hero-spot)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-page-lg mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center">
        <Reveal variant="up">
          <p
            className="mb-8 font-mono uppercase tracking-[0.18em] text-brand-cyan-400"
            style={{ fontSize: 'var(--text-eyebrow)' }}
          >
            O QUE A SERVARX NÃO É
          </p>

          <h2
            className="font-bold tracking-tight leading-[1.1] mb-10"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Não é só mais um SaaS.
            <br />
            Não é só mais um{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #67e8f9 0%, #22d3ee 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              atendente de IA
            </span>
            .
          </h2>

          <p className="text-lg lg:text-xl text-white/80 max-w-page-md mx-auto leading-relaxed">
            A gente acredita que <strong className="text-white">satisfação no atendimento</strong> não pode cair quando você troca uma pessoa por uma IA — tem que <strong className="text-white">subir</strong>.
            Por isso construímos a ServarX como uma empresa{' '}
            <strong className="text-white">tier 1</strong>:
            IA que executa de verdade, dados de paciente cifrados nível bancário,
            e tom de voz brasileiro — não corporativês.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
