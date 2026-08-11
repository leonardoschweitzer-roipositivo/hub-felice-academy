import type { BoasVindasContent, ConfirmacaoContent } from '@/components/felice/candidatura/types';
import { LANDING_URL, WHATSAPP_URL } from './config';

/* Copy das duas páginas de processo da Mentoria de Gestão F4:
   a confirmação da candidatura e as boas-vindas de quem entrou na turma.
   Os passos espelham o ENTRADA de ../content.ts. */

export const CONFIRMACAO: ConfirmacaoContent = {
  produto: 'Mentoria de Gestão F4',
  badge: 'Recebemos a sua candidatura',
  lead: 'Abrimos o WhatsApp em outra aba com a sua candidatura pronta — é só apertar enviar e a equipe já recebe tudo para marcar a conversa de diagnóstico.',
  whatsappUrl: WHATSAPP_URL,
  landingUrl: LANDING_URL,
  landingLabel: 'Rever a página da Mentoria de Gestão',
  passos: [
    {
      n: '1',
      t: 'Você aperta enviar',
      d: 'A mensagem já está escrita, com as suas respostas por extenso. Sem esse envio, a candidatura não chega até nós.',
    },
    {
      n: '2',
      t: 'A equipe analisa e chama você',
      d: 'Lemos o seu cenário e respondemos pelo mesmo WhatsApp para combinar o melhor dia e horário da conversa.',
    },
    {
      n: '3',
      t: 'Conversa de diagnóstico',
      d: 'Entendemos o seu momento e se a mentoria é o encaixe certo agora. As turmas são pequenas, então nem todo mundo entra na próxima.',
    },
  ],
  preparar: [
    'O faturamento médio dos últimos 3 meses',
    'Quem faz o quê na sua equipe hoje',
    'Qual dos 4 pilares você acha mais frágil',
    'O que você quer que mude nos próximos 6 meses',
  ],
};

export const BOAS_VINDAS: BoasVindasContent = {
  produto: 'Mentoria de Gestão F4',
  badge: 'Tudo certo — você está na turma',
  titlePre: 'Bem-vindo à',
  titleGold: 'Mentoria de Gestão F4.',
  lead: 'A partir de agora você não gerencia mais no improviso: plataforma de aulas, encontros ao vivo e o treinamento da sua equipe inteira, guiados pelos 4 pilares — Atendimento, Comercial, Marketing e Gestão.',
  whatsappUrl: WHATSAPP_URL,
  passos: [
    {
      n: '1',
      t: 'Seu acesso é liberado',
      d: 'A equipe envia o acesso à plataforma e o calendário dos encontros. Já dá para começar pelas aulas do pilar que mais aperta hoje.',
    },
    {
      n: '2',
      t: 'Traga a sua equipe',
      d: 'O treinamento é para a clínica, não só para você. Combine com a equipe quem participa de cada trilha — é o que faz o método pegar.',
    },
    {
      n: '3',
      t: 'Encontros e acompanhamento',
      d: 'Os encontros ao vivo entram na sua agenda, e o canal de dúvidas fica aberto entre eles para destravar o que aparecer.',
    },
  ],
  inclui: [
    'Plataforma de aulas completa nos 4 pilares',
    'Encontros ao vivo individuais e em grupo',
    'Treinamento da sua equipe inteira',
    'Gravações de todos os encontros',
    'Canal de dúvidas com a equipe',
    'Networking com outros donos de clínica',
  ],
  nota: 'Salve este contato: é por ele que a equipe manda o calendário, avisa dos encontros e responde as dúvidas do dia a dia.',
};
