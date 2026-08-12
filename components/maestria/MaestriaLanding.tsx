import '@/styles/felice.css';
import '@/styles/maestria.css';

import { MaestriaHeader } from './MaestriaHeader';
import {
  MaestriaHero,
  MaestriaNumeros,
  MaestriaProblema,
  MaestriaMetodo,
  MaestriaModulos,
  MaestriaBonus,
  MaestriaPlataforma,
  MaestriaAutoridade,
  MaestriaOferta,
  MaestriaFinal,
} from './MaestriaSections';
import { MaestriaCasos } from './MaestriaCasos';
import { MaestriaDepoimentos, MaestriaGarantia } from './MaestriaProvaGarantia';
import { MaestriaFaq } from './MaestriaFaq';
import { MaestriaFooter } from './MaestriaFooter';

import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { ScarcityBar } from '@/components/felice/ui/ScarcityBar';
import { PurchaseToasts } from '@/components/felice/ui/PurchaseToasts';
import { DEADLINE_ISO, WHATSAPP_URL } from './content';

/* ============================================================
   MAESTRIA ZIGOMÁTICA — landing de vendas (padrão Felice / dourado).
   Curso premium do Dr. Sócrates Tavares (implantes zigomáticos).
   Fork estrutural da Gestão F4, ticket alto + escassez por deadline
   real de turma (DEADLINE_ISO em ./content.ts).

   Ordem: ScarcityBar → Header → Hero → Números → Problema →
   Método → Módulos → Bônus → Plataforma → Autoridade →
   Depoimentos → Oferta → Garantia → FAQ → CTA final → Footer.

   ⚠️ O contador, o "X pessoas vendo agora" e os toasts de compra são os
      mesmos recursos do Kit F4 e da Masterclass. Os toasts trazem nomes e
      cidades FICTÍCIOS, fixos em PurchaseToasts.tsx — vale saber disso ao
      falar de prova social nesta página.

   ⚠️ TROCAR antes de publicar (em ./content.ts): link de checkout,
      vídeos dos depoimentos, data real da turma. Foto de hero opcional.
   ============================================================ */

export function MaestriaLanding() {
  return (
    <div className="felice felice-maestria has-urgency-bar">
      <ScarcityBar
        deadlineIso={DEADLINE_ISO}
        label="As matrículas encerram em"
        vagas="Vagas limitadas por turma"
        viewers
      />
      <MaestriaHeader />

      <main>
        <MaestriaHero />
        <MaestriaNumeros />
        <MaestriaProblema />
        <MaestriaMetodo />
        <MaestriaCasos />

        <div className="wrap">
          <div className="divider" />
        </div>

        <MaestriaModulos />
        <MaestriaBonus />
        <MaestriaPlataforma />
        <MaestriaAutoridade />
        <MaestriaDepoimentos />
        <MaestriaOferta />
        <MaestriaGarantia />
        <MaestriaFaq />
        <MaestriaFinal />
      </main>

      <MaestriaFooter />

      <WhatsappFloat href={WHATSAPP_URL} />
      <PurchaseToasts produto="a Maestria Zigomática" />
      <RevealOnScroll />
    </div>
  );
}
