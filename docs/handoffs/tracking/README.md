# Handoff — Tracking Meta (Pixel + Conversions API)

> **Como retomar:** abra este arquivo e diga "continuar o tracking do hub a partir do `docs/handoffs/tracking/README.md`".
> **Status:** Fase 1 + Aplicações **IMPLEMENTADAS, revisadas e EM PRODUÇÃO** (deploy via push na `main`).
> **Commit:** `2af1125` — `feat(tracking): Pixel + Meta CAPI server-side (Fase 1 + aplicações)` · **Data:** 2026-06-23
> **Repo:** `~/DEV IA/felice/hub-paginas-felice` (Next 14 App Router, Vercel auto-deploy da `main`).

---

## 1. Decisões que definem a arquitetura

- **SEM Supabase nesta fase** (decisão do Leo). Híbrido = Pixel no browser + webhook do Green → CAPI no servidor, deduplicados pelo `event_id` compartilhado (o Meta funde os dois). Banco (stitching de identidade / idempotência própria / retry / dashboard) fica pra fase futura **se** o match exigir.
- **Aplicação de consultoria = `SubmitApplication`** (não `Lead`), porque quem compra o Kit e preenche é comprador + prospect qualificado. Diferencia no `custom_data`: `lead_type` (`post_purchase` | `cold`) + `source` = slug. `Lead` reservado pra captura leve futura (trial CRM).
- **Pixel** `1608754590127302` ("masterclass pixel"), o mesmo no browser e no CAPI.

## 2. Eventos e dedup

| Evento | event_id | Onde dispara |
|---|---|---|
| `PageView` | (auto) | browser, hub-wide |
| `ViewContent` | (auto) | browser, página de vendas |
| `Purchase` | `purchase_{transactionId}` | browser (obrigado, se tx na URL) **+** servidor (webhook) |
| `SubmitApplication` | `app_{uuid}` (gerado no client, ecoado ao servidor) | browser (submit) **+** servidor (`/api/lead`) |

## 3. Mapa de arquivos

- `lib/tracking/config.ts` — env (pixel id público, GRAPH_VERSION, SITE_URL; segredos só no server).
- `lib/tracking/funnels.ts` — **tabela-fonte-da-verdade**. Kit `4iIlqU`→97,00. Os outros 3 produtos têm `offer: null` (⏳ preencher quando o link Green existir = Fase 2).
- `lib/tracking/hash.ts` — SHA-256 + normalização (email/telefone-com-DDI/genérico).
- `lib/tracking/capi.ts` — `sendCapiEvent` (timeout 5s) + builders `buildPurchaseEvent`/`buildApplicationEvent`.
- `lib/tracking/lead.ts` — `sendApplicationEvent` (usado pelas 4 rotas de lead).
- `lib/tracking/cookies.ts` — `getCookie/setCookie/randomId` compartilhados.
- `components/tracking/MetaPixel.tsx` — comportamento client (PageView por rota, cookie `visitor_id`, `_fbc` do fbclid, decora CTAs do Green). **Base code do Pixel roda no `app/layout.tsx` ANTES da hidratação** (script inline no topo do `<body>`), p/ `window.fbq` existir antes dos efeitos.
- `components/tracking/ViewContent.tsx` / `PurchasePixel.tsx` — montados nas páginas do Kit.
- `components/tracking/application.ts` — `fireApplication` (browser SubmitApplication + tracking p/ o POST).
- `app/api/webhooks/green/route.ts` — endpoint único, valida token → checa `paid` → roteia por oferta → CAPI → sempre 200.
- 4× `app/produtos/{kitgestaof4,gestao-f4,maestria-zigomatica,masterclass-zigomatico}/consultoria/api/lead/route.ts` — disparam `SubmitApplication` (slug derivado do path).
- 4× `components/{felice,gestao-f4,maestria,masterclass-zigomatico}/consultoria/ConsultoriaQuiz.tsx` — chamam `fireApplication`.
- `.env.example` — todas as chaves documentadas.

## 4. O QUE ESTÁ NO AR vs DORMENTE (pós-deploy)

- **NO AR (browser):** PageView (hub), ViewContent/Purchase no Kit **e em Maestria/Masterclass/Gestão F4** (Fase 2 browser-side concluída — `<ViewContent/>` nas 4 páginas de vendas + `<PurchasePixel/>` nos 4 obrigados), SubmitApplication-browser nas consultorias. Disparam em tráfego real assim que o build sobe.
- **DORMENTE (server-side):** o webhook responde **401** sem `GREEN_WEBHOOK_TOKEN`; o CAPI **não envia** sem `META_CAPI_TOKEN` (e não quebra o lead). Ou seja, nada server-side dispara até as envs serem setadas → deploy é seguro.

