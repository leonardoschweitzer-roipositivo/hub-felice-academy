/* Prova social com números da marca/método. Depoimentos foram omitidos
   de propósito (incluir só quando houver depoimentos reais sobre a
   consultoria). */
const STATS = [
  { num: '+1.200', label: 'Dentistas no método Gestão F4' },
  { num: '+10 anos', label: 'De prática clínica e gestão real' },
  { num: '4 pilares', label: 'Atendimento, Agendamento, Marketing e Gestão' },
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
