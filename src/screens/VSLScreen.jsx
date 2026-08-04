import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Logo from '../components/Logo'
import mobileBg from '../assets/FUNDO-DESTORCIDO-MOBILE.jpeg'

export default function VSLScreen() {
  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://scripts.converteai.net/ddbb824d-99d3-4461-9b8a-b0bab6039eaa/players/6a6d708c2271152004192f2a/v4/player.js'
    s.async = true
    document.head.appendChild(s)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      position: 'relative', overflowX: 'hidden',
      background: 'transparent',
    }}>
      {/* Mobile background fixo */}
      <div className="mobile-bg-fixed" style={{ backgroundImage: `url(${mobileBg})` }} />

      {/* Glow central */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 640, height: 400,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.08) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ── TOPO: barra anúncio ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        style={{
          width: '100%',
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(190,150,81,0.2)',
          padding: '10px 24px',
          textAlign: 'center',
          position: 'relative', zIndex: 2,
        }}
      >
        <p style={{
          fontSize: 10.5, letterSpacing: '0.22em',
          textTransform: 'uppercase', fontWeight: 700,
          color: 'rgba(245,239,230,0.75)',
        }}>
          Vídeo exclusivo para mulheres que sentem que sua vida está travada
        </p>
      </motion.div>

      {/* ── BADGE EXCLUSIVO ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.45 }}
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, #be9651, #d4ae6e)',
          padding: '8px 24px',
          textAlign: 'center',
          position: 'relative', zIndex: 2,
        }}
      >
        <p style={{
          fontSize: 11, letterSpacing: '0.28em',
          textTransform: 'uppercase', fontWeight: 900,
          color: '#0F3A3A',
        }}>
          ✦ &nbsp; Exclusivo para Mulher 40+ &nbsp; ✦
        </p>
      </motion.div>

      {/* ── CONTEÚDO ── */}
      <div style={{
        width: '100%', maxWidth: 460,
        padding: '0 24px 60px',
        position: 'relative', zIndex: 1,
      }}>
        <Logo />

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.5 }}
          style={{
            textAlign: 'center',
            fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', fontWeight: 700,
            color: 'rgba(190,150,81,0.85)',
            marginBottom: 10,
          }}
        >
          Vídeo Exclusivo Revela Como…
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(20px, 5vw, 28px)',
            fontWeight: 800, color: '#f5efe6',
            lineHeight: 1.25, letterSpacing: '-0.3px',
            marginBottom: 24,
          }}
        >
          Desinstalar a Programação do Egito pode ser a chave que faltava para viver o{' '}
          <span style={{ color: '#d4ae6e' }}>propósito que Deus preparou para você.</span>
        </motion.h1>

        {/* VSL Player */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.55 }}
          style={{
            width: '100%', borderRadius: 16, overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            border: '1px solid rgba(190,150,81,0.15)',
            marginBottom: 0,
          }}
        >
          <vturb-smartplayer
            id="vid-6a6d708c2271152004192f2a"
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

        {/* ── BLOCO ABAIXO DO VÍDEO ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.5 }}
          style={{
            background: 'rgba(0,0,0,0.35)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(190,150,81,0.15)',
            borderTop: 'none',
            borderRadius: '0 0 16px 16px',
            padding: '16px 20px 20px',
            marginBottom: 24,
            textAlign: 'center',
          }}
        >
          {/* Sub hed */}
          <p style={{
            fontSize: 13.5, color: '#f5efe6',
            fontWeight: 600, marginBottom: 10, lineHeight: 1.5,
          }}>
            Assista até o final, tem 2 presentes especiais para você!
          </p>

          {/* Contador ao vivo */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(190,150,81,0.15)',
            border: '1px solid rgba(190,150,81,0.3)',
            borderRadius: 99, padding: '5px 14px',
            marginBottom: 12,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#4ade80',
              boxShadow: '0 0 6px rgba(74,222,128,0.8)',
              flexShrink: 0,
              animation: 'pulse-ring 1.8s ease-out infinite',
            }} />
            <p style={{
              fontSize: 12, color: '#d4ae6e',
              fontWeight: 700, letterSpacing: '0.04em',
            }}>
              275 pessoas estão assistindo agora!
            </p>
          </div>

          {/* Body */}
          <p style={{
            fontSize: 13.5, color: 'rgba(245,239,230,0.7)',
            lineHeight: 1.75, fontStyle: 'italic',
          }}>
            Essa é a oportunidade que você buscava para descobrir por que continua repetindo os mesmos ciclos há anos e transformar sua vida de uma vez por todas.
          </p>
        </motion.div>

      </div>
    </div>
  )
}
