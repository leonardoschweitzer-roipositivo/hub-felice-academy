/* ============================================================
   Toda a cópia da /projecao-trafego em consts, como manda a convenção do
   repo: seção nenhuma escreve texto inline. Mexer na narrativa é mexer
   aqui, sem abrir JSX.
   ============================================================ */

export const HERO = {
  eyebrow: 'Documento interno · 08/09/2026',
  h1: 'Quanto custa colocar os produtos no ar',
  lead:
    'Projeção de investimento em tráfego pago para os oito produtos da Felice Academy — do Kit de R$ 97 à Mentoria de R$ 15.000. Dá para simular um produto, uma trilha ou o catálogo inteiro, partindo da regra que define o piso da verba: 50 conversões por semana, por conjunto de anúncios.',
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
    'Escolha os produtos, o cenário e mexa no que quiser. Todo campo é editável — inclusive o preço e o objetivo de campanha de cada produto: a projeção inteira recalcula na hora, escada incluída.',
  notaPreco:
    'Mexer no preço tem consequência dupla e o simulador mostra as duas: muda a receita, e muda a faixa de conversão que a Greenn espera daquele ticket. Subir o preço sem baixar a taxa de conversão faz o aviso da banda acender — é o sinal de que a premissa virou otimista demais.',
};

export const DESCOBERTA = {
  eyebrow: 'O que a projeção mostra',
  h2: 'Lançar tudo é possível — e é a pior forma de gastar a mesma verba',
  paragrafos: [
    'Manter os oito produtos fora da fase de aprendizagem ao mesmo tempo é o cenário mais caro do catálogo, e o de pior retorno por real investido. Cada campanha nova carrega o próprio pedágio de 50 conversões semanais, e esse pedágio não escala com o tamanho do produto: o Kit de R$ 97 e a Mentoria de R$ 15.000 pagam o mesmo tipo de entrada.',
    'Os dois produtos de porta de entrada são o centro do problema. Juntos consomem quase metade da verba total e são os únicos com ROAS de front-end abaixo de 1 — não por criativo ruim, mas por aritmética: manter 50 compras por semana num produto de R$ 97 custa mais do que ele devolve, porque o evento que o Meta persegue é a própria venda.',
    'A escada não salva os dois automaticamente, e aqui está o achado menos óbvio da projeção: quanto MAIS produtos no catálogo, MENOS vale cada comprador de entrada. A fração da base que sobe de degrau é propriedade da base e da equipe comercial, não do número de ofertas — então acrescentar produtos não promove mais gente, apenas espalha a mesma coorte por destinos mais baratos. Com o catálogo inteiro no ar, o comprador do Kit tende a parar num produto de R$ 597 ou na Consultoria de R$ 6.000 em vez de chegar à Mentoria de R$ 15.000.',
    'A conclusão prática não é "não lance". É que a ordem importa mais que a quantidade: concentrar verba em poucos produtos rende mais por real do que espalhá-la por todos, e a diferença não é pequena.',
  ],
};

export const FASES = {
  eyebrow: 'Recomendação',
  h2: 'Concentrar primeiro, abrir o catálogo depois',
  fases: [
    {
      n: 'Fase 1',
      quando: 'Meses 1 e 2',
      titulo: 'Maestria + Mentoria de Gestão',
      texto:
        'Os dois produtos que se pagam sozinhos, e o melhor retorno por real de todos os recortes. Entram primeiro porque geram caixa desde o primeiro mês e porque o evento otimizado é barato — as 50 conversões semanais saem por uma fração do que custam num produto de entrada.',
    },
    {
      n: 'Fase 2',
      quando: 'A partir do mês 3',
      titulo: 'Uma trilha inteira, não o catálogo inteiro',
      texto:
        'Com caixa no bolso, abrir a trilha de Gestão completa rende mais do que ligar os oito: mesmo público, mesma equipe, escada mais curta e mais cara no topo. A trilha de Zigomático fala com um público bem mais estreito — CPM maior — e tem o teto da escada em R$ 6.000 contra os R$ 15.000 da Gestão.',
    },
    {
      n: 'Fase 3',
      quando: 'Quando a régua de contato existir',
      titulo: 'Os produtos de entrada',
      texto:
        'Kit F4 e Zigomático Descomplicado entram por último e medidos por LTV:CAC, nunca pelo ROAS do gerenciador. E só entram depois de existir processo de contato ativo na base: sem alguém ligando, eles não são porta de entrada, são só prejuízo com volume.',
    },
  ],
  ressalva:
    'A ordem não é conservadorismo: é que verba concentrada em poucos produtos rende bem mais por real do que espalhada por todos, e um produto de entrada sem régua de contato não tem como se pagar.',
};

export const ESCADA_TXT = {
  eyebrow: 'A escada de produtos',
  h2: 'Quem compra barato é quem compra caro depois',
  lead:
    'Os produtos não são campanhas independentes: são degraus, em duas trilhas paralelas. Quem compra entra numa base que a equipe contacta, e parte dela sobe. Ignorar isso subestima o resultado — e leva a desligar justamente o produto que alimenta os outros.',
  degraus: [
    { de: 'Entrada', para: 'Meio', nota: 'Kit F4 → CRC/Recepção · Descomplicado → Maestria' },
    { de: 'Entrada', para: 'Alto', nota: 'salto direto de quem não passou pelo meio' },
    { de: 'Meio', para: 'Alto', nota: 'inclui quem chegou ao meio vindo da entrada' },
  ],
  nota:
    'Três regras na conta. Ninguém é contado duas vezes: quem sobe da entrada para o meio sai do bolo que pode saltar direto ao alto e reentra pela porta do meio. Cruzar trilha custa: quem é de Gestão tem menos chance de subir para um produto de Zigomático — menos, não zero, é o mesmo dentista na mesma base. E a receita da escada não cai no mesmo mês: leva cerca de 60 dias entre a compra e o fechamento do degrau de cima.',
  aviso:
    'Um produto sem campanha continua recebendo escada — e isso não é bug: a equipe vende para a base mesmo sem anúncio no ar. É por isso que a Consultoria fatura aqui mesmo desligada. Estas taxas são as premissas mais incertas da página e as que mais mexem no resultado: são o primeiro número a substituir por dado real.',
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
    'Preços dos oito produtos (conferidos no código do site)',
    'Taxas de conversão por faixa de ticket (benchmark da Greenn)',
    'A regra das 50 conversões em 7 dias (documentação do Meta)',
  ],
  premissa: [
    'CPM e CTR — estimativas de mercado para odontologia no Meta',
    'Custo por conversa iniciada',
    'Todas as taxas do funil de atendimento (qualificação, agendamento, comparecimento, fechamento)',
    'A curva de saturação de 12% por dobra de verba',
    'As taxas da escada e o fator de cruzar trilha — as mais incertas de todas',
    'Os pesos que decidem para qual produto do tier de cima cada pessoa sobe',
    'O agrupamento em duas trilhas temáticas e em três patamares de ticket',
  ],
  compromisso:
    'A Felice nunca rodou tráfego nesses funis — não há histórico. Toda a projeção é benchmark externo mais premissa de mercado. Depois de 30 dias no ar, os números reais do gerenciador entram no lugar das premissas e esta página é reprojetada. Até lá, trate as faixas como ordem de grandeza, não como previsão.',
};
