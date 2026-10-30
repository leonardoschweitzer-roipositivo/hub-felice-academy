import { Secao, Sub } from '../ui/Secao';
import { LIMITES, METAS_NAO_RESULTADO, NUMERO_LIBERADO } from '../content';

export function Provas() {
  return (
    <Secao
      id="provas"
      n="09"
      titulo="Provas e limites"
      lead="Vale para todo material novo, principalmente o Instagram. Publicidade de saúde tem regra, e o site já tem exemplos do que não repetir."
    >
      <Sub>O único número liberado</Sub>
      <div className="ds-prova">
        <span className="eyebrow">{NUMERO_LIBERADO.fonte}</span>
        <div className="ds-prova-grid">
          {NUMERO_LIBERADO.linhas.map((l) => (
            <div key={l.l}><b>{l.n}</b><span>{l.l}</span></div>
          ))}
        </div>
        <p className="ds-mut">Sempre atribuído à Clínica Felice, a clínica do Dr. Sócrates. Nunca como resultado de alunos.</p>
      </div>

      <div className="ds-card ds-card--no">
        <span className="eyebrow">Metas, não resultados</span>
        <p>Estes quatro números são metas de referência que o curso de Recepção ensina a medir. Nunca escreva &quot;nossos alunos alcançam&quot; ou &quot;a Felice tem&quot;.</p>
        <div className="ds-chips">{METAS_NAO_RESULTADO.map((m) => <span key={m}>{m}</span>)}</div>
      </div>

      <Sub>Limites</Sub>
      <div className="ds-table-wrap">
        <table className="ds-table">
          <tbody>
            {LIMITES.map((l) => <tr key={l.t}><td><b>{l.t}</b></td><td>{l.v}</td></tr>)}
          </tbody>
        </table>
      </div>

      <div className="ds-card ds-card--no">
        <span className="eyebrow">Não copiar do site</span>
        <p>Alguns recursos de urgência e prova social do site são simulados: toasts de compradores, número de pessoas vendo a página, contador que reinicia a cada visita e depoimentos de exemplo. No Instagram, nada disso.</p>
      </div>
    </Secao>
  );
}
