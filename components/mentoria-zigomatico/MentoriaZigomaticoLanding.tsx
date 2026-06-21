import '@/styles/felice.css';
import '@/styles/maestria.css';
import '@/styles/mentoria-gestao.css';
import '@/styles/mentoria-zigomatico.css';

import { MentoriaZigomaticoTopBar } from './MentoriaZigomaticoTopBar';
import { MentoriaZigomaticoHeader } from './MentoriaZigomaticoHeader';
import {
  MentoriaZigomaticoHero,
  MentoriaZigomaticoNumeros,
  MentoriaZigomaticoProblema,
  MentoriaZigomaticoMetodo,
  MentoriaZigomaticoPresencial,
  MentoriaZigomaticoEntregas,
  MentoriaZigomaticoTrilhas,
  MentoriaZigomaticoBonus,
  MentoriaZigomaticoPlataforma,
  MentoriaZigomaticoAutoridade,
  MentoriaZigomaticoOferta,
  MentoriaZigomaticoFinal,
} from './MentoriaZigomaticoSections';
import { MentoriaZigomaticoDepoimentos, MentoriaZigomaticoEntrada } from './MentoriaZigomaticoProvaEntrada';
import { MentoriaZigomaticoFaq } from './MentoriaZigomaticoFaq';
import { MentoriaZigomaticoFooter } from './MentoriaZigomaticoFooter';

import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { WHATSAPP_URL } from './content';

/* ============================================================
   MENTORIA DE ZIGOMÁTICO — landing de vendas (padrão Felice / dourado).
   Mentoria clínica premium do Dr. Sócrates Tavares. Fork estrutural da
   Mentoria de Gestão — reusa felice.css + maestria.css + mentoria-gestao.css
   + ajustes em mentoria-zigomatico.css.

   Venda por APLICAÇÃO (sem preço): CTAs → /produtos/kitgestaof4/consultoria.
   Diferencial: encontros PRESENCIAIS (hands-on em laboratório, acompanhamento
   cirúrgico e encontros teóricos). Escassez: turmas pequenas (sem countdown).

   Ordem: TopBar → Header → Hero → Números → Problema → Eixos →
   Presenciais → Entregas → Trilhas → Bônus → Plataforma → Autoridade →
   Depoimentos → Candidatura → Como entrar → FAQ → CTA final → Footer.

   ⚠️ TROCAR antes de publicar (em ./content.ts): vídeos dos depoimentos,
      datas/locais dos encontros presenciais. Imagens de trilhas opcionais.
   ============================================================ */

export function MentoriaZigomaticoLanding() {
  return (
    <div className="felice felice-maestria has-urgency-bar">
      <MentoriaZigomaticoTopBar />
      <MentoriaZigomaticoHeader />

      <main>
        <MentoriaZigomaticoHero />
        <MentoriaZigomaticoNumeros />
        <MentoriaZigomaticoProblema />
        <MentoriaZigomaticoMetodo />
        <MentoriaZigomaticoPresencial />
        <MentoriaZigomaticoEntregas />

        <div className="wrap">
          <div className="divider" />
        </div>

        <MentoriaZigomaticoTrilhas />
        <MentoriaZigomaticoBonus />
        <MentoriaZigomaticoPlataforma />
        <MentoriaZigomaticoAutoridade />
        <MentoriaZigomaticoDepoimentos />
        <MentoriaZigomaticoOferta />
        <MentoriaZigomaticoEntrada />
        <MentoriaZigomaticoFaq />
        <MentoriaZigomaticoFinal />
      </main>

      <MentoriaZigomaticoFooter />

      <WhatsappFloat href={WHATSAPP_URL} />
      <RevealOnScroll />
    </div>
  );
}
