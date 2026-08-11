'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { fireApplication } from '@/components/tracking/application';
import { CONFIRMACAO_URL, CURSO_URL, ORIGEM_LABEL, WHATSAPP_NUMERO } from '../obrigado/config';

/* Questionário de qualificação do lead vindo da Maestria Zigomática.
   As perguntas mapeiam a experiência com implantes, o volume de casos de
   atrofia e a maturidade cirúrgica — para o Dr. Sócrates chegar na
   consultoria já entendendo o momento do aluno. */
const QUESTOES: { id: string; label: string; options: string[] }[] = [
  {
    id: 'implantes',
    label: 'Há quanto tempo você trabalha com implantes?',
    options: ['Ainda não trabalho', 'Menos de 2 anos', '2 a 5 anos', 'Mais de 5 anos'],
  },
  {
    id: 'volume',
    label: 'Quantos implantes você instala por mês, em média?',
    options: ['Nenhum ainda', 'Até 10', '11 a 30', 'Mais de 30'],
  },
  {
    id: 'zigomatico',
    label: 'Você já operou algum caso zigomático?',
    options: ['Nunca', 'Acompanhei / assisti', 'Já operei alguns', 'Opero com frequência'],
  },
  {
    id: 'atrofia',
    label: 'Com que frequência aparecem casos de maxila atrófica severa na sua agenda?',
    options: ['Raramente', 'Algumas vezes por ano', 'Todo mês', 'Toda semana'],
  },
  {
    id: 'encaminha',
    label: 'Hoje, o que você faz com o caso de atrofia severa?',
    options: [
      'Encaminho para outro colega',
      'Indico enxerto longo',
      'Tento resolver, mas com insegurança',
      'Já resolvo com zigomático',
    ],
  },
  {
    id: 'fluxo',
    label: 'Você já trabalha com cirurgia guiada / fluxo digital?',
    options: ['Não', 'Estou começando', 'Sim, em alguns casos', 'Sim, no dia a dia'],
  },
  {
    id: 'estrutura',
    label: 'Você tem estrutura e instrumental para começar a operar?',
    options: ['Ainda não', 'Parcialmente', 'Sim, mas com dúvidas', 'Sim, completa'],
  },
  {
    id: 'objetivo',
    label: 'Qual é o seu maior objetivo com a Maestria?',
    options: [
      'Operar meu primeiro caso',
      'Ganhar segurança no protocolo',
      'Parar de encaminhar casos',
      'Aumentar meu ticket',
      'Ser referência na região',
    ],
  },
];

/** Monta a mensagem que o lead envia: contato + as respostas por extenso,
 *  para a conversa já começar qualificada. Mesmo formato dos outros
 *  questionários do repo. */
