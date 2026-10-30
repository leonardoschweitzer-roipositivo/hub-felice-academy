/* Os 11 modelos de arte. Tamanho FIXO (1080 de largura): quem reduz para a
   tela é o ModeloFrame. Todo texto leva `ig-txt`, que o "PNG só fundo" esconde.
   Textos só usam frases do site e números liberados (ver seção Provas). */

function Logo() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="ig-logo" src="/images/logo-felice-academy.png" alt="" width={152} height={70} />;
}

function Pontos() {
  return <div className="ig-pontos" />;
}

/* ---------- Feed 1080 × 1350 ---------- */

export function ModeloAutoridade() {
  return (
    <div className="ig-feed">
      <Pontos />
      <div className="ig-body">
        <span className="ig-eyebrow ig-txt">Clínica</span>
        <h4 className="ig-h ig-txt">Pare de encaminhar o caso da sua vida. <em>Aprenda a operá-lo.</em></h4>
      </div>
      <div className="ig-foot"><Logo /><span className="ig-small ig-txt">Maestria Zigomática</span></div>
    </div>
  );
}

export function ModeloFoto() {
  return (
    <div className="ig-feed ig-feed--foto">
      <Pontos />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ig-foto" src="/images/dr-socrates-tavares.png" alt="" width={600} height={697} />
      <div className="ig-foto-fade" />
      <span className="ig-eyebrow ig-txt">Clínica</span>
      <h4 className="ig-h ig-h--m ig-txt">O que você vai aprender em horas, <em>outros levam anos para compreender.</em></h4>
      <div className="ig-foot ig-foot--abs">
        <div><span className="ig-small ig-txt">com</span><b className="ig-nome ig-txt">Dr. Sócrates Tavares</b><Logo /></div>
      </div>
    </div>
  );
}

export function ModeloProva() {
  return (
    <div className="ig-feed">
      <Pontos />
      <div className="ig-body">
        <span className="ig-eyebrow ig-txt">Negócio</span>
        <div className="ig-gigante ig-txt">76,35%</div>
        <p className="ig-p ig-txt">de conversão de orçamentos</p>
        <ul className="ig-lista ig-txt">
          <li><b>203</b> orçamentos apresentados</li>
          <li><b>155</b> aprovados</li>
          <li><b>R$ 502.760,25</b> em orçamentos aprovados</li>
        </ul>
      </div>
      <div className="ig-foot"><Logo /><span className="ig-small ig-txt">Clínica Felice · janeiro de 2026</span></div>
    </div>
  );
}

export function ModeloDepoimento() {
  return (
    <div className="ig-feed">
      <Pontos />
      <div className="ig-body">
        <span className="ig-eyebrow ig-txt">Depoimento</span>
        <div className="ig-aspas ig-txt">“</div>
        <p className="ig-cit ig-txt">Texto do depoimento real, em até quatro linhas, com as palavras do próprio aluno.</p>
        <span className="ig-small ig-txt">Nome completo · Cidade · UF</span>
        <span className="ig-aviso ig-txt">Exemplo de estrutura. Use só depoimento real, com nome e autorização.</span>
      </div>
      <div className="ig-foot"><Logo /></div>
    </div>
  );
}

export function ModeloOferta() {
  return (
    <div className="ig-feed">
      <Pontos />
      <div className="ig-body">
        <span className="ig-eyebrow ig-txt">Negócio</span>
        <h4 className="ig-h ig-h--m ig-txt">Kit Sistema de Gestão F4</h4>
        <div className="ig-preco ig-txt"><small>R$</small>97</div>
        <p className="ig-p ig-txt">ou 12x R$ 9,97 · garantia de 7 dias</p>
        <span className="ig-cta ig-txt">Liberar Acesso por R$ 97</span>
      </div>
      <div className="ig-foot"><Logo /></div>
    </div>
  );
}

/* ---------- Carrossel 1080 × 1350 ---------- */

export function ModeloCapa() {
  return (
    <div className="ig-feed">
      <Pontos />
      <div className="ig-body">
        <span className="ig-eyebrow ig-txt">Negócio</span>
        <h4 className="ig-h ig-h--g ig-txt">Saia do improviso. <em>Escale de verdade.</em></h4>
      </div>
      <div className="ig-foot"><Logo /><span className="ig-pill ig-txt">Deslize →</span></div>
    </div>
  );
}

export function ModeloMiolo() {
  return (
    <div className="ig-feed">
      <Pontos />
      <div className="ig-body">
        <div className="ig-num"><span className="ig-txt">2</span></div>
        <h4 className="ig-h ig-h--m ig-txt">Onde o paciente some?</h4>
        <p className="ig-p ig-p--l ig-txt">Antes de marcar, entre marcar e aparecer ou depois do orçamento.</p>
      </div>
      <div className="ig-foot"><Logo /><span className="ig-small ig-txt">2 / 6</span></div>
    </div>
  );
}

export function ModeloFinal() {
  return (
    <div className="ig-feed">
      <Pontos />
      <div className="ig-body">
        <span className="ig-eyebrow ig-txt">Próximo passo</span>
        <h4 className="ig-h ig-h--m ig-txt">Comece pelo <em>Kit Sistema de Gestão F4.</em></h4>
        <span className="ig-cta ig-txt">Link na bio</span>
      </div>
      <div className="ig-foot"><Logo /><span className="ig-small ig-txt">@ do perfil (a definir)</span></div>
    </div>
  );
}

/* ---------- Vertical 1080 × 1920 ---------- */

export function ModeloStoriesPergunta() {
  return (
    <div className="ig-vert">
      <Pontos />
      <span className="ig-eyebrow ig-txt">Negócio</span>
      <h4 className="ig-h ig-h--m ig-txt">De cada 10 orçamentos apresentados, <em>quantos fecham?</em></h4>
      <div className="ig-sticker ig-txt">Espaço do adesivo de enquete</div>
      <Logo />
    </div>
  );
}

export function ModeloStoriesOferta() {
  return (
    <div className="ig-vert">
      <Pontos />
      <span className="ig-eyebrow ig-txt">Clínica</span>
      <h4 className="ig-h ig-h--m ig-txt">Zigomático Descomplicado</h4>
      <div className="ig-preco ig-txt"><small>R$</small>67</div>
      <p className="ig-p ig-txt">ou 12x R$ 6,89</p>
      <span className="ig-cta ig-txt">Assistir a masterclass agora</span>
      <Logo />
    </div>
  );
}

export function ModeloReels() {
  return (
    <div className="ig-vert">
      <Pontos />
      <span className="ig-eyebrow ig-txt">Clínica</span>
      <h4 className="ig-h ig-h--g ig-txt">Não encaminhe mais pacientes. <em>Não perca mais faturamento.</em></h4>
      <Logo />
    </div>
  );
}
