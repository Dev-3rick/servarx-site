import { SITE } from '@/lib/site';

/**
 * Schema.org JSON-LD pra SEO. Inclua em layouts/páginas-chave.
 */

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  legalName: SITE.empresa.razaoSocial,
  url: SITE.url,
  description: SITE.description,
  founder: {
    '@type': 'Person',
    name: 'Erick Henrique',
  },
  foundingDate: '2026',
  foundingLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.endereco.cidade,
      addressRegion: SITE.endereco.uf,
      addressCountry: SITE.endereco.pais,
    },
  },
  sameAs: [SITE.redes.instagram, SITE.redes.linkedin, SITE.redes.github],
};

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email.contato,
  telephone: SITE.whatsapp,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.endereco.cidade,
    addressRegion: SITE.endereco.uf,
    addressCountry: 'BR',
  },
  areaServed: [
    { '@type': 'Place', name: 'Minas Gerais, Brasil' },
    { '@type': 'Place', name: 'Brasil' },
  ],
};

export function OrganizationLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION) }}
    />
  );
}

export function LocalBusinessLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS) }}
    />
  );
}

interface ProductLdProps {
  name: string;
  description: string;
  url: string;
  priceRange?: string;
}

export function ProductLd({ name, description, url, priceRange }: ProductLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: priceRange
      ? {
          '@type': 'AggregateOffer',
          priceCurrency: 'BRL',
          lowPrice: priceRange.split('-')[0],
          highPrice: priceRange.split('-')[1] ?? priceRange.split('-')[0],
        }
      : undefined,
    provider: {
      '@type': 'Organization',
      name: SITE.name,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
