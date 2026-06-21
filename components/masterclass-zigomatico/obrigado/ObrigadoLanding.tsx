import '@/styles/felice.css';
import '@/styles/obrigado.css';

import { HeroSucesso } from './HeroSucesso';
import { Virada } from './Virada';
import { OConsultoria } from './OConsultoria';
import { AutoridadeMentor } from './AutoridadeMentor';
import { ComoFunciona } from './ComoFunciona';
import { PrazoGarantia } from './PrazoGarantia';
import { Prova } from './Prova';
import { FaqConsultoria } from './FaqConsultoria';
import { CtaFinal } from './CtaFinal';
import { Footer } from '@/components/felice/sections/Footer';

import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { WHATSAPP_URL } from './config';

/* ============================================================
   FELICE ACADEMY · MASTERCLASS ZIGOMÁTICO DESCOMPLICADO
   Página de OBRIGADO (pós-acesso).

   Objetivo único: agendar a consultoria gratuita de 1h.
   Contexto: a pessoa acabou de garantir o acesso à masterclass (grátis
   ou Premium) — a consultoria é o atalho para sair do "play" e dar o
   próximo passo nos zigomáticos. Toda configuração vive em ./config.ts.
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
