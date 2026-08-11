import Link from 'next/link';
import { WHATSAPP_URL, CURSO_URL } from '../obrigado/config';

/* Página de confirmação (só HERO): recebemos os dados, o Dr. Sócrates
   entra em contato em breve. Reusa o fundo de pontinhos do hero da
   obrigado (.obg-hero / .obg-hero-bg). */
export function ConfirmacaoHero() {
  return (
    <header className="obg-hero cons-confirma">
      <div className="obg-hero-bg" aria-hidden />
      <div className="wrap obg-hero-inner">
        <span className="obg-badge reveal">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Recebemos os seus dados
        </span>

        <h1 className="reveal d1">
          Falta um passo: <span className="gold-grad">envie a mensagem</span> no WhatsApp.
        </h1>

        {/* O quiz abre o WhatsApp numa aba nova com tudo preenchido — só o
            envio depende da pessoa. Por isso a página pede o envio em vez de
            dizer "aguarde o contato". */}
        <p className="obg-lead reveal d2">
          Abrimos o WhatsApp em outra aba com as suas respostas prontas — <strong>é só apertar
          enviar</strong> e o Dr. Sócrates já recebe tudo para combinar o horário da sua consultoria
          gratuita de 1 hora. Não abriu?{' '}
          <a className="obg-inline-link" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Abra por aqui
          </a>
          .
        </p>

        <div className="obg-cta-row reveal d3">
          <Link href={CURSO_URL} className="btn btn-primary btn-lg">
            Acessar minhas aulas do Gestão F4 <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
