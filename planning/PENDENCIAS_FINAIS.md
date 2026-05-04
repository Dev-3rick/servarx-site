# Pendências Finais — Antes / Durante / Depois do site ir ao ar

> 4 categorias por urgência. Bloqueadores em 🔴, importantes em 🟡, nice-to-have em 🔵.

---

## 🔴 BLOQUEIA primeira venda (resolver em até 30 dias do launch)

| # | Item | Quem resolve | Como |
|---|---|---|---|
| 1 | **Abrir MEI** ⏰ até domingo 2026-05-03 | Owner | Portal Empreendedor (mei.gov.br). 15min. R$ 81/mês. CNAE 6201-5/01 ou 6202-3/00. |
| 2 | **Lista de leads no Quadrilátero MG** via Gemini Deep Research | Owner | Roda prompt em [PROMPT_PESQUISA_LEADS.md](PROMPT_PESQUISA_LEADS.md). Output: CSV com 50-150 clínicas + dados de contato + score. |
| 3 | **Conta WhatsApp Business dedicada ServarX** | Owner | SIM pré-pago R$ 30 (Vivo Easy/TIM Pré) + WhatsApp Business gratuito. Ou ativar Z-API com número novo. |
| 4 | ~~Foto do fundador editada~~ ❌ **DESCARTADO** — site lança sem foto | — | Reverter quando owner quiser. Prompt salvo pra uso futuro. |
| 5 | **Decisão sobre Cal.com** (item 7.4) | Owner | Reavaliar após 2 semanas de uso real do site (volume de leads). |
| 6 | **Confirmar número WhatsApp do botão** (item 7.3 ambíguo) | Owner | Resposta A/B/C. |

---

## 🟡 BLOQUEIA lançamento do site (resolver durante construção da Fase 1)

| # | Item | Quem resolve | Quando |
|---|---|---|---|
| 7 | **Logo ServarX em SVG** | Eu | Dia 1 da Fase 1. Conceito: chevrons invertidos formando X. |
| 8 | **Tokens de design herdados do ServarClin** | Eu | Dia 1 da Fase 1. |
| 9 | **Conta Vercel + projeto novo + domínio servarx.com.br apontado** | Owner + Eu | Dia 1. Owner liga DNS na Hostinger pra Vercel; eu crio o projeto. |
| 10 | **Conta Resend** (3.000 emails/mês grátis) | Owner | Dia 2. Cria conta, eu configuro. |
| 11 | **Google Analytics 4 property** | Owner | Dia 2. Cria property; eu pego o measurement ID. |
| 12 | **Microsoft Clarity project** | Owner | Dia 2. Cria projeto; eu pego o ID. |
| 13 | **Meta Business Manager + Pixel** | Owner | Dia 2-3. Cria BM e Pixel; eu pego o Pixel ID. |
| 14 | **Google Ads conta + Conversion Tag** | Owner | Dia 2-3. Cria conta (sem rodar Ad), pega tag ID. |
| 15 | **Google Sheets pra leads** | Owner + Eu | Dia 3. Owner cria planilha; eu integro via Google Sheets API. |
| 16 | **Z-API webhook outbound** (form → WhatsApp owner) | Owner + Eu | Dia 3. Owner confirma número; eu integro. |
| 17 | **Política de Privacidade revisada e publicada** | Owner | Dia 4. Owner lê draft em [TEMPLATE_LEGAL.md](TEMPLATE_LEGAL.md), ajusta, eu publico. |
| 18 | **Termos de Uso revisados e publicados** | Owner | Dia 4. Idem. |

---

## 🔵 PODE fazer pós-launch (Fase 2 e além)

