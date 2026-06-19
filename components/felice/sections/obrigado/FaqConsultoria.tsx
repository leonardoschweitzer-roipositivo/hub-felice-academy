'use client';

import { useEffect, useRef, useState } from 'react';
import { PRAZO_DIAS } from './config';

const PERGUNTAS: { q: string; a: string }[] = [
  {
    q: 'A consultoria é mesmo gratuita?',
    a: `Sim. Ela é um bônus para quem adquiriu o Kit Gestão F4 — não há nenhum custo adicional. É a nossa forma de garantir que você realmente coloque o método em prática.`,
  },
  {
    q: 'Quanto tempo dura?',
    a: 'É uma reunião de 1 hora, focada na sua clínica: diagnóstico, prioridades e plano de implementação.',
  },
  {
    q: 'É online ou presencial?',
    a: 'Online, por videochamada. Você participa de onde for mais confortável — do consultório ou de casa.',
  },
  {
    q: 'Preciso preparar alguma coisa antes?',
    a: 'Não precisa. Ajuda se você já tiver dado uma olhada nos documentos, mas pode chegar só com as suas dúvidas e o cenário atual da clínica.',
  },
  {
    q: 'Posso participar com a minha equipe?',
    a: 'Pode, e até recomendamos. Quem vai executar os POPs e scripts no dia a dia aproveita muito a conversa.',
  },
  {
    q: 'Tenho prazo para agendar?',
    a: `O ideal é agendar nos primeiros ${PRAZO_DIAS} dias, enquanto sua garantia corre, para já começar a implementar. As agendas do Dr. Sócrates são limitadas, então quanto antes, melhor.`,
  },
];

/* Mesmo padrão de acordeão do Faq.tsx da landing (reveal controlado por
   React para o card não sumir ao abrir/fechar). */
export function FaqConsultoria() {
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
            Dúvidas sobre a consultoria
          </span>
          <h2>Tudo o que você precisa saber</h2>
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
