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
  whatsapp: '+5531000000000', // TODO substituir pelo número dedicado da ServarX
  whatsappText:
    'Olá! Vim do site da ServarX e quero saber mais sobre o ServarClin.',
  email: {
    contato: 'contato@servarx.com.br',
    suporte: 'suporte@servarx.com.br',
    lgpd: 'lgpd@servarx.com.br',
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
    razaoSocial: 'Erick Henrique [SOBRENOME]', // placeholder até MEI
    cpfOuCnpj: 'CPF [XXX.XXX.XXX-XX]', // placeholder
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
    appUrl: 'https://app.servarx.com.br',
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
