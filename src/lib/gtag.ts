/**
 * Google Ads conversion tracking helpers.
 *
 * A tag global (gtag.js) é carregada pelo AnalyticsLoader quando o cookie
 * de consentimento é aceito. Os helpers abaixo disparam eventos de conversão
 * específicos — só funcionam se gtag já estiver disponível no window.
 *
 * Conversion IDs e Labels ficam aqui centralizados para facilitar manutenção.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GADS_CONVERSION_ID = 'AW-956602406';

/** Labels das ações de conversão criadas no Google Ads */
const LABELS = {
  WHATSAPP_CLICK: 'f_aNCJzXtaccEKawksgD',
} as const;

/**
 * Dispara evento de conversão do Google Ads.
 * Silencioso se gtag não estiver carregado (consent não aceito ou ad-blocker).
 */
function fireConversion(label: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${GADS_CONVERSION_ID}/${label}`,
    });
  }
}

/**
 * Rastreia clique no WhatsApp como conversão Google Ads.
 * Usar como onClick handler em qualquer link/botão de WhatsApp.
 *
 * @example
 * <a href="https://wa.me/..." onClick={trackWhatsAppClick}>Falar agora</a>
 */
export function trackWhatsAppClick() {
  fireConversion(LABELS.WHATSAPP_CLICK);
}
