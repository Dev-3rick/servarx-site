import React from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { Users, Stethoscope, Sparkles, Eye, FlaskConical, Dumbbell, Baby, Heart } from 'lucide-react';
import Link from 'next/link';

const SPECIALTIES = [
  {
    title: 'Multiclínicas',
    description: 'Múltiplos médicos e especialidades em um único número de WhatsApp — sem custo de licença por profissional.',
    icon: Users,
    color: 'bg-cyan-500/10 text-cyan-700',
    href: '/contato?especialidade=multiclinica',
  },
  {
    title: 'Odontologia',
    description: 'Confirmações automáticas para consultas recorrentes e reagendamento ativo para nunca ter cadeira vazia.',
    icon: Stethoscope,
    color: 'bg-emerald-500/10 text-emerald-700',
    href: '/contato?especialidade=odontologia',
  },
  {
    title: 'Oftalmologia',
    description: 'Atendimento 24h para dúvidas sobre exames, agendamento de retornos e lembretes de uso de colírio.',
    icon: Eye,
    color: 'bg-blue-500/10 text-blue-700',
    href: '/contato?especialidade=oftalmologia',
  },
  {
    title: 'Estética e Bem-estar',
    description: 'Paciente tira dúvidas sobre procedimentos, agenda e confirma — tudo pelo WhatsApp, a qualquer hora.',
    icon: Sparkles,
    color: 'bg-purple-500/10 text-purple-700',
    href: '/contato?especialidade=estetica',
  },
  {
    title: 'Laboratórios',
    description: 'Informe resultados, oriente preparo de exames e agende coletas sem uma atendente presa ao telefone.',
    icon: FlaskConical,
    color: 'bg-orange-500/10 text-orange-700',
    href: '/contato?especialidade=laboratorio',
  },
  {
    title: 'Fisioterapia',
    description: 'Lembretes de sessão, confirmações automáticas e reagendamento ativo — menos faltas, mais ocupação.',
    icon: Dumbbell,
    color: 'bg-rose-500/10 text-rose-700',
    href: '/contato?especialidade=fisioterapia',
  },
];

export function Specialties() {
  return (
    <section className="py-24 lg:py-32 bg-brand-neutral-surface" id="especialidades">
      <div className="max-w-page-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <Reveal variant="up">
            <p className="mb-4 font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs font-bold">
              Feito sob medida
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-teal-800 tracking-tight mb-6">
              Funciona para a sua{' '}
              <br className="hidden sm:block" />
              especialidade.
            </h2>
            <p className="text-lg text-brand-neutral-muted max-w-page-md mx-auto">
              A ServarX se adapta ao fluxo específico de cada especialidade — o tom de voz, as regras de agendamento e os processos são configurados para o seu tipo de clínica.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SPECIALTIES.map((spec, i) => (
            <Reveal key={spec.title} variant="up" delay={i * 100}>
              <Link
                href={spec.href}
                className="group flex flex-col h-full p-8 rounded-3xl border border-brand-neutral-border bg-white hover:border-brand-cyan-400/50 hover:shadow-large transition-all duration-300 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl ${spec.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <spec.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-teal-800 mb-3">{spec.title}</h3>
                <p className="text-brand-neutral-muted leading-relaxed flex-1">
                  {spec.description}
                </p>
                <div className="mt-6 pt-5 border-t border-brand-neutral-border/50">
                  <span className="text-sm font-bold text-brand-teal-800 group-hover:text-brand-cyan-600 inline-flex items-center gap-1.5 transition-colors">
                    Falar sobre minha clínica <span className="text-lg group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
