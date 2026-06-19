'use client';

import { useState } from 'react';
import { DECISION_TREES } from '../content/toolsData';

/** Árvore de decisão interativa (protocolos de crise / resolução). */
export function DecisionTree({ treeId }: { treeId: string }) {
  const tree = DECISION_TREES[treeId];
  const [path, setPath] = useState<string[]>(tree ? [tree.start] : []);
  const [resultado, setResultado] = useState<{ texto: string; alerta?: boolean } | null>(null);

  if (!tree) return null;
  const currentId = path[path.length - 1];
  const node = tree.nodes[currentId];

  const choose = (op: { proximo?: string; resultado?: string; alerta?: boolean }) => {
    if (op.resultado) setResultado({ texto: op.resultado, alerta: op.alerta });
    else if (op.proximo) {
      setPath((p) => [...p, op.proximo!]);
      setResultado(null);
    }
  };

  const reset = () => {
    setPath([tree.start]);
    setResultado(null);
  };

  return (
    <div className="kit-tree">
      <div className="kit-tree-head">
        <h4>{tree.titulo}</h4>
        <p>{tree.intro}</p>
      </div>

      {!resultado && node && (
        <div className="kit-tree-node">
          <p className="kit-tree-question">{node.pergunta}</p>
          <div className="kit-tree-options">
            {node.opcoes.map((op, i) => (
              <button
                key={i}
                type="button"
                className={`kit-tree-option${op.alerta ? ' is-alert' : ''}`}
                onClick={() => choose(op)}
              >
                {op.rotulo}
              </button>
            ))}
          </div>
        </div>
      )}

      {resultado && (
        <div className={`kit-tree-result${resultado.alerta ? ' is-alert' : ''}`}>
          <p>{resultado.texto}</p>
        </div>
      )}

      {(path.length > 1 || resultado) && (
        <button type="button" className="kit-link-btn" onClick={reset}>
          ↻ Recomeçar
        </button>
      )}
    </div>
  );
}
