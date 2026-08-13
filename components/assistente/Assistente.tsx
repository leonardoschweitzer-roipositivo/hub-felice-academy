'use client';

/* ============================================================
   O ponto de montagem do assistente, chamado uma vez no app/layout.tsx.

   Fica no layout raiz porque é o único lugar global do repo (o Meta Pixel
   já mora lá) e o único que cobre página nova automaticamente — as
   alternativas eram importar em ~22 componentes-raiz de landing, cada um
   um ponto de esquecimento.

   Como ele alcança as 64 rotas, quem decide onde NÃO aparecer é
   lib/assistente/paginas.ts.
   ============================================================ */

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ASSISTENTE_NOME } from '@/lib/assistente/config';
import { contextoDaPagina, rotaBloqueada } from '@/lib/assistente/paginas';
import { fontVars } from '@/app/fonts';
import { useAssistente, useAssistenteDisponivel } from './useAssistente';
import { useNudge } from './useNudge';
import { trackAberto, trackProdutoClicado } from './tracking';
import '@/styles/assistente.css';

/* O painel só é baixado quando alguém clica no botão: no carregamento da
   página o bundle leva apenas o FAB. */
const AssistentePainel = dynamic(
  () => import('./AssistentePainel').then((m) => m.AssistentePainel),
  { ssr: false },
);

const SUGESTOES_HOME = [
  'Quero organizar minha clínica',
  'Minha equipe perde orçamento',
  'Quero aprender zigomático',
];
const SUGESTOES_PRODUTO = ['Isso serve pra mim?', 'Como funciona?', 'Quanto custa?'];

export function Assistente() {
  const pathname = usePathname() || '/';
  const disponivel = useAssistenteDisponivel();
  const [aberto, setAberto] = useState(false);
  /** Devolve o foco ao botão quando o painel fecha. */
  const fabRef = useRef<HTMLButtonElement>(null);

  const contexto = contextoDaPagina(pathname);
  const saudacao = contexto.slug
    ? `Oi! Sou a ${ASSISTENTE_NOME}, assistente virtual da Felice Academy. Posso tirar dúvidas sobre ${contexto.nome} — ou te ajudar a ver se ele é o caminho certo pro seu caso.`
    : `Oi! Sou a ${ASSISTENTE_NOME}, assistente virtual da Felice Academy. Me conta o que você quer resolver na sua clínica ou na sua carreira que eu te aponto o caminho certo aqui dentro.`;

  const estado = useAssistente(pathname, saudacao);
  const [nudge, dispensarNudge] = useNudge(disponivel === true && !aberto && !estado.comecou);

  /* Foco de volta no botão ao fechar — quem navega por teclado não pode
     ser devolvido ao topo da página. O `jaAbriu` evita roubar o foco no
     primeiro render, quando ninguém abriu nada ainda. */
  const jaAbriu = useRef(false);
  useEffect(() => {
    if (aberto) jaAbriu.current = true;
    else if (jaAbriu.current) fabRef.current?.focus({ preventScroll: true });
  }, [aberto]);

  /* Com o painel em tela cheia no mobile, o resto da página fica `inert`:
     sem isso o leitor de tela sai passeando pelo conteúdo atrás dele. */
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const main = document.querySelector('main');
    if (!main) return;
    const cheio = aberto && window.matchMedia('(max-width: 640px)').matches;
    if (cheio) main.setAttribute('inert', '');
    else main.removeAttribute('inert');
    return () => main.removeAttribute('inert');
  }, [aberto]);

  // `disponivel === null` é o estado "ainda sondando": não desenhamos nada
  // para o botão não piscar e sumir se a IA estiver fora do ar.
  if (rotaBloqueada(pathname) || disponivel !== true) return null;

  return (
    <div className={`fia-root ${fontVars}`} data-aberto={aberto ? 'sim' : 'nao'}>
      {aberto && (
        <div className="fia-backdrop" onClick={() => setAberto(false)} aria-hidden="true" />
      )}

      {aberto && (
        <AssistentePainel
          estado={estado}
          sugestoes={contexto.slug ? SUGESTOES_PRODUTO : SUGESTOES_HOME}
          pagina={pathname}
          onFechar={() => setAberto(false)}
          onIrProduto={trackProdutoClicado}
        />
      )}

      {nudge && !aberto && (
        <div className="fia-nudge" role="status">
          <span>Posso te ajudar a achar o caminho certo?</span>
          <button
            type="button"
            className="fia-nudge-x"
            onClick={dispensarNudge}
            aria-label="Dispensar"
          >
            ×
          </button>
        </div>
      )}

      <button
        type="button"
        className="fia-fab"
        ref={fabRef}
        onClick={() => {
          if (!aberto) trackAberto(pathname);
          setAberto((v) => !v);
        }}
        aria-expanded={aberto}
        aria-controls="fia-painel"
        aria-label={aberto ? 'Fechar o assistente' : `Abrir o assistente ${ASSISTENTE_NOME}`}
      >
        {aberto ? (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              d="M21 11.5a8.4 8.4 0 01-9 8.4 9 9 0 01-3.3-.6L3 21l1.8-5.1A8.2 8.2 0 014 11.5 8.4 8.4 0 0112.5 3 8.4 8.4 0 0121 11.5z"
              stroke="currentColor"
              strokeWidth="1.8"
              fill="none"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
