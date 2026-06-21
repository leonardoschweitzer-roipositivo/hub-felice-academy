import '@/styles/felice.css';
import '@/styles/hub.css';

import { HubHeader } from './HubHeader';
import { ProductCard } from './ProductCard';
import { MaterialCard } from './MaterialCard';
import { PlatformMockup } from './PlatformMockup';
import { Footer } from '@/components/felice/sections/Footer';
import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { Check } from '@/components/felice/ui/icons';
import { PRODUTOS, MATERIAIS, STATS } from './content';

const CREDS = [
  'Cirurgião-dentista graduado pela UFPB (2007)',
  'Especialista em Cirurgia e Traumatologia Bucomaxilofacial pela UEPB',
  'Especialista em Periodontia pela FACOP/Bauru',
  'Mestre em Implantodontia pela SLM/SP',
  'Mestre em Periodontia pela SLM/SP',
  'Diretor-Clínico da Felice Odontologia',
  'Professor de cursos de especialização na Felice Academy',
];

/* ============================================================
   HUB INSTITUCIONAL · Felice Academy
   Vitrine + roteador de tráfego. Reusa o design system da
   página Gestão F4 (felice.css) + estilos próprios (hub.css).
   ============================================================ */

export function HubLanding() {
  return (
    <div className="felice felice-hub" id="topo">
      <HubHeader />

      <main>
        {/* Hero */}
        <section className="hub-hero">
          <div className="hub-hero-bg" aria-hidden="true" />
          <div className="wrap hub-hero-inner">
            <a href="/crm" className="hub-hero-pill reveal">
              <span className="hub-hero-pill-dot" aria-hidden="true" />
              <span>Felice CRM já está no ar</span>
              <span className="hub-hero-pill-cta">
                Conhecer
                <span className="arrow">→</span>
              </span>
            </a>
            <h1 className="reveal d1">
              O ecossistema completo que a sua clínica precisa para{' '}
              <span className="gold-grad">sair do improviso e escalar de verdade.</span>
            </h1>
            <p className="lead reveal d2">
              Um só lugar para dominar a técnica, organizar a gestão e escalar resultados — do
              consultório ao crescimento de verdade.
            </p>
            <div className="hub-hero-cta reveal d3">
              <a href="#produtos" className="btn btn-primary btn-lg">
                Conheça os produtos
                <span className="arrow">→</span>
              </a>
              <a href="#contato" className="btn btn-ghost btn-lg">
                Falar com a equipe
              </a>
            </div>
          </div>

          {/* Mockup da plataforma */}
          <div className="hub-hero-mockup reveal d4">
            <div className="hub-hero-mockup-glow" aria-hidden="true" />
            <PlatformMockup />
            <div className="hub-hero-mockup-fade" aria-hidden="true" />
          </div>
        </section>

        {/* Prova de autoridade (resumo) */}
        <section className="hub-authority sec">
          <div className="wrap hub-authority-grid">
            <div className="hub-authority-photo reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dr-socrates-tavares.avif"
                alt="Dr. Sócrates Tavares"
                width={420}
                height={520}
                loading="lazy"
              />
            </div>
            <div className="hub-authority-copy reveal d1">
              <span className="eyebrow">Quem está por trás</span>
              <h2>
                Dr. <span className="gold">Sócrates Tavares</span>
              </h2>
              <p className="lead">
                Cirurgião-dentista, especialista e mestre, que transformou anos de prática clínica
                real em método. A Felice Academy nasce dessa experiência: ensinar dentistas a
                crescer com técnica, gestão e organização.
              </p>
              <ul className="creds">
                {CREDS.map((c) => (
                  <li key={c}>
                    <Check size={18} stroke="currentColor" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Vitrine de produtos (núcleo do HUB) */}
        <section className="hub-products sec" id="produtos">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow">O ecossistema</span>
              <h2>Escolha o seu próximo passo</h2>
              <p className="lead">
                Cursos, mentoria e software — tudo pensado para o dentista que quer sair do
                improviso e crescer com previsibilidade.
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
                Scripts de agendamento, planilhas, PDFs e checklists — recursos práticos para
                organizar a clínica e acelerar resultados. Novos materiais entram aqui sempre.
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
