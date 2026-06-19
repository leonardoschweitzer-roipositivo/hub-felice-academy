const ITENS = [
  'Procedimento Operacional Padrão',
  'Scripts de Atendimento',
  'Scripts de Agendamento',
  'Calendário Editorial de Marketing',
];

const ItemCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export function Oferta() {
  return (
    <section className="sec offer" id="checkout">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            A oferta
          </span>
          <h2>
            Desbloqueie <span className="gold-grad">todos os documentos</span>
          </h2>
        </div>

        <div className="offer-card reveal d1">
          <div className="ribbon">Pacote completo · economize R$ 291</div>

          <div className="offer-body">
            <h3>Kit Sistema<br />de Gestão F4</h3>
            
            <ul className="stack-list">
              {ITENS.map((item) => (
                <li key={item}>
                  <span className="it">
                    <ItemCheck /> {item}
                  </span>
                  <span className="pr">R$ 97</span>
                </li>
              ))}
            </ul>
            <div className="total-row">
              <span className="lbl">Valor total</span>
              <span className="old">R$ 388,00</span>
            </div>

            <div className="price-box">
              <div className="small">Hoje, por apenas</div>
              <div className="big">
                <span className="cur">R$</span>
                <span className="amount">97</span>
              </div>
              <div className="note">ou parcelado no cartão · acesso imediato</div>
            </div>

            <a href="#" className="btn btn-primary btn-lg btn-block" style={{ marginTop: 8 }}>
              Comprar agora <span className="arrow">→</span>
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
