'use client';

import { useMemo, useState } from 'react';
import { Icon } from '../icons';
import { useStore } from '../store/PlatformStore';
import { styleVars } from '../util';
import { LeadDrawer } from './LeadDrawer';
import {
  ETAPAS,
  ETAPA_MAP,
  ORIGENS,
  TEMPERATURAS,
  formatBRL,
  formatData,
  type Lead,
  type EtapaPipeline,
  type OrigemLead,
  type Temperatura,
} from '../data/vendas';

export function LeadsList() {
  const { leads } = useStore();
  const [busca, setBusca] = useState('');
  const [fEtapa, setFEtapa] = useState<'todas' | EtapaPipeline>('todas');
  const [fOrigem, setFOrigem] = useState<'todas' | OrigemLead>('todas');
  const [fTemp, setFTemp] = useState<'todas' | Temperatura>('todas');
  const [drawerLead, setDrawerLead] = useState<Lead | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const abrir = (lead: Lead | null) => {
    setDrawerLead(lead);
    setDrawerOpen(true);
  };

  const filtrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    return leads.filter((l) => {
      if (fEtapa !== 'todas' && l.etapa !== fEtapa) return false;
      if (fOrigem !== 'todas' && l.origem !== fOrigem) return false;
      if (fTemp !== 'todas' && l.temperatura !== fTemp) return false;
      if (q) {
        const hay = `${l.nome} ${l.telefone} ${l.interesse} ${l.responsavel}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [leads, busca, fEtapa, fOrigem, fTemp]);

  return (
    <>
      <div className="plat-page-head vendas-head-row reveal">
        <div>
          <span className="eyebrow">Vendas · Leads</span>
          <h1>
            Seus <span className="gold-grad">leads</span>
          </h1>
          <p className="lead">{leads.length} contatos no funil. Busque, filtre e gerencie.</p>
        </div>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => abrir(null)}>
          <Icon name="plus" size={16} /> Novo lead
        </button>
      </div>

      <div className="admin-toolbar reveal d1">
        <div className="at-search">
          <Icon name="search" size={16} />
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome, telefone, interesse…"
          />
        </div>
        <select
          className="form-input vendas-filter"
          value={fEtapa}
          onChange={(e) => setFEtapa(e.target.value as typeof fEtapa)}
        >
          <option value="todas">Todas as etapas</option>
          {ETAPAS.map((e) => (
            <option key={e.slug} value={e.slug}>
              {e.nome}
            </option>
          ))}
        </select>
        <select
          className="form-input vendas-filter"
          value={fOrigem}
          onChange={(e) => setFOrigem(e.target.value as typeof fOrigem)}
        >
          <option value="todas">Todas as origens</option>
          {Object.entries(ORIGENS).map(([slug, nome]) => (
            <option key={slug} value={slug}>
              {nome}
            </option>
          ))}
        </select>
        <select
          className="form-input vendas-filter"
          value={fTemp}
          onChange={(e) => setFTemp(e.target.value as typeof fTemp)}
        >
          <option value="todas">Qualquer temperatura</option>
          {Object.entries(TEMPERATURAS).map(([slug, t]) => (
            <option key={slug} value={slug}>
              {t.nome}
            </option>
          ))}
        </select>
      </div>

      <div className="table-wrap reveal d2">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Lead</th>
              <th>Interesse</th>
              <th>Origem</th>
              <th>Etapa</th>
              <th>Temp.</th>
              <th>Valor</th>
              <th>Resp.</th>
              <th>Últ. interação</th>
              <th aria-label="Ações" />
            </tr>
          </thead>
          <tbody>
            {filtrados.map((l) => {
              const etapa = ETAPA_MAP[l.etapa];
              const temp = TEMPERATURAS[l.temperatura];
              return (
                <tr key={l.id}>
                  <td>
                    <div className="cell-title">{l.nome}</div>
                    <div className="cell-sub">{l.telefone}</div>
                  </td>
                  <td>{l.interesse}</td>
                  <td>{ORIGENS[l.origem]}</td>
                  <td>
                    <span className="etapa-pill" style={styleVars({ '--c': etapa.cor })}>
                      {etapa.nome}
                    </span>
                  </td>
                  <td>
                    <span className="temp-pill" style={styleVars({ '--t': temp.cor })}>
                      {temp.nome}
                    </span>
                  </td>
                  <td>{formatBRL(l.valorEstimado)}</td>
                  <td className="cell-sub">{l.responsavel}</td>
                  <td className="cell-sub">{formatData(l.ultimaInteracao)}</td>
                  <td className="td-actions">
                    <button
                      type="button"
                      className="icon-btn-sm"
                      aria-label="Editar lead"
                      onClick={() => abrir(l)}
                    >
                      <Icon name="chevron-right" size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {!filtrados.length && <div className="empty-admin">Nenhum lead encontrado.</div>}
      </div>

      <LeadDrawer open={drawerOpen} lead={drawerLead} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
