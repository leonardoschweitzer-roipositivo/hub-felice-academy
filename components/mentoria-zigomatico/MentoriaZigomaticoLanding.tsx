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
  MentoriaZigomaticoPlataforma,
  MentoriaZigomaticoAutoridade,
  MentoriaZigomaticoOferta,
  MentoriaZigomaticoFinal,
} from './MentoriaZigomaticoSections';
import { MentoriaZigomaticoAmbiente } from './MentoriaZigomaticoAmbiente';
import { MentoriaZigomaticoCasos } from './MentoriaZigomaticoCasos';
import { MentoriaZigomaticoEntrada } from './MentoriaZigomaticoProvaEntrada';
import { MaestriaDepoimentos } from '@/components/maestria/MaestriaProvaGarantia';
import { DEPOIMENTOS as DEPOIMENTOS_MAESTRIA } from '@/components/maestria/content';
import { DEPOIMENTOS as DEPOIMENTOS_MASTERCLASS } from '@/components/masterclass-zigomatico/content';
import { MentoriaZigomaticoFaq } from './MentoriaZigomaticoFaq';
import { MentoriaZigomaticoFooter } from './MentoriaZigomaticoFooter';

import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { WHATSAPP_URL, DEPOIMENTOS } from './content';

/* ============================================================
   MENTORIA DE ZIGOMÁTICO — landing de vendas (padrão Felice / dourado).
   Mentoria clínica premium do Dr. Sócrates Tavares. Fork estrutural da
   Mentoria de Gestão — reusa felice.css + maestria.css + mentoria-gestao.css
   + ajustes em mentoria-zigomatico.css.

   Venda por APLICAÇÃO (sem preço): CTAs → /produtos/mentoria-zigomatico/aplicacao,
   questionário próprio que abre o WhatsApp com as respostas prontas.
   Diferencial: encontros PRESENCIAIS (prática em laboratório, acompanhamento
   cirúrgico e encontros teóricos). Escassez: turmas pequenas (sem countdown).

   Ordem: TopBar → Header → Hero → Números → Problema → Eixos →
   Presenciais → Entregas → Trilhas → Plataforma → Autoridade →
   Casos reais → Depoimentos → Candidatura → Como entrar → FAQ →
   CTA final → Footer.

   ⚠️ TROCAR antes de publicar (em ./content.ts): datas/locais dos encontros presenciais. Imagens de trilhas opcionais.
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
        <MentoriaZigomaticoAmbiente />
        <MentoriaZigomaticoEntregas />

        <div className="wrap">
          <div className="divider" />
        </div>

        <MentoriaZigomaticoTrilhas />
        <MentoriaZigomaticoPlataforma />
        <MentoriaZigomaticoAutoridade />
        <MentoriaZigomaticoCasos />
        {/* Mesmos depoimentos em vídeo da Maestria Zigomática. */}
        {/* Os da Masterclass, os da Maestria e os 4 que já eram da mentoria. */}
        <MaestriaDepoimentos
          publico="Cirurgiões"
          depoimentos={[...DEPOIMENTOS_MASTERCLASS, ...DEPOIMENTOS_MAESTRIA, ...DEPOIMENTOS]}
        />
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
