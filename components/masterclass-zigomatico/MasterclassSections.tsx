import Image from 'next/image';
import { Check } from '@/components/felice/ui/icons';
import {
  HERO,
  VIDEO_URL,
  FAIXA_FRASE,
  PROBLEMA,
  DORES,
  SEGREDOS,
  APRENDIZADO_IMGS,
  FAIXA_CTA,
  DESTAQUE,
  BONUS,
  PLANOS,
  MENTOR,
  STATS,
  FINAL,
  OFERTA_ANCHOR,
  CHECKOUT_URL,
} from './content';

/* ============================================================
   MASTERCLASS ZIGOMÁTICO DESCOMPLICADO · Seções da landing
   Padrão dourado/escuro Felice (felice.css + maestria.css + masterclass.css).
   Copy em ./content.ts.
   ============================================================ */

const brl = (n: number) => `R$ ${n.toLocaleString('pt-BR')}`;

/* ---------- Hero (VSL) ---------- */
export function MasterclassHero() {
  return (
    <section className="hero mz-hero-sec mc-hero" id="topo">
      <div className="hero-bg" />
      <div className="wrap mc-hero-inner">
        <div className="mz-badge reveal" style={{ margin: '0 auto' }}>
          <span>{HERO.eyebrow}</span>
          <svg className="mz-badge-star" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
          </svg>
        </div>

        <h1 className="mz-h1 reveal d1" style={{ textAlign: 'center' }}>
          {HERO.titlePre} <span className="gold-grad">{HERO.titleGold}</span>
        </h1>

        <p className="lead reveal d2" style={{ margin: '0 auto', textAlign: 'center' }}>
          {HERO.lead}
        </p>

        <div className="mc-video reveal d3">
          {VIDEO_URL ? (
            <iframe
              src={VIDEO_URL}
              title={HERO.videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="mc-video-ph" aria-hidden="true">
              <span className="mc-video-play">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span>Vídeo da masterclass</span>
            </div>
          )}
        </div>

        <p className="mc-hero-note reveal d3">{HERO.abaixoVideo}</p>

        <div className="hero-cta reveal d3" style={{ justifyContent: 'center' }}>
          <a href={OFERTA_ANCHOR} className="btn btn-primary btn-lg">
            {HERO.ctaPrimary} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Faixa-frase ---------- */
export function MasterclassFaixaFrase() {
  return (
    <section className="mc-band">
      <div className="wrap">
        <p className="mc-band-text reveal">
          {FAIXA_FRASE.pre} <b>{FAIXA_FRASE.gold}</b> {FAIXA_FRASE.pos}
        </p>
      </div>
    </section>
  );
}

/* ---------- Problema / dores ---------- */
export function MasterclassProblema() {
  return (
    <section className="sec problem">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            {PROBLEMA.eyebrow}
          </span>
          <h2>
            {PROBLEMA.tituloPre} <span className="gold-grad">{PROBLEMA.tituloGold}</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>{PROBLEMA.lead}</p>
        </div>
        <div className="problem-photo reveal d1">
          <picture>
            <source media="(max-width: 720px)" srcSet="/images/dentista-cansado-mobile.jpg" />
            <img
              src="/images/dentista-cansado-desktop.jpg"
              alt="Cirurgião-dentista inseguro diante de um caso complexo"
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
      </div>
    </section>
  );
}

/* ---------- O que você vai aprender (segredos) ---------- */
export function MasterclassAprendizado() {
  return (
    <section className="sec" id="aprender">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O conteúdo
          </span>
          <h2>
            O que você vai aprender <span className="gold-grad">nessa masterclass</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            São 5 segredos que separam o dentista que encaminha do que opera — do planejamento à
            precificação. Veja o que você leva em cada um:
          </p>
        </div>

        <div className="mc-aprender-imgs reveal">
          {APRENDIZADO_IMGS.map((a, i) => (
            <figure className="mc-aprender-img" key={a.legenda}>
              {a.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={a.img} alt={a.legenda} loading="lazy" />
              ) : (
                <span className="mc-aprender-ph" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                </span>
              )}
              <figcaption>{a.legenda}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mc-segredos">
          {SEGREDOS.map((s, i) => (
            <article className={`mc-segredo reveal${i ? ` d${i % 4}` : ''}`} key={s.n}>
              <span className="mc-segredo-n">Segredo #{s.n}</span>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Faixa-CTA (fundo dourado) ---------- */
export function MasterclassFaixaCta() {
  return (
    <section className="mc-cta-band">
      <div className="wrap mc-cta-band-inner reveal">
        <p className="mc-cta-band-text">
          {FAIXA_CTA.pre} <b>{FAIXA_CTA.gold}</b>
        </p>
        <a href={OFERTA_ANCHOR} className="btn btn-lg mc-cta-dark">
          {FAIXA_CTA.cta} <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}

/* ---------- Faixa-destaque (com foto) ---------- */
export function MasterclassDestaque() {
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
          <span className="eyebrow">{DESTAQUE.eyebrow}</span>
          <h2 style={{ marginTop: 8 }}>
            <span className="gold-grad">{DESTAQUE.titulo}</span>
          </h2>
          <p className="lead" style={{ marginTop: 14 }}>{DESTAQUE.texto}</p>
          <a href={OFERTA_ANCHOR} className="btn btn-primary btn-lg" style={{ marginTop: 22 }}>
            {DESTAQUE.cta} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Bônus aceleradores ---------- */
export function MasterclassBonus() {
  const total = BONUS.reduce((s, b) => s + b.valor, 0);
  return (
    <section className="sec" id="bonus">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Bônus aceleradores
          </span>
          <h2>
            No Premium, você ainda leva <span className="gold-grad">tudo isto junto</span>
          </h2>
        </div>

        <div className="mz-bonus">
          {BONUS.map((b, i) => (
            <article className={`mz-bonus-card reveal${i ? ` d${i % 4}` : ''}`} key={b.titulo}>
              <span className="mz-bonus-tag">{b.tag}</span>
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
            Tudo isto está <b>incluso no acesso Premium</b> — por apenas R$ 67.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Os dois tipos de acesso (Acesso × Premium) ---------- */
export function MasterclassComparativo() {
  return (
    <section className="sec offer" id="acesso">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            A escolha
          </span>
          <h2>
            Os dois tipos de <span className="gold-grad">acesso</span>
          </h2>
        </div>

        <div className="mc-planos">
          {PLANOS.map((p, i) => (
            <div
              className={`offer-card mc-plano${p.destaque ? ' mc-plano--premium' : ' mc-plano--free'} reveal${i ? ' d1' : ''}`}
              key={p.nome}
            >
              {p.ribbon && <div className="ribbon">{p.ribbon}</div>}
              <div className="offer-body">
                <h3>{p.nome}</h3>

                <div className="price-box">
                  <div className="big">
                    <span className="amount">{p.preco}</span>
                  </div>
                  {p.precoNota && <div className="note">{p.precoNota}</div>}
                </div>

                <ul className="stack-list">
                  {p.inclui.map((item) => (
                    <li key={item}>
                      <span className="it">
                        <Check size={18} stroke="currentColor" /> {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={p.href}
                  className={`btn btn-lg btn-block ${p.destaque ? 'btn-primary' : 'btn-ghost'}`}
                  style={{ marginTop: 8 }}
                >
                  {p.cta} {p.destaque && <span className="arrow">→</span>}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Autoridade / Sobre mim ---------- */
export function MasterclassAutoridade() {
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
          <span className="eyebrow">Sobre mim</span>
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

/* ---------- Stats ---------- */
export function MasterclassStats() {
  return (
    <section className="numeros">
      <div className="wrap numeros-grid mc-stats-grid">
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

/* ---------- CTA final ---------- */
export function MasterclassFinal() {
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
