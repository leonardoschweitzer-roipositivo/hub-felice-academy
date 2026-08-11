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

/* Questionário de candidatura da Mentoria de Gestão F4.

   Parte das mesmas perguntas de porte de clínica dos outros funis de
   gestão (faturamento, cadeiras, dentistas, equipe, volume), porque é o
   que dimensiona o encaixe — e acrescenta as três que só fazem sentido
   numa mentoria: qual dos 4 PILARES está mais fraco, se a equipe topa
   ser treinada (a mentoria treina a equipe inteira, não só o dono) e o
   prazo para começar.

   O envio é por WhatsApp: o formulário monta a mensagem com contato e
   respostas e abre o wa.me da equipe. */
const QUESTOES: { id: string; label: string; options: string[] }[] = [
  {
    id: 'faturamento',
    label: 'Qual o faturamento mensal médio da clínica hoje?',
    options: [
      'Até R$ 30 mil',
      'R$ 30 a 80 mil',
      'R$ 80 a 150 mil',
      'R$ 150 a 300 mil',
      'Acima de R$ 300 mil',
    ],
  },
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
    id: 'equipe',
    label: 'Quantas pessoas na equipe de apoio (recepção, ASB/TSB, gerência)?',
    options: ['Nenhuma / só eu', '1 a 3', '4 a 8', '9 ou mais'],
  },
  {
    id: 'pacientes',
    label: 'Quantos pacientes vocês atendem por semana, em média?',
    options: ['Até 30', '31 a 80', '81 a 150', 'Mais de 150'],
  },
  {
    id: 'pilar',
    label: 'Qual dos 4 pilares está mais fraco na sua clínica hoje?',
    options: ['Atendimento', 'Comercial', 'Marketing', 'Gestão', 'Todos os quatro'],
  },
  {
    id: 'time',
    label: 'A sua equipe participaria dos treinamentos da mentoria?',
    options: [
      'Sim, equipe engajada',
      'Sim, mas precisa de convencimento',
      'Tenho equipe pequena',
      'Ainda não tenho equipe',
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
      'Sair da operação',
      'Padronizar a equipe',
      'Converter mais orçamentos',
      'Atrair mais pacientes',
      'Organizar os números e o lucro',
    ],
  },
];

/** Monta a mensagem que o candidato envia: origem do funil, contato e as
 *  respostas por extenso, para a conversa de diagnóstico já começar
 *  qualificada. Mesmo formato dos outros questionários do repo. */
function montarLinkWhatsapp(
  contato: { nome: string; whatsapp: string; email: string; cidade: string; clinica: string },
  answers: Record<string, string>,
) {
  const linhas = [
    'Olá! Quero me candidatar à Mentoria de Gestão F4.',
    '',
    `*Origem:* ${ORIGEM_LABEL}`,
    `*Nome:* ${contato.nome}`,
    `*WhatsApp:* ${contato.whatsapp}`,
  ];
  if (contato.clinica) linhas.push(`*Clínica:* ${contato.clinica}`);
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
  const [clinica, setClinica] = useState('');
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
      clinica: clinica.trim(),
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
        origem: 'mentoria-gestao-f4/landing',
        tracking,
      };
      // barra final: o projeto usa trailingSlash, evita 308 no POST
      const res = await fetch('/produtos/mentoria-gestao-f4/aplicacao/api/lead/', {
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
          <span className="eyebrow">Candidatura · Mentoria de Gestão F4</span>
          <h1>Antes da conversa, me conta sobre a sua clínica</h1>
          <p className="cons-lead">
            São {QUESTOES.length} perguntas rápidas (menos de 3 minutos). Elas nos permitem avaliar o
            seu encaixe na turma e chegar na conversa de diagnóstico já entendendo a sua estrutura,
            o seu momento e qual dos 4 pilares precisa de trabalho primeiro.
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
                <span>Nome da clínica</span>
                <input
                  value={clinica}
                  onChange={(e) => setClinica(e.target.value)}
                  placeholder="Como a clínica se chama"
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
