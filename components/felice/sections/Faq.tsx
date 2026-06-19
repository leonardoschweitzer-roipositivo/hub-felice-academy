'use client';

import { useEffect, useRef, useState } from 'react';

const PERGUNTAS: { q: string; a: string }[] = [
  {
    q: 'Como eu recebo o material?',
    a: 'O acesso é liberado imediatamente após a confirmação do pagamento. Você entra na plataforma online pelo navegador e já começa a usar hoje mesmo — nada para baixar ou instalar, e o acesso é vitalício.',
  },
  {
    q: 'Funciona no celular? Preciso de internet?',
    a: 'Sim, funciona no computador, tablet ou celular — basta um navegador e conexão com a internet. Você acessa de qualquer lugar: na recepção, no consultório ou em casa.',
  },
  {
    q: 'Preciso de algum sistema ou ferramenta paga?',
    a: 'Não. Está tudo dentro da plataforma, sem custo extra nem software adicional — inclusive a busca, a IA que responde sobre o material e os simuladores de treino já vêm incluídos.',
  },
  {
    q: 'Serve para qualquer clínica odontológica?',
    a: 'Sim. De consultórios individuais a clínicas com equipe, o método foi pensado para padronizar processos em qualquer estrutura.',
  },
  {
    q: 'Posso usar com toda a minha equipe?',
    a: 'Sim — esse é exatamente o objetivo. Os POPs e scripts existem para direcionar a equipe inteira e padronizar o atendimento.',
  },
  {
    q: 'E se eu não gostar?',
    a: 'Você tem 7 dias de garantia incondicional. Se não for para você, é só pedir o reembolso e devolvemos o valor integral.',
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  // reveal controlado pelo React (o observer global mexe no DOM e seria
  // sobrescrito a cada clique, fazendo o card sumir ao abrir o FAQ)
  const [revealed, setRevealed] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Dúvidas frequentes
          </span>
          <h2>Antes de começar</h2>
        </div>
        <div className="faq" ref={listRef}>
          {PERGUNTAS.map((item, i) => {
            const isOpen = open === i;
            const cls = ['acc', 'reveal', revealed ? 'in' : '', isOpen ? 'open' : '']
              .filter(Boolean)
              .join(' ');
            return (
              <div key={item.q} className={cls}>
                <button className="acc-q" onClick={() => setOpen(isOpen ? null : i)}>
                  {item.q} <span className="ic">+</span>
                </button>
                <div className="acc-a" style={{ maxHeight: isOpen ? '320px' : 0 }}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
