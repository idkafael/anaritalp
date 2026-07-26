import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Logo from '../components/Logo'

export default function VSLScreen() {
  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://scripts.converteai.net/17320984-884b-4c8f-a1d2-0391db39f795/players/6a53c097ef5db2135c085548/v4/player.js'
    s.async = true
    document.head.appendChild(s)
  }, [])

  return (
    <div style={{
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

      <Logo />

      <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 1 }}>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(22px, 5.5vw, 30px)',
            fontWeight: 800, color: '#f5efe6',
            marginBottom: 10, lineHeight: 1.2,
            letterSpacing: '-0.4px',
          }}
        >
          Seu Egito foi identificado:{' '}
          <span style={{ color: '#d4ae6e' }}>descubra como sair dele de uma vez por todas.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.5 }}
          style={{
            textAlign: 'center', fontSize: 15,
            color: '#ffffff', lineHeight: 1.75,
            marginBottom: 24, fontStyle: 'italic',
          }}
        >
          Assista o vídeo abaixo e descubra como quebrar o ciclo que está mantendo sua vida parada.
        </motion.p>

        {/* VSL */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.55 }}
          style={{
            width: '100%', borderRadius: 18, overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
            border: '1px solid rgba(190,150,81,0.15)',
            marginBottom: 28,
          }}
        >
          <vturb-smartplayer
            id="vid-6a53c097ef5db2135c085548"
            style={{ display: 'block', margin: '0 auto', width: '100%' }}
          >
            <div
              className="vturb-player-placeholder"
              style={{
                position: 'relative', width: '100%',
                padding: '56.25% 0 0', zIndex: 0,
                backgroundColor: 'black',
              }}
            />
          </vturb-smartplayer>
        </motion.div>

        {/* Botão CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'absolute', inset: -3, borderRadius: 19,
            border: '1px solid rgba(190,150,81,0.3)',
            animation: 'pulse-ring 2.8s ease-out 0.6s infinite',
            pointerEvents: 'none',
          }} />
          <motion.button
            whileHover={{ scale: 1.025, boxShadow: '0 12px 44px rgba(190,150,81,0.5)' }}
            whileTap={{ scale: 0.975 }}
            onClick={() => { window.location.href = 'https://pay.cakto.com.br/7ptoe6a_934162' }}
            style={{
              width: '100%', padding: '19px',
              borderRadius: 16, border: 'none',
              background: 'linear-gradient(135deg, #be9651 0%, #d4ae6e 60%, #c9a05a 100%)',
              color: '#ffffff', fontSize: 16, fontWeight: 900,
              cursor: 'pointer', letterSpacing: '0.03em',
              boxShadow: '0 4px 28px rgba(190,150,81,0.35)',
              position: 'relative', overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
            }}
          >
            <div style={{
              position: 'absolute', top: 0, bottom: 0, width: '45%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              animation: 'shimmer-sweep 3s ease-in-out 1s infinite',
              pointerEvents: 'none',
            }} />
            <span style={{ position: 'relative', zIndex: 1 }}>
              QUERO SAIR DO MEU EGITO AGORA →
            </span>
          </motion.button>
        </motion.div>

      </div>
    </div>
  )
}
