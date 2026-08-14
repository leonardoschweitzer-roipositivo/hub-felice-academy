'use client';

import { useState } from 'react';
import { ProductCard } from './ProductCard';
import type { Categoria, Produto } from './content';

/* Vitrine de produtos com filtro por tipo. Client component porque o filtro
   é estado — o resto da home segue server. */

/** Rótulo de cada categoria no filtro. A ordem daqui é a ordem dos chips;
 *  categoria sem produto visível não vira chip (ex.: Software, hoje oculto).
 *
 *  ⚠️ Esta ordem espelha a dos cards em `hub/content.ts` (Masterclass →
 *  Cursos → Consultoria → Mentorias, definida em 13/08/2026). São duas listas
 *  independentes: reordenar os produtos lá e não mexer aqui deixa o filtro
 *  contando uma história e a vitrine outra. */
const ROTULOS: Record<Categoria, string> = {
  Masterclass: 'Masterclass',
  Curso: 'Cursos',
  Consultoria: 'Consultoria',
  Mentoria: 'Mentorias',
  Software: 'Software',
};

type Filtro = Categoria | 'todos';

export function ProductShowcase({ produtos }: { produtos: Produto[] }) {
  const [filtro, setFiltro] = useState<Filtro>('todos');
  // Depois do primeiro clique os cards entram já visíveis: o
  // IntersectionObserver do RevealOnScroll só observa o que existia na
  // montagem, então um card que sai e volta à lista nunca ganharia `.in`
  // e ficaria invisível para sempre.
  const [interagiu, setInteragiu] = useState(false);

  const chips = (Object.keys(ROTULOS) as Categoria[])
    .map((cat) => ({
      valor: cat as Filtro,
      rotulo: ROTULOS[cat],
      total: produtos.filter((p) => p.categoria === cat).length,
    }))
    .filter((c) => c.total > 0);

  const visiveis = filtro === 'todos' ? produtos : produtos.filter((p) => p.categoria === filtro);

  const selecionar = (valor: Filtro) => {
    setInteragiu(true);
    setFiltro(valor);
  };

  return (
    <>
      <div className="hub-filtro reveal" role="group" aria-label="Filtrar produtos por tipo">
        {[{ valor: 'todos' as Filtro, rotulo: 'Todos', total: produtos.length }, ...chips].map(
          (c) => (
            <button
              key={c.valor}
              type="button"
              className={`hub-filtro-chip${filtro === c.valor ? ' is-ativo' : ''}`}
              aria-pressed={filtro === c.valor}
              onClick={() => selecionar(c.valor)}
            >
              {c.rotulo}
              <span className="hub-filtro-num">{c.total}</span>
            </button>
          ),
        )}
      </div>

      <div className="hub-rows">
        {visiveis.map((p, i) => (
          <div key={p.titulo} className={interagiu ? 'reveal in' : `reveal d${(i % 4) + 1}`}>
            <ProductCard produto={p} />
          </div>
        ))}
      </div>
    </>
  );
}
