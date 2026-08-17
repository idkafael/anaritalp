import { useEffect } from 'react'
import { motion } from 'framer-motion'

const profileHeadlines = {
  A: {
    tag: 'A Mulher que Deixa Tudo para Depois',
    sub: 'Assista o vídeo abaixo e descubra por que você deixa tudo para depois e como sair desse ciclo de uma vez por todas.',
  },
  B: {
    tag: 'A Prisioneira da Dúvida',
    sub: 'Assista o vídeo abaixo e descubra por que a dúvida continua te paralisando e o que fazer para mudar isso.',
  },
  C: {
    tag: 'A Mulher Adormecida',
    sub: 'Assista o vídeo abaixo e descubra o que ainda faz sentido na sua vida.',
  },
  D: {
    tag: 'A Mulher sem Direção',
    sub: 'Assista o vídeo abaixo e descubra qual deve ser o seu próximo passo.',
  },
}

export default function CTAScreen({ profileId = 'A', onBuy }) {
  const hl = profileHeadlines[profileId] || profileHeadlines['A']

  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://scripts.converteai.net/6aea4db1-d2a8-4904-b617-b709699fff5d/players/6a8259f1b820f6a10a604450/v4/player.js'
    s.async = true
    document.head.appendChild(s)
  }, [])

  return (
    <div className="app-screen" style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0a2e2e 0%, #0F3A3A 40%, #0d3535 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 20px 60px',
      position: 'relative', overflowX: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '100%', height: 380,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ width: '100%', maxWidth: 480, position: 'relative', zIndex: 1 }}>

        {/* ── H1 ── */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(20px, 5.5vw, 28px)',
            fontWeight: 800, color: '#f5efe6',
            marginBottom: 12, lineHeight: 1.2,
            letterSpacing: '-0.4px',
          }}
        >
          Seu padrão foi identificado:{' '}
          <span style={{ color: '#d4ae6e' }}>{hl.tag}.</span>
        </motion.h1>

        {/* ── H2 ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(14px, 4vw, 16px)',
            color: 'rgba(245,239,230,0.8)',
            lineHeight: 1.75, marginBottom: 20,
            fontStyle: 'italic',
          }}
        >
          {hl.sub}
        </motion.p>

        {/* ── VSL ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.5 }}
          style={{
            width: '100%',
            borderRadius: 16, overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
            border: '1px solid rgba(190,150,81,0.15)',
          }}
        >
          <vturb-smartplayer
            id="vid-6a8259f1b820f6a10a604450"
            style={{ display: 'block', margin: '0 auto', width: '100%' }}
          >
            <div
              className="vturb-player-placeholder"
              style={{
                position: 'relative',
                width: '100%',
                padding: '56.25% 0 0',
                zIndex: 0,
                backgroundColor: 'black',
              }}
            />
          </vturb-smartplayer>
        </motion.div>

      </div>
    </div>
  )
}
