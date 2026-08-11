import { WHATSAPP_URL } from '../obrigado/config';

/* Confirmação do agendamento: o quiz abriu o WhatsApp numa aba nova com
   tudo preenchido, então esta página pede o ENVIO da mensagem em vez de
   dizer "aguarde o contato". Sem botão de "acessar minhas aulas" — o
   acesso ao curso chega por e-mail, não por uma área do aluno.
   Reusa o fundo de pontinhos do hero da obrigado (.obg-hero-bg). */
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

        <p className="obg-lead reveal d2">
          Abrimos o WhatsApp em outra aba com as suas respostas prontas — <strong>é só apertar
          enviar</strong> e a equipe já recebe tudo para combinar o horário da sua consultoria
          gratuita de 1 hora com o Dr. Sócrates.
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
