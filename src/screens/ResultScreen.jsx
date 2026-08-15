import { motion } from 'framer-motion'
import Logo from '../components/Logo'
import { profiles } from '../data/profiles'
import perfil1 from '../assets/perfil1.png'
import perfil2 from '../assets/perfil2.png'
import perfil3 from '../assets/perfil3.png'
import perfil4 from '../assets/perfil4.png'

const PROFILE_IMAGES = { A: perfil1, B: perfil2, C: perfil3, D: perfil4 }

function Fade({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function ResultScreen({ profileId = 'A', onContinue }) {
  const p = profiles[profileId] || profiles['A']
  const profileImage = PROFILE_IMAGES[profileId] || PROFILE_IMAGES['A']

  return (
    <div
      className="app-screen"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #0a2e2e 0%, #0F3A3A 45%, #0d3535 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '28px 24px 88px',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 420,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Sparkles */}
      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 84, right: 22, pointerEvents: 'none' }}
      >
        <svg width={13} height={13} viewBox="0 0 24 24" fill="none">
          <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" fill="rgba(190,150,81,0.5)" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ opacity: [0.12, 0.4, 0.12] }}
        transition={{ duration: 4.5, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 135, left: 18, pointerEvents: 'none' }}
      >
        <svg width={8} height={8} viewBox="0 0 24 24" fill="none">
          <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" fill="rgba(190,150,81,0.5)" />
        </svg>
      </motion.div>

      <Logo />

      <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 1 }}>

        {/* ── LABEL ── */}
        <Fade delay={0.04}>
          <p style={{
            textAlign: 'center',
            fontSize: 9,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(190,150,81,0.6)',
            fontWeight: 700,
            marginBottom: 8,
          }}>
            SEU RESULTADO
          </p>
        </Fade>

        {/* ── PROFILE TAG ── */}
        <Fade delay={0.1}>
          <h1 style={{
            textAlign: 'center',
            fontSize: 'clamp(20px, 5.5vw, 26px)',
            fontWeight: 800,
            color: '#d4ae6e',
            lineHeight: 1.2,
            letterSpacing: '-0.3px',
            marginBottom: 20,
          }}>
            {p.profileTag}
          </h1>
        </Fade>

        {/* ── IMAGEM ── */}
        <Fade delay={0.16}>
          <div style={{
            width: '100%',
            marginBottom: 24,
            borderRadius: 18,
            overflow: 'hidden',
            boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
            border: '1px solid rgba(190,150,81,0.13)',
            position: 'relative',
          }}>
            <img
              src={profileImage}
              alt={p.profileTag}
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: 70,
              background: 'linear-gradient(to top, rgba(10,46,46,0.65) 0%, transparent 100%)',
            }} />
          </div>
        </Fade>

        {/* ── TÍTULO ── */}
        <Fade delay={0.22}>
          <p style={{
            fontSize: 15,
            color: '#f5efe6',
            fontWeight: 700,
            lineHeight: 1.55,
            marginBottom: 18,
            textAlign: 'center',
          }}>
            {p.title}
          </p>
        </Fade>

        {/* ── DESCRIÇÃO ── */}
        <Fade delay={0.28}>
          <div style={{
            background: 'rgba(5,22,22,0.55)',
            border: '1px solid rgba(190,150,81,0.12)',
            borderRadius: 16,
            padding: '18px 18px',
            marginBottom: 28,
          }}>
            {p.description.map((para, i) => (
              <p key={i} style={{
                fontSize: 14.5,
                color: i === p.description.length - 1
                  ? 'rgba(212,174,110,0.9)'
                  : 'rgba(245,239,230,0.72)',
                lineHeight: 1.85,
                marginBottom: i < p.description.length - 1 ? 14 : 0,
                fontStyle: i === p.description.length - 1 ? 'italic' : 'normal',
              }}>
                {para}
              </p>
            ))}
          </div>
        </Fade>

        {/* ── DIVISOR ── */}
        <Fade delay={0.34}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(190,150,81,0.22))' }} />
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" fill="rgba(190,150,81,0.4)" />
            </svg>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, rgba(190,150,81,0.22))' }} />
          </div>
        </Fade>

        {/* ── BOTÃO CTA ── */}
        <Fade delay={0.4}>
          <div style={{ position: 'relative', marginBottom: 10 }}>
            <div style={{
              position: 'absolute', inset: -3, borderRadius: 19,
              border: '1px solid rgba(190,150,81,0.28)',
              animation: 'pulse-ring 2.8s ease-out 0.8s infinite',
              pointerEvents: 'none',
            }} />
            <motion.button
              whileHover={{ scale: 1.025, boxShadow: '0 16px 48px rgba(190,150,81,0.45)' }}
              whileTap={{ scale: 0.975 }}
              onClick={onContinue}
              style={{
                width: '100%',
                padding: '19px 14px',
                borderRadius: 16,
                border: 'none',
                background: 'linear-gradient(135deg, #be9651 0%, #d4ae6e 60%, #c9a05a 100%)',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 800,
                cursor: 'pointer',
                letterSpacing: '0.04em',
                boxShadow: '0 4px 32px rgba(190,150,81,0.35)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                textTransform: 'uppercase',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, bottom: 0, width: '45%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
                animation: 'shimmer-sweep 3s ease-in-out 1.2s infinite',
                pointerEvents: 'none',
              }} />
              <span style={{ position: 'relative', zIndex: 1 }}>{p.buttonText}</span>
            </motion.button>
          </div>
        </Fade>

      </div>
    </div>
  )
}
