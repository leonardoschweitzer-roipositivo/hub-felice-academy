const STATS = [
  { num: '+1.200', label: 'Dentistas usando o método' },
  { num: '+10 anos', label: 'De prática clínica real' },
  { num: '4 pilares', label: 'Gestão, Atendimento, Agendamento e Marketing' },
  { num: '1 hora', label: 'De consultoria direta com o especialista' },
];

/* Prova social com números reais já usados na marca. Depoimentos foram
   omitidos de propósito (os existentes são placeholders) — incluir só
   quando houver depoimentos reais sobre a consultoria. */
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
