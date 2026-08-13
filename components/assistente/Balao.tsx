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
import { CardProduto } from './CardProduto';
import type { Balao as TipoBalao } from './useAssistente';

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
