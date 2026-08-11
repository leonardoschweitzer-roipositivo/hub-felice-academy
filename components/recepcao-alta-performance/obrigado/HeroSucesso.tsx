import { CtaConsultoria } from './Cta';

/* Benefícios (2 palavras) que desfilam na esteira do rodapé do hero. */
const MARQUEE_ITEMS = [
  'Consultoria gratuita',
  'Equipe treinada',
  'Padrão no balcão',
  'Momentos mágicos',
  'Agenda sem buraco',
  'No-show em queda',
  'Paciente que indica',
  'Acesso liberado',
];

/* Hero pós-compra: confirma a matrícula e direciona ao único objetivo da
   página — agendar a consultoria. Sem vídeo e sem link de acesso às
   aulas (o acesso chega pelo e-mail da Greenn). */
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
          Pronto! A sua equipe já tem a{' '}
          <span className="gold-grad">Recepção de Alta Performance</span>.
        </h1>

        <p className="obg-lead reveal d2">
          Os dados de acesso chegam no seu e-mail em instantes. Mas deixa eu te falar uma verdade:
          curso assistido não muda o balcão sozinho —{' '}
          <strong>quem define o novo padrão de atendimento é você</strong>. É aí que a maioria das
          clínicas para. Por isso, eu incluí o passo mais importante:
        </p>

        <p className="obg-lead-strong reveal d3">
          &ldquo;Quero te ajudar pessoalmente. Em uma{' '}
          <span className="gold-grad">consultoria gratuita de 1 hora</span>, a gente define o que a
          sua recepção muda já na primeira semana — e como você acompanha isso.&rdquo;
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
