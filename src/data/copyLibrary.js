// Personalized copy lookup tables, indexed by option selection (0=A, 1=B, 2=C, 3=D)

// Q1 (answers[0]) — family context phrase shown after profile description
export const familyContext = [
  'Você pode estar tentando permanecer forte por sua família enquanto guarda preocupações que quase ninguém percebe.',
  'Mesmo dividindo a vida com alguém, algumas dúvidas e decisões podem estar acontecendo de forma silenciosa dentro de você.',
  'Você pode estar carregando decisões, responsabilidades e o cuidado de outras pessoas enquanto quase não encontra espaço para cuidar de si.',
  'Você pode estar tentando construir seu futuro enquanto enfrenta dúvidas sobre direção, propósito e segurança.',
]

// Q4 (answers[3]) — Card: CRENÇA CENTRAL · CICLO PERCEBIDO
export const centralBelief = [
  {
    title: 'A estratégia certa deveria resolver',
    body: 'Você tenta mudar o plano, mas sente que o resultado continua igual. Isso pode fazer você acreditar que ainda não encontrou a solução certa.',
  },
  {
    title: 'Não consigo confiar que a mudança vai permanecer',
    body: 'Quando a esperança aparece, uma parte de você já espera que as dúvidas retornem e ocupem tudo novamente.',
  },
  {
    title: 'Talvez exista algo errado comigo',
    body: 'A comparação pode transformar o caminho de outras mulheres em uma prova injusta contra a sua própria capacidade.',
  },
  {
    title: 'Avançar pode não ser seguro',
    body: 'Quando uma mudança começa a ficar real, seu interior pode interpretar o crescimento como risco e pedir que você volte ao conhecido.',
  },
]

// Q2 (answers[1]) — Card: SINTOMA EMOCIONAL · ESTADO ATUAL
export const emotionalSymptom = [
  {
    title: 'Mente em estado de alerta',
    body: 'Antes mesmo de o dia começar, sua mente já tenta prever problemas e se preparar para tudo o que poderia dar errado.',
  },
  {
    title: 'Sensação de estar sem direção',
    body: 'Você percebe caminhos possíveis, mas não sente clareza suficiente para escolher qual deles deve vir primeiro.',
  },
  {
    title: 'Cansaço que vai além da rotina',
    body: 'Você continua cumprindo responsabilidades, mas por dentro sente que quase não resta energia para começar algo novo.',
  },
  {
    title: 'Insegurança diante do futuro',
    body: 'A falta de uma direção visível faz o futuro parecer maior, mais incerto e mais difícil de enfrentar.',
  },
]

// Q6 (answers[5]) — Card: CONFLITO INTERNO · FÉ E VIDA PRÁTICA
export const internalConflict = [
  {
    title: 'Fé presente, direção ainda confusa',
    body: 'Você busca a Deus de verdade, mas ainda não consegue traduzir essa busca em uma decisão clara para a vida prática.',
  },
  {
    title: 'Desejo de mudar, dificuldade de agir',
    body: 'Seu coração deseja uma vida diferente, mas esse desejo ainda não está se transformando em passos sustentáveis.',
  },
  {
    title: 'Culpa por não estar onde esperava',
    body: 'A distância entre a vida imaginada e a vida atual pode fazer você interpretar uma fase difícil como falha pessoal ou espiritual.',
  },
  {
    title: 'Sonhos maiores que a confiança atual',
    body: 'Você enxerga uma vida possível, mas ainda se sente pequena diante das escolhas necessárias para construí-la.',
  },
]

// Q3 (answers[2]) — Card: PADRÃO DE COMPORTAMENTO · DECISÕES
export const behaviorPattern = [
  {
    title: 'Espera por uma confirmação completa',
    body: 'Você adia o passo até sentir certeza total, mas essa certeza nunca parece suficiente para permitir que avance.',
  },
  {
    title: 'Paralisia por excesso de análise',
    body: 'Você tenta considerar todos os caminhos e riscos, mas termina o processo mais cansada e sem uma decisão.',
  },
  {
    title: 'Recomeços que perdem força',
    body: 'Você inicia acreditando que será diferente, mas a energia diminui quando surgem dúvidas, desconforto ou obstáculos.',
  },
  {
    title: 'Preparação que nunca parece suficiente',
    body: 'Você deseja avançar, mas sempre encontra mais uma razão para esperar até se sentir completamente pronta.',
  },
]

