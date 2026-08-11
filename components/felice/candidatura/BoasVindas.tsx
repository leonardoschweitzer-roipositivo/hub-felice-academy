import { Check } from '@/components/felice/ui/icons';
import { Footer } from '@/components/felice/sections/Footer';
import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import type { BoasVindasContent } from './types';

/* Página de boas-vindas dos produtos por candidatura — o link é enviado
   pela equipe DEPOIS do fechamento no WhatsApp.

   Não é uma obrigado de pós-compra como a dos produtos pagos: aquelas
   existem para vender a consultoria gratuita, e aqui a consultoria (ou a
   mentoria) É o produto. Então esta página faz outra coisa: confirma a
   entrada, diz o que acontece nos próximos dias e deixa o canal aberto.

   É também onde o Purchase finalmente existe para estes produtos — o
   evento é montado na rota, com <PurchasePixel />.

   Reusa obrigado.css + felice.css: nenhum CSS novo. */
export function BoasVindas({ c }: { c: BoasVindasContent }) {
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
            {c.titlePre} <span className="gold-grad">{c.titleGold}</span>
          </h1>

          <p className="obg-lead reveal d2">{c.lead}</p>

          <div className="obg-cta-row reveal d3">
            <a
              href={c.whatsappUrl}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com a equipe <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="sec obg-steps-sec">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                Os próximos dias
              </span>
              <h2>O que acontece a partir de agora</h2>
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
                O que já está garantido
              </span>
              <h2>
                Tudo isto <span className="gold-grad">é seu a partir de hoje</span>
              </h2>
            </div>
            <div className="obg-benefits">
              {c.inclui.map((item, i) => (
                <div className={`obg-benefit reveal d${i % 4}`} key={item}>
                  <span className="obg-benefit-ic">
                    <Check size={18} stroke="currentColor" />
                  </span>
                  <div>
                    <h3>{item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec obg-final" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="obg-final-card reveal">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                Estamos junto
              </span>
              <h2>
                Qualquer dúvida, <span className="gold-grad">é só chamar.</span>
              </h2>
              <p>{c.nota}</p>
              <a
                href={c.whatsappUrl}
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir o WhatsApp da equipe <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <WhatsappFloat href={c.whatsappUrl} />
      <RevealOnScroll />
    </div>
  );
}
