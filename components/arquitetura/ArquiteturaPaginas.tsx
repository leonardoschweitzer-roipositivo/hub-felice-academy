import '@/styles/felice.css';
import '@/styles/arquitetura.css';

import { FlowScrollHint } from './FlowScrollHint';
import { ArqJornada, type Etapa } from './ArqJornada';

/* ============================================================
   /arquitetura-de-paginas — mapa interno do site.

   Documento de trabalho, não página de venda: inventário das rotas, dos
   checkouts, das candidaturas e das páginas de obrigado, com o que falta
   em cada funil. Fica no domínio para a equipe abrir de qualquer lugar,
   mas é `noindex` e não tem link em lugar nenhum do site.

   Levantamento de 11/08/2026, conferido no código, na produção e na
   Greenn. Ao mexer na arquitetura, atualize os números daqui — em
   especial a tabela do inventário e a árvore de rotas.
   ============================================================ */

/* Quatro números — é o que a faixa `.numeros` do felice.css comporta por
   linha, e é o ritmo que todas as landings do site usam.

   As 64 páginas saem de `find app -name "page.tsx" | wc -l`: 44 do site
   público (landings, questionários, confirmações, obrigados, área do Kit
   F4, home, vitrine, termos, privacidade e esta página) e 20 da plataforma
   do aluno e do admin, que ainda é protótipo com dados mockados.
   ⚠️ Cinco dessas rotas são dinâmicas (`[curso]`, `[aula]`, `[material]`,
   `[id]`), então o site SERVE mais páginas do que 64 — o número conta
   rotas escritas, que é o que dá para conferir no repo. Refaça a conta
   sempre que criar ou apagar rota. */
const NUMEROS = [
  { n: '9', l: 'landings no ar' },
  { n: '5 de 5', l: 'checkouts funcionando — testados ao vivo' },
  /* 8 de 9, não "9 de 9". O "9 de 9" era verdade quando esta página nasceu
     (PR #61 fechou o nono obrigado), mas o PR #63 removeu o Curso Gestão F4
     junto com o obrigado dele e a faixa não acompanhou. Hoje são 8 arquivos
     `obrigado/page.tsx` para os 9 produtos da tabela do inventário logo
     abaixo — que já marca o Felice CRM com "falta" nessa coluna, ou seja, a
     faixa contradizia a própria tabela da mesma página.
     O "(eram 6)" segue certo: era o estado antes do PR #61. */
  { n: '8 de 9', l: 'produtos com página de obrigado (eram 6)' },
  { n: '64', l: 'páginas no site — 20 delas na plataforma do aluno, ainda em construção' },
];

/* As duas jornadas. Cada etapa vira um nó com a mini-tela do formato da
   página — a composição do wireframe está em ArqJornada.tsx.
   Ao mudar um funil, mexa aqui: a corrente inteira sai daqui. */
const PADRAO_A: Etapa[] = [
  { n: 'Anúncio', e: 'tráfego', mock: 'anuncio' },
  { n: 'Landing', e: 'ViewContent', mock: 'landing' },
  { n: 'Greenn', e: 'checkout', mock: 'checkout', ext: true },
  { n: 'Obrigado', e: 'Purchase', mock: 'obrigado', ok: true },
  { n: 'Questionário', e: 'SubmitApplication', mock: 'quiz' },
  { n: 'Confirmação', e: 'api/lead', mock: 'confirmacao' },
  { n: 'WhatsApp', e: 'consultoria', mock: 'whatsapp', ext: true, ok: true },
];

const PADRAO_B: Etapa[] = [
  { n: 'Anúncio', e: 'tráfego', mock: 'anuncio' },
  { n: 'Landing', e: 'ViewContent', mock: 'landing' },
  { n: 'Candidatura', e: 'SubmitApplication', mock: 'quiz' },
  { n: 'Confirmação', e: 'api/lead', mock: 'confirmacao' },
  { n: 'WhatsApp', e: 'diagnóstico e venda', mock: 'whatsapp', ext: true },
  { n: 'Boas-vindas', e: 'Purchase', mock: 'boasvindas', ok: true },
];

type Linha = {
  produto: string;
  meta: string;
  cels: { t: string; k: 'ok' | 'no' | 'warn' | 'mut' }[];
};

