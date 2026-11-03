import { check } from '../ui/icons';
import { HeroCarousel } from './HeroCarousel';

/* Itens que desfilam na esteira do rodapé do hero. */
const MARQUEE_ITEMS = [
  'Kit Gestão F4',
  'Assistente F4',
  'POPs',
  'Scripts de Atendimento',
  'Scripts de Agendamento',
  'Calendário de Marketing',
  'Busca instantânea',
  'Simulador de treino',
];

export function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="hero-bg" />
      <div className="wrap hero-grid">
        {/* eyebrow + título: no mobile ficam ACIMA do carrossel (order).
            No desktop seguem no topo da coluna de copy, à esquerda. */}
        <div className="hero-head">
          <span className="eyebrow reveal">
            <span className="f4">
              <span />
              <span />
              <span />
              <span />
            </span>
            Mais que um PDF · um mentor de IA ao seu lado
          </span>
          <h1 className="reveal d1">
            Saia da operação e deixe sua clínica{' '}
            <span className="gold-grad">atendendo, agendando e vendendo</span> no automático.
          </h1>
          {/* lead junto do título: no mobile fica acima do carrossel. */}
          <p className="lead reveal d2">
            Os 4 pilares do Método F4 —{' '}
            <b style={{ color: 'var(--cream)' }}>POPs</b>,{' '}
            <b style={{ color: 'var(--cream)' }}>scripts de atendimento</b>,{' '}
            <b style={{ color: 'var(--cream)' }}>scripts de agendamento</b> e{' '}
            <b style={{ color: 'var(--cream)' }}>calendário de marketing</b> — com o{' '}
            <b style={{ color: 'var(--cream)' }}>Assistente F4</b>: uma IA treinada no método do Dr.
            Sócrates que encontra qualquer coisa em segundos, tira suas dúvidas e te orienta na
            implementação, passo a passo. Você sai da operação; a clínica ganha método.
          </p>
        </div>

        <div className="hero-copy">
          <div className="hero-cta reveal d3">
            <a href="#checkout" className="btn btn-primary btn-lg">
              Liberar Acesso por R$ 97 <span className="arrow">→</span>
            </a>
          </div>
          <div className="hero-trust reveal d4">
            <span>{check} Acesso imediato</span>
            <span>{check} Garantia de 7 dias</span>
            <span>{check} Pagamento seguro</span>
            <span>{check} Assistente F4 incluso</span>
          </div>
        </div>

        {/* Desktop: carrossel de telas da plataforma (formato vertical).
            No mobile, .hero-visual é display:none e a imagem de fundo
            (background-hero-box-4-books) continua valendo — intocado. */}
        <div className="hero-visual reveal d2">
          <HeroCarousel />
        </div>
      </div>

      <a href="#prova" className="hero-scroll reveal d4" aria-label="Role para baixo">
        <span>Role para descobrir</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>

      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {[0, 1].map((g) => (
            <div className="hero-marquee-group" key={g}>
              {MARQUEE_ITEMS.map((item, i) => (
                <span className="hero-marquee-item" key={`${g}-${i}`}>
                  {item}
                  <span className="hero-marquee-sep">◇</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
