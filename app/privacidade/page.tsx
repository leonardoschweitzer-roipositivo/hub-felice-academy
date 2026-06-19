import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { LegalPage } from '@/components/felice/LegalPage';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-felice-display',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-felice-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade da Felice Academy: como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a LGPD.',
};

export default function PrivacidadePage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <LegalPage title="Política de Privacidade" updatedAt="19 de junho de 2026">
        <p>
          A <strong>Felice Academy</strong> (CNPJ 25.307.550/0001-89) respeita a sua privacidade e
          está comprometida com a proteção dos dados pessoais que você compartilha conosco. Esta
          Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas
          informações, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados —
          LGPD).
        </p>

        <h2>1. Dados que coletamos</h2>
        <p>Podemos coletar as seguintes informações quando você interage com nossas páginas:</p>
        <ul>
          <li>
            <strong>Dados de identificação e contato:</strong> nome, e-mail, telefone e WhatsApp,
            fornecidos voluntariamente em formulários, cadastros e checkout.
          </li>
          <li>
            <strong>Dados de pagamento:</strong> processados de forma segura por plataformas de
            pagamento parceiras. Não armazenamos os dados completos do seu cartão.
          </li>
          <li>
            <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas e
            cookies, coletados automaticamente para fins estatísticos e de melhoria da experiência.
          </li>
        </ul>

        <h2>2. Como utilizamos seus dados</h2>
        <p>Os dados coletados são utilizados para:</p>
        <ul>
          <li>Processar compras e liberar o acesso aos produtos e materiais adquiridos;</li>
          <li>Enviar comunicações sobre seu pedido, suporte e novidades relevantes;</li>
          <li>Melhorar nossos produtos, conteúdos e a experiência de navegação;</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>

        <h2>3. Compartilhamento de dados</h2>
        <p>
          <strong>Não vendemos nem compartilhamos seu e-mail ou demais dados pessoais com
          terceiros para fins de marketing.</strong>{' '}
          Compartilhamos informações apenas com prestadores de serviço essenciais à operação (como
          plataformas de pagamento, hospedagem e e-mail) e quando exigido por lei ou por autoridade
          competente.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Utilizamos cookies e tecnologias semelhantes para lembrar suas preferências e medir o
          desempenho das páginas. Você pode desativar os cookies nas configurações do seu navegador,
          ciente de que isso pode afetar algumas funcionalidades.
        </p>

        <h2>5. Armazenamento e segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não
          autorizado, perda ou alteração. Mantemos as informações apenas pelo período necessário às
          finalidades descritas ou conforme exigido por lei.
        </p>

        <h2>6. Seus direitos</h2>
        <p>Nos termos da LGPD, você pode, a qualquer momento:</p>
        <ul>
          <li>Confirmar a existência de tratamento dos seus dados;</li>
          <li>Acessar, corrigir ou atualizar seus dados;</li>
          <li>Solicitar a exclusão dos seus dados;</li>
          <li>Revogar o consentimento e cancelar o recebimento de comunicações.</li>
        </ul>
        <p>
          Você pode cancelar sua inscrição em nossas comunicações a qualquer momento por meio do
          link presente nos e-mails ou entrando em contato conosco.
        </p>

        <h2>7. Contato</h2>
        <p>
          Para exercer seus direitos ou esclarecer dúvidas sobre esta Política, entre em contato pelo
          e-mail <a href="mailto:contato@feliceacademy.com.br">contato@feliceacademy.com.br</a>.
        </p>

        <h2>8. Alterações desta Política</h2>
        <p>
          Esta Política de Privacidade pode ser atualizada periodicamente. A versão vigente estará
          sempre disponível nesta página, com a data da última atualização indicada acima.
        </p>
      </LegalPage>
    </div>
  );
}
