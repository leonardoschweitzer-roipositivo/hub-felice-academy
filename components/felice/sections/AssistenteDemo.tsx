'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/* ============================================================
   Mockup animado do Assistente F4 (seção "Mais que um PDF").

   Simula uma conversa por cenário: a pergunta é digitada no campo,
   vira balão, o Assistente "pensa" e a resposta entra em blocos,
   terminando nos chips de fonte. Depois passa ao próximo cenário.
   Só mostra o que o Assistente real já faz (responde a partir do
   material do Kit, citando o documento) — as respostas abaixo saem
   de components/kit-f4/content (banco de objeções, ecossistema do
   POP, roadmap da chamada). Começa ao entrar na tela, não troca de
   cenário no hover/foco e respeita reduced-motion. Estilos em ".assist-*".
   ============================================================ */

type Cena = {
  aba: string;
  pergunta: string;
  /* cada item entra como um bloco da resposta */
  resposta: ReactNode[];
  fontes: string[];
};

const CENAS: Cena[] = [
  {
    aba: 'Encontrar',
    pergunta: 'O que respondo quando o paciente diz “vou pensar”?',
    resposta: [
      <p key="a">Está no Banco de Objeções dos Scripts de Agendamento. A resposta sugerida é:</p>,
      <blockquote key="b">
        “Claro, é uma decisão importante. Posso te enviar o plano por escrito para ajudar nessa
        conversa e marcar um retorno para tirar dúvidas?”
      </blockquote>,
    ],
    fontes: ['Scripts de Agendamento · Banco de objeções'],
  },
  {
    aba: 'Tirar dúvida',
    pergunta: 'Qual a diferença entre a recepção e a CRC?',
    resposta: [
      <p key="a">
        As duas formam a <b>Linha de Frente</b> da clínica — acolhimento e conversão.
      </p>,
      <p key="b">
        A <b>CRC</b> é a primeira porta de entrada: telefone e digital, onde a voz precisa
        transmitir segurança. A <b>recepção</b> cuida do paciente presencialmente, da chegada ao
        encerramento.
      </p>,
    ],
    fontes: ['POP · Ecossistema de Excelência', 'CRC · A voz como primeiro contato'],
  },
  {
    aba: 'Implementar',
    pergunta: 'Comprei hoje. Por onde começo na minha clínica?',
    resposta: [
      <p key="a">Comece pela Linha de Frente, onde o paciente chega primeiro:</p>,
      <ol key="b">
        <li>
          <b>Gere o POP</b> da recepção e da CRC no gerador e colha as assinaturas.
        </li>
        <li>
          <b>Entregue os scripts</b> da jornada de atendimento e do roadmap da chamada.
        </li>
        <li>
          <b>Treine no simulador</b> antes de a equipe ir para o telefone.
        </li>
      </ol>,
    ],
    fontes: ['POP · Gerador de POP', 'CRC · Roadmap da chamada', 'Atendimento · Simulador'],
  },
];

type Fase = 'digitando' | 'pensando' | 'respondendo' | 'fim';

export function AssistenteDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);
  const [reduzido, setReduzido] = useState(false);
  const [pausado, setPausado] = useState(false);

  const [c, setC] = useState(0);
  const [fase, setFase] = useState<Fase>('digitando');
  const [chars, setChars] = useState(0);
  const [blocos, setBlocos] = useState(0);

  const cena = CENAS[c];
  /* blocos da resposta + 1 para os chips de fonte */
  const totalBlocos = cena.resposta.length + 1;

  useEffect(() => {
    setReduzido(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisivel(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    /* hover/foco só segura a troca de cenário: a conversa em curso (ou a
       que a pessoa acabou de escolher na aba) termina de entrar */
    if (!visivel || reduzido || (pausado && fase === 'fim')) return;
    let ms: number;
    let next: () => void;
    if (fase === 'digitando') {
      if (chars < cena.pergunta.length) {
        ms = 34;
        next = () => setChars((n) => n + 1);
      } else {
        ms = 420;
        next = () => setFase('pensando');
      }
    } else if (fase === 'pensando') {
      ms = 1200;
      next = () => {
        setFase('respondendo');
        setBlocos(1);
      };
    } else if (fase === 'respondendo') {
      ms = 750;
      next = () => (blocos < totalBlocos ? setBlocos((n) => n + 1) : setFase('fim'));
    } else {
      ms = 4200;
      next = () => ir(c + 1);
    }
    const id = window.setTimeout(next, ms);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visivel, pausado, reduzido, fase, chars, blocos, c]);

  function ir(n: number) {
    setC((n + CENAS.length) % CENAS.length);
    setFase('digitando');
    setChars(0);
    setBlocos(0);
  }

  /* reduced-motion: cena inteira, estática */
  const completo = reduzido;
  const enviada = completo || fase !== 'digitando';
  const mostrados = completo ? totalBlocos : blocos;
  const campo = completo ? '' : enviada ? '' : cena.pergunta.slice(0, chars);

  return (
    <div
      className="assist-demo"
      ref={ref}
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocusCapture={() => setPausado(true)}
      onBlurCapture={() => setPausado(false)}
    >
      <div className="assist-win">
        <div className="heroc-chrome">
          <span className="heroc-cdot" />
          <span className="heroc-cdot" />
          <span className="heroc-cdot" />
          <span className="assist-title">
            <span className="assist-spark">✦</span> Assistente F4
            <i>treinado no Método F4</i>
          </span>
        </div>

        <div className="assist-tabs" role="tablist" aria-label="Exemplos de uso do Assistente F4">
          {CENAS.map((s, idx) => (
            <button
              key={s.aba}
              role="tab"
              aria-selected={idx === c}
              className={`assist-tab${idx === c ? ' is-active' : ''}`}
              onClick={() => ir(idx)}
            >
              {s.aba}
            </button>
          ))}
        </div>

        <div className="assist-msgs" key={c} aria-live="off">
          {enviada && <div className="assist-bubble user">{cena.pergunta}</div>}

          {!completo && fase === 'pensando' && (
            <div className="heroc-typing" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          )}

          {mostrados > 0 && (
            <div className="assist-bubble ai">
              <span className="assist-spark" aria-hidden="true">
                ✦
              </span>
              <div className="assist-answer">
                {cena.resposta.slice(0, mostrados).map((b, i) => (
                  <div className="assist-block" key={i}>
                    {b}
                  </div>
                ))}
                {mostrados >= totalBlocos && (
                  <div className="assist-block assist-fontes">
                    <span className="assist-fontes-lbl">Fonte</span>
                    {cena.fontes.map((f) => (
                      <span className="assist-fonte" key={f}>
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="assist-input" aria-hidden="true">
          <span className={`assist-input-txt${campo ? '' : ' is-empty'}`}>
            {campo || 'Pergunte ao Assistente F4…'}
            {!completo && fase === 'digitando' && <span className="assist-caret" />}
          </span>
          <span className="assist-send">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
