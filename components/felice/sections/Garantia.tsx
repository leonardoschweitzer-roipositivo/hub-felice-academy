export function Garantia() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="guarantee reveal">
          <div className="seal">
            <svg className="seal-svg" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path
                  id="seal-arc"
                  d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                />
              </defs>
              {/* anéis concêntricos */}
              <circle className="seal-ring" cx="100" cy="100" r="92" />
              <circle className="seal-ring seal-ring--inner" cx="100" cy="100" r="64" />
              {/* texto curvo ao redor (o grupo gira lentamente) */}
              <g className="seal-rotor">
                <text className="seal-text">
                  <textPath href="#seal-arc" startOffset="0%">
                    GARANTIA INCONDICIONAL · GARANTIA INCONDICIONAL ·
                  </textPath>
                </text>
              </g>
            </svg>
            <div className="seal-core">
              <svg
                className="seal-shield"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2 4 5v6c0 5 3.4 8.3 8 11 4.6-2.7 8-6 8-11V5l-8-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <b>7 DIAS</b>
            </div>
          </div>
          <div>
            <h3>Risco zero para você</h3>
            <p>
              Compre, baixe e aplique. Se em até 7 dias você sentir que o Kit Gestão F4 não é para a
              sua clínica, devolvemos 100% do seu investimento — sem perguntas, sem burocracia. Toda
              a responsabilidade do resultado fica com a gente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
