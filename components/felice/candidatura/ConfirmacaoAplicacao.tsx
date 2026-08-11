import { Check } from '@/components/felice/ui/icons';
import type { ConfirmacaoContent } from './types';

/* Página pós-envio da candidatura, compartilhada pelos 3 produtos de
   aplicação. Antes era só um hero pedindo "aperte enviar no WhatsApp" e
   a jornada morria ali — sem dizer o que acontece depois, sem prazo e
   sem nenhum caminho de volta para o site.

   Reusa as classes de obrigado.css (.obg-hero, .obg-steps, .obg-benefits)
   e de felice.css: nenhum CSS novo. */
export function ConfirmacaoAplicacao({ c }: { c: ConfirmacaoContent }) {
  return (
    <div className="felice obg">
      <header className="obg-hero">
        <div className="obg-hero-bg" aria-hidden />
        <div className="wrap obg-hero-inner">
          <span className="obg-badge reveal">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {c.badge}
          </span>

          <h1 className="reveal d1">
            Falta um passo: <span className="gold-grad">envie a mensagem</span> no WhatsApp.
          </h1>

          {/* O quiz abre o WhatsApp numa aba nova com tudo preenchido — só o
              envio depende da pessoa. Por isso a página pede o envio em vez
              de dizer "aguarde o contato". */}
          <p className="obg-lead reveal d2">{c.lead}</p>

          <div className="obg-cta-row reveal d3">
            <a
              href={c.whatsappUrl}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Não abriu? Abrir o WhatsApp <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="sec obg-steps-sec">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                O que acontece agora
              </span>
              <h2>Da sua mensagem até a conversa</h2>
            </div>
            <div className="obg-steps">
              {c.passos.map((p, i) => (
                <div className={`obg-step reveal d${i}`} key={p.n}>
                  <span className="obg-step-n">{p.n}</span>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                Para aproveitar a conversa
              </span>
              <h2>
                Chegue com <span className="gold-grad">isto em mãos</span>
              </h2>
              <p className="lead" style={{ margin: '0 auto' }}>
                Nada obrigatório — mas quanto mais concreto for o seu cenário, mais específica fica a
                nossa recomendação.
              </p>
            </div>
            <div className="obg-benefits">
              {c.preparar.map((item, i) => (
                <div className={`obg-benefit reveal d${i}`} key={item}>
                  <span className="obg-benefit-ic">
                    <Check size={18} stroke="currentColor" />
                  </span>
                  <div>
                    <h3>{item}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="obg-center-cta reveal d2">
              <a className="obg-sublink" href={c.landingUrl}>
                {c.landingLabel} →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
