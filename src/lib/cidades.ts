/**
 * Dados das cidades-alvo do Quadrilátero Ferrífero / Zona Metalúrgica / RMBH.
 * Usado nas landing pages de SEO local e no middleware de geo-redirect.
 */

export type Cidade = {
  slug: string;
  nome: string;
  /** Nomes que a Vercel pode retornar no header x-vercel-ip-city */
  vercelNames: string[];
  regiao: string;
  estado: 'MG';
  /** Frase de abertura personalizada para a cidade */
  headline: string;
  subheadline: string;
};

export const CIDADES: Cidade[] = [
  {
    slug: 'barao-de-cocais',
    nome: 'Barão de Cocais',
    vercelNames: ['Barao De Cocais', 'Barao de Cocais', 'Barão de Cocais'],
    regiao: 'Quadrilátero Ferrífero',
    estado: 'MG',
    headline: 'A clínica de Barão de Cocais que atende às 22h sem secretária extra.',
    subheadline:
      'A ServarX.IA confirma consultas, reduz faltas e nunca deixa um paciente sem resposta — mesmo depois que sua equipe foi embora.',
  },
  {
    slug: 'catas-altas',
    nome: 'Catas Altas',
    vercelNames: ['Catas Altas'],
    regiao: 'Quadrilátero Ferrífero',
    estado: 'MG',
    headline: 'Sua clínica em Catas Altas nunca mais perde uma marcação.',
    subheadline:
      'A ServarX.IA atende pacientes no WhatsApp 24h por dia — agenda, confirma e lembra sem você precisar ligar para ninguém.',
  },
  {
    slug: 'santa-barbara',
    nome: 'Santa Bárbara',
    vercelNames: ['Santa Barbara', 'Santa Bárbara'],
    regiao: 'Quadrilátero Ferrífero',
    estado: 'MG',
    headline: 'IA de agendamento para clínicas de Santa Bárbara, MG.',
    subheadline:
      'Do "perdemos mais uma marcação" para "a IA confirmou 23 consultas enquanto você dormia" — sem contratar mais ninguém.',
  },
  {
    slug: 'joao-monlevade',
    nome: 'João Monlevade',
    vercelNames: ['Joao Monlevade', 'João Monlevade'],
    regiao: 'Vale do Aço',
    estado: 'MG',
    headline: 'A secretária virtual que João Monlevade precisava.',
    subheadline:
      'Atendimento 24h no WhatsApp para centros médicos de João Monlevade — IA que agenda, confirma e reduz no-show.',
  },
  {
    slug: 'itabira',
    nome: 'Itabira',
    vercelNames: ['Itabira'],
    regiao: 'Vale do Aço',
    estado: 'MG',
    headline: 'Clínicas de Itabira: parem de perder pacientes fora do horário.',
    subheadline:
      'A ServarX.IA responde no WhatsApp em segundos, 24h por dia — sua clínica em Itabira atendendo mesmo quando a recepção está fechada.',
  },
  {
    slug: 'bom-jesus-do-amparo',
    nome: 'Bom Jesus do Amparo',
    vercelNames: ['Bom Jesus Do Amparo', 'Bom Jesus do Amparo'],
    regiao: 'Quadrilátero Ferrífero',
    estado: 'MG',
    headline: 'IA de agendamento para clínicas de Bom Jesus do Amparo.',
    subheadline:
      'Automatize o atendimento da sua clínica em Bom Jesus do Amparo — sem pagar por licença extra por médico.',
  },
  {
    slug: 'bela-vista-de-minas',
    nome: 'Bela Vista de Minas',
    vercelNames: ['Bela Vista De Minas', 'Bela Vista de Minas'],
    regiao: 'Vale do Aço',
    estado: 'MG',
    headline: 'Sua clínica em Bela Vista de Minas atendendo 24h no WhatsApp.',
    subheadline:
      'A IA da ServarX agenda, confirma e lembra seus pacientes automaticamente — para centros médicos de Bela Vista de Minas.',
  },
  {
    slug: 'sao-domingos-do-prata',
    nome: 'São Domingos do Prata',
    vercelNames: ['Sao Domingos Do Prata', 'São Domingos do Prata'],
    regiao: 'Quadrilátero Ferrífero',
    estado: 'MG',
    headline: 'IA para agendamento de clínicas em São Domingos do Prata.',
    subheadline:
      'Automatize o WhatsApp da sua clínica em São Domingos do Prata — sem secretária extra, sem horário de corte.',
  },
  {
    slug: 'nova-era',
    nome: 'Nova Era',
    vercelNames: ['Nova Era'],
    regiao: 'Vale do Aço',
    estado: 'MG',
    headline: 'A IA que colocou as clínicas de Nova Era no século XXI.',
    subheadline:
      'Atendimento 24h no WhatsApp, agendamento automático e zero ligações perdidas — para centros médicos de Nova Era.',
  },
  {
    slug: 'mariana',
    nome: 'Mariana',
    vercelNames: ['Mariana'],
    regiao: 'Zona Metalúrgica',
    estado: 'MG',
    headline: 'Clínicas de Mariana: a IA que atende quando sua equipe não está.',
    subheadline:
      'A ServarX.IA responde pacientes em Mariana 24h por dia — agenda, confirma e reduz no-show sem intervenção humana.',
  },
  {
    slug: 'ouro-preto',
    nome: 'Ouro Preto',
    vercelNames: ['Ouro Preto'],
    regiao: 'Zona Metalúrgica',
    estado: 'MG',
    headline: 'IA de agendamento para centros médicos de Ouro Preto.',
    subheadline:
      'Automatize o atendimento da sua clínica em Ouro Preto — WhatsApp 24h, Google Calendar integrado, LGPD compliant.',
  },
  {
    slug: 'itabirito',
    nome: 'Itabirito',
    vercelNames: ['Itabirito'],
    regiao: 'Quadrilátero Ferrífero',
    estado: 'MG',
    headline: 'Sua clínica em Itabirito nunca perde um paciente às 23h.',
    subheadline:
      'A IA da ServarX atende no WhatsApp, confirma consultas e avisa sobre retornos — para centros médicos de Itabirito.',
  },
  {
    slug: 'sabara',
    nome: 'Sabará',
    vercelNames: ['Sabara', 'Sabará'],
    regiao: 'Região Metropolitana de BH',
    estado: 'MG',
    headline: 'IA para agendamento de clínicas em Sabará, Grande BH.',
    subheadline:
      'Atendimento 24h no WhatsApp para centros médicos de Sabará — sem secretária extra, implantação em menos de 24h.',
  },
  {
    slug: 'caete',
    nome: 'Caeté',
    vercelNames: ['Caete', 'Caeté'],
    regiao: 'Região Metropolitana de BH',
    estado: 'MG',
    headline: 'Clínicas de Caeté: IA que atende 24h no WhatsApp.',
    subheadline:
      'A ServarX.IA agenda, confirma e lembra seus pacientes em Caeté — sem custo de licença por médico, sem contrato de fidelidade.',
  },
];

function normalize(str: string): string {
  return str
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
}

export function findCidadeByVercelCity(vercelCity: string | null | undefined): Cidade | undefined {
  if (!vercelCity) return undefined;
  const decoded = decodeURIComponent(vercelCity);
  const normalized = normalize(decoded);
  return CIDADES.find((c) => c.vercelNames.some((vn) => normalize(vn) === normalized));
}

export function findCidadeBySlug(slug: string): Cidade | undefined {
  return CIDADES.find((c) => c.slug === slug);
}
