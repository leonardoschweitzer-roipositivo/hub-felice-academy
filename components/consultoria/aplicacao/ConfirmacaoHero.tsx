import { WHATSAPP_URL } from './config';

/* Confirmação da candidatura: recebemos os dados, a equipe entra em
   contato pelo WhatsApp. Reusa o fundo de pontinhos do hero da página
   de obrigado (.obg-hero / .obg-hero-bg). */
export function ConfirmacaoHero() {
  return (
    <header className="obg-hero cons-confirma">
      <div className="obg-hero-bg" aria-hidden />
      <div className="wrap obg-hero-inner">
        <span className="obg-badge reveal">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Recebemos a sua candidatura
        </span>

        <h1 className="reveal d1">
          Falta um passo: <span className="gold-grad">envie a mensagem</span> no WhatsApp.
        </h1>

        {/* O quiz abre o WhatsApp numa aba nova com tudo preenchido — só o
            envio depende da pessoa. Por isso a página pede o envio em vez de
            dizer "aguarde o contato". */}
        <p className="obg-lead reveal d2">
          Abrimos o WhatsApp em outra aba com a sua candidatura pronta — <strong>é só apertar
          enviar</strong> e a equipe já recebe tudo para marcar a conversa de diagnóstico, em que
          avaliamos o encaixe e apresentamos o formato e o investimento da consultoria.
        </p>

        <div className="obg-cta-row reveal d3">
          <a href={WHATSAPP_URL} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            Não abriu? Abrir o WhatsApp <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
