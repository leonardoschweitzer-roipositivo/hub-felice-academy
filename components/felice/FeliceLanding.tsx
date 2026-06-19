import '@/styles/felice.css';

import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Numeros } from './sections/Numeros';
import { Problema } from './sections/Problema';
import { Metodo } from './sections/Metodo';
import { Componentes } from './sections/Componentes';
import { Plataforma } from './sections/Plataforma';
import { Autoridade } from './sections/Autoridade';
import { Depoimentos } from './sections/Depoimentos';
import { Oferta } from './sections/Oferta';
import { Garantia } from './sections/Garantia';
import { Faq } from './sections/Faq';
import { FinalCta } from './sections/FinalCta';
import { Footer } from './sections/Footer';

import { RevealOnScroll } from './ui/RevealOnScroll';
import { WhatsappFloat } from './ui/WhatsappFloat';
import { PurchaseToasts } from './ui/PurchaseToasts';
import { UrgencyBar } from './ui/UrgencyBar';

/* ============================================================
   FELICE ACADEMY · KIT GESTÃO F4 — página de vendas (protótipo)

   Estrutura componentizada: cada seção vive em ./sections/* e
   os elementos flutuantes/de urgência em ./ui/*.
   Para incluir, remover ou reordenar uma seção, basta editar a
   composição abaixo.

   ⚠️ TROCAR: imagens dos produtos, foto do Dr. Sócrates,
      depoimentos (placeholders) e link de checkout (#checkout).
   ============================================================ */

export function FeliceLanding() {
  return (
    <div className="felice has-urgency-bar">
      <UrgencyBar />
      <Header />

      <main>
        <Hero />
        <Numeros />
        <Problema />
        <Metodo />

        <div className="wrap">
          <div className="divider" />
        </div>

        <Componentes />
        <Plataforma />
        <Autoridade />
        <Depoimentos />
        <Oferta />
        <Garantia />
        <Faq />
        <FinalCta />
      </main>

      <Footer />

      {/* Flutuantes / urgência */}
      <WhatsappFloat />
      <PurchaseToasts />

      {/* Ativa as animações de scroll em todos os .reveal */}
      <RevealOnScroll />
    </div>
  );
}
