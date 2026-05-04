# Resumo Executivo — Site ServarX

> **1 página** com tudo que ficou decidido após discovery em 10 blocos.
> Briefing completo em [BRIEFING.md](BRIEFING.md). Última atualização: 2026-04-29.

---

## Identidade

- **Empresa:** ServarX (do latim *servare* = preservar + X de tecnologia)
- **Produto-âncora:** ServarClin (primeira vertical = saúde)
- **Visão:** house of products tier 1 brasileira de IA aplicada a serviços
- **Missão (bruta):** mitigar as dores de atendimento
- **Pitch (gold):** *"a sua liberdade de poder focar no que faz de melhor."*
- **Anti-claims:** "**Não é só mais um SaaS. Não é só mais um atendente de IA.**"

### Valores não-negociáveis

1. Satisfação no atendimento ("podia demitir a atendente atual e o nível sobe")
2. Tier 1 sem desculpa
3. LGPD com segurança nível bancário (AES-256-GCM, RLS, audit log)
4. IA que executa, não só responde

### Voz da marca

**Cimed + Flow Podcast + Nubank, falando para um médico do interior de MG.**
Confiável • Sólido • Humano. Português puro, sem jargão técnico. "Você" no
site, "Doutor(a)" em contato direto. Anti-Bradesco.

---

## ICP (Camila)

- **Persona:** Camila — médica-dona, 5-6 médicos, centro multidisciplinar
- **Especialidades:** psicoterapia → cardiologia (full multidisciplinar)
- **Geografia:** **interior de Minas Gerais** (Quadrilátero Ferrífero — Barão de Cocais → João Monlevade → Itabira → Catas Altas → Sabará)
- **Tamanho:** 1-10 médicos (sweet spot 3-6)
- **Modelo:** mistura particular + convênios populares
- **Decisor:** o próprio médico-dono
- **Dor crítica:** *"perco cliente porque atendimento não dá conta. Mensagem à noite fica sem resposta. Agenda tá uma bagunça."*

---

## Posicionamento (validado por pesquisa de mercado)

🔥 **Blue ocean confirmado:** nenhum concorrente ocupa "centro médico
multidisciplinar de pequeno porte no interior". É **claim ownable**.

### Headline candidata

> **"A primeira IA conversacional construída para o Centro Médico do Interior. Agende todos os seus médicos e recepcione pacientes em áudio e texto, 24h por dia, sem pagar licenças extras por profissional."**

### Diferenciais (3 ownable)

1. **Memória familiar** — "Doutor, lembrei que a senhora marcou pro Lucas
   no mês passado." Vínculo de interior replicado.
2. **Triagem multidisciplinar dinâmica** — paciente relata dor → IA cruza
   especialidade certa, respeitando regras de convênio por médico.
3. **Sotaque local** — IA adapta tom/jargão regional (interior mineiro), não
   "Faria Lima padrão".

### Anti-claims contra concorrentes

- vs **iClinic / Feegow:** "Você paga por clínica, não por médico."
- vs **Secretária IA:** "Sua secretária não vai ser demitida. Vai ter superpoder."
- vs **Cloudia / Tivita:** "Não pagamos por paciente cadastrado."
- vs **iClinic suporte 22 dias:** "Suporte humano em 10min, ou o mês é por nossa conta."

---

## Pricing final

| Tier | Preço | Médicos | Mensagens IA | Destaque |
|---|---|---|---|---|
| **Automa** | R$ 349 | até 3 | 1.000 | Entrada |
| **Inteligência** ⭐ | R$ 599 | até 6 | 3.000 | "Mais Popular" |
| **Scale** | R$ 947 | até 10 | 7.000 | Premium |

- **Setup fee:** R$ 499 (Serviço de Inteligência de Integração e Conformidade) — isentável em fechamento "5 parceiros fundadores"
- **Garantia:** 30 dias com reembolso da mensalidade (setup fee não reembolsável)
- **Add-ons:** R$ 90 por 1.000 mensagens IA extras; R$ 80 por médico extra
- **Motion:** sales-led (porta-a-porta nas 5 primeiras clínicas no Quadrilátero MG)

---

## Site — sitemap, stack, CTAs

### Sitemap MVP

```
/                       Hero ServarX + Pitch + 5 Parceiros Fundadores + ServarClin
/quem-somos             História, Erick fundador (foto), valores, visão
/produtos               Vitrine (1 card ServarClin, futuras placeholder)
/produtos/servarclin    Landing dedicada + pricing + CTA WhatsApp
/calculadora            Lead magnet (quanto perde com WhatsApp lento)
/blog                   1 post/semana automatizado (categoria "Gestão de clínica")
/contato                Form (nome/telefone/cidade/médicos)
/privacidade /termos    Páginas legais
```

