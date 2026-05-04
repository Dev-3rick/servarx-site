# Plano Fase 1 — Implementação dos primeiros 3-4 dias do site ServarX

> Pré-requisito: briefing completo aprovado em [BRIEFING.md](BRIEFING.md).
> Pós-condição: site no ar em servarx.com.br com home + 4 páginas + form +
> LGPD + analytics. Pronto pra owner começar a divulgar.

---

## Dia 0 — Pré-flight (conta + acessos)

**Antes** de eu começar a codar, owner precisa:

- [ ] Confirmar GitHub Dev-3rick acessível
- [ ] Confirmar Vercel team `servax` acessível
- [ ] Apontar DNS de `servarx.com.br` na Hostinger pra Vercel (NS ou CNAME — dou comando exato)
- [ ] Criar conta Resend → me passa API key
- [ ] Criar GA4 property → me passa Measurement ID
- [ ] Criar Microsoft Clarity → me passa Project ID
- [ ] Criar Meta Pixel → me passa Pixel ID
- [ ] Criar Google Sheet "ServarX Leads" → compartilha com email de service account (eu crio)
- [ ] Confirmar número WhatsApp ServarX (decidir 7.3 do briefing)

**Tempo total owner:** ~2h em 1 dia.

---

## Dia 1 — Fundação técnica

### 1.1 Repo e deploy

```bash
# Eu rodo:
npx create-next-app@latest servarx-site --typescript --tailwind --app --turbopack
cd servarx-site
git init && git add -A && git commit -m "feat: scaffolding"
gh repo create Dev-3rick/servarx-site --public --source=. --push
vercel link --project servarx-site
vercel domains add servarx.com.br
```

**Saída esperada:** `https://servarx.vercel.app` no ar com placeholder Next.

### 1.2 Design tokens herdados do ServarClin

Copio `globals.css` do ServarClin v2 (paleta cyan/teal, Inter, gradientes) e
adapto:

- **Trocar protagonismo:** ServarX = teal-800 protagonista (não cyan)
- **Adicionar gradient hero corporate:** mais escuro que ServarClin
- **Manter:** Inter, escala 8px, container page-xl 1180px, animação fade-up

### 1.3 Logo ServarX em SVG

Conceito: chevrons cyan→teal do ServarClin **invertidos formando X
tipográfico**, encaixados na **última letra do nome ServarX**.

```
S e r v a r ⫻
              ↑
           (chevrons formando X)
```

Componente `<Logo />` em `components/brand/Logo.tsx`:
- Wordmark "ServarX" em fonte Inter Bold
- Última letra "X" substituída por SVG inline (chevrons gradient cyan→teal)
- Variantes: `default`, `compact` (só símbolo), `inverted` (sobre fundo escuro)

Favicon + PWA manifest gerados a partir do mesmo SVG (script
`scripts/generate-favicons.ts`).

### 1.4 Estrutura de pastas

```
servarx-site/
├─ src/
│  ├─ app/
│  │  ├─ (marketing)/
│  │  │  ├─ page.tsx               # Home
│  │  │  ├─ quem-somos/page.tsx
│  │  │  ├─ produtos/page.tsx
│  │  │  ├─ produtos/servarclin/page.tsx
│  │  │  └─ contato/page.tsx
│  │  ├─ (legal)/
│  │  │  ├─ privacidade/page.tsx
│  │  │  └─ termos/page.tsx
│  │  ├─ api/
│  │  │  └─ contato/route.ts       # POST → email + WhatsApp + Sheets
│  │  ├─ layout.tsx
│  │  ├─ globals.css
│  │  ├─ not-found.tsx
│  │  └─ error.tsx
│  ├─ components/
│  │  ├─ brand/Logo.tsx
│  │  ├─ marketing/Hero.tsx
│  │  ├─ marketing/Pricing.tsx
│  │  ├─ marketing/FoundersBanner.tsx   # 5 parceiros fundadores
│  │  ├─ marketing/Footer.tsx
│  │  ├─ marketing/Header.tsx
│  │  ├─ marketing/WhatsAppFab.tsx       # botão flutuante
│  │  ├─ marketing/CookieBanner.tsx
│  │  └─ forms/ContactForm.tsx
│  ├─ lib/
│  │  ├─ resend.ts
│  │  ├─ zapi.ts                   # webhook outbound
│  │  ├─ sheets.ts
│  │  ├─ analytics.ts              # carregamento condicional GA/Pixel
│  │  └─ schema-org.ts
│  └─ content/
│     └─ blog/                     # MDX (vazio no MVP)
├─ public/
│  ├─ favicon/                     # gerado do Logo
│  ├─ og/                          # OG images estáticas (até @vercel/og dinâmico)
│  └─ assets/                      # ilustrações vetoriais
├─ vercel.ts
└─ next.config.ts
```

