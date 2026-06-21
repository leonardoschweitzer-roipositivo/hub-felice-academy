import Link from 'next/link';
import { ACESSO_URL } from '../obrigado/config';

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
          Tudo certo! Seu pedido de <span className="gold-grad">consultoria</span> está com a gente.
        </h1>

        <p className="obg-lead reveal d2">
          O Dr. Sócrates e a equipe vão analisar as suas respostas e entrar em contato pelo{' '}
          <strong>WhatsApp</strong> em breve para combinar o melhor horário da sua consultoria
          gratuita de 1 hora. Fique de olho no seu celular. 😊
        </p>

        <div className="obg-cta-row reveal d3">
          <Link href={ACESSO_URL} className="btn btn-primary btn-lg">
            Assistir à masterclass <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
