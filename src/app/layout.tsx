import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import { SITE } from '@/lib/site';
import { OrganizationLd, LocalBusinessLd } from '@/components/seo/JsonLd';
import { AnalyticsLoader } from '@/components/seo/AnalyticsLoader';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: 'Automatize o atendimento do seu centro médico via WhatsApp. A IA da ServarX agenda, confirma e lembra seus pacientes 24h por dia — sem pagar por licença extra. Para clínicas do interior de Minas Gerais.',
  applicationName: SITE.name,
  keywords: [
    'IA para agendamento de clínica',
    'secretaria virtual para clínica médica',
    'agendamento WhatsApp clínica',
    'chatbot para clínica interior',
    'automatizar atendimento WhatsApp médico',
    'sistema clínica Minas Gerais',
    'IA para centro médico',
    'reduzir no-show clínica',
  ],
  authors: [{ name: 'Erick Henrique', url: SITE.url }],
  creator: 'Erick Henrique',
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans">
        {children}
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            classNames: {
              toast: 'font-sans',
            },
          }}
        />
        <OrganizationLd />
        <LocalBusinessLd />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
