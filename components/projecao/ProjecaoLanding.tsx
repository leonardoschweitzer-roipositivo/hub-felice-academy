import '@/styles/felice.css';
import '@/styles/projecao.css';

import { Simulador } from './Simulador';
import {
  Hero, Benchmark, Aprendizagem, Descoberta,
  Fases, Metricas, Analises, Premissas,
} from './Sections';

/* ============================================================
   /projecao-trafego — projeção de investimento em tráfego pago.

   Documento de trabalho para a conversa com o Dr. Sócrates sobre quanto
   investir nos três produtos. Fica no domínio para abrir de qualquer
   lugar, mas é `noindex`, não entra no sitemap e não tem link em lugar
   nenhum do site — mesmo tratamento da /arquitetura-de-paginas.

   Ordem das seções, que é a ordem do argumento:
     1. Capa — os três produtos e seus tickets
     2. Benchmark da Greenn — a régua
     3. A regra das 50 conversões — o que define o piso da verba
     4. Simulador — a única parte interativa
     5. A descoberta — o Kit F4 come 58% da verba
     6. Recomendação em duas fases
     7. Métricas de acompanhamento
     8. Análises complementares
     9. Premissas — o que é medido e o que é chute

   ⚠️ A seção 9 não é rodapé decorativo: nenhum destes números veio de
   campanha rodada. Se alguém for apresentar esta página, ela precisa
   estar visível — sem isso o simulador passa uma precisão que não tem.
   ============================================================ */

export function ProjecaoLanding() {
  return (
    <div className="felice felice-projecao">
      <Hero />
      <main>
        <Benchmark />
        <div className="wrap"><div className="divider" /></div>
        <Aprendizagem />
        <Simulador />
        <Descoberta />
        <Fases />
        <div className="wrap"><div className="divider" /></div>
        <Metricas />
        <Analises />
        <Premissas />
      </main>
      <footer className="pj-footer">
        <div className="wrap">
          <p>
            Felice Academy · documento interno de trabalho · levantado em 08/09/2026 ·
            não indexado e sem link público
          </p>
        </div>
      </footer>
    </div>
  );
}
