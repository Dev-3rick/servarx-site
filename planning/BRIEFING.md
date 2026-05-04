# Briefing de Marca — Site Institucional ServarX

> Documento de descoberta para alimentar copywriter, SEO e ferramentas de CRO.
> Construído em blocos via entrevista com o owner (Erick Henrique).
> Status por bloco: ✅ respondido / 🟡 parcial / ⬜ pendente.
>
> **Última atualização:** 2026-04-29
> **Owner:** Erick Henrique (fundador, solo dev)
> **Repo destino:** `servarx-site` (a criar — separado do `SaaS-ServarClin`)
> **Domínio:** `servarx.com.br`

---

## Decisões arquiteturais já travadas

| Tópico | Decisão |
|---|---|
| Repo | Separado do app (`servarx-site`, novo) |
| Subdomínios | `servarx.com.br` apex → site institucional. `app.servarx.com.br` → app. `servarclin.com.br` futuro com 301 pra `/produtos/servarclin`. |
| Sitemap MVP | `/`, `/quem-somos`, `/produtos`, `/produtos/servarclin`, `/contato`. **Sem** `/servicos`. `/blog` na Fase 3. |
| Stack | Next.js 16 + Tailwind v4 (tokens herdados do ServarClin) + Framer Motion + Lenis + GSAP ScrollTrigger + MDX |
| Hierarquia visual | ServarX = teal-800 protagonista (sóbrio/corporate). ServarClin = cyan-600 (energético/produto). |
| Section "wow" | 1 só. Scroll-driven storytelling: WhatsApp → IA pensa → ação no dashboard. Vende a tese de "IA que executa". |
| Tom autoral do site | (c) Híbrido — corporate na home, pessoal em `/quem-somos` |

---

## Bloco 1 — Identidade da ServarX 🟡

### 1.1 Origem do nome

**"Servar"** — derivado de "serviços" em algum idioma pesquisado.
**"X"** — remete a tecnologia.

> **Nota copywriter:** Boa narrativa de origem. Pode ser explorada em `/quem-somos`
> como "ServarX = Serviços + X-factor de tecnologia". Confirmar com owner se a
> pronúncia oficial é "Sér-vár-X" ou "Sér-var-Cs".

⬜ **Pendente:** confirmar idioma exato em que "Servar" foi pesquisado (latim? espanhol antigo? outro?) — pode virar elemento de storytelling.

### 1.2 Missão (uma frase)

> **"Mitigar as dores de atendimento."**

**Refinamentos sugeridos** (a validar com owner / copywriter):
- "Mitigar as dores de atendimento em serviços que dependem de relacionamento humano."
- "Eliminar a fricção do atendimento em negócios de serviço."
- "Atendimento sem dor — para o cliente final e para quem opera."

### 1.3 Visão (3-5 anos)

- **House of products** de software
- Foco: ser **empresa de sistema tier 1** (top-tier, premium, referência de qualidade)
- Múltiplos produtos sob o guarda-chuva ServarX (ServarClin é o primeiro)

> **Nota:** "tier 1" é vocabulário B2B forte. Funciona pra investidor e cliente
> empresarial, mas pode ser técnico demais pro dono de clínica pequena.
> Copywriter deve traduzir conforme audiência.

### 1.4 Por que essa empresa existe (storytelling do fundador)

- **Janela de mercado** percebida pelo owner
- Owner cursa **Engenharia da Computação** — base técnica que viabilizou o salto
- (Implícito da história anterior) Veio do v1 (ServarClin v1 com Sofia + n8n) — primeira validação de produto

⬜ **Pendente — pedir no Bloco 2:** que **janela específica** o owner viu? "Clínicas no Brasil sem ferramenta de IA acessível"? "Atendentes humanas caras e inconsistentes"? "WhatsApp sem automação séria pra serviços"? Quanto mais específico, melhor a narrativa.

### 1.5 Transformation arc (antes/depois)

⬜ **Sem resposta — owner ainda não definiu.**

**Hipóteses pra validar com owner ou copywriter:**

| Hipótese | Antes | Depois |
|---|---|---|
| **Operacional** | "donos de clínica perdiam pacientes por demora no WhatsApp" | "atendimento 24/7, agenda cheia sem secretária extra" |
| **Emocional** | "donos eram reféns da atendente humana" | "donos têm controle total, IA executa" |
| **Estratégico** | "clínicas pequenas não tinham acesso a IA premium" | "qualquer clínica usa IA tier 1 por preço de SaaS" |

> **Recomendação:** copywriter trabalha esses 3 ângulos em A/B test no hero.

### 1.6 Valores não-negociáveis

Owner forneceu **1 valor explícito**:
- **Satisfação no atendimento** — o produto deve ser tão bom que o cliente "pode demitir a atendente atual" e o nível de atendimento sobe (não desce).

🟡 **Faltam 2 valores.** Hipóteses derivadas da conversa anterior (a validar com owner):

| Valor | Evidência da conversa |
|---|---|
| **Tier 1 / qualidade premium** | Owner declarou visão "empresa tier 1" |
| **IA que executa, não só responde** | Owner enfatizou que ServarX.IA chama tools (agendar, cancelar) — não é chatbot decorativo |
| **Multi-tenancy real / LGPD-first** | CLAUDE.md tem "LGPD não-negociável" (PII cifrada, RLS) — convicção forte |
| **Pragmatismo solo dev** | Owner roda solo, orçamento apertado — valoriza "fazer o que importa, sem firula" |

### 1.7 Quanto da história aparece no site

✅ **Decisão: (c) Híbrido**
- Home: corporate, pouco menção ao fundador
- `/quem-somos`: pessoal — foto do owner, narrativa "Erick fundou em…", trajetória de Engenharia da Computação até produto

⬜ **Pendente:** owner tem foto profissional pra usar? Foto lifestyle (em ambiente de trabalho) ou foto institucional (fundo neutro)? — perguntar no Bloco 6 (identidade visual).

---

## Pendências do Bloco 1 (revisitar antes de fechar briefing)

1. ⬜ Idioma exato em que "Servar" foi pesquisado (storytelling)
2. ⬜ Janela de mercado específica que motivou criar a ServarX (Bloco 2)
3. ⬜ Transformation arc validado (antes/depois) — copywriter deve trabalhar
4. ⬜ Valores 2 e 3 (owner deu apenas 1 explícito)
5. ⬜ Foto do fundador disponível (Bloco 6)

---

---

## Bloco 2 — Produto ServarClin sob ótica de marketing 🟡

### 🔥 Insight estratégico (emergiu da entrevista)

Owner descreveu dores em **primeira pessoa** ("meus clientes", "minha agenda")
e o pitch é **agnóstico de vertical** ("liberdade de focar no que faz de melhor").

**Implicação para narrativa do site:**
- **ServarX (institucional)** posiciona como "atendimento sem dor para qualquer
  negócio de serviço" — clínicas, advocacia, petshops, estética, oficinas etc.
- **ServarClin (produto)** = primeira vertical, focada em clínicas. Demonstração
  da tese da ServarX.
- Quando o 2º produto chegar (ex: "ServarVet" pra petshops), o messaging escala
  sem refactor.

Isso **alinha** com a visão do owner ("house of products / tier 1") declarada no Bloco 1.

### 2.1 Pitch de elevador (BRUTO — vai pro copywriter refinar)

> **"A sua liberdade de poder focar no que você faz de melhor."**

**Por que funciona:**
- Foco em **transformação emocional**, não feature
- Cliente é o herói da frase ("você"), ServarX é o guia
- Aspiracional sem ser vazio
- StoryBrand-friendly (Donald Miller framework)

**Variações pra A/B test:**
- "Liberdade pra fazer o que você faz de melhor — a IA cuida do resto."
- "Recupere o tempo que o atendimento te roubou."
- "A IA atende. Você opera."

### 2.2 Os 3 problemas (palavras do cliente — copy gold)

| # | Dor literal do owner | Tradução pra hero |
|---|---|---|
| 1 | "perco muito cliente pois atendimento não dá conta" | **"Cliente que não recebe resposta vai pra concorrência."** |
| 2 | "cliente manda mensagem à noite depois do serviço e não tem quem responda" | **"Mensagem à noite não pode esperar até segunda."** |
| 3 | "minha agenda tá uma bagunça" | **"Agenda perdida = receita perdida."** |

