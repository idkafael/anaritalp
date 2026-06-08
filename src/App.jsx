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
   POPUP 1 — Quiz / Loading / Result
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
        {/* Ícone de alerta */}
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
   POPUP 2 — Página de oferta (downsell)
   Aparece quando a usuária tenta sair da página CTA
───────────────────────────────────────────── */
const downsellItems = [
  'O GPS da Terra Prometida',
  'As 7 etapas da travessia',
  'O Aulão Especial de Diagnóstico',
  'A Comunidade Chamadas Para Vencer',
  'Garantia de 7 dias',
]

function DownsellPopup({ onContinue }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        style={{
          width: '100%', maxWidth: 420,
          background: 'linear-gradient(160deg, #0d3535 0%, #091e1e 100%)',
          borderRadius: 24, padding: '32px 26px 28px',
          border: '1px solid rgba(190,150,81,0.25)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.8)',
          margin: 'auto',
        }}
      >
        {/* Label de urgência */}
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <span style={{
            fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'rgba(190,150,81,0.7)', fontWeight: 700,
          }}>
            ✦ &nbsp; Condição Especial &nbsp; ✦
          </span>
        </div>

        {/* Headline */}
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(18px, 5vw, 22px)',
          fontWeight: 800, color: '#f5efe6',
          lineHeight: 1.25, marginBottom: 14,
          letterSpacing: '-0.3px',
        }}>
          ATENÇÃO — ESPERE.
        </h2>

        <p style={{
          textAlign: 'center', fontSize: 14,
          color: 'rgba(245,239,230,0.7)',
          lineHeight: 1.75, marginBottom: 18,
        }}>
          Antes de fechar esta página, eu quero fazer uma última proposta para você.
        </p>

        {/* Corpo */}
        <p style={{
          fontSize: 14, color: 'rgba(245,239,230,0.6)',
          lineHeight: 1.8, marginBottom: 20,
        }}>
          Talvez você tenha decidido não entrar hoje porque ainda está pensando. Talvez esteja em dúvida. Ou talvez apenas não seja o momento de investir os R$37,90.
        </p>

        <p style={{
          fontSize: 14, color: 'rgba(245,239,230,0.75)',
          lineHeight: 1.8, marginBottom: 20, fontStyle: 'italic',
        }}>
          E eu não quero que o valor seja o motivo que impeça você de iniciar sua travessia. Por isso, somente nesta página, você pode garantir seu acesso completo com uma condição especial.
        </p>

        {/* Divisor */}
        <div style={{
          height: 1, marginBottom: 18,
          background: 'linear-gradient(90deg, transparent, rgba(190,150,81,0.25), transparent)',
        }} />

        {/* Você continua recebendo */}
        <p style={{
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(190,150,81,0.65)', fontWeight: 700,
          marginBottom: 12,
        }}>
          Você continuará recebendo:
        </p>

        <div style={{ marginBottom: 20 }}>
          {downsellItems.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 10,
              padding: '8px 0',
              borderBottom: i < downsellItems.length - 1
                ? '1px solid rgba(255,255,255,0.05)'
                : 'none',
            }}>
              <span style={{ color: '#be9651', fontWeight: 800, fontSize: 13, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 13, color: 'rgba(245,239,230,0.75)', lineHeight: 1.5 }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Preço riscado → novo */}
        <div style={{
          textAlign: 'center', marginBottom: 20,
          padding: '16px',
          background: 'rgba(190,150,81,0.07)',
          borderRadius: 14,
          border: '1px solid rgba(190,150,81,0.18)',
        }}>
          <p style={{
            fontSize: 13, color: 'rgba(245,239,230,0.4)',
            marginBottom: 4, textDecoration: 'line-through',
          }}>
            De R$ 37,90
          </p>
          <p style={{
            fontSize: 13, color: 'rgba(245,239,230,0.55)',
            marginBottom: 6,
          }}>
            Tudo exatamente igual. A única diferença é o valor.
          </p>
          <p style={{
            fontSize: 28, fontWeight: 800,
            color: '#d4ae6e', lineHeight: 1,
            letterSpacing: '-0.5px',
          }}>
            R$ 19,90
          </p>
          <p style={{
            fontSize: 12, color: 'rgba(190,150,81,0.6)',
            marginTop: 4,
          }}>
            Menos da metade do investimento original
          </p>
        </div>

        {/* Urgência */}
        <p style={{
          fontSize: 13, color: 'rgba(245,239,230,0.55)',
          lineHeight: 1.75, marginBottom: 20, textAlign: 'center',
          fontStyle: 'italic',
        }}>
          Assim que você sair desta página, esta condição desaparece.
          A Programação do Egito já roubou tempo demais da sua vida.
          Não permita que mais um dia passe sem iniciar sua travessia.
        </p>

        {/* CTA dourado */}
        <motion.button
          whileHover={{ scale: 1.03, boxShadow: '0 10px 36px rgba(190,150,81,0.45)' }}
          whileTap={{ scale: 0.97 }}
          onClick={onContinue}
          style={{
            width: '100%', padding: '17px',
            borderRadius: 14, border: 'none',
            background: 'linear-gradient(135deg, #be9651, #d4ae6e)',
            color: '#0F3A3A', fontSize: 15, fontWeight: 800,
            cursor: 'pointer', letterSpacing: '0.02em',
            boxShadow: '0 4px 24px rgba(190,150,81,0.3)',
            marginBottom: 12,
          }}
        >
          QUERO ENTRAR POR R$ 19,90 🗝️
        </motion.button>

        <p style={{
          textAlign: 'center', fontSize: 11,
          color: 'rgba(245,239,230,0.25)', lineHeight: 1.6,
          fontStyle: 'italic',
        }}>
          Deus não te trouxe até aqui para te deixar parada.
        </p>
      </motion.div>
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
  const [showDownsell, setShowDownsell] = useState(false)

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

  // Back button trap para CTA — mostra downsell
  useEffect(() => {
    if (screen !== 'cta') return

    history.pushState(null, '', window.location.href)
    const handlePop = () => {
      setShowDownsell(true)
      history.pushState(null, '', window.location.href)
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

      {/* Popup downsell CTA */}
      <AnimatePresence>
        {showDownsell && (
          <DownsellPopup key="downsell" onContinue={() => setShowDownsell(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {screen === 'intro' && <IntroScreen key="intro" onStart={() => setScreen('quiz')} />}
        {screen === 'loading' && <LoadingScreen key="loading" onComplete={() => setScreen('result')} />}
        {screen === 'result' && <ResultScreen key="result" profileId={profileId} onContinue={() => setScreen('cta')} />}
        {screen === 'cta' && <CTAScreen key="cta" profileId={profileId} />}
        {screen === 'quiz' && question?.type === 'single' && (
          <SingleChoice key={step} {...commonProps} />
        )}
      </AnimatePresence>
    </>
  )
}
