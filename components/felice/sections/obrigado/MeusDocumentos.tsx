import { DOC_META, DOC_ORDER } from '@/components/kit-f4/content';
import { KitDocCard } from '@/components/kit-f4/KitDocCard';
import { DocsSearchTrigger } from './DocsSearchTrigger';
import { CtaConsultoria } from './Cta';

/* ============================================================
   A ENTREGA — os 4 documentos do Kit, logo abaixo do vídeo.

   Vem antes da prova social e do pitch de propósito: a primeira
   obrigação de uma página pós-compra é provar que o produto existe.
   Quem está com "cadê meu acesso?" na cabeça não lê o resto.

   ⚠️ SERVER COMPONENT — não marcar 'use client'. `content/index.ts`
   importa os 4 documentos (~33 KB de prosa JSX) junto com o DOC_META;
   num client component isso iria inteiro para o bundle do navegador só
   para imprimir 4 títulos. Assim, só os objetos DocMeta viajam no RSC e
   o `'use client'` fica nas folhas (KitDocCard, DocsSearchTrigger).

   As classes `felice-hub felice-kit` são o escopo do CSS do card, que
   mora em hub.css/kit-f4.css — ver os imports em ObrigadoLanding.
   ============================================================ */
export function MeusDocumentos() {
  return (
    <section className="sec obg-docs felice-hub felice-kit" id="meus-documentos">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Acesso liberado
          </span>
          <h2>
            Seus 4 documentos <span className="gold-grad">já estão aqui</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Como eu mostrei no vídeo, cada documento resolve um pilar da clínica. Clique para abrir:
            é leitura web, com scripts para copiar, checklists e ferramentas interativas. Seu
            progresso fica salvo automaticamente neste dispositivo.
          </p>
        </div>

        <div className="obg-docs-search-row">
          <DocsSearchTrigger />
        </div>

        <div className="hub-grid hub-grid--docs">
          {DOC_ORDER.map((id, i) => (
            <div key={id} className={`reveal d${(i % 4) + 1}`}>
              <KitDocCard doc={DOC_META[id]} index={i} />
            </div>
          ))}
        </div>

        <div className="obg-docs-ponte reveal">
          <p>
            O material você já tem. O que falta é o <strong>plano de aplicação</strong> — e é
            exatamente isso que a gente monta na sua consultoria gratuita de 1 hora.
          </p>
          {/* Sem `size="lg"`: o CTA grande do hero fica acima e não deve ter concorrente. */}
          <CtaConsultoria />
        </div>
      </div>
    </section>
  );
}
