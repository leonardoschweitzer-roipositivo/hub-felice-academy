export function FinalCta() {
  return (
    <section className="sec final">
      <div className="wrap inner reveal">
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          Comece hoje
        </span>
        <h2>
          Sua clínica pode rodar <span className="gold-grad">com método</span> a partir de agora.
        </h2>
        <p className="lead">
          Quatro entregas prontas, acesso imediato e garantia de 7 dias. Tudo por{' '}
          <b style={{ color: 'var(--cream)' }}>R$ 97</b> — menos do que você perde com um único
          paciente que não agendou.
        </p>
        <a href="#checkout" className="btn btn-primary btn-lg">
          Garantir meu Kit por R$ 97 <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}
