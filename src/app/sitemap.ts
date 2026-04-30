import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/quem-somos', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/produtos', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/produtos/servarclin', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/contato', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/privacidade', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/termos', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
