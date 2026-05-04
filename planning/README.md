# Site ServarX — Pasta de planejamento

> Toda a documentação de discovery, pesquisa de mercado, decisões e
> implementação do site institucional da empresa ServarX.

## 📂 O que tem aqui

| Arquivo | Pra quê serve | Quando ler |
|---|---|---|
| 📋 [BRIEFING.md](BRIEFING.md) | **Briefing completo** com 10 blocos de discovery + decisões de cada um | Antes de qualquer trabalho de copy ou implementação |
| 📊 [RESUMO_EXECUTIVO.md](RESUMO_EXECUTIVO.md) | **1 página** com tudo que ficou decidido | Pra refrescar memória sem ler 50 páginas |
| ✅ [PENDENCIAS_FINAIS.md](PENDENCIAS_FINAIS.md) | O que falta resolver, por urgência | Pra saber o que fazer ANTES de codar e ANTES de vender |
| 🛠️ [PLANO_FASE_1.md](PLANO_FASE_1.md) | Plano dia-a-dia dos primeiros 4 dias de implementação | Quando começar a construir |
| 📰 [PLANO_BLOG_AUTOMATIZADO.md](PLANO_BLOG_AUTOMATIZADO.md) | Arquitetura técnica do blog 1 post/semana via cron + AI | Fase 2 do site |
| 📸 [PROMPT_FOTO_FUNDADOR.md](PROMPT_FOTO_FUNDADOR.md) | Prompts pra editar foto do casamento via Gemini Nano Banana | Owner roda no Gemini quando puder |
| ⚖️ [TEMPLATE_LEGAL.md](TEMPLATE_LEGAL.md) | Drafts de Política de Privacidade, Termos de Uso, cookie banner, emails automáticos | Owner revisa antes do site ir ao ar |
| 🔍 [PROMPT_PESQUISA_CONCORRENTES.md](PROMPT_PESQUISA_CONCORRENTES.md) | Prompt já rodado no Gemini Deep Research → relatório em `Documentos ServarClin/` | ✅ Concluído |
| 💰 [PROMPT_PESQUISA_PRICING_E_TIERS.md](PROMPT_PESQUISA_PRICING_E_TIERS.md) | Prompt já rodado no Gemini → relatório em `Documentos ServarClin/` | ✅ Concluído |
| 🎯 [PROMPT_PESQUISA_LEADS.md](PROMPT_PESQUISA_LEADS.md) | Prompt pra Gemini levantar 50-150 clínicas-alvo no Quadrilátero MG com dados de contato + score | Owner roda quando puder |

## 🗺️ Roteiro de leitura sugerido

### Pra continuar o discovery em outra sessão Claude

1. Lê **README.md** (este arquivo) — 1 min
2. Lê **RESUMO_EXECUTIVO.md** — 5 min
3. Pula pra qualquer bloco específico em **BRIEFING.md** que precisar

### Pra começar a implementação

1. Lê **PENDENCIAS_FINAIS.md** — fecha o que estiver na 🔴 Categoria
2. Lê **PLANO_FASE_1.md** — Dia 0 (contas + DNS)
3. Aciona Claude pra começar Dia 1 do plano

### Pra revisar copy antes de publicar

1. Lê **BRIEFING.md** § Bloco 5 (voz da marca) — regra de ouro
2. Lê **BRIEFING.md** § 5.5 (glossário de tradução de jargão)
3. Lê **TEMPLATE_LEGAL.md** se for página legal

## 🎯 Status atual do projeto

**Discovery:** ✅ 100% completo (10 blocos respondidos)
**Pesquisa de mercado:** ✅ 2 relatórios Gemini concluídos
**Pricing definido:** ✅ R$ 349 / R$ 599 / R$ 947 + setup R$ 499
**Posicionamento:** ✅ "Centro Médico do Interior" (blue ocean)
**Stack técnica:** ✅ Definida (Next.js 16, Tailwind v4, Resend, GA4, Clarity, Z-API)
**Drafts legais:** ✅ Política e Termos prontos pra revisão
**Plano de implementação:** ✅ Fase 1 detalhada dia a dia

**Bloqueadores antes de começar:**
- ⏳ Owner abre MEI (até 30 dias do launch — não bloqueia site, bloqueia 1ª venda)
- ⏳ Owner edita foto do fundador via Gemini Nano Banana
- ⏳ Owner monta lista de 50-80 clínicas-alvo (Google Maps + CNES)
- ⏳ Owner cria contas: Vercel, Resend, GA4, Clarity, Meta BM, Google Sheets, SIM dedicado WhatsApp

**Pronto pra:**
- Começar Fase 1 (implementação) assim que owner concluir Dia 0 do PLANO_FASE_1.md

## 📞 Contato com o briefing

Owner pode pedir Claude (em qualquer sessão futura) para:

- "Atualiza o briefing com X" → Claude atualiza BRIEFING.md
- "Quais pendências críticas?" → Claude consulta PENDENCIAS_FINAIS.md
- "Inicia Fase 1 do site" → Claude lê PLANO_FASE_1.md e começa Dia 0
- "Refina copy do hero" → Claude segue BRIEFING.md § Blocos 4 e 5
