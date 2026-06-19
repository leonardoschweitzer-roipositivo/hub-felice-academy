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
  title: 'Termos de Uso',
  description:
    'Termos de Uso da Felice Academy: condições para acesso e utilização dos nossos produtos, materiais e serviços digitais.',
};

export default function TermosPage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <LegalPage title="Termos de Uso" updatedAt="19 de junho de 2026">
        <p>
          Estes Termos de Uso regem o acesso e a utilização das páginas, produtos, materiais e
          serviços digitais oferecidos pela <strong>Felice Academy</strong> (CNPJ
          25.307.550/0001-89). Ao acessar nossas páginas ou adquirir nossos produtos, você declara
          que leu, compreendeu e concorda com estas condições.
        </p>

        <h2>1. Objeto</h2>
        <p>
          A Felice Academy disponibiliza conteúdos educacionais, ferramentas de gestão, mentorias e
          materiais voltados a profissionais da área odontológica. O acesso a cada produto está
          condicionado à sua aquisição e ao cumprimento destes Termos.
        </p>

        <h2>2. Cadastro e acesso</h2>
        <p>
          Para adquirir e acessar nossos produtos, você deve fornecer informações verdadeiras,
          completas e atualizadas. Você é responsável por manter a confidencialidade dos seus dados
          de acesso e por todas as atividades realizadas em sua conta.
        </p>

        <h2>3. Licença de uso e propriedade intelectual</h2>
        <p>
          Todo o conteúdo — incluindo textos, vídeos, materiais, scripts, POPs, marcas e layout — é
          de propriedade da Felice Academy ou licenciado a ela, sendo protegido pela legislação de
          direitos autorais e propriedade intelectual.
        </p>
        <p>
          A aquisição concede a você uma licença <strong>pessoal, intransferível e não exclusiva</strong>{' '}
          de uso. É <strong>vedada</strong> a reprodução, distribuição, revenda, compartilhamento ou
          divulgação dos materiais a terceiros sem autorização prévia e por escrito.
        </p>

        <h2>4. Pagamento</h2>
        <p>
          Os pagamentos são processados por plataformas parceiras seguras. Os valores, formas de
          pagamento e condições de parcelamento são informados na página de cada produto no momento
          da compra.
        </p>

        <h2>5. Direito de arrependimento e reembolso</h2>
        <p>
          Conforme o art. 49 do Código de Defesa do Consumidor, você pode solicitar o cancelamento da
          compra em até <strong>7 (sete) dias corridos</strong> a partir da data de aquisição,
          recebendo o reembolso integral do valor pago.
        </p>

        <h2>6. Aviso legal sobre resultados</h2>
        <p>
          Nossos produtos têm caráter educacional e de apoio à gestão. <strong>Não garantimos a
          obtenção de resultados específicos.</strong> Qualquer referência a desempenho de uma
          estratégia, clínica ou negócio não deve ser interpretada como garantia de resultado. Os
          resultados dependem de fatores individuais, do mercado e da dedicação de cada
          profissional.
        </p>

        <h2>7. Conduta do usuário</h2>
        <p>É vedado utilizar nossos produtos e páginas para:</p>
        <ul>
          <li>Praticar atos ilícitos ou que violem direitos de terceiros;</li>
          <li>Copiar, distribuir ou comercializar indevidamente os conteúdos;</li>
          <li>Comprometer a segurança, a integridade ou o funcionamento das plataformas.</li>
        </ul>

        <h2>8. Limitação de responsabilidade</h2>
        <p>
          A Felice Academy não se responsabiliza por danos decorrentes do uso inadequado dos
          materiais, por indisponibilidades temporárias de plataformas de terceiros ou por decisões
          tomadas com base no conteúdo, que possui natureza informativa.
        </p>

        <h2>9. Alterações dos Termos</h2>
        <p>
          Estes Termos podem ser atualizados a qualquer momento. A versão vigente estará sempre
          disponível nesta página, com a data da última atualização indicada acima. O uso contínuo
          após alterações implica concordância com os novos termos.
        </p>

        <h2>10. Foro</h2>
        <p>
          Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca da sede da
          Felice Academy para dirimir eventuais controvérsias, com renúncia a qualquer outro, por
          mais privilegiado que seja.
        </p>

        <h2>11. Contato</h2>
        <p>
          Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail{' '}
          <a href="mailto:contato@feliceacademy.com.br">contato@feliceacademy.com.br</a>.
        </p>
      </LegalPage>
    </div>
  );
}
