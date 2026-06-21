/* Prova social com fatos reais da estrutura do curso e da autoridade do
   mentor. Depoimentos foram omitidos de propósito (incluir só quando
   houver depoimentos reais sobre a consultoria). */
const STATS = [
  { num: '+10 anos', label: 'De prática clínica em implantodontia' },
  { num: '4 módulos', label: 'Do diagnóstico ao hands-on' },
  { num: '+20 aulas', label: 'Gravadas, passo a passo' },
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
