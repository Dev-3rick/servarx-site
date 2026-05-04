# Prompt 2 para Gemini Deep Research — Estratégia de Pricing e Tiering

> **Use APÓS** rodar o `PROMPT_PESQUISA_CONCORRENTES.md`. Esse complementa
> com profundidade em pricing strategy.
> Tempo estimado: 15-25 min.
> Output esperado: recomendação concreta de estrutura de tiers + setup fee +
> trial dominante no mercado SaaS clínico BR.

---

```
Atue como consultor de pricing strategy especializado em SaaS B2B vertical no
Brasil, com experiência em saúde digital. Não quero panorama geral de
concorrência — esse já fiz. Quero análise específica de estrutura de pricing
e como construir uma tabela de 3 tiers que seja competitiva e defensável.

## Contexto do produto

ServarClin é um SaaS B2B com agente de IA conversacional via WhatsApp para
clínicas médicas pequenas e médias (1-10 médicos) no interior do Brasil.
Foco inicial: centros médicos multidisciplinares no interior de Minas Gerais.

Diferenciais declarados:
- IA que executa ações reais (agendar, cancelar, confirmar via tools), não
  só chatbot de FAQ
- LGPD com cifragem nível bancário
- Histórico de cliente para pós-venda
- Integração WhatsApp oficial

Modelo planejado:
- 3 tiers de mensalidade: R$ 299 / R$ 599 / R$ 997
- Setup fee (valor a definir)
- Trial: garantia de devolução de 30 dias (cliente paga, pode cancelar com
  reembolso integral)
- Motion: sales-led, owner faz porta-a-porta nas primeiras 5 clínicas
- Limite máximo: clínicas com até 10 médicos

NÃO competimos com prontuário eletrônico (iClinic, Doutore, Feegow, Ninsaúde
fazem isso). Competimos em **atendimento + agendamento + relacionamento**.

## Concorrentes referência (foque nesses)

**Diretos brasileiros (SaaS clínico generalista com algum tier de WhatsApp):**
- iClinic
- Doutore
- Clinicorp
- Feegow
- Ninsaúde
- Boa Consulta
- Trinks (estética, mas referência mid-market)
- Doctoralia / DocPlanner Manager

**Adjacentes (atendimento via WhatsApp + IA, não-saúde):**
- Take Blip
- Octadesk
- Builderbot
- Botconversa
- Wati
- Brbot

**Internacional (referência de tier design):**
- BotMD (botmd.io)
- Klara (klara.com)
- Artera (artera.io)

## O que quero descobrir

### Bloco 1 — Faixa de preço dominante no Brasil

1. Qual a **mediana mensal** de SaaS clínico no Brasil para clínica de 1-3
   médicos? E para 4-10?
2. Os 3 tiers que estou pensando (R$ 299 / 599 / 997) caem em qual
   posicionamento — entry-level, mid-market ou premium do segmento?
3. Existe diferença grande de preço entre verticais (estética vs psicologia
   vs multiespecialidade)? Onde se cobra mais? Onde se cobra menos?

### Bloco 2 — Estrutura de tiers (eixo de diferenciação)

4. Olhando a pricing page dos concorrentes, qual o **eixo de diferenciação
   dominante** entre tiers?
   - Por número de **usuários** (médicos/recepcionistas)?
   - Por número de **mensagens IA / atendimentos**?
   - Por **features** (lembrete, integração, analytics)?
   - Por **suporte** (chat vs prioritário vs gerente dedicado)?

5. Qual o **delta percentual** entre tiers normalmente? (Ex: "tier 2 custa
   2x tier 1, tier 3 custa 1.7x tier 2.") Ajuda a calibrar.

6. Concorrentes oferecem **add-ons à parte** (ex: WhatsApp Oficial Meta cobrado
   separado, lembrete SMS extra)? Ou tudo embutido no tier?

### Bloco 3 — Setup fee

7. Quantos % dos SaaS clínicos brasileiros cobram **setup fee / taxa de
   implantação**? Quais cobram, quais não?

8. Qual o **valor médio** do setup fee no setor? (Vi reportes de R$ 500 a
   R$ 5.000 — quero a faixa real.)

9. Como concorrentes **justificam** o setup fee? ("Onboarding assistido",
   "migração de dados", "treinamento da equipe"). Qual narrativa converte
   melhor?

10. Existe prática de **isenção de setup fee** em campanhas (ex: "primeiros 3
    meses sem setup")? É efetivo ou queima margem?

### Bloco 4 — Trial e garantia

11. Predominância no mercado SaaS clínico BR:
    - **Trial puro grátis** (usa N dias sem pagar)
    - **Garantia de devolução** (paga e pode cancelar)
    - **Freemium** (versão limitada permanente)
    - **Demo + assinatura direta** (sem trial)

12. Para minha decisão de **garantia 30 dias com reembolso**, isso é
    competitivo ou estranho no segmento? Como concorrentes lidam com
    cancelamento nos primeiros 30 dias?

### Bloco 5 — Motion de venda e ramp-up

13. Em SaaS clínico BR, o **CAC** (custo de aquisição) médio costuma estar
    em qual faixa? Isso me dá teto pra investir em marketing.

14. **Tempo de ramp-up** típico (do primeiro contato ao cliente assinando)
    em sales-led B2B clínico no BR?

15. Quantas demos / contatos são necessários em média pra fechar 1 cliente
    sales-led nesse setor? (Ratio de funnel.)

### Bloco 6 — Recomendação concreta

16. Olhando tudo isso, **qual estrutura específica de 3 tiers** você
    recomenda pra ServarClin? Inclua:
    - Nome de cada tier
    - Preço mensal (pode ajustar dos R$ 299/599/997 se houver razão)
    - Eixo principal de diferenciação
    - 3-5 features destacadas em cada tier
    - O que **NÃO** está em cada tier (e fica em add-on)

17. **Setup fee recomendado** (valor, justificativa narrativa, e se deve ser
    proporcional ao tier ou fixo).

18. Como **ancorar** a tabela de pricing visualmente — qual tier deve ser o
    "recomendado" / destacado pra empurrar maior parte dos clientes pra ele?

## Formato de saída

### Parte 1 — Quadro analítico (matriz de pricing dos concorrentes)
Tabela: concorrente × {tier 1 preço, tier 2 preço, tier 3 preço, setup fee,
trial, eixo diferenciador}.

### Parte 2 — Diagnóstico
Onde meus 3 tiers (R$ 299/599/997) caem? Estou bem precificado, caro, ou
barato pro segmento? Justifique com evidência.

### Parte 3 — Recomendação concreta
Estrutura final de 3 tiers (nome, preço, eixo, features) + setup fee + trial
+ ancoragem visual.

### Parte 4 — Riscos
3 riscos da minha estrutura proposta vs alternativas que poderia ter
escolhido.

## Restrições

- Foco BR. Use exemplos internacionais só pra inspiração de design de tier.
- Cite valores com fonte (link da pricing page do concorrente, ou data da
  consulta se valor não está mais público).
- Distinga "preço de tabela" (público) de "preço real fechado em demo"
  quando for possível.
- Português pt-BR. Linguagem direta de consultor.
- Sem floreio.

Comece a análise.
```

---

## Como usar

1. **Roda primeiro** o `PROMPT_PESQUISA_CONCORRENTES.md` (panorama geral)
2. Espera o relatório voltar
3. **Depois** roda esse prompt — Gemini vai poder usar o contexto da
   primeira pesquisa
4. Salva o output em `planning/site-servarx/RELATORIO_PRICING.md`

## O que faremos com o resultado

Resolve as pendências:
- A3 (estrutura de tiers — o que vai em cada um)
- A4 (valor do setup fee)
- Pendência #3 da lista consolidada
- Pendência #4 da lista consolidada

E dá insumo concreto pra **pricing page** do site `/produtos/servarclin`.
