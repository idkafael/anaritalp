import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { questions, computeProfile } from './data/questions'
import IntroScreen from './screens/IntroScreen'
import SingleChoice from './screens/SingleChoice'
import LoadingScreen from './screens/LoadingScreen'
import ResultScreen from './screens/ResultScreen'
import CTAScreen from './screens/CTAScreen'
import UpsellScreen from './screens/UpsellScreen'
import ContinuacaoScreen from './screens/ContinuacaoScreen'
import mobileBg from './assets/FUNDO-DESTORCIDO-MOBILE.jpeg'

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
      window.location.href = '/downsell'
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
      {/* Fundo mobile fixo */}
      <div className="mobile-bg-fixed" style={{ backgroundImage: `url(${mobileBg})` }} />

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
        {screen === 'cta' && <CTAScreen key="cta" profileId={profileId} onBuy={() => setScreen('upsell')} />}
        {screen === 'upsell' && <UpsellScreen key="upsell" onDecline={() => setScreen('continuacao')} />}
        {screen === 'continuacao' && <ContinuacaoScreen key="continuacao" onDecline={() => setScreen('continuacao')} />}
        {screen === 'quiz' && question?.type === 'single' && (
          <SingleChoice key={step} {...commonProps} />
        )}
      </AnimatePresence>
    </>
  )
}
