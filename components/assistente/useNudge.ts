'use client';

/* ============================================================
   O cutucão: um aviso discreto de que a Sônia existe.

   Regras que vieram do widget da ROI POSITIVO e valem manter: dispara a
   35% de rolagem OU 20 segundos, o que vier primeiro; uma vez por sessão;
   nunca para quem já abriu o painel; e — o mais importante — ele NUNCA
   abre a conversa sozinho. Chat que se abre na cara de quem está lendo é
   o motivo de as pessoas fecharem sem ler.
   ============================================================ */

import { useEffect, useState } from 'react';

const CHAVE = 'fia_nudge';
const SEGUNDOS = 20;
const ROLAGEM = 0.35;
/** Some sozinho: um balão parado na tela vira ruído. */
const SOME_EM = 12_000;

export function useNudge(habilitado: boolean): [boolean, () => void] {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (!habilitado) return;
    try {
      if (sessionStorage.getItem(CHAVE)) return;
    } catch {
      return; // sem sessionStorage, não insiste
    }

    let morto = false;
    let sumir: ReturnType<typeof setTimeout>;

    const mostrar = () => {
      if (morto) return;
      morto = true;
      try {
        sessionStorage.setItem(CHAVE, '1');
      } catch {
        /* segue mesmo assim */
      }
      setVisivel(true);
      sumir = setTimeout(() => setVisivel(false), SOME_EM);
      limpar();
    };

    const aoRolar = () => {
      const alcance = document.documentElement.scrollHeight - window.innerHeight;
      if (alcance > 0 && window.scrollY / alcance >= ROLAGEM) mostrar();
    };

    const relogio = setTimeout(mostrar, SEGUNDOS * 1000);
    window.addEventListener('scroll', aoRolar, { passive: true });

    function limpar() {
      clearTimeout(relogio);
      window.removeEventListener('scroll', aoRolar);
    }
    return () => {
      limpar();
      clearTimeout(sumir);
    };
  }, [habilitado]);

  return [visivel, () => setVisivel(false)];
}
