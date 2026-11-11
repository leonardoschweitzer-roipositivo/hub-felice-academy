import '@/styles/felice.css';
import '@/styles/maestria.css';
import '@/styles/recepcao-alta-performance.css';

// import { RecepcaoHeader } from './RecepcaoHeader';
import {
  RecepcaoHero,
  RecepcaoNumeros,
  RecepcaoProblema,
  RecepcaoMetodo,
  RecepcaoModulos,
  RecepcaoPlataforma,
  RecepcaoAutoridade,
  RecepcaoOferta,
  RecepcaoFinal,
} from './RecepcaoSections';
import { RecepcaoDepoimentos, RecepcaoGarantia } from './RecepcaoProvaGarantia';
import { RecepcaoFaq } from './RecepcaoFaq';
import { RecepcaoFooter } from './RecepcaoFooter';

import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { WHATSAPP_URL } from './content';

/* ============================================================
   "RECEPÇÃO DE ALTA PERFORMANCE" — landing de vendas (padrão Felice).
   Curso em vídeo (Dr. Sócrates) que treina a recepção PRESENCIAL da
   clínica: receber, acolher e conduzir o paciente da porta até a
   cadeira, com o método de atendimento Disney adaptado à odontologia.
   Par presencial do CRC de Alta Performance (/produtos/vendas-secretaria),
   de quem esta landing é fork estrutural.

   Ordem: Hero → Números → Problema →
   Método (4 pilares Disney) → Módulos → Plataforma →
   Autoridade → Depoimentos → Oferta → Garantia → FAQ → CTA final → Footer.

   ⚠️ Sem barra de urgência: `has-urgency-bar` fica só pelo padding-top do
      hero, com `--urgency-h: 0px` no wrapper.

   ⚠️ TROCAR antes de publicar (em ./content.ts): data do lote e
      depoimentos reais. Checkout e preço já são os reais.
   ============================================================ */

export function RecepcaoLanding() {
  return (
    <div
      className="felice felice-maestria has-urgency-bar rap-sem-header"
      style={{ '--urgency-h': '0px' } as React.CSSProperties}
    >
      {/* Sem barra de urgência: `has-urgency-bar` fica só porque o padding-top do hero
          depende dela; `--urgency-h: 0px` deixa o hero como numa página sem barra. */}
      {/* Header escondido a pedido do Leo (16/09/2026), mesmo padrão do CRC.
          Para trazer de volta: descomente o <RecepcaoHeader /> e tire
          `rap-sem-header` do wrapper — é essa classe que devolve ao hero o
          espaço do header fixo. */}
      {/* <RecepcaoHeader /> */}

      <main>
        <RecepcaoHero />
        <RecepcaoNumeros />
        <RecepcaoProblema />
        <RecepcaoMetodo />

        <div className="wrap">
          <div className="divider" />
        </div>

        <RecepcaoModulos />
        <RecepcaoPlataforma />
        <RecepcaoAutoridade />
        <RecepcaoDepoimentos />
        <RecepcaoOferta />
        <RecepcaoGarantia />
        <RecepcaoFaq />
        <RecepcaoFinal />
      </main>

      <RecepcaoFooter />

      <WhatsappFloat href={WHATSAPP_URL} />
      <RevealOnScroll />
    </div>
  );
}
