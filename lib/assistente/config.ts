/* ============================================================
   ASSISTENTE DO SITE — configuração central.

   Tudo que se ajusta sem reescrever lógica mora aqui: nome da persona,
   modelo, limites de conversa e a chave de desligamento. É o primeiro
   arquivo a abrir quando alguém pedir "muda o nome dela" ou "encurta as
   respostas".
   ============================================================ */

/** O nome aparece no prompt, no cabeçalho do painel e na mensagem do
 *  WhatsApp. Trocar aqui muda os três — não repita o nome em lugar nenhum. */
export const ASSISTENTE_NOME = 'Sônia';

/** Discriminador do lead na mensagem do WhatsApp. Os 8 questionários do
 *  repo caem no MESMO número (ver lib/whatsapp/contato.ts), então sem um
 *  rótulo de origem ninguém sabe de onde o contato veio. */
export const ORIGEM_LABEL = `Assistente do site (${ASSISTENTE_NOME})`;

/** Modelo da Gemini. `gemini-flash-latest` é o mesmo default do chat do
 *  Kit F4 — manter os dois iguais evita descobrir uma regressão de modelo
 *  em produção por dois caminhos diferentes. */
export const MODELO = process.env.ASSISTENTE_MODEL || 'gemini-flash-latest';

/** Mata o widget sem deploy de código. Qualquer valor diferente de 'false'
 *  (inclusive ausente) mantém ligado — o default é ficar no ar. */
export const ASSISTENTE_ENABLED = process.env.ASSISTENTE_ENABLED !== 'false';

/* ---------- Limites de conversa ----------
   São o teto de custo real por sessão. O rate limit por IP cuida de abuso;
   estes números cuidam da conta no fim do mês. */

/** Mensagens no histórico (usuário + assistente). 24 ≈ 12 respostas dela. */
export const MAX_TURNS = 24;

/** Mensagem do visitante acima disso é TRUNCADA, não rejeitada — rejeitar
 *  faria a pessoa reescrever, e ela não tem culpa de ter colado um texto. */
export const MAX_CHARS_PER_MSG = 1200;

/** Soma do histórico. Ao estourar, cortamos do MEIO (ver `cortarHistorico`
 *  em prompt.ts): as duas primeiras trocas guardam a dor declarada e são as
 *  últimas coisas que ela pode esquecer. */
export const MAX_TOTAL_CHARS = 12_000;

/** ~900 caracteres, que é o teto que o prompt pede por mensagem. */
export const MAX_OUTPUT_TOKENS = 500;

/** Dossiês completos de produto por requisição (ver kb.ts). Cada um custa
 *  ~600 tokens; 2 é o ponto onde a resposta fica específica sem inchar. */
export const MAX_DOSSIES = 2;

/** Respostas dela antes do fechamento forçado. Ao passar disso a rota NÃO
 *  chama a Gemini: devolve um fechamento fixo apontando o WhatsApp. */
export const MAX_RESPOSTAS = 12;

/* ---------- Rate limit ----------
   ⚠️ O bucket é um Map em memória (ver rate-limit.ts) e NÃO sobrevive a
   serverless: na Vercel cada Function pode ter N instâncias simultâneas,
   cada uma com o próprio Map, e todas morrem no cold start. Um limite de
   30/min com 5 instâncias vira 150/min efetivos. Ele mata o loop acidental
   e o script ingênuo, não um ataque. A proteção de verdade é uma regra de
   rate limit no Vercel Firewall para /api/assistente/* — roda na borda e
   nem paga invocação da Function. O mesmo vale para o chat do Kit F4 e as
   8 rotas de lead, que já viviam assim. */
export const RL_WINDOW_MS = 60_000;
export const RL_MAX_REQ = 30;
