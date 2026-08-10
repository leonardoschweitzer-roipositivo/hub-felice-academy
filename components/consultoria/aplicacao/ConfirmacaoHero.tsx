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
          Tudo certo! Sua candidatura à{' '}
          <span className="gold-grad">Consultoria Gestão F4</span> está com a gente.
        </h1>

        <p className="obg-lead reveal d2">
          Nossa equipe vai analisar as suas respostas e entrar em contato pelo{' '}
          <strong>WhatsApp</strong> para marcar a conversa de diagnóstico — é nela que avaliamos o
          encaixe e apresentamos o formato e o investimento da consultoria. Fique de olho no seu
          celular. 😊
        </p>

        <div className="obg-cta-row reveal d3">
          <a href={WHATSAPP_URL} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            Falar com a equipe agora <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
