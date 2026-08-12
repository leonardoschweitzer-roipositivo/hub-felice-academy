import '@/styles/felice.css';

import { whatsappUrl } from '@/lib/whatsapp/contato';
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
import { CHECKOUT_URL } from './config';

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

   ⚠️ TROCAR: os DEPOIMENTOS de sections/Depoimentos.tsx são FICTÍCIOS —
      nomes e clínicas inventados, no ar como provisório. Trocar pelos
      reais (com autorização de uso) antes de escalar tráfego.
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

      {/* Única página onde os dois links extras do rodapé se aplicam: é a
          landing do Kit, tem a seção #metodo e é aqui que se compra. */}
      <Footer checkoutUrl={CHECKOUT_URL} metodoAnchor="#metodo" />

      {/* Flutuantes / urgência */}
      <WhatsappFloat
        href={whatsappUrl(
          'Olá! Tudo bem? Gostaria de mais informações sobre o Kit Gestão F4, por favor.',
        )}
      />
      <PurchaseToasts />

      {/* Ativa as animações de scroll em todos os .reveal */}
      <RevealOnScroll />
    </div>
  );
}
