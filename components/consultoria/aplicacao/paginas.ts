import type { BoasVindasContent, ConfirmacaoContent } from '@/components/felice/candidatura/types';
import { LANDING_URL, WHATSAPP_URL } from './config';

/* Copy das duas páginas de processo da Consultoria Gestão F4:
   a confirmação da candidatura e as boas-vindas de quem fechou.
   Os passos espelham o ENTRADA e o METODO de ../content.ts — se o
   processo mudar lá, mude aqui também. */

export const CONFIRMACAO: ConfirmacaoContent = {
  produto: 'Consultoria Gestão F4',
  badge: 'Recebemos a sua candidatura',
  lead: 'Abrimos o WhatsApp em outra aba com a sua candidatura pronta — é só apertar enviar e a equipe já recebe tudo para marcar a conversa de diagnóstico.',
  whatsappUrl: WHATSAPP_URL,
  landingUrl: LANDING_URL,
  landingLabel: 'Rever a página da Consultoria',
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
      d: 'Uma conversa para entender se a consultoria é o encaixe certo agora. É nela que o formato e o investimento são apresentados.',
    },
  ],
  preparar: [
    'O faturamento médio dos últimos 3 meses',
    'Quantos orçamentos são apresentados e quantos fecham',
    'Quem faz o quê na sua equipe hoje',
    'O gargalo que mais te incomoda na clínica',
  ],
};

export const BOAS_VINDAS: BoasVindasContent = {
  produto: 'Consultoria Gestão F4',
  badge: 'Tudo certo — você está dentro',
  titlePre: 'Bem-vindo à',
  titleGold: 'Consultoria Gestão F4.',
  lead: 'A partir de agora a sua clínica passa a ser olhada de fora, com método: quatro semanas de auditoria nos pilares de gestão, atendimento, comercial e marketing — e um plano para os 12 meses seguintes.',
  whatsappUrl: WHATSAPP_URL,
  passos: [
    {
      n: '1',
      t: 'Agendamos o kickoff',
      d: 'A equipe entra em contato para marcar o primeiro encontro e alinhar quem da sua clínica participa de cada etapa.',
    },
    {
      n: '2',
      t: 'As 4 semanas de auditoria',
      d: 'Os quatro setups acontecem em sequência, com análise dos seus números entre os encontros — não é uma reunião solta, é um ciclo.',
    },
    {
      n: '3',
      t: 'As entregas',
      d: 'O pacote de implementações resolve o curto prazo; o planejamento estratégico de 12 meses define o crescimento daqui para frente.',
    },
  ],
  inclui: [
    'Auditoria dos 4 pilares em 4 semanas',
    'Pacote de implementações Gestão F4',
    'Planejamento estratégico de 12 meses',
    'Acompanhamento direto do Dr. Sócrates',
    'Análise dos seus números entre os encontros',
    'Canal aberto com a equipe durante todo o ciclo',
  ],
  nota: 'A equipe acompanha você durante todo o ciclo. Salve este contato: é por ele que combinamos cada encontro e tiramos as dúvidas no meio do caminho.',
};
