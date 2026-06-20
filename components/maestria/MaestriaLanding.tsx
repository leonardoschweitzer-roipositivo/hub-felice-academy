import '@/styles/felice.css';
import '@/styles/maestria.css';

import { MaestriaDeadlineBar } from './MaestriaDeadlineBar';
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
import { WHATSAPP_URL } from './content';

/* ============================================================
   MAESTRIA ZIGOMÁTICA — landing de vendas (padrão Felice / dourado).
   Curso premium do Dr. Sócrates Tavares (implantes zigomáticos).
   Fork estrutural da Gestão F4, ticket alto + escassez AUTÊNTICA
   (deadline real de turma; sem toasts/viewers falsos).

   Ordem: DeadlineBar → Header → Hero → Números → Problema →
   Método → Módulos → Bônus → Plataforma → Autoridade →
   Depoimentos → Oferta → Garantia → FAQ → CTA final → Footer.

   ⚠️ TROCAR antes de publicar (em ./content.ts): link de checkout,
      vídeos dos depoimentos, data real da turma. Foto de hero opcional.
   ============================================================ */

export function MaestriaLanding() {
  return (
    <div className="felice felice-maestria has-urgency-bar">
      <MaestriaDeadlineBar />
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
      <RevealOnScroll />
    </div>
  );
}
