import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, MessageSquare, FileText, Check, X, ExternalLink, Mic, Image as ImageIcon, RefreshCw, Heart, Stethoscope, Languages } from 'lucide-react';
import { LogoIA } from '@/components/brand/LogoIA';
import { Pricing } from '@/components/marketing/Pricing';
import { ProductLd } from '@/components/seo/JsonLd';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'ServarClin — IA conversacional pra clínicas no WhatsApp',
  description:
    'Atende, agenda e confirma consultas via WhatsApp 24h por dia. Para centros médicos multidisciplinares com até 10 médicos. R$ 349 a R$ 947/mês — flat fee, sem licença por médico.',
};

const CAPACIDADES = [
  {
    icon: MessageSquare,
    titulo: 'Atende e agenda',
    descricao: 'Sua secretária digital, no WhatsApp, 24 horas por dia. Marca, remarca, cancela.',
  },
  {
    icon: Calendar,
    titulo: 'Confirma e lembra',
    descricao: 'Lembrete 24h e 2h antes da consulta. Reduz no-show sem ninguém ter que ligar.',
  },
  {
    icon: FileText,
    titulo: 'Lembra do paciente',
    descricao: 'Cada conversa fica salva. Pós-consulta personalizado sem você anotar nada.',
  },
];

const PARIDADE = [
  { icon: Calendar, titulo: 'Sincroniza com Google Agenda em tempo real', descricao: 'Sem double-booking. Bidirecional.' },
  { icon: RefreshCw, titulo: 'Lembrete automático 24h e 2h antes', descricao: 'Confirmação ou remarcação no próprio fluxo do WhatsApp.' },
  { icon: ImageIcon, titulo: 'Lê áudio e imagem', descricao: 'Transcreve áudio do paciente. Lê foto da carteirinha.' },
];

const DIFERENCIAIS = [
  {
    icon: Heart,
    titulo: 'Memória familiar',
    descricao: '"Doutor, lembrei que a senhora marcou pro Lucas no mês passado." A IA conhece a família como a recepcionista do interior conhece.',
  },
  {
    icon: Stethoscope,
    titulo: 'Triagem multidisciplinar',
    descricao: 'Paciente relata dor, a IA cruza com a especialidade certa disponível, respeitando regras de convênio por médico.',
  },
  {
    icon: Languages,
    titulo: 'Sotaque e vocabulário local',
    descricao: 'A IA fala como gente do interior fala — não "padrão Faria Lima". Customizável sem código.',
  },
];

