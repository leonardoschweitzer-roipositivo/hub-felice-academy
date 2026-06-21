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
   FELICE ACADEMY · MAESTRIA ZIGOMÁTICA — página de OBRIGADO (pós-compra)

   Objetivo único: agendar a consultoria gratuita de 1h.
   Contexto: o comprador acabou de adquirir o CURSO de implantes
   zigomáticos — a consultoria é o atalho para sair das aulas e operar
   o primeiro caso (não tem relação com POPs/processos do Kit Gestão).
   Toda configuração (links/prazo/vídeo) vive em ./config.ts.
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