> **Nota:** essas 3 dores são **vendáveis** porque são específicas e emocionais.
> Copywriter pode amplificar cada uma em uma section dedicada (formato "Antes da
> ServarX → Com a ServarX") na home.

### 2.3 Capacidades-âncora (4 — copywriter agrupa em 3 cards)

Owner listou 4. Agrupamento sugerido para landing `/produtos/servarclin`:

| Card | Engloba | Headline candidata |
|---|---|---|
| **Atende e agenda** | Atender + agendar via WhatsApp 24/7 | "Sua secretária digital, no WhatsApp, 24 horas por dia." |
| **Confirma e lembra** | Confirmação automática de consulta (anti no-show) | "Reduz faltas sem ninguém ter que ligar." |
| **Lembra de tudo do cliente** | Histórico do cliente + pós-venda | "Cada conversa fica salva. Pós-atendimento que parece personal." |

### 2.4 ROI / métrica numérica ⬜ PENDENTE

Owner: *"irei fazer uma pesquisa sobre o assunto e trabalhamos com isso."*

**Hipóteses iniciais (placeholders pra copywriter usar até a pesquisa)** — todas
testáveis em piloto:

| Métrica | Hipótese conservadora |
|---|---|
| Redução de no-show (faltas) | -30 a -50% (lembrete automático) |
| Tempo de resposta a paciente novo | de horas → segundos |
| Horas/semana liberadas da secretária | 8-15h |
| Receita recuperada por agenda otimizada | +10 a +20% |

> **Ação pendente:** owner roda pesquisa em 1-2 clínicas piloto e substitui esses
> números por reais antes do site ir ao ar.

### 2.5 Janela de mercado ⬜ PENDENTE

Owner: *"não tive esses insights de mercado, fui na confiança."*

**Honestidade aqui é OK em early-stage** — significa que o owner construiu por
intuição, não por análise de mercado. Mas a narrativa do site precisa de **algum
fundamento**. Hipóteses a confirmar com pesquisa rápida (1-2 dias) antes de ir
ao ar:

- **Janela 1 (acesso):** "Clínicas pequenas/médias no BR pagam R$ 2-3k/mês de
  secretária e ainda perdem pacientes por demora no WhatsApp."
- **Janela 2 (concorrência):** "SaaS clínicos existentes (iClinic, Doutore,
  Clinicorp, Conexa) priorizam prontuário/financeiro — IA conversacional não é
  primeira classe."
- **Janela 3 (tecnologia):** "WhatsApp Business API + LLMs ficaram acessíveis
  só nos últimos 18 meses — janela de produtização ainda aberta."

> **Ação pendente:** rodar análise rápida de 5 concorrentes diretos (Bloco 4) +
> validar custo médio de secretária com 3 donos de clínica antes de fechar copy.

### 2.6 Modelo de venda e pricing

| Item | Decisão |
|---|---|
| **Modelo** | Valores fixos por mês, **3 tiers** com pacotes diferentes |
| **Setup fee** | Sim — valor de compra de implementação (one-time) |
| **Trial** | 30 dias |
| **Motion** | **Sales-led** — cliente entra em contato primeiro (não self-service) |
| **Tier 1** | R$ 299/mês |
| **Tier 2** | R$ 599/mês |
| **Tier 3** | R$ 997/mês |

**Implicações para o site:**
- **CTA principal NÃO é "Começar grátis"** — é **"Agendar demonstração"** ou
  **"Falar com especialista"**.
- Página `/produtos/servarclin` precisa de **tabela de pricing** com
  diferenciação clara entre tiers (o quê cada um inclui).
- "30 dias de trial" deve ser mencionado, mas como **garantia pós-contratação**
  (não trial self-service de signup direto).
- Setup fee deve ser **mencionado com transparência** ("implementação assistida")
  — clientes B2B desconfiam de "preço escondido".

⬜ **Pendente — definir antes de ir ao site:**
- O que **especificamente** cada tier inclui (limites de mensagens? número de
  médicos? integrações?)
- Valor exato do setup fee
- O trial de 30 dias é **garantia de devolução** ou **acesso completo grátis
  primeiros 30 dias após assinar**?

### 2.7 O que ServarClin **não** faz (limites claros)

**Owner declarou:**
- ❌ Não fazemos **prontuário eletrônico** (anti-iClinic)

**Hipóteses adicionais derivadas do `Sistema v2 project` memory** (a validar):
- ❌ Não atende clínicas com mais de X médicos (MVP é "pequenas/médias" — definir X)
- ❌ Não funciona sem WhatsApp Business API conectado
- ❌ Não substitui CRM completo (foco é atendimento + agenda, não pipeline de vendas)

> **Por que isso importa:** evita lead errado (clínica grande de 50 médicos
> esperando ERP completo) e fortalece foco. Página `/produtos/servarclin` deve
> ter section "Para quem é (e para quem não é)".

---

## Pendências do Bloco 2

1. ⬜ ROI numérico real (owner roda pesquisa em piloto)
2. ⬜ Janela de mercado validada (análise de 5 concorrentes + 3 entrevistas)
3. ⬜ O que cada tier inclui (R$ 299 / 599 / 997)
4. ⬜ Valor do setup fee
5. ⬜ Mecânica do trial 30 dias (garantia ou trial puro?)
6. ⬜ Limite de tamanho de clínica (quantos médicos comporta?)

---

## Próximos blocos

- ✅ Bloco 1 — Identidade ServarX (com pendências)
- ✅ Bloco 2 — Produto ServarClin (com pendências)
- ✅ Bloco 3 — ICP (Ideal Customer Profile)
- ✅ Categoria A — 7 decisões diretas (A3 e A4 RESOLVIDOS pelo relatório de pricing)
- ✅ Bloco 4 — Concorrência (Gemini Deep Research processado)
- ✅ Bloco 5 — Voz da marca
- ✅ Bloco 6 — Identidade visual
- ✅ Bloco 7 — Conversão (com 2 pendências)
- ✅ Bloco 8 — Conteúdo & SEO
- ✅ Bloco 9 — Operação técnica
- ✅ Bloco 10 — Legal (com pendência crítica de CNPJ)

---

## Bloco 10 — Legal ✅

### 10.1 CNPJ ⚠️ PENDÊNCIA CRÍTICA

✅ **Owner: 🅒 — site lança no CPF.**

**Risco identificado:**

| Problema | Impacto |
|---|---|
| Confiança | Médico-dono interior desconfia de site sem CNPJ no footer |
| Nota fiscal | Cliente PJ não consegue deduzir IR sem NF de PJ |
| Tributação | PF paga até 27,5% IR; MEI paga R$ 81/mês fixo até R$ 81k/ano |
| Gateway de pagamento | Stripe/Asaas/Pagar.me não permitem PF receber recorrência B2B |

