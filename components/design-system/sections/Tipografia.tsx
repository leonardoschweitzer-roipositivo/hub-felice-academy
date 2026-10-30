import { Secao, Sub } from '../ui/Secao';
import { ESCALA_TIPO, NIVEIS_ESPACAMENTO, TEXTO_PEQUENO } from '../content';

export function Tipografia() {
  return (
    <Secao
      id="tipografia"
      n="04"
      titulo="Tipografia"
      lead="Poppins nos títulos, Lato no texto. Em código, as duas vêm de app/fonts.ts (fontVars)."
    >
      <div className="ds-grid ds-grid--2">
        <div className="ds-card">
          <span className="eyebrow">Títulos</span>
          <p className="ds-font ds-font--display">Poppins</p>
          <p className="ds-mut">Pesos carregados: 600, 700 e 800. Padrão dos títulos: 700.</p>
          <p className="ds-alfabeto ds-font--display">Aa Bb Cc Dd 0123456789</p>
        </div>
        <div className="ds-card">
          <span className="eyebrow">Texto</span>
          <p className="ds-font ds-font--body">Lato</p>
          <p className="ds-mut">Pesos carregados: 300, 400 e 700. Não existem 500 nem 600: o navegador troca 600 por 700 e 500 por 400. Em código novo, use 400 ou 700.</p>
          <p className="ds-alfabeto ds-font--body">Aa Bb Cc Dd 0123456789</p>
        </div>
      </div>
      <p className="ds-mut">
        Decisão: vale o site publicado (Poppins em caixa mista). A caixa-alta condensada citada no PRD aparece só nos mockups de livro.
      </p>

      <Sub>Escala</Sub>
      <div className="ds-escala">
        {ESCALA_TIPO.map((t) => (
          <div className="ds-escala-row" key={t.papel}>
            <div className="ds-escala-meta">
              <b>{t.papel}</b>
              <code>{t.css}</code>
              <small>peso {t.peso} · linha {t.lh} · espaçamento {t.ls}</small>
            </div>
            <div className={t.cls}>{t.amostra}</div>
          </div>
        ))}
      </div>

      <Sub>Assinatura: virada em ouro</Sub>
      <div className="ds-assinatura">
        <h3 className="ds-t-h2">Pare de encaminhar <span className="gold-grad">o caso da sua vida.</span></h3>
        <p className="ds-mut">Título em branco com a virada em ouro (<code>.gold-grad</code>). No máximo um destaque por título.</p>
      </div>

      <Sub>Rótulos em maiúsculas</Sub>
      <p className="ds-mut">Maiúsculas só em rótulos, nunca em títulos. Três níveis de espaçamento entre letras.</p>
      <div className="ds-grid ds-grid--3">
        {NIVEIS_ESPACAMENTO.map((n) => (
          <div className="ds-card" key={n.ls}>
            <span className="ds-rotulo" style={{ letterSpacing: n.ls }}>{n.ex}</span>
            <code>{n.ls}</code>
            <small>{n.uso}</small>
          </div>
        ))}
      </div>

      <Sub>Texto pequeno</Sub>
      <div className="ds-pequenos">
        {TEXTO_PEQUENO.map((t) => (
          <div key={t.rem}><span style={{ fontSize: t.rem }}>Texto de exemplo em {t.rem}</span><small>{t.uso}</small></div>
        ))}
      </div>
    </Secao>
  );
}
