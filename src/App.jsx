import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { questions, computeProfile } from './data/questions'
import IntroScreen from './screens/IntroScreen'
import SingleChoice from './screens/SingleChoice'
import LoadingScreen from './screens/LoadingScreen'
import ResultScreen from './screens/ResultScreen'
import CTAScreen from './screens/CTAScreen'

const TOTAL = questions.length

/* ─────────────────────────────────────────────
   POPUP — Quiz / Loading / Result
   Impede que a usuária saia antes de ver o resultado
───────────────────────────────────────────── */
function ExitPopup({ onContinue }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.88)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
        style={{
          width: '100%', maxWidth: 400,
          background: 'linear-gradient(160deg, #0d3535 0%, #0a2828 100%)',
          borderRadius: 24, padding: '36px 28px',
          textAlign: 'center',
          border: '1px solid rgba(190,150,81,0.2)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
        }}
      >
        <div style={{ fontSize: 44, marginBottom: 12, lineHeight: 1 }}>🚨</div>

        <h2 style={{
          fontSize: 'clamp(19px, 5vw, 23px)', fontWeight: 800,
          color: '#f5efe6', lineHeight: 1.25, marginBottom: 14,
        }}>
          Espere! Sua análise ainda não foi concluída.
        </h2>

        <p style={{
          fontSize: 14, fontWeight: 700,
          color: '#d4ae6e', lineHeight: 1.6, marginBottom: 14,
        }}>
          Essa análise é única e gratuita por pessoa.
        </p>

        <p style={{
          fontSize: 14, color: 'rgba(245,239,230,0.75)',
          lineHeight: 1.8, marginBottom: 18,
        }}>
          <strong style={{ color: '#f87171', fontWeight: 700 }}>
            Se você sair agora, poderá perder o acesso gratuito ao seu diagnóstico
          </strong>{' '}
          e talvez não consiga refazer essa análise depois.
        </p>

        <p style={{
          fontSize: 14, color: 'rgba(245,239,230,0.65)',
          lineHeight: 1.8, marginBottom: 28, fontStyle: 'italic',
        }}>
          Continue para descobrir em qual área da sua vida você ainda está presa no seu "Egito" e{' '}
          <strong style={{ fontStyle: 'normal', color: 'rgba(245,239,230,0.9)', fontWeight: 700 }}>
            qual caminho seguir para sair desse ciclo.
          </strong>
        </p>

        <motion.button
          whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(190,150,81,0.4)' }}
          whileTap={{ scale: 0.97 }}
          onClick={onContinue}
          style={{
            width: '100%', padding: '17px',
            borderRadius: 14, border: 'none',
            background: 'linear-gradient(135deg, #be9651, #d4ae6e)',
            color: '#0F3A3A', fontSize: 15, fontWeight: 800,
            cursor: 'pointer', letterSpacing: '0.02em',
            boxShadow: '0 4px 24px rgba(190,150,81,0.3)',
          }}
        >
          Ver minha análise agora
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   TELA DOWNSELL — página própria, fundo escuro quente
   Aparece quando a usuária tenta sair da página CTA
───────────────────────────────────────────── */
const downsellItems = [
  'O GPS da Terra Prometida',
  'As 7 etapas da travessia',
  'O Aulão Especial de Diagnóstico',
  'A Comunidade Chamadas Para Vencer',
  'Garantia de 7 dias',
]

