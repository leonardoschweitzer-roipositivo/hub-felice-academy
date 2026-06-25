'use client';

import { useState } from 'react';
import { Icon } from '../icons';
import { useStore } from '../store/PlatformStore';
import { styleVars } from '../util';
import { AutomacaoDrawer } from './AutomacaoDrawer';
import { GATILHOS, type Automacao } from '../data/vendas';

const pct = (parte: number, total: number) => (total ? Math.round((parte / total) * 100) : 0);

export function Automacoes() {
  const { automacoes, toggleAutomacao } = useStore();
  const [drawerAuto, setDrawerAuto] = useState<Automacao | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const abrir = (a: Automacao | null) => {
    setDrawerAuto(a);
    setDrawerOpen(true);
  };

  const ativas = automacoes.filter((a) => a.status === 'ativa').length;
  const totalEnviadas = automacoes.reduce((s, a) => s + a.stats.enviadas, 0);

  return (
    <>
      <div className="plat-page-head vendas-head-row reveal">
        <div>
          <span className="eyebrow">Vendas · Automação</span>
          <h1>
            Mensagens <span className="gold-grad">automáticas</span>
          </h1>
          <p className="lead">
            {ativas} de {automacoes.length} ativas · {totalEnviadas.toLocaleString('pt-BR')} mensagens
            enviadas. Disparadas por gatilho via WhatsApp.
          </p>
        </div>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => abrir(null)}>
          <Icon name="plus" size={16} /> Nova automação
        </button>
      </div>

      <div className="automacao-grid reveal d1">
        {automacoes.map((a) => {
          const g = GATILHOS[a.gatilho];
          return (
            <div key={a.id} className={`automacao-card${a.status === 'pausada' ? ' is-paused' : ''}`}>
              <header className="ac-head">
                <span className="ac-ico">
                  <Icon name={g.icone} size={18} />
                </span>
                <div className="ac-title">
                  <b>{a.nome}</b>
                  <span>{g.nome}</span>
                </div>
                <button
                  type="button"
                  className={`ac-switch${a.status === 'ativa' ? ' on' : ''}`}
                  role="switch"
                  aria-checked={a.status === 'ativa'}
                  aria-label={a.status === 'ativa' ? 'Pausar' : 'Ativar'}
                  onClick={() => toggleAutomacao(a.id)}
                >
                  <span className="ac-knob" />
                </button>
              </header>

              <p className="ac-corpo">{a.corpo}</p>

              <div className="ac-tags">
                <span className="ac-tag">
                  <Icon name="whatsapp" size={12} /> {a.templateNome}
                </span>
                <span className="ac-tag">
                  <Icon name="clock" size={12} />{' '}
                  {a.atrasoMin === 0 ? 'Imediato' : `+${a.atrasoMin} min`}
                </span>
                {(a.condicoes ?? []).map((c) => (
                  <span key={c} className="ac-tag ac-cond">
                    {c}
                  </span>
                ))}
              </div>

              <div className="ac-stats">
                <Stat label="Enviadas" valor={a.stats.enviadas.toLocaleString('pt-BR')} />
                <Stat
                  label="Entregues"
                  valor={`${pct(a.stats.entregues, a.stats.enviadas)}%`}
                  bar={pct(a.stats.entregues, a.stats.enviadas)}
                />
                <Stat
                  label="Lidas"
                  valor={`${pct(a.stats.lidas, a.stats.enviadas)}%`}
                  bar={pct(a.stats.lidas, a.stats.enviadas)}
                />
                <Stat
                  label="Respondidas"
                  valor={`${pct(a.stats.respondidas, a.stats.enviadas)}%`}
                  bar={pct(a.stats.respondidas, a.stats.enviadas)}
                />
              </div>

              <button type="button" className="ac-edit" onClick={() => abrir(a)}>
                Editar <Icon name="chevron-right" size={14} />
              </button>
            </div>
          );
        })}
      </div>

      <AutomacaoDrawer open={drawerOpen} automacao={drawerAuto} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

function Stat({ label, valor, bar }: { label: string; valor: string; bar?: number }) {
  return (
    <div className="ac-stat">
      <span className="ac-stat-num">{valor}</span>
      <span className="ac-stat-label">{label}</span>
      {bar !== undefined && (
        <span className="ac-stat-bar">
          <span style={styleVars({ width: `${bar}%` })} />
        </span>
      )}
    </div>
  );
}
