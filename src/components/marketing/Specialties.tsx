import React from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { Users, Stethoscope, Sparkles } from 'lucide-react';

const SPECIALTIES = [
  {
    title: 'Multiclínicas',
    description: 'Gerencie múltiplos médicos e especialidades em um único número de WhatsApp, sem custo por licença extra.',
    icon: Users,
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    title: 'Odontologia',
    description: 'Confirmações automáticas de consultas recorrentes e reagendamento ativo para evitar cadeiras vazias.',
    icon: Stethoscope,
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    title: 'Estética e Bem-estar',
    description: 'Atendimento 24h para dúvidas sobre procedimentos e agendamento imediato por áudio ou texto.',
    icon: Sparkles,
    color: 'bg-purple-500/10 text-purple-600',
  },
];

export function Specialties() {
  return (
    <section className="py-24 lg:py-32 bg-brand-neutral-surface">
      <div className="max-w-page-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <Reveal variant="up">
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-teal-800 tracking-tight mb-6">
              Feito sob medida para<br className="hidden sm:block" /> o seu tipo de negócio.
            </h2>
            <p className="text-lg text-brand-neutral-muted max-w-page-md mx-auto">
              A ServarX se adapta aos fluxos específicos de cada especialidade, garantindo que o tom de voz e as regras de agendamento sejam perfeitos.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {SPECIALTIES.map((spec, i) => (
            <Reveal key={spec.title} variant="up" delay={i * 150}>
              <div className="group h-full p-8 rounded-3xl border border-brand-neutral-border bg-white hover:border-brand-cyan-400/50 hover:shadow-large transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl ${spec.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <spec.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-teal-800 mb-4">{spec.title}</h3>
                <p className="text-brand-neutral-muted leading-relaxed">
                  {spec.description}
                </p>
                <div className="mt-8 pt-6 border-t border-brand-neutral-border/50">
                   <button className="text-sm font-bold text-brand-teal-800 group-hover:text-brand-cyan-600 inline-flex items-center gap-2 transition-colors">
                      Saiba mais <span className="text-lg">→</span>
                   </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
