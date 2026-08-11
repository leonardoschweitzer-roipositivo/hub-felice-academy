const PASSOS = [
  {
    n: '1',
    t: 'Responda ao questionário',
    d: 'São 8 perguntas rápidas sobre a sua clínica e a sua recepção. Leva menos de dois minutos.',
  },
  {
    n: '2',
    t: 'Combine o horário no WhatsApp',
    d: 'Suas respostas chegam prontas para a nossa equipe, que fala com você para marcar o melhor dia e horário.',
  },
  {
    n: '3',
    t: 'Conversamos por 1 hora, online',
    d: 'No horário marcado, eu falo diretamente com você para montarmos o plano de implantação na sua recepção.',
  },
];

/* Os 3 passos do agendamento — reduz o atrito mostrando que é simples. */
export function ComoFunciona() {
  return (
    <section className="sec obg-steps-sec">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Como funciona
          </span>
          <h2>É simples, rápido e sem custo nenhum pra você</h2>
        </div>

        <div className="obg-steps">
          {PASSOS.map((p, i) => (
            <div className={`obg-step reveal d${i}`} key={p.n}>
              <span className="obg-step-n">{p.n}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
