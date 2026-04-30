import { cn } from '@/lib/cn';

type LogoVariant = 'full' | 'icon' | 'inverted';
type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

const SIZE_TEXT: Record<LogoSize, string> = {
  sm: 'text-lg',     // ~18px
  md: 'text-2xl',    // ~24px
  lg: 'text-4xl',    // ~36px
  xl: 'text-6xl',    // ~60px
};

const SIZE_ICON: Record<LogoSize, string> = {
  sm: 'text-2xl',
  md: 'text-4xl',
  lg: 'text-6xl',
  xl: 'text-8xl',
};

const GRADIENT_LIGHT =
  'linear-gradient(135deg, #22d3ee 0%, #0891b2 50%, #062832 100%)';
const GRADIENT_INVERTED =
  'linear-gradient(135deg, #67e8f9 0%, #22d3ee 50%, #0891b2 100%)';

/**
 * Logo da ServarX (conceito A — Wordmark puro).
 *
 * Tipografia faz tudo: "Servar" em peso bold da Inter + "X" em gradient
 * cyan→teal. Sem símbolo separado. Inspiração: Stripe / Linear / Hyro.
 *
 * Variantes:
 * - `full` (default): "ServarX" inteiro com X em gradient (header, hero, footer)
 * - `icon`: só "X" gigante com gradient (favicon, OG image, app)
 * - `inverted`: wordmark branco + X com gradient claro (sobre fundo escuro)
 */
export function Logo({
  variant = 'full',
  size = 'md',
  className,
}: LogoProps) {
  const isInverted = variant === 'inverted';
  const gradient = isInverted ? GRADIENT_INVERTED : GRADIENT_LIGHT;

  if (variant === 'icon') {
    return (
      <span
        role="img"
        aria-label="ServarX"
        className={cn(
          'inline-block font-black leading-none',
          SIZE_ICON[size],
          className,
        )}
        style={{
          background: gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        X
      </span>
    );
  }

  const baseColor = isInverted ? 'text-white' : 'text-brand-teal-800';

  return (
    <span
      role="img"
      aria-label="ServarX"
      className={cn(
        'inline-flex items-baseline font-bold tracking-tight select-none',
        SIZE_TEXT[size],
        baseColor,
        className,
      )}
    >
      <span>Servar</span>
      <span
        style={{
          background: gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        X
      </span>
    </span>
  );
}