function montarLinkWhatsapp(
  contato: { nome: string; whatsapp: string; email: string; cidade: string },
  answers: Record<string, string>,
) {
  const linhas = [
    'Olá! Adquiri a Maestria Zigomática e quero agendar minha consultoria gratuita de 1 hora.',
    '',
    `*Origem:* ${ORIGEM_LABEL}`,
    `*Nome:* ${contato.nome}`,
    `*WhatsApp:* ${contato.whatsapp}`,
  ];
  if (contato.cidade) linhas.push(`*Cidade:* ${contato.cidade}`);
  if (contato.email) linhas.push(`*E-mail:* ${contato.email}`);
  linhas.push('', '*Minhas respostas:*');
  QUESTOES.forEach((q, i) => {
    linhas.push(`${i + 1}. ${q.label}`, `→ ${answers[q.id] ?? '—'}`);
  });
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(linhas.join('\n'))}`;
}

export function ConsultoriaQuiz() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [cidade, setCidade] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const respondidas = useMemo(() => Object.keys(answers).length, [answers]);
  const completo =
    respondidas === QUESTOES.length && nome.trim().length > 1 && whatsapp.trim().length >= 8;

  const select = (q: string, opt: string) => setAnswers((a) => ({ ...a, [q]: opt }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!completo || submitting) return;
    setSubmitting(true);
    setError('');

    const contato = {
      nome: nome.trim(),
      whatsapp: whatsapp.trim(),
      email: email.trim(),
      cidade: cidade.trim(),
    };
    const whatsappUrl = montarLinkWhatsapp(contato, answers);

    // A aba precisa ser aberta AQUI, ainda dentro do clique: se esperar o
    // fetch, o navegador já não considera gesto do usuário e bloqueia o popup.
    const aba = window.open('', '_blank');

    try {
      // Dispara o SubmitApplication no browser e ecoa o tracking ao servidor (dedup).
      const tracking = fireApplication('maestria-zigomatica', 'post_purchase');
      const payload = {
        contato,
        qualificacao: answers,
        origem: 'maestria-zigomatica/obrigado',
        tracking,
      };
      // barra final: o projeto usa trailingSlash, evita 308 no POST
      const res = await fetch('/produtos/maestria-zigomatica/consultoria/api/lead/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('falha');
    } catch {
      // De propósito: NÃO trava o envio. A própria mensagem do WhatsApp leva
      // contato e respostas, então o lead chega à equipe mesmo se o registro
      // falhar — travar aqui perderia o lead por completo.
      console.error('[consultoria] falha ao registrar o lead; seguindo para o WhatsApp');
    }

    if (aba) {
      aba.location.href = whatsappUrl;
      router.push(CONFIRMACAO_URL);
    } else {
      // Popup bloqueado: leva a aba atual para o WhatsApp, que é o que a
      // pessoa pediu ao clicar.
      window.location.href = whatsappUrl;
    }
  };

  return (
    <main className="cons-page">
      <div className="obg-hero-bg" aria-hidden />
      <div className="wrap cons-inner">
        <div className="cons-head reveal">
          <span className="eyebrow">Consultoria gratuita · Maestria Zigomática</span>
          <h1>Antes de agendar, me conta sobre a sua experiência</h1>
          <p className="cons-lead">
            São 8 perguntas rápidas (menos de 2 minutos) para que o Dr. Sócrates chegue na sua
            consultoria já entendendo o seu momento — e o tempo da reunião renda o máximo.
          </p>
        </div>

        <form className="cons-form" onSubmit={submit}>
          {QUESTOES.map((q, i) => (
            <fieldset className="cons-q reveal" key={q.id}>
              <legend>
                <span className="cons-q-n">{i + 1}</span>
                {q.label}
              </legend>
              <div className="cons-chips">
                {q.options.map((opt) => {
                  const selected = answers[q.id] === opt;
                  return (
                    <button
                      type="button"
                      key={opt}
                      className={`cons-chip${selected ? ' selected' : ''}`}
                      aria-pressed={selected}
                      onClick={() => select(q.id, opt)}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}

          <fieldset className="cons-q cons-contact reveal">
            <legend>
              <span className="cons-q-n">✓</span>
              Para onde o Dr. Sócrates te chama?
            </legend>
            <div className="cons-fields">
              <label className="cons-field">
                <span>Nome completo *</span>
                <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" required />
              </label>
              <label className="cons-field">
                <span>WhatsApp (com DDD) *</span>
                <input
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="(00) 00000-0000"
                  inputMode="tel"
                  required
                />
              </label>
              <label className="cons-field">
                <span>E-mail</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  type="email"
                  inputMode="email"
                />
              </label>
              <label className="cons-field">
                <span>Cidade / UF</span>
                <input value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder="Cidade / UF" />
              </label>
            </div>
          </fieldset>

          {error && <p className="cons-error">{error}</p>}

          <div className="cons-submit">
            <span className="cons-progress">{respondidas} de {QUESTOES.length} respondidas</span>
            <button type="submit" className="btn btn-primary btn-lg" disabled={!completo || submitting}>
              {submitting ? 'Abrindo o WhatsApp…' : 'Enviar e agendar minha consultoria'} <span className="arrow">→</span>
            </button>
            <p className="cons-submit-hint">
              O WhatsApp abre com as suas respostas prontas — é só apertar enviar.
            </p>
            <a className="cons-skip" href={CURSO_URL}>
              Agora não — acessar minhas aulas →
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
