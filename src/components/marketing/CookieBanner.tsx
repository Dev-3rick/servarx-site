'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

const STORAGE_KEY = 'servarx_consent';

type ConsentState = 'accepted' | 'rejected' | null;

/**
 * Banner LGPD-compliant Cimed-style.
 * Salva escolha em localStorage. Carregamento de GA/Pixel deve consultar
 * `getConsent()` antes de inicializar.
 *
 * Botão "Gerenciar cookies" no footer (`/#cookies` ou link com data-attr)
 * deve disparar `event: open-cookie-banner` que reabre este componente.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Esconde se já houver decisão
    const saved = window.localStorage.getItem(STORAGE_KEY) as ConsentState;
    if (!saved) {
      setVisible(true);
    }

    // Permite reabrir via evento custom (ex: link "Gerenciar cookies")
    const reopen = () => setVisible(true);
    window.addEventListener('servarx:open-cookie-banner', reopen);

    // Fallback: link com hash #cookies reabre
    if (window.location.hash === '#cookies') {
      setVisible(true);
    }

    return () => window.removeEventListener('servarx:open-cookie-banner', reopen);
  }, []);

  function handleChoice(choice: ConsentState) {
    if (choice === 'accepted' || choice === 'rejected') {
      window.localStorage.setItem(STORAGE_KEY, choice);
      // Dispara evento pra outros components (Analytics, Pixel) reagirem.
      window.dispatchEvent(
        new CustomEvent('servarx:consent-changed', { detail: choice }),
      );
    }
    setVisible(false);
    // Limpa hash se entrou via #cookies
    if (window.location.hash === '#cookies') {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      className={cn(
        'fixed bottom-0 inset-x-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6 lg:px-12',
        'animate-[fade-up_0.4s_ease-out_both]',
      )}
    >
      <div className="max-w-page-xl mx-auto rounded-2xl border border-border bg-surface shadow-large p-6 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[3fr_2fr] lg:items-center">
          {/* Texto */}
          <div>
            <h2 id="cookie-banner-title" className="font-bold text-brand-teal-800 mb-2">
              A gente usa cookies pra melhorar a experiência
            </h2>
            <p id="cookie-banner-description" className="text-sm text-brand-neutral-muted leading-relaxed">
              Cookies de analytics e marketing ajudam a gente a entender o que funciona — você pode aceitar todos ou recusar. Fica do mesmo jeito pra usar o site.{' '}
              <Link
                href="/privacidade"
                className="text-brand-teal-800 font-semibold hover:underline"
              >
                Saiba mais
              </Link>
            </p>
          </div>

          {/* Ações */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => handleChoice('rejected')}
              className="rounded-full border-2 border-brand-teal-800 px-6 py-3 text-sm font-semibold text-brand-teal-800 hover:bg-brand-teal-800 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-ring)]"
            >
              Recusar
            </button>
            <button
              type="button"
              onClick={() => handleChoice('accepted')}
              className="rounded-full bg-brand-teal-800 px-6 py-3 text-sm font-semibold text-white shadow-cta hover:bg-brand-teal-700 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-ring)]"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Helper consultável de qualquer client component.
 * Retorna 'accepted' / 'rejected' / null (sem decisão).
 */
export function getConsent(): ConsentState {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(STORAGE_KEY) as ConsentState;
}
