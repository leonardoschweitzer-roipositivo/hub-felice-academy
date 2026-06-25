'use client';

import { useState } from 'react';
import { Icon } from '../icons';
import { styleVars } from '../util';
import {
  ETAPAS,
  ORIGENS,
  TEMPERATURAS,
  formatBRL,
  type Lead,
  type EtapaPipeline,
} from '../data/vendas';

const iniciais = (nome: string) =>
  nome
    .replace(/^(Dra?\.?)\s+/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('');

export function LeadKanbanCard({
  lead,
  onDragStart,
  onDragEnd,
  onOpen,
  onMove,
  dragging,
}: {
  lead: Lead;
  onDragStart: (id: string) => void;
  onDragEnd: () => void;
  onOpen: (lead: Lead) => void;
  onMove: (id: string, etapa: EtapaPipeline) => void;
  dragging: boolean;
}) {
  const [menu, setMenu] = useState(false);
  const temp = TEMPERATURAS[lead.temperatura];

  return (
    <div
      className={`kanban-card${dragging ? ' is-dragging' : ''}`}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plain', lead.id);
        e.dataTransfer.effectAllowed = 'move';
        onDragStart(lead.id);
      }}
      onDragEnd={onDragEnd}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className="kc-main" onClick={() => onOpen(lead)} role="button" tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onOpen(lead);
        }}
      >
        <div className="kc-top">
          <span className="kc-nome">{lead.nome}</span>
          <span className="kc-temp" style={styleVars({ '--t': temp.cor })} title={`Lead ${temp.nome}`} />
        </div>
        <div className="kc-interesse">{lead.interesse}</div>
        <div className="kc-meta">
          <span className="kc-valor">{formatBRL(lead.valorEstimado)}</span>
          <span className="kc-origem">{ORIGENS[lead.origem]}</span>
        </div>
        <div className="kc-foot">
          <span className="kc-avatar" title={lead.responsavel}>
            {iniciais(lead.responsavel)}
          </span>
          {lead.tags[0] && <span className="kc-tag">{lead.tags[0]}</span>}
        </div>
      </div>

      <button
        type="button"
        className="kc-move-btn"
        aria-label="Mover etapa"
        aria-expanded={menu}
        onClick={() => setMenu((m) => !m)}
      >
        <Icon name="chevron-down" size={15} />
      </button>

      {menu && (
        <>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div className="kc-menu-overlay" onClick={() => setMenu(false)} aria-hidden="true" />
          <ul className="kc-menu">
            <li className="kc-menu-label">Mover para</li>
            {ETAPAS.filter((e) => e.slug !== lead.etapa).map((e) => (
              <li key={e.slug}>
                <button
                  type="button"
                  onClick={() => {
                    onMove(lead.id, e.slug);
                    setMenu(false);
                  }}
                >
                  <span className="kc-menu-dot" style={styleVars({ '--c': e.cor })} />
                  {e.nome}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
