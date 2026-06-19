import { check } from '../ui/icons';
import { HeroCarousel } from './HeroCarousel';

/* Itens que desfilam na esteira do rodapé do hero. */
const MARQUEE_ITEMS = [
  'Kit Gestão F4',
  'POPs',
  'Scripts de Atendimento',
  'Scripts de Agendamento',
  'Calendário de Marketing',
  'Busca instantânea',
  'IA do Kit',
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
            Método Gestão F4 · para dentistas
          </span>
          <h1 className="reveal d1">
            SAIA DA OPERAÇÃO E DEIXE SUA CLÍNICA{' '}
            <span className="gold-grad">ATENDENDO, AGENDANDO E VENDENDO</span> NO AUTOMÁTICO.
          </h1>
          {/* lead junto do título: no mobile fica acima do carrossel. */}
          <p className="lead reveal d2">
            Uma plataforma interativa com{' '}
            <b style={{ color: 'var(--cream)' }}>POPs</b>,{' '}
            <b style={{ color: 'var(--cream)' }}>scripts de atendimento</b>,{' '}
            <b style={{ color: 'var(--cream)' }}>scripts de agendamento</b> e{' '}
            <b style={{ color: 'var(--cream)' }}>calendário de marketing</b> — com busca instantânea,
            IA que responde sobre o material e simulador para treinar sua equipe. Você sai da
            operação; a clínica ganha método.
          </p>
        </div>

        <div className="hero-copy">
          <div className="hero-cta reveal d3">
            <a href="#checkout" className="btn btn-primary btn-lg">
              Quero o Kit por R$ 97 <span className="arrow">→</span>
            </a>
          </div>
          <div className="hero-trust reveal d4">
            <span>{check} Acesso imediato</span>
            <span>{check} Garantia de 7 dias</span>
            <span>{check} Pagamento seguro</span>
            <span>{check} Busca + IA inclusas</span>
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
