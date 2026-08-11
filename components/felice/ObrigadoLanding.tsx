import '@/styles/felice.css';
import '@/styles/obrigado.css';
/* Os cards de documento da seção MeusDocumentos vivem nestes dois arquivos
   (escopados por `.felice-hub` / `.felice-kit`, classes que ficam no <section>
   dela — nenhuma regra vaza para o resto da página).
   ⚠️ A ORDEM IMPORTA: `.felice-hub .hub-grid` (3 colunas) e
   `.felice-kit .hub-grid--docs` (2 colunas) têm a MESMA especificidade, então
   só a ordem-fonte decide. Invertendo, a grade vira 3 colunas. */
import '@/styles/hub.css';
import '@/styles/kit-f4.css';

import { HeroSucesso } from './sections/obrigado/HeroSucesso';
import { MeusDocumentos } from './sections/obrigado/MeusDocumentos';
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

   Entrega + oferta na mesma página: o hero confirma a compra e traz o
   vídeo em que o Dr. Sócrates explica como usar os documentos; logo
   abaixo, `MeusDocumentos` entrega os 4; o resto da página conduz à
   consultoria gratuita, que passa pelo questionário de aplicação.

   Toda configuração (links/prazo/vídeo) vive em
   ./sections/obrigado/config.ts — edite só lá.
   ============================================================ */

export function ObrigadoLanding() {
  return (
    <div className="felice obg">
      <main>
        <HeroSucesso />
        <MeusDocumentos />
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
