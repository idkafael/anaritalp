import { motion } from 'framer-motion'
import Logo from '../components/Logo'
import { resultProfiles } from '../data/questions'
import perfil1 from '../assets/perfil1.png'
import perfil2 from '../assets/perfil2.png'
import perfil3 from '../assets/perfil3.png'
import perfil4 from '../assets/perfil4.png'

const PROFILE_IMAGES = { 1: perfil1, 2: perfil2, 3: perfil3, 4: perfil4 }

function Fade({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  )
}

function OrnamentalDivider({ color = 'rgba(190,150,81,0.3)' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '28px 0' }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${color})` }} />
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" fill={color} />
      </svg>
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
        <rect x="10" y="2" width="4" height="20" rx="2" fill={color} opacity="0.6" />
        <rect x="2" y="8" width="20" height="4" rx="2" fill={color} opacity="0.6" />
      </svg>
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" fill={color} />
      </svg>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(270deg, transparent, ${color})` }} />
    </div>
  )
}

function WaxSeal({ emoji, profileId }) {
  const colors = {
    1: ['#2d1b5e', '#1a1040'],
    2: ['#1a3a1a', '#0f2a0f'],
    3: ['#3a1a1a', '#2a0f0f'],
    4: ['#1a2a3a', '#0f1a2a'],
  }
  const [from, to] = colors[profileId] || colors[1]
  return (
    <motion.div
      initial={{ scale: 0, rotate: -30 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.2, duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ position: 'relative', width: 88, height: 88, margin: '0 auto 12px' }}
    >
      {/* Anel externo girando */}
      <div style={{
        position: 'absolute', inset: -6, borderRadius: '50%',
        border: '1.5px dashed rgba(190,150,81,0.3)',
        animation: 'spin-slow 18s linear infinite',
      }} />
      {/* Sela */}
      <div style={{
        width: 88, height: 88, borderRadius: '50%',
        background: `radial-gradient(circle at 38% 35%, #d4ae6e, #be9651 45%, #8a6530 80%)`,
        boxShadow: '0 6px 28px rgba(190,150,81,0.45), inset 0 2px 6px rgba(255,255,255,0.2), inset 0 -2px 6px rgba(0,0,0,0.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 36, position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 6, borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.25)',
        }} />
        <span style={{ position: 'relative', zIndex: 1 }}>{emoji}</span>
      </div>
    </motion.div>
  )
}

