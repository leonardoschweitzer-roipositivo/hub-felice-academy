'use client';

import { useEffect, useRef, useState } from 'react';

const PERGUNTAS: { q: string; a: string }[] = [
  {
    q: 'Preciso instalar alguma coisa?',
    a: 'Não. O Felice CRM é 100% na nuvem — você acessa pelo navegador, de qualquer dispositivo, sem instalar nada.',
  },
  {
    q: 'Consigo migrar meus pacientes atuais?',
    a: 'Sim. Você pode importar a sua base de pacientes e configurar a agenda em poucos minutos para começar a usar hoje.',
  },
  {
    q: 'Funciona para clínica com vários profissionais?',
    a: 'Sim. Dá para organizar agenda, atendimentos e faturamento de toda a equipe em um só painel.',
  },
  {
    q: 'Meus dados ficam seguros?',
    a: 'Sim. Os dados ficam protegidos na nuvem, com backup e controle de acesso por usuário.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Pode. O teste é grátis por 7 dias e, depois, você mantém o plano apenas enquanto fizer sentido — sem fidelidade.',
  },
];

export function CrmFaq() {
  const [open, setOpen] = useState<number | null>(null);
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
