'use client';

import { useState } from 'react';
import { Icon } from '../icons';
import { useStore } from '../store/PlatformStore';
import { styleVars } from '../util';
import { LeadKanbanCard } from './LeadKanbanCard';
import { LeadDrawer } from './LeadDrawer';
import { ETAPAS, formatBRL, type Lead, type EtapaPipeline } from '../data/vendas';

export function PipelineBoard() {
  const { leads, moveLeadEtapa } = useStore();
  const [dragId, setDragId] = useState<string | null>(null);
  const [overCol, setOverCol] = useState<EtapaPipeline | null>(null);
  const [drawerLead, setDrawerLead] = useState<Lead | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const abrir = (lead: Lead | null) => {
    setDrawerLead(lead);
    setDrawerOpen(true);
  };

  const soltar = (etapa: EtapaPipeline) => {
    if (dragId) moveLeadEtapa(dragId, etapa);
    setDragId(null);
    setOverCol(null);
  };

  return (
    <>
      <div className="plat-page-head vendas-head-row reveal">
        <div>
          <span className="eyebrow">Vendas · Pipeline</span>
          <h1>
            Pipeline de <span className="gold-grad">Vendas</span>
          </h1>
          <p className="lead">Arraste os cards entre as etapas — ou use o menu de cada lead.</p>
        </div>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => abrir(null)}>
          <Icon name="plus" size={16} /> Novo lead
        </button>
      </div>

      <div className="kanban-board reveal d1">
        {ETAPAS.map((etapa) => {
          const cards = leads.filter((l) => l.etapa === etapa.slug);
          const soma = cards.reduce((s, l) => s + l.valorEstimado, 0);
          return (
            <section
              key={etapa.slug}
              className={`kanban-col${overCol === etapa.slug ? ' is-over' : ''}`}
              style={styleVars({ '--c': etapa.cor })}
              onDragOver={(e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                if (overCol !== etapa.slug) setOverCol(etapa.slug);
              }}
              onDragLeave={(e) => {
                // só limpa se realmente saiu da coluna (não ao passar sobre filhos)
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setOverCol(null);
              }}
              onDrop={(e) => {
                e.preventDefault();
                soltar(etapa.slug);
              }}
            >
              <header className="kanban-col-head">
                <span className="kch-dot" />
                <span className="kch-nome">{etapa.nome}</span>
                <span className="kch-count">{cards.length}</span>
              </header>
              <div className="kanban-col-soma">{formatBRL(soma)}</div>
              <div className="kanban-col-body">
                {cards.map((lead) => (
                  <LeadKanbanCard
                    key={lead.id}
                    lead={lead}
                    dragging={dragId === lead.id}
                    onDragStart={setDragId}
                    onDragEnd={() => {
                      setDragId(null);
                      setOverCol(null);
                    }}
                    onOpen={abrir}
                    onMove={moveLeadEtapa}
                  />
                ))}
                {!cards.length && <div className="kanban-empty">Sem leads</div>}
              </div>
            </section>
          );
        })}
      </div>

      <LeadDrawer open={drawerOpen} lead={drawerLead} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
