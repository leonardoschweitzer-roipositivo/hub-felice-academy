const PASSOS = [
  {
    n: '1',
    t: 'Agende seu horário',
    d: 'Clique no botão, escolha o melhor dia e horário e confirme. Leva menos de um minuto.',
  },
  {
    n: '2',
    t: 'Receba a confirmação',
    d: 'Você recebe os detalhes da reunião e um espaço para nos contar rapidamente sobre sua clínica.',
  },
  {
    n: '3',
    t: 'Reunião de 1 hora, online',
    d: 'No horário marcado, conversa direta com o Dr. Sócrates para montar seu plano de implementação.',
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
          <h2>Simples, rápido e sem custo</h2>
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
