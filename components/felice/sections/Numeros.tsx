const STATS = [
  { num: '+1.200', label: 'Dentistas usando o método' },
  { num: '4', label: 'Áreas, agora interativas' },
  { num: '7 dias', label: 'Garantia incondicional' },
  { num: 'R$ 97', label: 'Acesso imediato e vitalício' },
];

export function Numeros() {
  return (
    <section className="sec numeros" id="prova">
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
