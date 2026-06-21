import { check } from '@/components/felice/ui/icons';

/* ============================================================
   FELICE CRM · Seções da landing de vendas
   Clone estrutural da Gestão F4 (mesmas classes de felice.css),
   com copy/oferta de SaaS. O produto é o NEXUS ROI white-label.

   ⚠️ TROCAR antes de publicar:
   - Mockups do dashboard (placeholders com .crm-mock)
   - Números de prova social (clínicas/pacientes)
   - Modelo comercial / preço / link de checkout (#checkout)
   - Depoimentos reais
   ============================================================ */

/* ---------- Hero ---------- */
export function CrmHero() {
  return (
    <section className="hero" id="topo">
      <div className="hero-bg" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow reveal">Felice CRM · software para clínicas</span>
          <h1 className="reveal d1">
            Pare de gerenciar sua clínica{' '}
            <span className="gold-grad">no improviso e nas planilhas.</span>
          </h1>
          <p className="lead reveal d2">
            O Felice CRM organiza{' '}
            <b style={{ color: 'var(--cream)' }}>pacientes</b>,{' '}
            <b style={{ color: 'var(--cream)' }}>agenda</b>,{' '}
            <b style={{ color: 'var(--cream)' }}>vendas</b> e{' '}
            <b style={{ color: 'var(--cream)' }}>faturamento</b> em um só lugar — para você
            enxergar a clínica inteira e crescer com previsibilidade.
          </p>
          <div className="hero-cta reveal d3">
            <a href="#checkout" className="btn btn-primary btn-lg">
              Testar grátis por 7 dias <span className="arrow">→</span>
            </a>
          </div>
          <div className="hero-trust reveal d4">
            <span>{check} Sem cartão para testar</span>
            <span>{check} Setup em minutos</span>
            <span>{check} Suporte humano</span>
            <span>{check} 100% na nuvem</span>
          </div>
        </div>

        <div className="hero-visual reveal d2">
          {/* ⚠️ TROCAR: mockup real do dashboard do Felice CRM (white-label NEXUS ROI) */}
          <div className="crm-mock crm-mock--hero" aria-label="Dashboard do Felice CRM (mockup)">
            <div className="crm-mock-bar">
              <span /> <span /> <span />
            </div>
            <div className="crm-mock-body">
              <div className="crm-mock-line crm-mock-line--lg" />
              <div className="crm-mock-row">
                <div className="crm-mock-tile" />
                <div className="crm-mock-tile" />
                <div className="crm-mock-tile" />
              </div>
              <div className="crm-mock-line" />
              <div className="crm-mock-line crm-mock-line--sm" />
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
const STATS = [
  { num: '+200', label: 'Clínicas organizando a operação' }, // ⚠️ confirmar
  { num: '0 planilha', label: 'Tudo num só painel' },
  { num: '7 dias', label: 'Teste grátis sem cartão' },
  { num: '24/7', label: 'Acesso na nuvem' },
];

export function CrmNumeros() {
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

/* ---------- Problema / dor ---------- */
export function CrmProblema() {
  return (
    <section className="sec problem">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            O diagnóstico
          </span>
          <h2>
            Sua clínica funciona, mas a <span className="gold-grad">gestão vive no improviso</span>?
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Quando paciente, agenda e dinheiro vivem em lugares diferentes, o controle se perde — e
            o crescimento trava.
          </p>
        </div>
        <div className="pains">
          <div className="pain reveal">
            <div className="x">✕</div>
            <p>
              <b>Paciente que some</b> — sem follow-up, o orçamento aprovado nunca vira tratamento.
            </p>
          </div>
          <div className="pain reveal d1">
            <div className="x">✕</div>
            <p>
              <b>Agenda furada</b> — faltas, encaixes no susto e horários ociosos sem ninguém
              acompanhar.
            </p>
          </div>
          <div className="pain reveal d2">
            <div className="x">✕</div>
            <p>
              <b>Faturamento sem controle</b> — você não sabe quanto entrou, quanto falta receber
              nem de onde veio.
            </p>
          </div>
          <div className="pain reveal d3">
            <div className="x">✕</div>
            <p>
              <b>Tudo na sua cabeça</b> — a clínica depende de você e da memória da equipe, não de
              um processo.
            </p>
          </div>
        </div>
        <div className="turn reveal d2">
          <p className="display">
            Resultado: receita escorrendo e uma clínica que{' '}
            <span className="gold-grad">não escala.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Solução / pilares ---------- */
const PILARES = [
  {
    n: '01',
    t: 'Pacientes',
    p: 'Cadastro completo, histórico e ficha de cada paciente sempre à mão — nada se perde.',
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    n: '02',
    t: 'Agenda',
    p: 'Visão clara de horários, confirmações e lembretes para reduzir faltas e encaixar melhor.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
  },
  {
    n: '03',
    t: 'Vendas',
    p: 'Funil de orçamentos e tratamentos para acompanhar cada negociação até o fechamento.',
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </>
    ),
  },
  {
    n: '04',
    t: 'Faturamento',
    p: 'Controle do que entrou, do que falta receber e da saúde financeira da clínica em tempo real.',
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
  },
];

export function CrmSolucao() {
  return (
    <section className="sec" id="funcionalidades">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            A solução
          </span>
          <h2>
            Tudo da clínica em <span className="gold-grad">um só painel</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            O Felice CRM reúne pacientes, agenda, vendas e faturamento — para você decidir com dados,
            não no achismo.
          </p>
        </div>
        <div className="pillars">
          {PILARES.map((pl, i) => (
            <div className={`pillar reveal${i ? ` d${i}` : ''}`} key={pl.t}>
              <div className="num">{pl.n}</div>
              <div className="ico">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {pl.icon}
                </svg>
              </div>
              <h3>{pl.t}</h3>
              <p>{pl.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Como funciona ---------- */
const PASSOS = [
  { n: '01', t: 'Cadastre', p: 'Importe seus pacientes e configure a agenda em minutos — sem instalar nada.' },
  { n: '02', t: 'Organize', p: 'Centralize atendimentos, orçamentos e pagamentos no fluxo do dia a dia.' },
  { n: '03', t: 'Acompanhe', p: 'Veja resultados em tempo real e tome decisões com a clínica inteira na tela.' },
];

export function CrmComoFunciona() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Como funciona
          </span>
          <h2>
            Três passos para <span className="gold-grad">sair do improviso</span>
          </h2>
        </div>
        <div className="pillars">
          {PASSOS.map((pa, i) => (
            <div className={`pillar reveal${i ? ` d${i}` : ''}`} key={pa.t}>
              <div className="num">{pa.n}</div>
              <h3>{pa.t}</h3>
              <p>{pa.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Autoridade ---------- */
export function CrmAutoridade() {
  return (
    <section className="sec authority">
      <div className="wrap auth-grid">
        <div className="auth-photo reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/dr-socrates-tavares.avif" alt="Dr. Sócrates Tavares" loading="lazy" />
        </div>
        <div className="reveal d1">
          <span className="eyebrow">Quem está por trás</span>
          <h2 style={{ margin: '14px 0' }}>
            Nascido da <span className="gold">prática clínica real</span>
          </h2>
          <p className="lead">
            O Felice CRM foi desenhado a partir da rotina de quem vive a clínica — não de teoria. A
            mesma visão do Dr. Sócrates Tavares que orienta toda a Felice Academy.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Oferta ---------- */
export function CrmOferta() {
  // ⚠️ Modelo comercial a definir com o cliente (assinatura / teste grátis).
  return (
    <section className="sec offer" id="checkout">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Comece hoje
          </span>
          <h2>
            Teste o <span className="gold-grad">Felice CRM grátis</span>
          </h2>
        </div>

        <div className="offer-card reveal d1">
          <div className="ribbon">7 dias grátis · sem cartão de crédito</div>
          <div className="offer-body">
            <h3>Felice CRM — plano completo</h3>
            <ul className="stack-list">
              <li>
                <span className="it">Pacientes, histórico e fichas</span>
              </li>
              <li>
                <span className="it">Agenda com confirmações e lembretes</span>
              </li>
              <li>
                <span className="it">Funil de orçamentos e vendas</span>
              </li>
              <li>
                <span className="it">Controle de faturamento e relatórios</span>
              </li>
            </ul>

            <div className="price-box">
              <div className="small">A partir de</div>
              <div className="big">
                <span className="cur">R$</span>
                <span className="amount">—</span>
              </div>
              <div className="note">⚠️ definir plano/mensalidade · cobrança só após o teste</div>
            </div>

            <a href="#" className="btn btn-primary btn-lg btn-block" style={{ marginTop: 8 }}>
              Começar teste grátis <span className="arrow">→</span>
            </a>

            <div className="offer-foot">
              <span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9C9AA0" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>{' '}
                Dados protegidos
              </span>
              <span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9C9AA0" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>{' '}
                Cancele quando quiser
              </span>
              <span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9C9AA0" strokeWidth="2">
                  <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>{' '}
                Setup imediato
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA final ---------- */
export function CrmFinal() {
  return (
    <section className="sec final">
      <div className="wrap">
        <div className="inner reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Sua clínica organizada
          </span>
          <h2>
            Comece a gerenciar com <span className="gold-grad">método, não no improviso.</span>
          </h2>
          <p className="lead">
            Teste o Felice CRM por 7 dias e veja a operação inteira da clínica em um só lugar.
          </p>
          <a href="#checkout" className="btn btn-primary btn-lg" style={{ marginTop: 24 }}>
            Testar grátis agora <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
