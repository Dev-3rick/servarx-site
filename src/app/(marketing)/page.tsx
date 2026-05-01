import type { Metadata } from 'next';
import { Hero } from '@/components/marketing/Hero';
import { TrustBar } from '@/components/marketing/TrustBar';
import { AntiClaim } from '@/components/marketing/AntiClaim';
import { HowItWorks } from '@/components/marketing/HowItWorks';
import { ProductFeatures } from '@/components/marketing/ProductFeatures';
import { Specialties } from '@/components/marketing/Specialties';
import { Pricing } from '@/components/marketing/Pricing';
import { FoundersBanner } from '@/components/marketing/FoundersBanner';
import { CTABanner } from '@/components/marketing/CTABanner';

export const metadata: Metadata = {
  title: 'ServarX — IA para Agendamento de Clínicas no Interior de Minas Gerais',
  description:
    'Automatize o agendamento do seu centro médico via WhatsApp. A IA da ServarX atende 24h, confirma consultas, reduz faltas e nunca perde uma marcação. 30 dias de garantia.',
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hook — captura a dor nos primeiros 5s */}
      <Hero />

      {/* 2. Prova social — tipos de clínica que usam */}
      <TrustBar />

      {/* 3. Posicionamento — o que não somos */}
      <AntiClaim />

      {/* 4. Como funciona — 3 passos simples */}
      <HowItWorks />

      {/* 5. Plataforma completa — todos os 8 módulos (accordion) */}
      <ProductFeatures />

      {/* 6. Especialidades — feito para o seu tipo de clínica */}
      <Specialties />

      {/* 7. Preços — transparência total */}
      <Pricing />

      {/* 8. Escassez — 5 vagas de parceiro fundador */}
      <FoundersBanner />

      {/* 9. CTA final afirmativo */}
      <CTABanner
        eyebrow="Próximo passo"
        title="Sua clínica merece uma secretária que trabalha 24h."
        subtitle="Implantação rápida, sem contrato de fidelidade e com garantia incondicional de 30 dias — se não funcionar, dinheiro de volta."
        ctaLabel="Quero minha demonstração grátis"
        ctaHref="/contato"
        secondaryLabel="Ver planos"
        secondaryHref="/produtos/servarclin"
      />
    </>
  );
}