**Mitigação acordada:**
1. Lança site no CPF (footer transparente: "Erick Henrique [sobrenome] -
   CPF XXX.XXX.XXX-XX")
2. **Abre MEI em paralelo nos primeiros 15-30 dias** após lançamento
3. **ANTES de Camila assinar contrato:** atualiza footer pra CNPJ + emite NF

⚠️ **Pendência crítica:** abrir MEI antes de fechar 1ª clínica. Sem isso,
recorrência via cartão é inviável.

### 10.2 Nome fantasia

✅ **"ServarX"** (como aparece no site, marketing, comunicação).

### 10.3 Razão social — 3 sugestões pro owner escolher

Owner pediu sugestão. Como o registro será feito **futuramente** (após
abertura MEI/ME), proponho 3 opções:

| Tipo | Sugestão de razão social | Quando usa |
|---|---|---|
| **🅐 MEI (mais simples, recomendado pra começar)** | `ERICK HENRIQUE [SOBRENOME] [00.000.000/0001-00]` | Razão social MEI é **automaticamente** nome do CPF; nome fantasia "ServarX" é declarado separadamente |
| **🅑 ME / LTDA — opção corporate clean** | `SERVARX TECNOLOGIA LTDA` | Quando migrar pra ME (>R$ 81k/ano) |
| **🅒 ME / LTDA — opção setor-específica** | `SERVARX INTELIGENCIA APLICADA LTDA` | Mais escalável pra futuras verticais (não fica preso a "tecnologia") |

> **Recomendação solo dev:** começa MEI (🅐 — não escolhe razão social,
> é automática), e quando passar de R$ 81k/ano migra pra **🅒**
> ("Inteligência Aplicada" combina com a visão "house of products" da
> ServarX — vale pra ServarClin, futuro ServarVet, etc., sem amarrar à
> tecnologia).

**CNAE sugerido pra MEI:**
- **6201-5/01** — Desenvolvimento de programas de computador sob encomenda
- **6202-3/00** — Desenvolvimento e licenciamento de programas customizáveis

> Confira na tabela de CNAEs MEI permitidos pelo Sebrae antes de abrir
> (atualiza periodicamente).

### 10.4 Endereço fiscal

✅ **🅐 Casa em Barão de Cocais (residencial — MEI permite).**

> **Footer**: "ServarX — Barão de Cocais, MG" (sem rua/número, boa prática).
> **Google Business Profile**: cadastra com endereço aproximado da região
> (não precisa rua exata pra ranking local).

### 10.5 Política de Privacidade + Termos de Uso

✅ **🅐 — Eu monto draft Cimed-style baseado em template LGPD-compliant.**

> Drafts em [TEMPLATE_LEGAL.md](TEMPLATE_LEGAL.md).
> Owner revisa e ajusta antes de publicar. Quando tiver 5 clientes pagantes,
> contrata advogado especialista em LGPD pra revisão final.

### 10.6 DPO (Data Protection Officer)

✅ **🅐 — Owner (Erick) acumula DPO.**

**Implementação:**
- Email LGPD: `lgpd@servarx.com.br` (criar quando domínio ativar) →
  encaminha pra `erickhenrique.rg@gmail.com`
- Página `/privacidade` declara: *"Encarregado pelo tratamento de dados
  (DPO): Erick Henrique [sobrenome]. Contato: lgpd@servarx.com.br."*
- Quando atingir 100 clínicas-cliente, terceirizar DPO (R$ 200-800/mês).

---

## Bloco 9 — Operação técnica ✅

Todas as 5 perguntas aprovadas com a recomendação. Stack final:

### 9.1 Analytics (🅐 + 🅑 + 🅒)

| Ferramenta | Função | Custo | Cookie? |
|---|---|---|---|
| **Vercel Analytics** | Page views, web vitals macro | R$ 0 | Não |
| **Google Analytics 4** | Funil completo, eventos custom, integra com Ads | R$ 0 | Sim (consent obrigatório) |
| **Microsoft Clarity** | Heatmaps + session recordings | R$ 0 (ilimitado) | Sim (consent obrigatório) |

> **Eventos GA4 prioritários** (configurar dia 1):
> - `whatsapp_click` (botão flutuante)
> - `form_submit_contato`
> - `form_submit_lead_magnet`
> - `pricing_view`
> - `cta_click_demo`
> - `blog_read_complete` (scroll 90%+)

### 9.2 Pixels de remarketing (🅐 desde dia 1)

| Pixel | ID | Quando carregar |
|---|---|---|
| **Meta Pixel** (Facebook/Instagram) | a obter conta Business Manager | Após consent "marketing" |
| **Google Ads Tag** | a obter Google Ads | Após consent "marketing" |
| **Google Tag Manager** (opcional) | wrapper pra gerenciar pixels | Recomendado pra simplificar |

> **Audiências básicas pra criar dia 1** (mesmo sem rodar Ads):
> - "Visitou home"
> - "Visitou /produtos/servarclin"
> - "Visitou /produtos/servarclin#pricing"
> - "Iniciou form, não enviou"
> - "Baixou lead magnet" (intent alta)

### 9.3 Cookie banner LGPD (🅐 simples)

**Implementação:**
- Banner bottom da página, primeira visita
- 2 botões iguais em peso visual: **"Aceitar"** / **"Rejeitar"**
- Link "Saiba mais" → `/privacidade`
- Categorias: `necessários` (sempre on, sem cookie de tracking) + `analytics` + `marketing`
- LocalStorage `servarx_consent` = `"accepted"` / `"rejected"` / `null`
- Carregamento condicional de GA4/Clarity/Pixels via `<Script strategy="afterInteractive">` só se consent

**Texto do banner (Cimed-style, sem corporativês):**
> *"A gente usa cookies pra entender como o site funciona e melhorar sua
> experiência. Você pode aceitar tudo ou recusar — fica do mesmo jeito pra
> usar o site. [Saiba mais]"*
> [Aceitar] [Recusar]

### 9.4 Anti-spam (🅓 combo)

| Camada | Implementação | Bloqueia |
|---|---|---|
| **Honeypot** | Campo `<input name="website" hidden>` — se preenchido, descarta | Bots simples (~80%) |
| **reCAPTCHA v3** (Google, free) | Score < 0.5 = descarta | Bots avançados |
| **Rate limit** | Vercel KV (substituído por Upstash Redis no marketplace) — máx 3 envios/IP/hora | Spam manual |

### 9.5 Performance budget (🅐 Lighthouse 90+)

**Trigger CI:** GitHub Action roda Lighthouse em cada PR. Se score cair
abaixo de 85 em qualquer categoria, PR bloqueia merge.

**Otimizações padrão aplicadas:**
- `next/image` em 100% das imagens (auto WebP/AVIF)
- Inter via `next/font` com `display: swap` + preload
- Server Components default (zero JS no cliente onde não precisa)
- Lottie carregado via `dynamic({ ssr: false })` + Intersection Observer
- Vercel Edge Network (Anycast)
- Compressão Brotli automática
- HTTP/3 + Early Hints

### 9.6 Decisões técnicas confirmadas (não precisaram resposta)

| Item | Decisão |
|---|---|
| Hosting | Vercel Free (MVP) → Pro quando tiver tráfego |
| Email transacional | Resend (3.000 emails/mês grátis) |
| WhatsApp API | Z-API (reaproveita) |
| CMS | MDX no Git |
| Imagens | next/image + Vercel Blob |
| Storage do form | Google Sheets API |
| Schema.org | LocalBusiness + Organization + Article + FAQPage |
| Sitemap | next-sitemap auto, ping Google no deploy |
| Robots.txt | Allow all, sitemap referenciado |
| OG images | @vercel/og dinâmico por página |
| Favicon / PWA | Do logo ServarX (após SVG criado) |
| i18n | Não (pt-BR exclusivo, decisão A7) |
| A/B testing | Vercel Toolbar (Fase 2) |

---

## Bloco 8 — Conteúdo & SEO ✅

### 8.1 Keywords prioritárias (4)

✅ **🅒 + 🅓 + 🅖 + 🅗**

| # | Keyword | Tipo | Por quê |
|---|---|---|---|
| 🅒 | "agendamento automático whatsapp" | dor explícita | Médico-dono que já pesquisa solução |
| 🅓 | "chatbot whatsapp clínica" + "secretária digital clínica" | dor explícita | Variação direta, baixa concorrência |
| 🅖 | "sistema clínica [cidade]" — Itabira / João Monlevade / Barão de Cocais / Sabará / Catas Altas | geo-hyperlocal | **Zero competição**, alta conversão local |
| 🅗 | "como reduzir falta de paciente clínica" | topo de funil | Atrai médico explorando, alimenta blog |

**Implementação:**
- 🅒 + 🅓 → home + `/produtos/servarclin` + meta tags
- 🅖 → landing pages por cidade (após 1ª clínica em cada) + Schema.org
  `LocalBusiness` + Google Business Profile da ServarX em Barão de Cocais
- 🅗 → blog (categoria "Gestão de clínica")

### 8.2 Landing pages geo-locais

✅ **🅑 (implícito)** — após fechar 1ª clínica em cada cidade.

> Footer simples no MVP: "Atendemos centros médicos em todo o interior de
> Minas Gerais." Quando fechar Camila + 1, criar `/clinicas/[cidade]` com
> case real + CTA.

### 8.3 Blog — frequência 🔥 AUTOMATIZADO

✅ **🅒 1 post/semana, automatizado.**

> Owner perguntou se eu consigo automatizar. **Sim, com humans-in-the-loop**
> (você revisa 10min antes de publicar, garante qualidade e proteção SEO).
>
> Plano técnico detalhado em
> [PLANO_BLOG_AUTOMATIZADO.md](PLANO_BLOG_AUTOMATIZADO.md).

**Resumo da arquitetura:**

```
Cron Vercel (toda quarta 8h) → Vercel AI Gateway (Claude Sonnet 4.6)
  → Gera draft de 800-1.200 palavras em MDX usando voz Cimed
  → Salva como branch `blog/automated-{date}` no GitHub
  → Cria PR automático com preview
  → Email pra você com link de revisão
  → Você abre celular, revisa 5-10min, edita se quiser, merge → publica
  → Vercel deploy automático
```

**Custo:** ~R$ 1,50/mês (1 chamada Claude/semana, ~3.000 tokens out).

**Risco SEO mitigado:**
- Tom Cimed (voz da marca embutida no system prompt)
- Owner revisa antes de publicar (não é AI puro)
- Citações de fontes externas (Google reconhece como autoritativo)
- Schema.org `Article` + author = "Equipe ServarX"
- Limite 1/semana (não inflar artificialmente)

**Mix mensal sugerido:**
- 3 posts auto-gerados (curtos, técnicos, SEO-driven)
- 1 post "founder voice" — você escreve à mão sobre lições da semana,
  decisões, bastidores

### 8.4 Categoria do blog (única)

✅ **🅐 Gestão de clínica.**

**Subtemas pra alimentar o gerador automático:**
- "Como organizar agenda médica multidisciplinar"
- "Reduzir no-show: 7 técnicas que funcionam"
- "Marketing local pra clínica do interior"
- "WhatsApp Business pra clínica: o que você precisa saber"
- "LGPD pra clínica: guia prático pro médico-dono"
- "Quanto custa uma secretária vs uma IA: cálculo real"
- "Triagem médica via WhatsApp: até onde a IA pode ir"
- "Convênio vs particular: como organizar o financeiro"
- "Como fidelizar paciente sem virar invasivo"
- "Métricas que todo dono de clínica deveria acompanhar"
- (lista completa no PLANO_BLOG_AUTOMATIZADO.md — 52 ideias = 1 ano)

### 8.5 Lead magnets (2 prontos no lançamento)

✅ **🅑 + 🅒**

#### Checklist "10 erros que sua clínica comete no WhatsApp"

- 1-2 páginas, PDF baixável
- Captura: nome, email, número de médicos
- Tempo de produção: 2h (você escreve, eu monto layout)
- **Dispara funil:** após download, série de 3 emails (1 cada 3 dias) com
  conteúdo extra + convite pra demo

#### Calculadora "Quanto sua clínica perde com WhatsApp lento"

- Página interativa (`/calculadora`)
- Input: número de pacientes/dia, ticket médio, taxa de no-show estimada
- Output: "Sua clínica perde R$ X/mês em pacientes que não respondem"
- Captura: telefone + WhatsApp pra "receber relatório completo"
- Tempo: 1 dia de dev (eu faço)

> **Os dois lead magnets aparecem em pop-up de exit-intent + section
> dedicada no blog.**

### 8.6 Cases / depoimentos

✅ **🅓 sem cases no MVP — espera Camila.**

**Estratégia placeholder:**
- Hero secundário na home: section "**Os 5 parceiros fundadores ServarX em
  Minas Gerais**" com 5 cards apagados ("Em breve") + 1 CTA grande
  **"Quer ser um dos 5?"** → form de contato com flag `parceiro-fundador`
  pra você priorizar
- Quando fechar Camila → primeiro card vira foto + nome + cidade + quote
- Cada novo cliente preenche o próximo slot
- Quando 5 estiverem preenchidos, vira página `/parceiros-fundadores` e o
  hero da home muda pra outra section

> **Truque psicológico:** scarcity ("só 5 parceiros fundadores") +
> exclusividade ("ser fundador") aumenta conversão MUITO mais que "depoimento
> genérico de cliente". Cimed-style.

---

## Bloco 7 — Conversão (meta do site) 🟡

### 7.1 CTA principal

✅ **(d) Mistura — WhatsApp flutuante + form de contato na home.**

**Implementação concreta:**

| Componente | Comportamento |
|---|---|
| **Botão WhatsApp flutuante** | Fixo bottom-right em todas as páginas. Verde WhatsApp oficial. Ícone + label "Falar agora" no desktop, só ícone no mobile. Clica → abre `wa.me/55XXXXXXXXXXX` com mensagem pré-preenchida ("Olá, vim do site da ServarX e quero saber mais sobre o ServarClin.") |
| **Form de contato (CTA dos heros e pricing)** | Campos: nome, telefone, cidade, número de médicos da clínica, mensagem opcional. Submit → email + WhatsApp + planilha (ver 7.2). |
| **CTA primário em botões** | "Falar com um especialista" (form) ou "Ver demonstração" (idem). Não "Cadastre-se". |
| **CTA secundário** | "Falar no WhatsApp" — link direto. Mais agressivo na seção de pricing. |

> **Implicação de design:** o site tem **2 CTAs concorrentes** mas com pesos
> claros — botão flutuante é "estou pronto", form é "tô pesquisando".

### 7.2 Destino dos leads

✅ **(e) Combinação tripla — email + WhatsApp + planilha.**

**Arquitetura técnica (Vercel-native + grátis):**

```
Form HTML → Server Action Next.js → 3 destinos em paralelo:
├─ Email: Resend (3.000 emails/mês grátis) → seu Gmail
├─ WhatsApp: Z-API → mensagem automática pro seu número:
│  "Lead: {nome} ({telefone}) — Cidade: {cidade} | {mensagem}"
└─ Planilha: Google Sheets API → linha nova com timestamp
```

**Vantagens:**
- Você recebe lead **imediatamente** no celular (notificação WhatsApp)
- Email serve como log/arquivo
- Planilha vira **CRM grátis** — colunas: data, nome, fone, cidade, fonte
  (ad/orgânico/indicação), status (novo / demo agendada / fechado /
  perdido), próximo passo, observações
- Quando atingir 20-30 leads, migra pra HubSpot Free (importa CSV da planilha)

**Custo:** R$ 0/mês até 3.000 leads/mês.

### 7.3 Botão WhatsApp — número de quem? ⬜ PENDENTE (ambíguo)

Owner respondeu "(e) Combinação..." — mas as opções da pergunta eram (a), (b), (c). **Resposta não bateu com as opções.**

Reapresentando para confirmar:

- **(a)** Seu número pessoal (mesmo que recebe paciente da clínica-piloto)
- **(b) RECOMENDADO** Número novo dedicado à ServarX (SIM pré-pago R$ 30, separação limpa)
- **(c)** Z-API atual usado **só** pra ServarX por enquanto (separa quando começar piloto)

> **Ação requerida:** owner confirmar A, B ou C.

### 7.4 Cal.com / agendamento self-service ⏸️ AVALIAR DEPOIS

Owner: *"avaliar."*

**Decisão diferida.** Adoto enquanto isso a versão **sem Cal.com** (botão
WhatsApp + form). Cal.com é fácil de adicionar depois — leva 30min na Fase 2
do site. Não bloqueia nada agora.

> **Trigger pra reavaliar:** quando atingir 5+ leads/dia → compensa
> automatizar agendamento via Cal.com pra você não virar gargalo de
> "agendar a primeira reunião".

### 7.5 Programa de indicação

✅ **(a) Lançar quando tiver 3 clientes** — sem programa formal no MVP.

**No MVP**, mencionar de leve no footer:

> *"Conhece um centro médico que precisa? Indique e ganhe."* → link
> `/indicacao` que vai pra um form simples ("nome da clínica que você
> indica + seu nome + seu WhatsApp").

**Quando atingir 3 clientes**, lançar `/indicacao` formal:

- **Indicador ganha:** 1 mês grátis na própria mensalidade quando indicada fechar
- **Indicada ganha:** setup fee de R$ 499 isento
- **Anti-fraude:** bonificação só após indicada completar 30 dias pagantes

---

## Bloco 4 — Concorrência ✅ (Gemini Deep Research processado)

> **Fontes**: [Análise Competitiva SaaS Clínico Brasil.docx](../../Documentos%20ServarClin/Análise%20Competitiva%20SaaS%20Clínico%20Brasil.docx) e [Estratégia de Pricing SaaS Clínico Brasil.docx](../../Documentos%20ServarClin/Estratégia%20de%20Pricing%20SaaS%20Clínico%20Brasil.docx).
> Síntese acionável abaixo. Documentos completos seguem na pasta `Documentos ServarClin/`.

### 4.1 Síntese executiva — 5 takeaways acionáveis

1. **🔥 "Vácuo do Interior Multidisciplinar" CONFIRMADO como blue ocean.**
   Nenhum concorrente ocupa explicitamente o claim "centro médico
   multidisciplinar de pequeno porte no interior". Doctoralia foca centros
   urbanos, Clinicorp foca alto-ticket estética, Feegow foca governance
   corporativa. **Posicionamento ownable da ServarClin.**

2. **Pricing flat-fee é diferencial estrutural.** iClinic/Feegow/Doutore
   cobram **por médico** — para Camila (5-6 médicos), o custo no Feegow Plus
   atinge R$ 1.000-2.000/mês. ServarClin Tier 3 a R$ 947 (flat) é
   **40-60% mais barato** sem perder atendimento.

3. **Concorrentes diretos em IA conversacional WhatsApp:**
   - **Secretária IA** (usesecretariaia.com): R$ 297-897, MAS limita 50
     agendamentos/mês no plano de entrada. Posicionamento "demita sua secretária".
   - **Cloudia** (cloudia.com.br): R$ 449-1.039, mais legacy, fluxo
     determinístico tentando virar generativo.
   - **Tivita**: agentes "Júlia" e "Tais", avançado, MAS pivotou pra
     ecossistema "tudo-em-um" (concorre direto com iClinic agora).

4. **3 dores estruturais dos concorrentes** = munição de marketing:
   - **Suporte displicente:** iClinic com 5-22 dias de resposta a chamados.
   - **Dark patterns no cancelamento:** Clinicorp com cobranças após churn,
     ameaças de negativação.
   - **Falsas promessas de integração:** APIs cobradas à parte, prazos longos.
   → ServarClin promete o oposto: **suporte WhatsApp humano em 10min, cancelamento 1-clique, integrações nativas Google Agenda**.

5. **Headline recomendada pelo Gemini (refinar com copywriter):**
   > **"A primeira IA conversacional construída para o Centro Médico do
   > Interior. Agende todos os seus médicos e recepcione pacientes em áudio
   > e texto, 24h por dia, sem pagar licenças extras por profissional."**

### 4.2 Matriz comparativa (concorrentes mais relevantes pra ServarClin)

| Concorrente | Categoria | Tier 1 | Tier 3 | Setup | IA real? | Eixo principal |
|---|---|---|---|---|---|---|
| **iClinic** (Afya) | Generalista | R$ 99/médico | R$ 299/médico | Isento | ❌ Só lembrete passivo | Per-seat + features |
| **Feegow** | Generalista | R$ 129/médico | R$ 249/médico | Variável | ❌ Só Noa Notes (escuta clínica) | Per-seat + financeiro |
| **Doctoralia Pro** | Generalista | R$ 429/clínica | R$ 679/clínica | Variável | ❌ Notificações passivas | Flat + visibilidade marketplace |
| **Doutore** | Generalista | R$ 79/médico | R$ 179/médico | Isento | ❌ Não | Per-seat + suporte |
| **Clinicorp** | Vertical odonto/estética | R$ 149,90 | R$ 369,90 | R$ 149-299 | ⚠️ Combos IA recém-lançados | Features + setup |
| **Simples Dental** | Vertical odonto | R$ 149,90 | R$ 349,90 | Isento | ❌ Só extensão Web | Funcionalidades |
| **Trinks** (estética) | Vertical beleza | R$ 76 | Sob consulta | Isento | ❌ (Lucy.IA add-on) | Banded users |
| **Lucy.IA** (Trinks) | Vertical IA estética | R$ 386 | R$ 616 | Variável | ✅ Para fluxos beleza | Add-on Trinks |
| **🔥 Secretária IA** | **IA WhatsApp clínico** | R$ 297 (50 agend) | R$ 897 | Variável | ✅ LLM anti-alucinação | Volume agendamentos |
| **🔥 Cloudia** | **IA WhatsApp clínico** | R$ 449,90 (200 pcts) | R$ 1.039,90 (1200 pcts) | R$ 700 | ⚠️ Híbrido legacy | Volume pacientes |
| **🔥 Tivita** | **IA WhatsApp clínico** | Sob consulta (50 pcts) | Sob consulta (10k) | n/d | ✅ Agentes Júlia/Tais | Volume pacientes |
| **Botconversa** | Atendimento horizontal | R$ 199 | R$ 299 | Isento | ⚠️ ChatGPT add-on | Volume mensagens |
| **Take Blip** | Enterprise | US$ 500 | Customizado | Alto | ✅ Customizado | Enterprise |
| **🇺🇸 BotMD** | Internacional referência | US$ 20/usuário | Customizado | n/d | ✅ Workspaces | Per-user |
| **🇺🇸 Klara** | Internacional referência | US$ 45 | US$ 94 | Customizado | ✅ Por créditos | Mensagens |

### 4.3 Features de paridade vs diferenciais ownable

#### 3 features de **paridade obrigatória** (tabela mínima)

1. **Sincronização bidirecional Google Agenda** — sem double-booking, em
   tempo real.
2. **Lembretes automáticos 24h e 2h antes** — confirmação ou remarcação no
   próprio fluxo do WhatsApp.
3. **Processamento multimídia inbound** — interpretar áudios (NLP) e ler
   imagens básicas (foto da carteirinha do convênio).

#### 3 diferenciais **ownable** (onde ninguém foca)

1. **Memória de longo prazo + contexto familiar** — "Doutor, lembrei que a
   senhora marcou para o Lucas no mês passado." No interior, secretária
   conhece as famílias. IA precisa replicar esse vínculo.
2. **Triagem multidisciplinar dinâmica** — paciente relata dor → IA cruza com
   especialidade certa disponível, respeitando regras de convênio por médico.
3. **Identidade linguística hiper-localizada** — IA fala "tipo do interior
   mineiro", não "tipo paulistano da Faria Lima". Customização no-code do
   tom/sotaque/jargão regional.

### 4.4 Anti-claims (munição direta)

Posicionamento contra cada concorrente:

| Vs concorrente | Anti-claim |
|---|---|
| **iClinic / Feegow / Doutore** | "Você paga por clínica, não por médico. Sua agenda escala sem inflar a fatura." |
| **Secretária IA** | "Sua secretária não vai ser demitida. Ela vai ter superpoder." (anti-substituição) |
| **Cloudia / Tivita** | "Não pagamos por paciente cadastrado. Quanto mais gente, melhor." |
| **iClinic suporte (22 dias)** | "Suporte humano via WhatsApp em até 10 minutos, ou seu mês é por nossa conta." |
| **Clinicorp dark patterns** | "Cancelamento em 1 clique. Sem fidelidade, sem boleto-fantasma." |
| **Bots de FAQ "Digite 1 para…"** | "Seu paciente fala. Nossa IA entende. Sem 'digite 1 para'." |

### 4.5 ICP confirmado pela pesquisa

A análise valida o ICP do Bloco 3:

- **Centros médicos multidisciplinares** = blue ocean (gap de mercado).
- **Interior** = região onde concorrentes não fazem outbound.
- **5-10 médicos** = sweet spot onde flat-fee tier 2/3 ganha vs per-seat dos
  generalistas.
- **Anti-vertical odonto/estética** (oceano vermelho).
- **Psicologia** também é blue ocean adjacente — vertical secundária quando
  ServarX tiver tração.

### 4.6 Canais de aquisição validados

Para owner sem orçamento de Ads, o relatório confirma:

| Canal | Veredito |
|---|---|
| **Google Ads** | Concorrentes líderes usam pesado. ServarX **NÃO** usa no MVP (sem orçamento). |
| **SEO de fundo de funil** | "Sistema clínica WhatsApp" / "Agendamento automático WhatsApp" → médica busca quando dor é insuportável. **Caminho da ServarClin**. |
| **SEO de topo de funil** | "Como atrair pacientes para clínica particular" → e-books, blog. **Fase 3 (blog)**. |
| **Social proof em vídeo (Instagram)** | Depoimentos de médicos. **Faz sentido quando tiver Camila fechada**. |
| **Indicação local + porta a porta** | **Caminho prioritário** das primeiras 5 clínicas (Quadrilátero MG). |

### 4.7 Funil para as 5 primeiras clínicas (matemática)

Com win rate **otimista** de 25% (founder-led, presencial, demo no celular):

```
50-80 leads quentes (lista) → 20 demos completas → 5 clientes
Ciclo: 7-21 dias por clínica (founder-led porta-a-porta)
CAC sustentável: R$ 500-1.200 (vc tá próximo de R$ 0 — só seu tempo)
```

**Ação concreta para owner:** montar lista de **50-80 clínicas
multidisciplinares** no raio Barão de Cocais → João Monlevade → Itabira →
Catas Altas → Sabará. Fontes: Google Maps + CNES (cadastro nacional) +
indicação local.

---

## Resoluções de A3 e A4 (com base no relatório)

### A3 — Estrutura final dos tiers ✅

> **Adotada exatamente como recomendada pelo Gemini Pricing Strategy.**

| Atributo | **ServarClin Automa** | **ServarClin Inteligência** | **ServarClin Scale** |
|---|---|---|---|
| **Preço mensal** | **R$ 349** | **R$ 599** | **R$ 947** |
| Delta % | — | +71% | +58% |
| Público | Clínicas pequenas / iniciais | Clínicas em crescimento | Centros consolidados |
| **Médicos** | até 3 | até 6 | até 10 |
| **Mensagens IA/mês** | 1.000 | 3.000 | 7.000 |
| WhatsApp 24h ✅ | ✅ | ✅ | ✅ |
| Confirmação/cancelamento ✅ | ✅ | ✅ | ✅ |
| Histórico paciente ✅ | ✅ | ✅ | ✅ |
| Cifragem LGPD ✅ | ✅ | ✅ | ✅ |
| **Reagendamento ativo** | — | ✅ | ✅ |
| **Relatório de resgate** | — | ✅ | ✅ |
| **Campanhas pós-consulta** | — | ✅ | ✅ |
| **Suporte VIP WhatsApp** | — | — | ✅ |
| **Fine-tuning clínico** | — | — | ✅ |
| **Integração custom legado** | — | — | ✅ |

#### Mudanças vs. proposta original do owner

- **R$ 299 → R$ 349** — delta de 100% pro Tier 2 era abusivo. 71% é mercado-padrão.
- **R$ 997 → R$ 947** — foge da ancoragem de "infoproduto" (R$ 997 é cara de
  Hotmart). R$ 947 soa B2B sério.

#### Add-ons (proteção de margem)

- **Pacote Volume**: R$ 90 por lote adicional de 1.000 interações IA (quando
  cliente excede o limite do tier).
- **Cadeira Extra**: R$ 80 por médico adicional além do limite do tier (não
  inclui mensagens extras — só registra o profissional).

#### Tier destacado na pricing page

✅ **Tier 2 (Inteligência, R$ 599)** com selo "**Mais Popular**" e borda
destacada. Decoy effect: Tier 3 (R$ 947) ancora pra cima, fazendo Tier 2
parecer racional.

### A4 — Setup fee ✅

✅ **R$ 499 fixo** (independente do tier).

#### Narrativa comercial obrigatória

> *"A tarifa de R$ 499 refere-se ao Serviço de Inteligência de Integração e
> Conformidade. Nossa engenharia treina a IA para assimilar as terminologias
> específicas, as regras de agenda restritas de cada um dos seus
> especialistas, lida com o processo de aprovação da sua clínica na API
> Oficial do WhatsApp e configura a criptografia exigida pela LGPD. Não é uma
> taxa: é a alocação de engenheiros mapeando o seu negócio para garantir que
> a IA não falhe na triagem de pacientes reais."*

#### Tática de fechamento (founder-led porta-a-porta)

> *"O custo padrão para mapearmos a IA pros fluxos da sua clínica é
> **R$ 499**. Mas estamos selecionando **5 parceiros fundadores** em
> [Itabira / João Monlevade / etc.], e estou autorizado a **isentar 100% da
> implantação** se fecharmos a parceria ainda hoje."*

→ Cria **escassez baseada em tempo + território** + protege MRR (não dá
desconto na mensalidade — só zera o setup, que é one-time).

#### Importante: setup fee NÃO é reembolsável

Mesmo na garantia 30 dias, **só a mensalidade é devolvida**. Setup fee é
classificado contratualmente como "serviço técnico já prestado e
irreversível". Defesa contra adversarial churn (cliente que assina 29 dias e
pede tudo de volta).

---

## Bloco 6 — Identidade visual ✅

### 6.1 Logo da ServarX

✅ **(c) Variação dos chevrons do ServarClin** — duas setas invertidas
formando **X**, encaixada na **última letra do nome ServarX**.

> **Conceito sólido.** O X tipográfico vira o símbolo. Mantém família visual
> com ServarClin (chevrons cyan→teal já existentes), e o "X" reforça a
> origem do nome (X de tecnologia, X-factor).
>
> **Próximo passo**: criar SVG do logo ServarX seguindo essa premissa.
> Faço isso quando começar a Fase 1 do site (após fechar discovery).
> Pré-visualização ASCII do conceito:
>
> ```
> ServarX     →    Serva┌─┐
>                       └─┘  ← duas setas invertidas formando X
>                       (substitui a letra X final)
> ```

### 6.2 Estilo do logo

✅ **(a) Símbolo + nome (wordmark)** — flexibilidade máxima:
- **Logo completo** (símbolo + "ServarX") → header, hero, footer
- **Símbolo isolado** (X com chevrons) → favicon, PWA, OG image, app
- **Wordmark isolado** ("ServarX" com fonte custom) → email signature,
  documentos

### 6.3 Foto do fundador 🔄 REVISADO 2026-04-29

❌ **Owner mudou de ideia: site lança SEM foto do fundador.**

**Implicações para o site:**
- `/quem-somos` hero sem foto — substituir por **ilustração geométrica + tipografia forte** (estilo Linear/Stripe). Texto da história ganha destaque.
- Footer — só texto: "Erick Henrique [sobrenome], fundador". Link LinkedIn.
- Hero secundário "founder voice" da home — quote entre aspas grandes + nome + título "Fundador, ServarX". Sem foto.

**Reverter quando?**
- Owner retomar quando estiver confortável com foto editada
- Ou quando contratar fotógrafo profissional (R$ 200-500 sessão local em BH)
- Prompt continua disponível em [PROMPT_FOTO_FUNDADOR.md](PROMPT_FOTO_FUNDADOR.md) pra uso futuro

### 6.4 Estilo das imagens secundárias

✅ **(c) Ilustrações vetoriais customizadas + (d) Ilustrações abstratas
geométricas.**

> Combinação **Cimed-friendly**: marca brasileira séria que usa muita
> ilustração custom. Sem foto de stock. Foto real apenas em depoimentos/cases.

**Diretrizes:**
- Paleta restrita aos tokens do ServarX (teal-800 protagonista, cyan-400 accent)
- Estilo geométrico-orgânico, formas simples
- Inspiração: Stripe (geometria abstrata), Linear (formas suaves), Cimed
  (ilustrações vetoriais com personagens leves)
- **Evitar:** ilustração tipo Mailchimp (mascote), tipo Notion (estilo
  cartoon), tipo iClinic (ícones flat genéricos)

> **Nota:** ilustrações customizadas custam tempo/dinheiro. Estratégia solo
> dev: começar com **3-4 ilustrações abstratas** simples (figura geométrica
> + cor) usadas repetidamente em hero/sections. Quando houver budget,
> contratar ilustrador.

### 6.5 Mockups do produto

✅ **(d) Animação** — Lottie/After Effects mostrando IA agendando.

> **Section "wow" do site**: mockup de WhatsApp animado mostrando:
> 1. Paciente envia: *"Doutor, posso remarcar pra terça?"*
> 2. ServarX.IA "pensa" (ícone de tools/ações sendo executadas)
> 3. ServarX.IA responde: *"Posso, doutora Camila. Tenho terça às 14h ou
>    quinta às 9h. Qual prefere?"*
> 4. Agenda do dashboard atualiza em tempo real (mostrar à direita)

**Stack técnica:**
- **Lottie** + **lottie-react** ou **dotlottie-player** (mais leve que
  Framer Motion para animações complexas)
- Arquivo `.lottie` exportado de **Rive** ou **After Effects + Bodymovin**
- Trigger via **GSAP ScrollTrigger** (a section pinada que estávamos
  planejando)

**Ação para Fase 2 do site:** owner pode comprar Lottie pronto na
LottieFiles (R$ 50-200) e adaptar, ou contratar freelancer (R$ 500-1.500)
para animação custom.

### 6.6 Densidade visual

✅ **(c) Equilibrada** — espaço respira mas tem substância.

> **Diretriz prática:** sections de hero/transformation = generosas (Stripe-like).
> Sections de pricing/features = informativas mas escaneáveis (Linear-like).
> Footer = denso mas organizado.

### 6.7 Modo escuro / claro

✅ **(a) Só claro.**

> **Decisão diferente da minha recomendação.** Owner escolheu (a). Bate com:
> - Médico-dono interior MG não usa dark mode
> - Cimed (referência) é light, sempre
> - Solo dev — manter um único tema é mais simples
>
> **Mas atenção:** posso ainda usar **`--gradient-hero-glow`** (cyan + teal
> sobre fundo claro) pra dar impacto visual no hero sem precisar dark mode.
> Section "wow" pode ter background levemente mais escuro (cyan-50 ou
> teal-50) sem virar dark mode completo.

---

## Bloco 5 — Voz da marca ✅

### 🔥 Síntese da voz (a regra de ouro)

> **"Cimed + Flow Podcast + Nubank, falando para um médico do interior de MG."**

Marca brasileira autêntica, conversacional, anti-corporativês, mas com
**fundamento técnico sólido**. Não é meme, não é "engraçadinho", não é hype.
É **gente confiável que entende do assunto e fala em português**.

Essa frase deve ser o **norte** sempre que o copywriter (ou Claude) escrever
qualquer coisa do site. Se o texto não passa o teste "Camila ler isso e
sentir confiança e proximidade", reescreve.

### 5.1 Tom geral

✅ **Consultor confiável** — entre o consultor sólido e o amigo do bairro,
mais perto do consultor.

> Médico-dono interior MG quer **alguém que entende do assunto** e fala
> reto, sem corporativês. Tom Cimed/Stone, NÃO tom Bradesco/Banco do Brasil.

### 5.2 Três adjetivos que descrevem

✅ **Confiável • Sólido • Humano**

> Trio defendível. "Confiável" e "sólido" cobrem o lado técnico/LGPD/Tier 1.
> "Humano" cobre o lado anti-robô — bate com o anti-claim do dono.

### 5.3 Anti-claims (em vez de adjetivos)

Owner virou a pergunta — em vez de adjetivos negativos, deu **dois
anti-claims** poderosos pro hero:

- ❌ **"Não é só mais um SaaS"** (anti-commodity)
- ❌ **"Não é só mais um atendente de IA"** (anti-genérico)

> **Implicação para copy:** essas frases **devem aparecer** literalmente em
> alguma section do site (provavelmente subhead do hero ou primeiro
> parágrafo do `/quem-somos`). É posicionamento puro destilado pelo dono.

**Adjetivos NÃO descrevem (derivados):**
- ❌ Genérico • ❌ Robotizado • ❌ Frio • ❌ Hype • ❌ Corporativês

### 5.4 Tratamento

✅ **(b) "Você" no site + "Doutor(a)" em contato direto pós-lead.**

- **Site público:** "Sua agenda. Sua liberdade. Seu paciente." — você
- **Form de contato (email/WhatsApp pós-lead):** "Doutor Marcos, recebi seu
  contato. Posso te ligar amanhã às 14h?"
- **Onboarding pago:** "Doutora Camila, seguem os próximos passos…"

### 5.5 Jargão técnico

✅ **(a) Português puro — sem palavras técnicas no site.**

**Glossário de tradução obrigatório (regra do site):**

| Técnico (proibido) | Português puro (usar) |
|---|---|
| agente, AI agent | secretária digital, atendente |
| integração, API | conexão |
| function calling, tools | ações automáticas |
| RAG, vector search, embeddings | memória do paciente |
| LLM, modelo de linguagem | inteligência artificial |
| prompt engineering | comportamento da secretária |
| onboarding | implantação, primeiros passos |
| churn, retention | clientes que ficam |
| backend, servidor | sistema |
| dashboard | painel |
| SaaS | plataforma, software |
| stack, framework | tecnologia |
| latency, response time | velocidade de resposta |
| multi-tenant, isolation | dados isolados por clínica |
| webhook | aviso automático |

> **Exceções permitidas:** "WhatsApp", "IA" (já é cultura geral), "agendamento",
> "consulta", "paciente", "clínica" — vocabulário do médico, não jargão tech.

### 5.6 Marcas que o owner admira

| Marca | O que aprender |
|---|---|
| **Cimed** | Farmacêutica séria que comunica como gente. CEO acessível (Karla Felmanas), virais com humor sem perder credibilidade. **Referência #1**. |
| **Flow Podcast** | Conversacional, autêntico, polêmico mas sólido. Prova de que pt-BR informal vende em assunto sério. |
| **The News CC** | Newsletter direto, "manhã com café", informa sem corporativês. |
| **Nubank / C6 / Inter** | Fintechs anti-banco-tradicional. "Você no controle", anti-fricção, design clean. |
| **Uber** | Simples, utilitário, "vai funcionar". Sem firula. |
| **Guaraná Antarctica** | Brasileiríssima, fresca, popular sem ser brega. |

### 5.7 Anti-referências

❌ **Bradesco** e bancos tradicionais — robotizados, frios, corporativês.

> **Por isso copy NUNCA usa:** "Apresentamos", "Soluções", "Excelência",
> "Robusto", "Disrupção", "Transformação digital", "Sinergia", "Escalável"
> (em texto público; em ADR técnico tudo bem).

---

## Categoria A — Respondida em 2026-04-29

### A1 — Idioma de "Servar"

✅ **Latim** — `servare` = "guardar, preservar, observar".

> Storytelling de origem: "ServarX = preservar (servare, latim) o que importa
> + X-factor de tecnologia." Funciona em qualquer mídia. Tem profundidade
> sem ser pretensioso.

### A2 — Valores ServarX

✅ **4 valores não-negociáveis** (owner expandiu de 3 pra 4):

1. **Satisfação no atendimento** — produto tão bom que "pode demitir a atendente atual" e o nível sobe.
2. **Tier 1** — qualidade premium. Sem desculpa de "somos pequenos ainda".
3. **LGPD com segurança de dados nível bancário** — cifragem real, audit log, RLS, AES-256-GCM.
4. **IA que executa, feita para clínicas** — anti-chatbot decorativo, anti-genérico (não "IA pra qualquer negócio").

> **Implicação para copy:** valores 3 e 4 são **anti-claims** ownable —
> "**A diferença entre IA que conversa e IA que executa**" (anti-Take Blip).
> "**LGPD-bank-grade**" (anti-Octadesk genérico). Copywriter trabalha esses
> ângulos.

### A3 — Estrutura de tiers ✅ RESOLVIDO

Estrutura final adotada (ver Bloco 4 completo logo abaixo):
- **Automa** R$ 349 / até 3 médicos / 1.000 mensagens IA
- **Inteligência** R$ 599 / até 6 médicos / 3.000 mensagens IA (destacado "Mais Popular")
- **Scale** R$ 947 / até 10 médicos / 7.000 mensagens IA

### A4 — Setup fee ✅ RESOLVIDO

R$ 499 fixo (independente do tier). Narrativa: "Serviço de Inteligência de
Integração e Conformidade" — não é taxa, é alocação de engenharia. Tática
de fechamento founder-led: isenção 100% para "5 parceiros fundadores na
região". Não reembolsável (proteção contra adversarial churn).

### A5 — Mecânica do trial

✅ **(a) Garantia de devolução** — cliente assina, paga, e pode cancelar com
reembolso integral em até 30 dias.

> **Implicação para copy:** "30 dias de garantia. Não gostou, devolvemos
> integral, sem perguntas." Esse selo deve aparecer no hero e na seção de
> pricing — reduz fricção de compra em B2B desconhecido.

### A6 — Limite máximo de clínica

✅ **(b) 10 médicos.**

> **Implicação:** lead com >10 médicos vai pra rota "fale com a equipe" /
> futuro tier Enterprise. Pricing page menciona "Para clínicas com até 10
> médicos. Acima disso? **Fale com a gente.**"

### A7 — Região prioritária 🔥 REDEFINIU ESTRATÉGIA

✅ **Interior de Minas Gerais.**
✅ **Owner mora em Barão de Cocais (MG).**
✅ **Sem orçamento pra tráfego pago.**
✅ **Primeiras 5 clínicas: porta em porta.**

#### Implicações estratégicas (críticas)

**1. Foco geo hyperlocal — Quadrilátero Ferrífero**

Raio viável "porta em porta" a partir de Barão de Cocais (≤ 90 min de carro):
- Barão de Cocais (base)
- João Monlevade
- Itabira
- Catas Altas
- Santa Bárbara
- Bom Despacho
- Caeté
- Sabará
- Belo Horizonte (limite — só se for confiança/indicação)

**Ação:** owner deve **listar manualmente todas as clínicas multiespecialidade
de 1-10 médicos** dessa região (fonte: Google Maps + CNES + indicação local).
Estimativa: 50-150 clínicas viáveis. Meta: fechar **5 das 50** = 10% close rate
hyperlocal — possível indo presencial.

**2. Site sem Calendly / sem agendamento sofisticado**

Médico-dono do interior MG não agenda demo em Cal.com. Site precisa:
- **Botão WhatsApp flutuante** com número direto do owner (Z-API number).
- **Form de contato simples** (nome, telefone, cidade) que **dispara WhatsApp** ou email pro owner.
- **Sem signup self-service** — toda jornada termina em "Falar com a gente
  (WhatsApp/telefone)".

**3. SEO local em vez de Ads**

Sem orçamento de tráfego pago, o tráfego orgânico **regional** é o caminho:
- Rankear "sistema clínica WhatsApp Itabira", "agendamento clínica João
  Monlevade", "secretária IA clínica MG" etc.
- Criar **landing pages por cidade** quando fechar 1ª clínica em cada uma
  ("ServarClin em João Monlevade — case Clínica X").
- Google Business Profile da ServarX (Barão de Cocais) registrado.
- Schema.org `LocalBusiness` no site.

**4. Confiança > funil**

Sem retargeting/Ads, o site tem **1 visita por lead** (talvez 2). Tem que
converter na primeira:
- Foto + nome do fundador visível (Erick) — humaniza imediato.
- Garantia 30 dias com reembolso destacada.
- Depoimento real ASSIM QUE tiver 1 cliente — com nome da cidade MG.
- WhatsApp e telefone visíveis na home. Sem fricção.
- Endereço físico (Barão de Cocais MG) no footer — "somos daqui".

**5. Cases hyperlocal são marketing tier 1**

Quando fechar Camila (a 1ª clínica), o case dela com cidade do interior MG
**é o ativo de marketing mais valioso da ServarX**. Deve aparecer:
- Hero secundário da home
- Página dedicada `/casos/[cidade]-[clinica]`
- Depoimento em vídeo (celular basta) — ainda mais valioso

**6. Indicação > Ads**

Estrutura de **referral**: clínica que indica outra ganha **1 mês grátis**
(ou setup zerado). Programa formal lançado quando atinge 3 clientes.

#### Decisões a tomar imediatamente (derivadas do A7)

| Decisão | Recomendação |
|---|---|
| Botão WhatsApp do owner no site | **Sim**, fixo bottom-right todas as páginas. Número visível. |
| Cal.com / agendamento de demo | **Não**, na Fase 1. Reavaliar quando tiver volume. |
| Endereço físico no footer | **Sim** (Barão de Cocais, MG). Confiança local. |
| CNPJ visível no footer | **Sim**, quando tiver (ver Bloco 10). |
| Foto do fundador na home + /quem-somos | **Sim** (decisão híbrida do Bloco 1.7). |
| Programa de indicação | **Sim**, mas só lança quando tiver 3 clientes. |
| Selo "Garantia 30 dias" no hero | **Sim**, destaque. |
| Idioma | **Pt-BR exclusivo** (sem EN, sem ES). Mercado é local. |
| Schema.org LocalBusiness | **Sim**, SEO local. |
| Google Business Profile | **Criar** quando site for ao ar. |

---

## Bloco 3 — ICP (Ideal Customer Profile) 🟡

### 🔥 Insight estratégico (emergiu da entrevista)

A persona "Camila" descreve um **centro médico multidisciplinar de pequeno porte
em cidade do interior** (5-6 médicos, psico → cardio, atendimento sobrecarregado).

**Esse é um nicho enorme e mal atendido no Brasil:**
- iClinic, Doutore, Conexa focam em **consultório especializado** (1 médico, 1
  especialidade) ou **rede grande**.
- "Centro médico de bairro" é mid-market que ninguém domina.

**Hipótese forte:** ServarClin pode posicionar-se como **"o sistema do centro
médico do interior"** — isso é claim ownable, defensável e Camila-shaped.

**A validar no Bloco 4 (concorrência).**

### 3.1 Tamanho da clínica

✅ Foco principal: **1-6 médicos** (combinação 1a + 1b, esticada por Camila)
- 🅐 1 médico (consultório solo) — incluso
- 🅑 **2-5 médicos (clínica pequena familiar)** — sweet spot
- (estendido) 6 médicos — limite superior conforme persona Camila

> Bate com pricing R$ 299 / 599 / 997 (Tier 1 = solo, Tier 2 = familiar,
> Tier 3 = pequena com 5-6 médicos).

### 3.2 Especialidade-alvo 🟡

Owner: *"vamos avaliar o mercado e ver o que se encaixa melhor com minha
posição atual."*

✅ Decisão por enquanto: **(b) Foco em UMA vertical primeiro**, mas qual ainda em aberto.

**Hipóteses fortes (a validar com pesquisa de mercado no Bloco 4):**

| Vertical | Pró | Contra |
|---|---|---|
| **Centro médico multiespecialidade (interior)** | Bate com Camila + 5d. Nicho mal atendido. Diferenciação clara. | Mensagem mais difícil de comunicar ("centro médico" é menos buscado no Google que "estética"). |
| **Estética** | Mercado quente, particular puro, alta margem, ICP digital-savvy. | Concorrência dura (Olhar, Trinks). |
| **Psicologia** | Crescimento explosivo pós-pandemia, online-first. | Sessões longas, agenda menos volumétrica — produto talvez "subutilizado". |
| **Odontologia** | Mercado gigantesco, alta digitalização. | Concorrência saturada (Dental Office, Simples Dental). |

> **Recomendação preliminar:** ServarX = horizontal. Site **principal** posiciona
> ServarClin como "para clínicas e centros médicos". Mas criar **landing pages
> verticais** (`/produtos/servarclin/centro-medico`, `/produtos/servarclin/estetica`)
> em Fase 2 para SEO e Ads. Tier 1 marketing copia esse padrão.

### 3.3 Modelo de pagamento da clínica

✅ **(b) Mistas** — particular + convênio.

> Confirma o modelo "centro médico de bairro" (geralmente atende particular **e**
> convênios populares como Unimed, Amil, Hapvida).

### 3.4 Decisor de compra

✅ **(a) Médico-dono.**

**Implicações para copy:**
- Linguagem **direta com o médico**, não com gestor.
- Tom: **alívio + autonomia** (médico cansado quer libertar tempo, não relatórios).
- Hero da home fala com ele: "**Você** voltou pra medicina pra cuidar de gente,
  não pra responder WhatsApp."
- **Não** focar em features tipo "dashboard executivo" / "BI" — médico-dono não
  liga (ainda).

### 3.5 Localização

✅ **(d) Interior.**

**Implicações estratégicas:**
- Menos concorrência de SaaS (capitais já têm iClinic etc.).
- Maturidade digital menor → produto deve ser **MUITO simples** de implantar.
  Setup fee + onboarding assistido (Bloco 2) faz sentido.
- Tom do site **menos "tech"**, mais "humano e próximo" (não imitar Stripe).
- Cases reais com nome de cidade pequena vendem mais que case de SP/Rio aqui.

⬜ **Pendente:** confirmar região(ões) prioritárias. Sul? Sudeste interior?
Nordeste? Influencia distribuição de Ads e idioma das peças.

### 3.6 Canais de aquisição ⬜ PENDENTE

Owner: *"não fiz essa pesquisa."*

**Hipóteses iniciais (B2B saúde BR, interior, médico-dono):**

| Canal | Probabilidade de funcionar |
|---|---|
| **Google search** ("sistema clínica WhatsApp", "agendamento clínica") | Alta — médico-dono pesquisa |
| **Indicação de outros médicos** (boca a boca) | Altíssima — interior é network-driven |
| **Instagram** (anúncios geo-locais + conteúdo) | Média-alta — médico jovem ativo |
| **Eventos regionais de saúde** | Média — feiras estaduais, sindicatos médicos |
| **Cold outbound** (email/WhatsApp pra clínicas listadas) | Média — sales-led permite |
| **LinkedIn** | Baixa — médico-dono interior usa pouco |
| **Facebook Ads** | Média — boa pra interior, demografia mais velha |

⬜ **Ação:** rodar 30 entrevistas curtas (5min) com clínicas-alvo no interior
perguntando "como você descobriu seu sistema atual?" — isso resolve em 1
semana. Owner pode fazer via WhatsApp.

### 3.7 Persona detalhada — "Camila"

| Atributo | Valor |
|---|---|
| Nome | Camila |
| Tamanho | 5-6 médicos |
| Tipo | Centro médico multiespecialidade |
| Especialidades | Psicoterapia → Cardiologia (full multidisciplinar) |
| Localização | Interior (estado a definir) |
| Dor principal | **Atendimento sobrecarregado** |
| Por que ainda não tem solução? | ⬜ Owner: "não sei ainda" |

⬜ **Pendentes pra completar persona:**
- Idade aproximada da Camila (45 anos? 60?)
- É médica + dona, ou só dona/gestora casada com médico?
- Faturamento aproximado/mês da clínica (pra calibrar pricing)
- Já tentou alguma solução? Quais? Por que abandonou?
- Como Camila pesquisaria por uma solução hoje?

> **Recomendação:** owner roda **3 entrevistas reais** com clínicas-Camila do
> seu network. Cada uma 30min. Vai destravar 80% das pendências do
> briefing. Custo: zero. ROI: enorme.
- ⬜ Bloco 4 — Concorrência
- ⬜ Bloco 5 — Voz da marca
- ⬜ Bloco 6 — Identidade visual
- ⬜ Bloco 7 — Conversão (meta do site)
- ⬜ Bloco 8 — Conteúdo & SEO
- ⬜ Bloco 9 — Operação técnica (forms, analytics, pixels, LGPD)
- ⬜ Bloco 10 — Legal (CNPJ, privacidade, termos)
