import '@/styles/felice.css';
import '@/styles/maestria.css';
import '@/styles/mentoria-gestao.css';

import { MentoriaGestaoTopBar } from './MentoriaGestaoTopBar';
import { MentoriaGestaoHeader } from './MentoriaGestaoHeader';
import {
  MentoriaGestaoHero,
  MentoriaGestaoNumeros,
  MentoriaGestaoProblema,
  MentoriaGestaoMetodo,
  MentoriaGestaoEntregas,
  MentoriaGestaoTrilhas,
  MentoriaGestaoBonus,
  MentoriaGestaoPlataforma,
  MentoriaGestaoAutoridade,
  MentoriaGestaoOferta,
  MentoriaGestaoFinal,
} from './MentoriaGestaoSections';
import { MentoriaGestaoDepoimentos, MentoriaGestaoEntrada } from './MentoriaGestaoProvaEntrada';
import { MentoriaGestaoFaq } from './MentoriaGestaoFaq';
import { MentoriaGestaoFooter } from './MentoriaGestaoFooter';

import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { WHATSAPP_URL } from './content';

/* ============================================================
   MENTORIA DE GESTÃO F4 — landing de vendas (padrão Felice / dourado).
   Mentoria premium do Dr. Sócrates Tavares (gestão de clínicas).
   Fork estrutural da Maestria Zigomática — reusa felice.css +
   maestria.css (classe .felice-maestria) + ajustes em mentoria-gestao.css.

   Venda por APLICAÇÃO (sem preço): CTAs → /produtos/kitgestaof4/consultoria.
   Escassez: poucas vagas por turma (sem countdown).

   Ordem: TopBar → Header → Hero → Números → Problema → 4 Pilares →
   Entregas → Trilhas → Bônus → Plataforma → Autoridade →
   Depoimentos → Candidatura → Como entrar → FAQ → CTA final → Footer.

   ⚠️ TROCAR antes de publicar (em ./content.ts): vídeos dos
      depoimentos. Imagens de pilares opcionais.
   ============================================================ */

export function MentoriaGestaoLanding() {
  return (
    <div className="felice felice-maestria has-urgency-bar">
      <MentoriaGestaoTopBar />
      <MentoriaGestaoHeader />

      <main>
        <MentoriaGestaoHero />
        <MentoriaGestaoNumeros />
        <MentoriaGestaoProblema />
        <MentoriaGestaoMetodo />
        <MentoriaGestaoEntregas />

        <div className="wrap">
          <div className="divider" />
        </div>

        <MentoriaGestaoTrilhas />
        <MentoriaGestaoBonus />
        <MentoriaGestaoPlataforma />
        <MentoriaGestaoAutoridade />
        <MentoriaGestaoDepoimentos />
        <MentoriaGestaoOferta />
        <MentoriaGestaoEntrada />
        <MentoriaGestaoFaq />
        <MentoriaGestaoFinal />
      </main>

      <MentoriaGestaoFooter />

      <WhatsappFloat href={WHATSAPP_URL} />
      <RevealOnScroll />
    </div>
  );
}
