import '@/styles/felice.css';
import '@/styles/maestria.css';
import '@/styles/consultoria-landing.css';

import { ConsultoriaTopBar } from './ConsultoriaTopBar';
import { ConsultoriaHeader } from './ConsultoriaHeader';
import {
  ConsultoriaHero,
  ConsultoriaNumeros,
  ConsultoriaProblema,
  ConsultoriaSolucao,
  ConsultoriaMetodo,
  ConsultoriaCiclo,
  ConsultoriaEntregas,
  ConsultoriaAutoridade,
  ConsultoriaPorQue,
  ConsultoriaOferta,
  ConsultoriaFinal,
} from './ConsultoriaSections';
import { ConsultoriaPilares } from './ConsultoriaPilares';
import { ConsultoriaResultados } from './ConsultoriaResultados';
import { ConsultoriaEntrada } from './ConsultoriaEntrada';
import { ConsultoriaFaq } from './ConsultoriaFaq';
import { ConsultoriaFooter } from './ConsultoriaFooter';

import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';
import { WhatsappFloat } from '@/components/felice/ui/WhatsappFloat';
import { WHATSAPP_URL } from './content';

/* ============================================================
   CONSULTORIA GESTÃO F4 — landing de vendas (padrão Felice / dourado).
   Consultoria de 4 semanas do Dr. Sócrates Tavares, apresentada no deck
   "Gestão de clínica". Fork estrutural da Mentoria de Gestão — reusa
   felice.css + maestria.css (classe .felice-maestria) + os ajustes de
   consultoria-landing.css.

   ⚠️ `consultoria-landing.css` é o CSS DESTA landing. O arquivo
   `consultoria.css` (sem sufixo) é outro: é o do questionário `.cons-*`
   usado nas rotas /produtos/<slug>/consultoria das outras páginas.

   Venda por APLICAÇÃO, SEM PREÇO: CTAs → /produtos/consultoria/aplicacao.
   Escassez: poucas clínicas por vez (sem countdown).

   Ordem: TopBar → Header → Hero → Números → Problema → Solução →
   Método → Ciclo → Setups detalhados → Entregáveis → Resultados →
   Autoridade → Por que a Felice → Candidatura → Como entrar → FAQ →
   CTA final → Footer.

   ⚠️ SEM seção de depoimentos: não existe nenhum depoimento real de
      cliente de consultoria ainda. Entra quando houver — placeholder
      inventado aqui seria prova social falsa.
   ============================================================ */

export function ConsultoriaLanding() {
  return (
    <div className="felice felice-maestria has-urgency-bar">
      <ConsultoriaTopBar />
      <ConsultoriaHeader />

      <main>
        <ConsultoriaHero />
        <ConsultoriaNumeros />
        <ConsultoriaProblema />
        <ConsultoriaSolucao />
        <ConsultoriaMetodo />
        <ConsultoriaCiclo />

        <div className="wrap">
          <div className="divider" />
        </div>

        <ConsultoriaPilares />
        <ConsultoriaEntregas />
        <ConsultoriaResultados />
        <ConsultoriaAutoridade />
        <ConsultoriaPorQue />
        <ConsultoriaOferta />
        <ConsultoriaEntrada />
        <ConsultoriaFaq />
        <ConsultoriaFinal />
      </main>

      <ConsultoriaFooter />

      <WhatsappFloat href={WHATSAPP_URL} />
      <RevealOnScroll />
    </div>
  );
}
