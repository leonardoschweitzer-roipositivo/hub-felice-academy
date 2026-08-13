/* ============================================================
   RATE LIMIT por IP — janela deslizante em memória.

   ⚠️ LEIA ANTES DE CONFIAR NISTO. Um Map de processo NÃO sobrevive a
   serverless: na Vercel a Function pode ter várias instâncias simultâneas,
   cada uma com o próprio Map, e todas somem no cold start. Um limite de
   30/min com 5 instâncias vira 150/min efetivos.

   Ele serve para o que serve: matar o loop acidental de um cliente com
   bug e o script ingênuo. Não segura ataque. A proteção de verdade é uma
   regra de rate limit no Vercel Firewall para /api/assistente/*, que roda
   na borda e nem chega a invocar a Function.

   O teto de custo real por sessão não é este arquivo — são os limites de
   turnos e caracteres em config.ts, que a rota aplica antes de chamar a
   Gemini.

   O chat do Kit F4 e as 8 rotas de lead já viviam com esta mesma
   limitação; aqui ela está escrita para ninguém descobrir na conta.
   ============================================================ */

import { RL_WINDOW_MS, RL_MAX_REQ } from './config';

const buckets = new Map<string, number[]>();

/** Última limpeza — evita o Map crescer sem fim numa instância longeva. */
let ultimaFaxina = 0;

export function limitado(ip: string): boolean {
  const agora = Date.now();

  if (agora - ultimaFaxina > RL_WINDOW_MS * 10) {
    for (const [k, v] of buckets) {
      if (v.every((t) => agora - t > RL_WINDOW_MS)) buckets.delete(k);
    }
    ultimaFaxina = agora;
  }

  const hits = (buckets.get(ip) ?? []).filter((t) => agora - t < RL_WINDOW_MS);
  hits.push(agora);
  buckets.set(ip, hits);
  return hits.length > RL_MAX_REQ;
}

/** O IP do visitante atrás do proxy da Vercel. */
export function ipDe(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for');
  return fwd?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'desconhecido';
}
