'use client';

import { useState } from 'react';
import type { DocId, ToolRef } from './content/types';
import { ToolRenderer } from './ToolRenderer';

const PANEL_LABELS: Partial<Record<ToolRef['kind'], string>> = {
  ragChat: 'Converse com o material',
  rolePlay: 'Simulador de treino',
  roleSelector: 'POP por cargo',
  ecosystem: 'Ecossistema clínico',
  callStepper: 'A chamada perfeita',
  fiveMinTimer: 'Regra dos 5 minutos',
  funnel5n: 'Funil 5Ns',
  calc404020: 'Calculadora 40/40/20',
  editorialCalendar: 'Calendário editorial',
};

/** Painel de ferramentas — botão flutuante que abre um drawer lateral.
    Não ocupa coluna no layout, deixando a leitura mais larga. */
export function DocToolsPanel({ tools, docId }: { tools: ToolRef[]; docId: DocId }) {
  const [open, setOpen] = useState(false);
  if (tools.length === 0) return null;

  return (
    <>
      <button
        type="button"
        className="kit-panel-fab"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span aria-hidden="true">✦</span> Ferramentas
      </button>

      <div
        className={`kit-panel-drawer${open ? ' is-open' : ''}`}
        role="dialog"
        aria-label="Ferramentas"
        aria-hidden={!open}
      >
        <div className="kit-panel-drawer-head">
          <span className="eyebrow">Ferramentas</span>
          <button
            type="button"
            className="kit-panel-drawer-close"
            onClick={() => setOpen(false)}
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>
        <div className="kit-panel-tools">
          {tools.map((tool, i) => (
            <div className="kit-tool kit-tool--panel" key={`panel-${tool.kind}-${i}`}>
              {PANEL_LABELS[tool.kind] && <h3 className="kit-tool-title">{PANEL_LABELS[tool.kind]}</h3>}
              <ToolRenderer tool={tool} docId={docId} />
            </div>
          ))}
        </div>
      </div>
      {open && <div className="kit-panel-scrim" onClick={() => setOpen(false)} aria-hidden="true" />}
    </>
  );
}
