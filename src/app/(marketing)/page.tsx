import type { Metadata } from 'next';
import { Hero } from '@/components/marketing/Hero';
import { AntiClaim } from '@/components/marketing/AntiClaim';
import { HowItWorks } from '@/components/marketing/HowItWorks';
import { FoundersBanner } from '@/components/marketing/FoundersBanner';
import { CTABanner } from '@/components/marketing/CTABanner';

export const metadata: Metadata = {
  title: 'ServarX — IA conversacional pro Centro Médico do Interior',
  description:
    'Agende todos os seus médicos e atenda pacientes 24h por dia, sem pagar licenças extras por profissional. 30 dias de garantia.',
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
        eyebrow="É hora"
        title="Pronto pra parar de perder paciente no WhatsApp?"
        subtitle="30 dias de garantia. Sem fidelidade. A gente fala em até 24h."
        ctaLabel="Falar com a gente"
        ctaHref="/contato"
        secondaryLabel="Ver planos"
        secondaryHref="/produtos/servarclin"
      />
    </>
  );
}
