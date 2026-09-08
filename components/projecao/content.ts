/* ============================================================
   Toda a cópia da /projecao-trafego em consts, como manda a convenção do
   repo: seção nenhuma escreve texto inline. Mexer na narrativa é mexer
   aqui, sem abrir JSX.
   ============================================================ */

export const HERO = {
  eyebrow: 'Documento interno · 08/09/2026',
  h1: 'Quanto custa colocar os três produtos no ar',
  lead:
    'Projeção de investimento em tráfego pago para o Kit Gestão F4, a Maestria Zigomática e a Mentoria de Gestão F4 — partindo da regra que define o piso da verba: 50 conversões por semana, por conjunto de anúncios.',
};

export const BENCHMARK = {
  eyebrow: 'Ponto de partida',
  h2: 'O benchmark da Greenn',
  lead:
    'A equipe da Greenn passou as taxas médias de conversão por faixa de ticket. Elas são a régua desta projeção — e o guardrail do simulador: se as premissas produzirem uma taxa fora da banda do produto, a página avisa.',
  nota:
    'É uma taxa ponta-a-ponta (quem vê a página × quem compra). O simulador modela o funil etapa por etapa e confronta o resultado com a banda — assim a projeção não produz números bonitos e impossíveis.',
};

export const APRENDIZAGEM = {
  eyebrow: 'A regra que manda na verba',
  h2: 'Não é o apetite de investimento que define o piso. É o Meta.',
  paragrafos: [
    'Um conjunto de anúncios precisa de 50 conversões numa janela móvel de 7 dias para sair da fase de aprendizagem. Abaixo disso a entrega fica instável, o custo oscila e o algoritmo nunca encontra o público certo.',
    'A janela é MÓVEL: ou a campanha faz as 50 dentro da semana, ou ela não sai da aprendizagem nunca — não é questão de esperar mais tempo, é questão de verba.',
    'E a regra vale por CONJUNTO, não por campanha. Fragmentar a mesma verba em cinco conjuntos multiplica o piso por cinco e costuma deixar os cinco travados em "aprendizagem limitada". Consolidar é a economia mais barata que existe no Meta.',
  ],
  destaque:
    'O evento otimizado muda tudo. No Kit F4 o Meta otimiza pela COMPRA — cada uma das 50 custa o preço de uma venda. Na Maestria e na Mentoria ele otimiza pela CONVERSA INICIADA, um evento muito mais alto no funil e muito mais barato. As mesmas 50 conversões custam ordens de grandeza diferentes.',
};

export const SIMULADOR = {
  eyebrow: 'Simulador',
  h2: 'Mexa nas premissas e veja o que muda',
  lead:
    'Os três cenários abaixo são pontos de partida. Todo campo é editável: mude o CPM, o CTR, o custo por conversa ou a taxa de fechamento e a projeção inteira recalcula na hora.',
};

export const DESCOBERTA = {
  eyebrow: 'O que a projeção mostra',
  h2: 'O Kit F4 consome 58% da verba e é o único com ROAS abaixo de 1',
  paragrafos: [
    'No cenário realista, manter as três campanhas fora da fase de aprendizagem ao mesmo tempo custa cerca de R$ 41 mil por mês. Quase R$ 24 mil disso vão para o produto de R$ 97 — que devolve R$ 21 mil.',
    'A causa é estrutural, não é criativo ruim. Manter 50 compras por semana num produto de R$ 97 custa mais do que o produto devolve, porque o evento que o Meta persegue é a própria venda. Nenhum ajuste de segmentação conserta isso: é aritmética da regra das 50.',
    'A leitura correta não é "o Kit F4 não funciona". É que ele não é centro de lucro — é porta de entrada. Só se paga se houver order bump, upsell e, principalmente, passagem para o backend. Enquanto não existir o número de quantos alunos do Kit compram a Mentoria, mantê-lo no ar é aposta, não decisão.',
  ],
};

export const FASES = {
  eyebrow: 'Recomendação',
  h2: 'Começar pelos dois que se pagam',
  fases: [
    {
      n: 'Fase 1',
      quando: 'Meses 1 e 2',
      titulo: 'Maestria + Mentoria',
      verba: 'R$ 17.400/mês',
      resultado: 'R$ 96.900/mês de receita projetada · ROAS 5,6',
      texto:
        'Os dois produtos de WhatsApp carregam o faturamento com 42% da verba total. Entram primeiro porque geram caixa desde o primeiro mês e porque o evento otimizado é barato — as 50 conversões semanais saem por uma fração do que custam no Kit.',
    },
    {
      n: 'Fase 2',
      quando: 'A partir do mês 3',
      titulo: 'Entra o Kit Gestão F4',
      verba: '+ R$ 23.600/mês',
      resultado: '217 compras/mês · ROAS de front-end 0,89',
      texto:
        'Entra depois, com caixa no bolso e com order bump e upsell já ligados. E entra medido por LTV e por taxa de passagem para o backend — nunca pelo ROAS do gerenciador, que por definição vai parecer ruim.',
    },
  ],
  ressalva:
    'A Fase 2 depende de um número que ainda não existe: quanto do faturamento da Mentoria vem de quem entrou pelo Kit. Medir isso é pré-requisito para escalar o low ticket.',
};