function DownsellScreen({ onStay }) {
  return (
    <motion.div
      key="downsell-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #1c1005 0%, #150c04 50%, #0f0902 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '52px 24px 80px',
        position: 'relative', overflowX: 'hidden',
      }}
    >
      {/* Glow de fundo âmbar */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400,
        background: 'radial-gradient(ellipse, rgba(190,130,40,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 1 }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 20 }}
        >
          <span style={{
            fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(212,174,110,0.6)', fontWeight: 700,
          }}>
            ✦ &nbsp; Condição Especial &nbsp; ✦
          </span>
        </motion.div>

        {/* Headline principal */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(28px, 7vw, 40px)',
            fontWeight: 900, color: '#f5efe6',
            lineHeight: 1.1, marginBottom: 10,
            letterSpacing: '-0.8px',
          }}
        >
          ATENÇÃO, ESPERE.
        </motion.h1>

        {/* Sublinha da headline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5 }}
          style={{
            textAlign: 'center', fontSize: 16,
            color: 'rgba(245,239,230,0.65)',
            lineHeight: 1.7, marginBottom: 28, fontStyle: 'italic',
          }}
        >
          Antes de fechar esta página, eu quero fazer uma última proposta para você.
        </motion.p>

        {/* Divisor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28 }}
          style={{
            height: 1, marginBottom: 28,
            background: 'linear-gradient(90deg, transparent, rgba(190,130,40,0.3), transparent)',
          }}
        />

        {/* Corpo */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.65)',
            lineHeight: 1.85, marginBottom: 16,
          }}>
            Talvez você tenha decidido não entrar hoje porque ainda está pensando.
            Talvez esteja em dúvida. Ou talvez apenas não seja o momento de investir os{' '}
            <strong style={{ color: 'rgba(245,239,230,0.85)' }}>R$37,90.</strong>
          </p>

          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.75)',
            lineHeight: 1.85, marginBottom: 28, fontStyle: 'italic',
          }}>
            E eu não quero que o valor seja o motivo que impeça você de iniciar sua travessia.
            Por isso,{' '}
            <strong style={{ fontStyle: 'normal', color: '#d4ae6e' }}>
              somente nesta página,
            </strong>{' '}
            você pode garantir seu acesso completo com uma condição especial.
          </p>
        </motion.div>

        {/* Você continuará recebendo */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36, duration: 0.5 }}
        >
          <p style={{
            fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(212,174,110,0.7)', fontWeight: 700, marginBottom: 16,
          }}>
            Você continuará recebendo:
          </p>

          <div style={{ marginBottom: 32 }}>
            {downsellItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.07, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  padding: '11px 0',
                  borderBottom: i < downsellItems.length - 1
                    ? '1px solid rgba(255,255,255,0.05)'
                    : 'none',
                }}
              >
                <span style={{ color: '#be9651', fontWeight: 800, fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 15, color: 'rgba(245,239,230,0.8)', lineHeight: 1.55 }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Preço */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
        >
          <p style={{
            textAlign: 'center', fontSize: 15,
            color: 'rgba(245,239,230,0.6)',
            lineHeight: 1.75, marginBottom: 24,
          }}>
            Tudo exatamente igual.{' '}
            <strong style={{ color: 'rgba(245,239,230,0.85)' }}>
              A única diferença é o valor.
            </strong>{' '}
            Ao invés de R$37,90…
          </p>

          {/* Bloco de preço destacado */}
          <div style={{
            textAlign: 'center', marginBottom: 28,
            padding: '24px 20px',
            background: 'rgba(190,130,40,0.1)',
            borderRadius: 18,
            border: '1px solid rgba(190,130,40,0.25)',
          }}>
            <p style={{
              fontSize: 14, color: 'rgba(245,239,230,0.35)',
              marginBottom: 6,
              textDecoration: 'line-through',
              letterSpacing: '0.04em',
            }}>
              R$ 37,90
            </p>
            <p style={{
              fontSize: 13, color: 'rgba(245,239,230,0.5)',
              marginBottom: 10,
            }}>
              Hoje você pode entrar por apenas
            </p>
            <p style={{
              fontSize: 'clamp(42px, 10vw, 54px)',
              fontWeight: 900, color: '#d4ae6e',
              lineHeight: 1, letterSpacing: '-1.5px',
              marginBottom: 8,
            }}>
              R$ 19,90
            </p>
            <p style={{
              fontSize: 13, color: 'rgba(212,174,110,0.6)',
              fontWeight: 600, letterSpacing: '0.04em',
            }}>
              Menos da metade do investimento original
            </p>
          </div>

          {/* Urgência */}
          <p style={{
            fontSize: 13, color: 'rgba(245,239,230,0.5)',
            lineHeight: 1.8, marginBottom: 8, textAlign: 'center',
          }}>
            <strong style={{ color: '#f87171', fontWeight: 700 }}>
              Atenção:
            </strong>{' '}
            Assim que você sair desta página, esta condição desaparece.
          </p>
          <p style={{
            fontSize: 14, color: 'rgba(245,239,230,0.7)',
            lineHeight: 1.8, marginBottom: 28, textAlign: 'center',
            fontStyle: 'italic',
          }}>
            A Programação do Egito já roubou tempo demais da sua vida.{' '}
            <strong style={{ fontStyle: 'normal', color: 'rgba(245,239,230,0.9)' }}>
              Não permita que mais um dia passe sem iniciar sua travessia.
            </strong>
          </p>

          {/* CTA dourado */}
          <motion.button
            whileHover={{ scale: 1.025, boxShadow: '0 12px 44px rgba(190,130,40,0.5)' }}
            whileTap={{ scale: 0.975 }}
            onClick={onStay}
            style={{
              width: '100%', padding: '19px',
              borderRadius: 16, border: 'none',
              background: 'linear-gradient(135deg, #be9651 0%, #d4ae6e 60%, #c9a05a 100%)',
              color: '#1c1005', fontSize: 17, fontWeight: 800,
              cursor: 'pointer', letterSpacing: '0.02em',
              boxShadow: '0 4px 28px rgba(190,130,40,0.35)',
              marginBottom: 20,
              transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
            }}
          >
            QUERO ENTRAR POR R$ 19,90 🗝️
          </motion.button>

          <p style={{
            textAlign: 'center', fontSize: 12,
            color: 'rgba(245,239,230,0.22)', lineHeight: 1.8,
            fontStyle: 'italic',
          }}>
            Deus não te trouxe até aqui para te deixar parada.
          </p>
        </motion.div>

      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   APP PRINCIPAL
───────────────────────────────────────────── */
export default function App() {
  const [screen, setScreen] = useState('intro')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [profileId, setProfileId] = useState(1)
  const [showExitPopup, setShowExitPopup] = useState(false)

  // Back button trap para quiz / loading / result
  useEffect(() => {
    if (screen !== 'quiz' && screen !== 'loading' && screen !== 'result') return

    history.pushState(null, '', window.location.href)
    const handlePop = () => {
      setShowExitPopup(true)
      history.pushState(null, '', window.location.href)
    }
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [screen])

  // Back button trap para CTA — vai para tela downsell
  useEffect(() => {
    if (screen !== 'cta') return

    history.pushState(null, '', window.location.href)
    const handlePop = () => {
      setScreen('downsell')
    }
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [screen])

  const handleAnswer = (opt) => {
    const newAnswers = [...answers, opt]
    setAnswers(newAnswers)
    if (step + 1 >= TOTAL) {
      setProfileId(computeProfile(newAnswers))
      setScreen('loading')
    } else {
      setStep(s => s + 1)
    }
  }

  const question = questions[step]
  const commonProps = { question, onAnswer: handleAnswer, step: step + 1, total: TOTAL }

  return (
    <>
      {/* Popup quiz/result */}
      <AnimatePresence>
        {showExitPopup && (
          <ExitPopup key="exit-popup" onContinue={() => setShowExitPopup(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {screen === 'intro' && <IntroScreen key="intro" onStart={() => setScreen('quiz')} />}
        {screen === 'loading' && <LoadingScreen key="loading" onComplete={() => setScreen('result')} />}
        {screen === 'result' && <ResultScreen key="result" profileId={profileId} onContinue={() => setScreen('cta')} />}
        {screen === 'cta' && <CTAScreen key="cta" profileId={profileId} />}
        {screen === 'downsell' && (
          <DownsellScreen key="downsell" onStay={() => setScreen('cta')} />
        )}
        {screen === 'quiz' && question?.type === 'single' && (
          <SingleChoice key={step} {...commonProps} />
        )}
      </AnimatePresence>
    </>
  )
}
