# Plano técnico — Blog automatizado ServarX (1 post/semana)

> Owner pediu blog 1 post/semana automatizado, com solo dev mantendo.
> Solução: **AI gera draft → owner revisa em 10min → publica**.
> Custo: ~R$ 1,50/mês. Risco SEO mitigado por humans-in-the-loop e tom Cimed.

---

## Arquitetura

```
┌──────────────────────────────────────────────────────────────────┐
│  CRON VERCEL (toda quarta 08:00 BRT)                             │
│  Disparado por vercel.ts: { schedule: '0 11 * * 3' }             │
└────────────────────────────┬─────────────────────────────────────┘
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│  /api/blog/generate                                              │
│  - Lê próximo tópico da fila (planning/site-servarx/blog-queue.json) │
│  - Chama Vercel AI Gateway → Claude Sonnet 4.6                   │
│  - System prompt = voz Cimed + categoria + estrutura SEO         │
│  - Output: post completo em MDX (800-1.200 palavras)             │
└────────────────────────────┬─────────────────────────────────────┘
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│  GITHUB API                                                      │
│  - Cria branch blog/auto-{YYYY-MM-DD}                            │
│  - Commita arquivo content/blog/{slug}.mdx                       │
│  - Abre PR com label `blog-auto`                                 │
│  - Vercel deploy preview automático                              │
└────────────────────────────┬─────────────────────────────────────┘
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│  RESEND → email pro owner                                        │
│  Subject: "📝 Novo rascunho: {título}"                           │
│  Body: link do PR + link do preview + botão "Aprovar e publicar" │
└────────────────────────────┬─────────────────────────────────────┘
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│  OWNER (10 min de revisão no celular)                            │
│  - Abre PR no GitHub mobile                                      │
│  - Lê preview, ajusta o que precisa, ou aprova direto            │
│  - Merge → Vercel deploy → post publicado                        │
│  - Sitemap.xml regenerado, Google ping automático                │
└──────────────────────────────────────────────────────────────────┘
```

## Componentes

### 1. Fila de tópicos — `blog-queue.json`

52 tópicos pré-aprovados (1 ano de conteúdo). Renovado quando esvaziar.

```json
{
  "queue": [
    {
      "slug": "como-reduzir-no-show-clinica",
      "title": "Como reduzir no-show em clínica: 7 técnicas que funcionam",
      "category": "Gestão de clínica",
      "keywords": ["como reduzir falta de paciente", "no-show clínica"],
      "intent": "informational",
      "audience": "médico-dono interior 1-10 médicos"
    },
    {
      "slug": "whatsapp-business-clinica",
      "title": "WhatsApp Business pra clínica: o que você precisa saber em 2026",
      "category": "Gestão de clínica",
      "keywords": ["whatsapp business clínica", "agendamento whatsapp"],
      "intent": "informational",
      "audience": "médico-dono interior"
    }
    // ... 50 outros
  ]
}
```

### 2. System prompt da geração

```typescript
// /api/blog/generate.ts (resumo)
const systemPrompt = `
Você é editor de conteúdo da ServarX, empresa brasileira de IA conversacional
para clínicas médicas pequenas e médias no interior do Brasil.

VOZ DA MARCA — REGRAS NÃO-NEGOCIÁVEIS:
- Inspiração: Cimed + Flow Podcast + Nubank.
- Tom: consultor confiável que fala em português, não corporativês.
- PROIBIDO: "Apresentamos", "Soluções", "Excelência", "Robusto", "Disrupção",
  "Transformação digital", "Sinergia", "Escalável".
- Use "você" pra falar com leitor (não "doutor(a)").
- Sem jargão técnico: "agente" → "secretária digital", "integração" →
  "conexão", "dashboard" → "painel". Lista completa em CLAUDE.md > Bloco 5.5.

PÚBLICO: ${topic.audience}
TÍTULO ALVO: ${topic.title}
CATEGORIA: ${topic.category}
KEYWORDS PRIMÁRIAS: ${topic.keywords.join(', ')}
INTENT: ${topic.intent}

ESTRUTURA OBRIGATÓRIA (SEO + escaneabilidade):
1. H1 com keyword primária
2. Lead de 2-3 frases (problema do leitor)
3. 4-6 seções H2 com subtítulos descritivos
4. Listas numeradas ou bullets em pelo menos 2 seções
5. Citação direta entre aspas em pelo menos 1 seção (fonte externa real)
6. Section final "O que a ServarX faz por isso" — 1 parágrafo, NÃO vendedor,
   apresenta como solução natural pro problema
7. CTA final: link "Quer ver isso funcionando? Fale com a gente no WhatsApp"

EXTENSÃO: 800-1.200 palavras. Não inflar.

FORMATO DE SAÍDA: MDX puro com frontmatter:
---
title: "..."
slug: "..."
date: "${YYYY-MM-DD}"
category: "Gestão de clínica"
keywords: [...]
description: "Meta description 150-160 chars"
author: "Equipe ServarX"
---

# Título...

(corpo)

