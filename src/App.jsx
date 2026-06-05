import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { questions, computeProfile } from './data/questions'
import IntroScreen from './screens/IntroScreen'
import SingleChoice from './screens/SingleChoice'
import LoadingScreen from './screens/LoadingScreen'
import ResultScreen from './screens/ResultScreen'
import CTAScreen from './screens/CTAScreen'

const TOTAL = questions.length

export default function App() {
  const [screen, setScreen] = useState('intro')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [profileId, setProfileId] = useState(1)

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

  if (screen === 'intro') return <IntroScreen onStart={() => setScreen('quiz')} />
  if (screen === 'loading') return <LoadingScreen onComplete={() => setScreen('result')} />
  if (screen === 'result') return <ResultScreen profileId={profileId} onContinue={() => setScreen('cta')} />
  if (screen === 'cta') return <CTAScreen />

  const question = questions[step]
  if (!question) return <LoadingScreen onComplete={() => setScreen('result')} />

  const commonProps = { question, onAnswer: handleAnswer, step: step + 1, total: TOTAL }

  return (
    <AnimatePresence mode="wait">
      {question.type === 'single' && <SingleChoice key={step} {...commonProps} />}
    </AnimatePresence>
  )
}
