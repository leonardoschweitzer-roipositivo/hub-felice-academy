import '@/styles/felice.css';
import '@/styles/obrigado.css';

import { HeroSucesso } from './sections/obrigado/HeroSucesso';
import { Virada } from './sections/obrigado/Virada';
import { OConsultoria } from './sections/obrigado/OConsultoria';
import { AutoridadeMentor } from './sections/obrigado/AutoridadeMentor';
import { ComoFunciona } from './sections/obrigado/ComoFunciona';
import { PrazoGarantia } from './sections/obrigado/PrazoGarantia';
import { Prova } from './sections/obrigado/Prova';
import { FaqConsultoria } from './sections/obrigado/FaqConsultoria';
import { CtaFinal } from './sections/obrigado/CtaFinal';
import { Footer } from './sections/Footer';

import { RevealOnScroll } from './ui/RevealOnScroll';
import { WhatsappFloat } from './ui/WhatsappFloat';
import { WHATSAPP_URL } from './sections/obrigado/config';

/* ============================================================
   FELICE ACADEMY · KIT GESTÃO F4 — página de OBRIGADO (pós-compra)

   Objetivo único: agendar a consultoria gratuita de 1h.
   Toda configuração (links/prazo/vídeo) vive em
   ./sections/obrigado/config.ts — edite só lá.
   ============================================================ */

export function ObrigadoLanding() {
  return (
    <div className="felice obg">
      <main>
        <HeroSucesso />
        <Prova />
        <Virada />
        <OConsultoria />
        <AutoridadeMentor />

        <div className="wrap">
          <div className="divider" />
        </div>

        <ComoFunciona />
        <PrazoGarantia />
        <FaqConsultoria />
        <CtaFinal />
      </main>

      <Footer />

      <WhatsappFloat href={WHATSAPP_URL} />
      <RevealOnScroll />
    </div>
  );
}
