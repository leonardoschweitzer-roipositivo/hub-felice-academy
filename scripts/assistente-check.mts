/* ============================================================
   Checagem das partes PURAS do assistente — roda sem GEMINI_API_KEY.

     npm run check:assistente

   Existe porque este repo não tem framework de teste (`npm run lint`
   também não roda: o ESLint nunca foi configurado). Estas funções —
   buildSystemPrompt, analisar, recuperarOfertas, cortarHistorico — são
   puras e concentram as regressões mais caras e mais silenciosas do
   assistente: o prefixo cacheado quebrando, o JSON do marcador vazando
   para a tela do visitante, e a recuperação anexando o dossiê errado.

   O que NÃO dá para cobrir aqui é o comportamento do modelo (regra de
   preço, injeção, uma pergunta por vez) — isso só em produção, por curl,
   porque a chave só existe na Vercel.
   ============================================================ */

import { analisar, sanitizarHistorico, pontoSeguro } from '@/lib/assistente/markers';
import { buildSystemPrompt, cortarHistorico } from '@/lib/assistente/prompt';
import { recuperarOfertas } from '@/lib/assistente/retrieve';
import { contextoDaPagina } from '@/lib/assistente/paginas';
import { MAX_TURNS, MAX_RESPOSTAS } from '@/lib/assistente/config';

let falhas = 0;
const ok = (nome: string, cond: boolean, extra = '') => {
  console.log(`${cond ? '  ok  ' : '  FALHOU'} ${nome}${cond ? '' : '  → ' + extra}`);
  if (!cond) falhas++;
};

// T0.1 — o prefixo cacheado tem de ser byte-idêntico entre contextos
const a = buildSystemPrompt({ contexto: contextoDaPagina('/'), dossies: [] });
const b = buildSystemPrompt({ contexto: contextoDaPagina('/produtos/consultoria/'), dossies: ['DOSSIÊ X'], leadRecusado: true });
const corte = a.indexOf('# CONTEXTO DA PÁGINA');
ok('prefixo estável entre requisições', corte > 0 && a.slice(0, corte) === b.slice(0, corte));

// T0.2 — payload dourado
const r = analisar('Corpo da resposta.\n§§§\nFechamento.\n[[LEAD]]{"produto":"consultoria","situacao":"3 cadeiras","dor":"perde orçamento","implicacao":"20 por mês","objetivo":"quero resolver"}');
ok('lead parseado', r.lead?.produto === 'consultoria' && r.lead?.dor === 'perde orçamento');
ok('texto sem resíduo de JSON', !/\{|"produto"|LEAD/.test(r.texto), JSON.stringify(r.texto));
ok('§§§ virou 2 segmentos', r.segmentos.length === 2);

// T0.2b — os cinco campos do diagnóstico SPIN
ok('situação e implicação parseadas', r.lead?.situacao === '3 cadeiras' && r.lead?.implicacao === '20 por mês');
const vazio = analisar('x\n[[LEAD]]{"produto":"consultoria","situacao":"   ","dor":"a"}');
ok('campo em branco vira ausente, não string vazia', vazio.lead?.situacao === undefined);

// T0.2c — a rota de cada produto chega ao prompt
const cat = buildSystemPrompt({ contexto: contextoDaPagina('/'), dossies: [] });
ok('rotas aparecem no catálogo do prompt',
  cat.includes('ROTA CURTA') && cat.includes('ROTA MÉDIA') && cat.includes('ROTA SPIN'));
ok('Kit é rota curta e Consultoria é SPIN',
  /kitgestaof4[^\n]*ROTA CURTA/.test(cat) && /slug: consultoria[^\n]*ROTA SPIN/.test(cat));

// T0.3 — degradação com JSON aninhado (a regex é lazy)
const d = analisar('Texto.\n[[LEAD]]{"produto":"x","spin":{"s":"a"}}');
ok('aninhado degrada para objeto vazio', d.lead !== undefined);
ok('aninhado NÃO vaza JSON na tela', !/\{|"produto"/.test(d.texto), JSON.stringify(d.texto));

// T0.4 — o botão [[wa]] agora existe por segmento
const w = analisar('Posso te passar para a equipe.\n[[wa]]');
ok('[[wa]] marca o segmento', w.segmentos.some((s) => s.wa === true));
ok('[[wa]] sai do texto', !w.texto.includes('[[wa]]'));

// T0.5 — retrieval: primeira mensagem + últimas 3 acha o que só as 3 últimas perdem
const spin = [
  'minha equipe perde orçamento no whatsapp',
  '3 cadeiras e 2 dentistas', 'a recepção faz tudo', 'uns 20 por mês',
];
const soUltimas = recuperarOfertas(spin.slice(-3).join(' '), 2, []).map((o) => o.slug);
const comPrimeira = recuperarOfertas([spin[0], ...spin.slice(-3)].join(' '), 2, []).map((o) => o.slug);
ok('consulta nova acha o produto certo', comPrimeira.includes('vendas-secretaria'), JSON.stringify(comPrimeira));
console.log(`       (só as 3 últimas achariam: ${JSON.stringify(soUltimas)})`);

// T0.6 — sanitizarHistorico devolve o resumo em prosa
const s = sanitizarHistorico(
  [{ role: 'assistant', content: 'Oi.\n[[LEAD]]{"dor":"perde orçamento","implicacao":"20 por mês"}' }],
  (x) => x,
);
ok('resumo do lead volta em prosa', s[0].content.includes('perde orçamento') && s[0].content.includes('20 por mês'), s[0].content);
ok('prosa não tem colchete duplo', !s[0].content.includes('[['), s[0].content);

// T0.7 — a invariante dos limites
ok(`invariante MAX_TURNS(${MAX_TURNS}) >= 2*MAX_RESPOSTAS(${MAX_RESPOSTAS})+2`, MAX_TURNS >= 2 * MAX_RESPOSTAS + 2);

// T0.8 — holdback continua sem perder byte
const txt = 'Recomendo isto.\n[[produto:consultoria]]\n§§§\nFecho.';
let buf = '', out = '';
for (const c of txt.match(/.{1,7}/gs)!) { buf += c; const p = pontoSeguro(buf); if (p > 0) { out += buf.slice(0, p); buf = buf.slice(p); } }
out += buf;
ok('holdback não perde byte', out === txt);

console.log(falhas === 0 ? '\n✓ Tier 0 passou inteiro' : `\n✗ ${falhas} falha(s)`);
process.exit(falhas === 0 ? 0 : 1);
