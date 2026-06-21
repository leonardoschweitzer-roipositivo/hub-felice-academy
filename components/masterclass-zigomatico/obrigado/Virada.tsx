/* A virada de enquadramento: assistir é o começo; o resultado vem de
   aplicar. Posiciona a consultoria como o atalho para sair do "play" e
   dar o próximo passo nos zigomáticos. */
export function Virada() {
  return (
    <section className="sec obg-virada">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Por que isso importa agora
          </span>
          <h2>
            A masterclass abre o caminho. <br />
            <span className="gold-grad">Na consultoria, eu ando ele com você.</span>
          </h2>
        </div>

        <div className="obg-virada-cols reveal d1">
          <p>
            Pela minha experiência, a maioria dos dentistas que assiste a uma aula como essa trava no
            mesmo ponto:
            <strong> “entendi os princípios… mas como eu começo de verdade?”</strong>. Conteúdo de
            zigomático só vira cirurgia quando você indica o caso certo, planeja com critério e entra
            na sala com confiança — e eu sei que cada realidade clínica é diferente.
          </p>
          <p>
            Por isso, na consultoria eu olho para o <strong>seu</strong> cenário — seus casos, sua
            estrutura e o seu momento — e te entrego um caminho claro para dar o próximo passo. É a
            diferença entre “ter assistido” e <strong>colocar em prática</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
