import { motion } from 'framer-motion'

export default function OptionButton({ emoji, text, onClick, selected, checkbox, index = 0 }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.07, duration: 0.35, ease: 'easeOut' }}
      whileHover={{ x: 4, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.98 }}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '15px 18px',
        borderRadius: 14,
        border: selected
          ? '1.5px solid #be9651'
          : '1.5px solid rgba(255,255,255,0.08)',
        background: selected
          ? 'rgba(190,150,81,0.15)'
          : 'rgba(255,255,255,0.04)',
        cursor: 'pointer',
        textAlign: 'left',
        marginBottom: 10,
        backdropFilter: 'blur(8px)',
        transition: 'background 0.2s, border 0.2s',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Shimmer on selected */}
      {selected && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, transparent, rgba(190,150,81,0.06), transparent)',
          pointerEvents: 'none',
        }} />
      )}

      <span style={{ fontSize: 22, flexShrink: 0, lineHeight: 1 }}>{emoji}</span>

      <span style={{
        flex: 1, fontSize: 15, lineHeight: 1.45,
        color: selected ? '#d4ae6e' : 'rgba(245,239,230,0.85)',
        fontWeight: selected ? 500 : 400,
        transition: 'color 0.2s',
      }}>
        {text}
      </span>

      {checkbox ? (
        <span style={{
          width: 20, height: 20, borderRadius: 6, flexShrink: 0,
          border: selected ? 'none' : '1.5px solid rgba(190,150,81,0.4)',
          background: selected ? '#be9651' : 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s',
        }}>
          {selected && <span style={{ color: '#0F3A3A', fontSize: 11, fontWeight: 800 }}>✓</span>}
        </span>
      ) : (
        <span style={{
          color: selected ? '#be9651' : 'rgba(190,150,81,0.3)',
          fontSize: 18, transition: 'color 0.2s',
        }}>›</span>
      )}
    </motion.button>
  )
}
