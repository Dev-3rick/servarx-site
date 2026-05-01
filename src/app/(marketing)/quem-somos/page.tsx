import type { Metadata } from 'next';
import { Heart, Shield, Bot, Award } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { CTABanner } from '@/components/marketing/CTABanner';
import { VALORES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Quem somos — ServarX, IA para Clínicas do Interior de MG',
  description:
    'A ServarX foi criada por um engenheiro do interior de Minas Gerais que viu de perto a dor do dono de clínica. Conheça a história, os valores e a missão da empresa.',
};

const VALOR_ICONS = [Heart, Award, Shield, Bot];

export default function QuemSomosPage() {
  return (
    <>
      {/* Hero — claro */}
      <section
        className="px-6 py-20 lg:px-12 lg:py-28"
        style={{ background: 'var(--gradient-hero-glow)' }}
      >
        <div className="max-w-page-md mx-auto text-center">
          <Reveal immediate variant="up" delay={0} duration={1.0}>
            <p
              className="mb-6 font-mono uppercase tracking-[0.18em] text-brand-cyan-600"
              style={{ fontSize: 'var(--text-eyebrow)' }}
            >
              QUEM SOMOS
            </p>
          </Reveal>
          <Reveal immediate variant="up" delay={200} duration={1.1}>
            <h1
              className="font-bold tracking-tight text-brand-teal-800 leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
            >
              Não é só mais um SaaS. Não é só mais um atendente de IA.
            </h1>
          </Reveal>
          <Reveal immediate variant="up" delay={420} duration={1.1}>
            <p className="text-lg lg:text-xl text-brand-neutral-muted leading-relaxed">
              A ServarX é uma empresa brasileira de IA aplicada a serviços.
              Começamos pelas clínicas — pelo dono que volta do plantão e ainda
              tem 40 mensagens no WhatsApp pra responder antes de dormir.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Origem do nome — DARK */}
      <section className="relative overflow-hidden bg-brand-teal-800 text-white">
        <div className="absolute inset-0 opacity-30" style={{ background: 'var(--gradient-hero-spot)' }} aria-hidden="true" />
        <div className="relative max-w-page-md mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <Reveal variant="up">
            <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-400 text-xs mb-4">
              ORIGEM DO NOME
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              ServarX vem de{' '}
              <em className="not-italic" style={{ background: 'linear-gradient(135deg, #67e8f9 0%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                servare
              </em>{' '}
              +{' '}
              <em className="not-italic" style={{ background: 'linear-gradient(135deg, #67e8f9 0%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                X
              </em>
              .
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-4">
              Em latim, <strong className="text-white">servare</strong> é "preservar, guardar, observar com atenção".
              O <strong className="text-white">X</strong> é o que muda — a tecnologia que entra na operação e amplia o que importa, sem comprometer o que já era bom.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Pra gente, isso quer dizer: <strong className="text-white">a IA serve o atendimento — não o substitui.</strong>
              A secretária ganha superpoder. O médico ganha tempo. O paciente é atendido na hora.
            </p>
          </Reveal>
        </div>
      </section>

      {/* História do fundador — claro */}
      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="max-w-page-md mx-auto">
          <Reveal variant="up">
            <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs mb-4">
              COMO COMEÇOU
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal-800 mb-8 leading-tight">
              Como a ServarX começou.
            </h2>
          </Reveal>

          <div className="space-y-5 text-brand-neutral-muted leading-relaxed text-base lg:text-lg">
            <Reveal variant="up" delay={100}>
              <p>
                Eu sou o Erick Henrique Caetano de Almeida. Curso engenharia da
                computação no interior de Minas Gerais, em Barão de Cocais, e
                construí a primeira versão do ServarClin (a Sofia) durante
                2024-2025.
              </p>
            </Reveal>
            <Reveal variant="up" delay={150}>
              <p>
                Vendo a versão 1 rodando em algumas clínicas, percebi um padrão: o
                que mais doía no dono não era prontuário, faturamento ou agenda
                bonita. Era <strong className="text-brand-teal-800">o WhatsApp lotado de mensagem sem resposta</strong> — paciente
                novo, paciente que faltou, paciente perguntando se a clínica abre no
                feriado, mãe perguntando o resultado do exame do filho.
              </p>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <p>
                Os sistemas grandes do mercado (iClinic, Feegow, Doctoralia) cobram
                por médico. Pra um centro multidisciplinar com 5-6 profissionais,
                isso é uma fortuna em licença que não resolve a dor real. As IAs
                "do mercado" são chatbots de "digite 1 pra agendar" — coisa que
                paciente do interior odeia.
              </p>
            </Reveal>
            <Reveal variant="up" delay={250}>
              <p>
                A ServarX é a tentativa séria de fazer o que faltava: <strong className="text-brand-teal-800">uma IA
                brasileira que entende áudio confuso de paciente idoso, conhece o
                jargão clínico, age sozinha na agenda, e custa o que cabe no
                centro médico do bairro.</strong>
              </p>
            </Reveal>
            <Reveal variant="up" delay={300}>
              <p className="font-semibold text-brand-teal-800">
                É isso. Sem firula, sem tech-bro. Da minha mesa em Barão de Cocais
                pra clínica que hoje tá esperando alguém responder o WhatsApp.
              </p>
            </Reveal>

            <Reveal variant="fade" delay={450}>
              <div className="mt-12 relative max-w-[300px]">
                 <img 
                   src="/images/A_highly_realistic,_professional_portrait_202605011046.jpeg" 
                   alt="Erick Henrique Caetano de Almeida - Fundador da ServarX" 
                   className="rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
                 />
                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-cyan-400/10 rounded-full blur-2xl -z-10" />
              </div>
            </Reveal>
          </div>

          <Reveal variant="fade" delay={400}>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="font-mono text-sm text-brand-neutral-muted">
                Erick Henrique Caetano de Almeida, fundador da ServarX
                <br />
                <span className="text-brand-neutral-light text-xs">{SITE.endereco.full}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valores — DARK */}
      <section className="relative overflow-hidden bg-brand-teal-800 text-white">
        <div className="absolute inset-0 opacity-30" style={{ background: 'var(--gradient-hero-spot)' }} aria-hidden="true" />
        <div className="relative max-w-page-xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-400 text-xs mb-4">
                NOSSOS VALORES
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight max-w-page-md mx-auto">
                4 coisas que a gente não negocia.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {VALORES.map((valor, i) => {
              const Icon = VALOR_ICONS[i];
              return (
                <Reveal key={valor.titulo} variant="up" delay={i * 150} as="article" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/[0.07] transition-colors">
                  <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-cyan-400/15 text-brand-cyan-400">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {valor.titulo}
                  </h3>
                  <p className="text-white/75 leading-relaxed">
                    {valor.descricao}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visão — claro */}
      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="max-w-page-md mx-auto text-center">
          <Reveal variant="up">
            <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs mb-4">
              ONDE QUEREMOS CHEGAR
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal-800 leading-tight mb-6">
              Uma{' '}
              <em className="not-italic" style={{ background: 'var(--gradient-brand-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                house of products
              </em>{' '}
              tier 1 de IA aplicada a serviços.
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
          </Reveal>
        </div>
      </section>

      {/* CTA final — DARK */}
      <CTABanner
        eyebrow="VAMOS CONVERSAR"
        title="A ServarX nasceu para clínicas como a sua."
        subtitle="A IA cuida dos seus pacientes. O Erick cuida da sua clínica. Fala com o fundador e veja a demonstração ao vivo."
        ctaLabel="Falar com o Erick agora"
        ctaHref="/contato?ref=quem-somos"
        secondaryLabel="Ver o ServarClin"
        secondaryHref="/produtos/servarclin"
      />
    </>
  );
}
