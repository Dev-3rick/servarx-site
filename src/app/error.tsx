'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RotateCw, Home, Mail } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { SITE } from '@/lib/site';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Em produção: enviar pro Sentry / Vercel Analytics
    if (process.env.NODE_ENV === 'production') {
      console.error('Site error:', { message: error.message, digest: error.digest });
    } else {
      console.error(error);
    }
  }, [error]);

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
          <p className="font-mono uppercase tracking-[0.18em] text-red-600 text-xs mb-6">
            ERRO 500
          </p>

          <h1
            className="font-bold tracking-tight text-brand-teal-800 leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Alguma coisa quebrou.
          </h1>

          <p className="text-lg text-brand-neutral-muted mb-4 leading-relaxed">
            Foi a gente, não você. Já registrei aqui — vou conferir o que aconteceu.
          </p>

          {error.digest && (
            <p className="text-xs font-mono text-brand-neutral-light mb-12">
              ID do incidente: <span className="text-brand-neutral-muted">{error.digest}</span>
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full bg-brand-teal-800 px-6 py-3.5 font-semibold text-white shadow-cta hover:bg-brand-teal-700 transition-all"
            >
              <RotateCw className="w-5 h-5" /> Tentar de novo
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-teal-800 px-6 py-3.5 font-semibold text-brand-teal-800 hover:bg-brand-teal-800 hover:text-white transition-all"
            >
              <Home className="w-5 h-5" /> Voltar pra home
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-brand-neutral-muted mb-3">
              Continua quebrado? Manda pra gente o ID do incidente acima.
            </p>
            <a
              href={`mailto:${SITE.email.suporte}?subject=${encodeURIComponent(`Erro 500${error.digest ? ' - ' + error.digest : ''}`)}`}
              className="inline-flex items-center gap-2 text-brand-teal-800 font-semibold hover:underline"
            >
              <Mail className="w-4 h-4" /> {SITE.email.suporte}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
