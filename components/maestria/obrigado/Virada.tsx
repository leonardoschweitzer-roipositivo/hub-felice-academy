/* A virada de enquadramento: comprar o curso é o começo; o resultado vem
   de operar. Posiciona a consultoria como o atalho para sair das aulas
   e levar o protocolo para a sala de cirurgia. */
export function Virada() {
  return (
    <section className="sec obg-virada">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Por que isso importa agora
          </span>
          <h2>
            As aulas são o mapa. <br />
            <span className="gold-grad">Na consultoria, eu te ajudo a operar o primeiro caso.</span>
          </h2>
        </div>

        <div className="obg-virada-cols reveal d1">
          <p>
            Pela minha experiência, a maioria dos dentistas que faz um curso como esse trava no mesmo
            ponto:
            <strong> “entendi a técnica… mas como eu levo isso para a minha sala?”</strong>.
            Conhecimento de zigomático só vira cirurgia quando você indica o caso certo, planeja com
            critério e entra na sala com confiança — e eu sei que cada realidade clínica é diferente.
          </p>
          <p>
            Por isso, na consultoria eu olho para o <strong>seu</strong> cenário — seus casos, sua
            estrutura e seu instrumental — e te entrego um caminho claro para começar a operar. É a
            diferença entre “ter assistido ao curso” e{' '}
            <strong>colocar o protocolo na sua agenda</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
