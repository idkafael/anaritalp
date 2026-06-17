import { motion } from 'framer-motion'
import Logo from '../components/Logo'

function Fade({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  )
}

const returnQuestions = [
  'Para os mesmos pensamentos?',
  'Para as mesmas decisões?',
  'Para os mesmos ambientes?',
  'Para os mesmos ciclos que te prenderam até aqui?',
]

const patternQuestions = [
  'Voltam para a procrastinação.',
  'Voltam para o medo.',
  'Voltam para a culpa.',
  'Voltam para a autossabotagem.',
  'Voltam para os mesmos padrões.',
]

const targetProfile = [
  'Começa algo, mas tem dificuldade de manter constância',
  'Sente que sempre volta para os mesmos padrões',
  'Tem medo de se animar agora e depois parar de novo',
  'Sabe que precisa de direção para continuar',
  'Não quer jogar fora o esforço que acabou de começar',
  'Quer acelerar sua saída do deserto com passos simples e claros',
]

const sincereQuestions = [
  'Quantas vezes você já começou algo com força e depois voltou para o mesmo lugar?',
  'Quantas vezes prometeu mudar e, poucos dias depois, se viu repetindo os mesmos padrões?',
  'Quantas vezes sentiu que estava avançando, mas depois perdeu a direção?',
]

const planItems = [
  {
    num: '1',
    title: 'Plano prático para depois dos 7 dias',
    desc: 'Um caminho simples para saber o que fazer quando a primeira etapa terminar e como continuar avançando sem se perder no processo.',
  },
  {
    num: '2',
    title: 'Roteiro de Decisão da Travessia',
    desc: 'Um material direto para te ajudar a tomar decisões com mais clareza e parar de adiar o que precisa ser feito.',
  },
  {
    num: '3',
    title: 'Diagnóstico: Por Que Você Ainda Está no Deserto',
    desc: 'Perguntas profundas para identificar o que ainda pode estar atrasando sua caminhada e te puxando de volta para os mesmos ciclos.',
  },
  {
    num: '4',
    title: 'Direcionamento de Continuidade',
    desc: 'Um guia para te ajudar a permanecer no caminho da travessia, mesmo quando a emoção inicial passar.',
  },
]