### 1.5 Configuração Vercel

`vercel.ts` (não `vercel.json`):

```ts
import { type VercelConfig, routes } from '@vercel/config/v1';

export const config: VercelConfig = {
  buildCommand: 'next build',
  framework: 'nextjs',
  redirects: [
    routes.redirect('/blog', '/blog/page/1'),    // Fase 2
  ],
  headers: [
    routes.cacheControl('/assets/(.*)', { public: true, maxAge: '1 year', immutable: true }),
  ],
  // Cron do blog vai entrar na Fase 2:
  // crons: [{ path: '/api/blog/generate', schedule: '0 11 * * 3' }],
};
```

---

## Dia 2 — Home + componentes globais

### 2.1 Header

- Logo (link pra `/`)
- Navegação: Quem somos · Produtos · Blog (placeholder) · Contato
- CTA primário: "Falar com a gente" (botão preenchido cyan/teal)
- Mobile: hamburguer

### 2.2 Hero da home

```
┌──────────────────────────────────────────────────────┐
│  [eyebrow] PARA CENTROS MÉDICOS DO INTERIOR           │
│                                                      │
│  A primeira IA conversacional construída             │
│  para o seu Centro Médico.                           │
│                                                      │
│  Agende todos os médicos e atenda pacientes em       │
│  áudio e texto, 24h por dia, sem pagar licença       │
│  por profissional.                                   │
│                                                      │
│  [Falar com um especialista] [Ver demonstração]      │
│                                                      │
│  ⓘ 30 dias de garantia · sem fidelidade · suporte humano │
└──────────────────────────────────────────────────────┘
```

Background: `--gradient-hero-glow` do ServarClin com tons mais sóbrios.

### 2.3 Section "Não é só mais um SaaS, não é só mais um atendente de IA"

Eyebrow grande + texto curto explicando os 4 valores não-negociáveis.
Sem decoração, peso na tipografia (Stripe-style).

### 2.4 Section "5 Parceiros Fundadores"

```
┌──────────────────────────────────────────────────────┐
│  Os 5 parceiros fundadores ServarX em Minas Gerais   │
│                                                      │
│  [card 1: ✨]  [card 2: ✨]  [card 3: ✨]            │
│  [card 4: ✨]  [card 5: ✨]                           │
│                                                      │
│  4 vagas. Indique-se.                                │
│  [Quero ser um dos 5]                                │
└──────────────────────────────────────────────────────┘
```

Cada vaga preenchida vira foto + nome + cidade + quote curta. Antes,
ilustração discreta + label "vaga aberta".

### 2.5 Section "Como funciona"

Substitui section "wow" no MVP (sem GSAP ainda — vem na Fase 2). Versão
estática:

3 cards horizontais:
1. **Paciente manda mensagem** (mock WhatsApp)
2. **IA entende e age** (ícone/ilustração de tools)
3. **Agenda atualiza sozinha** (mock dashboard)

Quando vier Fase 2, isso vira a section pinada com Lenis + GSAP.

### 2.6 Section CTA final

"Pronto pra liberar sua agenda?" + form de contato simplificado (nome,
telefone, cidade) + botão WhatsApp grande.

### 2.7 Footer

- Logo + tagline curta
- Links: Quem somos, Produtos, Contato, Privacidade, Termos
- Endereço: "ServarX — Barão de Cocais, MG"
- CNPJ (quando tiver) ou "Erick Henrique [sobrenome] CPF XXX.XXX.XXX-XX"
- Links sociais (Instagram, LinkedIn)
- Email: `lgpd@servarx.com.br` (quando configurar)
- "Conhece um centro médico? Indique e ganhe."

### 2.8 Componentes globais

- `<WhatsAppFab />` — bottom-right fixo, todas as páginas
- `<CookieBanner />` — primeira visita, LGPD-compliant
- `<Header />` e `<Footer />` no `(marketing)/layout.tsx`

---

## Dia 3 — /quem-somos + /produtos + /produtos/servarclin

### 3.1 /quem-somos (sem foto — owner descartou)

- Hero: **ilustração geométrica abstrata** + frase grande tipográfica ("Não é só mais um SaaS. Não é só mais um atendente de IA.")
- Section "história" — narrativa do Erick (Engenharia Computação + janela de mercado + ServarClin v1 → v2). Texto em destaque, sem foto.
- Section "valores" — 4 cards com os valores não-negociáveis (do briefing)
- Section "visão" — house of products tier 1
- Section "founder voice" — quote grande entre aspas + "Erick Henrique, Fundador" (sem foto)
- CTA: "Quer conhecer o produto?" → `/produtos/servarclin`

### 3.2 /produtos

