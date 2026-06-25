import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Logo from '../components/Logo'

const DURATION = 3500 // ms

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const t = setTimeout(onComplete, DURATION)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <div className="app-screen" style={{
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

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
        style={{ position: 'relative', display: 'inline-flex' }}
      >
        <svg width={120} height={120} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={60} cy={60} r={52} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={6} />
          <motion.circle
            cx={60} cy={60} r={52} fill="none"
            stroke="url(#gold-grad)" strokeWidth={6}
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 52}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: DURATION / 1000, ease: 'linear' }}
          />
          <defs>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#be9651" />
              <stop offset="100%" stopColor="#d4ae6e" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  )
}
