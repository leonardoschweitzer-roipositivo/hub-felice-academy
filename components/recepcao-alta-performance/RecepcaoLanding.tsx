import '@/styles/felice.css';
import '@/styles/maestria.css';
import '@/styles/recepcao-alta-performance.css';

import { RecepcaoHeader } from './RecepcaoHeader';
import {
  RecepcaoHero,
  RecepcaoNumeros,
  RecepcaoProblema,
  RecepcaoMetodo,
  RecepcaoModulos,
  RecepcaoBonus,
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
import { ScarcityBar } from '@/components/felice/ui/ScarcityBar';
import { PurchaseToasts } from '@/components/felice/ui/PurchaseToasts';
import { DEADLINE_ISO, WHATSAPP_URL } from './content';

/* ============================================================
   "RECEPÇÃO DE ALTA PERFORMANCE" — landing de vendas (padrão Felice).
   Curso em vídeo (Dr. Sócrates) que treina a recepção PRESENCIAL da
   clínica: receber, acolher e conduzir o paciente da porta até a
   cadeira, com o método de atendimento Disney adaptado à odontologia.
   Par presencial do CRC de Alta Performance (/produtos/vendas-secretaria),
   de quem esta landing é fork estrutural.

   Ordem: ScarcityBar → Header → Hero → Números → Problema →
   Método (4 pilares Disney) → Módulos → Bônus → Plataforma →
   Autoridade → Depoimentos → Oferta → Garantia → FAQ → CTA final → Footer.

   ⚠️ `has-urgency-bar` e a <ScarcityBar /> andam juntas: a classe
      reserva `--urgency-h` de espaço no topo. Se tirar a barra, tire a
      classe também, senão sobra um vão de 53px acima do hero.

   ⚠️ TROCAR antes de publicar (em ./content.ts): data do lote e
      depoimentos reais. Checkout e preço já são os reais.
   ============================================================ */

export function RecepcaoLanding() {
  return (
    <div className="felice felice-maestria has-urgency-bar">
      <ScarcityBar
        deadlineIso={DEADLINE_ISO}
        label="A oferta deste lote encerra em"
        vagas="Condição do lote atual"
        viewers
      />
      <RecepcaoHeader />

      <main>
        <RecepcaoHero />
        <RecepcaoNumeros />
        <RecepcaoProblema />
        <RecepcaoMetodo />

        <div className="wrap">
          <div className="divider" />
        </div>

        <RecepcaoModulos />
        <RecepcaoBonus />
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
      <PurchaseToasts produto="a Recepção de Alta Performance" />
      <RevealOnScroll />
    </div>
  );
}
