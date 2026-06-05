export const questions = [
  {
    id: 1,
    type: 'single',
    question: 'Ao acordar, qual é o sentimento mais frequente no seu coração?',
    options: [
      { emoji: '😰', text: 'Minha mente não desacelera, estou sempre preocupada', scores: [3, 0, 0, 1] },
      { emoji: '🌫️', text: 'Sinto-me perdida, sem saber o que fazer', scores: [0, 3, 0, 1] },
      { emoji: '😩', text: 'Cansaço físico e emocional, sem energia para nada', scores: [0, 0, 3, 0] },
      { emoji: '😨', text: 'Medo constante do que o futuro reserva', scores: [0, 0, 0, 3] },
    ],
  },
  {
    id: 2,
    type: 'single',
    question: 'Qual dessas opções descreve melhor você?',
    options: [
      { emoji: '👨‍👩‍👧', text: 'Casada com filhos', scores: [0, 0, 1, 0] },
      { emoji: '💍', text: 'Casada sem filhos', scores: [0, 1, 0, 0] },
      { emoji: '👩‍👧', text: 'Mãe solo', scores: [0, 0, 1, 0] },
      { emoji: '🌿', text: 'Solteira', scores: [0, 1, 0, 0] },
    ],
  },
  {
    id: 3,
    type: 'single',
    question: 'Em qual área você mais sente que precisa de ajuda hoje?',
    options: [
      { emoji: '🙏', text: 'Espiritual', scores: [0, 2, 0, 0] },
      { emoji: '💔', text: 'Emocional', scores: [1, 0, 1, 1] },
      { emoji: '🏠', text: 'Familiar', scores: [0, 0, 2, 0] },
      { emoji: '💸', text: 'Financeira', scores: [0, 0, 0, 2] },
      { emoji: '🌊', text: 'Todas as anteriores', scores: [1, 1, 1, 2] },
    ],
  },
  {
    id: 4,
    type: 'single',
    question: 'Qual dessas situações mais descreve sua realidade atual?',
    options: [
      { emoji: '💔', text: 'Meu casamento está desmoronando', scores: [0, 0, 2, 0] },
      { emoji: '💸', text: 'As dívidas estão me sufocando', scores: [0, 0, 0, 2] },
      { emoji: '😩', text: 'Estou emocionalmente exausta', scores: [0, 0, 3, 0] },
      { emoji: '🌀', text: 'Minha mente não encontra paz', scores: [3, 0, 0, 0] },
      { emoji: '🧭', text: 'Sinto que perdi minha direção', scores: [0, 3, 0, 0] },
    ],
  },
  {
    id: 5,
    type: 'single',
    question: 'Você sente que está distante da mulher que Deus sonhou que você fosse?',
    options: [
      { emoji: '🌫️', text: 'Sim, me perdi no caminho', scores: [0, 3, 0, 0] },
      { emoji: '😔', text: 'Sinto culpa por isso', scores: [0, 1, 1, 0] },
      { emoji: '😨', text: 'Tenho medo de nunca viver meu propósito', scores: [0, 1, 0, 2] },
    ],
  },
  {
    id: 6,
    type: 'single',
    question: 'O que mais dói em você hoje?',
    options: [
      { emoji: '✨', text: 'Saber que Deus tem mais para mim e continuo parada', scores: [0, 1, 0, 2] },
      { emoji: '🙏', text: 'Me sentir perdida espiritualmente', scores: [0, 3, 0, 0] },
      { emoji: '🎭', text: 'Fingir que estou bem quando estou quebrada', scores: [0, 0, 3, 0] },
      { emoji: '👨‍👩‍👧', text: 'Sentir que estou decepcionando minha família', scores: [0, 0, 2, 1] },
    ],
  },
  {
    id: 7,
    type: 'single',
    question: 'Se tudo continuar igual… como você acha que estará daqui 1 ano?',
    options: [
      { emoji: '😩', text: 'Mais cansada emocionalmente', scores: [0, 0, 3, 0] },
      { emoji: '🔁', text: 'Presa nos mesmos ciclos', scores: [0, 1, 0, 2] },
      { emoji: '🙏', text: 'Mais distante da presença de Deus', scores: [0, 2, 0, 0] },
    ],
  },
  {
    id: 8,
    type: 'single',
    question: 'Você sente que está presa em ciclos que se repetem, mesmo tentando mudar?',
    options: [
      { emoji: '🔄', text: 'Sim, parece que sempre volto ao mesmo lugar', scores: [0, 0, 0, 2] },
      { emoji: '🧱', text: 'Tento avançar, mas algo me impede', scores: [0, 0, 0, 2] },
      { emoji: '🌫️', text: 'Sinto que minha vida está parada', scores: [0, 2, 0, 0] },
      { emoji: '💯', text: 'Essa pergunta descreve exatamente como me sinto', scores: [1, 1, 1, 1] },
    ],
  },
  {
    id: 9,
    type: 'single',
    question: 'Você acredita que existe uma razão para tantas batalhas que você tem enfrentado?',
    options: [
      { emoji: '🙏', text: 'Sim, acredito que Deus está me ensinando algo', scores: [0, 0, 0, 0] },
      { emoji: '🌱', text: 'Talvez exista um propósito que ainda não compreendi', scores: [0, 1, 0, 0] },
      { emoji: '🤔', text: 'Não sei, mas sinto que preciso entender', scores: [0, 1, 0, 0] },
    ],
  },
  {
    id: 10,
    type: 'single',
    question: 'E se essas batalhas forem sinais de que Deus está tentando te tirar do "Egito" que tem prendido sua vida?',
    options: [
      { emoji: '✨', text: 'Isso faz muito sentido para mim', scores: [0, 0, 0, 0] },
      { emoji: '💡', text: 'Nunca tinha pensado dessa forma', scores: [0, 0, 0, 0] },
      { emoji: '🕊️', text: 'Sinto que Deus está falando comigo', scores: [0, 0, 0, 0] },
    ],
  },
  {
    id: 11,
    type: 'single',
    question: 'Você acredita que Deus te trouxe até aqui por um motivo?',
    options: [
      { emoji: '✝️', text: 'Sim, eu sinto isso', scores: [0, 0, 0, 0] },
      { emoji: '💛', text: 'Essa mensagem falou comigo', scores: [0, 0, 0, 0] },
      { emoji: '🌅', text: 'Eu precisava ouvir isso hoje', scores: [0, 0, 0, 0] },
    ],
  },
  {
    id: 12,
    type: 'single',
    question: 'Se você pudesse dar um passo hoje para sair desse "Egito" e destravar sua identidade, você estaria disposta a agir agora?',
    options: [
      { emoji: '🔥', text: 'Sim, eu não aguento mais viver assim! Estou pronta para a mudança.', scores: [1, 1, 1, 1] },
      { emoji: '🌱', text: 'Sim, tenho medo, mas sei que preciso de ajuda e estou aberta a isso.', scores: [0, 0, 0, 1] },
      { emoji: '🤍', text: 'Sim, me sinto perdida mas estou disposta a achar minha direção.', scores: [0, 1, 0, 0] },
    ],
  },
]

