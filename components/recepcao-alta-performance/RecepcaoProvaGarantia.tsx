/* Depoimentos (vídeo) + Garantia do curso "Recepção de Alta Performance". */

import { DEPOIMENTOS } from './content';

export function RecepcaoDepoimentos() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Quem já aplicou
          </span>
          <h2>
            Donos de clínica que transformaram a chegada do paciente em{' '}
            <span className="gold-grad">motivo para voltar</span>
          </h2>
        </div>

        {/* Depoimentos verticais (9:16): o player toca DENTRO do card, então
            o card não pode ser <a> — o link engoliria o clique do play. Os
            cards sem legenda ganham --solo para o vídeo não deixar sobra de
            margem embaixo. */}
        <div className="mz-videos mz-videos--depo">
          {DEPOIMENTOS.map((d, i) => {
            const legenda = d.texto || d.nome;
            const cls = `mz-video reveal${legenda ? '' : ' mz-video--solo'}${i > 0 ? ` d${i}` : ''}`;
            const titulo = d.nome ? `Depoimento de ${d.nome}` : `Depoimento de aluno ${i + 1}`;
            return (
              <div key={d.embedId ?? d.nome ?? i} className={cls}>
                <div className="mz-depo-video">
                  {d.embed ? (
                    <iframe
                      id={d.embedId}
                      src={d.embed}
                      title={titulo}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : d.thumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={d.thumb} alt={titulo} loading="lazy" />
                  ) : (
                    <span className="mz-depo-ph">Depoimento em vídeo em breve</span>
                  )}
                </div>
                {d.texto && <p>&quot;{d.texto}&quot;</p>}
                {d.nome && (
                  <div className="who">
                    <b>{d.nome}</b>
                    {d.meta && <small>{d.meta}</small>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function RecepcaoGarantia() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="guarantee reveal">
          <div className="seal">
            {/* O id do arco é próprio desta landing — um id colado de outra
                página é bomba-relógio se as duas seções conviverem no DOM. */}
            <svg className="seal-svg" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="seal-arc-rap" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <circle className="seal-ring" cx="100" cy="100" r="92" />
              <circle className="seal-ring seal-ring--inner" cx="100" cy="100" r="64" />
              <g className="seal-rotor">
                <text className="seal-text">
                  <textPath href="#seal-arc-rap" startOffset="0%">
                    GARANTIA INCONDICIONAL · 7 DIAS · GARANTIA INCONDICIONAL ·
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
              Coloque a sua equipe nas primeiras aulas e comece a aplicar no balcão. Se o Recepção de
              Alta Performance não for para a sua clínica, peça o reembolso em até 7 dias —
              devolvemos 100% do valor, sem perguntas e sem burocracia. A decisão de continuar é
              totalmente sua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
