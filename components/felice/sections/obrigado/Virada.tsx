/* A virada de enquadramento: comprar é o começo; o resultado vem da
   aplicação. Posiciona a consultoria como o atalho para isso. */
export function Virada() {
  return (
    <section className="sec obg-virada">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Por que isso importa agora
          </span>
          <h2>
            Os documentos são o mapa. <br />
            <span className="gold-grad">Na consultoria, eu te ajudo a percorrer.</span>
          </h2>
        </div>

        <div className="obg-virada-cols reveal d1">
          <p>
            Pela minha experiência, a maioria das clínicas que compra um material como esse trava no
            mesmo ponto:
            <strong> “ótimo conteúdo… mas por onde eu começo?”</strong>. POPs, scripts e calendário
            só viram resultado quando entram na rotina da equipe — e eu sei que cada clínica tem uma
            realidade diferente.
          </p>
          <p>
            Por isso, na consultoria eu olho para a <strong>sua</strong> operação, defino com você as
            prioridades e te entrego um caminho claro de implementação. É a diferença entre “ter o
            kit” e <strong>colocar o kit para rodar</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
