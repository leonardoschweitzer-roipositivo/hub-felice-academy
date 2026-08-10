import { CtaConsultoria } from './Cta';
import { VIDEO_URL, VIDEO_IFRAME_ID } from './config';

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

/* Hero pós-compra. A MASTERCLASS COMPLETA toca aqui (10/08/2026), então a
   headline e a lead existem para uma coisa só: fazer a pessoa dar o play e
   assistir até o fim. O convite para a consultoria vem logo abaixo do player,
   como próximo passo de quem terminou a aula. */
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
          É agora: dê o play na{' '}
          <span className="gold-grad">Masterclass Zigomático Descomplicado</span>
        </h1>

        <p className="obg-lead reveal d2">
          A aula completa está logo abaixo — do planejamento à precificação, sem enrolação.
          Separe esse tempo sem interrupção e <strong>assista até o fim</strong>: é na segunda
          metade que estão os critérios de indicação e o raciocínio que separa quem encaminha de
          quem opera.
        </p>

        {VIDEO_URL ? (
          <div className="obg-video reveal d3" id="aula">
            <iframe
              id={VIDEO_IFRAME_ID}
              src={VIDEO_URL}
              title="Masterclass Zigomático Descomplicado — aula completa"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : null}

        <p className="obg-pos-aula reveal d3">Terminou de assistir? Então o próximo passo é este:</p>

        <p className="obg-lead-strong reveal d3">
          &ldquo;Quero te ajudar pessoalmente. Em uma{' '}
          <span className="gold-grad">consultoria gratuita de 1 hora</span>, vamos montar juntos o
          seu caminho para sair da teoria e dar o próximo passo nos zigomáticos com segurança.&rdquo;
        </p>
        <p className="obg-quote-by reveal d3">— Dr. Sócrates Tavares</p>

        <div className="obg-cta-row reveal d3">
          <CtaConsultoria size="lg" />
        </div>
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
