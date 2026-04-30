import type { Metadata } from 'next';
import { Hero } from '@/components/marketing/Hero';
import { AntiClaim } from '@/components/marketing/AntiClaim';
import { HowItWorks } from '@/components/marketing/HowItWorks';
import { FoundersBanner } from '@/components/marketing/FoundersBanner';

export const metadata: Metadata = {
  title: 'ServarX — IA conversacional pro Centro Médico do Interior',
  description:
    'Agende todos os seus médicos e atenda pacientes 24h por dia, sem pagar licenças extras por profissional. 30 dias de garantia.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AntiClaim />
      <HowItWorks />
      <FoundersBanner />
    </>
  );
}
