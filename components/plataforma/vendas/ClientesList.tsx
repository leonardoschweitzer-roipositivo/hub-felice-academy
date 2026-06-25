'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Icon } from '../icons';
import { StatusBadge } from '../admin/ui/fields';
import { useStore } from '../store/PlatformStore';
import { formatBRL, formatData } from '../data/vendas';

export function ClientesList() {
  const { clientes } = useStore();
  const [busca, setBusca] = useState('');
  const [fStatus, setFStatus] = useState<'todos' | 'ativo' | 'inativo'>('todos');

  const filtrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    return clientes.filter((c) => {
      if (fStatus !== 'todos' && c.status !== fStatus) return false;
      if (q) {
        const hay = `${c.nome} ${c.telefone} ${c.produtos.join(' ')} ${c.plano ?? ''}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [clientes, busca, fStatus]);

  const ativos = clientes.filter((c) => c.status === 'ativo').length;
  const ltvTotal = clientes.reduce((s, c) => s + c.valorTotal, 0);

  return (
    <>
      <div className="plat-page-head reveal">
        <span className="eyebrow">Vendas · Clientes</span>
        <h1>
          Sua base de <span className="gold-grad">clientes</span>
        </h1>
        <p className="lead">
          {clientes.length} clientes · {ativos} ativos · {formatBRL(ltvTotal)} em receita acumulada.
        </p>
      </div>

      <div className="admin-toolbar reveal d1">
        <div className="at-search">
          <Icon name="search" size={16} />
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome, produto, plano…"
          />
        </div>
        <select
          className="form-input vendas-filter"
          value={fStatus}
          onChange={(e) => setFStatus(e.target.value as typeof fStatus)}
        >
          <option value="todos">Todos os status</option>
          <option value="ativo">Ativos</option>
          <option value="inativo">Inativos</option>
        </select>
      </div>

      <div className="table-wrap reveal d2">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Produtos</th>
              <th>LTV</th>
              <th>Plano</th>
              <th>Status</th>
              <th>Desde</th>
              <th>Últ. compra</th>
              <th aria-label="Ações" />
            </tr>
          </thead>
          <tbody>
            {filtrados.map((c) => (
              <tr key={c.id}>
                <td>
                  <div className="cell-title">{c.nome}</div>
                  <div className="cell-sub">{c.telefone}</div>
                </td>
                <td>
                  <div className="cli-produtos">
                    {c.produtos.map((p) => (
                      <span key={p} className="cli-produto-tag">
                        {p}
                      </span>
                    ))}
                  </div>
                </td>
                <td>
                  <strong className="cli-ltv">{formatBRL(c.valorTotal)}</strong>
                </td>
                <td className="cell-sub">{c.plano ?? '—'}</td>
                <td>
                  <StatusBadge status={c.status} label={c.status === 'ativo' ? 'Ativo' : 'Inativo'} />
                </td>
                <td className="cell-sub">{formatData(c.desde)}</td>
                <td className="cell-sub">{formatData(c.ultimaCompra)}</td>
                <td className="td-actions">
                  <Link
                    href="/plataforma/vendas/atendimento"
                    className="icon-btn-sm"
                    aria-label="Abrir conversa"
                  >
                    <Icon name="whatsapp" size={16} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!filtrados.length && <div className="empty-admin">Nenhum cliente encontrado.</div>}
      </div>
    </>
  );
}
