import Link from 'next/link';
import { Home, Search, MessageCircle } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { SITE } from '@/lib/site';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: 'var(--gradient-hero-glow), var(--color-bg)' }}
    >
      <header className="px-6 py-6 lg:px-12 lg:py-8">
        <Link href="/" aria-label="ServarX — Home">
          <Logo variant="full" size="md" />
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-page-md mx-auto text-center">
          <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs mb-6">
            ERRO 404
          </p>

          <h1
            className="font-bold tracking-tight text-brand-teal-800 leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Essa página{' '}
            <span style={{ background: 'var(--gradient-brand-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              sumiu
            </span>
            , mudou de lugar ou nunca existiu.
          </h1>

          <p className="text-lg text-brand-neutral-muted mb-12 leading-relaxed">
            Não foi você. Provavelmente foi a gente. Ou um link velho que ficou solto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-brand-teal-800 px-6 py-3.5 font-semibold text-white shadow-cta hover:bg-brand-teal-700 transition-all"
            >
              <Home className="w-5 h-5" /> Voltar pra home
            </Link>
            <Link
              href="/produtos/servarclin"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-teal-800 px-6 py-3.5 font-semibold text-brand-teal-800 hover:bg-brand-teal-800 hover:text-white transition-all"
            >
              <Search className="w-5 h-5" /> Ver o ServarClin
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-brand-neutral-muted mb-3">
              Procurando algo específico?
            </p>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-teal-800 font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" /> Chama a gente no WhatsApp
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