export default function ResultScreen({ profileId, onContinue }) {
  const p = resultProfiles.find(r => r.id === profileId) || resultProfiles[0]
  const profileImage = PROFILE_IMAGES[profileId] || PROFILE_IMAGES[1]

  return (
    <div className="app-screen" style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0a2e2e 0%, #0F3A3A 45%, #0d3535 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '28px 24px 88px',
      position: 'relative', overflowX: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 420,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Sparkles decorativos */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 80, right: 24, pointerEvents: 'none' }}
      >
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
          <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" fill="rgba(190,150,81,0.5)" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 120, left: 20, pointerEvents: 'none' }}
      >
        <svg width={10} height={10} viewBox="0 0 24 24" fill="none">
          <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" fill="rgba(190,150,81,0.5)" />
        </svg>
      </motion.div>

      <Logo />

      <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 1 }}>

        {/* ── TOPO: label ── */}
        <Fade delay={0.04}>
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <span style={{
              fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'rgba(190,150,81,0.85)', fontWeight: 700,
            }}>
              ✦ &nbsp; Seu Perfil &nbsp; ✦
            </span>
          </div>
        </Fade>

        {/* ── WAXSEAL com emoji do perfil ── */}
        <Fade delay={0.1}>
          <WaxSeal emoji={p.imageEmoji} profileId={profileId} />
          <div style={{ textAlign: 'center', marginBottom: 6 }}>
            <span style={{
              fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#ffffff', fontWeight: 700,
            }}>
              {p.icon} &nbsp; {p.profileTag}
            </span>
          </div>
          <p style={{
            textAlign: 'center', fontSize: 12, fontStyle: 'italic',
            color: 'rgba(255,255,255,0.7)', marginBottom: 14, lineHeight: 1.4,
          }}>
            {p.miniDesc}
          </p>
        </Fade>

        {/* ── H1 ── */}
        <Fade delay={0.18}>
          <h1 style={{
            textAlign: 'center',
            fontSize: 'clamp(24px, 6vw, 32px)',
            fontWeight: 800, color: '#f5efe6',
            marginBottom: 20, lineHeight: 1.15,
            letterSpacing: '-0.5px',
          }}>
            {p.personaTitle}
          </h1>
        </Fade>

        {/* ── IMAGEM DO PERFIL ── */}
        <Fade delay={0.24}>
          <div style={{
            width: '100%', marginBottom: 28,
            borderRadius: 20, overflow: 'hidden',
            boxShadow: '0 12px 48px rgba(0,0,0,0.55)',
            border: '1px solid rgba(190,150,81,0.18)',
            position: 'relative',
          }}>
            <img
              src={profileImage}
              alt={p.profileTag}
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
            {/* Gradiente sutil embaixo da imagem */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
              background: 'linear-gradient(to top, rgba(10,46,46,0.6) 0%, transparent 100%)',
            }} />
          </div>
        </Fade>

        {/* ── BOTÃO CONTINUAR ── */}
        <Fade delay={0.3}>
          <div style={{ position: 'relative', marginBottom: 8 }}>
            <div style={{
              position: 'absolute', inset: -3, borderRadius: 19,
              border: '1px solid rgba(190,150,81,0.3)',
              animation: 'pulse-ring 2.8s ease-out 0.5s infinite',
              pointerEvents: 'none',
            }} />
            <motion.button
              whileHover={{ scale: 1.025, boxShadow: '0 16px 48px rgba(190,150,81,0.45)' }}
              whileTap={{ scale: 0.975 }}
              onClick={onContinue}
              style={{
                width: '100%', padding: '19px',
                borderRadius: 16, border: 'none',
                background: 'linear-gradient(135deg, #be9651 0%, #d4ae6e 60%, #c9a05a 100%)',
                color: '#0F3A3A', fontSize: 16, fontWeight: 800,
                cursor: 'pointer', letterSpacing: '0.04em',
                boxShadow: '0 4px 32px rgba(190,150,81,0.35)',
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
              <span style={{ position: 'relative', zIndex: 1 }}>CONTINUAR 🗝️</span>
            </motion.button>
          </div>
          <p style={{
            textAlign: 'center', fontSize: 12,
            color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, fontStyle: 'italic',
            marginBottom: 0,
          }}>
            Deus não te trouxe até aqui para te deixar parada.
          </p>
        </Fade>

        <OrnamentalDivider />

        {/* ── DESCRIPTION ── */}
        <Fade delay={0.38}>
          <div style={{ marginBottom: 24 }}>
            {p.description.map((d, i) => (
              <p key={i} style={{
                fontSize: 15, color: 'rgba(245,239,230,0.78)',
                lineHeight: 1.85, marginBottom: 12,
              }}>
                {d}
              </p>
            ))}
          </div>
        </Fade>

        {/* ── RED CHALLENGE ── */}
        <Fade delay={0.42}>
          <div style={{
            display: 'flex', gap: 0, marginBottom: 24,
            borderRadius: 14, overflow: 'hidden',
            border: '1px solid rgba(239,68,68,0.15)',
            background: 'rgba(239,68,68,0.05)',
          }}>
            <div style={{
              width: 4, flexShrink: 0,
              background: 'linear-gradient(180deg, #ef4444 0%, rgba(239,68,68,0.2) 100%)',
            }} />
            <div style={{ padding: '14px 16px' }}>
              <p style={{
                fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#f87171', fontWeight: 700, marginBottom: 6,
              }}>
                ⚠ Desafio silencioso no seu caminho
              </p>
              <p style={{
                fontSize: 15, color: 'rgba(252,165,165,0.85)',
                lineHeight: 1.8, fontStyle: 'italic',
              }}>
                {p.challenge}
              </p>
            </div>
          </div>
        </Fade>

        {/* ── VERSE ── */}
        <Fade delay={0.46}>
          <div style={{
            textAlign: 'center', marginBottom: 24,
            padding: '20px 20px',
            background: 'rgba(96,165,250,0.05)',
            borderRadius: 16,
            border: '1px solid rgba(96,165,250,0.12)',
            position: 'relative',
          }}>
            {/* Aspas decorativas */}
            <div style={{
              position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
              background: 'linear-gradient(160deg, #0a2e2e, #0F3A3A)',
              padding: '0 10px',
            }}>
              <span style={{ fontSize: 11, color: 'rgba(147,197,253,0.5)', letterSpacing: 4 }}>✝️</span>
            </div>
            <p style={{
              fontSize: 52, lineHeight: 0.5, color: 'rgba(96,165,250,0.15)',
              marginBottom: 10, fontFamily: 'Georgia, serif', fontWeight: 700,
              userSelect: 'none',
            }}>"</p>
            <p style={{
              fontSize: 15, fontStyle: 'italic',
              color: 'rgba(219,234,254,0.85)',
              lineHeight: 1.75, marginBottom: 10, letterSpacing: '0.01em',
            }}>
              {p.verse.replace(/^"|"$/g, '')}
            </p>
            <p style={{
              fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(147,197,253,0.5)', fontWeight: 700,
            }}>
              — {p.verseRef}
            </p>
          </div>
        </Fade>

        {/* ── SIGNS ── */}
        <Fade delay={0.5}>
          <div style={{ marginBottom: 24 }}>
            <p style={{
              fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(190,150,81,0.7)', fontWeight: 700, marginBottom: 14,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" fill="rgba(190,150,81,0.7)" />
              </svg>
              Sinais que falam com você
            </p>
            {p.signs.map((sign, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.52 + i * 0.06, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  padding: '10px 0',
                  borderBottom: i < p.signs.length - 1
                    ? '1px solid rgba(255,255,255,0.05)'
                    : 'none',
                }}
              >
                <div style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #be9651, #d4ae6e)',
                  flexShrink: 0, marginTop: 6,
                }} />
                <span style={{ fontSize: 14, color: 'rgba(245,239,230,0.72)', lineHeight: 1.6 }}>
                  {sign}
                </span>
              </motion.div>
            ))}
          </div>
        </Fade>

        <OrnamentalDivider color="rgba(190,150,81,0.2)" />

        {/* ── FINAL PHRASE ── */}
        <Fade delay={0.56}>
          <div style={{ textAlign: 'center', padding: '0 4px' }}>
            <p style={{
              fontSize: 'clamp(16px, 4vw, 19px)',
              fontWeight: 800, fontStyle: 'italic',
              color: '#d4ae6e', lineHeight: 1.45, marginBottom: 10, letterSpacing: '-0.2px',
            }}>
              {p.finalLine1}
            </p>
            <p style={{
              fontSize: 14, color: 'rgba(245,239,230,0.5)',
              lineHeight: 1.85, fontStyle: 'italic',
            }}>
              {p.finalLine2}
            </p>
          </div>
        </Fade>

      </div>
    </div>
  )
}
