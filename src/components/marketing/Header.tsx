'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { cn } from '@/lib/cn';

const NAV_ITEMS = [
  { label: 'Quem somos', href: '/quem-somos' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Blog', href: '/blog' },
] as const;

/**
 * Header sticky do site institucional.
 * Server-friendly mas usa client state pra hamburguer mobile.
 */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="max-w-page-xl mx-auto flex items-center justify-between px-6 py-4 lg:px-8 lg:py-5">
        <Link href="/" aria-label="ServarX — Home" className="focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-ring)] rounded-md">
          <Logo variant="full" size="md" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-neutral-muted">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-brand-teal-800 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-ring)] rounded-md px-1 py-1"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <Link
              href="https://servarclin.com.br"
              className="hover:text-brand-teal-800 transition-colors"
            >
              ServarClin
            </Link>
            <Link
              href="/contato"
              className="rounded-full bg-brand-teal-800 px-6 py-2.5 font-semibold text-white shadow-cta hover:bg-brand-teal-700 hover:shadow-cta-accent transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-ring)]"
            >
              Agendar demonstração
            </Link>
          </div>
        </nav>

        {/* Mobile hamburguer */}
        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-full text-brand-teal-800 hover:bg-brand-neutral-bg transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-ring)]"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'md:hidden overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 ease-out',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-medium text-brand-teal-800 hover:bg-brand-neutral-bg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 rounded-full bg-brand-teal-800 text-center font-semibold text-white"
          >
            Falar com a gente
          </Link>
        </nav>
      </div>
    </header>
  );
}
