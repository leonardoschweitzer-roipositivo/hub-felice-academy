'use client';

import { useState } from 'react';

type Camada = {
  id: 'frente' | 'motor' | 'comando';
  nome: string;
  foco: string;
  papeis: string[];
  metrica: string;
};

const CAMADAS: Camada[] = [
  {
    id: 'frente',
    nome: 'Linha de Frente',
    foco: 'Acolhimento e Conversão',
    papeis: ['Recepção', 'CRC (Agendamento)', 'CRC Comercial'],
    metrica: 'Taxa de conversão de contatos em agendamentos e de orçamentos em tratamentos.',
  },
  {
    id: 'motor',
    nome: 'Motor Clínico',
    foco: 'Precisão e Biossegurança',
    papeis: ['TSB', 'ASB', 'Enfermagem', 'Radiologia', 'Serviços Gerais'],
    metrica: 'Ciclo fechado de biossegurança e tempo de preparo entre atendimentos.',
  },
  {
    id: 'comando',
    nome: 'Centro de Comando',
    foco: 'Previsibilidade e Crescimento',
    papeis: ['Gerente / Financeiro'],
    metrica: 'KPIs: faturamento, ticket médio, inadimplência e lucratividade.',
  },
];

/** Diagrama interativo do Ecossistema de Excelência Clínica (3 camadas). */
export function EcosystemDiagram() {
  const [active, setActive] = useState<Camada['id']>('frente');
  const camada = CAMADAS.find((c) => c.id === active) ?? CAMADAS[0];

  return (
    <div className="kit-ecosystem">
      <div className="kit-ecosystem-layers">
        {CAMADAS.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`kit-ecosystem-layer kit-ecosystem-layer--${c.id}${c.id === active ? ' is-active' : ''}`}
            aria-pressed={c.id === active}
            onClick={() => setActive(c.id)}
          >
            <strong>{c.nome}</strong>
            <span>{c.foco}</span>
          </button>
        ))}
      </div>

      <div className="kit-ecosystem-detail">
        <h4>{camada.nome}</h4>
        <p className="kit-ecosystem-foco">{camada.foco}</p>
        <div className="kit-ecosystem-roles">
          {camada.papeis.map((p) => (
            <span className="kit-chip" key={p}>
              {p}
            </span>
          ))}
        </div>
        <p className="kit-ecosystem-metrica">
          <strong>Métrica-chave:</strong> {camada.metrica}
        </p>
      </div>
    </div>
  );
}
