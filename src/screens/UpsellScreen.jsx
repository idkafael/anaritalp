import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../components/Logo'

// Ajuste para coincidir com a duração real do vídeo
const REVEAL_AFTER_SECONDS = 30

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

export default function UpsellScreen({ onDecline }) {
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [buttonRevealed, setButtonRevealed] = useState(false)
  const timerRef = useRef(null)

  const handlePlay = () => {
    if (videoPlaying) return
    setVideoPlaying(true)
    timerRef.current = setInterval(() => {
      setButtonRevealed(prev => {
        if (prev) { clearInterval(timerRef.current); return prev }
        return false
      })
    }, 1000)

    setTimeout(() => {
      clearInterval(timerRef.current)
      setButtonRevealed(true)
    }, REVEAL_AFTER_SECONDS * 1000)
  }

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="app-screen"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #07061a 0%, #0a0820 50%, #060412 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '40px 24px 80px',
        position: 'relative', overflowX: 'hidden',
      }}
    >
      {/* Glow roxo de fundo */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 420,
        background: 'radial-gradient(ellipse, rgba(120,80,220,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '-10%',
        width: 400, height: 400,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Logo />

      <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 1 }}>

        {/* ── LABEL ── */}
        <Section delay={0.05}>
          <div style={{ textAlign: 'center', marginBottom: 18 }}>
            <span style={{
              fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase',
              color: 'rgba(160,120,255,0.65)', fontWeight: 700,
            }}>
              ✦ &nbsp; Oferta Exclusiva &nbsp; ✦
            </span>
          </div>
        </Section>

        {/* ── HEADLINE ── */}
        <Section delay={0.12}>
          <h1 style={{
            textAlign: 'center',
            fontSize: 'clamp(26px, 6.5vw, 36px)',
            fontWeight: 900, color: '#f5efe6',
            lineHeight: 1.15, marginBottom: 16,
            letterSpacing: '-0.6px',
          }}>
            Sua vaga na{' '}
            <span style={{
              background: 'linear-gradient(135deg, #be9651, #d4ae6e)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Saída do Egito
            </span>{' '}
            está confirmada.
          </h1>
        </Section>

        {/* ── SUBHEADLINE ── */}
        <Section delay={0.2}>
          <p style={{
            textAlign: 'center', fontSize: 16,
            color: 'rgba(245,239,230,0.6)',
            lineHeight: 1.8, marginBottom: 28,
            fontStyle: 'italic',
          }}>
            Antes de começar, assista essa aula e descubra como{' '}
            <strong style={{ fontStyle: 'normal', color: 'rgba(245,239,230,0.85)' }}>
              acelerar sua travessia
            </strong>{' '}
            sem passar anos no deserto.
          </p>
        </Section>

        {/* ── VSL ── */}
        <Section delay={0.28}>
          {/* Indicador acima do vídeo */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 8, marginBottom: 12,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#a78bfa',
              boxShadow: '0 0 8px rgba(167,139,250,0.7)',
              display: 'inline-block',
            }} />
            <span style={{
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(167,139,250,0.6)', fontWeight: 600,
            }}>
              Assista até o final
            </span>
          </div>

          {/* Player */}
          <div
            onClick={handlePlay}
            style={{
              width: '100%', aspectRatio: '16/9',
              background: 'rgba(0,0,0,0.6)',
              borderRadius: 20,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: 12,
              marginBottom: 36,
              position: 'relative', overflow: 'hidden',
              cursor: videoPlaying ? 'default' : 'pointer',
            }}
          >
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(120,80,220,0.06) 0%, transparent 60%)',
            }} />

            {!videoPlaying ? (
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 68, height: 68, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 40px rgba(124,58,237,0.4)',
                  position: 'relative', zIndex: 1,
                  transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                }}
              >
                <svg width={28} height={28} viewBox="0 0 24 24" fill="#fff">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            ) : (
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  border: '2px solid rgba(167,139,250,0.3)',
                  borderTopColor: '#a78bfa',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto 12px',
                }} />
                <p style={{
                  fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'rgba(167,139,250,0.5)',
                }}>
                  {buttonRevealed ? 'Aula concluída' : 'Reproduzindo...'}
                </p>
              </div>
            )}

            {/* Barra de progresso */}
            {videoPlaying && !buttonRevealed && (
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
                background: 'rgba(255,255,255,0.07)',
              }}>
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: REVEAL_AFTER_SECONDS, ease: 'linear' }}
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #7c3aed, #a855f7)',
                  }}
                />
              </div>
            )}
          </div>
        </Section>

        {/* ── BOTÃO — aparece após o vídeo ── */}
        <AnimatePresence>
          {buttonRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Divisor ornamental */}
              <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 10, marginBottom: 28,
              }}>
                <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.2))' }} />
                <span style={{ fontSize: 11, color: 'rgba(167,139,250,0.35)', letterSpacing: 6 }}>✦ ✝ ✦</span>
                <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, rgba(167,139,250,0.2))' }} />
              </div>

              <motion.button
                whileHover={{ scale: 1.025, boxShadow: '0 12px 44px rgba(190,150,81,0.5)' }}
                whileTap={{ scale: 0.975 }}
                onClick={() => { window.location.href = 'https://pay.cakto.com.br/7ptoe6a_934162' }}
                style={{
                  width: '100%', padding: '19px',
                  borderRadius: 16, border: 'none',
                  background: 'linear-gradient(135deg, #be9651 0%, #d4ae6e 60%, #c9a05a 100%)',
                  color: '#07061a', fontSize: 16, fontWeight: 900,
                  cursor: 'pointer', letterSpacing: '0.03em',
                  boxShadow: '0 4px 28px rgba(190,150,81,0.35)',
                  marginBottom: 20,
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                }}
              >
                SIM, QUERO ACELERAR MINHA TRAVESSIA 🔥
              </motion.button>

              <p style={{
                textAlign: 'center', fontSize: 12,
                color: 'rgba(245,239,230,0.22)', lineHeight: 1.8,
                fontStyle: 'italic',
                marginBottom: 16,
              }}>
                Deus não te trouxe até aqui para te deixar parada.
              </p>

              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={onDecline}
                  style={{
                    background: 'none', border: 'none',
                    fontSize: 12, color: 'rgba(245,239,230,0.2)',
                    cursor: 'pointer', lineHeight: 1.6,
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(245,239,230,0.08)',
                    fontStyle: 'italic',
                    padding: '6px 0',
                  }}
                >
                  Não, obrigada. Não preciso acelerar minha travessia agora.
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </motion.div>
  )
}
