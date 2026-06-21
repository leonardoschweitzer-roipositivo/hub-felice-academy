'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { CONFIRMACAO_URL, ACESSO_URL } from '../obrigado/config';

/* Questionário de qualificação do lead vindo da Masterclass Zigomático
   Descomplicado. As perguntas mapeiam a experiência com implantes, o
   volume de casos de atrofia e a maturidade cirúrgica — para o Dr.
   Sócrates chegar na consultoria já entendendo o momento do aluno. */
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
    id: 'momento',
    label: 'Como você se sente para começar a operar zigomáticos?',
    options: ['Só explorando o tema', 'Quero começar, mas inseguro', 'Pronto, só falta um plano', 'Já opero e quero evoluir'],
  },
  {
    id: 'objetivo',
    label: 'Qual é o seu maior objetivo agora?',
    options: [
      'Dar o próximo passo depois da masterclass',
      'Operar meu primeiro caso',
      'Ganhar segurança no protocolo',
      'Parar de encaminhar casos',
      'Ser referência na região',
    ],
  },
];

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
    try {
      const payload = {
        contato: { nome: nome.trim(), whatsapp: whatsapp.trim(), email: email.trim(), cidade: cidade.trim() },
        qualificacao: answers,
        origem: 'masterclass-zigomatico/obrigado',
      };
      // barra final: o projeto usa trailingSlash, evita 308 no POST
      const res = await fetch('/produtos/masterclass-zigomatico/consultoria/api/lead/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('falha');
      router.push(CONFIRMACAO_URL);
    } catch {
      setSubmitting(false);
      setError('Não foi possível enviar agora. Tente novamente em instantes.');
    }
  };

  return (
    <main className="cons-page">
      <div className="obg-hero-bg" aria-hidden />
      <div className="wrap cons-inner">
        <div className="cons-head reveal">
          <span className="eyebrow">Consultoria gratuita · Zigomático Descomplicado</span>
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
              {submitting ? 'Enviando…' : 'Enviar e agendar minha consultoria'} <span className="arrow">→</span>
            </button>
            <a className="cons-skip" href={ACESSO_URL}>
              Agora não — assistir à masterclass →
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