export default function ContinuacaoScreen({ onDecline }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #0c0c14 0%, #0f0f1a 50%, #0a0a12 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '40px 24px 88px',
        position: 'relative', overflowX: 'hidden',
      }}
    >
      {/* Glow sutil */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <Logo />

      <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 1 }}>

        {/* ── LABEL ── */}
        <Fade delay={0.05}>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <span style={{
              fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase',
              color: 'rgba(190,150,81,0.6)', fontWeight: 700,
            }}>
              ✦ &nbsp; Uma Última Proposta &nbsp; ✦
            </span>
          </div>
        </Fade>

        {/* ── H1 ABERTURA ── */}
        <Fade delay={0.1}>
          <h1 style={{
            textAlign: 'center',
            fontSize: 'clamp(24px, 6vw, 34px)',
            fontWeight: 900, color: '#f5efe6',
            lineHeight: 1.15, marginBottom: 24, letterSpacing: '-0.5px',
          }}>
            ESPERA… E DEPOIS DOS 7 DIAS?
          </h1>
        </Fade>

        {/* ── VOCÊ ENTROU ── */}
        <Fade delay={0.16}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(18px, 4.5vw, 22px)',
            fontWeight: 800, color: '#d4ae6e',
            lineHeight: 1.3, marginBottom: 16,
          }}>
            Você acabou de entrar na Saída do Egito.
          </h2>
          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.65)',
            lineHeight: 1.85, marginBottom: 12, textAlign: 'center',
          }}>
            Mas agora precisa garantir que não vai voltar para os mesmos padrões quando a caminhada ficar difícil.
          </p>
          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.8)',
            lineHeight: 1.85, marginBottom: 28, textAlign: 'center', fontStyle: 'italic',
          }}>
            Você tomou uma decisão importante. Você começou a sua travessia.
          </p>
        </Fade>

        {/* Divisor */}
        <Fade delay={0.2}>
          <div style={{
            height: 1, marginBottom: 28,
            background: 'linear-gradient(90deg, transparent, rgba(190,150,81,0.2), transparent)',
          }} />
        </Fade>

        {/* ── PERGUNTA SINCERA ── */}
        <Fade delay={0.24}>
          <h2 style={{
            fontSize: 'clamp(22px, 5.5vw, 28px)',
            fontWeight: 900, color: '#f5efe6',
            lineHeight: 1.2, marginBottom: 16,
            letterSpacing: '-0.4px',
          }}>
            Mas deixa eu te fazer uma pergunta sincera:
          </h2>
          <h2 style={{
            fontSize: 'clamp(22px, 5.5vw, 28px)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #be9651, #d4ae6e)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            lineHeight: 1.2, marginBottom: 20,
          }}>
            Depois dos 7 dias… você vai fazer o quê?
          </h2>
          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.7)',
            lineHeight: 1.75, marginBottom: 10,
          }}>
            Vai voltar para a mesma rotina?
          </p>
          {returnQuestions.map((q, i) => (
            <p key={i} style={{
              fontSize: 15, color: 'rgba(245,239,230,0.6)',
              lineHeight: 1.75, marginBottom: 6,
              paddingLeft: 14,
              borderLeft: '2px solid rgba(190,150,81,0.2)',
            }}>
              {q}
            </p>
          ))}
        </Fade>

        {/* ── PORQUE COMEÇAR ── */}
        <Fade delay={0.32}>
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <p style={{
              fontSize: 15, color: 'rgba(245,239,230,0.7)',
              lineHeight: 1.85, marginBottom: 12,
            }}>
              Porque começar é importante.
            </p>
            <p style={{
              fontSize: 15, color: 'rgba(245,239,230,0.7)',
              lineHeight: 1.85,
            }}>
              Mas o que faz muitas mulheres continuarem presas não é falta de começo.
            </p>
          </div>

          <h2 style={{
            fontSize: 'clamp(22px, 5.5vw, 28px)',
            fontWeight: 900, color: '#f87171',
            lineHeight: 1.2, marginBottom: 20,
            letterSpacing: '-0.3px',
          }}>
            É não saber continuar.
          </h2>

          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.65)',
            lineHeight: 1.85, marginBottom: 10,
          }}>
            Elas começam animadas. Recebem uma direção. Sentem que Deus está despertando algo novo.
          </p>
          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.65)',
            lineHeight: 1.85, marginBottom: 14,
          }}>
            Mas, quando a emoção passa, voltam para o mesmo lugar.
          </p>

          {patternQuestions.map((q, i) => (
            <p key={i} style={{
              fontSize: 15, color: 'rgba(245,239,230,0.55)',
              lineHeight: 1.75, marginBottom: 6,
              paddingLeft: 14,
              borderLeft: '2px solid rgba(248,113,113,0.25)',
            }}>
              {q}
            </p>
          ))}

          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.65)',
            lineHeight: 1.85, marginTop: 16,
          }}>
            E no fim, todo aquele esforço vira apenas mais uma tentativa que não foi sustentada.
          </p>
        </Fade>

        {/* Divisor */}
        <Fade delay={0.4}>
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 10, margin: '28px 0',
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(190,150,81,0.2))' }} />
            <span style={{ fontSize: 11, color: 'rgba(190,150,81,0.4)', letterSpacing: 6 }}>✦ ✝ ✦</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, rgba(190,150,81,0.2))' }} />
          </div>
        </Fade>

        {/* ── VOCÊ NÃO COMPROU PARA VIVER UMA EMOÇÃO ── */}
        <Fade delay={0.44}>
          <h2 style={{
            fontSize: 'clamp(20px, 5vw, 26px)',
            fontWeight: 900, color: '#f5efe6',
            lineHeight: 1.25, marginBottom: 16, letterSpacing: '-0.3px',
          }}>
            Você não comprou a Saída do Egito para viver uma emoção de 7 dias.
          </h2>
          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.65)',
            lineHeight: 1.85, marginBottom: 14,
          }}>
            Você entrou porque quer mudança. Quer clareza. Quer direção. Quer sair do lugar.
          </p>
          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.65)',
            lineHeight: 1.85, marginBottom: 14, fontStyle: 'italic',
          }}>
            Mas a verdade é que a travessia não termina quando os 7 dias acabam.
          </p>
          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.75)',
            lineHeight: 1.85, marginBottom: 24, fontWeight: 600,
          }}>
            É depois disso que muitas mulheres se perdem.
          </p>
          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.65)',
            lineHeight: 1.85, marginBottom: 28,
          }}>
            Por isso, eu quero liberar para você uma opção mais simples, direta e acessível:
          </p>
        </Fade>

        {/* ── PLANO DE CONTINUAÇÃO ── */}
        <Fade delay={0.5}>
          <div style={{
            textAlign: 'center', marginBottom: 24,
            padding: '24px 20px',
            background: 'rgba(190,150,81,0.07)',
            borderRadius: 20,
            border: '1px solid rgba(190,150,81,0.2)',
          }}>
            <h2 style={{
              fontSize: 'clamp(20px, 5vw, 26px)',
              fontWeight: 900, color: '#d4ae6e',
              lineHeight: 1.2, marginBottom: 10, letterSpacing: '-0.3px',
            }}>
              Plano de Continuação da Travessia
            </h2>
            <p style={{
              fontSize: 14, color: 'rgba(245,239,230,0.6)',
              lineHeight: 1.75, fontStyle: 'italic',
            }}>
              Um plano prático para te ajudar a continuar avançando depois dos 7 dias, sem voltar para os mesmos ciclos que atrasaram sua vida até aqui.
            </p>
          </div>
        </Fade>

        {/* ── PARA QUEM É ── */}
        <Fade delay={0.54}>
          <p style={{
            fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(190,150,81,0.65)', fontWeight: 700, marginBottom: 14,
          }}>
            Esse plano foi criado para você que:
          </p>
          <div style={{ marginBottom: 28 }}>
            {targetProfile.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                padding: '10px 0',
                borderBottom: i < targetProfile.length - 1
                  ? '1px solid rgba(255,255,255,0.05)'
                  : 'none',
              }}>
                <span style={{ color: '#be9651', fontWeight: 800, fontSize: 13, flexShrink: 0, marginTop: 2 }}>→</span>
                <span style={{ fontSize: 14, color: 'rgba(245,239,230,0.75)', lineHeight: 1.6 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Fade>

        {/* ── O PROBLEMA ── */}
        <Fade delay={0.6}>
          <h2 style={{
            fontSize: 'clamp(20px, 5vw, 24px)',
            fontWeight: 900, color: '#f5efe6',
            lineHeight: 1.25, marginBottom: 8, letterSpacing: '-0.3px',
          }}>
            O problema não é só sair do Egito.
          </h2>
          <h2 style={{
            fontSize: 'clamp(18px, 4.5vw, 22px)',
            fontWeight: 800, color: '#f87171',
            lineHeight: 1.3, marginBottom: 24,
          }}>
            O problema é não voltar para ele quando a caminhada ficar difícil.
          </h2>
        </Fade>

        {/* ── O QUE ESTÁ DENTRO ── */}
        <Fade delay={0.64}>
          <p style={{
            fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(190,150,81,0.65)', fontWeight: 700, marginBottom: 16,
          }}>
            Dentro do Plano, você vai receber:
          </p>

          <div style={{ marginBottom: 32 }}>
            {planItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.68 + i * 0.08, duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  display: 'flex', gap: 14, marginBottom: 18,
                  paddingBottom: 18,
                  borderBottom: i < planItems.length - 1
                    ? '1px solid rgba(255,255,255,0.05)'
                    : 'none',
                }}
              >
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: 'rgba(190,150,81,0.12)',
                  border: '1px solid rgba(190,150,81,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 800, color: '#be9651',
                }}>
                  {item.num}
                </div>
                <div>
                  <p style={{
                    fontSize: 15, fontWeight: 700, color: '#f5efe6',
                    lineHeight: 1.35, marginBottom: 6,
                  }}>
                    {item.title}
                  </p>
                  <p style={{
                    fontSize: 13, color: 'rgba(245,239,230,0.55)',
                    lineHeight: 1.7,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Fade>

        {/* ── PERGUNTAS SINCERAS ── */}
        <Fade delay={0.86}>
          <h2 style={{
            fontSize: 'clamp(18px, 4.5vw, 22px)',
            fontWeight: 900, color: '#f5efe6',
            lineHeight: 1.25, marginBottom: 20,
          }}>
            Você pode terminar os 7 dias e tentar continuar sozinha…
          </h2>
          <p style={{
            fontSize: 14, fontWeight: 700, color: '#d4ae6e',
            marginBottom: 14,
          }}>
            Mas seja sincera:
          </p>
          {sincereQuestions.map((q, i) => (
            <p key={i} style={{
              fontSize: 14, color: 'rgba(245,239,230,0.6)',
              lineHeight: 1.8, marginBottom: 10,
              paddingLeft: 14,
              borderLeft: '2px solid rgba(190,150,81,0.2)',
            }}>
              {q}
            </p>
          ))}
          <p style={{
            fontSize: 15, fontWeight: 700, color: '#f5efe6',
            lineHeight: 1.75, marginTop: 20, marginBottom: 28,
            fontStyle: 'italic',
          }}>
            Dessa vez não precisa ser assim.
          </p>
        </Fade>

        {/* ── VOCÊ NÃO PRECISA RECOMEÇAR ── */}
        <Fade delay={0.94}>
          <h2 style={{
            fontSize: 'clamp(18px, 4.5vw, 22px)',
            fontWeight: 900, color: '#d4ae6e',
            lineHeight: 1.25, marginBottom: 24, letterSpacing: '-0.2px',
          }}>
            Você não precisa recomeçar de novo aquilo que pode sustentar agora.
          </h2>
        </Fade>

        {/* ── PREÇO ── */}
        <Fade delay={1.0}>
          <div style={{
            textAlign: 'center', marginBottom: 28,
            padding: '28px 20px',
            background: 'rgba(190,150,81,0.08)',
            borderRadius: 20,
            border: '1px solid rgba(190,150,81,0.22)',
          }}>
            <p style={{
              fontSize: 14, color: 'rgba(245,239,230,0.5)',
              marginBottom: 4,
            }}>
              A Imersão completa foi liberada por
            </p>
            <p style={{
              fontSize: 20, color: 'rgba(245,239,230,0.3)',
              marginBottom: 12, textDecoration: 'line-through',
              fontWeight: 700,
            }}>
              R$ 97,00
            </p>
            <p style={{
              fontSize: 14, color: 'rgba(245,239,230,0.55)',
              lineHeight: 1.7, marginBottom: 14,
            }}>
              Como você decidiu não entrar nela agora, eu quero liberar uma alternativa mais simples:
            </p>
            <p style={{
              fontSize: 14, color: 'rgba(245,239,230,0.45)',
              marginBottom: 4,
            }}>
              De R$ 97 por apenas
            </p>
            <p style={{
              fontSize: 'clamp(48px, 12vw, 60px)',
              fontWeight: 900, color: '#d4ae6e',
              lineHeight: 1, letterSpacing: '-2px',
              marginBottom: 6,
            }}>
              R$ 47
            </p>
            <p style={{
              fontSize: 13, color: 'rgba(212,174,110,0.6)',
              fontWeight: 600, letterSpacing: '0.04em',
            }}>
              Plano de Continuação da Travessia
            </p>
          </div>
        </Fade>

        {/* ── CTA ── */}
        <Fade delay={1.06}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(16px, 4vw, 20px)',
            fontWeight: 800, color: 'rgba(245,239,230,0.8)',
            lineHeight: 1.35, marginBottom: 20,
          }}>
            Garanta agora o Plano de Continuação da Travessia e siga avançando depois dos 7 dias.
          </h2>

          <motion.button
            whileHover={{ scale: 1.025, boxShadow: '0 12px 44px rgba(190,150,81,0.5)' }}
            whileTap={{ scale: 0.975 }}
            style={{
              width: '100%', padding: '19px',
              borderRadius: 16, border: 'none',
              background: 'linear-gradient(135deg, #be9651 0%, #d4ae6e 60%, #c9a05a 100%)',
              color: '#0c0c14', fontSize: 16, fontWeight: 900,
              cursor: 'pointer', letterSpacing: '0.03em',
              boxShadow: '0 4px 28px rgba(190,150,81,0.35)',
              marginBottom: 20,
              transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
            }}
          >
            SIM, EU QUERO CONTINUAR MINHA TRAVESSIA 🗝️
          </motion.button>

          {/* Não obrigada */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={onDecline}
              style={{
                background: 'none', border: 'none',
                fontSize: 12, color: 'rgba(245,239,230,0.25)',
                cursor: 'pointer', lineHeight: 1.6,
                textDecoration: 'underline',
                textDecorationColor: 'rgba(245,239,230,0.1)',
                fontStyle: 'italic',
                padding: '8px 0',
              }}
            >
              Não, obrigada. Vou tentar continuar sozinha depois dos 7 dias.
            </button>
          </div>
        </Fade>

      </div>
    </motion.div>
  )
}
