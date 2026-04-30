import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utilitário pra combinar classes Tailwind sem conflito.
 * Uso: cn('p-4', condition && 'bg-red-500', 'p-2') → resolve precedência.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
