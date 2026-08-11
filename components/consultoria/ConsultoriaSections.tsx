import Image from 'next/image';
import { check, Check } from '@/components/felice/ui/icons';
import {
  HERO,
  HERO_CARD,
  HERO_MARQUEE,
  STATS,
  DORES,
  DORES_FECHAMENTO,
  SOLUCOES,
  METODO_HEAD,
  METODO,
  CICLO,
  CICLO_INTRO,
  CICLO_SEMANAS,
  CICLO_FAIXAS,
  ENTREGAS,
  CLINICA,
  ACADEMY,
  MENTOR,
  OFERTA,
  FINAL,
  OFERTA_ANCHOR,
  APLICACAO_URL,
} from './content';

/* ============================================================
   CONSULTORIA GESTÃO F4 · Seções da landing (padrão Felice / dourado)
   Fork estrutural da Mentoria de Gestão — mesmas classes de
   felice.css + maestria.css. Copy e dados vêm de ./content.ts.

   Diferença de estrutura para as outras landings: não há seção de
   depoimentos (não existe nenhum de cliente de consultoria ainda) e
   nenhuma seção mostra preço.
   ============================================================ */

/* ---------- Hero ----------
   Duas colunas: headline + CTAs à esquerda, cards "glass" de prova à
   direita. A foto de fundo usa `.cons-hero-photo` (consultoria-landing.css)
   e não a `.mz-hero-photo` da Maestria, que traz a foto do zigomático
   hardcoded no CSS. */
