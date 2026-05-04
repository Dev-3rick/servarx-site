import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, MessageSquare, Zap, MapPin } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/button';
import { TrustBar } from '@/components/marketing/TrustBar';
import { AntiClaim } from '@/components/marketing/AntiClaim';
import { HowItWorks } from '@/components/marketing/HowItWorks';
import { ProductFeatures } from '@/components/marketing/ProductFeatures';
import { Specialties } from '@/components/marketing/Specialties';
import { Pricing } from '@/components/marketing/Pricing';
import { FoundersBanner } from '@/components/marketing/FoundersBanner';
import { CTABanner } from '@/components/marketing/CTABanner';
import { CIDADES, findCidadeBySlug } from '@/lib/cidades';
import { SITE } from '@/lib/site';

/* ─── Static params ──────────────────────────────────────────────── */

export function generateStaticParams() {
  return CIDADES.map((c) => ({ slug: c.slug }));
}

/* ─── Metadata ───────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cidade = findCidadeBySlug(slug);
  if (!cidade) return {};

  const title = `IA para Agendamento de Clínicas em ${cidade.nome} — ServarX`;
  const description = `Automatize o atendimento da sua clínica em ${cidade.nome}, ${cidade.estado}. A ServarX.IA agenda, confirma e lembra pacientes 24h via WhatsApp. Sem pagar por licença extra por médico. Garantia de 30 dias.`;

  return {
    title,
    description,
    keywords: [
      `IA para clínica ${cidade.nome}`,
      `secretaria virtual ${cidade.nome}`,
      `agendamento WhatsApp ${cidade.nome}`,
      `chatbot clínica ${cidade.nome}`,
      `sistema clínica ${cidade.regiao}`,
      `automatizar atendimento médico ${cidade.nome}`,
      `IA agendamento ${cidade.estado}`,
    ],
    alternates: {
      canonical: `${SITE.url}/cidades/${cidade.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/cidades/${cidade.slug}`,
      locale: 'pt_BR',
      type: 'website',
    },
  };
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default async function CidadePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cidade = findCidadeBySlug(slug);
  if (!cidade) notFound();

  return (
    <>
      {/* Hero localizado */}
      <section
        className="relative overflow-hidden pt-10 lg:pt-16 pb-8 lg:pb-12"
        style={{ background: 'var(--gradient-hero-glow)' }}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

        <div className="max-w-page-xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="text-center z-10 w-full">

              {/* Eyebrow — cidade específica */}
              <Reveal immediate variant="up" delay={200} duration={1.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-400/10 border border-brand-cyan-400/20 text-brand-cyan-600 text-xs font-medium mb-6 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  {cidade.nome} · {cidade.estado} · {cidade.regiao}
                </div>
              </Reveal>

              {/* Headline localizada */}
              <Reveal immediate variant="up" delay={300} duration={1.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-teal-800 leading-[1.1] mb-6 tracking-tight">
                  {cidade.headline.split(cidade.nome).length > 1 ? (
                    <>
                      {cidade.headline.split(cidade.nome)[0]}
                      <span className="bg-gradient-to-r from-brand-cyan-500 to-brand-teal-600 bg-clip-text text-transparent">
                        {cidade.nome}
                      </span>
                      {cidade.headline.split(cidade.nome)[1]}
                    </>
                  ) : (
                    <>
                      {cidade.headline.split('.')[0]}.{' '}
                      <span className="bg-gradient-to-r from-brand-cyan-500 to-brand-teal-600 bg-clip-text text-transparent">
                        {cidade.headline.split('.').slice(1).join('.')}
                      </span>
                    </>
                  )}
                </h1>
              </Reveal>

              {/* Subheadline */}
              <Reveal immediate variant="up" delay={420} duration={1.1}>
                <p className="max-w-[680px] mx-auto text-lg leading-relaxed text-brand-neutral-muted lg:text-xl mb-10">
                  {cidade.subheadline}
                </p>
              </Reveal>

              {/* CTAs */}
              <Reveal immediate variant="up" delay={640} duration={1.1}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button size="xl" className="w-full sm:w-auto shadow-cta-accent group" asChild>
                    <Link href={`/contato?cidade=${cidade.slug}`}>
                      <MessageSquare className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Ver a IA em ação — grátis
                    </Link>
                  </Button>
                  <Link
                    href="#como-funciona"
                    className="text-sm font-medium text-brand-neutral-muted hover:text-brand-teal-800 transition-colors inline-flex items-center gap-1 mt-1 sm:mt-0"
                  >
                    Ou ver como funciona →
                  </Link>
                </div>
              </Reveal>

              {/* Microcopy de garantia */}
              <Reveal immediate variant="up" delay={800} duration={1.1}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-neutral-muted">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-cyan-600 shrink-0" />
                    <span>
                      <strong className="text-brand-teal-800">Garantia incondicional de 30 dias</strong>{' '}
                      — dinheiro de volta sem perguntas
                    </span>
                  </div>
                  <div className="h-4 w-px bg-brand-neutral-border hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-brand-cyan-600 shrink-0" />
                    <span>Suporte humano em até 10 min</span>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* Seções compartilhadas com a home */}
      <TrustBar />
      <AntiClaim />
      <HowItWorks />
      <ProductFeatures />
      <Specialties />
      <Pricing />
      <FoundersBanner />
      <CTABanner
        eyebrow="Próximo passo"
        title={`Sua clínica em ${cidade.nome} merece uma secretária que trabalha 24h.`}
        subtitle="Implantação rápida, sem contrato de fidelidade e com garantia incondicional de 30 dias — se não funcionar, dinheiro de volta."
        ctaLabel="Quero minha demonstração grátis"
        ctaHref={`/contato?cidade=${cidade.slug}`}
        secondaryLabel="Ver todos os planos"
        secondaryHref="/compras"
      />
    </>
  );
}
