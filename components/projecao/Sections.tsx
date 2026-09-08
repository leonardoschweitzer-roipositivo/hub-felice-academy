import { PRODUTOS, money, pct, num } from '@/lib/projecao/premissas';
import { RESUMO, RECORTES, LINHAS } from '@/lib/projecao/resumoPadrao';
import { BANDAS, bandaGreenn } from '@/lib/projecao/model';
import {
  HERO, BENCHMARK, APRENDIZAGEM, DESCOBERTA, FASES,
  METRICAS, ANALISES, PREMISSAS_AVISO,
} from './content';

/* Seções estáticas da /projecao-trafego. Todas são server components: só o
   Simulador precisa de estado, e mandar o resto para o cliente seria pagar
   hidratação por texto que nunca muda. */

export function Hero() {
  return (
    <header className="pj-hero">
      <div className="wrap pj-hero-in">
        <span className="eyebrow">{HERO.eyebrow}</span>
        <h1 className="display">{HERO.h1}</h1>
        <p className="lead">{HERO.lead}</p>
        <div className="pj-hero-prods">
          {PRODUTOS.map((p) => (
            <div className="pj-hero-prod" key={p.id}>
              <b>{money(p.ticket)}</b>
              <span>{p.nome}</span>
              <small>{p.objetivoPadrao === 'whatsapp' ? 'WhatsApp' : 'Purchase'}</small>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

/* As cinco faixas do benchmark, com a marca de qual produto cai em cada
   uma. Vem do model.ts para não haver duas tabelas de banda no projeto. */
/* As faixas do benchmark, marcando qual produto cai em cada uma. Deriva de
   BANDAS (model.ts) para não haver duas tabelas de banda no projeto — antes
   isto re-derivava com tickets-sonda mágicos [100, 500, 2000, 5000, 15000],
   que silenciosamente deixaria de cobrir uma faixa nova. */
const FAIXAS = BANDAS.map((b) => ({
  ...b,
  produtos: PRODUTOS.filter((p) => bandaGreenn(p.ticket).rotulo === b.rotulo),
}));

export function Benchmark() {
  return (
    <section className="sec pj-bench">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{BENCHMARK.eyebrow}</span>
          <h2>{BENCHMARK.h2}</h2>
          <p className="lead">{BENCHMARK.lead}</p>
        </div>
        <div className="pj-tabela-scroll">
          <table className="pj-tabela">
            <thead>
              <tr>
                <th>Faixa de ticket</th>
                <th>Conversão média</th>
                <th>Produto nesta faixa</th>
              </tr>
            </thead>
            <tbody>
              {FAIXAS.map((f) => (
                <tr key={f.rotulo} className={f.produtos.length ? 'is-nosso' : ''}>
                  <td>{f.rotulo}</td>
                  <td className="pj-mono">
                    {(f.min * 100).toLocaleString('pt-BR')}% a {(f.max * 100).toLocaleString('pt-BR')}%
                  </td>
                  <td>{f.produtos.map((p) => p.nome).join(', ') || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="pj-nota">{BENCHMARK.nota}</p>
      </div>
    </section>
  );
}

export function Aprendizagem() {
  return (
    <section className="sec pj-aprendizagem">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{APRENDIZAGEM.eyebrow}</span>
          <h2>{APRENDIZAGEM.h2}</h2>
        </div>
        <div className="pj-prosa">
          {APRENDIZAGEM.paragrafos.map((t) => (
            <p key={t.slice(0, 24)}>{t}</p>
          ))}
        </div>
        <p className="pj-destaque">{APRENDIZAGEM.destaque}</p>
      </div>
    </section>
  );
}

export function Descoberta() {
  return (
    <section className="sec pj-desc">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{DESCOBERTA.eyebrow}</span>
          <h2>{DESCOBERTA.h2}</h2>
        </div>

        {/* Os números vêm de resumoPadrao.ts, calculados pelo MESMO motor do
            simulador. A prosa afirma a tese; o número vem do modelo — assim
            mexer numa premissa nunca deixa um parágrafo mentindo. */}
        <div className="pj-tabela-scroll">
          <table className="pj-tabela">
            <thead>
              <tr>
                <th>Recorte</th>
                <th>Produtos</th>
                <th>Verba/mês</th>
                <th>Receita</th>
                <th>ROAS</th>
              </tr>
            </thead>
            <tbody>
              {RECORTES.map((r) => (
                <tr key={r.nome} className={r.nome === 'Todos' ? 'is-nosso' : ''}>
                  <td>{r.nome}</td>
                  <td className="pj-mono">{r.produtos}</td>
                  <td className="pj-mono">{money(r.verba)}</td>
                  <td className="pj-mono">{money(r.receita)}</td>
                  <td className="pj-mono">{r.roas.toFixed(2)}×</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="pj-nota">
          Cenário realista, cada produto rodando exatamente no piso da aprendizagem, receita já
          contando a escada. A Fase 1 rende{' '}
          <b>{RESUMO.vantagemFase1.toFixed(1)}× mais por real investido</b> que o catálogo
          inteiro — com {RESUMO.fase1.produtos} produtos em vez de {RESUMO.todos.produtos}.
        </p>

        <div className="pj-prosa">
          {DESCOBERTA.paragrafos.map((t) => (
            <p key={t.slice(0, 24)}>{t}</p>
          ))}
        </div>

        <div className="pj-tabela-scroll" style={{ marginTop: 34 }}>
          <table className="pj-tabela">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Ticket</th>
                <th>Piso/mês</th>
                <th>Vendas</th>
                <th>CAC</th>
                <th>ROAS</th>
                <th>LTV:CAC</th>
              </tr>
            </thead>
            <tbody>
              {LINHAS.map((l) => (
                <tr key={l.id}>
                  <td>{l.nome}</td>
                  <td className="pj-mono">{money(l.ticket)}</td>
                  <td className="pj-mono">{money(l.verba)}</td>
                  <td className="pj-mono">{num(l.vendas, 1)}</td>
                  <td className="pj-mono">{money(l.cac)}</td>
                  <td className={`pj-mono ${l.roas >= 1 ? 'forte' : 'fraco'}`}>
                    {l.roas.toFixed(2)}×
                  </td>
                  <td className="pj-mono">
                    {l.tier === 'alto' ? '—' : l.ltvCac.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="pj-destaque">
          O objetivo de campanha vale mais que qualquer criativo. CRC e Recepção têm checkout;
          rodados com objetivo <b>Purchase</b>, o piso de cada um sai de{' '}
          {money(RESUMO.crc.whatsapp)} para <b>{money(RESUMO.crc.purchase)}</b> por mês —{' '}
          {RESUMO.crc.multiplo.toFixed(0)} vezes mais — e o total dos oito saltaria para{' '}
          {money(RESUMO.crc.totalSeTodosPurchase)}. É a alavanca mais cara da página, e está a
          um clique no simulador.
        </p>

        <p className="pj-nota">
          A escada responde por {pct(RESUMO.pesoEscada, 0)} da receita projetada com o catálogo
          inteiro no ar ({money(RESUMO.receitaEscada)}/mês) — e depende inteiramente de existir
          alguém contactando a base.
        </p>
      </div>
    </section>
  );
}

export function Fases() {
  return (
    <section className="sec pj-fases">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{FASES.eyebrow}</span>
          <h2>{FASES.h2}</h2>
        </div>
        <div className="pj-fases-grid">
          {FASES.fases.map((f) => (
            <article className="pj-fase" key={f.n}>
              <span className="pj-fase-n">{f.n}</span>
              <span className="pj-fase-quando">{f.quando}</span>
              <h3>{f.titulo}</h3>
              <p>{f.texto}</p>
            </article>
          ))}
        </div>
        <p className="pj-destaque">{FASES.ressalva}</p>
      </div>
    </section>
  );
}

export function Metricas() {
  return (
    <section className="sec pj-metricas">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{METRICAS.eyebrow}</span>
          <h2>{METRICAS.h2}</h2>
          <p className="lead">{METRICAS.lead}</p>
        </div>
        <div className="pj-met-grid">
          {METRICAS.blocos.map((b) => (
            <article className="pj-met" key={b.titulo}>
              <h3>{b.titulo}</h3>
              <p className="pj-met-sub">{b.subtitulo}</p>
              <ul>
                {b.itens.map((i) => (
                  <li key={i.m}>
                    <b>{i.m}</b>
                    <span>{i.d}</span>
                    <em>{i.meta}</em>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="pj-destaque">{METRICAS.mer}</p>
      </div>
    </section>
  );
}

export function Analises() {
  return (
    <section className="sec pj-analises">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{ANALISES.eyebrow}</span>
          <h2>{ANALISES.h2}</h2>
        </div>
        <div className="pj-anal-grid">
          {ANALISES.itens.map((i) => (
            <article className="pj-anal" key={i.t}>
              <h3>{i.t}</h3>
              <p>{i.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Premissas() {
  return (
    <section className="sec pj-premissas">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{PREMISSAS_AVISO.eyebrow}</span>
          <h2>{PREMISSAS_AVISO.h2}</h2>
        </div>
        <div className="pj-prem-grid">
          <article className="pj-prem pj-prem--ok">
            <h3>Medido</h3>
            <ul>
              {PREMISSAS_AVISO.medido.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
          <article className="pj-prem pj-prem--chute">
            <h3>Premissa</h3>
            <ul>
              {PREMISSAS_AVISO.premissa.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        </div>
        <p className="pj-destaque pj-destaque--aviso">{PREMISSAS_AVISO.compromisso}</p>
      </div>
    </section>
  );
}
