import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { CIDADES } from '@/lib/cidades';

const STATIC_ROUTES: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/quem-somos', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/produtos', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/produtos/servarclin', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/compras', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/contato', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/privacidade', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/termos', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const cidadeEntries = CIDADES.map((c) => ({
    url: `${SITE.url}/cidades/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...staticEntries, ...cidadeEntries];
}
