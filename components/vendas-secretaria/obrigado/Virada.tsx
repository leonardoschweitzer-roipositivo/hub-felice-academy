/* A virada de enquadramento: comprar o curso é o começo; o resultado vem
   de a recepção mudar o jeito de atender. Posiciona a consultoria como o
   atalho entre a aula assistida e o processo rodando na clínica. */
export function Virada() {
  return (
    <section className="sec obg-virada">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Por que isso importa agora
          </span>
          <h2>
            As aulas treinam a sua equipe. <br />
            <span className="gold-grad">Na consultoria, a gente implanta na sua clínica.</span>
          </h2>
        </div>

        <div className="obg-virada-cols reveal d1">
          <p>
            Pela minha experiência, a maioria dos donos de clínica que compra um treinamento para a
            recepção trava no mesmo ponto:
            <strong> “a equipe assistiu… e continuou fazendo do mesmo jeito”</strong>. Script só vira
            agendamento quando alguém define quem usa, em qual momento e o que é cobrado no fim da
            semana — e isso muda de clínica para clínica.
          </p>
          <p>
            Por isso, na consultoria eu olho para a <strong>sua</strong> operação — quem atende, como
            o orçamento é apresentado hoje, o que acontece depois do “vou pensar” — e a gente sai com
            um plano de implantação. É a diferença entre{' '}
            <strong>ter comprado um curso</strong> e ver a conversão da recepção subir.
          </p>
        </div>
      </div>
    </section>
  );
}
