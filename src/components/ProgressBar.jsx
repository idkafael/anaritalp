import { motion } from 'framer-motion'

export default function ProgressBar({ current, total }) {
  const pct = (current / total) * 100

  return (
    <div style={{ width: '100%', maxWidth: 460, margin: '0 auto 28px', padding: '0 4px' }}>
      {/* Label */}
      <div style={{ marginBottom: 8 }}>
        <span style={{
          fontSize: 10,
          color: '#ffffff',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          fontWeight: 700,
        }}>
          ✦ SEU DIAGNÓSTICO
        </span>
      </div>

      {/* Track */}
      <div style={{
        position: 'relative',
        height: 6,
        borderRadius: 99,
        background: 'rgba(255,255,255,0.07)',
        overflow: 'hidden',
      }}>
        {/* Fill */}
        <motion.div
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          style={{
            position: 'absolute',
            top: 0, left: 0, bottom: 0,
            borderRadius: 99,
            background: 'linear-gradient(90deg, #be9651, #d4ae6e)',
          }}
        />
        {/* Shimmer sweep on the fill */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
          style={{
            position: 'absolute',
            top: 0, bottom: 0,
            width: '40%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
            borderRadius: 99,
          }}
        />
        {/* Glow dot at the head */}
        <motion.div
          initial={false}
          animate={{ left: `${pct}%` }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#d4ae6e',
            boxShadow: '0 0 8px rgba(212,174,110,0.9)',
          }}
        />
      </div>
    </div>
  )
}
