/* ============================================================
   MARCADORES — o protocolo entre o modelo e a interface.

   No lugar de function calling, a Sônia escreve marcadores no meio do
   texto e o cliente os transforma em UI. É o mesmo desenho dos outros
   assistentes do Leo (ROI POSITIVO, Autentika): custa menos, funciona em
   streaming e não depende de o provedor suportar tools.

   Este arquivo é ISOMÓRFICO de propósito — sem `server-only`, sem
   `process.env`. A rota o usa para higienizar o histórico antes de mandar
   ao modelo; o widget o usa para renderizar. Uma regex só, nos dois lados.
   ============================================================ */

export type Papel = 'user' | 'assistant';
export type ChatMsg = { role: Papel; content: string };

/** Quebra a resposta em dois balões: corpo + fechamento consultivo. */
export const SPLIT = '§§§';

export const RE_PRODUTO = /\[\[produto:([a-z0-9-]+)\]\]/g;
export const RE_LEAD = /\[\[LEAD\]\]\s*(\{[\s\S]*?\})?/;
export const RE_WA = /\[\[wa\]\]/g;

export type LeadSugerido = {
  /** Slug do produto recomendado, quando houver. */
  produto?: string;
  /** A dor com as palavras da pessoa. */
  dor?: string;
  /** O próximo passo, na primeira pessoa dela. Pré-preenche o formulário. */
  objetivo?: string;
};

export type Analise = {
  /** Texto já sem marcador nenhum, pronto para virar balões. */
  texto: string;
  /** Balões, na ordem. Um por segmento do §§§. */
  baloes: string[];
  /** Slugs recomendados, na ordem em que apareceram. */
  produtos: string[];
  /** Presente se a IA pediu a captura de contato. */
  lead?: LeadSugerido;
  /** A IA ofereceu explicitamente o WhatsApp. */
  wa: boolean;
};

/** Lê uma resposta completa do modelo e separa texto de intenção. */
export function analisar(bruto: string): Analise {
  let texto = bruto;
  const produtos: string[] = [];
  let lead: LeadSugerido | undefined;

  const mLead = texto.match(RE_LEAD);
  if (mLead) {
    if (mLead[1]) {
      try {
        const j = JSON.parse(mLead[1]) as LeadSugerido;
        lead = {
          produto: typeof j.produto === 'string' ? j.produto : undefined,
          dor: typeof j.dor === 'string' ? j.dor : undefined,
          objetivo: typeof j.objetivo === 'string' ? j.objetivo : undefined,
        };
      } catch {
        // JSON quebrado não pode custar a captura: o marcador sozinho já
        // diz "ofereça o contato", e o formulário funciona sem os campos.
        lead = {};
      }
    } else {
      lead = {};
    }
    texto = texto.replace(RE_LEAD, '');
  }

  texto = texto.replace(RE_PRODUTO, (_m, slug: string) => {
    produtos.push(slug);
    return '';
  });

  const wa = RE_WA.test(texto);
  RE_WA.lastIndex = 0; // regex global guarda estado entre chamadas
  texto = texto.replace(RE_WA, '');

  const baloes = texto
    .split(SPLIT)
    .map((s) => s.trim())
    .filter(Boolean);

  return { texto: baloes.join('\n\n'), baloes, produtos, lead, wa };
}

/** Tira todo marcador de um texto — usado para medir tamanho e para
 *  qualquer lugar que só queira a prosa. */
export function semMarcadores(bruto: string): string {
  return analisar(bruto).texto;
}

/**
 * Higieniza o histórico ANTES de devolvê-lo ao modelo.
 *
 * Sem isto, a Sônia vê os próprios marcadores no histórico e passa a
 * imitá-los fora de hora — emitindo [[LEAD]] de novo depois de já ter
 * capturado o contato, por exemplo. Trocamos cada marcador por uma
 * descrição em prosa do que ele fez: ela continua sabendo que recomendou
 * o CRC, mas não vê o gatilho.
 */
export function sanitizarHistorico(msgs: ChatMsg[], nomeDoSlug: (s: string) => string): ChatMsg[] {
  return msgs.map((m) => {
    if (m.role !== 'assistant') return m;
    const content = m.content
      .replace(RE_LEAD, '[você já ofereceu a captura de contato]')
      .replace(RE_PRODUTO, (_x, s: string) => `(você recomendou: ${nomeDoSlug(s)})`)
      .replace(RE_WA, '(você ofereceu o WhatsApp)')
      .split(SPLIT)
      .join('\n\n')
      .trim();
    return { role: m.role, content };
  });
}

/* ---------- Streaming sem vazar marcador ---------- */

/** Caracteres que podem ser o começo de um marcador. */
const ABERTURAS = ['[', '§'];

/**
 * Devolve até onde o buffer pode ser exibido com segurança.
 *
 * Sem isto o visitante vê "[[prod" piscando na tela antes do marcador
 * fechar. Seguramos do último caractere de abertura em diante (olhando no
 * máximo 64 atrás, que é mais que qualquer marcador nosso) e liberamos
 * quando o marcador completa ou quando fica claro que não era um.
 *
 * A alternativa — acumular a resposta inteira e só então exibir, como faz
 * o widget da ROI POSITIVO — resolveria o vazamento, mas troca por uma
 * espera de segundos com a tela parada.
 */
export function pontoSeguro(buf: string): number {
  const limite = Math.max(0, buf.length - 64);
  for (let i = buf.length - 1; i >= limite; i--) {
    if (ABERTURAS.includes(buf[i])) return i;
  }
  return buf.length;
}