export const METRICAS = {
  eyebrow: 'Além da projeção',
  h2: 'O que acompanhar depois que a verba entrar',
  lead:
    'A projeção responde "quanto investir". Estas métricas respondem "está funcionando?" — e cada bloco tem o gatilho que pede ação.',
  blocos: [
    {
      titulo: 'Criativo',
      subtitulo: 'Diagnostica o anúncio antes de culpar a segmentação',
      itens: [
        { m: 'Hook rate', d: 'views de 3s ÷ impressões', meta: '≥ 25%' },
        { m: 'Hold rate', d: 'ThruPlay ÷ impressões', meta: '≥ 10%' },
        { m: 'CTR outbound', d: 'cliques que saem do Meta', meta: '≥ 1,2%' },
        { m: 'Frequência', d: 'exibições por pessoa em 7 dias', meta: 'alerta acima de 2,5' },
        { m: 'Tendência de CPM', d: 'custo de mil impressões, semana a semana', meta: 'alerta em +20%' },
      ],
    },
    {
      titulo: 'Página',
      subtitulo: 'Onde o clique vira intenção',
      itens: [
        { m: 'Conversão da LP', d: 'visitantes que avançam', meta: 'a banda da Greenn do ticket' },
        { m: 'Cliques no WhatsApp', d: 'saída da landing para a conversa', meta: '≥ 12% dos cliques' },
        { m: 'Taxa de resposta', d: 'quem responde a primeira mensagem', meta: '≥ 60%' },
      ],
    },
    {
      titulo: 'Atendimento',
      subtitulo: 'O gargalo real dos dois produtos de WhatsApp',
      itens: [
        { m: 'Tempo de 1ª resposta', d: 'do clique à primeira mensagem humana', meta: '< 5 minutos' },
        { m: 'Taxa de qualificação', d: 'conversas que viram lead real', meta: '≥ 30%' },
        { m: 'No-show em call', d: 'agendados que não aparecem', meta: '< 30%' },
        { m: 'Taxa de fechamento', d: 'calls que viram venda', meta: '≥ 20% no alto ticket' },
      ],
    },
    {
      titulo: 'Negócio',
      subtitulo: 'O que decide se continua investindo',
      itens: [
        { m: 'CAC', d: 'custo de adquirir um cliente', meta: 'por produto, não médio' },
        { m: 'LTV : CAC', d: 'quanto o cliente devolve sobre o que custou', meta: '≥ 3' },
        { m: 'Payback de CAC', d: 'meses até recuperar a aquisição', meta: '< 3 meses' },
        { m: 'MER / ROAS blended', d: 'faturamento total ÷ verba total', meta: 'a métrica que manda' },
        { m: 'ROAS de breakeven', d: 'o mínimo para não perder dinheiro', meta: 'calculado por margem' },
      ],
    },
  ],
  mer:
    'O MER não é opcional aqui. Venda por WhatsApp não é rastreável ponta a ponta: parte fecha por indicação, parte volta semanas depois, parte o pixel perde. Julgar campanha de alto ticket pelo ROAS que aparece no gerenciador subestima sistematicamente o resultado — e leva a desligar campanha que estava dando lucro.',
};

export const ANALISES = {
  eyebrow: 'Análises complementares',
  h2: 'Quatro leituras que a tabela sozinha não dá',
  itens: [
    {
      t: 'Sensibilidade',
      d: 'Qual variável move mais o resultado. Neste modelo é a taxa de fechamento, não o CPA: melhorar o fechamento de 22% para 30% na Mentoria vale mais do que qualquer economia de mídia realista.',
    },
    {
      t: 'Curva de saturação',
      d: 'O CPA sobe cerca de 12% a cada vez que a verba dobra — o público qualificado é finito e o leilão cobra mais caro pelos próximos. O simulador já aplica isso; sem ele a projeção viraria régua linear.',
    },
    {
      t: 'Fluxo de caixa com defasagem',
      d: 'A Mentoria fecha em torno de 21 dias depois do clique. A verba do mês 1 vira receita do mês 2 — e isso é necessidade de capital de giro, não detalhe contábil.',
    },
    {
      t: 'Regra 70/20/10',
      d: '70% da verba no que já funciona, 20% em otimização, 10% em teste de criativo novo. Sem a fatia de teste, a campanha morre por fadiga em dois meses.',
    },
  ],
};

export const PREMISSAS_AVISO = {
  eyebrow: 'Leia antes de decidir',
  h2: 'O que aqui é medido e o que é premissa',
  medido: [
    'Preços dos três produtos (conferidos no código do site)',
    'Taxas de conversão por faixa de ticket (benchmark da Greenn)',
    'A regra das 50 conversões em 7 dias (documentação do Meta)',
  ],
  premissa: [
    'CPM e CTR — estimativas de mercado para odontologia no Meta',
    'Custo por conversa iniciada',
    'Todas as taxas do funil de atendimento (qualificação, agendamento, comparecimento, fechamento)',
    'A curva de saturação de 12% por dobra de verba',
  ],
  compromisso:
    'A Felice nunca rodou tráfego nesses funis — não há histórico. Toda a projeção é benchmark externo mais premissa de mercado. Depois de 30 dias no ar, os números reais do gerenciador entram no lugar das premissas e esta página é reprojetada. Até lá, trate as faixas como ordem de grandeza, não como previsão.',
};
