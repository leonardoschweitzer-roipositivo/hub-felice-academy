'use client';

import Link from 'next/link';
import { Icon, type IconName } from '../icons';
import { useStore } from '../store/PlatformStore';
import { styleVars } from '../util';
import {
  ETAPAS,
  ORIGENS,
  formatBRL,
  formatData,
  type EtapaPipeline,
} from '../data/vendas';

type KpiDef = {
  icon: IconName;
  label: string;
  value: string;
  sub?: string;
};

const ATALHOS: { href: string; label: string; icon: IconName; desc: string }[] = [
  { href: '/plataforma/vendas/pipeline', label: 'Pipeline', icon: 'kanban', desc: 'Arraste leads entre etapas' },
  { href: '/plataforma/vendas/leads', label: 'Leads', icon: 'target', desc: 'Lista completa e filtros' },
  { href: '/plataforma/vendas/clientes', label: 'Clientes', icon: 'user-check', desc: 'Base e LTV' },
  { href: '/plataforma/vendas/atendimento', label: 'Atendimento', icon: 'whatsapp', desc: 'Conversas no WhatsApp' },
  { href: '/plataforma/vendas/automacoes', label: 'Automação', icon: 'workflow', desc: 'Mensagens automáticas' },
];

export function VendasOverview() {
  const { leads, conversas, vendasKpis } = useStore();
  const k = vendasKpis();

  const kpis: KpiDef[] = [
    { icon: 'target', label: 'Leads em aberto', value: String(k.leadsAbertos), sub: 'no funil' },
    { icon: 'dollar', label: 'Valor em pipeline', value: formatBRL(k.valorPipeline), sub: 'oportunidades abertas' },
    { icon: 'trending-up', label: 'Taxa de conversão', value: `${k.taxaConversao}%`, sub: 'ganhos / fechados' },
    { icon: 'check-circle', label: 'Vendas ganhas', value: String(k.vendasGanhas), sub: formatBRL(k.receitaGanha) },
    { icon: 'award', label: 'Ticket médio', value: formatBRL(k.ticketMedio), sub: 'por venda' },
    { icon: 'message-square', label: 'Conversas abertas', value: String(k.conversasAbertas), sub: `${k.naoLidas} não lidas` },
  ];

  // Funil: contagem por etapa (na ordem do pipeline, sem perdidos).
  const funil = ETAPAS.filter((e) => e.slug !== 'perdido').map((e) => ({
    ...e,
    qtd: leads.filter((l) => l.etapa === e.slug).length,
  }));
  const maxFunil = Math.max(1, ...funil.map((f) => f.qtd));

  // Atividade recente: últimas interações de leads + últimas mensagens.
  const atividades = [
    ...leads.map((l) => ({
      id: `lead-${l.id}`,
      icon: 'target' as IconName,
      texto: `${l.nome} — ${etapaLabel(l.etapa)}`,
      meta: `${ORIGENS[l.origem]} · ${l.interesse}`,
      data: l.ultimaInteracao,
    })),
    ...conversas
      .filter((c) => c.mensagens.length)
      .map((c) => {
        const last = c.mensagens[c.mensagens.length - 1];
        return {
          id: `conv-${c.id}`,
          icon: 'whatsapp' as IconName,
          texto: `${c.nome}`,
          meta: last.texto.length > 54 ? `${last.texto.slice(0, 54)}…` : last.texto,
          data: last.hora,
        };
      }),
  ]
    .sort((a, b) => (a.data < b.data ? 1 : -1))
    .slice(0, 8);

  return (
    <>
      <div className="plat-page-head reveal">
        <span className="eyebrow">Vendas</span>
        <h1>
          Seu <span className="gold-grad">comercial</span> num só lugar
        </h1>
        <p className="lead">
          Pipeline, leads, clientes, atendimento no WhatsApp e automações — acompanhe o funil e
          transforme contatos em alunos.
        </p>
      </div>

      <div className="vendas-kpis reveal d1">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="vendas-kpi">
            <span className="vk-ico">
              <Icon name={kpi.icon} size={20} />
            </span>
            <div className="vk-num">{kpi.value}</div>
            <div className="vk-label">{kpi.label}</div>
            {kpi.sub && <div className="vk-sub">{kpi.sub}</div>}
          </div>
        ))}
      </div>

      <div className="vendas-overview-cols reveal d2">
        <section className="panel">
          <div className="panel-head">
            <h3>Funil de vendas</h3>
            <Link href="/plataforma/vendas/pipeline" className="vendas-link">
              Ver pipeline <Icon name="arrow-right" size={15} />
            </Link>
          </div>
          <div className="funil-body">
            {funil.map((f) => (
              <div key={f.slug} className="funil-row" style={styleVars({ '--c': f.cor })}>
                <span className="funil-nome">{f.nome}</span>
                <div className="funil-bar-wrap">
                  <div
                    className="funil-bar"
                    style={styleVars({ width: `${(f.qtd / maxFunil) * 100}%` })}
                  />
                </div>
                <span className="funil-qtd">{f.qtd}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-head">
            <h3>Atividade recente</h3>
          </div>
          <div className="panel-body">
            {atividades.map((a) => (
              <div key={a.id} className="mini-row">
                <span className="mr-ico">
                  <Icon name={a.icon} size={16} />
                </span>
                <div className="mr-body">
                  <b>{a.texto}</b>
                  <span>{a.meta}</span>
                </div>
                <span className="mr-data">{formatData(a.data)}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="vendas-atalhos reveal d3">
        {ATALHOS.map((a) => (
          <Link key={a.href} href={a.href} className="atalho-card">
            <span className="atalho-ico">
              <Icon name={a.icon} size={20} />
            </span>
            <div>
              <b>{a.label}</b>
              <span>{a.desc}</span>
            </div>
            <Icon name="chevron-right" size={16} />
          </Link>
        ))}
      </div>
    </>
  );
}

function etapaLabel(slug: EtapaPipeline): string {
  return ETAPAS.find((e) => e.slug === slug)?.nome ?? slug;
}
