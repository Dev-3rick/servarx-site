import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Shield, Bot, Award } from 'lucide-react';
import { VALORES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Quem somos',
  description:
    'A ServarX é uma empresa brasileira de IA aplicada a serviços. Começamos pelas clínicas — pelo dono que volta de plantão e ainda tem 40 mensagens no WhatsApp pra responder.',
};

const VALOR_ICONS = [Heart, Award, Shield, Bot];

export default function QuemSomosPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 py-20 lg:px-12 lg:py-28"
        style={{ background: 'var(--gradient-hero-glow)' }}
      >
        <div className="max-w-page-md mx-auto text-center">
          <p
            className="mb-6 font-mono uppercase tracking-[0.18em] text-brand-cyan-600"
            style={{ fontSize: 'var(--text-eyebrow)' }}
          >
            QUEM SOMOS
          </p>
          <h1
            className="font-bold tracking-tight text-brand-teal-800 leading-[1.1] mb-8"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
          >
            Não é só mais um SaaS. Não é só mais um atendente de IA.
          </h1>
          <p className="text-lg lg:text-xl text-brand-neutral-muted leading-relaxed">
            A ServarX é uma empresa brasileira de IA aplicada a serviços.
            Começamos pelas clínicas — pelo dono que volta do plantão e ainda
            tem 40 mensagens no WhatsApp pra responder antes de dormir.
          </p>
        </div>
      </section>

      {/* Origem do nome */}
      <section className="px-6 py-16 lg:px-12 lg:py-24 bg-surface border-y border-border">
        <div className="max-w-page-md mx-auto">
          <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs mb-4">
            ORIGEM DO NOME
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal-800 mb-6 leading-tight">
            ServarX vem de <em className="not-italic" style={{ background: 'var(--gradient-brand-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>servare</em> + <em className="not-italic" style={{ background: 'var(--gradient-brand-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>X</em>.
          </h2>
          <p className="text-lg text-brand-neutral-muted leading-relaxed mb-4">
            Em latim, <strong className="text-brand-teal-800">servare</strong> é "preservar, guardar, observar com atenção".
            O <strong className="text-brand-teal-800">X</strong> é o que muda — a tecnologia que entra na operação e amplia o que importa, sem comprometer o que já era bom.
          </p>
          <p className="text-lg text-brand-neutral-muted leading-relaxed">
            Pra gente, isso quer dizer: <strong className="text-brand-teal-800">a IA serve o atendimento — não o substitui.</strong>
            A secretária ganha superpoder. O médico ganha tempo. O paciente é atendido na hora.
          </p>
        </div>
      </section>

      {/* História do fundador */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-page-md mx-auto">
          <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs mb-4">
            COMO COMEÇOU
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal-800 mb-8 leading-tight">
            Como a ServarX começou.
          </h2>

          <div className="prose prose-lg max-w-none space-y-5 text-brand-neutral-muted leading-relaxed">
            <p>
              Eu sou o Erick. Curso engenharia da computação no interior de Minas
              Gerais, em Barão de Cocais, e construí a primeira versão do
              ServarClin (a Sofia) durante 2024-2025.
            </p>
            <p>
              Vendo a versão 1 rodando em algumas clínicas, percebi um padrão: o
              que mais doía no dono não era prontuário, faturamento ou agenda
              bonita. Era <strong className="text-brand-teal-800">o WhatsApp lotado de mensagem sem resposta</strong> — paciente
              novo, paciente que faltou, paciente perguntando se a clínica abre no
              feriado, mãe perguntando o resultado do exame do filho.
            </p>
            <p>
              Os sistemas grandes do mercado (iClinic, Feegow, Doctoralia) cobram
              por médico. Pra um centro multidisciplinar com 5-6 profissionais,
              isso é uma fortuna em licença que não resolve a dor real. As IAs
              "do mercado" são chatbots de "digite 1 pra agendar" — coisa que
              paciente do interior odeia.
            </p>
            <p>
              A ServarX é a tentativa séria de fazer o que faltava: <strong className="text-brand-teal-800">uma IA
              brasileira que entende áudio confuso de paciente idoso, conhece o
              jargão clínico, age sozinha na agenda, e custa o que cabe no
              centro médico do bairro.</strong>
            </p>
            <p className="font-semibold text-brand-teal-800">
              É isso. Sem firula, sem tech-bro. Da minha mesa em Barão de Cocais
              pra clínica que hoje tá esperando alguém responder o WhatsApp.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="font-mono text-sm text-brand-neutral-muted">
              Erick Henrique, fundador da ServarX
              <br />
              <span className="text-brand-neutral-light text-xs">{SITE.endereco.full}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="px-6 py-16 lg:px-12 lg:py-24 bg-surface border-y border-border">
        <div className="max-w-page-xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs mb-4">
              NOSSOS VALORES
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal-800 leading-tight max-w-page-md mx-auto">
              4 coisas que a gente não negocia.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {VALORES.map((valor, i) => {
              const Icon = VALOR_ICONS[i];
              return (
                <article
                  key={valor.titulo}
                  className="rounded-2xl border border-border bg-brand-neutral-bg p-8"
                >
                  <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-cyan-100 text-brand-teal-800">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-teal-800 mb-3">
                    {valor.titulo}
                  </h3>
                  <p className="text-brand-neutral-muted leading-relaxed">
                    {valor.descricao}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visão */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-page-md mx-auto text-center">
          <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs mb-4">
            ONDE QUEREMOS CHEGAR
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal-800 leading-tight mb-6">
            Uma <em className="not-italic" style={{ background: 'var(--gradient-brand-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>house of products</em> tier 1 de IA aplicada a serviços.
          </h2>
          <p className="text-lg text-brand-neutral-muted leading-relaxed">
            ServarClin (clínicas) é o primeiro produto. Depois vêm petshops,
            advocacia, estética, oficinas — qualquer negócio de serviço que
            sobrevive de relacionamento via WhatsApp.
          </p>
          <p className="mt-6 text-base text-brand-neutral-muted">
            A receita é a mesma: IA que executa de verdade, dados cifrados nível
            bancário, voz brasileira, pricing que cabe no PME.
          </p>

          <div className="mt-12">
            <Link
              href="/produtos/servarclin"
              className="inline-flex items-center gap-2 rounded-full bg-brand-teal-800 px-8 py-4 font-semibold text-white shadow-cta transition-all hover:bg-brand-teal-700 hover:shadow-cta-accent"
            >
              Ver o ServarClin →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
