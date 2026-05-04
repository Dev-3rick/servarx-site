import { NextRequest, NextResponse } from 'next/server';
import { findCidadeByVercelCity } from '@/lib/cidades';

/**
 * Geo-redirect: visitantes de cidades-alvo em MG são redirecionados para a
 * landing page localizada (/cidades/[slug]), que tem copy e SEO específicos.
 *
 * - Só atua na rota raiz `/`
 * - Usa o header `x-vercel-ip-city` injetado pela Vercel Edge
 * - Fora das cidades-alvo (ou em dev local): deixa passar para a home padrão
 * - Não redireciona bots (evita confundir crawlers do Google)
 * - Usa 302 (temporário) para preservar a indexação da home genérica
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== '/') return NextResponse.next();

  // Não redirecionar crawlers/bots de SEO
  const ua = request.headers.get('user-agent') ?? '';
  if (/googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebot/i.test(ua)) {
    return NextResponse.next();
  }

  const vercelCity = request.headers.get('x-vercel-ip-city');
  const cidade = findCidadeByVercelCity(vercelCity);

  if (!cidade) return NextResponse.next();

  const destination = new URL(`/cidades/${cidade.slug}`, request.url);
  return NextResponse.redirect(destination, { status: 302 });
}

export const config = {
  matcher: '/',
};
