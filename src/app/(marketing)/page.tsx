import type { Metadata } from 'next';
import { Hero } from '@/components/marketing/Hero';
import { AntiClaim } from '@/components/marketing/AntiClaim';
import { HowItWorks } from '@/components/marketing/HowItWorks';
import { FoundersBanner } from '@/components/marketing/FoundersBanner';
import { CTABanner } from '@/components/marketing/CTABanner';

export const metadata: Metadata = {
  title: 'ServarX — IA para Agendamento de Clínicas no Interior de Minas Gerais',
  description:
    'Automatize o agendamento do seu centro médico via WhatsApp. A IA da ServarX atende 24h, confirma consultas, reduz faltas e nunca perde uma marcação. 30 dias de garantia.',
};

import { TrustBar } from '@/components/marketing/TrustBar';
import { Specialties } from '@/components/marketing/Specialties';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AntiClaim />
      <Specialties />
      <HowItWorks />
      <FoundersBanner />
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
