import { motion } from 'framer-motion'
import Logo from '../components/Logo'

function Sparkle({ size = 14, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="#d4ae6e" opacity="0.8" />
    </svg>
  )
}

function Cross({ size = 18, color = 'rgba(190,150,81,0.35)', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <rect x="10" y="2" width="4" height="20" rx="2" fill={color} />
      <rect x="2" y="8" width="20" height="4" rx="2" fill={color} />
    </svg>
  )
}

export default function IntroScreen({ onStart }) {
  return (
    <div className="app-screen" style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0a2e2e 0%, #0F3A3A 40%, #0d3535 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 24px',
      position: 'relative', overflowX: 'hidden', overflowY: 'auto',
    }}>

      {/* Background glows */}
      <div style={{
        position: 'absolute', top: '8%', left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 450,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', right: '-10%',
        width: 350, height: 350,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Sparkles decorativos */}
      <Sparkle size={12} style={{
        position: 'absolute', top: 180, right: 36,
        animation: 'float 3.5s ease-in-out 0.3s infinite',
        opacity: 0.6,
      }} />
      <Sparkle size={8} style={{
        position: 'absolute', top: 220, left: 44,
        animation: 'float 4.2s ease-in-out 0.8s infinite',
        opacity: 0.4,
      }} />
      <Cross size={16} style={{
        position: 'absolute', bottom: '28%', right: 28,
        animation: 'float 5s ease-in-out 1s infinite',
      }} />
      <Cross size={10} style={{
        position: 'absolute', bottom: '22%', left: 22,
        animation: 'float 4s ease-in-out 0.5s infinite',
      }} />

      <div style={{ width: '100%', maxWidth: 440, textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Hero: logo + H1 sobrepostos */}
        <div style={{ position: 'relative', marginBottom: 20 }}>
          <div style={{ position: 'relative', top: -20 }}>
            <Logo size={200} />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: 8, left: 0, right: 0,
              padding: '0 12px',
              textAlign: 'center',
              fontSize: 'clamp(22px, 5.5vw, 32px)',
              fontWeight: 800, lineHeight: 1.2,
              color: '#f5efe6',
              letterSpacing: '-0.4px',
            }}
          >
            Você não nasceu para viver presa no{' '}
            <span style={{ color: '#ffffff' }}>Egito que te feriu.</span>
          </motion.h1>
        </div>

        {/* Label pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          style={{ marginBottom: 16 }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#be9651', fontWeight: 700,
            padding: '6px 18px', borderRadius: 99,
            border: '1px solid rgba(190,150,81,0.3)',
            background: 'rgba(190,150,81,0.06)',
          }}>
            <span style={{ opacity: 0.5 }}>✦</span>
            Diagnóstico DNA de Escrava
            <span style={{ opacity: 0.5 }}>✦</span>
          </span>
        </motion.div>

        {/* Parágrafo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          style={{
            fontSize: 16, fontWeight: 400,
            color: '#ffffff', marginBottom: 32, lineHeight: 1.7,
          }}
        >
          Descubra por que tantas mulheres continuam vivendo os mesmos ciclos de medo, insegurança e sensação de esgotamento, mesmo amando a Deus, e como iniciar uma travessia prática rumo à vida que Ele preparou para você.
        </motion.p>

        {/* Stats como badges criativos */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          style={{
            display: 'flex', justifyContent: 'center', gap: 10,
            marginBottom: 32, flexWrap: 'wrap',
          }}
        >
          {[
            { num: '12', label: 'Perguntas', icon: '📋' },
            { num: '2min', label: 'Duração', icon: '⏱' },
            { num: '100%', label: 'Gratuito', icon: '✨' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '10px 18px', borderRadius: 14,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(190,150,81,0.18)',
                minWidth: 82,
              }}
            >
              <span style={{ fontSize: 14, marginBottom: 2 }}>{s.icon}</span>
              <span style={{ fontSize: 18, fontWeight: 800, color: '#be9651', lineHeight: 1, letterSpacing: '-0.5px' }}>{s.num}</span>
              <span style={{ fontSize: 10, color: 'rgba(245,239,230,0.45)', letterSpacing: '0.06em', marginTop: 2, textTransform: 'uppercase' }}>{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Botão com shimmer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ position: 'relative' }}
        >
          {/* Anel pulsante atrás do botão */}
          <div style={{
            position: 'absolute', inset: -4, borderRadius: 18,
            border: '1.5px solid rgba(190,150,81,0.35)',
            animation: 'pulse-ring 2.5s ease-out 1s infinite',
            pointerEvents: 'none',
          }} />

          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(190,150,81,0.5)' }}
            whileTap={{ scale: 0.97 }}
            onClick={onStart}
            style={{
              width: '100%', padding: '18px 24px',
              borderRadius: 14, border: 'none',
              background: 'linear-gradient(135deg, #be9651 0%, #d4ae6e 60%, #c9a05a 100%)',
              color: '#ffffff', fontSize: 16, fontWeight: 800,
              cursor: 'pointer', letterSpacing: '0.03em',
              boxShadow: '0 4px 24px rgba(190,150,81,0.3)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Shimmer sweep no botão */}
            <div style={{
              position: 'absolute', top: 0, bottom: 0, width: '50%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
              animation: 'shimmer-sweep 2.8s ease-in-out 1.2s infinite',
              pointerEvents: 'none',
            }} />
            <span style={{ position: 'relative', zIndex: 1 }}>
              COMEÇAR MEU DIAGNÓSTICO →
            </span>
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 16, fontSize: 12, color: 'rgba(245,239,230,0.3)' }}
        >
          🔐 Suas respostas são 100% confidenciais.
        </motion.p>
      </div>
    </div>
  )
}
