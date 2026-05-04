import { CookieBanner } from '@/components/marketing/CookieBanner';

/**
 * Layout do route group `(lp)` — landing pages de campanha.
 * SEM Header, SEM Footer, SEM navegação. Foco 100% em conversão.
 * Mantém Cookie Banner (LGPD) e o body padrão.
 */
export default function LandingPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <CookieBanner />
    </>
  );
}