export function ConsultoriaHero() {
  return (
    <section className="hero mz-hero-sec cons-hero-sec" id="topo">
      <div className="hero-bg" />
      <div className="cons-hero-photo" aria-hidden="true" />

      <div className="wrap mz-hero">
        {/* LEFT */}
        <div className="mz-hero-left">
          <div className="mz-badge reveal">
            <span>{HERO.eyebrow}</span>
            <svg className="mz-badge-star" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
            </svg>
          </div>

          <h1 className="mz-h1 reveal d1">
            {HERO.titlePre} <span className="gold-grad">{HERO.titleGold}</span>
          </h1>

          <p className="lead reveal d2">{HERO.lead}</p>

          <div className="hero-cta reveal d3">
            <a href={OFERTA_ANCHOR} className="btn btn-primary btn-lg">
              {HERO.ctaPrimary} <span className="arrow">→</span>
            </a>
            <a href="#ciclo" className="btn btn-ghost btn-lg">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              {HERO.ctaSecondary}
            </a>
          </div>

          <div className="hero-trust reveal d4">
            {HERO.trust.map((t) => (
              <span key={t}>
                {check} {t}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="mz-hero-right">
          {/* Card de stats (glass) */}
          <div className="mz-card mz-card--stats reveal d2">
            <span className="mz-card-glow" aria-hidden="true" />
            <div className="mz-card-in">
              <div className="mz-card-head">
                <span className="mz-card-ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3.5" />
                    <path d="M12 1.5v3.5M12 19v3.5M1.5 12H5M19 12h3.5" />
                  </svg>
                </span>
                <div>
                  <div className="mz-card-big">{HERO_CARD.destaque.num}</div>
                  <div className="mz-card-sub">{HERO_CARD.destaque.label}</div>
                </div>
              </div>

              <div className="mz-prog">
                <div className="mz-prog-top">
                  <span>{HERO_CARD.progresso.label}</span>
                  <span className="mz-prog-val">{HERO_CARD.progresso.valor}%</span>
                </div>
                <div className="mz-prog-track">
                  <div className="mz-prog-fill" style={{ width: `${HERO_CARD.progresso.valor}%` }} />
                </div>
              </div>

              <div className="mz-card-rule" />

              <div className="mz-mini">
                {HERO_CARD.mini.map((m) => (
                  <div className="mz-mini-item" key={m.l}>
                    <b>{m.v}</b>
                    <span>{m.l}</span>
                  </div>
                ))}
              </div>

              <div className="mz-pills">
                <span className="mz-pill">
                  <span className="mz-dot" aria-hidden="true">
                    <span className="mz-dot-ping" />
                    <span className="mz-dot-core" />
                  </span>
                  {HERO_CARD.pills.live}
                </span>
                <span className="mz-pill">
                  <svg className="mz-crown" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3 7l4.5 4L12 4l4.5 7L21 7v11H3V7z" />
                  </svg>
                  {HERO_CARD.pills.premium}
                </span>
              </div>
            </div>
          </div>

          {/* Card marquee (glass) */}
          <div className="mz-card mz-card--marq reveal d3">
            <h3 className="mz-marq-title">{HERO_MARQUEE.titulo}</h3>
            <div className="mz-marq-mask">
              <div className="mz-marq-track">
                {[...HERO_MARQUEE.itens, ...HERO_MARQUEE.itens].map((it, i) => (
                  <span className="mz-marq-item" key={`${it}-${i}`}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l2.2 5.8L20 10l-5.8 2.2L12 18l-2.2-5.8L4 10l5.8-2.2L12 2z" />
                    </svg>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#prova" className="hero-scroll reveal d4" aria-label="Role para baixo">
        <span>Role para descobrir</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}

/* ---------- Números / prova ---------- */
export function ConsultoriaNumeros() {
  return (
    <section className="numeros" id="prova">
      <div className="wrap numeros-grid">
        {STATS.map((s) => (
          <div className="numeros-item reveal" key={s.label}>
            <b>{s.num}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Problema / dores (pág. 4 do deck) ---------- */
export function ConsultoriaProblema() {
  return (
    <section className="sec problem">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O diagnóstico
          </span>
          <h2>
            O que realmente está impedindo a sua clínica de{' '}
            <span className="gold-grad">alcançar grandes números?</span>
          </h2>
        </div>
        <div className="pains cons-pains">
          {DORES.map((d, i) => (
            <div className={`pain reveal${i ? ` d${i}` : ''}`} key={d.titulo}>
              <div className="x">✕</div>
              <p>
                <b>{d.titulo}</b> — {d.texto}
              </p>
            </div>
          ))}
        </div>
        <div className="turn reveal d2">
          <p className="display">
            {DORES_FECHAMENTO.pre} <span className="gold-grad">{DORES_FECHAMENTO.gold}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Solução (pág. 5 do deck) ---------- */
export function ConsultoriaSolucao() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            A virada
          </span>
          <h2>
            Como a Consultoria Gestão F4 <span className="gold-grad">resolve esses problemas</span>
          </h2>
        </div>
        <div className="pillars">
          {SOLUCOES.map((s, i) => (
            <div className={`pillar reveal${i ? ` d${i}` : ''}`} key={s.titulo}>
              <div className="num">{s.n}</div>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Como vamos fazer na prática (pág. 6 a 9) ---------- */
export function ConsultoriaMetodo() {
  return (
    <section className="sec" id="metodo">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            {METODO_HEAD.eyebrow}
          </span>
          <h2>
            {METODO_HEAD.titlePre} <span className="gold-grad">{METODO_HEAD.titleGold}</span>
          </h2>
        </div>
        <div className="pillars">
          {METODO.map((m, i) => (
            <div className={`pillar reveal${i ? ` d${i}` : ''}`} key={m.titulo}>
              <div className="num">{m.n}</div>
              <h3>{m.titulo}</h3>
              <p>{m.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- O Ciclo da Consultoria (pág. 10) ---------- */
export function ConsultoriaCiclo() {
  return (
    <section className="sec" id="ciclo">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O ciclo da consultoria
          </span>
          <h2>
            4 setups que cobrem <span className="gold-grad">a clínica inteira</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            {CICLO_INTRO}
          </p>
        </div>
        {/* Gantt: os 4 setups eram cards soltos e não diziam QUANDO cada um
            acontece. Aqui viram barras numa linha do tempo de 4 semanas.
            O eixo (`--cols`) sai de CICLO_SEMANAS, e cada barra é posicionada
            pelo campo `semana` — nada é inferido do índice. */}
        <div className="cons-gantt reveal" style={{ ['--cols' as string]: CICLO_SEMANAS }}>
          <div className="cons-gantt-head">
            <span className="cons-gantt-canto" aria-hidden="true" />
            <div className="cons-gantt-eixo">
              {Array.from({ length: CICLO_SEMANAS }, (_, i) => (
                <span className="cons-gantt-semana" key={i}>
                  Semana {i + 1}
                </span>
              ))}
            </div>
          </div>

          {CICLO.map((c) => (
            <div className="cons-gantt-linha" key={c.titulo}>
              <div className="cons-gantt-rotulo">
                <span className="cons-setup">{c.setup}</span>
                <h3>{c.titulo}</h3>
                <p>{c.objetivo}</p>
              </div>
              <div className="cons-gantt-trilha">
                {/* Duas versões do rótulo: no desktop o eixo de semanas está
                    logo acima, mas a barra tem largura de sobra; no mobile o
                    eixo some e a barra fica com ~77px — só cabe "S3". */}
                <span className="cons-gantt-barra" style={{ gridColumn: `${c.semana} / span 1` }}>
                  <span className="cons-gantt-longo">Encontro · semana {c.semana}</span>
                  <span className="cons-gantt-curto" aria-hidden="true">
                    S{c.semana}
                  </span>
                </span>
              </div>
            </div>
          ))}

          {/* Nas faixas o título fica no rótulo, como nas linhas de setup — e
              não dentro da barra. Dentro, o texto de "16 entregáveis +
              planejamento de 12 meses" estourava a barra de uma semana só. */}
          {CICLO_FAIXAS.map((f) => (
            <div className="cons-gantt-linha cons-gantt-linha--faixa" key={f.titulo}>
              <div className="cons-gantt-rotulo">
                <h3>{f.titulo}</h3>
              </div>
              <div className="cons-gantt-trilha">
                <span
                  className={`cons-gantt-barra cons-gantt-barra--${f.tipo ?? 'continua'}`}
                  style={{ gridColumn: `${f.de} / span ${f.ate - f.de + 1}` }}
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Entregáveis (pág. 16 e 17, sem os valores) ---------- */
export function ConsultoriaEntregas() {
  const total = ENTREGAS.reduce((s, g) => s + g.itens.length, 0);
  return (
    <section className="sec" id="entregas">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O que fica com você
          </span>
          <h2>
            {total} entregáveis <span className="gold-grad">prontos para aplicar</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            A consultoria não termina numa apresentação bonita: termina em documentos, protocolos e
            scripts que a sua equipe usa na segunda-feira.
          </p>
        </div>

        <div className="cons-entregas">
          {ENTREGAS.map((g, i) => (
            <article className={`cons-entrega-card reveal${i ? ` d${i}` : ''}`} key={g.pilar}>
              <h3>{g.pilar}</h3>
              <ul>
                {g.itens.map((item) => (
                  <li key={item}>
                    <Check size={17} stroke="currentColor" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Autoridade: mentor + clínica + escola ---------- */
export function ConsultoriaAutoridade() {
  return (
    <section className="sec authority">
      <div className="wrap auth-grid">
        <div className="auth-photo reveal">
          <Image
            src="/images/dr-socrates-tavares.jpg"
            alt={MENTOR.nome}
            width={600}
            height={697}
            quality={70}
            sizes="(max-width: 760px) 90vw, 600px"
          />
        </div>
        <div className="reveal d1">
          <span className="eyebrow">Quem conduz</span>
          <blockquote>&quot;{MENTOR.quote}&quot;</blockquote>
          <div className="auth-name">{MENTOR.nome}</div>
          <p className="auth-role">{MENTOR.role}</p>
          <ul className="creds">
            {MENTOR.creds.map((c) => (
              <li key={c}>
                <Check size={18} stroke="currentColor" /> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Por que a Felice Academy (pág. 13 e 15) ---------- */
export function ConsultoriaPorQue() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Por que escolher a Felice Academy
          </span>
          <h2>
            Somos o nosso maior <span className="gold-grad">case de sucesso</span>
          </h2>
        </div>

        <div className="cons-quem">
          <article className="cons-quem-card reveal">
            <span className="cons-quem-tag">{CLINICA.eyebrow}</span>
            <h3>Clínica Felice</h3>
            <p>{CLINICA.texto}</p>
            <div className="cons-quem-nums">
              {CLINICA.numeros.map((n) => (
                <div key={n.label}>
                  <b>{n.num}</b>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="cons-quem-card reveal d1">
            <span className="cons-quem-tag">Centro de ensino</span>
            <h3>Felice Academy</h3>
            <p>{ACADEMY.texto}</p>
            <div className="cons-quem-nums">
              {ACADEMY.numeros.map((n) => (
                <div key={n.label}>
                  <b>{n.num}</b>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- Oferta (sem preço — por aplicação) ---------- */
export function ConsultoriaOferta() {
  return (
    <section className="sec offer" id="candidatura">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            A candidatura
          </span>
          <h2>
            Candidate-se à <span className="gold-grad">Consultoria Gestão F4</span>
          </h2>
        </div>

        <div className="offer-card reveal d1">
          <div className="ribbon">{OFERTA.ribbon}</div>

          <div className="offer-body">
            <h3>{OFERTA.titulo}</h3>

            <ul className="stack-list">
              {OFERTA.itens.map((item) => (
                <li key={item}>
                  <span className="it">
                    <Check size={18} stroke="currentColor" /> {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="lead" style={{ margin: '4px 0 0' }}>
              {OFERTA.nota}
            </p>

            <a
              href={APLICACAO_URL}
              className="btn btn-primary btn-lg btn-block"
              style={{ marginTop: 8 }}
            >
              {OFERTA.cta} <span className="arrow">→</span>
            </a>

            <div className="offer-foot">
              <span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9C9AA0" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>{' '}
                Poucas clínicas por vez
              </span>
              <span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9C9AA0" strokeWidth="2">
                  <path d="M12 20h9M12 4h9M3 12h18" />
                </svg>{' '}
                Entrada por aplicação
              </span>
              <span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9C9AA0" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>{' '}
                Questionário em 3 minutos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA final (pág. 18) ---------- */
export function ConsultoriaFinal() {
  return (
    <section className="sec final">
      <div className="wrap">
        <div className="inner reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            {FINAL.eyebrow}
          </span>
          <h2>
            {FINAL.titlePre} <span className="gold-grad">{FINAL.titleGold}</span>
          </h2>
          <p className="lead">{FINAL.lead}</p>
          <a href={APLICACAO_URL} className="btn btn-primary btn-lg" style={{ marginTop: 24 }}>
            {FINAL.cta} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
