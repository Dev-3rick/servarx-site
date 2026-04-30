'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

type RevealVariant = 'up' | 'fade' | 'scale' | 'slide-left' | 'slide-right';

interface RevealProps {
  children: ReactNode;
  /** Tipo de animação. Default: 'up'. */
  variant?: RevealVariant;
  /** Delay em milissegundos pra fazer stagger entre elementos. */
  delay?: number;
  /** Duração custom em segundos (default 1.1 — animação calma, cinematic). */
  duration?: number;
  /** Se true, anima ao montar (sem esperar viewport). Use no hero. */
  immediate?: boolean;
  /** Quanto da seção precisa ser visível pra triggerar (0-1). Default 0.2. */
  amount?: number;
  className?: string;
  /** Tag HTML do wrapper. Default 'div'. */
  as?: 'div' | 'section' | 'article' | 'header' | 'span' | 'li' | 'aside';
}

const VARIANTS: Record<RevealVariant, Variants> = {
  up: {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0 },
  },
};

/**
 * Wrapper de animação de entrada ao scrollar.
 *
 * Trigger: por padrão dispara quando 20% da section entra no viewport,
 * com offset de -10% no fundo (anima um pouco antes do elemento "encostar").
 * Anima uma vez só (não re-dispara ao scrollar de volta).
 *
 * Respeita `prefers-reduced-motion` — se o usuário prefere menos movimento,
 * vira no-op (renderiza children direto sem animação).
 *
 * Uso:
 * ```tsx
 * <Reveal variant="up">
 *   <h2>Título da section</h2>
 * </Reveal>
 *
 * // Stagger em cards:
 * {items.map((item, i) => (
 *   <Reveal key={item.id} delay={i * 80}>
 *     <Card {...item} />
 *   </Reveal>
 * ))}
 * ```
 */
export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 1.1,
  immediate = false,
  amount = 0.2,
  className,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const motionProps = immediate
    ? { initial: 'hidden' as const, animate: 'visible' as const }
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once: true, amount, margin: '0px 0px -10% 0px' },
      };

  const MotionTag = motion[as];

  return (
    <MotionTag
      {...motionProps}
      variants={VARIANTS[variant]}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