export default function ServarClinPage() {
  return (
    <>
      <ProductLd
        name="ServarClin"
        description="IA conversacional pra clínicas no WhatsApp. Atende, agenda e confirma consultas 24h por dia."
        url={`${SITE.url}/produtos/servarclin`}
        priceRange="349-947"
      />

      {/* Hero */}
      <section
        className="px-6 py-20 lg:px-12 lg:py-28"
        style={{ background: 'var(--gradient-hero-glow)' }}
      >
        <div className="max-w-page-xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="mb-6 font-mono uppercase tracking-[0.18em] text-brand-cyan-600"
              style={{ fontSize: 'var(--text-eyebrow)' }}
            >
              SERVARCLIN · UM PRODUTO SERVARX
            </p>
            <h1
              className="font-bold tracking-tight text-brand-teal-800 leading-[1.05] mb-6 mx-auto max-w-page-lg"
              style={{ fontSize: 'clamp(2.25rem, 6vw, var(--text-hero))' }}
            >
              Sua secretária digital,{' '}
              <span style={{ background: 'var(--gradient-brand-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                no WhatsApp
              </span>
              , 24 horas por dia.
            </h1>
            <p className="max-w-page-md mx-auto text-lg lg:text-xl text-brand-neutral-muted leading-relaxed mb-4">
              Movida pela <LogoIA name="ServarX.IA" size="sm" /> — a IA conversacional da ServarX.
            </p>
            <p className="max-w-page-md mx-auto text-base text-brand-neutral-muted leading-relaxed">
              Atende, agenda, lembra e cancela consultas via WhatsApp. Sem "digite 1 pra agendar".
              Sem licença extra por médico. Construída pro centro médico do interior.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contato?ref=servarclin-hero"
                className="rounded-full bg-brand-teal-800 px-8 py-4 font-semibold text-white shadow-cta hover:bg-brand-teal-700 hover:shadow-cta-accent transition-all"
              >
                Falar sobre o ServarClin
              </Link>
              <a
                href={SITE.produto.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-teal-800 px-8 py-4 font-semibold text-brand-teal-800 hover:bg-brand-teal-800 hover:text-white transition-all"
              >
                Já sou cliente <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 capacidades */}
      <section className="px-6 py-20 lg:px-12 lg:py-28 bg-surface border-y border-border">
        <div className="max-w-page-xl mx-auto">
          <div className="text-center mb-12">
            <p className="mb-4 font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs">CAPACIDADES</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal-800 leading-tight max-w-page-lg mx-auto">
              3 coisas que o ServarClin faz — sem ninguém precisar tocar.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {CAPACIDADES.map((c) => {
              const Icon = c.icon;
              return (
                <article key={c.titulo} className="rounded-2xl border border-border bg-brand-neutral-bg p-8">
                  <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-cyan-100 text-brand-teal-800">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-teal-800 mb-3">{c.titulo}</h3>
                  <p className="text-brand-neutral-muted leading-relaxed">{c.descricao}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Para quem é / não é */}
      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="max-w-page-xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-brand-cyan-400 bg-brand-cyan-50 p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-brand-teal-800 mb-6 inline-flex items-center gap-2">
                <Check className="w-7 h-7" aria-hidden="true" /> Para quem é
              </h3>
              <ul className="space-y-3 text-brand-neutral-muted">
                <li className="flex gap-3"><Check className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" /> Centros médicos multidisciplinares (1 a 10 médicos)</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" /> Clínicas de bairro / interior</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" /> Mistura de particular e convênios populares</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" /> Médico-dono que decide pelo próprio bolso</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" /> Quem perdeu paciente por WhatsApp lento</li>
              </ul>
            </div>
            <div className="rounded-3xl border-2 border-border bg-brand-neutral-bg p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-brand-neutral-muted mb-6 inline-flex items-center gap-2">
                <X className="w-7 h-7" aria-hidden="true" /> Para quem não é
              </h3>
              <ul className="space-y-3 text-brand-neutral-light">
                <li className="flex gap-3"><X className="w-5 h-5 flex-shrink-0 mt-0.5" /> Quem precisa de prontuário eletrônico (procura iClinic, Feegow)</li>
                <li className="flex gap-3"><X className="w-5 h-5 flex-shrink-0 mt-0.5" /> Hospitais ou redes com mais de 10 médicos (a gente conversa antes)</li>
                <li className="flex gap-3"><X className="w-5 h-5 flex-shrink-0 mt-0.5" /> Quem quer sistema completo de gestão financeira / TISS</li>
                <li className="flex gap-3"><X className="w-5 h-5 flex-shrink-0 mt-0.5" /> Clínicas que não querem usar WhatsApp Business oficial</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features de paridade */}
      <section className="px-6 py-20 lg:px-12 lg:py-28 bg-surface border-y border-border">
        <div className="max-w-page-xl mx-auto">
          <div className="text-center mb-12">
            <p className="mb-4 font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs">FEATURES</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal-800 leading-tight max-w-page-md mx-auto">
              Tudo que se espera de um SaaS clínico moderno.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PARIDADE.map((f) => {
              const Icon = f.icon;
              return (
                <article key={f.titulo} className="flex gap-4">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-cyan-100 text-brand-teal-800">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-teal-800 mb-1">{f.titulo}</h3>
                    <p className="text-sm text-brand-neutral-muted leading-relaxed">{f.descricao}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="max-w-page-xl mx-auto">
          <div className="text-center mb-12">
            <p className="mb-4 font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs">DIFERENCIAIS · ONDE NINGUÉM FOCA</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal-800 leading-tight max-w-page-lg mx-auto">
              3 coisas que só o ServarClin tem.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {DIFERENCIAIS.map((d) => {
              const Icon = d.icon;
              return (
                <article key={d.titulo} className="rounded-2xl border-2 border-brand-cyan-200 bg-brand-cyan-50/50 p-8">
                  <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-brand-teal-800 shadow-soft">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-teal-800 mb-3">{d.titulo}</h3>
                  <p className="text-brand-neutral-muted leading-relaxed">{d.descricao}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing />
    </>
  );
}
