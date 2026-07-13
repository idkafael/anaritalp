import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import UpsellScreen from './screens/UpsellScreen'
import ContinuacaoScreen from './screens/ContinuacaoScreen'

export default function EgitoApp() {
  const [screen, setScreen] = useState('upsell')

  return (
    <AnimatePresence mode="wait">
      {screen === 'upsell' && (
        <UpsellScreen
          key="upsell"
          playerId="6a53c3cae83d30401f3af483"
          onDecline={() => setScreen('continuacao')}
        />
      )}
      {screen === 'continuacao' && (
        <ContinuacaoScreen
          key="continuacao"
          onDecline={() => setScreen('continuacao')}
        />
      )}
    </AnimatePresence>
  )
}