### Stack

- **Next.js 16 (App Router)** + TypeScript
- **Tailwind v4** (tokens herdados do ServarClin: cyan/teal)
- **Framer Motion** (micro-interações) + **Lenis** (smooth scroll) + **GSAP ScrollTrigger** (1 section "wow")
- **Lottie** (mockup WhatsApp animado)
- **MDX** (blog/cases sem CMS)
- **next-intl** — não no MVP (só pt-BR, decisão A7)

### CTAs

- **Botão WhatsApp flutuante** fixo bottom-right todas as páginas
- **Form de contato** (CTA primária dos heros e pricing)
- **Lead magnets:** Checklist + Calculadora (capturam email + telefone)

### Section "wow"

Scroll-driven storytelling: WhatsApp paciente → IA pensa (tools) → ação no
dashboard. Vende a tese de "IA que executa, não só responde".

---

## Operação técnica

| Categoria | Stack |
|---|---|
| **Hosting** | Vercel Free (MVP) → Pro quando tiver tráfego |
| **Email transacional** | Resend (3.000 emails/mês grátis) |
| **WhatsApp API** | Z-API (reaproveita) |
| **Analytics** | Vercel Analytics + GA4 + Microsoft Clarity (heatmaps) |
| **Pixels** | Meta Pixel + Google Ads Tag (desde dia 1, retargeting futuro) |
| **Cookie banner** | Componente próprio LGPD-compliant (Aceitar/Rejeitar) |
| **Anti-spam** | Honeypot + reCAPTCHA v3 + rate limit (Upstash Redis via Vercel Marketplace) |
| **Storage do form** | Google Sheets API (planilha vira CRM grátis) |
| **Performance** | Lighthouse 90+ obrigatório (CI bloqueia merge abaixo de 85) |
| **Blog** | Cron Vercel + Vercel AI Gateway (Claude Sonnet 4.6) → PR no GitHub → owner aprova → publica. Custo R$ 1,50/mês. |
| **Schema.org** | LocalBusiness + Organization + Article + FAQPage |
| **SEO** | next-sitemap auto, robots.txt allow all, OG dinâmico via @vercel/og |

---

## Marketing inicial (sem Ads)

- **Porta-a-porta** founder-led nas 5 primeiras clínicas (Camila + 4)
- **Lista alvo:** 50-80 clínicas multiespecialidade no Quadrilátero MG (montar via Google Maps + CNES)
- **SEO local:** rankear "sistema clínica WhatsApp [cidade]" pra cada cidade
- **Indicação local:** programa formal lançado quando tiver 3 clientes
- **Lead magnets:** checklist + calculadora (capturam email/telefone)
- **Blog:** 1 post/semana (3 auto-gerados + 1 founder voice/mês)

### Funil esperado

```
50-80 leads frios → 20 demos presenciais → 5 clínicas fechadas
Win rate: 25% (founder-led + presencial)
Ciclo: 7-21 dias por clínica
```

---

## Identidade visual

- **Logo ServarX:** chevrons cyan→teal do ServarClin invertidos formando X tipográfico (encaixa na última letra do nome)
- **Símbolo + wordmark** (flexibilidade favicon/header/email)
- **Foto fundador:** lifestyle (foto do casamento editada via Gemini Nano Banana — prompt em [PROMPT_FOTO_FUNDADOR.md](PROMPT_FOTO_FUNDADOR.md))
- **Imagens:** ilustrações vetoriais customizadas + abstratas geométricas (não foto stock)
- **Modo:** só claro (decisão owner)
- **Densidade:** equilibrada (Linear-style, não Stripe-spacious nem Bloomberg-denso)

---

## Top 3 próximos passos

1. **Owner abre MEI** (15-30 dias) — pendência crítica antes da 1ª clínica
2. **Owner monta lista de 50-80 clínicas no Quadrilátero MG** (Google Maps + CNES) — fonte do funil
3. **Implementação Fase 1** (eu — 3-4 dias) — repo, design tokens, home, /quem-somos, /produtos, contato, deploy. Plano em [PLANO_FASE_1.md](PLANO_FASE_1.md).

---

## Pendências críticas

Lista completa em [PENDENCIAS_FINAIS.md](PENDENCIAS_FINAIS.md). Top 3:

1. ⚠️ **Abrir MEI** antes de fechar 1ª clínica
2. ⚠️ **Foto do fundador editada** (você roda Gemini Nano Banana)
3. ⚠️ **Lista de 50-80 clínicas-alvo** (você monta)
