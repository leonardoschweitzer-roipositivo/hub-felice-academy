'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { fireApplication } from '@/components/tracking/application';
import { CONFIRMACAO_URL, CURSO_URL } from '../obrigado/config';

/* Questionário de qualificação do lead vindo do Curso Gestão F4. As
   perguntas (consultórios, dentistas, volume, equipe, mix, maturidade e
   gestão) permitem ao Dr. Sócrates chegar na consultoria já entendendo a
   realidade da clínica. */
const QUESTOES: { id: string; label: string; options: string[] }[] = [
  {
    id: 'consultorios',
    label: 'Quantos consultórios (cadeiras) a sua clínica tem?',
    options: ['1', '2 a 3', '4 a 6', '7 ou mais'],
  },
  {
    id: 'dentistas',
    label: 'Quantos dentistas atendem na clínica?',
    options: ['Só eu', '2 a 3', '4 a 6', '7 ou mais'],
  },
  {
    id: 'pacientes',
    label: 'Quantos pacientes vocês atendem por semana, em média?',
    options: ['Até 30', '31 a 80', '81 a 150', 'Mais de 150'],
  },
  {
    id: 'equipe',
    label: 'Quantas pessoas na equipe de apoio (recepção, ASB/TSB, gerência)?',
    options: ['Nenhuma / só eu', '1 a 3', '4 a 8', '9 ou mais'],
  },
  {
    id: 'tratamentos',
    label: 'Quais tratamentos representam a maior parte do movimento?',
    options: ['Clínica geral', 'Ortodontia', 'Implantes e próteses', 'Estética', 'Mix de especialidades'],
  },
  {
    id: 'tempo',
    label: 'Há quanto tempo a clínica está aberta?',
    options: ['Ainda vou abrir', 'Menos de 1 ano', '1 a 3 anos', 'Mais de 3 anos'],
  },
  {
    id: 'gestao',
    label: 'Hoje vocês usam algum sistema ou processo de gestão?',
    options: ['Não, é tudo no improviso', 'Planilhas', 'Software de gestão', 'Temos, mas quero melhorar'],
  },
  {
    id: 'desafio',
    label: 'Qual é o seu maior desafio hoje?',
    options: [
      'Sair da operação',
      'Padronizar a equipe',
      'Aumentar os agendamentos',
      'Atrair mais pacientes',
      'Organizar as finanças',
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
      // Dispara o SubmitApplication no browser e ecoa o tracking ao servidor (dedup).
      const tracking = fireApplication('gestao-f4', 'post_purchase');
      const payload = {
        contato: { nome: nome.trim(), whatsapp: whatsapp.trim(), email: email.trim(), cidade: cidade.trim() },
        qualificacao: answers,
        origem: 'gestao-f4/obrigado',
        tracking,
      };
      // barra final: o projeto usa trailingSlash, evita 308 no POST
      const res = await fetch('/produtos/gestao-f4/consultoria/api/lead/', {
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
          <span className="eyebrow">Consultoria gratuita · Curso Gestão F4</span>
          <h1>Antes de agendar, me conta sobre a sua clínica</h1>
          <p className="cons-lead">
            São 8 perguntas rápidas (menos de 2 minutos) para que o Dr. Sócrates chegue na sua
            consultoria já entendendo a sua realidade — e o tempo da reunião renda o máximo.
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
            <a className="cons-skip" href={CURSO_URL}>
              Agora não — acessar minhas aulas →
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
