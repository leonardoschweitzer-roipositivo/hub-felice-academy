import type { CSSProperties } from 'react';

/* Funil em barras CSS — mesma ideia do `.funil-bar` do VendasOverview da
   plataforma. Sem biblioteca de gráfico: o repo não tem nenhuma e um funil
   de 5 etapas não justifica trazer uma. */

export type EtapaFunil = {
  rotulo: string;
  valor: string;
  /** 0–1: largura da barra, sempre relativa à primeira etapa. */
  fracao: number;
  /** Taxa de passagem desta etapa para a anterior, já formatada. */
  passagem?: string;
};

export function Funil({ etapas }: { etapas: EtapaFunil[] }) {
  return (
    <div className="pj-funil">
      {etapas.map((e) => (
        <div className="pj-funil-linha" key={e.rotulo}>
          <div className="pj-funil-topo">
            <span className="pj-funil-rot">{e.rotulo}</span>
            <span className="pj-funil-val">{e.valor}</span>
          </div>
          <div className="pj-funil-track">
            <div
              className="pj-funil-fill"
              /* Piso de 1,5% para a etapa final não sumir: no alto ticket a
                 última barra é ~0,02% da primeira e viraria um fio invisível. */
              style={{ '--w': `${Math.max(1.5, e.fracao * 100)}%` } as CSSProperties}
            />
          </div>
          {e.passagem && <span className="pj-funil-pass">{e.passagem}</span>}
        </div>
      ))}
    </div>
  );
}
