import '@/styles/felice.css';

import { whatsappUrl } from '@/lib/whatsapp/contato';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Numeros } from './sections/Numeros';
import { Problema } from './sections/Problema';
import { Assistente } from './sections/Assistente';
import { Componentes } from './sections/Componentes';
import { Plataforma } from './sections/Plataforma';
import { Autoridade } from './sections/Autoridade';
import { Oferta } from './sections/Oferta';
import { Garantia } from './sections/Garantia';
import { Faq } from './sections/Faq';
import { FinalCta } from './sections/FinalCta';
import { Footer } from './sections/Footer';
import { CHECKOUT_URL } from './config';

import { RevealOnScroll } from './ui/RevealOnScroll';
import { WhatsappFloat } from './ui/WhatsappFloat';

/* ============================================================
   FELICE ACADEMY · KIT GESTÃO F4 — página de vendas (protótipo)

   Estrutura componentizada: cada seção vive em ./sections/* e
   os elementos flutuantes/de urgência em ./ui/*.
   Para incluir, remover ou reordenar uma seção, basta editar a
   composição abaixo.

   ⚠️ DEPOIMENTOS fora do ar: os de sections/Depoimentos.tsx são
      FICTÍCIOS (nomes e clínicas inventados) e saíram da composição
      para não rodar anúncio com prova social falsa. Quando chegarem os
      reais (com autorização de uso), troque o conteúdo do arquivo e
      volte com <Depoimentos /> entre <Autoridade /> e <Oferta />.
   ============================================================ */

export function FeliceLanding() {
  return (
    // Sem barra de urgência nesta página: `has-urgency-bar` fica só porque é ela
    // que define o padding-top do hero no mobile (felice.css); `--urgency-h: 0px`
    // faz header e hero ficarem como numa página sem barra.
    <div
      className="felice has-urgency-bar"
      style={{ '--urgency-h': '0px' } as React.CSSProperties}
    >
      <Header />

      <main>
        <Hero />
        <Numeros />
        <Problema />
        <Assistente />

        <div className="wrap">
          <div className="divider" />
        </div>

        <Componentes />
        <Plataforma />
        <Autoridade />
        <Oferta />
        <Garantia />
        <Faq />
        <FinalCta />
      </main>

      {/* Única página onde os dois links extras do rodapé se aplicam: é a
          landing do Kit, tem a seção #metodo (as 4 entregas, em
          Componentes) e é aqui que se compra. */}
      <Footer checkoutUrl={CHECKOUT_URL} metodoAnchor="#metodo" />

      {/* Flutuantes */}
      <WhatsappFloat
        href={whatsappUrl(
          'Olá! Tudo bem? Gostaria de mais informações sobre o Kit Gestão F4, por favor.',
        )}
      />

      {/* Ativa as animações de scroll em todos os .reveal */}
      <RevealOnScroll />
    </div>
  );
}
