'use client';

import { useState } from 'react';
import { Icon } from '../icons';
import { FORMATOS, type Formato } from '../data/materiais';
import { useStore } from '../store/PlatformStore';
import { MaterialCard } from './MaterialCard';

export function MaterialLibrary() {
  const [filtro, setFiltro] = useState<'Todos' | Formato>('Todos');
  const { materiais } = useStore();

  const itens = filtro === 'Todos' ? materiais : materiais.filter((m) => m.formato === filtro);

  return (
    <>
      <div className="plat-page-head reveal">
        <span className="eyebrow">Materiais</span>
        <h1>
          Recursos para <span className="gold-grad">aplicar hoje</span>
        </h1>
        <p className="lead">
          Scripts, planilhas, checklists, templates e kits prontos para usar na clínica. Comece pelo
          Kit Gestão F4, totalmente interativo.
        </p>
      </div>

      <div className="filter-bar reveal d1">
        {FORMATOS.map((f) => (
          <button
            key={f}
            type="button"
            className={`chip${filtro === f ? ' is-active' : ''}`}
            onClick={() => setFiltro(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {itens.length === 0 ? (
        <div className="empty">
          <Icon name="materiais" size={32} />
          <p style={{ marginTop: 10 }}>Nenhum material neste formato ainda.</p>
        </div>
      ) : (
        <div className="plat-grid">
          {itens.map((m) => (
            <MaterialCard key={m.slug} mat={m} />
          ))}
        </div>
      )}
    </>
  );
}
