'use client';

/* ============================================================
   O formulário de contato, INLINE no log da conversa (não é modal): a
   conversa continua visível acima, e a pessoa não perde o contexto do que
   estava perguntando.

   Ao enviar acontecem duas coisas, nesta ordem, e a ordem é o detalhe que
   faz o recurso funcionar no iPhone — ver o comentário do `submeter`.
   ============================================================ */

import { useState, type FormEvent } from 'react';
import { whatsappUrl } from '@/lib/whatsapp/contato';
import { ORIGEM_LABEL } from '@/lib/assistente/config';
import { fireLead } from '@/components/tracking/application';
import { trackWhatsapp } from './tracking';
import type { LeadSugerido, ChatMsg } from '@/lib/assistente/markers';
import { PRODUTOS_PUBLICOS } from './catalogoPublico';

/** Aceita 10 (fixo) ou 11 (celular) dígitos, com ou sem máscara. */
const digitos = (s: string) => s.replace(/\D/g, '');
const telefoneValido = (s: string) => {
  const d = digitos(s);
  return d.length >= 10 && d.length <= 11;
};

function mascarar(v: string): string {
  const d = digitos(v).slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

/** Monta a mensagem do WhatsApp no mesmo formato dos 8 questionários do
 *  repo: `*Origem:*` primeiro (os funis todos caem no mesmo número, e sem
 *  o rótulo ninguém sabe de onde o contato veio), contato, e o resumo. */
function montarMensagem(args: {
  nome: string;
  whatsapp: string;
  email: string;
  objetivo: string;
  produtoNome?: string;
  pagina: string;
  dor?: string;
  ultimasFalas: string[];
}): string {
  const linhas = [
    'Olá! Vim pelo site, conversando com a assistente.',
    '',
    `*Origem:* ${ORIGEM_LABEL}`,
    `*Nome:* ${args.nome}`,
    `*WhatsApp:* ${args.whatsapp}`,
  ];
  if (args.email) linhas.push(`*E-mail:* ${args.email}`);
  if (args.produtoNome) linhas.push(`*Interesse:* ${args.produtoNome}`);
  linhas.push(`*Página:* ${args.pagina}`);

  /* O diagnóstico que a Sônia montou. Cada linha some se a etapa não foi
     coberta — "*Problema:* —" é ruído com cara de dado.
     ⚠️ O `dor` ERA DESCARTADO AQUI: chegava na assinatura, era passado na
     chamada e o corpo nunca o referenciava, então a dor que ela extraiu
     com as palavras da pessoa nunca chegava a quem ia ligar. */
  const diagnostico = [
    args.dor ? `*Problema:* ${args.dor}` : '',
    args.objetivo ? `*O que quer resolver:* ${args.objetivo}` : '',
  ].filter(Boolean);
  if (diagnostico.length) linhas.push('', '*Diagnóstico da conversa:*', ...diagnostico);

  if (args.ultimasFalas.length) {
    linhas.push('', '*Da conversa:*', ...args.ultimasFalas.map((f) => `- ${f}`));
  }
  return linhas.join('\n');
}

export function FormularioLead({
  lead,
  pagina,
  historico,
  onEnviado,
}: {
  lead: LeadSugerido;
  pagina: string;
  historico: ChatMsg[];
  onEnviado: (nome: string) => void;
}) {
  const produto = lead.produto ? PRODUTOS_PUBLICOS[lead.produto] : undefined;
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [objetivo, setObjetivo] = useState(lead.objetivo ?? '');
  const [aceite, setAceite] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [tocou, setTocou] = useState(false);

  const nomeOk = nome.trim().length >= 2 && /\p{L}/u.test(nome);
  const foneOk = telefoneValido(whatsapp);
  const valido = nomeOk && foneOk && aceite;

  const submeter = (e: FormEvent) => {
    e.preventDefault();
    setTocou(true);
    if (!valido || enviando) return;
    setEnviando(true);

    /* Falas curtas ficam de fora: numa qualificação com perguntas
       fechadas as três últimas viram "uns 20", "sim", "isso" — ruído puro
       para quem vai ler o lead. O filtro também encurta a URL do wa.me. */
    const ultimasFalas = historico
      .filter((m) => m.role === 'user' && m.content.trim().length >= 15)
      .slice(-3)
      .map((m) => (m.content.length > 120 ? m.content.slice(0, 117) + '…' : m.content));

    const url = whatsappUrl(
      montarMensagem({
        nome: nome.trim(),
        whatsapp: whatsapp.trim(),
        email: email.trim(),
        objetivo: objetivo.trim(),
        produtoNome: produto?.nome,
        pagina,
        dor: lead.dor,
        ultimasFalas,
      }),
    );

    /* ⚠️ A aba é aberta AGORA, ainda dentro do gesto do usuário e ANTES de
       qualquer await. Depois da resposta do fetch o navegador já não
       enxerga o clique e bloqueia o popup — é clássico no Safari/iOS, e é
       exatamente o que os 8 questionários do repo já fazem. */
    const aba = window.open('', '_blank');
    trackWhatsapp(lead.produto);

    void (async () => {
      try {
        const tracking = fireLead(lead.produto ?? null, pagina);
        await fetch('/api/assistente/lead/', {
          // Barra final obrigatória: `trailingSlash: true` no next.config.
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          // `keepalive` para o POST sobreviver à troca de aba.
          keepalive: true,
          body: JSON.stringify({
            contato: { nome: nome.trim(), whatsapp: whatsapp.trim(), email: email.trim() || undefined },
            qualificacao: {
              ...(lead.dor ? { dor: lead.dor } : {}),
              ...(objetivo.trim() ? { objetivo: objetivo.trim() } : {}),
            },
            produto: lead.produto,
            pagina,
            transcricao: historico,
            tracking,
          }),
        });
      } catch (err) {
        /* De propósito NÃO trava o envio: a mensagem do WhatsApp já leva
           nome, contato e contexto. Travar aqui perderia o lead inteiro
           por causa de um webhook fora do ar. */
        console.error('[assistente] lead não registrado; seguindo para o WhatsApp', err);
      } finally {
        /* A navegação vai em try/catch próprio: se a aba já tiver sido
           fechada pela pessoa, ou o acesso a `location` falhar, o erro
           NÃO pode impedir o `onEnviado` — sem ele o formulário fica na
           tela como se nada tivesse acontecido, e a pessoa preenche de
           novo um lead que já foi registrado. */
        try {
          if (aba) aba.location.href = url;
          else window.location.href = url; // popup bloqueado: usa a aba atual
        } catch (err) {
          console.error('[assistente] não consegui abrir o WhatsApp', err);
          window.location.href = url;
        }
        onEnviado(nome.trim());
      }
    })();
  };

  return (
    <form className="fia-form" onSubmit={submeter} noValidate>
      <label className="fia-campo">
        <span>Seu nome *</span>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          autoComplete="name"
          required
          aria-invalid={tocou && !nomeOk}
        />
      </label>

      <label className="fia-campo">
        <span>Seu WhatsApp *</span>
        <input
          value={whatsapp}
          onChange={(e) => setWhatsapp(mascarar(e.target.value))}
          inputMode="tel"
          autoComplete="tel"
          placeholder="(00) 00000-0000"
          required
          aria-invalid={tocou && !foneOk}
        />
      </label>

      <label className="fia-campo">
        <span>E-mail (opcional)</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          inputMode="email"
          autoComplete="email"
        />
      </label>

      <label className="fia-campo">
        <span>O que você quer resolver</span>
        <textarea value={objetivo} onChange={(e) => setObjetivo(e.target.value)} rows={2} />
      </label>

      <label className="fia-aceite">
        <input type="checkbox" checked={aceite} onChange={(e) => setAceite(e.target.checked)} />
        <span>
          Autorizo a Felice Academy a me contatar pelo WhatsApp
          {produto ? ` sobre ${produto.nome}` : ''}. Li a{' '}
          <a href="/privacidade/" target="_blank" rel="noopener noreferrer">
            Política de Privacidade
          </a>
          .
        </span>
      </label>

      {tocou && !valido && (
        <p className="fia-form-erro">
          {!nomeOk
            ? 'Escreva seu nome.'
            : !foneOk
              ? 'Confira o WhatsApp: faltam dígitos.'
              : 'Marque a autorização para continuar.'}
        </p>
      )}

      <button type="submit" className="fia-btn fia-btn--primario" disabled={enviando}>
        {enviando ? 'Abrindo o WhatsApp…' : 'Falar com a equipe no WhatsApp'}
      </button>
    </form>
  );
}
