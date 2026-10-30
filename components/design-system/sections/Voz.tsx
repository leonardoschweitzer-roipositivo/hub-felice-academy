import { Secao, Sub } from '../ui/Secao';
import { CTAS, EVITAR_TEXTO, FORMULAS_TITULO, VOCABULARIO } from '../content';

export function Voz() {
  return (
    <Secao
      id="voz"
      n="08"
      titulo="Voz e texto"
      lead="Vale para o site e para o Instagram. Português do Brasil, tratando a pessoa por &quot;você&quot;: direto, caloroso e consultivo, nunca vendedor de porta."
    >
      <div className="ds-grid ds-grid--3">
        <div className="ds-card"><span className="eyebrow">Frases</span><p>Curtas. Substantivos concretos da rotina da clínica: orçamento, agenda, cadeira, balcão.</p></div>
        <div className="ds-card"><span className="eyebrow">Tom</span><p>Sem exclamação em série, sem emoji em texto institucional, sem gíria de vendedor.</p></div>
        <div className="ds-card"><span className="eyebrow">Assinatura</span><p>Setup em branco e virada em ouro: o problema em uma frase, a saída na seguinte.</p></div>
      </div>

      <Sub>Fórmulas de título</Sub>
      <div className="ds-formulas">
        {FORMULAS_TITULO.map((f) => (
          <div className="ds-formula" key={f.nome}>
            <span className="eyebrow">{f.nome}</span>
            <p>{f.ex}</p>
            <small>components/{f.arq}</small>
          </div>
        ))}
      </div>

      <Sub>CTA em primeira pessoa, conforme o ticket</Sub>
      <div className="ds-grid ds-grid--4">
        {CTAS.map((c) => (
          <div className="ds-card" key={c.ticket}>
            <span className="eyebrow">{c.ticket}</span>
            {c.ex.map((e) => <p key={e}>&quot;{e}&quot;</p>)}
          </div>
        ))}
      </div>

      <Sub>Vocabulário da marca</Sub>
      <div className="ds-chips">
        {VOCABULARIO.map((v) => <span key={v}>{v}</span>)}
      </div>

      <Sub>Evitar</Sub>
      <ul className="ds-list ds-list--warn">
        {EVITAR_TEXTO.map((e) => <li key={e}>{e}</li>)}
      </ul>
    </Secao>
  );
}
