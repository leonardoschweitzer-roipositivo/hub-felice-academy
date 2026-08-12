'use client';

import { useEffect, type RefObject } from 'react';

/**
 * Mede a barra fixa do topo e publica a altura em `--urgency-h` no container
 * `.felice`, para que o header e o hero desçam exatamente o necessário — não
 * importa se a barra quebra em 1, 2 ou mais linhas (mobile).
 *
 * Era código copiado em todas as barras do repo (as 4 de contagem regressiva
 * e as 3 TopBar sem countdown). Duas sutilezas que precisam continuar de pé:
 *
 * - `hidden` (prazo vencido) zera `--urgency-h` na mão. O `.has-urgency-bar`
 *   do wrapper continua valendo e, sem isso, o default de 53px do felice.css
 *   deixa um vão preto acima do hero.
 * - Quando a barra some do DOM o ref vira null, então o container é procurado
 *   por `document.querySelector` como alternativa — é o único jeito de o
 *   efeito ainda alcançar o `.felice` para zerar a variável.
 */
export function useUrgencyHeight(barRef: RefObject<HTMLElement>, hidden = false) {
  useEffect(() => {
    const root = (barRef.current?.closest('.felice') ??
      document.querySelector('.felice')) as HTMLElement | null;
    if (!root) return;

    if (hidden) {
      root.style.setProperty('--urgency-h', '0px');
      return;
    }

    const bar = barRef.current;
    if (!bar) return;

    let last = -1;
    const apply = () => {
      const h = bar.offsetHeight;
      // só escreve quando muda de fato — evita qualquer realimentação
      if (h !== last) {
        last = h;
        root.style.setProperty('--urgency-h', `${h}px`);
      }
    };
    apply();

    const ro = new ResizeObserver(apply);
    ro.observe(bar);
    window.addEventListener('resize', apply);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', apply);
    };
  }, [barRef, hidden]);
}