// Q5 (answers[4]) — O que esse ciclo está roubando
export const cycleRobbery = [
  'Hoje, esse ciclo parece estar roubando de você a paz de decidir sem carregar tanto medo.',
  'Hoje, esse ciclo parece estar roubando de você a clareza para reconhecer o que precisa ser feito agora.',
  'Hoje, esse ciclo parece estar roubando de você a coragem de confiar no próximo passo.',
  'Hoje, esse ciclo parece estar roubando de você a alegria de voltar a sonhar com a vida que deseja construir.',
]

// Q7 (answers[6]) — O que você não quer levar para os próximos meses
export const urgency = [
  'O que mais pesa não é apenas a decisão: é imaginar que ela poderá ser adiada mais uma vez.',
  'Você não quer passar os próximos meses esperando uma direção sem saber como reconhecê-la.',
  'Seu incômodo mostra que você não quer apenas ver o tempo passar sem se aproximar da vida que deseja.',
  'Uma parte de você ainda se recusa a aceitar esse peso como se ele fosse o seu destino.',
]

// Q8 (answers[7]) — O que você deseja recuperar + CTA button text
export const desiredValue = [
  {
    label: 'Recuperar a paz',
    cta: 'QUERO ENTENDER COMO RECUPERAR MINHA PAZ →',
  },
  {
    label: 'Encontrar clareza',
    cta: 'QUERO ENXERGAR MEU PRÓXIMO PASSO →',
  },
  {
    label: 'Agir com confiança',
    cta: 'QUERO VOLTAR A CONFIAR EM MIM →',
  },
  {
    label: 'Recuperar esperança e propósito',
    cta: 'QUERO VOLTAR A ENXERGAR MEU CAMINHO →',
  },
]

// Q9 (answers[8]) — O que precisa ser enxergado agora
export const curiosityBridge = [
  'Agora, o ponto mais importante é enxergar o que faz você parar justamente quando deseja avançar.',
  'Agora, o ponto mais importante é compreender por que seus recomeços parecem conduzir você de volta ao mesmo lugar.',
  'Agora, o ponto mais importante é perceber o que suas decisões têm revelado — inclusive aquilo que ainda passa despercebido.',
  'Agora, o ponto mais importante é entender por que desejo e fé ainda não se transformaram na direção prática que você procura.',
]

// Q10 (answers[9]) — bar position + closing text
export const levelClosing = [
  {
    barProgress: 1.9,
    closing: 'Você reconheceu mais coisas do que imaginava. Isso mostra que padrões antes confusos já começaram a ficar visíveis.',
  },
  {
    barProgress: 2.1,
    closing: 'Mesmo cansada, existe uma parte de você que não aceita continuar do mesmo jeito.',
  },
  {
    barProgress: 1.5,
    closing: 'Você não busca apenas alívio. Seu coração deseja compreender o que precisa mudar de verdade.',
  },
  {
    barProgress: 2.5,
    closing: 'Seu coração aberto mostra que você está disposta a enxergar aquilo que, até agora, permaneceu escondido.',
  },
]

// Level names: [profileId (1-3)][q10 answer index (0-3)]
export const levelNames = {
  1: ['Alerta Reconhecido', 'Rompendo o Estado de Alerta', 'Paz e Clareza em Construção', 'Aberta para Recuperar a Paz'],
  2: ['Bloqueio Reconhecido', 'Rompendo a Indecisão', 'Clareza em Construção', 'Aberta para uma Nova Direção'],
  3: ['Ciclo Reconhecido', 'Rompendo o Recomeço Interrompido', 'Mudança em Construção', 'Aberta para Sustentar um Novo Caminho'],
}
