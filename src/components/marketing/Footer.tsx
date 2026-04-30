import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

/* Brand icons inline (lucide v1 não exporta mais ícones de marca) */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { Logo } from '@/components/brand/Logo';
import { SITE } from '@/lib/site';

const FOOTER_LINKS = [
  {
    titulo: 'ServarX',
    links: [
      { label: 'Quem somos', href: '/quem-somos' },
      { label: 'Produtos', href: '/produtos' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contato', href: '/contato' },
    ],
  },
  {
    titulo: 'Produtos',
    links: [
      { label: 'ServarClin', href: '/produtos/servarclin' },
      { label: 'Entrar no app', href: SITE.produto.appUrl },
    ],
  },
  {
    titulo: 'Legal',
    links: [
      { label: 'Política de Privacidade', href: '/privacidade' },
      { label: 'Termos de Uso', href: '/termos' },
      { label: 'Gerenciar cookies', href: '#cookies' },
    ],
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="max-w-page-xl mx-auto px-6 py-16 lg:px-12">
        {/* Top: brand + links em grid */}
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] mb-12">
          {/* Brand column */}
          <div>
            <Link href="/" aria-label="ServarX — Home" className="inline-block mb-6">
              <Logo variant="full" size="md" />
            </Link>
            <p className="text-sm text-brand-neutral-muted max-w-sm leading-relaxed mb-6">
              {SITE.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SITE.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-brand-neutral-bg flex items-center justify-center text-brand-teal-800 hover:bg-brand-teal-800 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={SITE.redes.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-brand-neutral-bg flex items-center justify-center text-brand-teal-800 hover:bg-brand-teal-800 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${SITE.email.contato}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-brand-neutral-bg flex items-center justify-center text-brand-teal-800 hover:bg-brand-teal-800 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="grid gap-8 sm:grid-cols-3">
            {FOOTER_LINKS.map((col) => (
              <div key={col.titulo}>
                <h3 className="font-mono text-xs uppercase tracking-wider text-brand-neutral-light mb-4">
                  {col.titulo}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-brand-neutral-muted hover:text-brand-teal-800 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Indicação banner */}
        <div className="mb-12 rounded-2xl border border-border bg-brand-neutral-bg px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <p className="text-sm text-brand-neutral-muted">
            <strong className="text-brand-teal-800">Conhece um centro médico que precisa?</strong> Indique e ganhe um mês.
          </p>
          <Link
            href="/contato?ref=indicacao"
            className="text-sm font-semibold text-brand-teal-800 hover:underline"
          >
            Quero indicar →
          </Link>
        </div>

        {/* Bottom: legal info */}
        <div className="border-t border-border pt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between text-xs text-brand-neutral-muted">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{SITE.endereco.full}</span>
          </div>
          <div className="font-mono">
            © {currentYear} {SITE.empresa.razaoSocial} · {SITE.empresa.cpfOuCnpj}
          </div>
        </div>
      </div>
    </footer>
  );
}
