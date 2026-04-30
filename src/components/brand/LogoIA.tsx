import { cn } from '@/lib/cn';

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface LogoIAProps {
  /** Nome da sub-marca: "ServarX.IA", "ServarVet.IA", "ServarLaw.IA"... */
  name?: string;
  size?: Size;
  inverted?: boolean;
  /** Se o ponto pulsa (animação). True por padrão. */
  pulse?: boolean;
  className?: string;
}

const SIZE_TEXT: Record<Size, string> = {
  sm: 'text-base',
  md: 'text-xl',
  lg: 'text-3xl',
  xl: 'text-5xl',
};

/**
 * Logo das **sub-marcas IA** da ServarX (conceito E — wordmark + ponto pulsante).
 *
 * Reservado pra produtos de IA dentro do guarda-chuva ServarX:
 * - ServarX.IA (assistente conversacional default)
 * - ServarVet.IA (veterinária — futuro)
 * - ServarLaw.IA (advocacia — futuro)
 *
 * Inspiração: Luma Health, status-light Vercel deploy.
 * O ponto cyan pulsa indicando "ao vivo / agente ativo".
 *
 * Uso:
 * ```tsx
 * <LogoIA name="ServarX.IA" size="lg" />
 * <LogoIA name="ServarVet.IA" size="md" inverted />
 * ```
 */
export function LogoIA({
  name = 'ServarX.IA',
  size = 'md',
  inverted = false,
  pulse = true,
  className,
}: LogoIAProps) {
  const dotColor = inverted ? '#67e8f9' : '#22d3ee';
  const baseColor = inverted ? 'text-white' : 'text-brand-teal-800';

  return (
    <span
      role="img"
      aria-label={name}
      className={cn(
        'inline-flex items-baseline gap-1.5 font-bold tracking-tight select-none',
        SIZE_TEXT[size],
        baseColor,
        className,
      )}
    >
      <span>{name}</span>
      <span
        aria-hidden="true"
        className="inline-block rounded-full"
        style={{
          width: '0.42em',
          height: '0.42em',
          background: dotColor,
          boxShadow: `0 0 0.6em ${dotColor}, 0 0 0.3em ${dotColor}`,
          animation: pulse ? 'pulse-soft 2s ease-in-out infinite' : undefined,
        }}
      />
    </span>
  );
}