---

LIMITES:
- NÃO invente estatísticas. Se citar número, marque como [VERIFICAR: fonte] pro
  owner conferir antes de publicar.
- NÃO mencione concorrentes pelo nome (iClinic, Feegow etc.) sem autorização.
- NÃO escreva "fictício" ou "exemplo hipotético" — escreva como conselho real.
- Texto autoral, não traduzido. Idiomatic pt-BR.
`;
```

### 3. Endpoint que gera

```typescript
// /api/blog/generate.ts
import { generateText } from 'ai';
import { gateway } from '@ai-sdk/vercel';

export async function POST(req: Request) {
  // Auth: Vercel cron secret
  if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  // 1. Pegar próximo tópico da queue
  const queue = JSON.parse(await readFile('blog-queue.json'));
  const topic = queue.queue.shift();

  // 2. Gerar via Claude Sonnet 4.6 (Vercel AI Gateway)
  const { text } = await generateText({
    model: gateway('anthropic/claude-sonnet-4-6'),
    system: buildSystemPrompt(topic),
    prompt: 'Escreva o post completo em MDX, seguindo todas as regras.',
    maxOutputTokens: 4000,
  });

  // 3. Commit no GitHub via Octokit
  await commitToBranch({
    branch: `blog/auto-${topic.slug}`,
    file: `content/blog/${topic.slug}.mdx`,
    content: text,
    message: `chore(blog): rascunho automático "${topic.title}"`,
  });

  // 4. Abrir PR
  const pr = await openPullRequest({
    head: `blog/auto-${topic.slug}`,
    base: 'main',
    title: `📝 Rascunho: ${topic.title}`,
    body: `Gerado automaticamente. Revise antes de publicar.\n\nKeywords: ${topic.keywords.join(', ')}`,
    labels: ['blog-auto'],
  });

  // 5. Email pro owner
  await sendEmail({
    to: 'erickhenrique.rg@gmail.com',
    subject: `📝 Novo rascunho: ${topic.title}`,
    html: `
      <p>O rascunho da semana tá pronto.</p>
      <p><a href="${pr.html_url}">Revisar PR no GitHub</a></p>
      <p><a href="${pr.preview_url}">Ver preview</a></p>
      <p>Aprova merge quando quiser. Demora ~5min.</p>
    `,
  });

  // 6. Atualizar queue
  await writeFile('blog-queue.json', JSON.stringify(queue));

  return Response.json({ ok: true, slug: topic.slug });
}
```

### 4. Cron config (vercel.ts)

```typescript
// vercel.ts
import { type VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  crons: [
    { path: '/api/blog/generate', schedule: '0 11 * * 3' }, // Quarta 08:00 BRT
  ],
};
```

## Custos

| Item | Mensal |
|---|---|
| Vercel cron | R$ 0 (incluído no plano) |
| Vercel AI Gateway → Claude Sonnet 4.6 | ~R$ 1,50 (4 posts × ~3.000 tokens out) |
| GitHub API | R$ 0 (incluído) |
| Resend (4 emails/mês) | R$ 0 (free tier 3.000/mês) |
| **TOTAL** | **R$ 1,50/mês** |

## Mitigações de risco SEO

Google penaliza "AI slop". Defesas:

1. **Humans-in-the-loop obrigatório** — owner aprova antes de publicar.
   Nunca publica direto.
2. **Tom autoral via system prompt Cimed** — não soa "ChatGPT padrão".
3. **Limite 1/semana** — site não cresce em volume artificial.
4. **Mix com posts manuais** — 1 vez/mês owner escreve à mão (founder voice).
5. **Citações de fontes reais** — gerador inclui [VERIFICAR: fonte], owner
   confere e cita.
6. **Sem keyword stuffing** — system prompt proíbe densidade > 2%.
7. **Schema.org `Article`** com author = "Equipe ServarX" (transparência).
8. **Disclaimer transparente** no `/blog`: "Conteúdo desenvolvido pela equipe
   ServarX com apoio de IA. Revisado e aprovado por humanos antes de
   publicar." — Google valoriza transparência (E-E-A-T).

## Roadmap de implementação

| Fase | Quando | Tarefa |
|---|---|---|
| **Pré-launch** | Semana 1 do site | Definir 52 tópicos da queue; criar prompt; testar geração local 3x |
| **Launch** | Semana 2 do site | Implementar endpoint, cron, GitHub Octokit, Resend |
| **Soak** | Semana 3-4 | Owner revisa PRs primeiros, ajusta system prompt se necessário |
| **Estável** | Mês 2+ | Roda sozinho. Owner gasta 5-10min/semana revisando |

## Quando NÃO usar

- Se Google Search Console mostrar **drop de impressões** após 3 meses → pausar
  geração, escrever 100% manual por 1 mês, reavaliar.
- Se posts gerados consistentemente precisarem de **>30min de edição** —
  refinar system prompt ou abandonar.
- Se algum post gerar **complaint de leitor** ("isso parece IA") — pausar e
  refinar voz.
