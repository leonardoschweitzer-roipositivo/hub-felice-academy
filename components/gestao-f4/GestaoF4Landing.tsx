import '@/styles/felice.css';
import '@/styles/maestria.css';
import '@/styles/gestao-f4.css';

import { GestaoF4DeadlineBar } from './GestaoF4DeadlineBar';
import { GestaoF4Header } from './GestaoF4Header';
import {
  GestaoF4Hero,
  GestaoF4Numeros,
  GestaoF4Problema,
  GestaoF4Metodo,
  GestaoF4Modulos,
  GestaoF4Bonus,
  GestaoF4Plataforma,
  GestaoF4Autoridade,
  GestaoF4Oferta,
  GestaoF4Final,
} from './GestaoF4Sections';
import { GestaoF4Depoimentos, GestaoF4Garantia } from './GestaoF4ProvaGarantia';
import { GestaoF4Faq } from './GestaoF4Faq';
import { GestaoF4Footer } from './GestaoF4Footer';

import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { WHATSAPP_URL } from './content';

/* ============================================================
   CURSO GESTÃO F4 — landing de vendas (padrão Felice / dourado).
   Curso em vídeo do Dr. Sócrates sobre os 4 pilares da gestão de
   clínicas. Fork estrutural da Maestria Zigomática (ticket com
   checkout + escassez por deadline real).

   Ordem: DeadlineBar → Header → Hero → Números → Problema →
   Método (4 pilares) → Módulos → Bônus → Plataforma → Autoridade →
   Depoimentos → Oferta → Garantia → FAQ → CTA final → Footer.

   ⚠️ TROCAR antes de publicar (em ./content.ts): link de checkout,
      preço real, data do lote e depoimentos.
   ============================================================ */

export function GestaoF4Landing() {
  return (
    <div className="felice felice-maestria has-urgency-bar">
      <GestaoF4DeadlineBar />
      <GestaoF4Header />

      <main>
        <GestaoF4Hero />
        <GestaoF4Numeros />
        <GestaoF4Problema />
        <GestaoF4Metodo />

        <div className="wrap">
          <div className="divider" />
        </div>

        <GestaoF4Modulos />
        <GestaoF4Bonus />
        <GestaoF4Plataforma />
        <GestaoF4Autoridade />
        <GestaoF4Depoimentos />
        <GestaoF4Oferta />
        <GestaoF4Garantia />
        <GestaoF4Faq />
        <GestaoF4Final />
      </main>

      <GestaoF4Footer />

      <WhatsappFloat href={WHATSAPP_URL} />
      <RevealOnScroll />
    </div>
  );
}
