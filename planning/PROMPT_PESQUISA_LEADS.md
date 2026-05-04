# Prompt para Gemini Deep Research — Lista de Leads (Quadrilátero Ferrífero MG)

> Cole o conteúdo do bloco abaixo no Gemini com Deep Research ativado.
> Tempo estimado: 30-60 min (pesquisa pesada de fontes públicas).
> Output esperado: tabela CSV/markdown com 50-150 clínicas + dados completos
> de contato + score de potencial.
>
> **Uso pretendido:** owner roda automação de outreach (WhatsApp/email) pra
> qualificar e agendar demos com cada lead.

---

```
Atue como analista sênior de inteligência comercial (Sales Intelligence)
especializado em outbound B2B no setor de saúde no Brasil. Conduza um
levantamento exaustivo e estruturado de leads (clínicas e centros médicos)
em uma região geográfica específica de Minas Gerais, com objetivo de
alimentar uma operação de prospecção founder-led porta-a-porta + automação
de WhatsApp.

## Contexto

Estou construindo um SaaS B2B chamado ServarClin (da empresa ServarX), que é
um agente de IA conversacional via WhatsApp para clínicas médicas pequenas e
médias. Foco prioritário: **centros médicos multidisciplinares de pequeno
porte (1-10 médicos)** no interior do Brasil.

Pricing planejado:
- Tier Automa: R$ 349/mês (até 3 médicos, 1.000 mensagens IA/mês)
- Tier Inteligência: R$ 599/mês (até 6 médicos, 3.000 mensagens IA/mês)
- Tier Scale: R$ 947/mês (até 10 médicos, 7.000 mensagens IA/mês)
- Setup fee: R$ 499 (isentável em campanha "5 parceiros fundadores")
- Garantia: 30 dias com reembolso da mensalidade

Persona "Camila" (avatar): médica-dona, 5-6 médicos, multidisciplinar
(psicoterapia → cardiologia), atendimento sobrecarregado, mistura particular
+ convênios populares.

Estou baseado em **Barão de Cocais, MG**, e farei prospecção
**porta-a-porta** nas primeiras 5 clínicas. Por isso preciso de leads em
raio de até ~90 minutos de carro daqui.

## Objetivo da pesquisa

Levantar **todas as clínicas multidisciplinares e centros médicos
particulares** (1-10 médicos) das cidades listadas abaixo, com o máximo de
dados acionáveis pra contato comercial direto.

Quero receber **todas as clínicas que encontrar**, não só as 50 melhores —
eu mesmo qualifico depois. Mínimo aceitável: 50 clínicas. Ideal: 100-200.

## Cidades-alvo (Quadrilátero Ferrífero + entorno)

Foque nestas cidades, em ordem de prioridade:

### Tier 1 (raio ≤60 minutos de Barão de Cocais — prioridade alta)
- Barão de Cocais (sede)
- Catas Altas
- Santa Bárbara
- Bom Jesus do Amparo
- João Monlevade
- Bela Vista de Minas
- São Domingos do Prata
- Nova Era
- Itabira
- Rio Piracicaba
- Alvinópolis

### Tier 2 (raio 60-90 minutos — prioridade média)
- Mariana
- Ouro Preto
- Itabirito
- Sabará
- Caeté
- Nova Lima

### Tier 3 (capital — prioridade baixa, só se sobrar tempo)
- Belo Horizonte (apenas regiões periféricas — Venda Nova, Norte, Nordeste,
  Pampulha — não Centro nem Savassi)

## Tipos de estabelecimento que quero (INCLUIR)

- **Centro médico** ou **policlínica** (qualquer especialidade)
- **Clínica multidisciplinar** (≥ 2 especialidades sob mesmo CNPJ)
- **Clínica de especialidade única** com 2-10 médicos no mesmo lugar
  (cardiologia, ortopedia, pediatria, dermatologia, ginecologia, etc.)
- **Clínica de psicologia** com 3+ profissionais
- **Clínica de fisioterapia** com 3+ profissionais
- **Clínicas multimodais** (médico + nutri + psico + fisio sob mesmo teto)

## Tipos que NÃO quero (EXCLUIR)

- Hospitais (>10 médicos, complexidade enterprise)
- Postos UBS / SUS puro (não compram SaaS privado)
- Consultório médico com **1 único profissional** (tier de entrada não
  paga setup fee)
- Clínicas de estética puramente cosmética sem médico (Trinks domina esse
  nicho)
- Clínicas odontológicas exclusivas (Clinicorp/Simples Dental dominam)
- Veterinária (futuro, não MVP)
- Laboratórios de exame (não atendem fluxo conversacional)
- Farmácias e drogarias

## Dimensões de dados a coletar (por clínica)

Para CADA clínica encontrada, levante:

### 1. Identificação
- **Nome fantasia** (como aparece em placa/site)
- **Razão social** (se diferente)
- **CNPJ** (se público — Receita Federal, CNES, sites de contato)
- **CNES** (Cadastro Nacional de Estabelecimentos de Saúde — número se disponível)

### 2. Endereço
- **Rua + número**
- **Bairro**
- **Cidade / UF**
- **CEP**
- **Coordenadas Google Maps** (latitude/longitude)
- **Distância aproximada de Barão de Cocais** (em km e minutos de carro)

### 3. Contato direto
- **Telefone fixo** (com DDD)
- **WhatsApp** (se diferente — confirmar se atende WhatsApp)
- **Email institucional**
- **Site oficial**

### 4. Redes sociais
- **Instagram** (handle @ + URL completa)
- **Facebook** (URL)
- **LinkedIn da clínica** (se houver)

### 5. Operação
- **Especialidades atendidas** (lista completa)
- **Número estimado de médicos/profissionais** (1, 2-3, 4-6, 7-10, 11+)
- **Atende particular?** (sim/não)
- **Atende convênio?** (sim/não)
- **Quais convênios** (Unimed, Amil, Bradesco Saúde, Hapvida, IPSEMG, Postal Saúde, etc.)
- **Horário de funcionamento**
- **Aceita agendamento online?** (sim/não/desconhecido)

### 6. Pessoas-chave
- **Médico-dono / responsável técnico** (RT) — nome + especialidade + CRM/MG nº (se público)
- **Outros médicos titulares** (lista nomes que aparecem no site/Doctoralia)
- **Gestor / administrador** (se diferente do médico-dono)

### 7. Reputação digital
- **Google Maps** — rating (X.X estrelas) + número de reviews + última review (data se possível)
- **Doctoralia** — perfil ativo? rating? quantidade de reviews?
- **Reclame Aqui** — tem queixas? quantidade?
- **Trecho representativo** de 1 review **positivo** (literal, entre aspas)
- **Trecho representativo** de 1 review **negativo** (literal, entre aspas)

### 8. Sinais digitais (importantíssimo pra o pitch)
- **Tem secretária identificável** em reviews? ("a secretária X é ótima",
  "a recepção demora", etc.)
- **Reviews mencionam dor de WhatsApp / agendamento / atendimento**?
  Cite literalmente.
- **Reviews mencionam no-show / falta confirmação**?
- **Tem botão WhatsApp no site/Instagram bio**? (sim/não)
- **Posta com frequência** no Instagram? (alta / média / baixa / inativa)
- **Última publicação Instagram** (data)

### 9. Score de potencial (0-100, calculado por você)

Pondere os fatores:

| Fator | Peso |
|---|---|
| Tamanho ideal (3-6 médicos) | +30 |
| Multidisciplinaridade (≥2 especialidades) | +20 |
| Atende particular (não só convênio) | +10 |
| Sinais de dor de atendimento em reviews | +20 |
| Maturidade digital (site + Instagram ativo) | +10 |
| Distância (≤60min de Barão de Cocais) | +10 |
| ❌ Penalidade: hospital/grande porte | −50 |
| ❌ Penalidade: consultório individual | −30 |

Resultado: **score de 0 a 100**, onde **70+ = lead quente** (priorizar
contato).

### 10. Próximo passo recomendado (campo livre)

Pra cada clínica, recomende em 1 frase a abordagem ideal:
- "Visitar pessoalmente — fica 15min de Barão"
- "Mandar áudio no WhatsApp — perfil mais informal, comuna pequena"
- "Conectar via Instagram primeiro — médica-dona ativa em mídia"
- "DM polite no LinkedIn — gestor profissional, não médico"

## Formato de saída

### Parte 1: Tabela completa em Markdown ou CSV

Uma linha por clínica, com TODAS as colunas acima. Use `N/A` quando não
encontrar.

Exemplo de cabeçalho:

```
nome_fantasia | razao_social | cnpj | cnes | rua | bairro | cidade | uf | cep | telefone | whatsapp | email | site | instagram | facebook | linkedin | especialidades | n_medicos | atende_particular | atende_convenio | convenios_aceitos | horario | agendamento_online | medico_responsavel | crm | gestor | rating_google | reviews_count | review_positivo | review_negativo | sinais_dor | bot_whatsapp_atual | score | proximo_passo | distancia_km | distancia_min | tier_geo
```

### Parte 2: Resumo executivo (1 página)

- Total de clínicas encontradas
- Distribuição por cidade
- Distribuição por score (quantas com score ≥70?)
- 3 padrões marcantes que você notou (ex: "75% das clínicas em João
  Monlevade aceitam Unimed", "todas as multidisciplinares de Itabira têm
  cardiologia", etc.)

### Parte 3: Top 10 leads quentes

Lista das 10 com **maior score**, com 2-3 linhas de justificativa cada
("Por que essa é prioridade absoluta de contato").

### Parte 4: Dúvidas e gaps de dados

O que você NÃO conseguiu encontrar e seria útil pesquisar manualmente
depois (ex: "ClinicaX em Itabira não tem CNPJ público — preciso ligar pra
confirmar tamanho").

## Restrições

- **Use fontes oficiais e públicas** — CNES (cnes.datasus.gov.br), Receita
  Federal (consulta CNPJ), Google Maps, Doctoralia, sites próprios das
  clínicas, Instagram, LinkedIn, Reclame Aqui.
- **NÃO invente dados.** Se não encontrar telefone, escreva `N/A` —
  prefiro lacuna a dado errado.
- **Cite a fonte** de cada dado quando possível (ex: telefone via "site
  oficial" ou "Google Maps" ou "Doctoralia").
- **Reviews citados devem ser literais** — entre aspas, não parafraseados.
- **Português pt-BR**.
- **Sem juízo moral** sobre as clínicas — análise objetiva, sem
  classificar nada como "boa" ou "ruim", só por sinais comerciais.

Comece a pesquisa pelo Tier 1 geográfico (raio ≤60min de Barão de Cocais)
e expanda pra Tier 2 conforme o tempo permitir.
```

