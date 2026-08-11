'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { fireApplication } from '@/components/tracking/application';
import {
  CONFIRMACAO_URL,
  LANDING_URL,
  ORIGEM_LABEL,
  TRACKING_SLUG,
  WHATSAPP_NUMERO,
} from './config';

/* Questionário de candidatura da Mentoria de Zigomático.

   Duas diferenças em relação aos questionários de gestão:

   1. A qualificação é CLÍNICA, não financeira — o que decide o encaixe é
      o momento cirúrgico do candidato (o que ele já opera, o volume de
      maxila atrófica que chega e o que faz com esses casos hoje).
   2. Tem pergunta de disponibilidade: a mentoria gira em torno dos
      encontros PRESENCIAIS; quem não pode viajar não tem encaixe.

   O envio é por WhatsApp: o formulário monta a mensagem com contato e
   respostas e abre o wa.me da equipe. */
const QUESTOES: { id: string; label: string; options: string[] }[] = [
  {
    id: 'experiencia',
    label: 'Qual é a sua experiência com implantodontia hoje?',
    options: [
      'Ainda não instalo implantes',
      'Instalo implantes unitários',
      'Faço protocolos / All-on-4',
      'Faço reabilitações complexas',
    ],
  },
  {
    id: 'zigomatico',
    label: 'Você já operou implante zigomático?',
    options: [
      'Nunca operei',
      'Já assisti ou auxiliei cirurgias',
      'Operei alguns casos',
      'Opero com regularidade',
    ],
  },
  {
    id: 'casos',
    label: 'Quantos casos de maxila atrófica severa chegam à sua clínica por mês?',
    options: ['Nenhum ainda', '1 a 2', '3 a 5', 'Mais de 5'],
  },
  {
    id: 'hoje',
    label: 'O que você faz com esses casos hoje?',
    options: [
      'Encaminho para outro colega',
      'Indico enxerto ou outra solução',
      'Opero, mas com insegurança',
      'Opero com segurança',
    ],
  },
  {
    id: 'planejamento',
    label: 'Como você planeja os seus casos atualmente?',
    options: [
      'Não uso planejamento digital',
      'Terceirizo o planejamento',
      'Planejo eu mesmo em software',
      'Já trabalho com cirurgia guiada',
    ],
  },
  {
    id: 'estrutura',
    label: 'Qual estrutura você tem para operar?',
    options: [
      'Ainda não tenho estrutura',
      'Centro cirúrgico alugado / parceiro',
      'Hospital com equipe de anestesia',
      'Centro cirúrgico próprio',
    ],
  },
  {
    id: 'presencial',
    label: 'Você tem disponibilidade para os encontros presenciais (com viagem)?',
    options: [
      'Sim, sem problema',
      'Sim, avisando com antecedência',
      'Depende das datas',
      'Ainda não sei',
    ],
  },
  {
    id: 'quando',
    label: 'Quando você pretende começar?',
    options: ['Imediatamente', 'Nos próximos 3 meses', 'Ainda este ano', 'Só pesquisando'],
  },
  {
    id: 'objetivo',
    label: 'Qual é o seu principal objetivo com a mentoria?',
    options: [
      'Começar a operar zigomático',
      'Ganhar segurança na técnica',
      'Dominar o quadrizigoma',
      'Parar de encaminhar os casos',
      'Elevar o ticket da clínica',
    ],
  },
];

/** Monta a mensagem que o candidato envia: contato + as respostas por
 *  extenso, para a conversa de diagnóstico já começar qualificada.
 *  Mesmo formato dos outros questionários do repo. */