const INVENTARIO: Linha[] = [
  {
    produto: 'Kit Gestão F4',
    meta: 'R$ 97',
    cels: [
      { t: 'no ar', k: 'ok' },
      { t: 'testado', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'completo', k: 'ok' },
    ],
  },
  {
    produto: 'Maestria Zigomática',
    meta: 'R$ 997',
    cels: [
      { t: 'no ar', k: 'ok' },
      { t: 'testado', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'completo', k: 'ok' },
    ],
  },
  {
    produto: 'Masterclass Zigomático',
    meta: 'R$ 67',
    cels: [
      { t: 'no ar', k: 'ok' },
      { t: 'testado', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'completo', k: 'ok' },
    ],
  },
  {
    produto: 'CRC de Alta Performance',
    meta: 'R$ 597',
    cels: [
      { t: 'no ar', k: 'ok' },
      { t: 'testado', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'completo', k: 'ok' },
    ],
  },
  {
    produto: 'Recepção de Alta Performance',
    meta: 'R$ 597',
    cels: [
      { t: 'no ar', k: 'ok' },
      { t: 'testado', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'completo', k: 'ok' },
    ],
  },
  {
    produto: 'Consultoria Gestão F4',
    meta: 'R$ 6.000 · candidatura',
    cels: [
      { t: 'no ar', k: 'ok' },
      { t: 'não se aplica', k: 'mut' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'completo', k: 'ok' },
    ],
  },
  {
    produto: 'Mentoria de Gestão F4',
    meta: 'candidatura',
    cels: [
      { t: 'no ar', k: 'ok' },
      { t: 'não se aplica', k: 'mut' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sem valor', k: 'warn' },
    ],
  },
  {
    produto: 'Mentoria de Zigomático',
    meta: 'candidatura',
    cels: [
      { t: 'no ar', k: 'ok' },
      { t: 'não se aplica', k: 'mut' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sim', k: 'ok' },
      { t: 'sem valor', k: 'warn' },
    ],
  },
  {
    produto: 'Felice CRM',
    meta: 'oculto da vitrine',
    cels: [
      { t: 'sem link', k: 'warn' },
      { t: 'botão morto', k: 'no' },
      { t: 'falta', k: 'no' },
      { t: 'falta', k: 'no' },
      { t: 'falta', k: 'no' },
      { t: 'nenhum', k: 'no' },
    ],
  },
];

const GAPS: { n: string; t: string; tag: string; cls: 'crit' | 'med' | 'dep'; p: JSX.Element }[] = [
  {
    n: '01',
    t: 'Quem compra o CRC e a Recepção não chega na página de obrigado',
    tag: 'painel da Greenn',
    cls: 'dep',
    p: (
      <>
        As duas páginas existem e estão testadas, mas o redirecionamento pós-pagamento é configurado
        na Greenn, não no código. Enquanto não for apontado, o comprador cai na página padrão do
        gateway e fica <b>fora do funil da consultoria gratuita</b>. É a pendência de retorno mais
        imediato.
      </>
    ),
  },
  {
    n: '02',
    t: 'Todo o rastreamento de servidor está dormente',
    tag: 'Vercel',
    cls: 'dep',
    p: (
      <>
        Sem as duas chaves de ambiente, o webhook recusa qualquer chamada e nenhum evento de compra
        sai para o Meta. Junto disso, falta uma venda de teste para confirmar que o número da
        transação no redirecionamento é o mesmo do webhook — se forem diferentes,{' '}
        <b>cada compra conta duas vezes</b>.
      </>
    ),
  },
  {
    n: '03',
    t: 'As duas mentorias não têm valor definido',
    tag: 'sua decisão',
    cls: 'dep',
    p: (
      <>
        As páginas e os eventos estão prontos, mas sem o preço de cada mentoria na tabela de funis o
        Meta recebe a conversão <b>sem receita</b> — e a campanha não consegue otimizar por valor.
      </>
    ),
  },
  {
    n: '04',
    t: 'A landing do Felice CRM não converte',
    tag: 'sua decisão',
    cls: 'med',
    p: (
      <>
        A página está completa, mas o preço aparece como <b>R$ —</b> e o botão da oferta não leva a
        lugar nenhum. Falta definir o modelo comercial: checkout, teste grátis ou conversa.
      </>
    ),
  },
  {
    n: '05',
    t: 'A área de entrega do Kit está aberta',
    tag: 'sua decisão',
    cls: 'med',
    p: (
      <>
        Todo o conteúdo do produto de R$ 97 abre para quem tiver a URL: a verificação de acesso é um
        espaço reservado que sempre libera. Está fora do Google, mas o link circula fácil.
      </>
    ),
  },
  {
    n: '06',
    t: 'O Kit não tem card na vitrine',
    tag: 'sua decisão',
    cls: 'med',
    p: (
      <>
        Produto com funil completo e checkout ativo aparece no catálogo só como quatro “materiais”
        que levam todos para a mesma página de venda. Quem chega em <code>/produtos</code> não vê o
        Kit entre os produtos.
      </>
    ),
  },
  {
    n: '07',
    t: 'O Pixel dispara sem pedir consentimento',
    tag: 'antes de escalar',
    cls: 'dep',
    p: (
      <>
        Não há aviso de cookies em lugar nenhum do site. Recomendado resolver antes de aumentar o
        investimento em tráfego pago.
      </>
    ),
  },
];

/* Árvore de rotas. O JSX colapsa espaços entre elementos, então a coluna
   das anotações é calculada aqui (padEnd sobre a rota mais longa) e
   emitida como texto — o `white-space: pre` do .arq-tree preserva. */
type Rota = { t: string; a?: string; k?: 'nota' | 'alerta' | 'atencao'; sep?: boolean };
const ROTAS: Rota[] = [
  { t: '/', a: 'vitrine · 6 cards visíveis' },
  { t: '/produtos', a: 'mesmo catálogo da home' },
  { t: '/crm', a: 'card oculto · botão de oferta morto', k: 'atencao' },
  { t: '/arquitetura-de-paginas', a: 'esta página · noindex, sem link' },
  { t: '/privacidade  /termos' },
  { t: '' },
  { t: '/produtos/mentorias', a: 'escolha entre as 2 mentorias' },
  { t: '' },
  { t: '── produtos pagos ─────────────────────────', sep: true },
  { t: '/produtos/kitgestaof4' },
  { t: '  ├ /obrigado', a: 'Purchase' },
  { t: '  ├ /consultoria → /confirmado', a: '+ api/lead' },
  { t: '  └ /kit-f4', a: 'entrega paga, sem proteção', k: 'alerta' },
  { t: '      └ /pop /crc /atendimento /marketing' },
  { t: '/produtos/maestria-zigomatica', a: 'obrigado · consultoria · confirmado' },
  { t: '/produtos/masterclass-zigomatico', a: 'idem · obrigado entrega a aula' },
  { t: '/produtos/vendas-secretaria', a: 'idem · CRC de Alta Performance' },
  { t: '/produtos/recepcao-alta-performance', a: 'idem' },
  { t: '' },
  { t: '── produtos por candidatura ───────────────', sep: true },
  { t: '/produtos/consultoria' },
  { t: '  ├ /aplicacao → /confirmado' },
  { t: '  └ /obrigado', a: 'Purchase · link enviado pela equipe' },
  { t: '/produtos/mentoria-gestao-f4', a: 'mesma estrutura' },
  { t: '/produtos/mentoria-zigomatico', a: 'mesma estrutura' },
  { t: '' },
  { t: '── bastidores ─────────────────────────────', sep: true },
  { t: '/plataforma', a: 'protótipo · noindex + disallow' },
  { t: '  └ cursos · materiais · mentoria · vendas · admin' },
  { t: '/api/webhooks/green', a: 'Purchase server-side' },
];

const COLUNA = Math.max(...ROTAS.filter((r) => r.a).map((r) => r.t.length)) + 2;

const PASSOS_FEITOS = [
  {
    n: '1',
    t: 'As 3 páginas de obrigado do alto ticket',
    d: 'Consultoria e as duas mentorias ganharam boas-vindas de quem fechou, com o evento de compra. O link é enviado pela equipe com o id da venda no fim — é o que faz a receita chegar ao Meta.',
  },
  {
    n: '2',
    t: 'As confirmações de candidatura viraram páginas de verdade',
    d: 'Antes só pediam “aperte enviar no WhatsApp”. Agora dizem o que acontece agora, em quanto tempo respondemos, o que ter em mãos na conversa — e voltam para o site.',
  },
  {
    n: '3',
    t: 'Todo link do site ganhou preview',
    d: 'Open Graph, canonical, arte de compartilhamento e favicon. Antes, cada link colado no WhatsApp aparecia como endereço cru.',
  },
  {
    n: '4',
    t: 'O endereço oficial virou um só',
    d: 'Sitemap, robots e canônicos passaram a usar o mesmo domínio do rastreamento, as mentorias entraram no mapa e a área do aluno saiu do alcance do Google.',
  },
  {
    n: '5',
    t: 'Higiene',
    d: 'O registro do webhook parou de guardar dado pessoal do comprador, e o rodapé parou de vender o Kit em página de outro produto.',
  },
  {
    n: '6',
    t: 'O Curso Gestão F4 saiu do ar',
    d: 'O produto não existe — Gestão F4 é a consultoria. A landing, o funil parado e a entrada na tabela de eventos foram removidos, e o endereço antigo redireciona para a Consultoria, para quem tiver o link não cair num erro.',
  },
];

export function ArquiteturaPaginas() {
  return (
    <div className="felice felice-arq">
      <header className="arq-hero">
        <div className="wrap arq-hero-in">
          <span className="eyebrow">Arquitetura da informação · uso interno</span>
          <h1>
            O site está de pé.
            <br />
            <span className="gold-grad">O dinheiro é que parava no meio do caminho.</span>
          </h1>
          <p className="lead">
            Inventário das 10 landings da Felice Academy, dos 6 checkouts, das 9 candidaturas e das
            páginas de obrigado — com o que já foi fechado e o que ainda depende de um painel de
            terceiro ou de uma decisão comercial.
          </p>
          <p className="arq-stamp">
            <span>
              <b>Verificado em:</b> código · produção · Greenn
            </span>
            <span>
              <b>Levantamento:</b> 11 de agosto de 2026
            </span>
          </p>
        </div>
      </header>

      <section className="numeros">
        <div className="wrap">
          <div className="numeros-grid">
            {NUMEROS.map((x) => (
              <div className="numeros-item" key={x.l}>
                <b>{x.n}</b>
                <span>{x.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">As duas jornadas</span>
              <h2>Todo produto do site segue um de dois caminhos</h2>
              <p className="lead">
                A diferença entre eles não é só o checkout: é que um termina numa página sua e o
                outro terminava numa conversa que o site nunca via.
              </p>
            </div>

            <div className="arq-flow">
              <div className="arq-flow-tag">
                <span className="arq-pill ok">Padrão A · produto pago</span>
                <span>Kit F4 · Maestria · Masterclass · CRC · Recepção</span>
              </div>
              <ArqJornada etapas={PADRAO_A} />
              <p className="arq-note">
                <span>✓</span>
                <b>Ciclo fechado.</b> A compra vira evento, e o comprador ainda entra no funil da
                consultoria gratuita.
              </p>
              <p className="arq-hint">← arraste para ver a jornada inteira →</p>
            </div>

            <div className="arq-flow">
              <div className="arq-flow-tag">
                <span className="arq-pill warn">Padrão B · produto por candidatura</span>
                <span>Consultoria Gestão F4 · Mentoria de Gestão · Mentoria de Zigomático</span>
              </div>
              <ArqJornada etapas={PADRAO_B} />
              <p className="arq-note">
                <span>✓</span>
                <b>Fechado em 11/08/2026.</b> A jornada terminava no WhatsApp, sem página nenhuma
                depois do fechamento — a venda de maior valor da casa não gerava nenhum evento de
                receita. Agora a equipe envia o link de boas-vindas com o id da venda, e o Meta
                finalmente vê o que entrou.
              </p>
              <p className="arq-hint">← arraste para ver a jornada inteira →</p>
            </div>
          </div>
        </section>

        <div className="wrap">
          <div className="divider" />
        </div>

        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">O veredito</span>
              <h2>As quatro perguntas, respondidas</h2>
            </div>
            <div className="arq-qa">
              <article className="arq-q yes">
                <span className="arq-ask">Temos todas as páginas?</span>
                <span className="arq-verdict">Agora sim</span>
                <p>
                  Faltavam as boas-vindas da Consultoria e das duas mentorias — a jornada morria numa
                  confirmação que só pedia o envio da mensagem, sem nenhum caminho de volta.{' '}
                  <b>As três foram criadas.</b>
                </p>
              </article>
              <article className="arq-q yes">
                <span className="arq-ask">Os checkouts estão ok?</span>
                <span className="arq-verdict">Todos</span>
                <p>
                  Abri os cinco links: todos respondem e o produto na Greenn bate com a landing. O
                  sexto era o <b>Curso Gestão F4</b>, cujo botão apontava para a própria seção de
                  oferta — a landing foi removida, porque o curso não existe.
                </p>
              </article>
              <article className="arq-q yes">
                <span className="arq-ask">As candidaturas existem?</span>
                <span className="arq-verdict">Sim, as 3</span>
                <p>
                  Cada produto de aplicação tem questionário próprio, com envio por WhatsApp
                  identificado pela origem. As duas mentorias, que estavam fora do rastreamento,{' '}
                  <b>entraram</b> — falta só o valor de cada uma.
                </p>
              </article>
              <article className="arq-q yes">
                <span className="arq-ask">Obrigado em todos?</span>
                <span className="arq-verdict">9 de 9</span>
                <p>
                  Os seis produtos pagos já tinham. Os três de candidatura ganharam a página de
                  boas-vindas com o evento de compra — <b>é o que faltava</b> para a campanha de alto
                  ticket aprender a buscar cliente, e não candidatura barata.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Inventário</span>
              <h2>Produto por produto</h2>
            </div>
            <div className="arq-tbl">
              <table>
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Landing</th>
                    <th>Checkout</th>
                    <th>Obrigado</th>
                    <th>Candidatura</th>
                    <th>Confirmação</th>
                    <th>Tracking</th>
                  </tr>
                </thead>
                <tbody>
                  {INVENTARIO.map((l) => (
                    <tr key={l.produto}>
                      <td className="prod">
                        {l.produto}
                        <small>{l.meta}</small>
                      </td>
                      {l.cels.map((c, i) => (
                        <td key={i}>
                          <span className={`arq-pill ${c.k}`}>{c.t}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Todas as rotas</span>
              <h2>O site inteiro numa tela</h2>
            </div>
            <div className="arq-tree">
              {ROTAS.map((r, i) => (
                <span key={i}>
                  {r.sep ? (
                    <i>{r.t}</i>
                  ) : (
                    <>
                      <b>{r.t}</b>
                      {r.a ? ' '.repeat(Math.max(1, COLUNA - r.t.length)) : ''}
                      {r.a && r.k === 'alerta' && <u>{r.a}</u>}
                      {r.a && r.k === 'atencao' && <s>{r.a}</s>}
                      {r.a && !r.k && <i>{r.a}</i>}
                    </>
                  )}
                  {'\n'}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="wrap">
          <div className="divider" />
        </div>

        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">O que já foi feito</span>
              <h2>Fechado em 11 de agosto de 2026</h2>
            </div>
            <div className="arq-steps">
              {PASSOS_FEITOS.map((p) => (
                <div className="arq-step" key={p.n}>
                  <span className="arq-step-n">{p.n}</span>
                  <div>
                    <h3>{p.t}</h3>
                    <p>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">O que continua aberto</span>
              <h2>Depende de um painel de terceiro ou de uma decisão</h2>
              <p className="lead">
                Nada aqui é código: são chaves para configurar, um número para definir e três
                decisões comerciais.
              </p>
            </div>
            <div className="arq-gaps">
              {GAPS.map((g) => (
                <article className={`arq-gap ${g.cls}`} key={g.n}>
                  <div className="arq-gap-h">
                    <span className="arq-gap-n">{g.n}</span>
                    <h3>{g.t}</h3>
                    <span className={`arq-tag ${g.cls}`}>{g.tag}</span>
                  </div>
                  <p>{g.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="arq-foot">
        <div className="wrap">
          <p>
            Levantamento feito lendo o código do repositório, o site em produção e as páginas de
            checkout na Greenn.
            <br />
            Página interna da Felice Academy · não indexada e sem link no site.
          </p>
        </div>
      </footer>

      <FlowScrollHint />
    </div>
  );
}
