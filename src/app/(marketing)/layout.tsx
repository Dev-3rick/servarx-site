import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { WhatsAppFab } from '@/components/marketing/WhatsAppFab';
import { CookieBanner } from '@/components/marketing/CookieBanner';

/**
 * Layout do route group `(marketing)` — todas as páginas públicas.
 * Inclui Header sticky, Footer, WhatsApp FAB e Cookie Banner LGPD.
 *
 * Páginas legais (/privacidade, /termos) ficam em route group `(legal)`
 * separado pra ter layout mais minimalista quando criar.
 */
export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFab />
      <CookieBanner />
    </>
  );
}
