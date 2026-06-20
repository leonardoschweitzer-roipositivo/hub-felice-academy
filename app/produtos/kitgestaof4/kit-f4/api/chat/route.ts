import { NextResponse } from 'next/server';
import { CHUNKS } from '@/components/kit-f4/content/ragCorpus';
import { DOC_META } from '@/components/kit-f4/content';
import type { DocId } from '@/components/kit-f4/content/types';

export const runtime = 'nodejs';

type ChatMsg = { role: 'user' | 'assistant'; content: string };
type Body = { messages: ChatMsg[]; mode?: 'rag' | 'patient' | 'phone'; docId?: DocId };

/* ---------- Rate limit simples em memória (por IP) ---------- */
const WINDOW_MS = 60_000;
const MAX_REQ = 20;
const buckets = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (buckets.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  buckets.set(ip, hits);
  return hits.length > MAX_REQ;
}

/* ---------- Recuperação por sobreposição de termos (BM25-lite) ---------- */
const STOPWORDS = new Set(
  'a o e de da do das dos que para com em no na nos nas um uma os as por se ao à é como mais ou ja já'.split(' '),
);
const norm = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

function retrieve(query: string, docId?: DocId, k = 6) {
  const terms = norm(query)
    .split(/\W+/)
    .filter((t) => t.length > 2 && !STOPWORDS.has(t));
  const pool = docId ? CHUNKS.filter((c) => c.docId === docId) : CHUNKS;
  // Corpus pequeno: se a busca não pontuar bem, devolve tudo do escopo.
  const scored = pool
    .map((c) => {
      const hay = norm(`${c.title} ${c.text}`);
      let score = 0;
      for (const t of terms) {
        if (norm(c.title).includes(t)) score += 4;
        if (hay.includes(t)) score += 1;
      }
      return { c, score };
    })
    .sort((a, b) => b.score - a.score);
  const top = scored.filter((s) => s.score > 0).slice(0, k).map((s) => s.c);
  return top.length > 0 ? top : pool.slice(0, k);
}

const RAG_SYSTEM =
  'Você é o assistente do Kit Sistema de Gestão F4 da Felice Academy. Responda apenas com base no conteúdo do Kit fornecido abaixo, em português do Brasil. Se a resposta não estiver no material, diga que não consta. Cite a seção/documento de origem. Reforce sempre os princípios de ética, LGPD e não-discriminação presentes nos manuais. Nunca sugira práticas que prometam resultados em saúde ou violem a privacidade do paciente.';

function rolePlaySystem(mode: 'patient' | 'phone') {
  const base =
    'Este é um treinamento da Felice Academy. Mantenha o realismo e o respeito; nunca prometa resultados em saúde nem viole a privacidade do paciente. Responda em português do Brasil.';
  if (mode === 'phone')
    return `Você simula um PACIENTE ligando para a Central de Agendamento de uma clínica odontológica. Apresente um cenário realista (dúvida, falta de vaga, irritação leve ou urgência). Reaja às respostas do operador que está treinando, mantendo-se no personagem. ${base}`;
  return `Você simula um PACIENTE chegando à recepção de uma clínica odontológica. Apresente um cenário realista (atraso, falta de documento, irritação). Reaja às respostas do recepcionista que está treinando, mantendo-se no personagem. ${base}`;
}

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'IA indisponível: GEMINI_API_KEY não configurada.' },
      { status: 503 },
    );
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Muitas requisições. Tente novamente em instantes.' }, { status: 429 });
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: 'JSON inválido.' }, { status: 400 });
  }

  const messages = (body.messages ?? []).filter((m) => m.role && typeof m.content === 'string');
  if (messages.length === 0) {
    return NextResponse.json({ error: 'Sem mensagens.' }, { status: 400 });
  }

  const mode = body.mode ?? 'rag';
  let system: string;
  if (mode === 'rag') {
    const lastUser = [...messages].reverse().find((m) => m.role === 'user')?.content ?? '';
    const ctx = retrieve(lastUser, body.docId)
      .map((c) => `<trecho documento="${DOC_META[c.docId].title}" secao="${c.title}">\n${c.text}\n</trecho>`)
      .join('\n\n');
    system = `${RAG_SYSTEM}\n\n<contexto>\n${ctx}\n</contexto>`;
  } else {
    system = rolePlaySystem(mode);
  }

  const { GoogleGenerativeAI } = await import('@google/generative-ai');
  const genAI = new GoogleGenerativeAI(apiKey);
  const modelName = process.env.KITF4_CHAT_MODEL || 'gemini-flash-latest';
  const model = genAI.getGenerativeModel({
    model: modelName,
    systemInstruction: system,
  });

  // Gemini usa 'model' no lugar de 'assistant'. A última mensagem (do usuário)
  // é enviada separadamente; o restante vira o histórico da conversa.
  const history = messages.slice(0, -1).map((m) => ({
    role: m.role === 'assistant' ? ('model' as const) : ('user' as const),
    parts: [{ text: m.content }],
  }));
  const lastMessage = messages[messages.length - 1]?.content ?? '';

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const chat = model.startChat({
          history,
          generationConfig: { maxOutputTokens: 1024 },
        });
        const result = await chat.sendMessageStream(lastMessage);
        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) controller.enqueue(encoder.encode(text));
        }
        controller.close();
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Erro na IA.';
        controller.enqueue(encoder.encode(`\n[erro: ${msg}]`));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}
