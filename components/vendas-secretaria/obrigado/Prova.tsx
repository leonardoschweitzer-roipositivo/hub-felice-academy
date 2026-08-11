/* Prova social com fatos reais da estrutura do curso — os mesmos STATS
   da landing (components/vendas-secretaria/content.ts), com o último
   trocado pela consultoria, que é o objetivo desta página. Nada de
   número de alunos ou resultado medido: não existe dado confirmado. */
const STATS = [
  { num: '5 módulos', label: 'Do primeiro contato ao fechamento e follow-up' },
  { num: 'Scripts prontos', label: 'WhatsApp, orçamento, follow-up e confirmação' },
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
