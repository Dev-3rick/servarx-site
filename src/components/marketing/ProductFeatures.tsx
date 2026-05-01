'use client';

import { useState } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import {
  MessageSquare,
  CalendarCheck,
  Users,
  Bot,
  BarChart3,
  Plug,
  ShieldCheck,
  Stethoscope,
  ChevronDown,
} from 'lucide-react';

const FEATURES = [
  {
    id: 'ia-conversacional',
    icon: Bot,
    color: 'bg-cyan-500/10 text-cyan-700',
    title: 'IA Conversacional 24h',
    tagline: 'Seu atendimento nunca dorme',
    description:
      'A ServarX.IA responde no WhatsApp em segundos — áudio, texto ou foto. Entende intenção em português real, sem "digite 1 para", sem chatbot travado. Você configura o nome, o tom de voz e o escopo da IA.',
    bullets: [
      'Responde áudios de paciente (transcreve e interpreta)',
      'Tom de voz configurável: acolhedor, formal ou objetivo',
      'Escala para humano automaticamente em casos de urgência',
      'Ativa e pausa com um toggle — sem precisar de TI',
    ],
  },
  {
    id: 'agenda-semanal',
    icon: CalendarCheck,
    color: 'bg-emerald-500/10 text-emerald-700',
    title: 'Agenda Visual Semanal',
    tagline: 'Tudo na tela, sem planilha',
    description:
      'Visualize a semana inteira em 7 colunas. Filtre por profissional, navegue entre semanas e crie consultas manualmente quando precisar. A IA preenche sozinha conforme as marcações chegam no WhatsApp.',
    bullets: [
      'Visão semanal com 7 colunas (seg–dom)',
      'Filtro por profissional em tempo real',
      'Status automático: agendada, confirmada, faltou, cancelada',
      'Sincronização bidirecional com Google Calendar',
    ],
  },
  {
    id: 'gestao-pacientes',
    icon: Users,
    color: 'bg-blue-500/10 text-blue-700',
    title: 'Gestão de Pacientes',
    tagline: 'Cadastro automático, dados protegidos',
    description:
      'Quando um novo paciente manda mensagem, a IA cria o cadastro automaticamente. Dados pessoais são cifrados com criptografia nível bancário (AES-256). Busca por nome, CPF ou telefone.',
    bullets: [
      'Cadastro automático via conversa no WhatsApp',
      'Dados criptografados (AES-256) — conformidade LGPD',
      'Busca por nome, CPF ou telefone (hash-safe)',
      'Histórico completo de consultas por paciente',
    ],
  },
  {
    id: 'gestao-conversas',
    icon: MessageSquare,
    color: 'bg-violet-500/10 text-violet-700',
    title: 'Inbox de Conversas',
    tagline: 'Veja cada atendimento em tempo real',
    description:
      'Acompanhe todas as conversas do WhatsApp em um inbox visual. Saiba quem a IA está atendendo, quem aguarda intervenção humana e o histórico completo de cada troca de mensagem.',
    bullets: [
      'Inbox com atualização automática (a cada 10s)',
      'Filtros: Em atendimento (IA), Aguardando humano, Encerradas',
      'Preview da última mensagem em cada card',
      'Intervenção humana com um clique (pausa a IA)',
    ],
  },
  {
    id: 'dashboard',
    icon: BarChart3,
    color: 'bg-amber-500/10 text-amber-700',
    title: 'Dashboard em Tempo Real',
    tagline: 'Os números que importam, no topo',
    description:
      'Ao abrir o sistema, você vê: novos contatos do dia, agendamentos nas últimas 24h, pacientes na agenda de hoje e conversas ativas. Próximas consultas e conversas recentes ficam visíveis na tela principal.',
    bullets: [
      'Novos contatos hoje (quantas pessoas entraram em contato)',
      'Agendamentos realizados nas últimas 24h',
      'Lista de próximas consultas com nome e horário',
      'Status em tempo real da IA, Google Calendar e WhatsApp',
    ],
  },
  {
    id: 'configuracoes',
    icon: Stethoscope,
    color: 'bg-rose-500/10 text-rose-700',
    title: 'Configurações por Clínica',
    tagline: 'Você controla cada detalhe',
    description:
      'Cada clínica tem seu próprio painel isolado. Configure profissionais, convênios aceitos, planos ativos e as regras da IA — sem impactar outras clínicas no sistema.',
    bullets: [
      'Cadastro de médicos com especialidade e Google Calendar vinculado',
      'Convênios aceitos por plano (ex: Unimed, Bradesco Saúde)',
      'Equipe com controle de acesso por papel (admin, recepção)',
      'Pré-visualização da resposta da IA antes de ativar',
    ],
  },
  {
    id: 'integracoes',
    icon: Plug,
    color: 'bg-teal-500/10 text-teal-700',
    title: 'Integrações Nativas',
    tagline: 'Conecta com o que você já usa',
    description:
      'Conecte o WhatsApp via Z-API (sem precisar de Meta Business) e o Google Calendar de cada profissional. A IA consulta a agenda em tempo real para nunca criar conflito de horário.',
    bullets: [
      'WhatsApp via Z-API — sem precisar de aprovação Meta',
      'Google Calendar por profissional (bidirecional)',
      'Webhook para sistemas externos (em roadmap)',
      'Asaas para cobrança (roadmap)',
    ],
  },
  {
    id: 'lgpd',
    icon: ShieldCheck,
    color: 'bg-green-500/10 text-green-700',
    title: 'LGPD & Segurança',
    tagline: 'Dados de paciente com proteção nível bancário',
    description:
      'Nome, CPF e telefone dos pacientes são cifrados em repouso com AES-256 e chave mestra por tenant. A IA nunca expõe dados sensíveis. Suporte a anonimização de cadastros a pedido do paciente.',
    bullets: [
      'Criptografia AES-256 em repouso para todos os PII',
      'Chave mestra por clínica (isolamento total entre tenants)',
      'Anonimização de dados a pedido (direito ao esquecimento)',
      'Isolamento multi-tenant: clínicas não veem dados umas das outras',
    ],
  },
];