## 5. ⏭️ PRÓXIMOS PASSOS (retomar por aqui)

1. **Vercel → Settings → Environment Variables (Production)** e **redeployar** (env nova só vale no próximo deploy):
   - `META_CAPI_TOKEN` — Events Manager → Conversions API → gerar token (deste pixel).
   - `GREEN_WEBHOOK_TOKEN` — um segredo que você define.
   - `META_TEST_EVENT_CODE` — só durante o teste; **esvaziar depois**.
   - opcionais (têm default): `SITE_URL`, `GRAPH_VERSION`, `NEXT_PUBLIC_META_PIXEL_ID`.
2. **No Green:** apontar o webhook de venda para **`https://www.feliceacademy.com.br/api/webhooks/green/?token=<GREEN_WEBHOOK_TOKEN>`** (ou header `x-green-token`). Atualizar também a **URL de obrigado**.
   - ⚠️ **USAR `www`** — o apex `feliceacademy.com.br` faz **308 → www** e webhook sender que não segue redirect em POST falha silenciosamente. `SITE_URL` (canônico) já é o `www`.
   - ✅ **Endpoint validado por curl em 2026-06-24** (token + `GREEN_WEBHOOK_TOKEN` setado na Vercel): payload de venda paga do Kit (`offer.hash=4iIlqU`) → `{"ok":true,"event_id":"purchase_...","sent":true}` e Purchase do **Servidor** no Test Events. Falta só a venda-teste REAL pra mapear o payload do Green e confirmar `transaction_id (redirect) == sale.id (webhook)`.
3. **🔑 VALIDAR O DEDUP (crítico):** fazer 1 venda de teste e confirmar no **Events Manager → Test Events** que o `transaction_id` que o Green devolve na URL de obrigado é **IGUAL ao `sale.id`** do webhook. Se forem ids diferentes, o Purchase **conta em dobro**.
   - Ajustar a extração em `app/api/webhooks/green/route.ts` (`parseGreenWebhook`, marcado com TODO) e a lista `TX_KEYS` em `components/tracking/PurchasePixel.tsx` conforme o payload/redirect REAL do Green.
4. Esvaziar `META_TEST_EVENT_CODE` quando validado.

## 6. Os 3 unknowns do Green (bloqueiam o match, não o código)

1. O webhook ecoa `visitor_id`/UTMs? (mando na URL do checkout; uso se voltar.)
2. O redirect de obrigado manda `transaction_id`? (define o Purchase do browser + o dedup.)
3. Formato do payload do webhook (oferta + email/telefone/CPF) → ajustar `parseGreenWebhook`.
   **Melhor caminho: capturar 1 venda de teste REAL e mapear.**

## 7. Code-review já feito (6 fixes aplicados no commit)

1. Race do `fbq`: base code movido pra rodar antes da hidratação (não perde evento na 1ª carga).
2. Webhook não atribui mais oferta desconhecida ao Kit (atribuição neutra + `console.warn`).
3. Telefone com 0 de tronco (`011...`) agora recebe DDI corretamente.
4. `fetch` do CAPI com `AbortSignal.timeout(5000)`.
5. `id` genérico tirado de `TX_KEYS` (evita Purchase com event_id errado).
6. Cookie helpers centralizados em `cookies.ts` (+ flag `Secure` em https).

**Aceito/flagged (sem mudança):** `any` localizado em `parseGreenWebhook` (único da camada); `event_source_url` em `www` canônico (alinha na migração de domínio).

## 8. Backlog (fases seguintes)

- **Fase 2** (Maestria/Masterclass/Gestão F4): ✅ browser-side feito — `<ViewContent/>`/`<PurchasePixel/>` montados (slug já tem value/contentName em `funnels.ts`). ⏳ **Falta só preencher `offer`** dos 3 em `funnels.ts` quando o link Green real existir → aí o webhook roteia o Purchase server-side por oferta (hoje cai na atribuição neutra por value do payload).
- **Supabase** (stitching/idempotência/retry/dashboard) — só se o match exigir.
- **Consentimento LGPD** — recomendado antes de escalar tráfego pago (Pixel hoje dispara sem banner).
- **Migração de domínio** p/ `feliceacademy.com.br` (cookies + verificação no Meta dependem do domínio final; código já é domínio-agnóstico via `SITE_URL`).

---

**SPEC original:** colada no início da sessão de 2026-06-21. **Plano:** `~/.claude/plans/breezy-crafting-garden.md`.
