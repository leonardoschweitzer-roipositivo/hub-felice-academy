/* ============================================================
   Rota TEMPORÁRIA de inspeção da base de conhecimento.

   Existe para o Leo revisar, antes de ir ao ar, a copy que foi escrita à
   mão para o assistente (`paraQuem`, `naoEhFit`, `gatilhos`) e conferir o
   tamanho real do prompt. Sai do repo quando a revisão terminar — não é
   parte do produto.

   GET /api/assistente/kb/            → catálogo compacto + tamanhos
   GET /api/assistente/kb/?slug=crc   → dossiê completo de um produto
   GET /api/assistente/kb/?pergunta=…&pathname=…
       → o system prompt EXATO que a Sônia receberia, com os dossiês que a
         recuperação escolheu. Roda sem GEMINI_API_KEY, então dá para
         conferir prompt e recuperação sem gastar chamada nem depender da
         chave (que só existe na Vercel).
   ============================================================ */

import { nivel1, dossie, tamanhos } from '@/lib/assistente/kb';
import { CATALOGO } from '@/lib/assistente/catalogo';
import { MAX_DOSSIES } from '@/lib/assistente/config';
import { contextoDaPagina, rotaBloqueada } from '@/lib/assistente/paginas';
import { buildSystemPrompt, montarDossies } from '@/lib/assistente/prompt';
import { recuperarOfertas } from '@/lib/assistente/retrieve';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** ~3,5 caracteres por token em português — estimativa grosseira, serve
 *  para comparar ordens de grandeza, não para orçar. */
const emTokens = (chars: number) => Math.round(chars / 3.5);

export async function GET(req: Request) {
  const params = new URL(req.url).searchParams;
  const slug = params.get('slug');
  const pergunta = params.get('pergunta');

  if (pergunta) {
    const pathname = params.get('pathname') || '/';
    const bloqueada = rotaBloqueada(pathname);
    const contexto = contextoDaPagina(pathname);
    const daPagina = contexto.oferta?.slug;
    const recuperados = recuperarOfertas(
      pergunta,
      daPagina ? MAX_DOSSIES - 1 : MAX_DOSSIES,
      daPagina ? [daPagina] : [],
    ).map((o) => o.slug);
    const escolhidos = [...(daPagina ? [daPagina] : []), ...recuperados];
    const system = buildSystemPrompt({
      contexto,
      dossies: montarDossies(escolhidos),
      contatoCapturado: params.get('contato'),
    });

    const cabecalho = [
      `pathname:   ${pathname}`,
      `bloqueada:  ${bloqueada ? 'SIM — o assistente não aparece aqui' : 'não'}`,
      `pergunta:   ${pergunta}`,
      `da página:  ${daPagina ?? '—'}`,
      `recuperado: ${recuperados.join(', ') || '— (nenhum: só o nível 1 vai)'}`,
      `tamanho:    ${system.length} chars (~${emTokens(system.length)} tokens)`,
      '='.repeat(70),
      '',
    ].join('\n');

    return new Response(cabecalho + system + '\n', {
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  }

  if (slug) {
    const texto = dossie(slug);
    if (!texto) {
      return new Response(
        `Slug desconhecido: "${slug}".\n\nDisponíveis: ${CATALOGO.map((o) => o.slug).join(', ')}\n`,
        { status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
      );
    }
    return new Response(`${texto}\n\n---\n${texto.length} chars (~${emTokens(texto.length)} tokens)\n`, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  }

  const t = tamanhos();
  const resumo = Object.entries(t.dossies)
    .map(([s, n]) => `  ${s.padEnd(28)} ${String(n).padStart(5)} chars  (~${emTokens(n)} tokens)`)
    .join('\n');

  const corpo = [
    '===== NÍVEL 1 — catálogo compacto (vai em TODA mensagem) =====',
    '',
    nivel1(),
    '',
    '===== TAMANHOS =====',
    `  nível 1${' '.repeat(21)}${String(t.nivel1).padStart(5)} chars  (~${emTokens(t.nivel1)} tokens)`,
    '',
    '  dossiês (no máximo 2 por requisição):',
    resumo,
    '',
    `  Para ver um dossiê: /api/assistente/kb/?slug=${CATALOGO[0].slug}`,
    '',
  ].join('\n');

  return new Response(corpo, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}
