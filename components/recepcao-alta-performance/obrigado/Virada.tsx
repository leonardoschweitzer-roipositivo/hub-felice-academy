/* A virada de enquadramento: comprar o curso é o começo; o resultado vem
   de o balcão mudar de verdade. Posiciona a consultoria como o atalho
   entre a aula assistida e a rotina nova rodando na recepção. */
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
            <span className="gold-grad">Na consultoria, a gente muda o seu balcão.</span>
          </h2>
        </div>

        <div className="obg-virada-cols reveal d1">
          <p>
            Pela minha experiência, a maioria dos donos de clínica que compra um treinamento de
            atendimento trava no mesmo ponto:
            <strong> “a equipe gostou do curso… e a recepção continuou igual”</strong>. Encantamento
            não vem de motivação, vem de rotina: quem faz o quê, em qual momento da visita do
            paciente, e o que é conferido no fim do dia.
          </p>
          <p>
            Por isso, na consultoria eu olho para a <strong>sua</strong> recepção — como o paciente é
            recebido hoje, quanto tempo ele espera, o que acontece quando falta — e a gente sai com
            um plano do que muda primeiro. É a diferença entre{' '}
            <strong>ter comprado um curso</strong> e ter uma recepção que vira comentário.
          </p>
        </div>
      </div>
    </section>
  );
}
