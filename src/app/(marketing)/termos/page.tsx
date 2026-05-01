import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

const LAST_UPDATE = '30 de abril de 2026';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso do site ServarX. Em português direto.',
  robots: { index: true, follow: true },
};

export default function TermosPage() {
  return (
    <article className="px-6 py-16 lg:px-12 lg:py-24">
      <div className="max-w-page-md mx-auto">
        <header className="mb-12 text-center">
          <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs mb-4">
            TERMOS DE USO
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold text-brand-teal-800 leading-tight mb-6">
            As regras de quem usa o site.
          </h1>
          <p className="text-lg text-brand-neutral-muted">
            Última atualização: <strong>{LAST_UPDATE}</strong>.
          </p>
        </header>

        <div className="space-y-8 text-brand-neutral-muted leading-relaxed">

          <p className="text-base lg:text-lg">
            Você tá no site institucional da ServarX (servarx.com.br). Esses termos valem pra
            qualquer um que abre o site, usa formulários, baixa material ou clica em "falar com
            a gente". Se não concorda com algo aqui, <strong>não use o site</strong>. Dúvidas:{' '}
            <a href={`mailto:${SITE.email.contato}`} className="text-brand-teal-800 font-semibold hover:underline">
              {SITE.email.contato}
            </a>.
          </p>

          <Section title="1. Quem é a ServarX">
            <p>Empresa brasileira que desenvolve software de IA pra automatizar atendimento em negócios de serviço.</p>
            <ul className="space-y-1.5 mt-3 ml-4 list-disc">
              <li><strong>Responsável:</strong> {SITE.empresa.razaoSocial}, CNPJ {SITE.empresa.cpfOuCnpj}</li>
              <li><strong>Sede:</strong> {SITE.endereco.full}</li>
            </ul>
          </Section>

          <Section title="2. O que esses termos cobrem">
            <p>Cobrem o site servarx.com.br: navegação, formulários, lead magnets, blog, materiais.</p>
            <p><strong>Não cobrem</strong> o uso do produto ServarClin dentro de uma clínica contratante — esse tem contrato próprio. Se você é cliente, leia o contrato que recebeu.</p>
          </Section>

          <Section title="3. Quem pode usar o site">
            <p>Qualquer pessoa maior de 18 anos. Se for menor, fala com seu responsável.</p>
            <p>A ServarX se reserva o direito de bloquear acesso (via IP ou outro identificador) de quem usa o site pra:</p>
            <ul className="space-y-1 mt-2 ml-4 list-disc">
              <li>Spammar formulários</li>
              <li>Tentar vulnerabilidade ou exploit</li>
              <li>Copiar conteúdo pra revender ou competir</li>
              <li>Ofender ou atacar a equipe</li>
            </ul>
          </Section>

          <Section title="4. O que você pode fazer">
            <ul className="space-y-1 ml-4 list-disc">
              <li>Ler tudo — conteúdo é grátis e foi feito pra ajudar</li>
              <li>Compartilhar links e snippets curtos com crédito ("via servarx.com.br")</li>
              <li>Baixar lead magnets (checklist, calculadora) e usar pra estudar</li>
              <li>Mandar contato se quer saber mais ou virar cliente</li>
            </ul>
          </Section>

          <Section title="5. O que você NÃO pode fazer">
            <ul className="space-y-1 ml-4 list-disc">
              <li>Copiar conteúdo inteiro pra publicar em outro lugar (artigos, e-books, vídeos) — fala com a gente que provavelmente liberamos</li>
              <li>Usar o nome ou logo da ServarX sem autorização escrita</li>
              <li>Engenharia reversa ou cópia técnica de qualquer parte do site</li>
              <li>Carregar arquivos maliciosos ou enviar dados que não são seus</li>
              <li>Tentar acessar áreas privadas ou contornar autenticação</li>
            </ul>
          </Section>

          <Section title="6. Lead magnets e materiais grátis">
            <p>A calculadora, o checklist e qualquer material grátis são publicados <strong>"como estão"</strong> — feitos com cuidado, mas sem garantia formal de que serve pra todo caso. Use como referência, não como assessoria profissional substituta.</p>
            <p>Se você usa o conteúdo na sua clínica, <strong>a responsabilidade pelas decisões é sua</strong>. A ServarX não responde por:</p>
            <ul className="space-y-1 mt-2 ml-4 list-disc">
              <li>Resultados financeiros que você obtém ou deixa de obter</li>
              <li>Decisões clínicas (não somos médicos)</li>
              <li>Decisões legais (não somos advogados)</li>
            </ul>
          </Section>

          <Section title="7. Conteúdo gerado por IA">
            <p>O blog da ServarX usa apoio de inteligência artificial pra produzir os posts. <strong>Todo post é revisado por humanos antes de publicar</strong>, mas erros podem passar. Se você ver algo errado, manda email <a href={`mailto:${SITE.email.contato}`} className="text-brand-teal-800 hover:underline">{SITE.email.contato}</a> que a gente corrige.</p>
          </Section>

          <Section title="8. Propriedade intelectual">
            <p>Tudo que aparece no site (logo, textos, imagens, ilustrações, código) é da ServarX ou licenciado pra ela. Direitos autorais protegem.</p>
            <p>Você pode citar trechos curtos com link de volta. Pra usar em larga escala, pede autorização: <a href={`mailto:${SITE.email.contato}`} className="text-brand-teal-800 hover:underline">{SITE.email.contato}</a>.</p>
          </Section>

          <Section title="9. Links pra terceiros">
            <p>O site tem links pra outras páginas (Instagram, LinkedIn, fontes citadas no blog, parceiros). A ServarX <strong>não controla</strong> o que tem nesses sites — a responsabilidade pelo conteúdo é deles.</p>
          </Section>

          <Section title="10. Modificações">
            <p>A gente pode mudar esses termos quando precisar. Quando rolar mudança importante, atualizamos a "Última atualização" no topo. Continuar usando o site depois da mudança = aceite dos novos termos.</p>
          </Section>

          <Section title="11. Limitação de responsabilidade">
            <p>O site é entregue <strong>"como está"</strong>. A gente faz o possível pra manter no ar, rápido e seguro, mas:</p>
            <ul className="space-y-1 mt-2 ml-4 list-disc">
              <li>Pode cair ocasionalmente (manutenção, problema do hospedeiro)</li>
              <li>Pode ter erro ocasional (digitação, link quebrado, info desatualizada)</li>
              <li>Pode mudar funcionalidades sem avisar</li>
            </ul>
            <p className="mt-3">A ServarX não se responsabiliza por:</p>
            <ul className="space-y-1 mt-2 ml-4 list-disc">
              <li>Lucros cessantes pelo site estar fora do ar</li>
              <li>Danos indiretos por uso de informação do blog ou lead magnet</li>
              <li>Decisões que você tomar baseadas em conteúdo do site</li>
            </ul>
            <p className="mt-3">Para casos de negligência grave ou má fé comprovada, a responsabilidade segue o Código Civil Brasileiro.</p>
          </Section>

          <Section title="12. Cancelamento de relacionamento">
            <p>Você pode parar de usar o site a qualquer momento. Se quer apagar seus dados, pede pra <a href={`mailto:${SITE.email.lgpd}`} className="text-brand-teal-800 hover:underline">{SITE.email.lgpd}</a> (<Link href="/privacidade" className="text-brand-teal-800 hover:underline">Política de Privacidade</Link>, seção 7).</p>
            <p>A ServarX pode encerrar acesso de quem viola esses termos, sem aviso prévio em casos graves.</p>
          </Section>

          <Section title="13. Foro">
            <p>Em qualquer disputa não resolvida diretamente, fica eleito o foro da comarca de <strong>Barão de Cocais, MG, Brasil</strong>, com renúncia a qualquer outro.</p>
            <p>A legislação aplicável é a do Brasil, em especial:</p>
            <ul className="space-y-1 mt-2 ml-4 list-disc">
              <li>Lei Geral de Proteção de Dados (LGPD) — Lei 13.709/2018</li>
              <li>Marco Civil da Internet — Lei 12.965/2014</li>
              <li>Código de Defesa do Consumidor — Lei 8.078/1990 (quando aplicável)</li>
            </ul>
          </Section>

          <Section title="14. Contato">
            <ul className="space-y-1 ml-4 list-disc">
              <li><strong>Geral:</strong> <a href={`mailto:${SITE.email.contato}`} className="text-brand-teal-800 hover:underline">{SITE.email.contato}</a></li>
              <li><strong>LGPD/dados:</strong> <a href={`mailto:${SITE.email.lgpd}`} className="text-brand-teal-800 hover:underline">{SITE.email.lgpd}</a></li>
              <li><strong>Suporte (clientes ServarClin):</strong> <a href={`mailto:${SITE.email.suporte}`} className="text-brand-teal-800 hover:underline">{SITE.email.suporte}</a></li>
              <li><strong>Endereço:</strong> {SITE.endereco.full}</li>
            </ul>
          </Section>

        </div>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl lg:text-2xl font-bold text-brand-teal-800 mb-4 leading-tight">
        {title}
      </h2>
      <div className="space-y-3 text-base">{children}</div>
    </section>
  );
}
