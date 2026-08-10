import { PILARES } from './content';

/* ============================================================
   O que é feito em cada setup (pág. 11 e 12 do deck).
   Reusa as classes de "módulos" da Maestria (.mz-mods / .mz-mod):
   cada card é um pilar e lista, bloco a bloco, o que sai da reunião.
   ============================================================ */
export function ConsultoriaPilares() {
  return (
    <section className="sec" id="setups">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O que será feito
          </span>
          <h2>
            Setup por setup, <span className="gold-grad">item por item</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Nada de diagnóstico genérico. Estes são os pontos que auditamos e estruturamos em cada
            um dos 4 setups da consultoria.
          </p>
        </div>

        <div className="mz-mods cons-mods">
          {PILARES.map((p, i) => (
            <article className={`mz-mod reveal${i ? ` d${i % 4}` : ''}`} key={p.n}>
              <header className="mz-mod-head">
                <span className="mz-mod-num">Setup {p.n}</span>
                <h3>{p.titulo}</h3>
                <p>{p.resumo}</p>
              </header>
              {p.blocos.map((bloco, bi) => (
                <div className="mz-mod-bloco" key={bi}>
                  {bloco.sub && <span className="mz-mod-sub">{bloco.sub}</span>}
                  <ul className="mz-aulas">
                    {bloco.itens.map((item, ii) => (
                      <li key={item}>
                        <span className="mz-aula-n">{String(ii + 1).padStart(2, '0')}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
