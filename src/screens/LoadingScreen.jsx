import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../components/Logo'

const steps = [
  { label: 'Analisando suas respostas...', pct: 30 },
  { label: 'Preparando seu diagnóstico de libertação...', pct: 65 },
  { label: 'Quase lá! Sua jornada para a liberdade está prestes a começar...', pct: 100 },
]

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [stepIdx, setStepIdx] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timers = []

    steps.forEach((s, i) => {
      const delay = i * 1100
      timers.push(setTimeout(() => {
        setProgress(s.pct)
        setStepIdx(i)
        if (s.pct === 100) {
          setTimeout(() => setDone(true), 700)
        }
      }, delay))
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0a2e2e 0%, #0F3A3A 40%, #0d3535 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: '48px 24px',
      position: 'relative', overflowX: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 500, height: 400,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <Logo />

      <div style={{ width: '100%', maxWidth: 380, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Circular progress */}
          <div style={{ position: 'relative', display: 'inline-flex', marginBottom: 32 }}>
            <svg width={120} height={120} style={{ transform: 'rotate(-90deg)' }}>
              <circle cx={60} cy={60} r={52} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={6} />
              <motion.circle
                cx={60} cy={60} r={52} fill="none"
                stroke="url(#gold-gradient)" strokeWidth={6}
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 52}`}
                animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - progress / 100) }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
              />
              <defs>
                <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#be9651" />
                  <stop offset="100%" stopColor="#d4ae6e" />
                </linearGradient>
              </defs>
            </svg>
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column',
            }}>
              <motion.span
                animate={{ opacity: 1 }}
                style={{ fontSize: 26, fontWeight: 800, color: '#be9651' }}
              >
                {progress}%
              </motion.span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={stepIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              style={{
                fontSize: 15, color: 'rgba(245,239,230,0.7)',
                marginBottom: 40, lineHeight: 1.6, padding: '0 16px',
              }}
            >
              {steps[stepIdx]?.label}
            </motion.p>
          </AnimatePresence>

          {/* Step dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 40 }}>
            {steps.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width: i === stepIdx ? 20 : 6,
                  background: i <= stepIdx ? '#be9651' : 'rgba(255,255,255,0.15)',
                }}
                transition={{ duration: 0.3 }}
                style={{ height: 6, borderRadius: 99 }}
              />
            ))}
          </div>

          <AnimatePresence>
            {done && (
              <motion.button
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(190,150,81,0.4)' }}
                whileTap={{ scale: 0.97 }}
                onClick={onComplete}
                style={{
                  padding: '16px 48px', borderRadius: 14, border: 'none',
                  background: 'linear-gradient(135deg, #be9651, #d4ae6e)',
                  color: '#0F3A3A', fontSize: 16, fontWeight: 700,
                  cursor: 'pointer', letterSpacing: '0.02em',
                  boxShadow: '0 4px 24px rgba(190,150,81,0.3)',
                }}
              >
                Ver meu resultado →
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
