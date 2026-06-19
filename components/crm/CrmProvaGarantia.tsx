/* Depoimentos + Garantia do Felice CRM (clone estrutural da F4). */

type Depoimento = { inicial: string; texto: string; nome: string; meta: string };

// ⚠️ Substituir pelos depoimentos reais de clientes do Felice CRM.
const DEPOIMENTOS: Depoimento[] = [
  {
    inicial: 'M',
    texto:
      'Parei de perder paciente no follow-up. Hoje vejo cada orçamento no funil e a conversão subiu de verdade.',
    nome: '[Nome do cliente]',
    meta: '[Clínica · Cidade/UF]',
  },
  {
    inicial: 'A',
    texto:
      'A agenda deixou de furar. Com confirmação e lembrete automático, as faltas despencaram.',
    nome: '[Nome do cliente]',
    meta: '[Clínica · Cidade/UF]',
  },
  {
    inicial: 'R',
    texto:
      'Pela primeira vez sei exatamente quanto entrou e quanto falta receber. A clínica virou um negócio de verdade.',
    nome: '[Nome do cliente]',
    meta: '[Clínica · Cidade/UF]',
  },
];

export function CrmDepoimentos() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Quem já usa
          </span>
          <h2>
            Clínicas que saíram <span className="gold-grad">das planilhas</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            ⚠️ Substitua pelos depoimentos reais dos seus clientes (com nome e cidade reais).
          </p>
        </div>
        <div className="testi">
          {DEPOIMENTOS.map((d, i) => (
            <div key={d.inicial + i} className={`quote reveal${i > 0 ? ` d${i}` : ''}`}>
              <div className="stars">★★★★★</div>
              <p>&quot;{d.texto}&quot;</p>
              <div className="who">
                <div className="av">{d.inicial}</div>
                <div>
                  <b>{d.nome}</b>
                  <small>{d.meta}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CrmGarantia() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="guarantee reveal">
          <div className="seal">
            <svg className="seal-svg" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="seal-arc-crm" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <circle className="seal-ring" cx="100" cy="100" r="92" />
              <circle className="seal-ring seal-ring--inner" cx="100" cy="100" r="64" />
              <g className="seal-rotor">
                <text className="seal-text">
                  <textPath href="#seal-arc-crm" startOffset="0%">
                    TESTE GRÁTIS · SEM CARTÃO · TESTE GRÁTIS ·
                  </textPath>
                </text>
              </g>
            </svg>
            <div className="seal-core">
              <svg
                className="seal-shield"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2 4 5v6c0 5 3.4 8.3 8 11 4.6-2.7 8-6 8-11V5l-8-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <b>7 DIAS</b>
            </div>
          </div>
          <div>
            <h3>Teste sem risco</h3>
            <p>
              Use o Felice CRM por 7 dias, sem cartão de crédito. Se não for para a sua clínica,
              é só não continuar — sem cobrança, sem burocracia. Você só paga quando tiver certeza
              de que vale a pena.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