---

## Como usar

### 1. Pré-flight

Antes de rodar:
- [ ] Confirma com Gemini Deep Research que está ativo na sua conta
  (gemini.google.com → seleciona "Deep Research" na lista de ferramentas)
- [ ] Tem Google Sheets em branco aberto pra colar a tabela depois

### 2. Execução

1. Cola o bloco entre `\`\`\`` (do "Atue como analista..." até "...permitir.")
   no Gemini.
2. Clica em **Iniciar pesquisa**.
3. **Aguarda 30-60 minutos** (pesquisa pesada).
4. Quando voltar, lê o sumário executivo (Parte 2) primeiro pra ver se
   bateu com a expectativa.

### 3. Pós-processamento

1. Copia a tabela (Parte 1) pro Google Sheets.
2. Adiciona colunas de status: `contatado_em`, `status` (novo/pendente/
   demo agendada/fechado/perdido), `notas`, `proximo_followup`.
3. Filtra por **score ≥70** e ordena por distância → essa vira sua
   **lista de visitas porta-a-porta**.
4. Filtra por **score 50-69** → vira lista de **outreach por WhatsApp/Instagram**.
5. Score <50 → **deixa pra futura campanha** ou descarta.

### 4. Automação de contato (depois)

Quando tiver a lista, podemos montar uma automação:

- **Z-API + cron**: dispara mensagem WhatsApp inicial pra leads score 50-69
  num ritmo controlado (10/dia pra evitar shadowban)
- **Mensagem template** Cimed-style: *"Oi, doutor(a) {nome}. Aqui é o
  Erick, da ServarX, em Barão de Cocais. Vi que sua clínica em {cidade}
  atende {especialidades}. Estou ajudando alguns centros médicos do
  interior a automatizar o WhatsApp pra não perder paciente. Posso te
  mostrar em 5min como funciona?"*
- **Resposta dispara handoff manual** pro owner (notificação + histórico
  no Google Sheet)

> **Quero montar essa automação?** Te aviso quando estiver com tempo —
> ~6h de implementação (Z-API + cron Vercel + planilha + lógica anti-spam).

## O que faremos com a lista

1. **5 primeiros visitados pessoalmente** (porta-a-porta) — score top 5
2. **Listagem de leads** vai pro Google Sheet integrado ao site (form de
   contato deixa lead novo na mesma planilha — unifica fontes)
3. **Cases reais** quando fechar — cada cliente vira card no
   `/parceiros-fundadores` da home
4. **Landing page por cidade** quando fechar 1ª clínica em cada
