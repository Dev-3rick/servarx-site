'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

/**
 * Carregador condicional de analytics e pixels.
 *
 * Lê IDs de variáveis de ambiente públicas (NEXT_PUBLIC_*) e só carrega cada
 * tag SE: (1) o ID estiver definido E (2) o usuário tiver aceito cookies.
 *
 * Reage ao evento custom `servarx:consent-changed` disparado pelo
 * CookieBanner, então a primeira aceitação carrega os scripts sem reload.
 *
 * IDs esperados (env vars, configurar quando criar contas):
 * - NEXT_PUBLIC_GA4_ID — Google Analytics 4 (G-XXXXXXX)
 * - NEXT_PUBLIC_CLARITY_ID — Microsoft Clarity (xxxxxxxxxx)
 * - NEXT_PUBLIC_META_PIXEL_ID — Meta Pixel (15+ dígitos)
 * - NEXT_PUBLIC_GADS_TAG_ID — Google Ads Conversion Tag (AW-XXXXXXX)
 *
 * Sem env, todos os ramos viram no-op — site funciona normal.
 */

const STORAGE_KEY = 'servarx_consent';

export function AnalyticsLoader() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const initial = window.localStorage.getItem(STORAGE_KEY);
    setAccepted(initial === 'accepted');

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setAccepted(detail === 'accepted');
    };
    window.addEventListener('servarx:consent-changed', onChange);
    return () => window.removeEventListener('servarx:consent-changed', onChange);
  }, []);

  if (!accepted) return null;

  const ga4 = process.env.NEXT_PUBLIC_GA4_ID;
  const clarity = process.env.NEXT_PUBLIC_CLARITY_ID;
  const pixel = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const gads = process.env.NEXT_PUBLIC_GADS_TAG_ID;

  return (
    <>
      {/* Google Analytics 4 */}
      {ga4 && (
        <>
          <Script
            id="ga4-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {/* Microsoft Clarity */}
      {clarity && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarity}");
          `}
        </Script>
      )}

      {/* Meta Pixel */}
      {pixel && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixel}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {/* Google Ads Conversion Tag */}
      {gads && (
        <>
          <Script
            id="gads-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gads}`}
          />
          <Script id="gads-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gads}');
            `}
          </Script>
        </>
      )}
    </>
  );
}
