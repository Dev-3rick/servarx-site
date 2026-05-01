import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

const LAST_UPDATE = '30 de abril de 2026';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Como a ServarX trata seus dados. Em português direto, sem juridiquês.',
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <article className="px-6 py-16 lg:px-12 lg:py-24">
      <div className="max-w-page-md mx-auto">
        <header className="mb-12 text-center">
          <p className="font-mono uppercase tracking-[0.18em] text-brand-cyan-600 text-xs mb-4">
            POLÍTICA DE PRIVACIDADE
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold text-brand-teal-800 leading-tight mb-6">
            A gente sabe que você odeia ler isso.
          </h1>
          <p className="text-lg text-brand-neutral-muted">
            Por isso essa aqui tá em português puro. Última atualização: <strong>{LAST_UPDATE}</strong>.
          </p>
        </header>

        <div className="space-y-8 text-brand-neutral-muted leading-relaxed">

          <p className="text-base lg:text-lg">
            Se ficar dúvida, fala com a gente em{' '}
            <a href={`mailto:${SITE.email.lgpd}`} className="text-brand-teal-800 font-semibold hover:underline">
              {SITE.email.lgpd}
            </a>.
          </p>

          <Section title="1. Quem somos">
            <p>A <strong>ServarX</strong> é uma empresa brasileira que constrói produtos de IA pra ajudar negócios de serviço a atenderem melhor quem precisa deles. Nosso primeiro produto é o <strong>ServarClin</strong>, voltado para clínicas médicas.</p>
            <ul className="space-y-1.5 mt-4">
              <li>• <strong>Responsável:</strong> {SITE.empresa.razaoSocial}, CNPJ {SITE.empresa.cpfOuCnpj}</li>
              <li>• <strong>Endereço:</strong> {SITE.endereco.full}</li>
              <li>• <strong>Encarregado pelo Tratamento de Dados (DPO):</strong> Erick Henrique Caetano de Almeida — <a href={`mailto:${SITE.email.lgpd}`} className="text-brand-teal-800 hover:underline">{SITE.email.lgpd}</a></li>
            </ul>
          </Section>

          <Section title="2. O que essa política cobre">
            <p>Este documento se aplica ao site <strong>servarx.com.br</strong> e tudo que acontece nele: navegação, formulários, lead magnets (calculadora e checklist), cookies, blog e contato pelo WhatsApp ligado ao site.</p>
            <p><strong>Não</strong> cobre o uso do produto ServarClin dentro de uma clínica contratante — esse tem política separada que vai junto do contrato de prestação de serviço.</p>
          </Section>

          <Section title="3. Quais dados a gente coleta">
            <h3 className="font-bold text-brand-teal-800 mb-2 mt-4">3.1 Dados que você nos dá direto</h3>
            <p>Quando você preenche um formulário (contato, calculadora, parceiros fundadores), a gente coleta:</p>
            <ul className="space-y-1 mt-2 ml-4 list-disc">
              <li>Nome</li>
              <li>Telefone / WhatsApp</li>
              <li>Email (em lead magnet)</li>
              <li>Cidade</li>
              <li>Especialidade / número de médicos da clínica (quando aplicável)</li>
              <li>Mensagem livre (se você escrever)</li>
            </ul>

            <h3 className="font-bold text-brand-teal-800 mb-2 mt-6">3.2 Dados coletados automaticamente (cookies)</h3>
            <p>Quando você navega no site e <strong>aceita os cookies</strong> no banner: páginas visitadas, tempo na página, scroll, cliques (heatmap), origem da visita, dispositivo/navegador, cidade aproximada (via IP).</p>
            <p>Se você <strong>recusa os cookies</strong>, coletamos apenas o estritamente necessário pro site funcionar.</p>

            <h3 className="font-bold text-brand-teal-800 mb-2 mt-6">3.3 O que NÃO coletamos</h3>
            <ul className="space-y-1 ml-4 list-disc">
              <li>Dados de saúde de pacientes (eles não passam por aqui)</li>
              <li>Dados financeiros do seu cartão (pagamento via gateway PCI-DSS)</li>
              <li>Dados de criança ou adolescente</li>
            </ul>
          </Section>

          <Section title="4. Pra que usamos esses dados">
            <p>Cada finalidade tem uma <strong>base legal LGPD</strong> declarada:</p>
            <div className="overflow-x-auto mt-4 -mx-2 px-2">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-start py-2 px-3 text-brand-teal-800">Finalidade</th>
                    <th className="text-start py-2 px-3 text-brand-teal-800">Base legal LGPD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border"><td className="py-2 px-3">Responder seu contato</td><td className="py-2 px-3">Procedimentos pré-contratuais (art. 7º, V)</td></tr>
                  <tr className="border-b border-border"><td className="py-2 px-3">Enviar material baixado</td><td className="py-2 px-3">Consentimento (art. 7º, I)</td></tr>
                  <tr className="border-b border-border"><td className="py-2 px-3">Email de follow-up educativo</td><td className="py-2 px-3">Consentimento (art. 7º, I)</td></tr>
                  <tr className="border-b border-border"><td className="py-2 px-3">Analytics (entender uso do site)</td><td className="py-2 px-3">Legítimo interesse (art. 7º, IX)</td></tr>
                  <tr className="border-b border-border"><td className="py-2 px-3">Anúncios de remarketing</td><td className="py-2 px-3">Consentimento (cookie banner)</td></tr>
                  <tr><td className="py-2 px-3">Obrigações legais e fiscais</td><td className="py-2 px-3">Cumprimento de obrigação legal (art. 7º, II)</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="5. Com quem compartilhamos">
            <p>A ServarX <strong>não vende seus dados</strong>. Mas usa os seguintes serviços de terceiros que tratam dados em nosso nome:</p>
            <ul className="space-y-1 mt-3 ml-4 list-disc text-sm">
              <li><strong>Vercel</strong> (hospedagem) — EUA, com Cláusulas Contratuais Padrão</li>
              <li><strong>Resend</strong> (email transacional) — EUA</li>
              <li><strong>Google Analytics 4</strong> (análise de tráfego) — Brasil + EUA</li>
              <li><strong>Microsoft Clarity</strong> (heatmap) — Brasil + EUA</li>
              <li><strong>Meta Pixel</strong> (remarketing) — Brasil + EUA</li>
              <li><strong>Google Ads Tag</strong> (remarketing) — Brasil + EUA</li>
              <li><strong>Google Sheets</strong> (lista de leads) — Brasil + EUA</li>
              <li><strong>Z-API</strong> (mensagens WhatsApp) — Brasil</li>
              <li><strong>Upstash Redis</strong> (anti-spam rate-limit) — EUA</li>
              <li><strong>Cloudflare reCAPTCHA</strong> (anti-bot) — EUA</li>
            </ul>
            <p className="mt-3">A gente compartilha dados apenas: (1) quando <strong>você autoriza</strong>, (2) quando a <strong>lei obriga</strong>, ou (3) quando estritamente necessário pra <strong>executar um contrato</strong> com você.</p>
          </Section>

          <Section title="6. Por quanto tempo guardamos">
            <ul className="space-y-1.5 ml-4 list-disc">
              <li>Lead que não virou cliente: <strong>24 meses</strong> após último contato</li>
              <li>Email de quem baixou lead magnet: até descadastrar (link em todo email)</li>
              <li>Logs de navegação (analytics): <strong>14 meses</strong> (limite GA4)</li>
              <li>Gravação de sessão (Clarity): <strong>30 dias</strong></li>
              <li>Dados fiscais: <strong>5 anos</strong> (obrigação legal)</li>
            </ul>
            <p className="mt-3">Após esse prazo, a gente apaga ou anonimiza.</p>
          </Section>

          <Section title="7. Seus direitos (LGPD art. 18)">
            <p>Você tem direito de:</p>
            <ul className="space-y-1 mt-2 ml-4 list-disc">
              <li>Confirmar se a ServarX trata dados seus</li>
              <li>Acessar seus dados (pedir cópia)</li>
              <li>Corrigir dados incorretos ou incompletos</li>
              <li>Anonimizar, bloquear ou eliminar dados desnecessários</li>
              <li>Levar seus dados pra outro lugar (portabilidade)</li>
              <li>Revogar consentimento dado pra finalidades específicas</li>
              <li>Saber com quem a gente compartilhou seus dados</li>
              <li>Opor-se ao tratamento baseado em legítimo interesse</li>
            </ul>
            <p className="mt-3"><strong>Como exercer:</strong> manda email pra <a href={`mailto:${SITE.email.lgpd}`} className="text-brand-teal-800 hover:underline">{SITE.email.lgpd}</a>. Respondemos em até <strong>15 dias</strong> corridos.</p>
            <p>Se você acha que a gente errou, pode reclamar à <a href="https://www.gov.br/anpd/" target="_blank" rel="noopener noreferrer" className="text-brand-teal-800 hover:underline">ANPD</a> — mas tenta com a gente primeiro, é mais rápido.</p>
          </Section>

          <Section title="8. Cookies — gerenciar a qualquer momento">
            <p>Categorias do banner:</p>
            <ul className="space-y-1 mt-2 ml-4 list-disc">
              <li><strong>Necessários</strong> (sempre ativos): fazem o site funcionar</li>
              <li><strong>Analytics</strong> (opcional): GA4, Microsoft Clarity</li>
              <li><strong>Marketing</strong> (opcional): Meta Pixel, Google Ads Tag</li>
            </ul>
            <p className="mt-3">Você pode mudar suas preferências a qualquer momento clicando em <Link href="/#cookies" className="text-brand-teal-800 hover:underline">"Gerenciar cookies"</Link> no rodapé.</p>
          </Section>

          <Section title="9. Segurança">
            <ul className="space-y-1 ml-4 list-disc">
              <li>HTTPS obrigatório (TLS 1.3) em todas as páginas</li>
              <li>Cabeçalhos de segurança (HSTS, CSP, X-Frame-Options)</li>
              <li>Cofre de credenciais — nenhuma chave de API no código</li>
              <li>Rate-limit anti-bot em formulários</li>
              <li>Criptografia em repouso nos serviços de armazenamento</li>
            </ul>
            <p className="mt-3">Se rolar incidente que afete seus dados, a gente avisa você e a ANPD em até <strong>72 horas</strong> (LGPD art. 48).</p>
          </Section>

          <Section title="10. Crianças e adolescentes">
            <p>A ServarX não direciona produtos pra menores de 18 anos e não coleta dados de crianças e adolescentes.</p>
          </Section>

          <Section title="11. Mudanças nessa política">
            <p>Quando a gente mudar algo importante, atualiza a "Última atualização" no topo. Se for mudança significativa, manda email pra quem deu consentimento.</p>
          </Section>

          <Section title="12. Contato">
            <ul className="space-y-1 ml-4 list-disc">
              <li><strong>Email LGPD:</strong> <a href={`mailto:${SITE.email.lgpd}`} className="text-brand-teal-800 hover:underline">{SITE.email.lgpd}</a></li>
              <li><strong>DPO:</strong> Erick Henrique Caetano de Almeida</li>
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
