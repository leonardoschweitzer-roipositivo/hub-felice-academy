import { CtaConsultoria } from './Cta';

/* Benefícios (2 palavras) que desfilam na esteira do rodapé do hero. */
const MARQUEE_ITEMS = [
  'Consultoria gratuita',
  'Equipe treinada',
  'Scripts no ar',
  'Orçamento acompanhado',
  'Follow-up rodando',
  'Conversão medida',
  'Padrão na recepção',
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
          Pronto! A sua equipe já tem o{' '}
          <span className="gold-grad">CRC de Alta Performance</span>.
        </h1>

        <p className="obg-lead reveal d2">
          Os dados de acesso chegam no seu e-mail em instantes. Mas deixa eu te falar uma verdade:
          curso assistido não é processo implantado —{' '}
          <strong>quem coloca o script para rodar na recepção é você</strong>. É aí que a maioria
          das clínicas para. Por isso, eu incluí o passo mais importante:
        </p>

        <p className="obg-lead-strong reveal d3">
          &ldquo;Quero te ajudar pessoalmente. Em uma{' '}
          <span className="gold-grad">consultoria gratuita de 1 hora</span>, a gente monta o plano
          para a sua secretária aplicar o método na sua clínica — e você medir o resultado.&rdquo;
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
