import { cn } from '@/lib/cn';

type LogoVariant = 'full' | 'icon' | 'inverted';
type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

const SIZE_TEXT: Record<LogoSize, string> = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-4xl',
  xl: 'text-6xl',
};

const SIZE_ICON: Record<LogoSize, number> = {
  sm: 20,
  md: 28,
  lg: 44,
  xl: 64,
};

/**
 * Logo da ServarX.
 *
 * Conceito: "Serva" em wordmark + ícone X formado por dois chevrons cruzados
 * (cyan→teal gradient). O X substitui a última letra do nome, mantendo
 * família visual com o ServarClin (que usa chevrons abertos no mesmo gradient).
 *
 * Variantes:
 * - `full` (default): wordmark "Serva" + ícone X (uso geral: header, hero, footer)
 * - `icon`: só o X (favicon, OG image, app icon)
 * - `inverted`: wordmark branco + ícone com gradient claro (sobre fundo escuro)
 */
export function Logo({
  variant = 'full',
  size = 'md',
  className,
}: LogoProps) {
  const iconSize = SIZE_ICON[size];

  const Icon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ServarX"
      className={cn('shrink-0', variant === 'icon' && className)}
    >
      <defs>
        <linearGradient id="servarx-logo-gradient" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor={variant === 'inverted' ? '#67e8f9' : '#22d3ee'} />
          <stop offset="50%" stopColor={variant === 'inverted' ? '#22d3ee' : '#0891b2'} />
          <stop offset="100%" stopColor={variant === 'inverted' ? '#0891b2' : '#062832'} />
        </linearGradient>
      </defs>

      {/* Chevron > apontando direita (parte ↘ ↗ do X) */}
      <path
        d="M 8 8 L 24 24 L 8 40"
        stroke="url(#servarx-logo-gradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Chevron < apontando esquerda (parte ↙ ↖ do X) */}
      <path
        d="M 40 8 L 24 24 L 40 40"
        stroke="url(#servarx-logo-gradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (variant === 'icon') {
    return Icon;
  }

  const textColor =
    variant === 'inverted' ? 'text-white' : 'text-brand-teal-800';

  return (
    <span
      className={cn(
        'inline-flex items-baseline gap-0 font-bold tracking-tight select-none',
        SIZE_TEXT[size],
        textColor,
        className,
      )}
    >
      <span>Serva</span>
      <span
        className="inline-flex items-center justify-center"
        aria-hidden="true"
        style={{
          width: '1em',
          height: '1em',
          transform: 'translateY(0.05em)',
        }}
      >
        {Icon}
      </span>
      <span className="sr-only">X</span>
    </span>
  );
}
