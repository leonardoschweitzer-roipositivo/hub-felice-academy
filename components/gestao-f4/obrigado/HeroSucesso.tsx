import { CtaConsultoria } from './Cta';
import { CURSO_URL, VIDEO_URL } from './config';

/* Benefícios (2 palavras) que desfilam na esteira do rodapé do hero. */
const MARQUEE_ITEMS = [
  'Consultoria gratuita',
  'Plano de implementação',
  'Por onde começar',
  'Dúvidas resolvidas',
  'Equipe alinhada',
  'Acesso liberado',
  'Mentoria direta',
  'Clínica no automático',
];

/* Hero pós-compra: parabeniza, confirma o acesso ao curso e direciona ao
   único objetivo da página — agendar a consultoria. O acesso às aulas
   fica como link secundário discreto. */
export function HeroSucesso() {
  return (
    <header className="obg-hero">
      <div className="obg-hero-bg" aria-hidden />
      <div className="wrap obg-hero-inner">
        <span className="obg-badge reveal">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Compra confirmada
        </span>

        <h1 className="reveal d1">
          Parabéns! Eu já liberei seu acesso ao <span className="gold-grad">Curso Gestão F4</span>.
        </h1>

        <p className="obg-lead reveal d2">
          Você acaba de dar o primeiro passo para tirar sua clínica do improviso. Mas deixa eu te
          falar uma verdade: a aula sozinha não muda a rotina —{' '}
          <strong>quem aplica os 4 pilares é você e sua equipe</strong>. Por isso, eu incluí o passo
          mais importante:
        </p>

        {VIDEO_URL ? (
          <div className="obg-video reveal d3">
            <iframe
              src={VIDEO_URL}
              title="Boas-vindas ao Curso Gestão F4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : null}

        <p className="obg-lead-strong reveal d3">
          &ldquo;Quero te ajudar pessoalmente. Em uma{' '}
          <span className="gold-grad">consultoria gratuita de 1 hora</span>, vamos montar juntos o
          plano de implementação dos 4 pilares na sua clínica.&rdquo;
        </p>
        <p className="obg-quote-by reveal d3">— Dr. Sócrates Tavares</p>

        <div className="obg-cta-row reveal d3">
          <CtaConsultoria size="lg" />
        </div>
        <a className="obg-sublink reveal d3" href={CURSO_URL}>
          Prefiro acessar minhas aulas primeiro →
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
