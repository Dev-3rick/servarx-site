'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { z } from 'zod';
import { toast } from 'sonner';
import { Send, Loader2 } from 'lucide-react';
import { cn } from '@/lib/cn';

const ContactSchema = z.object({
  nome: z.string().min(2, 'Diga seu nome'),
  telefone: z.string().min(10, 'Telefone com DDD, por favor'),
  cidade: z.string().min(2, 'Em qual cidade fica a clínica?'),
  medicos: z.string().optional(),
  mensagem: z.string().optional(),
  // honeypot
  website: z.string().max(0, 'Bot detectado'),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof ContactSchema>, string>>;

/**
 * Form de contato — versão Dia 3.
 * Validação local com Zod + honeypot.
 *
 * TODO Dia 4: integrar /api/contato com Resend + Z-API + Google Sheets.
 * Por enquanto simula sucesso com toast.
 */
export function ContactForm() {
  const params = useSearchParams();
  const ref = params.get('ref') ?? '';

  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setSubmitting(true);
    setErrors({});

    const data = {
      nome: String(formData.get('nome') ?? ''),
      telefone: String(formData.get('telefone') ?? ''),
      cidade: String(formData.get('cidade') ?? ''),
      medicos: String(formData.get('medicos') ?? ''),
      mensagem: String(formData.get('mensagem') ?? ''),
      website: String(formData.get('website') ?? ''),
    };

    const result = ContactSchema.safeParse(data);
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

    // TODO Dia 4: POST /api/contato (Resend + Z-API + Sheets)
    // Simula envio
    await new Promise((r) => setTimeout(r, 800));

    toast.success('Recebemos sua mensagem!', {
      description: 'Vou te chamar no WhatsApp ainda hoje. Sem robô, sou eu mesmo.',
      duration: 6000,
    });
    setSubmitting(false);
    (document.getElementById('contact-form') as HTMLFormElement)?.reset();
  }

  return (
    <form
      id="contact-form"
      action={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {/* Honeypot — humanos não preenchem */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {ref && (
        <input type="hidden" name="ref" value={ref} />
      )}

      <Field
        label="Nome"
        name="nome"
        type="text"
        placeholder="Seu nome completo"
        autoComplete="name"
        required
        error={errors.nome}
      />

      <Field
        label="WhatsApp"
        name="telefone"
        type="tel"
        placeholder="(31) 9 9999-9999"
        autoComplete="tel"
        required
        error={errors.telefone}
      />

      <Field
        label="Cidade da clínica"
        name="cidade"
        type="text"
        placeholder="Ex: João Monlevade"
        autoComplete="address-level2"
        required
        error={errors.cidade}
      />

      <div>
        <label htmlFor="medicos" className="block text-sm font-medium text-brand-teal-800 mb-2">
          Quantos médicos atendem? <span className="font-normal text-brand-neutral-light">(opcional)</span>
        </label>
        <select
          id="medicos"
          name="medicos"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-brand-fg focus:outline-none focus:ring-4 focus:ring-[color:var(--color-ring)] focus:border-brand-teal-800 transition-all"
        >
          <option value="">Não sei agora</option>
          <option value="1">1 médico</option>
          <option value="2-3">2 a 3 médicos</option>
          <option value="4-6">4 a 6 médicos</option>
          <option value="7-10">7 a 10 médicos</option>
          <option value="11+">Mais de 10</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-brand-teal-800 mb-2">
          Algo a mais? <span className="font-normal text-brand-neutral-light">(opcional)</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          placeholder="Me conta o que tá doendo no atendimento da sua clínica..."
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-brand-fg focus:outline-none focus:ring-4 focus:ring-[color:var(--color-ring)] focus:border-brand-teal-800 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal-800 px-6 py-4 font-bold text-white shadow-cta transition-all hover:bg-brand-teal-700 hover:shadow-cta-accent hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-ring)]"
      >
        {submitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Quero minha demonstração grátis
          </>
        )}
      </button>

      {/* Next-step reassurance — reduce post-submit anxiety */}
      <p className="text-sm text-brand-neutral-muted text-center leading-relaxed">
        📲 Nossa equipe responde em até 24h pelo WhatsApp — geralmente no mesmo dia.
        <br />
        <span className="text-xs text-brand-neutral-light">
          Sem compromisso · sem ligação indesejada ·{' '}
          <a href="/privacidade" className="underline hover:text-brand-teal-800">Política de Privacidade</a>
        </span>
      </p>
    </form>
  );
}

/* Helper field reutilizável */
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
