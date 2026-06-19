export function Metodo() {
  return (
    <section className="sec" id="metodo">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            A solução
          </span>
          <h2>
            Metodologia <span className="gold-grad">Gestão F4</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Quatro pilares que transformam o caos em processo — agora numa plataforma interativa,
            com busca, IA e ferramentas, feita para clínicas que querem organização, produtividade e
            resultado.
          </p>
        </div>
        <div className="pillars">
          <div className="pillar reveal">
            <div className="num">01</div>
            <div className="ico">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <h3>Padronização</h3>
            <p>POPs que definem o jeito certo de executar cada processo. Menos erro, mais previsibilidade.</p>
          </div>
          <div className="pillar reveal d1">
            <div className="num">02</div>
            <div className="ico">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3>Atendimento</h3>
            <p>Scripts copiáveis e simulador de treino que conduzem cada conversa com segurança, gerando conexão e confiança.</p>
          </div>
          <div className="pillar reveal d2">
            <div className="num">03</div>
            <div className="ico">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>
            <h3>Agendamento</h3>
            <p>Roteiro de chamada passo a passo e banco de objeções que transformam contatos em consultas marcadas.</p>
          </div>
          <div className="pillar reveal d3">
            <div className="num">04</div>
            <div className="ico">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 11l18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
            </div>
            <h3>Marketing</h3>
            <p>Calendário editorial que dá constância ao conteúdo e constrói autoridade nas redes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
