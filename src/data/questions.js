export const questions = [
  // Q2 — idade (contexto, não pontua)
  {
    id: 'Q2',
    type: 'single',
    scoring: false,
    question: 'Qual é a sua idade?',
    options: [
      { emoji: '🌸', text: '30 a 39 anos' },
      { emoji: '✨', text: '40 a 49 anos' },
      { emoji: '🌺', text: '50 a 59 anos' },
      { emoji: '🕊️', text: '60 anos ou mais' },
      { emoji: '🤍', text: 'Prefiro não responder' },
    ],
  },
  // Q3 — estado civil (contexto, não pontua)
  {
    id: 'Q3',
    type: 'single',
    scoring: false,
    question: 'Qual é o seu estado civil?',
    options: [
      { emoji: '💍', text: 'Casada' },
      { emoji: '🌱', text: 'Solteira' },
      { emoji: '🍃', text: 'Divorciada / Separada' },
      { emoji: '🤍', text: 'Viúva' },
      { emoji: '💞', text: 'Em um relacionamento' },
      { emoji: '🔒', text: 'Prefiro não responder' },
    ],
  },
  // Q4 — filhos (contexto, não pontua)
  {
    id: 'Q4',
    type: 'single',
    scoring: false,
    question: 'Você tem filhos?',
    options: [
      { emoji: '🏠', text: 'Sim, e ainda moram comigo' },
      { emoji: '🌍', text: 'Sim, mas já são adultos e moram fora' },
      { emoji: '🔀', text: 'Sim, alguns moram comigo e outros não' },
      { emoji: '🌸', text: 'Não tenho filhos' },
      { emoji: '🤍', text: 'Prefiro não responder' },
    ],
  },
  // Q5 — pontua A/B/C/D
  {
    id: 'Q5',
    type: 'single',
    scoring: true,
    question: 'Quando você olha para sua vida hoje, qual dessas frases mais parece com você?',
    options: [
      { emoji: '💝', text: 'Tenho cuidado de tantas coisas e pessoas que quase não penso em mim.', score: 'A' },
      { emoji: '🌱', text: 'Tenho vontade de mudar algumas coisas, mas penso tanto que acabo não decidindo.', score: 'B' },
      { emoji: '🪞', text: 'Passei tantos anos vivendo para outras pessoas que já não sei exatamente o que quero para mim.', score: 'C' },
      { emoji: '🔑', text: 'Sinto que preciso recomeçar alguma coisa na minha vida, mas não sei por onde começar.', score: 'D' },
    ],
  },
  // Q6 — pontua A/B/C/D
  {
    id: 'Q6',
    type: 'single',
    scoring: true,
    question: 'Quando você pensa no seu futuro, o que mais acontece dentro de você?',
    options: [
      { emoji: '⚡', text: 'Quero fazer algo por mim, mas sempre aparece alguma coisa mais importante.', score: 'A' },
      { emoji: '🔄', text: 'Tenho várias possibilidades na cabeça e não sei qual escolher.', score: 'B' },
      { emoji: '🌙', text: 'Sinto saudade de uma versão minha que parece ter ficado para trás.', score: 'C' },
      { emoji: '🌅', text: 'Sinto que existe algo novo para mim, mas ainda não consigo enxergar o caminho.', score: 'D' },
    ],
  },
  // Q7 — pontua A/B/B/D (C→B)
  {
    id: 'Q7',
    type: 'single',
    scoring: true,
    question: 'Quando aparece uma oportunidade de fazer algo diferente na sua vida, qual costuma ser sua reação?',
    options: [
      { emoji: '👨‍👩‍👧', text: 'Penso primeiro em como aquilo vai afetar as pessoas ao meu redor.', score: 'A' },
      { emoji: '😰', text: 'Fico pensando em tudo que pode dar errado antes de decidir.', score: 'B' },
      { emoji: '💭', text: 'Tenho vontade, mas começo a pensar se realmente sou capaz.', score: 'B' },
      { emoji: '🚪', text: 'Sinto que deveria aproveitar, mas alguma coisa me faz recuar.', score: 'D' },
    ],
  },
  // Q8 — pontua A/B/C/D
  {
    id: 'Q8',
    type: 'single',
    scoring: true,
    question: 'Quando você precisa tomar uma decisão importante sobre sua própria vida, o que costuma acontecer?',
    options: [
      { emoji: '🏠', text: 'Penso primeiro nas necessidades da minha família.', score: 'A' },
      { emoji: '😟', text: 'Tenho medo de escolher errado e me arrepender.', score: 'B' },
      { emoji: '🔍', text: 'Às vezes nem sei direito o que realmente quero.', score: 'C' },
      { emoji: '⏳', text: 'Fico esperando sentir que é o momento certo ou receber alguma direção.', score: 'D' },
    ],
  },
  // Q9 — 5 opções: A→B, B→B, C→B, D→C, E→D
  {
    id: 'Q9',
    type: 'single',
    scoring: true,
    question: 'Você se lembra de alguma oportunidade que apareceu na sua vida, mas acabou não aproveitando?',
    options: [
      { emoji: '💭', text: 'Sim. E até hoje penso no que poderia ter acontecido.', score: 'B' },
      { emoji: '😢', text: 'Sim. Na época, o medo de não conseguir foi maior.', score: 'B' },
      { emoji: '🤔', text: 'Sim. Eu tinha capacidade, mas achei melhor não arriscar.', score: 'B' },
      { emoji: '📅', text: 'Sinto que já deixei passar mais de uma oportunidade.', score: 'C' },
      { emoji: '🌫️', text: 'Não consigo lembrar de uma específica.', score: 'D' },
    ],
  },
  // Q10 — 5 opções: todas → A
  {
    id: 'Q10',
    type: 'single',
    scoring: true,
    question: 'Quando alguém da sua família precisa de você, o que geralmente acontece?',
    options: [
      { emoji: '💪', text: 'Dou um jeito, mesmo quando estou cansada.', score: 'A' },
      { emoji: '❤️', text: 'Coloco a necessidade deles na frente da minha.', score: 'A' },
      { emoji: '🌊', text: 'Sinto que muitas vezes tudo acaba dependendo de mim.', score: 'A' },
      { emoji: '🌱', text: 'Ajudo quando posso, mas estou tentando aprender a pensar mais em mim.', score: 'A' },
      { emoji: '🔓', text: 'Tenho dificuldade de dizer não.', score: 'A' },
    ],
  },
  // Q11 — pontua A/B/C/D
  {
    id: 'Q11',
    type: 'single',
    scoring: true,
    question: 'Quando você pensa nos próximos anos, o que mais preocupa você?',
    options: [
      { emoji: '😔', text: 'Continuar colocando todo mundo na frente de mim.', score: 'A' },
      { emoji: '😰', text: 'Continuar com medo de tomar decisões importantes.', score: 'B' },
      { emoji: '🌙', text: 'Olhar para trás e perceber que deixei meus próprios sonhos para depois.', score: 'C' },
      { emoji: '🗺️', text: 'Continuar sentindo que preciso mudar, mas sem saber por onde começar.', score: 'D' },
    ],
  },
  // Q12 — pontua A/B/C/D
  {
    id: 'Q12',
    type: 'single',
    scoring: true,
    question: 'Quando você pensa no tempo que passou, qual desses pensamentos mais mexe com você?',
    options: [
      { emoji: '🤲', text: '"Eu fiz tanto pelos outros… quando vou fazer algo por mim?"', score: 'A' },
      { emoji: '💔', text: '"Quantas coisas poderiam ter sido diferentes se eu tivesse tido mais coragem?"', score: 'B' },
      { emoji: '🪞', text: '"Em que momento eu deixei de pensar no que eu queria?"', score: 'C' },
      { emoji: '🌅', text: '"Será que ainda existe um caminho novo para mim?"', score: 'D' },
    ],
  },
  // Q13 — pontua A/B/C/D
  {
    id: 'Q13',
    type: 'single',
    scoring: true,
    question: 'Se você pudesse receber clareza sobre uma coisa hoje, o que mais gostaria de descobrir?',
    options: [
      { emoji: '💝', text: 'Como voltar a olhar para mim e para o que eu realmente quero.', score: 'A' },
      { emoji: '⚡', text: 'Como parar de duvidar tanto e conseguir tomar uma decisão.', score: 'B' },
      { emoji: '🔍', text: 'Como descobrir o que ainda faz sentido para a minha vida.', score: 'C' },
      { emoji: '🙏', text: 'Qual deve ser o próximo passo que Deus está me mostrando.', score: 'D' },
    ],
  },
  // Q14 — pontua A/B/C/D
  {
    id: 'Q14',
    type: 'single',
    scoring: true,
    question: 'Se você finalmente enxergasse uma direção para sua vida, o que gostaria de sentir novamente?',
    options: [
      { emoji: '🕊️', text: 'Paz para cuidar de mim sem culpa.', score: 'A' },
      { emoji: '🛡️', text: 'Segurança para tomar decisões.', score: 'B' },
      { emoji: '✨', text: 'Alegria de voltar a sonhar.', score: 'C' },
      { emoji: '🌅', text: 'Esperança de que ainda existe algo novo para viver.', score: 'D' },
    ],
  },
  // Q15 — pontua B/C/B/D (também serve como desempate)
  {
    id: 'Q15',
    type: 'single',
    scoring: true,
    question: 'Se você pudesse entender por que isso continua acontecendo, o que gostaria de descobrir primeiro?',
    options: [
      { emoji: '🔒', text: 'O que tem me feito parar mesmo quando quero seguir em frente.', score: 'B' },
      { emoji: '🔄', text: 'Por que eu tento recomeçar, mas acabo voltando para o mesmo lugar.', score: 'C' },
      { emoji: '💡', text: 'O que ainda não percebi sobre a forma como tenho tomado minhas decisões.', score: 'B' },
      { emoji: '🕊️', text: 'Por que, mesmo tendo fé e vontade de mudar, ainda não consigo avançar.', score: 'D' },
    ],
  },
]

export function computeProfile(answers) {
  const scores = { A: 0, B: 0, C: 0, D: 0 }

  questions.forEach((q, idx) => {
    if (!q.scoring) return
    const answer = answers[idx]
    if (!answer?.score) return
    scores[answer.score]++
  })

  const max = Math.max(scores.A, scores.B, scores.C, scores.D)
  const tied = ['A', 'B', 'C', 'D'].filter(k => scores[k] === max)

  if (tied.length === 1) return tied[0]

  // Desempate pela resposta de Q15 (score de Q15 já mapeia para o resultado correto)
  const q15Idx = questions.findIndex(q => q.id === 'Q15')
  const q15Answer = answers[q15Idx]
  if (q15Answer?.score) return q15Answer.score

  // Fallback final: ordem A > B > C > D
  for (const p of ['A', 'B', 'C', 'D']) {
    if (tied.includes(p)) return p
  }

  return 'A'
}
