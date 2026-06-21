/* Prova social com fatos reais da marca e da autoridade do mentor.
   Depoimentos foram omitidos de propósito (incluir só quando houver
   depoimentos reais sobre a consultoria). */
const STATS = [
  { num: '+1 mil', label: 'Dentistas formados pela Felice' },
  { num: '+3 mil', label: 'Pacientes atendidos' },
  { num: '+10 anos', label: 'De prática clínica real' },
  { num: '1 hora', label: 'De consultoria direta com o especialista' },
];

export function Prova() {
  return (
    <section className="sec numeros obg-prova">
      <div className="wrap">
        <div className="numeros-grid">
          {STATS.map((s, i) => (
            <div className={`numeros-item reveal d${i}`} key={s.label}>
              <b>{s.num}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