export const resultProfiles = [
  {
    id: 1,
    icon: '🔒',
    profileTag: 'O Egito da Paz Roubada',
    imageGradient: 'linear-gradient(145deg, #2d1b5e 0%, #1a1040 50%, #0f2040 100%)',
    imageEmoji: '🌊',
    miniDesc: 'Prisão emocional marcada por ansiedade, preocupação e falta de paz',
    personaTitle: 'A Mulher Que Nunca Desliga',
    description: [
      'Você carrega uma batalha silenciosa dentro da mente. Mesmo quando tudo parece calmo por fora, por dentro seus pensamentos continuam acelerados, suas preocupações não param e o coração vive em estado de alerta.',
      'Você tenta ser forte, seguir em frente e confiar em Deus… mas a verdade é que a ansiedade tem roubado sua paz, seu descanso e até sua clareza espiritual.',
    ],
    challenge: 'você pensa tanto, teme tanto e tenta prever tanto o amanhã… que muitas vezes não consegue descansar no cuidado de Deus para o hoje.',
    verse: '"Não andeis ansiosos por coisa alguma…"',
    verseRef: 'Filipenses 4:6',
    signs: [
      'Você sente que sua mente nunca desacelera',
      'Você vive preocupada com o futuro',
      'Você tem dificuldade de descansar e relaxar',
      'Você sente que a paz sumiu da sua rotina',
      'Você quer confiar em Deus, mas a preocupação fala mais alto',
    ],
    finalLine1: '🟡 O seu Egito hoje pode estar na sua mente.',
    finalLine2: 'Mas Deus não te chamou para viver aprisionada pela ansiedade. Ele quer restaurar sua paz e te conduzir para fora dessa prisão emocional.',
  },
  {
    id: 2,
    icon: '🧭',
    profileTag: 'O Egito do Propósito Destruído',
    imageGradient: 'linear-gradient(145deg, #4a2c0a 0%, #2d1a05 50%, #1a1205 100%)',
    imageEmoji: '🏜️',
    miniDesc: 'Prisão emocional marcada por confusão, vazio e falta de direção',
    personaTitle: 'A Mulher Que Se Perdeu no Caminho',
    description: [
      'Você sente que existe algo maior para sua vida… mas já não consegue enxergar com clareza quem você é, para onde está indo ou qual é o próximo passo.',
      'Por dentro, existe a sensação de estar travada, desconectada de si mesma e distante da mulher que Deus sonhou que você fosse. Você até tenta seguir, mas sente como se estivesse andando sem direção.',
    ],
    challenge: 'você sabe que precisa sair desse lugar, mas a confusão interior tem impedido você de reconhecer sua identidade e ouvir com clareza a direção de Deus.',
    verse: '"Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento."',
    verseRef: 'Provérbios 3:5',
    signs: [
      'Você se sente perdida e sem direção',
      'Você sente que se afastou da mulher que Deus sonhou',
      'Você tem dificuldade de tomar decisões',
      'Você sente sua identidade travada',
      'Você sabe que Deus tem mais, mas não consegue avançar',
    ],
    finalLine1: '🟡 O seu Egito hoje pode estar na sua identidade.',
    finalLine2: 'Mas Deus ainda sabe exatamente quem você é. Ele pode te conduzir de volta ao caminho, à clareza e ao propósito.',
  },
  {
    id: 3,
    icon: '🏺',
    profileTag: 'O Egito da Alma Quebrantada',
    imageGradient: 'linear-gradient(145deg, #5a1a0a 0%, #3d1005 50%, #200a05 100%)',
    imageEmoji: '🕊️',
    miniDesc: 'Prisão emocional marcada por exaustão, peso interno e cansaço acumulado',
    personaTitle: 'A Mulher Que Aguenta Tudo em Silêncio',
    description: [
      'Você vem carregando peso demais há tempo demais. Talvez você cuide de todos, resolva tudo, tente manter a casa, a família, a rotina e ainda sorria como se estivesse tudo bem…',
      'Mas por dentro existe uma mulher cansada, emocionalmente esgotada e com a alma pedindo socorro. Você se acostumou tanto a suportar tudo, que talvez já nem perceba o quanto está sobrecarregada.',
    ],
    challenge: 'você aprendeu a sobreviver no cansaço, e isso tem feito você chamar de "força" aquilo que, na verdade, já virou esgotamento.',
    verse: '"Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei."',
    verseRef: 'Mateus 11:28',
    signs: [
      'Você sente cansaço físico e emocional',
      'Você cuida de tudo e de todos',
      'Você finge estar bem, mesmo estando quebrada',
      'Você sente que está no limite',
      'Você carrega responsabilidades demais sozinha',
    ],
    finalLine1: '🟡 O seu Egito hoje pode estar na sobrecarga que você carrega.',
    finalLine2: 'Mas Deus não te chamou para viver esgotada. Ele quer aliviar o seu peso e restaurar sua alma.',
  },
  {
    id: 4,
    icon: '⛓️',
    profileTag: 'O Egito da Escrava do Medo',
    imageGradient: 'linear-gradient(145deg, #0a1a3d 0%, #050f25 50%, #020810 100%)',
    imageEmoji: '🚪',
    miniDesc: 'Prisão emocional marcada por insegurança, travamento e medo de dar o próximo passo',
    personaTitle: 'A Mulher Que Quer Mudar, Mas Não Consegue Avançar',
    description: [
      'Você sabe que precisa mudar. Sabe que não pode continuar como está. Sabe até que Deus tem algo maior para sua vida. Mas, mesmo assim, alguma coisa dentro de você trava.',
      'O medo do futuro, o medo de errar, o medo de sofrer de novo e até o medo de nunca viver seu propósito têm impedido você de avançar com coragem. Você deseja sair desse lugar… mas ainda se sente presa.',
    ],
    challenge: 'o medo tem feito você adiar decisões, duvidar da sua capacidade e permanecer em um lugar onde Deus já está te chamando para sair.',
    verse: '"Porque Deus não nos deu espírito de covardia, mas de poder, de amor e de moderação."',
    verseRef: '2 Timóteo 1:7',
    signs: [
      'Você sente medo constante do futuro',
      'Você quer mudar, mas algo sempre te paralisa',
      'Você sente que está presa nos mesmos ciclos',
      'Você tem medo de nunca viver seu propósito',
      'Você sabe que precisa agir, mas sente insegurança',
    ],
    finalLine1: '🟡 O seu Egito hoje pode estar no medo que paralisa seus passos.',
    finalLine2: 'Mas Deus não te chamou para viver presa. Ele quer te fortalecer para sair desse lugar e viver com coragem, direção e identidade.',
  },
]

export function computeProfile(answers) {
  const scores = [0, 0, 0, 0]
  answers.forEach(answer => {
    if (answer && answer.scores) {
      answer.scores.forEach((s, i) => { scores[i] += s })
    }
  })
  const maxScore = Math.max(...scores)
  const winnerIdx = scores.indexOf(maxScore)
  return winnerIdx + 1
}
