import { WHATSAPP_NUMERO, whatsappUrl } from '@/lib/whatsapp/contato';

/* ============================================================
   Página de Obrigado · Kit Gestão F4 — configuração central
   Edite SÓ aqui os links/parâmetros da página de obrigado.
   ============================================================ */

/** Rota do questionário de qualificação — para onde os CTAs "Agendar
    consultoria" levam. O lead responde e é direcionado à confirmação. */
export const QUESTIONARIO_URL = '/produtos/kitgestaof4/consultoria';

/** Rota da página de confirmação (recebimento dos dados). */
export const CONFIRMACAO_URL = '/produtos/kitgestaof4/consultoria/confirmado';

/** Área completa do Kit (topbar, busca, prev/next entre documentos).
    Continua existindo depois de a grade entrar nesta página: é o link salvo
    na plataforma e o destino do CTA final, da confirmação e do quiz. */
export const DOCS_URL = '/produtos/kitgestaof4/kit-f4';

/** Âncora da seção de documentos DENTRO desta página (ver MeusDocumentos). */
export const DOCS_ANCHOR = '#meus-documentos';

/** O WhatsApp da Felice — (88) 98139-1199. O número mora em
    `lib/whatsapp/contato.ts`; aqui é só o reexport, porque o quiz deste
    funil importa `WHATSAPP_NUMERO` deste config. */
export { WHATSAPP_NUMERO };

/** Identificação do funil DENTRO da mensagem do WhatsApp. A equipe atende
    os 7 questionários no mesmo número, então a resposta precisa dizer de
    onde veio sem depender da frase de abertura. */
export const ORIGEM_LABEL = 'Kit Gestão F4 · consultoria gratuita (pós-compra)';

export const WHATSAPP_URL = whatsappUrl(
  'Olá! Acabei de adquirir o Kit Gestão F4 e quero agendar minha consultoria gratuita.',
);

/** Prazo, em dias, alinhado à garantia incondicional. Usado na copy de urgência. */
export const PRAZO_DIAS = 7;

/* O vídeo saiu daqui: como ele também toca na área do Kit, passou a viver em
   `components/felice/config.ts` (`VIDEO_URL`), junto do checkout e do preço. */
