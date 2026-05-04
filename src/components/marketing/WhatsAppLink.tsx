'use client';

import { trackWhatsAppClick } from '@/lib/gtag';
import { SITE } from '@/lib/site';

interface WhatsAppLinkProps {
  children: React.ReactNode;
  className?: string;
  /** Sobrescreve o texto pré-preenchido (default: SITE.whatsappText) */
  text?: string;
}

/**
 * Link para WhatsApp com tracking de conversão Google Ads embutido.
 * Reutilizável em qualquer página — client component leve.
 */
export function WhatsAppLink({ children, className, text }: WhatsAppLinkProps) {
  const phone = SITE.whatsapp.replace(/\D/g, '');
  const msg = encodeURIComponent(text ?? SITE.whatsappText);
  const href = `https://wa.me/${phone}?text=${msg}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      className={className}
    >
      {children}
    </a>
  );
}
