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
    'Os três cenários abaixo são pontos de partida. Todo campo é editável — inclusive o preço de cada produto: mude o ticket, o CPM, o CTR, o custo por conversa ou a taxa de fechamento e a projeção inteira recalcula na hora, escada incluída.',
  notaPreco:
    'Mexer no preço tem consequência dupla e o simulador mostra as duas: muda a receita, e muda a faixa de conversão que a Greenn espera daquele ticket. Subir o preço sem baixar a taxa de conversão faz o aviso da banda acender — é o sinal de que a premissa virou otimista demais.',
};

export const DESCOBERTA = {
  eyebrow: 'O que a projeção mostra',
  h2: 'O Kit F4 só faz sentido por causa da escada — e aí faz muito',
  paragrafos: [
    'Olhando só a venda direta, o Kit F4 é o pior negócio do trio: consome 58% da verba e devolve ROAS 0,89. Manter 50 compras por semana num produto de R$ 97 custa mais do que ele devolve, porque o evento que o Meta persegue é a própria venda. Nenhum ajuste de segmentação conserta isso — é aritmética da regra das 50.',
    'Só que o Kit não vende R$ 97. Ele entrega uma base de compradores que a equipe do Dr. Sócrates contacta — e uma fração dela sobe para a Maestria e para a Mentoria. Contando a escada, cada comprador do Kit vale cerca de R$ 349, contra um CAC de R$ 109: LTV:CAC de 3,2, dentro da meta.',
    'A escada também muda de onde vem o faturamento da Mentoria. Das vendas projetadas por mês, cerca de metade não vem do anúncio da Mentoria: vem de quem entrou pelo Kit ou pela Maestria. A campanha de alto ticket não está sozinha — ela colhe o que os dois produtos de baixo plantaram.',
    'A ressalva é grande e precisa ser dita: no cenário conservador, sem régua de contato ativa, o LTV do comprador do Kit cai para R$ 173 e o LTV:CAC vai a 0,58. O Kit F4 não é uma aposta no anúncio — é uma aposta na equipe comercial ligando para a base. Sem esse processo funcionando, ele perde dinheiro nos dois cenários.',
  ],
};

export const FASES = {
  eyebrow: 'Recomendação',
  h2: 'Começar pelos dois que se pagam sozinhos',
  fases: [
    {
      n: 'Fase 1',
      quando: 'Meses 1 e 2',
      titulo: 'Maestria + Mentoria',
      verba: 'R$ 17.400/mês',
      resultado: 'R$ 123.000/mês de receita projetada · ROAS 7,1',
      texto:
        'Os dois produtos de WhatsApp carregam o faturamento com uma fração da verba, e já entre eles existe escada: parte de quem compra a Maestria sobe para a Mentoria. Entram primeiro porque geram caixa desde o primeiro mês e porque o evento otimizado é barato — as 50 conversões semanais saem por muito menos do que custam no Kit.',
    },
    {
      n: 'Fase 2',
      quando: 'A partir do mês 3',
      titulo: 'Entra o Kit Gestão F4',
      verba: '+ R$ 23.600/mês',
      resultado: '+ R$ 75.900/mês de receita · ROAS marginal 3,2',
      texto:
        'Entra quando a régua de contato da base já existir — e não antes. O que ele acrescenta não é o faturamento de R$ 97: é quase o dobro de vendas da Mentoria, alimentadas pela base que ele forma. Medido por LTV:CAC e por taxa de passagem para o backend, nunca pelo ROAS do gerenciador.',
    },
  ],
  ressalva:
    'A ordem é essa por um motivo: sem processo de contato ativo na base do Kit, o LTV:CAC dele cai para 0,58 e ele vira prejuízo puro. O que decide a Fase 2 não é a verba disponível — é a equipe comercial estar ligando.',
};

export const ESCADA_TXT = {
  eyebrow: 'A escada de produtos',
  h2: 'Quem compra barato é quem compra caro depois',
  lead:
    'Os três produtos não são campanhas independentes: são degraus. Quem compra o Kit entra numa base que a equipe contacta, e parte dela sobe. Ignorar isso subestima o resultado — e leva a desligar justamente o produto que alimenta os outros.',
  degraus: [
    { de: 'Kit F4', para: 'Maestria', nota: 'base contactada pela equipe, já compradora' },
    { de: 'Kit F4', para: 'Mentoria', nota: 'salto direto de quem não passou pela Maestria' },
    { de: 'Maestria', para: 'Mentoria', nota: 'inclui quem chegou à Maestria vindo do Kit' },
  ],
  nota:
    'A conta não conta a mesma pessoa duas vezes: quem sobe do Kit para a Maestria sai do bolo que pode ir direto à Mentoria e reentra pela porta da Maestria. E a receita da escada não cai no mesmo mês — leva cerca de 60 dias entre a compra do Kit e o fechamento do degrau de cima, o que aparece no fluxo de caixa.',
  aviso:
    'Estas três taxas são as premissas mais incertas da página e as que mais mexem no resultado: no cenário realista respondem por 41% de toda a receita projetada. São o primeiro número a substituir por dado real assim que a base tiver histórico.',
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
    'As três taxas da escada de produtos — as mais incertas de todas',
  ],
  compromisso:
    'A Felice nunca rodou tráfego nesses funis — não há histórico. Toda a projeção é benchmark externo mais premissa de mercado. Depois de 30 dias no ar, os números reais do gerenciador entram no lugar das premissas e esta página é reprojetada. Até lá, trate as faixas como ordem de grandeza, não como previsão.',
};
