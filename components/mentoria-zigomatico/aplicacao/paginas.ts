import type { BoasVindasContent, ConfirmacaoContent } from '@/components/felice/candidatura/types';
import { LANDING_URL, WHATSAPP_URL } from './config';

/* Copy das duas páginas de processo da Mentoria de Zigomático:
   a confirmação da candidatura e as boas-vindas de quem entrou na turma.
   Os passos espelham o ENTRADA de ../content.ts. */

export const CONFIRMACAO: ConfirmacaoContent = {
  produto: 'Mentoria de Zigomático',
  badge: 'Recebemos a sua candidatura',
  lead: 'Abrimos o WhatsApp em outra aba com a sua candidatura pronta — é só apertar enviar e a equipe já recebe tudo para marcar a conversa de diagnóstico.',
  whatsappUrl: WHATSAPP_URL,
  landingUrl: LANDING_URL,
  landingLabel: 'Rever a página da Mentoria de Zigomático',
  passos: [
    {
      n: '1',
      t: 'Você aperta enviar',
      d: 'A mensagem já está escrita, com as suas respostas por extenso. Sem esse envio, a candidatura não chega até nós.',
    },
    {
      n: '2',
      t: 'A equipe analisa e chama você',
      d: 'Lemos o seu momento cirúrgico e respondemos pelo mesmo WhatsApp para combinar o melhor dia e horário da conversa.',
    },
    {
      n: '3',
      t: 'Conversa de diagnóstico',
      d: 'Entendemos o que você já opera e se a mentoria é o encaixe certo agora. A prática presencial exige turmas pequenas, então as vagas são poucas.',
    },
  ],
  preparar: [
    'Quantos casos de maxila atrófica chegam à sua clínica',
    'O que você faz com esses casos hoje',
    'A estrutura que tem para operar',
    'As datas em que consegue viajar para os presenciais',
  ],
};

export const BOAS_VINDAS: BoasVindasContent = {
  produto: 'Mentoria de Zigomático',
  badge: 'Tudo certo — você está na turma',
  titlePre: 'Bem-vindo à',
  titleGold: 'Mentoria de Zigomático.',
  lead: 'A partir de agora você sai do vídeo solto: a base teórica fica na plataforma, e a prática acontece onde ela vira segurança — hands-on em laboratório e cirurgia ao lado do Dr. Sócrates.',
  whatsappUrl: WHATSAPP_URL,
  passos: [
    {
      n: '1',
      t: 'Seu acesso é liberado',
      d: 'A equipe envia o acesso à plataforma e o calendário dos encontros presenciais. Comece pela base teórica — é o que faz o hands-on render.',
    },
    {
      n: '2',
      t: 'Reserve as datas dos presenciais',
      d: 'Laboratório e acompanhamento cirúrgico têm data marcada e turma pequena. Bloqueie a agenda assim que receber o calendário.',
    },
    {
      n: '3',
      t: 'Traga os seus casos',
      d: 'O acompanhamento individual é sobre os SEUS pacientes: separe os casos que quer planejar e discutir com o mentor.',
    },
  ],
  inclui: [
    'Hands-on presencial em laboratório',
    'Acompanhamento cirúrgico operando junto',
    'Curso de zigomático completo na plataforma',
    'Encontros ao vivo e discussão de casos',
    'Acompanhamento individual dos seus casos',
    'Networking com outros cirurgiões da turma',
  ],
  nota: 'Salve este contato: é por ele que a equipe manda o calendário dos presenciais, confirma as datas e responde as dúvidas entre os encontros.',
};
