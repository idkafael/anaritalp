import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Logo from '../components/Logo'

const profileHeadlines = {
  1: {
    tag: 'O Egito da Paz Roubada',
    sub: 'Assista o vídeo abaixo e descubra como sair dessa prisão emocional e viver com paz em 7 dias.',
  },
  2: {
    tag: 'O Egito do Propósito Destruído',
    sub: 'Assista o vídeo abaixo e descubra como reencontrar sua direção e destravar sua identidade em 7 dias.',
  },
  3: {
    tag: 'O Egito da Alma Quebrantada',
    sub: 'Assista o vídeo abaixo e descubra como ser restaurada e sair do esgotamento emocional em 7 dias.',
  },
  4: {
    tag: 'O Egito da Escrava do Medo',
    sub: 'Assista o vídeo abaixo e descubra como avançar com coragem e sair da paralisia em 7 dias.',
  },
}

function Section({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function CTAScreen({ profileId = 1, onBuy }) {
  const hl = profileHeadlines[profileId] || profileHeadlines[1]

  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://scripts.converteai.net/b56885d9-7ea4-4b84-b38e-5cdb1c1e45a9/players/6a35b5d8a01c983820390e8b/v4/player.js'
    s.async = true
    document.head.appendChild(s)
  }, [])

  return (
    <div className="app-screen" style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0a2e2e 0%, #0F3A3A 40%, #0d3535 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '16px 24px 60px',
      position: 'relative', overflowX: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 640, height: 380,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Sparkles */}
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 90, right: 26, pointerEvents: 'none' }}
      >
        <svg width={14} height={14} viewBox="0 0 24 24" fill="none">
          <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" fill="rgba(190,150,81,0.6)" />
        </svg>
      </motion.div>

      <Logo />

      <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 1 }}>

        {/* ── 1. LABEL ── */}
        <Section delay={0.05}>
          <div style={{ textAlign: 'center', marginBottom: 14 }}>
            <span style={{
              fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase',
              color: 'rgba(190,150,81,0.7)', fontWeight: 700,
            }}>
              ✦ &nbsp; Próximo Passo &nbsp; ✦
            </span>
          </div>
        </Section>

        {/* ── 2. HEADLINE ── */}
        <Section delay={0.12}>
          <h1 style={{
            textAlign: 'center',
            fontSize: 'clamp(22px, 5.5vw, 30px)',
            fontWeight: 800, color: '#f5efe6',
            marginBottom: 10, lineHeight: 1.2,
            letterSpacing: '-0.4px',
          }}>
            Seu Egito foi identificado:{' '}
            <span style={{ color: '#d4ae6e' }}>{hl.tag}.</span>
          </h1>
        </Section>

        {/* ── 3. SUBHEADLINE ── */}
        <Section delay={0.18}>
          <p style={{
            textAlign: 'center', fontSize: 15,
            color: '#ffffff',
            lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic',
          }}>
            {hl.sub}
          </p>
        </Section>

        {/* ── 4. VSL ── */}
        <Section delay={0.22}>
          <div style={{
            width: '100%',
            borderRadius: 18, overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
            border: '1px solid rgba(190,150,81,0.15)',
          }}>
            <vturb-smartplayer
              id="vid-6a35b5d8a01c983820390e8b"
              style={{ display: 'block', margin: '0 auto', width: '100%' }}
            />
          </div>
        </Section>

      </div>
    </div>
  )
}
