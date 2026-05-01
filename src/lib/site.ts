/**
 * Constantes globais do site ServarX.
 * Toda mudança de identidade/contato passa por aqui.
 */

export const SITE = {
  name: 'ServarX',
  tagline: 'A sua liberdade de focar no que faz de melhor',
  description:
    'A primeira IA conversacional construída para o Centro Médico do Interior. Agende todos os seus médicos e atenda pacientes em áudio e texto, 24h por dia, sem pagar licenças extras por profissional.',
  url: 'https://servarx.com.br',

  // Contato
  whatsapp: '+5531996950720',
  whatsappText:
    'Olá! Vim do site da ServarX e quero saber mais sobre o ServarClin.',
  email: {
    contato: 'Servaxhome@gmail.com',
    suporte: 'Servaxhome@gmail.com',
    lgpd: 'Servaxhome@gmail.com',
  },

  // Endereço
  endereco: {
    cidade: 'Barão de Cocais',
    uf: 'MG',
    pais: 'Brasil',
    full: 'Barão de Cocais, MG, Brasil',
  },

  // Empresa (atualizar quando MEI sair)
  empresa: {
    razaoSocial: 'Erick Henrique Caetano de Almeida',
    cpfOuCnpj: '66.532.887/000-77',
    nomeFantasia: 'ServarX',
  },

  // Redes sociais
  redes: {
    instagram: 'https://instagram.com/servarx.ia',
    linkedin: 'https://linkedin.com/company/servarx',
    github: 'https://github.com/Dev-3rick',
  },

  // Produto-âncora
  produto: {
    nome: 'ServarClin',
    descricao: 'IA conversacional para clínicas no WhatsApp',
    appUrl: 'https://servarclin.com.br',
  },
} as const;

/**
 * Valores não-negociáveis da ServarX (do briefing).
 * Aparecem no /quem-somos como cards.
 */
export const VALORES = [
  {
    titulo: 'Satisfação no atendimento',
    descricao:
      'Produto tão bom que a clínica pode trocar a atendente atual e o nível sobe — não desce.',
  },
  {
    titulo: 'Tier 1 sem desculpa',
    descricao:
      'Qualidade premium desde o primeiro código. Não tem "somos pequenos ainda".',
  },
  {
    titulo: 'LGPD nível bancário',
    descricao:
      'Dados de paciente cifrados com AES-256-GCM, audit log, RLS. Segurança que banco respeita.',
  },
  {
    titulo: 'IA que executa, não só responde',
    descricao:
      'Agente de verdade — agenda, cancela, confirma. Não é chatbot decorativo de FAQ.',
  },
] as const;

/**
 * Pricing do ServarClin (decidido em 2026-04-29 com base no relatório de
 * pricing strategy). Estrutura final dos 3 tiers + setup fee + garantia.
 */
export const PRICING = {
  setup: 499,
  setupNarrativa:
    'Serviço de Inteligência de Integração e Conformidade — engenheiros mapeando sua clínica',
  garantiaDias: 30,
  tiers: [
    {
      slug: 'basico',
      nome: 'ServarClin Básico',
      preco: 297,
      publico: 'Ideal para 1 a 2 médicos começando',
      medicosLimite: 2,
      mensagensLimite: 999999, // Ilimitado
      features: [
        'Atendimento 24h via chatbot (texto)',
        'Lembretes automáticos 24h antes',
        '1 número de WhatsApp dedicado',
        'Google Agenda (Visualização)',
        'Conversas ilimitadas',
        'Cifragem LGPD nível bancário',
      ],
      destaque: false,
      checkoutUrl: 'https://www.asaas.com/c/checkout-servarclin',
    },
    {
      slug: 'intermediario',
      nome: 'ServarClin Intermediário',
      preco: 597,
      publico: 'Clínicas em crescimento (mais escolhido)',
      medicosLimite: 10,
      mensagensLimite: 999999, // Ilimitado
      features: [
        'Tudo do Básico',
        'Atendimento 24h com ÁUDIO',
        'Agendamento automático no Google',
        'Qualificação automática de leads',
        'Inteligência de Retorno (Recorrência)',
        'Suporte prioritário',
      ],
      destaque: true,
      checkoutUrl: 'https://www.asaas.com/c/checkout-servarclin',
    },
    {
      slug: 'personalizado',
      nome: 'ServarClin Max',
      preco: 997,
      publico: 'Centros multidisciplinares e redes de clínicas',
      medicosLimite: 99, // Ilimitado
      mensagensLimite: 999999, // Ilimitado
      features: [
        'Tudo do Intermediário',
        'Gestão de Lista de Espera Automática',
        'Painel Multiclínicas (Unidades ilimitadas)',
        'Análise de Sentimento e Alerta de Crise',
        'Coleta de Reviews (Google Meu Negócio)',
        'Suporte VIP via WhatsApp (canal direto)',
        'Relatórios de BI e Conversão Avançados',
      ],
      destaque: false,
      checkoutUrl: 'https://www.asaas.com/c/checkout-servarclin',
    },
  ],
  addons: [
    { nome: 'Cadeira Extra', preco: 80, descricao: 'por médico extra além do limite do tier' },
  ],
} as const;

/**
 * Cidades-alvo do Quadrilátero Ferrífero (geo-first).
 * Usadas em SEO local e landing pages futuras.
 */
export const CIDADES_ALVO = [
  'Barão de Cocais',
  'Catas Altas',
  'Santa Bárbara',
  'João Monlevade',
  'Itabira',
  'Bom Jesus do Amparo',
  'Bela Vista de Minas',
  'São Domingos do Prata',
  'Nova Era',
  'Mariana',
  'Ouro Preto',
  'Itabirito',
  'Sabará',
  'Caeté',
] as const;
