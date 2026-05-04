'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { z } from 'zod';
import { toast } from 'sonner';
import { Send, Loader2 } from 'lucide-react';
import { cn } from '@/lib/cn';
import { trackWhatsAppClick } from '@/lib/gtag';

/**
 * Formulário de contato otimizado para landing page de campanha.
 * Diferenças em relação ao ContactForm principal:
 * - ref default = 'google-ads-solucao-direta' (se não vier por query param)
 * - Dispara conversão Google Ads no submit (mesmo evento do WhatsApp click)
 * - Campos reduzidos para maximizar conversão (sem campo "mensagem")
 * - CTA mais direto: "Quero testar grátis"
 */

const LpSchema = z.object({
  nome: z.string().min(2, 'Diga seu nome'),
  telefone: z.string().min(10, 'WhatsApp com DDD, por favor'),
  clinica: z.string().min(2, 'Nome da clínica'),
  medicos: z.string().min(1, 'Selecione a quantidade de médicos'),
  website: z.string().max(0, 'Bot detectado'), // honeypot
});

type FieldErrors = Partial<Record<keyof z.infer<typeof LpSchema>, string>>;

export function LpContactForm() {
  const params = useSearchParams();
  const ref = params.get('ref') || 'google-ads-solucao-direta';
  const utmSource = params.get('utm_source') || '';
  const utmCampaign = params.get('utm_campaign') || '';

  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setSubmitting(true);
    setErrors({});

    const raw = {
      nome: String(formData.get('nome') ?? ''),
      telefone: String(formData.get('telefone') ?? ''),
      clinica: String(formData.get('clinica') ?? ''),
      medicos: String(formData.get('medicos') ?? ''),
      website: String(formData.get('website') ?? ''),
    };

    const result = LpSchema.safeParse(raw);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...result.data,
          email: '', // campo não coletado na LP, API aceita vazio
          cidade: '', // idem
          ref,
          utmSource,
          utmCampaign,
        }),
      });

      if (!res.ok) throw new Error('server_error');

      // Dispara conversão Google Ads no submit bem-sucedido
      trackWhatsAppClick();

      toast.success('Solicitação recebida!', {
        description:
          'Erick Henrique analisa o perfil da sua clínica e entra em contato em até 24h pelo WhatsApp.',
        duration: 6000,
      });
      (document.getElementById('lp-contact-form') as HTMLFormElement)?.reset();
    } catch {
      toast.error('Não conseguimos enviar agora.', {
        description:
          'Tente pelo WhatsApp no botão abaixo ou mande um e-mail para Servaxhome@gmail.com',
        duration: 8000,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      id="lp-contact-form"
      action={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Não preencha</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <input type="hidden" name="ref" value={ref} />

      <Field
        label="Seu nome"
        name="nome"
        type="text"
        placeholder="Como podemos te chamar?"
        autoComplete="name"
        required
        error={errors.nome}
      />

      <Field
        label="WhatsApp (com DDD)"
        name="telefone"
        type="tel"
        placeholder="(31) 9 9999-9999"
        autoComplete="tel"
        required
        error={errors.telefone}
      />

      <Field
        label="Nome da clínica"
        name="clinica"
        type="text"
        placeholder="Ex: Clínica Saúde Total"
        autoComplete="organization"
        required
        error={errors.clinica}
      />

      <div>
        <label htmlFor="medicos" className="block text-sm font-medium text-brand-teal-800 mb-2">
          Quantos médicos atendem? <span className="text-brand-cyan-600">*</span>
        </label>
        <select
          id="medicos"
          name="medicos"
          required
          className={cn(
            'w-full rounded-xl border bg-surface px-4 py-3 text-brand-fg focus:outline-none focus:ring-4 focus:ring-[color:var(--color-ring)] focus:border-brand-teal-800 transition-all',
            errors.medicos ? 'border-red-400' : 'border-border',
          )}
        >
          <option value="">Selecione...</option>
          <option value="1">1 médico</option>
          <option value="2-3">2 a 3 médicos</option>
          <option value="4-6">4 a 6 médicos</option>
          <option value="7-10">7 a 10 médicos</option>
          <option value="11+">Mais de 10</option>
        </select>
        {errors.medicos && (
          <p role="alert" className="mt-2 text-sm text-red-600">{errors.medicos}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-bold text-white shadow-cta-accent transition-all hover:bg-[#1da851] hover:shadow-large hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {submitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Quero testar grátis
          </>
        )}
      </button>

      <p className="text-sm text-brand-neutral-muted text-center leading-relaxed">
        Sem compromisso · Sem ligação indesejada · Resposta em até 24h
        <br />
        <span className="text-xs text-brand-neutral-light">
          <a href="/privacidade" className="underline hover:text-brand-teal-800">Política de Privacidade</a>
        </span>
      </p>
    </form>
  );
}

/* ── Field helper ──────────────────────────────────────────────────── */

interface FieldProps {
  label: string;
  name: string;
  type: 'text' | 'tel' | 'email';
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  error?: string;
}

function Field({ label, name, type, placeholder, autoComplete, required, error }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-brand-teal-800 mb-2">
        {label} {required && <span className="text-brand-cyan-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(
          'w-full rounded-xl border bg-surface px-4 py-3 text-brand-fg focus:outline-none focus:ring-4 focus:ring-[color:var(--color-ring)] focus:border-brand-teal-800 transition-all',
          error ? 'border-red-400' : 'border-border',
        )}
      />
      {error && (
        <p id={`${name}-error`} role="alert" className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
