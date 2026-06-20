import Image from 'next/image';
import { check, Check } from '@/components/felice/ui/icons';
import {
  HERO,
  HERO_CARD,
  HERO_MARQUEE,
  STATS,
  DORES,
  DORES_FECHAMENTO,
  METODO,
  MODULOS,
  BONUS,
  PLATAFORMA,
  MENTOR,
  OFERTA,
  FINAL,
  OFERTA_ANCHOR,
  CHECKOUT_URL,
} from './content';

/* ============================================================
   MAESTRIA ZIGOMÁTICA · Seções da landing (padrão Felice / dourado)
   Clone estrutural da Gestão F4 — mesmas classes de felice.css.
   Copy e dados vêm de ./content.ts.
   ============================================================ */

/* ---------- Hero ----------
   Layout em 2 colunas (ideia "trust hero"): à esquerda headline + CTAs;
   à direita cards "glass" de prova (stats + faixa de temas). Imagem de
   fundo com máscara em gradiente — tudo no padrão dourado/escuro Felice. */
export function MaestriaHero() {
  return (
    <section className="hero mz-hero-sec" id="topo">
      <div className="hero-bg" />
      <div className="mz-hero-photo" aria-hidden="true" />

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
            <a href="#modulos" className="btn btn-ghost btn-lg">
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
export function MaestriaNumeros() {
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

/* ---------- Problema / dores ---------- */
export function MaestriaProblema() {
  return (
    <section className="sec problem">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O diagnóstico
          </span>
          <h2>
            O caso de maior valor passa pela sua cadeira — e você{' '}
            <span className="gold-grad">não opera por insegurança?</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            A maxila atrófica severa é a reabilitação mais lucrativa da odontologia. Sem um protocolo
            guiado, ela vira receio — e oportunidade perdida.
          </p>
        </div>
        <div className="problem-photo reveal d1">
          <picture>
            <source media="(max-width: 720px)" srcSet="/images/dentista-cansado-mobile.jpg" />
            <img
              src="/images/dentista-cansado-desktop.jpg"
              alt="Cirurgião-dentista sobrecarregado, inseguro diante de um caso complexo"
              width={1000}
              height={545}
              loading="lazy"
            />
          </picture>
        </div>
        <div className="pains">
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

/* ---------- Método / transformação ---------- */
export function MaestriaMetodo() {
  return (
    <section className="sec" id="metodo">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O método
          </span>
          <h2>
            Do diagnóstico ao hands-on, em{' '}
            <span className="gold-grad">um caminho guiado</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Três eixos que transformam o caso complexo em um procedimento previsível — e você na
            referência da sua região.
          </p>
        </div>
        <div className="pillars">
          {METODO.map((pl, i) => (
            <div className={`pillar reveal${i ? ` d${i}` : ''}`} key={pl.titulo}>
              <div className="num">{pl.n}</div>
              <h3>{pl.titulo}</h3>
              <p>{pl.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Módulos ---------- */
export function MaestriaModulos() {
  return (
    <section className="sec" id="modulos">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O conteúdo
          </span>
          <h2>
            4 módulos. <span className="gold-grad">Da indicação à execução.</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Mais de 20 aulas, organizadas para você evoluir com método — sem pular etapa.
          </p>
        </div>

        <div className="mz-mods">
          {MODULOS.map((mod, i) => (
            <article className={`mz-mod reveal${i ? ` d${i % 4}` : ''}`} key={mod.n}>
              <div className="mz-mod-media" aria-hidden="true">
                {mod.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={mod.img} alt="" loading="lazy" />
                ) : (
                  <span className="mz-mod-media-ph">Módulo {mod.n}</span>
                )}
              </div>
              <header className="mz-mod-head">
                <span className="mz-mod-num">Módulo {mod.n}</span>
                <h3>{mod.titulo}</h3>
                <p>{mod.resumo}</p>
              </header>
              {mod.blocos.map((bloco, bi) => (
                <div className="mz-mod-bloco" key={bi}>
                  {bloco.sub && <span className="mz-mod-sub">{bloco.sub}</span>}
                  <ul className="mz-aulas">
                    {bloco.aulas.map((aula, ai) => (
                      <li key={aula}>
                        <span className="mz-aula-n">{String(ai + 1).padStart(2, '0')}</span>
                        <span>{aula}</span>
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

/* ---------- Bônus ---------- */
const brl = (n: number) => `R$ ${n.toLocaleString('pt-BR')}`;

export function MaestriaBonus() {
  const total = BONUS.reduce((s, b) => s + b.valor, 0);
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Bônus especiais
          </span>
          <h2>
            E ainda leva <span className="gold-grad">tudo isto junto</span>
          </h2>
        </div>

        <div className="mz-bonus">
          {BONUS.map((b, i) => (
            <article className={`mz-bonus-card reveal${i ? ` d${i % 4}` : ''}`} key={b.titulo}>
              <span className="mz-bonus-tag">Bônus {String(i + 1).padStart(2, '0')}</span>
              <h3>{b.titulo}</h3>
              <p>{b.texto}</p>
              <div className="mz-bonus-price">
                <span className="mz-bonus-price-lbl">Valor</span>
                <span className="mz-bonus-price-val">{brl(b.valor)}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mz-bonus-total reveal">
          <div className="mz-bonus-total-row">
            <span className="mz-bonus-total-lbl">
              <Check size={18} stroke="currentColor" /> Total em bônus
            </span>
            <span className="mz-bonus-total-val">{brl(total)}</span>
          </div>
          <p className="mz-bonus-total-note">
            Tudo isto está <b>incluso gratuitamente</b> na sua matrícula da Maestria Zigomática.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Plataforma / como funciona ---------- */
export function MaestriaPlataforma() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Como você estuda
          </span>
          <h2>
            Não é um vídeo solto. É <span className="gold-grad">uma formação organizada.</span>
          </h2>
        </div>
        <div className="pillars">
          {PLATAFORMA.map((p, i) => (
            <div className={`pillar reveal${i ? ` d${i}` : ''}`} key={p.titulo}>
              <div className="num">{p.n}</div>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Autoridade / mentor ---------- */
export function MaestriaAutoridade() {
  return (
    <section className="sec authority">
      <div className="wrap auth-grid">
        <div className="auth-photo reveal">
          <Image
            src="/images/dr-socrates-tavares.avif"
            alt={MENTOR.nome}
            width={600}
            height={697}
            quality={70}
            sizes="(max-width: 760px) 90vw, 600px"
          />
        </div>
        <div className="reveal d1">
          <span className="eyebrow">Quem ensina</span>
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

/* ---------- Oferta ---------- */
export function MaestriaOferta() {
  return (
    <section className="sec offer" id="oferta">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            A matrícula
          </span>
          <h2>
            Garanta sua vaga na <span className="gold-grad">Maestria Zigomática</span>
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

            <div className="price-box">
              <div className="small">12x de</div>
              <div className="big">
                <span className="cur">R$</span>
                <span className="amount">164,40</span>
              </div>
              <div className="note">ou {OFERTA.aVista} à vista · acesso imediato</div>
            </div>

            <a
              href={CHECKOUT_URL}
              className="btn btn-primary btn-lg btn-block"
              style={{ marginTop: 8 }}
            >
              {OFERTA.cta} <span className="arrow">→</span>
            </a>

            <div className="offer-foot">
              <span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9C9AA0" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>{' '}
                Compra segura
              </span>
              <span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9C9AA0" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>{' '}
                Garantia de 7 dias
              </span>
              <span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9C9AA0" strokeWidth="2">
                  <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>{' '}
                Acesso imediato
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA final ---------- */
export function MaestriaFinal() {
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
          <a href={CHECKOUT_URL} className="btn btn-primary btn-lg" style={{ marginTop: 24 }}>
            {FINAL.cta} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
