/* Prova social com fatos reais da estrutura do curso — os mesmos STATS
   da landing (components/recepcao-alta-performance/content.ts), com o
   último trocado pela consultoria, que é o objetivo desta página.

   ⚠️ Nada de KPI aqui: NPS > 85%, no-show < 8% e afins são METAS que o
   curso ensina a perseguir, não resultado medido da Felice — vivem no
   Módulo 4 e no FAQ da landing, e não podem virar prova social. */
const STATS = [
  { num: '4 módulos', label: 'Da chegada do paciente à melhoria contínua' },
  { num: '20 aulas', label: 'Curtas, práticas e com atividade em cada uma' },
  { num: '100% online', label: 'A equipe assiste no ritmo dela, quantas vezes precisar' },
  { num: '1 hora', label: 'De consultoria direta com o Dr. Sócrates' },
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
