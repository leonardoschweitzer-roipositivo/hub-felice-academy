'use client';

/* ============================================================
   Um turno da conversa. O §§§ já foi resolvido no hook, então cada
   `parte` vira um balão próprio — a resposta chega como duas falas, do
   jeito que uma pessoa escreveria no WhatsApp.

   Renderização por JSX + `white-space: pre-wrap`. NADA de
   dangerouslySetInnerHTML aqui: o texto vem de um modelo de linguagem, que
   por definição pode ser induzido a escrever markup.
   ============================================================ */

import { Fragment } from 'react';
import { whatsappUrl } from '@/lib/whatsapp/contato';
import { ORIGEM_LABEL } from '@/lib/assistente/config';
import { CardProduto } from './CardProduto';
import { trackWhatsapp } from './tracking';
import type { Balao as TipoBalao } from './useAssistente';

/* Mensagem do botão de WhatsApp da conversa. É FIXA e curta de propósito:
   este caminho existe para quem NÃO deixou o contato (recusou o formulário
   ou só quer falar com uma pessoa), então não há consentimento nem nome —
   mandar junto o diagnóstico que a IA montou seria enviar dados de quem
   declinou. Isso é questão jurídica, não estética. O resumo completo só
   viaja pelo FormularioLead, depois do aceite de LGPD. */
const MENSAGEM_DIRETA = [
  'Olá! Vim pelo site, conversando com a assistente.',
  '',
  `*Origem:* ${ORIGEM_LABEL}`,
  'Gostaria de falar com alguém da equipe.',
].join('\n');

export function Balao({ balao, onIrProduto }: { balao: TipoBalao; onIrProduto?: (s: string) => void }) {
  const daIa = balao.autor === 'ia';

  return (
    <div className={`fia-turno ${daIa ? 'fia-turno--ia' : 'fia-turno--voce'}`}>
      {balao.partes.map((parte, i) => (
        <Fragment key={i}>
          {parte.texto ? <p className="fia-balao">{parte.texto}</p> : null}
          {parte.produtos.map((slug) => (
            <CardProduto slug={slug} key={slug} onIr={onIrProduto} />
          ))}
          {parte.wa && (
            <a
              className="fia-btn fia-btn--primario fia-btn--wa"
              href={whatsappUrl(MENSAGEM_DIRETA)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsapp(undefined)}
            >
              Falar com a equipe no WhatsApp
            </a>
          )}
        </Fragment>
      ))}
    </div>
  );
}

/** Três pontinhos enquanto a resposta não começa a chegar. */
export function Digitando() {
  return (
    <div className="fia-turno fia-turno--ia">
      <p className="fia-balao fia-digitando" aria-hidden="true">
        <span />
        <span />
        <span />
      </p>
    </div>
  );
}
