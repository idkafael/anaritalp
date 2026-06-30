import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Logo from '../components/Logo'

const DURATION = 3500

const phrases = [
  'Analisando sua travessia…',
  'Identificando seu Egito…',
  'Preparando seu diagnóstico…',
]

function FloatingCross({ x, y, size, delay, duration }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: [0, 0.4, 0], y: -40 }}
      transition={{ delay, duration, repeat: Infinity, repeatDelay: 1.5, ease: 'easeOut' }}
      style={{
        position: 'absolute', left: x, top: y,
        pointerEvents: 'none',
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="10" y="2" width="4" height="20" rx="2" fill="rgba(190,150,81,0.7)" />
        <rect x="2" y="8" width="20" height="4" rx="2" fill="rgba(190,150,81,0.7)" />
      </svg>
    </motion.div>
  )
}

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

      {/* Glow central */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 420, height: 420,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Cruzes flutuantes */}
      <FloatingCross x="12%" y="60%" size={14} delay={0.2} duration={2.2} />
      <FloatingCross x="80%" y="55%" size={10} delay={0.8} duration={2.6} />
      <FloatingCross x="22%" y="30%" size={8} delay={1.4} duration={2.0} />
      <FloatingCross x="70%" y="35%" size={16} delay={0.5} duration={2.8} />

      <Logo />

      {/* Círculo animado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
        style={{ position: 'relative', display: 'inline-flex', marginBottom: 28 }}
      >
        {/* Anel externo girando devagar */}
        <div style={{
          position: 'absolute', inset: -12,
          borderRadius: '50%',
          border: '1px dashed rgba(190,150,81,0.2)',
          animation: 'spin-slow 12s linear infinite',
        }} />

        <svg width={120} height={120} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={60} cy={60} r={52} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={6} />
          <motion.circle
            cx={60} cy={60} r={52} fill="none"
            stroke="url(#gold-grad-loading)" strokeWidth={6}
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 52}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: DURATION / 1000, ease: 'linear' }}
          />
          <defs>
            <linearGradient id="gold-grad-loading" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#be9651" />
              <stop offset="100%" stopColor="#d4ae6e" />
            </linearGradient>
          </defs>
        </svg>

        {/* Pombinha no centro */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28,
        }}>
          🕊️
        </div>
      </motion.div>

      {/* Frase animada */}
      <motion.p
        key="phrase"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          fontSize: 14, color: 'rgba(212,174,110,0.75)',
          letterSpacing: '0.06em', fontStyle: 'italic',
          marginBottom: 8, textAlign: 'center',
        }}
      >
        Analisando sua travessia
        {/* Três pontinhos animados */}
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ delay: i * 0.25, duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
          >.</motion.span>
        ))}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          fontSize: 12, color: 'rgba(245,239,230,0.22)',
          textAlign: 'center', fontStyle: 'italic',
          maxWidth: 240,
        }}
      >
        "Pois eu sei os planos que tenho para vocês…"
      </motion.p>
    </div>
  )
}
