import { CtaConsultoria } from './Cta';
import { ACESSO_URL, VIDEO_URL } from './config';

/* Benefícios (2 palavras) que desfilam na esteira do rodapé do hero. */
const MARQUEE_ITEMS = [
  'Consultoria gratuita',
  'Da teoria à sala',
  'Seu próximo passo',
  'Dúvidas resolvidas',
  'Plano de ação',
  'Acesso liberado',
  'Mentoria direta',
  'Referência na região',
];

/* Hero pós-acesso: confirma o acesso à masterclass e direciona ao único
   objetivo da página — agendar a consultoria. Copy neutra (serve para
   acesso grátis e Premium); assistir à masterclass fica como link
   secundário discreto. */
export function HeroSucesso() {
  return (
    <header className="obg-hero">
      <div className="obg-hero-bg" aria-hidden />
      <div className="wrap obg-hero-inner">
        <span className="obg-badge reveal">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Acesso liberado
        </span>

        <h1 className="reveal d1">
          Pronto! Seu acesso à{' '}
          <span className="gold-grad">Masterclass Zigomático Descomplicado</span> está liberado.
        </h1>

        <p className="obg-lead reveal d2">
          Você acaba de dar o primeiro passo para deixar de encaminhar o caso de maior valor e
          começar a operá-lo. Mas deixa eu te falar uma verdade: assistir à masterclass abre o
          caminho — <strong>quem percorre é você</strong>. Por isso, eu incluí o passo mais
          importante:
        </p>

        {VIDEO_URL ? (
          <div className="obg-video reveal d3">
            <iframe
              src={VIDEO_URL}
              title="Boas-vindas à Masterclass Zigomático Descomplicado"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : null}

        <p className="obg-lead-strong reveal d3">
          &ldquo;Quero te ajudar pessoalmente. Em uma{' '}
          <span className="gold-grad">consultoria gratuita de 1 hora</span>, vamos montar juntos o
          seu caminho para sair da teoria e dar o próximo passo nos zigomáticos com segurança.&rdquo;
        </p>
        <p className="obg-quote-by reveal d3">— Dr. Sócrates Tavares</p>

        <div className="obg-cta-row reveal d3">
          <CtaConsultoria size="lg" />
        </div>
        <a className="obg-sublink reveal d3" href={ACESSO_URL}>
          Prefiro assistir à masterclass primeiro →
        </a>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {[0, 1].map((g) => (
            <div className="hero-marquee-group" key={g}>
              {MARQUEE_ITEMS.map((item, i) => (
                <span className="hero-marquee-item" key={`${g}-${i}`}>
                  {item}
                  <span className="hero-marquee-sep">◇</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
