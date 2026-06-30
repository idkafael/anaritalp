import { motion } from 'framer-motion'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export default function OptionButton({ emoji, text, onClick, selected, checkbox, index = 0 }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.09, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ y: -2, boxShadow: '0 8px 28px rgba(0,0,0,0.25)', transition: { duration: 0.18 } }}
      whileTap={{ scale: 0.98 }}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 13,
        padding: '14px 16px 14px 14px',
        borderRadius: 16,
        border: selected
          ? '1.5px solid rgba(190,150,81,0.55)'
          : '1.5px solid rgba(255,255,255,0.07)',
        background: selected
          ? 'linear-gradient(135deg, rgba(190,150,81,0.13) 0%, rgba(190,150,81,0.05) 100%)'
          : 'rgba(255,255,255,0.03)',
        cursor: 'pointer',
        textAlign: 'left',
        marginBottom: 10,
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(6px)',
        transition: 'background 0.2s, border 0.2s',
      }}
    >
      {/* Barra acento esquerda */}
      <motion.div
        animate={{ opacity: selected ? 1 : 0, scaleY: selected ? 1 : 0.3 }}
        transition={{ duration: 0.22 }}
        style={{
          position: 'absolute', left: 0, top: '15%', bottom: '15%', width: 3,
          borderRadius: '0 3px 3px 0',
          background: 'linear-gradient(180deg, #be9651, #d4ae6e)',
          transformOrigin: 'center',
        }}
      />

      {/* Brilho sutil no selected */}
      {selected && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 20% 50%, rgba(190,150,81,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Badge da letra */}
      <div style={{
        width: 30, height: 30, borderRadius: 9, flexShrink: 0,
        background: selected
          ? 'linear-gradient(135deg, rgba(190,150,81,0.25), rgba(190,150,81,0.12))'
          : 'rgba(255,255,255,0.05)',
        border: selected
          ? '1px solid rgba(190,150,81,0.45)'
          : '1px solid rgba(255,255,255,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, fontWeight: 800,
        color: selected ? '#d4ae6e' : 'rgba(245,239,230,0.28)',
        transition: 'all 0.2s',
        letterSpacing: '0.02em',
      }}>
        {LETTERS[index]}
      </div>

      {/* Emoji */}
      <span style={{ fontSize: 22, flexShrink: 0, lineHeight: 1 }}>{emoji}</span>

      {/* Texto */}
      <span style={{
        flex: 1, fontSize: 15, lineHeight: 1.45,
        color: selected ? '#f5efe6' : 'rgba(245,239,230,0.8)',
        fontWeight: selected ? 500 : 400,
        transition: 'color 0.2s',
      }}>
        {text}
      </span>

      {/* Seta / checkbox */}
      {checkbox ? (
        <motion.div
          animate={{
            background: selected ? '#be9651' : 'transparent',
            borderColor: selected ? '#be9651' : 'rgba(190,150,81,0.35)',
          }}
          style={{
            width: 22, height: 22, borderRadius: 7, flexShrink: 0,
            border: '1.5px solid rgba(190,150,81,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}
        >
          {selected && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              style={{ color: '#0F3A3A', fontSize: 11, fontWeight: 900, lineHeight: 1 }}
            >✓</motion.span>
          )}
        </motion.div>
      ) : (
        <motion.span
          animate={{
            x: selected ? 3 : 0,
            color: selected ? '#be9651' : 'rgba(190,150,81,0.25)',
          }}
          style={{ fontSize: 20, flexShrink: 0, lineHeight: 1 }}
        >
          ›
        </motion.span>
      )}
    </motion.button>
  )
}
