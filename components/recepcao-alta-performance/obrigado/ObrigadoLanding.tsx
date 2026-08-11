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
   FELICE ACADEMY · RECEPÇÃO DE ALTA PERFORMANCE — pág. de OBRIGADO

   Objetivo único: agendar a consultoria gratuita de 1h.
   Contexto: quem compra é o DONO da clínica, para treinar a equipe de
   recepção — a consultoria é o atalho entre "a equipe assistiu às
   aulas" e "a rotina nova está rodando no balcão".

   Sem vídeo e sem link de acesso às aulas (decisão do Leo, 11/08/2026):
   o acesso chega pelo e-mail da Greenn, então a página não promete uma
   área do aluno que não existe. Toda configuração vive em ./config.ts.
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
