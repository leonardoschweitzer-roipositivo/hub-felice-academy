import { Secao, Sub } from '../ui/Secao';
import { Specimen } from '../ui/Specimen';
import { FaqExemplo } from './FaqExemplo';
import { ATENCOES_COMPONENTES, COMPONENTES_UI } from '../content';

const OUTROS = [
  ['Autoridade', '.authority, .auth-grid, .auth-photo, .auth-name, .auth-role', 'styles/felice.css'],
  ['Depoimento', '.testi, .quote (.stars, .who, .av)', 'styles/felice.css (usar só com depoimento real)'],
  ['Garantia', '.guarantee, .seal (selo giratório em SVG)', 'styles/felice.css'],
  ['Faixa de oferta', '.ribbon, .stack-list, .total-row', 'styles/felice.css'],
  ['Urgência', '.urgency-bar, .countdown, .live-viewers', 'styles/felice.css (ver aviso em UrgencyBar)'],
  ['Header e footer', '.felice-header, .nav, .felice-footer', 'styles/felice.css, components/felice/sections/Footer.tsx'],
  ['WhatsApp flutuante', '.wpp', 'styles/felice.css'],
  ['Formulário de funil', '.cons-field, .cons-chip, .cons-progress', 'styles/consultoria.css'],
  ['Card de hub', '.hub-card, .hub-tag, .hub-state', 'styles/hub.css (exige .felice-hub)'],
] as const;

export function Componentes() {
  return (
    <Secao
      id="componentes"
      n="06"
      titulo="Componentes web"
      lead="Exemplos vivos, renderizados com o CSS real do site. Cada um traz a classe, a origem e um snippet para copiar."
    >
      <Specimen
        titulo="Botões"
        classe=".btn .btn-primary | .btn-ghost | .btn-lg | .btn-block"
        origem="styles/felice.css:146"
        snippet={`<a className="btn btn-primary">Quero dominar os zigomáticos <span className="arrow">→</span></a>\n<a className="btn btn-ghost">Ver os módulos</a>`}
      >
        <div className="ds-row">
          <a className="btn btn-primary" href="#componentes">Quero dominar os zigomáticos <span className="arrow">→</span></a>
          <a className="btn btn-ghost" href="#componentes">Ver os módulos</a>
          <a className="btn btn-primary btn-lg" href="#componentes">Garantir minha vaga</a>
        </div>
      </Specimen>

      <Specimen
        titulo="Eyebrow e tag"
        classe=".eyebrow | .comp-tag"
        origem="styles/felice.css:110 e :858"
        snippet={`<span className="eyebrow">Comece agora</span>\n<span className="comp-tag">Clínica</span>`}
      >
        <div className="ds-row">
          <span className="eyebrow">Comece agora</span>
          <span className="comp-tag">Clínica</span>
        </div>
      </Specimen>

      <Specimen
        titulo="Cabeçalho de seção"
        classe=".sec-head (.center)"
        origem="styles/felice.css:624"
        snippet={`<div className="sec-head center">\n  <span className="eyebrow" style={{ justifyContent: 'center' }}>Dúvidas frequentes</span>\n  <h2>Antes de começar</h2>\n</div>`}
      >
        <div className="sec-head center" style={{ marginBottom: 0 }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Dúvidas frequentes</span>
          <h2>Antes de começar</h2>
        </div>
      </Specimen>

      <Specimen
        titulo="Faixa de números"
        classe=".numeros-grid > .numeros-item"
        origem="styles/felice.css:575. Sempre 4 itens (grade fixa em 4 colunas)"
        snippet={`<div className="numeros-grid">\n  <div className="numeros-item"><b>155</b><span>orçamentos aprovados</span></div>\n  …\n</div>`}
      >
        <div className="numeros-grid">
          {[['203', 'orçamentos apresentados'], ['155', 'aprovados'], ['76,35%', 'de conversão'], ['4 sem.', 'de consultoria']].map(([n, l]) => (
            <div className="numeros-item" key={l}><b>{n}</b><span>{l}</span></div>
          ))}
        </div>
      </Specimen>

      <Specimen
        titulo="Card de pilar"
        classe=".pillars > .pillar"
        origem="styles/felice.css:723"
        snippet={`<div className="pillar">\n  <span className="num">01</span>\n  <h3>Atendimento</h3>\n  <p>Descrição curta.</p>\n</div>`}
      >
        <div className="pillars">
          {[['01', 'Atendimento'], ['02', 'Marketing']].map(([n, t]) => (
            <div className="pillar" key={n}>
              <span className="num">{n}</span>
              <h3>{t}</h3>
              <p>Descrição curta do pilar, em até duas linhas.</p>
            </div>
          ))}
        </div>
      </Specimen>

      <Specimen
        titulo="Oferta e preço"
        classe=".offer-card > .ribbon + .offer-body > .price-box"
        origem="styles/felice.css:1071 e :1148"
        snippet={`<div className="offer-card">\n  <div className="ribbon">Oferta</div>\n  <div className="offer-body">\n    <h3>Kit Sistema de Gestão F4</h3>\n    <div className="price-box">\n      <div className="small">12x de R$ 9,97 ou</div>\n      <div className="big"><span className="cur">R$</span>97</div>\n    </div>\n    <a className="btn btn-primary btn-block">Liberar Acesso por R$ 97</a>\n  </div>\n</div>`}
        fundo="ink2"
      >
        <div className="offer-card">
          <div className="ribbon">Oferta</div>
          <div className="offer-body">
            <h3>Kit Sistema de Gestão F4</h3>
            <div className="price-box">
              <div className="small">12x de R$ 9,97 ou</div>
              <div className="big"><span className="cur">R$</span>97</div>
              <div className="note">pagamento único</div>
            </div>
            <a className="btn btn-primary btn-block" href="#componentes">Liberar Acesso por R$ 97</a>
          </div>
        </div>
      </Specimen>

      <Specimen
        titulo="FAQ"
        classe=".faq > .acc (.open) > .acc-q + .acc-a"
        origem="styles/felice.css:1296. O max-height de .acc-a é inline."
      >
        <FaqExemplo />
      </Specimen>

      <Sub>Outros padrões</Sub>
      <div className="ds-table-wrap">
        <table className="ds-table">
          <thead><tr><th>Padrão</th><th>Classes</th><th>Onde está</th></tr></thead>
          <tbody>
            {OUTROS.map(([a, b, c]) => (
              <tr key={a}><td><b>{a}</b></td><td><code>{b}</code></td><td>{c}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <Sub>Componentes React compartilhados</Sub>
      <div className="ds-table-wrap">
        <table className="ds-table">
          <thead><tr><th>Componente</th><th>Quando usar</th></tr></thead>
          <tbody>
            {COMPONENTES_UI.map((c) => (
              <tr key={c.nome}><td><b>{c.nome}</b><small>{c.arq}</small></td><td>{c.quando}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <Sub>Pontos de atenção</Sub>
      <ul className="ds-list ds-list--warn">
        {ATENCOES_COMPONENTES.map((a) => <li key={a}>{a}</li>)}
      </ul>
    </Secao>
  );
}