function montarLinkWhatsapp(
  contato: { nome: string; whatsapp: string; email: string; cidade: string; cro: string },
  answers: Record<string, string>,
) {
  const linhas = [
    'Olá! Quero me candidatar à Mentoria de Zigomático.',
    '',
    `*Origem:* ${ORIGEM_LABEL}`,
    `*Nome:* ${contato.nome}`,
    `*WhatsApp:* ${contato.whatsapp}`,
  ];
  if (contato.cro) linhas.push(`*CRO:* ${contato.cro}`);
  if (contato.cidade) linhas.push(`*Cidade:* ${contato.cidade}`);
  if (contato.email) linhas.push(`*E-mail:* ${contato.email}`);
  linhas.push('', '*Minhas respostas:*');
  QUESTOES.forEach((q, i) => {
    linhas.push(`${i + 1}. ${q.label}`, `→ ${answers[q.id] ?? '—'}`);
  });
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(linhas.join('\n'))}`;
}

export function AplicacaoQuiz() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [cidade, setCidade] = useState('');
  const [cro, setCro] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const respondidas = useMemo(() => Object.keys(answers).length, [answers]);
  const completo =
    respondidas === QUESTOES.length && nome.trim().length > 1 && whatsapp.trim().length >= 8;

  const select = (q: string, opt: string) => setAnswers((a) => ({ ...a, [q]: opt }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!completo || submitting) return;
    setSubmitting(true);

    const contato = {
      nome: nome.trim(),
      whatsapp: whatsapp.trim(),
      email: email.trim(),
      cidade: cidade.trim(),
      cro: cro.trim(),
    };
    const whatsappUrl = montarLinkWhatsapp(contato, answers);

    // A aba precisa ser aberta AQUI, ainda dentro do clique: se esperar o
    // fetch, o navegador já não considera gesto do usuário e bloqueia o popup.
    const aba = window.open('', '_blank');

    try {
      // Dispara o SubmitApplication no browser e ecoa o tracking ao servidor (dedup).
      // 'cold': o candidato vem da landing, não de uma compra anterior.
      const tracking = fireApplication(TRACKING_SLUG, 'cold');
      const payload = {
        contato,
        qualificacao: answers,
        origem: 'mentoria-zigomatico/landing',
        tracking,
      };
      // barra final: o projeto usa trailingSlash, evita 308 no POST
      const res = await fetch('/produtos/mentoria-zigomatico/aplicacao/api/lead/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('falha');
    } catch {
      // De propósito: NÃO trava o envio. A própria mensagem do WhatsApp leva
      // contato e respostas, então a candidatura chega à equipe mesmo se o
      // registro falhar — travar aqui perderia o lead por completo.
      console.error('[aplicacao] falha ao registrar o lead; seguindo para o WhatsApp');
    }

    if (aba) {
      aba.location.href = whatsappUrl;
      router.push(CONFIRMACAO_URL);
    } else {
      // Popup bloqueado: leva a aba atual para o WhatsApp, que é o que a
      // pessoa pediu ao clicar. A confirmação fica de fora nesse caminho.
      window.location.href = whatsappUrl;
    }
  };

  return (
    <main className="cons-page">
      <div className="obg-hero-bg" aria-hidden />
      <div className="wrap cons-inner">
        <div className="cons-head reveal">
          <span className="eyebrow">Candidatura · Mentoria de Zigomático</span>
          <h1>Antes da conversa, me conta do seu momento cirúrgico</h1>
          <p className="cons-lead">
            São {QUESTOES.length} perguntas rápidas (menos de 3 minutos). Elas nos permitem avaliar o
            seu encaixe na turma e chegar na conversa de diagnóstico já entendendo o que você opera
            hoje, os casos que chegam até você e o que falta para você resolvê-los.
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
              Para onde a nossa equipe te chama?
            </legend>
            <div className="cons-fields">
              <label className="cons-field">
                <span>Nome completo *</span>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  required
                />
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
                <span>CRO</span>
                <input value={cro} onChange={(e) => setCro(e.target.value)} placeholder="CRO / UF" />
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
                <input
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  placeholder="Cidade / UF"
                />
              </label>
            </div>
          </fieldset>

          <div className="cons-submit">
            <span className="cons-progress">
              {respondidas} de {QUESTOES.length} respondidas
            </span>
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={!completo || submitting}
            >
              {submitting ? 'Abrindo o WhatsApp…' : 'Enviar minha candidatura'}{' '}
              <span className="arrow">→</span>
            </button>
            <p className="cons-submit-hint">
              O WhatsApp abre com as suas respostas prontas — é só apertar enviar.
            </p>
            <a className="cons-skip" href={LANDING_URL}>
              Agora não — voltar para a página da mentoria →
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
