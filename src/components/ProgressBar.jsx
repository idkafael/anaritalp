import { motion } from 'framer-motion'

export default function ProgressBar({ current, total }) {
  return (
    <div style={{ width: '100%', maxWidth: 460, margin: '0 auto 28px', padding: '0 4px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{
          fontSize: 10, color: '#ffffff',
          letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700,
        }}>
          ✦ Sua travessia
        </span>
        <span style={{
          fontSize: 11, fontWeight: 700,
          color: 'rgba(190,150,81,0.75)',
          background: 'rgba(190,150,81,0.1)',
          border: '1px solid rgba(190,150,81,0.2)',
          borderRadius: 99, padding: '2px 10px',
        }}>
          {current}/{total}
        </span>
      </div>

      {/* Segmentos */}
      <div style={{ display: 'flex', gap: 5, alignItems: 'flex-end', height: 12 }}>
        {Array.from({ length: total }, (_, i) => {
          const done = i < current
          const active = i === current - 1
          return (
            <motion.div
              key={i}
              initial={false}
              animate={{
                height: active ? 12 : done ? 8 : 5,
                background: done
                  ? 'linear-gradient(90deg, #be9651, #d4ae6e)'
                  : 'rgba(255,255,255,0.07)',
                boxShadow: active ? '0 0 10px rgba(190,150,81,0.7)' : 'none',
              }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                flex: 1,
                borderRadius: 99,
                minHeight: 5,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
