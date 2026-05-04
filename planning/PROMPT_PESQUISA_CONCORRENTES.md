# Prompt para Gemini Deep Research — Análise de Concorrentes ServarClin

> Cole o conteúdo do bloco abaixo no Gemini com Deep Research ativado.
> Tempo estimado de execução: 15-30 min.
> Output esperado: relatório markdown com matriz comparativa, gaps de mercado e
> recomendações de posicionamento.

---

```
Atue como analista sênior de pesquisa de mercado especializado em SaaS B2B de
saúde no Brasil. Conduza uma análise competitiva profunda do mercado brasileiro
de software para clínicas médicas pequenas e médias, com foco específico em
soluções que combinam atendimento via WhatsApp, agendamento e inteligência
artificial conversacional.

## Contexto

Estou construindo um produto chamado ServarClin, da empresa ServarX, que é um
SaaS B2B com agente de IA conversacional via WhatsApp para clínicas. Meu ICP
(perfil de cliente ideal) é:

- Centros médicos multidisciplinares de pequeno porte (1-6 médicos)
- Localizados em cidades do interior do Brasil
- Decisor de compra: o próprio médico-dono
- Atendem mistura de particular e convênios
- Sofrem com atendimento sobrecarregado e WhatsApp respondido manualmente
- Faturamento mensal estimado: faixa de R$ 50k a R$ 400k

O produto cobra mensalidade fixa em 3 tiers (R$ 299 / R$ 599 / R$ 997) + setup
fee, com motion sales-led (cliente entra em contato primeiro). NÃO competimos
com prontuário eletrônico — focamos em atendimento, agendamento e histórico de
relacionamento.

## Objetivo da pesquisa

Mapear o panorama competitivo brasileiro com profundidade suficiente para que
eu possa decidir:

1. Qual vertical-âncora atacar primeiro (centro médico multidisciplinar?
   estética? psicologia? odontologia?)
2. Qual posicionamento ownable existe (que claim ainda não está ocupado por
   concorrente forte)
3. Como precificar competitivamente (faixas de preço dos concorrentes diretos)
4. Quais features são tabela mínima vs. quais são diferencial real
5. Onde existe lacuna de mercado (gap clarissimo entre o que clínicas
   precisam e o que o mercado oferece hoje)

## Concorrentes a investigar

Pesquise CADA UM dos abaixo (e identifique outros relevantes que aparecerem):

### Categoria 1 — SaaS clínicos brasileiros generalistas
- iClinic (iclinic.com.br)
- Doutore (doutore.com.br)
- Clinicorp (clinicorp.com)
- Feegow (feegow.com)
- Ninsaúde (ninsaude.com)
- Boa Consulta
- Pebmed / iClinic Manager
- DrCash / DrConsulta (se for SaaS)
- Doctoralia (DocPlanner Brasil)

### Categoria 2 — Verticais brasileiras (estética, odonto, psico)
- Trinks (trinks.com — estética/beleza)
- Olhar Clínica (estética)
- Belezus
- Dental Office
- Simples Dental
- Vetus / outras verticais de petshop (referência adjacente)

### Categoria 3 — Plataformas de atendimento via WhatsApp + IA no BR
- Take Blip (blip.ai)
- Octadesk
- Builderbot
- Z-API (provedor — ver se eles têm produto vertical)
- Botconversa
- Brbot / BotBiz
- Wati
- E qualquer startup brasileira recente (2023-2025) que ofereça
  "secretária de IA via WhatsApp" para clínicas — investigar AppCharts,
  CB Insights pra Brasil, posts no Linkedin de fundadores, Pitchbook BR

### Categoria 4 — Referências internacionais (não competem mas inspiram)
- BotMD (botmd.io — Singapura, hospital)
- Hyro (hyro.ai — USA)
- Luma Health (lumahealth.io — USA)
- Klara (klara.com — USA)
- Artera (artera.io — USA)
- Suki AI (suki.ai — USA, voice notes)

## Dimensões da matriz comparativa

Para cada concorrente direto (Categorias 1, 2 e 3), levante:

| Dimensão | O que coletar |
|---|---|
| **Posicionamento** | Headline da home, tagline, "para quem é" declarado |
| **ICP declarado** | Tamanho de clínica, especialidades-alvo, particular/convênio |
| **Preço** | Faixas mensais, tiers, setup fee, trial |
| **Modelo de venda** | Self-service vs sales-led, demo agendada vs signup direto |
| **Features-âncora** | Top 3-5 features destacadas na home/pricing |
| **Tem IA conversacional real?** | Sim/Não. Se sim — agente que age (chama tools, agenda, cancela) ou só chatbot decorativo (FAQ)? |
| **Integração WhatsApp** | Oficial (Meta Cloud API), via Z-API/Twilio, ou só botão de link? |
| **Prontuário eletrônico?** | Sim/Não — pra eu confirmar que é território deles |
| **Funding / porte** | Tamanho declarado (clientes ativos, médicos, etc.), rodadas captadas se disponível |
| **Marketing/SEO** | Termos que rankeiam no Google, presença em Ads, blog ativo |
| **Cases públicos** | Tem case studies? De que perfil de clínica? |

## Perguntas-chave que o relatório deve responder

1. Existe alguma startup brasileira que ofereça **agente de IA real**
   (executa ações via tools — agenda, cancela, confirma) integrado ao WhatsApp
   pra clínicas, ou todo mundo ainda está em "chatbot de FAQ"?

2. Qual o **preço médio** cobrado por SaaS clínico generalista no BR? Como
   meus tiers de R$ 299/599/997 se comparam — sou cheap, mid-market ou
   premium?

3. Quais concorrentes mencionam explicitamente **"clínicas pequenas no
   interior"** ou **"centro médico multidisciplinar"** como ICP? Se ninguém
   ocupa, esse é meu claim ownable.

4. Em qual vertical (estética, odontologia, psicologia, multiespecialidade)
   há **menos concorrência forte** com IA conversacional? Onde é mais fácil
   entrar?

5. Quais **3 features** os concorrentes top (iClinic, Doutore, Clinicorp)
   destacam que eu **não** tenho hoje (e seria bom ter pra paridade)?
   Quais 3 features eu tenho que NINGUÉM destaca (= diferencial real)?

6. Quais **canais de marketing** os concorrentes usam? (Ads em Google,
   conteúdo em blog, parcerias com sindicatos médicos, eventos como
   Hospitalar). Algum padrão que indica onde médico-dono procura?

7. Quais 5 termos do Google são MAIS buscados por médico-dono procurando
   sistema (use SEMrush/SimilarWeb se acessível, ou inferir por sugestões
   do autocomplete)?

8. Análise de **NPS / reclamações** públicas (Reclame Aqui, G2, Trustpilot,
   TrustVox, posts de fóruns) — quais as 3 maiores dores que clientes
   atuais reportam dos concorrentes? Essas são minhas oportunidades de
   marketing ("ServarClin resolve o que o concorrente X não resolve").

9. Caso especial: **DocPlanner / Doctoralia** — eles têm produto B2B (Manager)
   ou só marketplace? Como agem no BR?

10. **Tese de mercado:** olhando tudo isso, qual é o melhor caminho de
    posicionamento para a ServarClin entrar? "Davi vs Golias" (atacar iClinic
    de frente)? "Vertical-first" (dominar uma especialidade)? "Geo-first"
    (dominar uma região do interior)?

## Formato de saída esperado

Estruture em:

### 1. Sumário executivo (1 página)
3-5 bullets com as descobertas mais acionáveis pra mim decidir posicionamento.

### 2. Matriz comparativa
Tabela com todos os concorrentes nas linhas e dimensões nas colunas. Linhas
ordenadas por relevância pro meu ICP.

### 3. Análise por categoria
Sub-seções por categoria 1/2/3, com 1-2 parágrafos por concorrente
mencionando o relevante (não copy-paste de marketing — análise crítica).

### 4. Mapa de gaps e oportunidades
Onde eu posso ganhar. Listar 3-5 lacunas de mercado claras.

### 5. Recomendação final de posicionamento
Sua opinião como analista sobre qual vertical-âncora atacar e qual claim
defender. Justificada com evidência da pesquisa.

### 6. Dúvidas que ficaram sem resposta
Liste o que NÃO conseguiu encontrar (ex: "preço de Clinicorp não está
público — precisa demo"). Isso me ajuda a saber o que pesquisar manualmente.

## Restrições

- **Foco no Brasil.** Use fontes brasileiras prioritariamente.
- **Cite fontes.** Toda afirmação numérica (preço, número de clientes) tem que
  vir com link da fonte.
- **Distinga o declarado do real.** Se um concorrente diz "tem IA" mas o
  produto demonstrado é só chatbot de FAQ, anote essa discrepância — é gold
  pro meu posicionamento.
- **Português pt-BR** no relatório final.
- **Sem floreio corporativo.** Linguagem direta de analista.

Comece a pesquisa.
```

---

## Como usar

1. Abre o Gemini (gemini.google.com) — é grátis na conta Google
2. Ativa **Deep Research** (botão na barra de prompts)
3. Cola o bloco acima
4. Aguarda 15-30min
5. Salva o relatório retornado em `planning/site-servarx/RELATORIO_CONCORRENTES.md`

## O que fazer com o relatório

Após receber, vamos:
1. Decidir vertical-âncora (resolve pendência #10 do briefing)
2. Validar pricing competitivo (resolve pendência #3)
3. Identificar canais de aquisição reais (resolve pendência #11)
4. Refinar narrativa "ServarX vs concorrência" pro `/quem-somos`
5. Listar 3 features de paridade que devemos ter no produto + 3 diferenciais ownable
