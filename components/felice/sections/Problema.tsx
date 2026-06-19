export function Problema() {
  return (
    <section className="sec problem">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O diagnóstico
          </span>
          <h2>
            Sua agenda funciona, mas a <span className="gold-grad">gestão vive no improviso</span>?
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Se a clínica só anda quando você está presente, o problema não é falta de esforço — é
            falta de método.
          </p>
        </div>
        <div className="problem-photo reveal d1">
          <picture>
            <source
              media="(max-width: 720px)"
              srcSet="/images/dentista-cansado-mobile.jpg"
            />
            <img
              src="/images/dentista-cansado-desktop.jpg"
              alt="Dentista cansado e sobrecarregado com a gestão da clínica"
              width={1000}
              height={545}
              loading="lazy"
            />
          </picture>
        </div>
        <div className="pains">
          <div className="pain reveal">
            <div className="x">✕</div>
            <p>
              <b>Cada um atende de um jeito</b> — e o padrão de excelência se perde no dia a dia.
            </p>
          </div>
          <div className="pain reveal d1">
            <div className="x">✕</div>
            <p>
              Chegam contatos, <b>mas viram agendamento? Nem sempre.</b> Oportunidades escorrem
              pelos dedos.
            </p>
          </div>
          <div className="pain reveal d2">
            <div className="x">✕</div>
            <p>
              <b>Só você sabe como tudo funciona</b> — e isso te mantém preso à operação em vez de
              crescer.
            </p>
          </div>
          <div className="pain reveal d3">
            <div className="x">✕</div>
            <p>
              O marketing acontece <b>&quot;quando dá&quot;</b>, sem constância nem estratégia para
              atrair pacientes.
            </p>
          </div>
        </div>
        <div className="turn reveal d2">
          <p className="display">
            Resultado: retrabalho, paciente perdido e um faturamento que{' '}
            <span className="gold-grad">não cresce.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
