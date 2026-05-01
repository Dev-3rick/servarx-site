import Link from 'next/link';
import { MapPin, Sparkles, Clock } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

const SLOTS = [
  { city: 'Vaga aberta', clinic: 'Em breve revelado', open: true },
  { city: 'Vaga aberta', clinic: 'Em breve revelado', open: true },
  { city: 'Vaga aberta', clinic: 'Em breve revelado', open: true },
  { city: 'Vaga aberta', clinic: 'Em breve revelado', open: true },
  { city: 'Vaga aberta', clinic: 'Em breve revelado', open: true },
];

// Data de encerramento do programa (ajuste conforme necessário)
const DEADLINE = '30/06/2026';

/**
 * 5 Parceiros Fundadores — section de scarcity + social proof placeholder.
 * Quando 1ª clínica fecha, primeiro slot vira foto + nome + cidade + quote.
 */
export function FoundersBanner() {
  const openSlots = SLOTS.filter((s) => s.open).length;

  return (
    <section className="relative overflow-hidden bg-brand-teal-800 text-white">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: 'var(--gradient-hero-spot)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-page-xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <Reveal variant="up">
          <div className="text-center mb-12">
            <p
              className="mb-4 font-mono uppercase tracking-[0.18em] text-brand-cyan-300 inline-flex items-center gap-2"
              style={{ fontSize: 'var(--text-eyebrow)' }}
            >
              <Sparkles className="w-3 h-3" />
              Programa Parceiros Fundadores
            </p>
            <h2
              className="font-bold tracking-tight leading-tight mb-6 mx-auto max-w-page-md"
              style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}
            >
              Os 5 primeiros centros médicos da ServarX em Minas Gerais.
            </h2>
            <p className="text-lg text-white/80 max-w-page-md mx-auto leading-relaxed mb-4">
              Implantação por nossa conta. Acompanhamento próximo do fundador. Lugar
              permanente nos cases da ServarX.{' '}
              <strong className="text-white">{openSlots} vagas abertas.</strong>
            </p>
            {/* Deadline urgency */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-cyan-300 text-sm font-medium">
              <Clock className="w-4 h-4" />
              Programa encerra em {DEADLINE}
            </div>
          </div>
        </Reveal>

        {/* Cards dos 5 slots — visual de oportunidade, não de vazio */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-5 mb-12">
          {SLOTS.map((slot, idx) => (
            <Reveal
              key={idx}
              variant="up"
              delay={idx * 130}
              className="aspect-[3/4] rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-all hover:bg-white/10 hover:border-brand-cyan-400/40 hover:scale-[1.02] cursor-default"
            >
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-brand-cyan-400/40 flex items-center justify-center mb-4 bg-brand-cyan-400/5">
                <MapPin className="w-6 h-6 text-brand-cyan-400/60" />
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-white/60 mb-1 text-center font-semibold">
                {slot.city}
              </p>
              <p className="text-xs text-white/30 text-center leading-relaxed">
                {slot.clinic}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={200} className="text-center">
          <Link
            href="/contato?ref=parceiro-fundador"
            className="inline-flex items-center gap-2 rounded-full bg-brand-cyan-400 text-brand-teal-800 px-8 py-4 font-bold shadow-cta-accent hover:bg-brand-cyan-300 hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-cyan-400/40"
          >
            <Sparkles className="w-5 h-5" />
            Quero ser um dos 5
          </Link>
          <p className="mt-4 text-sm text-white/60">
            Sem compromisso · resposta em até 24h
          </p>
        </Reveal>
      </div>
    </section>
  );
}
