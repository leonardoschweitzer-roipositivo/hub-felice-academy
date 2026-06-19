'use client';

import { useEffect, useState } from 'react';

/* Lista de "compradores" fake. Edite à vontade. */
const NOMES = [
  'Dra. Ana Paula',
  'Dr. Rafael Mendes',
  'Dra. Camila Souza',
  'Dr. Bruno Carvalho',
  'Dra. Letícia Ramos',
  'Dr. Felipe Andrade',
  'Dra. Juliana Costa',
  'Dr. Marcos Vinícius',
  'Dra. Patrícia Lima',
  'Dr. Eduardo Tavares',
  'Dra. Fernanda Rocha',
  'Dr. Thiago Barbosa',
];

const CIDADES = [
  'São Paulo/SP',
  'Curitiba/PR',
  'Belo Horizonte/MG',
  'Porto Alegre/RS',
  'Recife/PE',
  'Goiânia/GO',
  'Florianópolis/SC',
  'Fortaleza/CE',
  'Campinas/SP',
  'Brasília/DF',
];

type Toast = { id: number; nome: string; cidade: string; min: number };

const rand = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const randInt = (lo: number, hi: number) => lo + Math.floor(Math.random() * (hi - lo + 1));

/**
 * Avisos fake de compra ("Fulano comprou!") que aparecem no canto inferior
 * esquerdo em intervalos aleatórios e somem sozinhos.
 */
/* duração da animação de saída (deve casar com .is-out no felice.css) */
const OUT_MS = 400;
/* tempo que o toast fica visível antes de começar a sair */
const VISIBLE_MS = 5000;

export function PurchaseToasts() {
  const [toast, setToast] = useState<Toast | null>(null);
  const [phase, setPhase] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let seq = 0;

    const show = () => {
      seq += 1;
      setPhase('in');
      setToast({
        id: seq,
        nome: rand(NOMES),
        cidade: rand(CIDADES),
        min: randInt(2, 18),
      });

      // começa a sair depois de VISIBLE_MS
      timers.push(
        setTimeout(() => setPhase('out'), VISIBLE_MS),
      );
      // desmonta só depois que a animação de saída termina
      timers.push(
        setTimeout(() => setToast(null), VISIBLE_MS + OUT_MS),
      );
      // agenda o próximo entre 8s e 18s
      timers.push(setTimeout(show, randInt(8000, 18000)));
    };

    // primeiro aparece após 4s
    timers.push(setTimeout(show, 4000));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="purchase-toast-wrap" aria-live="off">
      {toast && (
        <div className={`purchase-toast is-${phase}`} key={toast.id}>
          <span className="purchase-toast-ico">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffb454" strokeWidth="2.4">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <div className="purchase-toast-body">
            <b>{toast.nome}</b>
            <span className="purchase-toast-msg">acabou de comprar o Kit F4</span>
            <small>
              {toast.cidade} · há {toast.min} min
            </small>
          </div>
        </div>
      )}
    </div>
  );
}