export function ProductFeatures() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-white" id="funcionalidades">
      <div className="max-w-page-xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <Reveal variant="up">
            <p className="mb-4 font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs font-bold">
              Plataforma Completa
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-teal-800 tracking-tight mb-6">
              Não é só chatbot.
              <br className="hidden sm:block" />
              <span
                style={{
                  background: 'linear-gradient(135deg, #0891b2 0%, #0f766e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                É o sistema de operação da sua clínica.
              </span>
            </h2>
            <p className="text-lg text-brand-neutral-muted max-w-page-md mx-auto">
              O ServarClin entrega 8 módulos integrados — da conversa no WhatsApp ao dashboard com métricas. Tudo em um painel, sem precisar de 4 sistemas separados.
            </p>
          </Reveal>
        </div>

        {/* Feature accordion */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            const isOpen = open === feat.id;
            return (
              <Reveal key={feat.id} variant="up" delay={i * 60}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-brand-teal-800/30 shadow-medium'
                      : 'border-brand-neutral-border hover:border-brand-cyan-400/40'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : feat.id)}
                    className="w-full flex items-center gap-4 p-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${feat.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-brand-teal-800 text-base leading-tight">
                        {feat.title}
                      </p>
                      <p className="text-sm text-brand-neutral-muted mt-0.5">
                        {feat.tagline}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-neutral-muted flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 border-t border-brand-neutral-border/50">
                      <div className="pt-4 grid md:grid-cols-2 gap-6">
                        <p className="text-brand-neutral-muted leading-relaxed text-sm">
                          {feat.description}
                        </p>
                        <ul className="space-y-2">
                          {feat.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2 text-sm text-brand-neutral-muted">
                              <span className="mt-1 w-4 h-4 rounded-full bg-brand-cyan-100 text-brand-teal-800 flex items-center justify-center flex-shrink-0">
                                <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                                  <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal variant="up" delay={200}>
          <div className="mt-12 text-center">
            <p className="text-brand-neutral-muted text-sm mb-4">
              Quer ver cada módulo funcionando ao vivo?
            </p>
            <a
              href="/contato"
              className="inline-flex items-center gap-2 rounded-full bg-brand-teal-800 text-white px-8 py-4 font-bold hover:bg-brand-teal-700 hover:scale-105 transition-all shadow-cta"
            >
              Ver demonstração completa →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
