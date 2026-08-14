/* Prova social com fatos reais da estrutura do curso — os mesmos STATS
   da landing (components/vendas-secretaria/content.ts), com o último
   trocado pela consultoria, que é o objetivo desta página. Nada de
   número de alunos ou resultado medido: não existe dado confirmado. */
const STATS = [
  { num: '4 módulos', label: 'Sondagem, agendamento, fechamento e objeções' },
  { num: '20 aulas', label: 'Curtas e práticas, com role-playing em duas delas' },
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
