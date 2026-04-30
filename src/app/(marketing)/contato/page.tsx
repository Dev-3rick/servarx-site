import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/marketing/ContactForm';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Falar com a ServarX',
  description:
    'Manda uma mensagem ou liga no WhatsApp. Sem robô — quem responde sou eu (Erick), de Barão de Cocais. Resposta em até 24h.',
};

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 py-20 lg:px-12 lg:py-24"
        style={{ background: 'var(--gradient-hero-glow)' }}
      >
        <div className="max-w-page-md mx-auto text-center">
          <p
            className="mb-6 font-mono uppercase tracking-[0.18em] text-brand-cyan-600"
            style={{ fontSize: 'var(--text-eyebrow)' }}
          >
            FALAR COM A GENTE
          </p>
          <h1
            className="font-bold tracking-tight text-brand-teal-800 leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Sem robô. Sou eu mesmo que respondo.
          </h1>
          <p className="text-lg text-brand-neutral-muted leading-relaxed">
            Resposta em até 24h. Geralmente no mesmo dia. Se mandar agora à noite,
            te chamo amanhã cedo.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-page-lg mx-auto">
          <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
            {/* Form */}
            <div className="rounded-3xl border border-border bg-surface p-8 lg:p-10 shadow-soft">
              <h2 className="text-2xl font-bold text-brand-teal-800 mb-2">
                Manda a mensagem
              </h2>
              <p className="text-brand-neutral-muted mb-8">
                Preencha o que quiser — quanto mais detalhe sobre sua clínica, mais útil é a primeira conversa.
              </p>
              <Suspense fallback={<div className="h-96 animate-pulse bg-brand-neutral-bg rounded-xl" />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Info lateral */}
            <aside className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-brand-teal-800 mb-4">
                  Prefere falar direto?
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-mono uppercase tracking-wider text-xs text-brand-neutral-light mb-1">WhatsApp</p>
                      <a
                        href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-teal-800 font-semibold hover:underline"
                      >
                        Manda mensagem no WhatsApp
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-mono uppercase tracking-wider text-xs text-brand-neutral-light mb-1">Email</p>
                      <a
                        href={`mailto:${SITE.email.contato}`}
                        className="text-brand-teal-800 font-semibold hover:underline break-all"
                      >
                        {SITE.email.contato}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-teal-800 mb-4">
                  Onde a gente fica
                </h3>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono uppercase tracking-wider text-xs text-brand-neutral-light mb-1">Sede</p>
                    <p className="text-brand-neutral-muted">{SITE.endereco.full}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-teal-800 mb-4">
                  Quando a gente responde
                </h3>
                <div className="flex items-start gap-3 text-sm">
                  <Clock className="w-5 h-5 text-brand-cyan-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono uppercase tracking-wider text-xs text-brand-neutral-light mb-1">SLA</p>
                    <p className="text-brand-neutral-muted">
                      Em até 24h, geralmente no mesmo dia. Sem horário comercial — se eu vir, respondo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-brand-neutral-bg border border-border p-6">
                <p className="text-sm text-brand-neutral-muted leading-relaxed">
                  <strong className="text-brand-teal-800">Para questões de privacidade / LGPD:</strong>{' '}
                  <a href={`mailto:${SITE.email.lgpd}`} className="text-brand-teal-800 underline">
                    {SITE.email.lgpd}
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