Vitrine. Card único da ServarClin (foto/ilustração + headline + CTA "Saber
mais"). Cards adicionais com placeholder "Em breve" (estilo Apple "more
products coming").

### 3.3 /produtos/servarclin

Landing dedicada — versão expandida da home, com foco no produto:

- Hero: headline do ServarClin (não da ServarX) + sub-headline focado em "agendamento, atendimento, histórico"
- Section "Para quem é" / "Para quem não é" (ICP claro: 1-10 médicos, multiespecialidade interior)
- Section "3 capacidades" (atende+agenda / confirma+lembra / lembra do paciente)
- Section "3 features de paridade" (Google Agenda, lembretes 24h/2h, multimídia)
- Section "3 diferenciais ownable" (memória familiar, triagem dinâmica, sotaque local)
- Section **PRICING** — 3 cards (Automa / Inteligência destacado / Scale) + add-ons + setup fee + garantia 30 dias
- Section "FAQ" (5-7 perguntas) com Schema.org `FAQPage`
- Section CTA "Falar com um especialista"

---

## Dia 4 — Form, integrações, LGPD, deploy

### 4.1 Form de contato + API route

- `/api/contato` Server Action recebe POST
- Valida com Zod
- Honeypot + reCAPTCHA v3 + rate limit (Upstash KV)
- Em paralelo:
  1. Resend → email pro owner com dados estruturados
  2. Z-API → WhatsApp pro owner ("Lead novo: {nome} ({telefone}) — Cidade: {cidade}")
  3. Google Sheets API → linha nova
- Retorna `{ ok: true }` → toast "Recebemos sua mensagem. Vamos te chamar no WhatsApp em breve."

### 4.2 Cookie banner LGPD

- Bottom da página, primeira visita
- Botões "Aceitar" / "Rejeitar" iguais
- Link "Saiba mais" → `/privacidade`
- LocalStorage `servarx_consent`
- Carregamento condicional de GA4 + Clarity + Pixels via `<Script strategy="afterInteractive">` SOMENTE se `accepted`
- Footer tem link "Gerenciar cookies" que reabre banner

### 4.3 Páginas legais (drafts em [TEMPLATE_LEGAL.md](TEMPLATE_LEGAL.md))

- `/privacidade` — MDX renderizado
- `/termos` — MDX renderizado

### 4.4 SEO técnico

- `app/sitemap.ts` (next-sitemap)
- `app/robots.ts`
- Meta tags por página (title + description + OG + Twitter)
- Schema.org embarcado: `Organization` + `LocalBusiness` (footer) + `FAQPage` (em /produtos/servarclin)
- Favicon + manifest.webmanifest

### 4.5 Performance + acessibilidade

- Lighthouse CI configurado: bloqueia merge se < 85
- `next/image` em todas as imagens
- `next/font` Inter com display swap + preload
- Server Components default
- Heading hierarchy correta (1 h1 por página)
- Cor contrast AA (tokens já garantem)

### 4.6 Deploy final

- DNS confirmado
- Vercel preview → produção
- Smoke test:
  - [ ] Home carrega < 1.5s
  - [ ] Botão WhatsApp abre `wa.me/55XXXXXXXXXXX`
  - [ ] Form submete e dispara email + WhatsApp + planilha
  - [ ] Cookie banner aparece, "Rejeitar" não carrega GA
  - [ ] /privacidade e /termos renderizam
  - [ ] 404 funciona
  - [ ] Lighthouse score 90+

### 4.7 Pós-deploy

- Submeter sitemap no Google Search Console
- Cadastrar Google Business Profile (Barão de Cocais)
- Postar no LinkedIn pessoal: "Lançamos a ServarX — minha empresa de IA pra clínicas"
- Iniciar lista de 50-80 clínicas em paralelo

---

## Orçamento de tempo (real)

| Dia | Eu (Claude/dev) | Owner |
|---|---|---|
| Dia 0 | — | 2h (criar contas + DNS) |
| Dia 1 | 6h (repo + tokens + logo + estrutura) | 30min (revisão) |
| Dia 2 | 7h (home + componentes globais) | 30min (revisão) |
| Dia 3 | 7h (3 páginas internas) | 30min (revisão) |
| Dia 4 | 7h (form + LGPD + SEO + deploy) | 1h (smoke test + lançamento) |
| **Total** | **27h** | **4-5h** |

Se trabalhar 4-6h/dia, **5-7 dias corridos** até site no ar.

---

## O que NÃO entra na Fase 1 (vai pra Fase 2)

- Section "wow" scroll-driven (Lenis + GSAP + Lottie WhatsApp animado)
- Calculadora interativa
- Checklist PDF
- Blog automatizado (cron + AI Gateway)
- Landing pages geo-locais por cidade
- A/B testing
- OG image dinâmico via @vercel/og
- Página `/parceiros-fundadores/termos`

---

## Pronto pra começar?

Quando você aprovar este plano + tiver o Dia 0 fechado (contas + DNS), eu
abro o repo e começo o Dia 1.
