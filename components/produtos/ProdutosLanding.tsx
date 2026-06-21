import '@/styles/felice.css';
import '@/styles/hub.css';

import { HubHeader } from '@/components/hub/HubHeader';
import { ProductCard } from '@/components/hub/ProductCard';
import { MaterialCard } from '@/components/hub/MaterialCard';
import { Footer } from '@/components/felice/sections/Footer';
import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { PRODUTOS, MATERIAIS, STATS } from '@/components/hub/content';

/* ============================================================
   PÁGINA DE PRODUTOS · Felice Academy (/produtos)
   Catálogo dedicado: reusa o header, os cards e os dados do HUB
   (components/hub/content.ts) — fonte única de verdade dos produtos.
   ============================================================ */

export function ProdutosLanding() {
  return (
    <div className="felice felice-hub" id="topo">
      <HubHeader />

      <main>
        {/* Hero compacto (reusa o offset/bg do hero do hub) */}
        <section className="hub-hero">
          <div className="hub-hero-bg" aria-hidden="true" />
          <div className="wrap hub-hero-inner">
            <h1 className="reveal d1">
              Todos os produtos da <span className="gold-grad">Felice Academy</span>
            </h1>
            <p className="lead reveal d2">
              Cursos, mentoria e software — em um só lugar. Escolha o próximo passo para sair do
              improviso e crescer com método.
            </p>
            <div className="hub-hero-cta reveal d3">
              <a href="#produtos" className="btn btn-primary btn-lg">
                Ver o catálogo
                <span className="arrow">→</span>
              </a>
              <a href="#conteudos" className="btn btn-ghost btn-lg">
                Materiais gratuitos
              </a>
            </div>
          </div>
        </section>

        {/* Vitrine de produtos */}
        <section className="hub-products sec" id="produtos">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow">O ecossistema</span>
              <h2>Escolha o seu próximo passo</h2>
              <p className="lead">
                Cada produto resolve uma etapa da jornada do dentista — da técnica à gestão e ao
                software que organiza a clínica inteira.
              </p>
            </div>

            <div className="hub-rows">
              {PRODUTOS.map((p, i) => (
                <div key={p.titulo} className={`reveal d${(i % 4) + 1}`}>
                  <ProductCard produto={p} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conteúdos / materiais gratuitos */}
        <section className="hub-materiais sec" id="conteudos">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow">Conteúdos</span>
              <h2>
                Materiais para <span className="gold-grad">aplicar hoje</span>
              </h2>
              <p className="lead">
                Scripts, planilhas, PDFs e checklists gratuitos para organizar a clínica e acelerar
                resultados. Novos materiais entram aqui sempre.
              </p>
            </div>

            <div className="hub-grid hub-grid--materiais">
              {MATERIAIS.map((m, i) => (
                <div key={m.titulo} className={`reveal d${(i % 4) + 1}`}>
                  <MaterialCard material={m} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faixa de números */}
        <section className="numeros">
          <div className="wrap numeros-grid">
            {STATS.map((s) => (
              <div className="numeros-item reveal" key={s.label}>
                <b>{s.num}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="hub-final sec" id="contato">
          <div className="wrap hub-final-inner reveal">
            <span className="eyebrow">Vamos conversar</span>
            <h2>
              Pronto para <span className="gold-grad">crescer com método?</span>
            </h2>
            <p className="lead">
              Explore os produtos acima ou fale com a nossa equipe para descobrir o caminho certo
              para a sua clínica.
            </p>
            <div className="hub-hero-cta">
              <a href="#produtos" className="btn btn-primary btn-lg">
                Ver os produtos
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <WhatsappFloat />
      <RevealOnScroll />
    </div>
  );
}