| # | Item | Quando | Por quê |
|---|---|---|---|
| 19 | Section "wow" scroll-driven (Lenis + GSAP) | Fase 2 (semana 2) | MVP pode lançar sem; a section é polish. |
| 20 | Mockup WhatsApp animado em Lottie | Fase 2 | Comprar Lottie pronto (R$ 50-200) ou contratar freelancer. |
| 21 | Calculadora interativa (lead magnet) | Fase 2 | 1 dia dev. Lança 1 semana após launch. |
| 22 | Checklist PDF (lead magnet) | Fase 2 | Owner escreve em 2h, eu monto layout em 1h. |
| 23 | Blog automatizado (Cron + AI Gateway) | Fase 2-3 | Plano em [PLANO_BLOG_AUTOMATIZADO.md](PLANO_BLOG_AUTOMATIZADO.md). |
| 24 | Landing pages geo-locais por cidade | Fase 3+ | Só após 1ª clínica em cada cidade. |
| 25 | Programa formal de indicação `/indicacao` | Após 3 clientes | Decisão de Bloco 7.5. |
| 26 | A/B testing de headlines (Vercel Toolbar) | Fase 3 | Precisa de baseline de tráfego primeiro. |
| 27 | Migrar pra HubSpot Free (CRM) | 20-30 leads | Quando Google Sheet não escalar mais. |
| 28 | Foto "em campo" (Prompt 2) | Quando tiver case real | Para `/casos/[cidade]/[clinica]`. |
| 29 | Vídeo institucional do fundador | Fase 3 | Celular + script de 60s. |
| 30 | OG image dinâmico via @vercel/og | Fase 2 | Deploy básico OK sem; melhora compartilhamento WhatsApp/social. |
| 31 | Schema.org `LocalBusiness` + Google Business Profile | Fase 2 | Importante pra SEO local — depende do CNPJ. |

---

## 🟣 Pesquisa contínua (nunca termina, mas guia evolução)

| # | Item | Cadência |
|---|---|---|
| 32 | **3 entrevistas reais com clínicas-Camila** (30min cada) | Próximas 2 semanas — destrava persona |
| 33 | **30 entrevistas curtas via WhatsApp** ("como descobriu seu sistema?") | Próxima 1 semana — destrava canais |
| 34 | **ROI numérico real do ServarClin** (no-show, horas liberadas) | Mensal — atualizar copy com dados reais conforme aparecem |
| 35 | **Validação da janela de mercado** (5 concorrentes + 3 entrevistas) | ✅ Já feito (relatórios Gemini) |
| 36 | **Refinamento da headline** com copywriter humano | Quando contratar copywriter (Fase 3+) |

---

## Pendências do briefing original (do Bloco 1.5 e seguintes)

Estas seguem pra refinamento contínuo, não bloqueiam:

- ⬜ Idioma exato em que "Servar" foi pesquisado → ✅ resolvido (latim *servare*)
- ⬜ Janela de mercado validada → ✅ resolvida (Gemini Análise Competitiva)
- ⬜ Vertical-âncora primeira → ✅ resolvida (centro médico multiespecialidade interior)
- ⬜ Canais de aquisição validados → 🟡 parcial (porta-a-porta + SEO local + indicação) — falta validar com entrevistas (#33)
- ⬜ Idade, faturamento, jornada Camila → ⬜ depende das entrevistas (#32)
- ⬜ Region específica MG (qual estado?) → ✅ resolvida (interior MG / Quadrilátero Ferrífero)
- ⬜ Cases reais → 🟡 plano "5 parceiros fundadores" como placeholder; cases reais aparecem após Camila

---

## Fluxo recomendado (ordem de execução)

```
SEMANA 1
├─ Owner: abre MEI (#1)
├─ Owner: edita foto (#4)
├─ Eu: Fase 1 do site começa (PLANO_FASE_1.md)
└─ Eu: home + /quem-somos + tokens + logo no ar

SEMANA 2
├─ Owner: monta lista 50-80 clínicas (#2)
├─ Owner: SIM dedicado WhatsApp (#3)
├─ Eu: /produtos + /produtos/servarclin + form contato + cookie banner
└─ Site no ar (servarx.com.br)

SEMANA 3
├─ Owner: 30 entrevistas WhatsApp (#33)
├─ Owner: 3 entrevistas Camila (#32)
├─ Owner: começa porta-a-porta (5 visitas/dia)
├─ Eu: Section "wow" (Fase 2 começa)
├─ Eu: Lead magnets (calculadora + checklist)
└─ Owner: revisa primeiros leads no Sheets

SEMANA 4-6
├─ Owner: 1ª clínica (Camila ou outra) fechada
├─ Owner: NF emitida via MEI
├─ Eu: case `/casos/[cidade]` da 1ª clínica
├─ Eu: blog automatizado vai ao ar (1 post/semana)
└─ Iterações contínuas
```
