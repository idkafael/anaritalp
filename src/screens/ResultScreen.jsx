import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Logo from '../components/Logo'
import { resultProfiles } from '../data/questions'

const PROFILE_IMAGES = {
  1: '/FOTO DO PERFIL 1.png',
  2: '/FOTO DO PERFIL 2.png',
  3: '/FOTO DO PERFIL 3.png',
  4: '/FOTO DO PERFIL 4.png',
}

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

export default function ResultScreen({ profileId, onContinue }) {
  const p = resultProfiles.find(r => r.id === profileId) || resultProfiles[0]
  const profileImage = PROFILE_IMAGES[profileId] || PROFILE_IMAGES[1]

  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://scripts.converteai.net/b56885d9-7ea4-4b84-b38e-5cdb1c1e45a9/players/6a35b5d8a01c983820390e8b/v4/player.js'
    s.async = true
    document.head.appendChild(s)
  }, [])

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

      <Logo />

      <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 1 }}>

        {/* ── TOPO: label + emoji + tag + miniDesc ── */}
        <Fade delay={0.05}>
          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <span style={{
              fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'rgba(190,150,81,0.7)', fontWeight: 700,
            }}>
              ✦ &nbsp; Seu Perfil &nbsp; ✦
            </span>
          </div>
          <div style={{ textAlign: 'center', marginBottom: 6 }}>
            <span style={{ fontSize: 36, lineHeight: 1 }}>{p.imageEmoji}</span>
          </div>
          <div style={{ textAlign: 'center', marginBottom: 6 }}>
            <span style={{
              fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(190,150,81,0.65)', fontWeight: 700,
            }}>
              {p.icon} &nbsp; {p.profileTag}
            </span>
          </div>
          <p style={{
            textAlign: 'center', fontSize: 12, fontStyle: 'italic',
            color: 'rgba(212,174,110,0.6)', marginBottom: 14, lineHeight: 1.4,
          }}>
            {p.miniDesc}
          </p>
        </Fade>

        {/* ── H1 ── */}
        <Fade delay={0.12}>
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
        <Fade delay={0.18}>
          <div style={{
            width: '100%', marginBottom: 28,
            borderRadius: 18, overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
            border: '1px solid rgba(190,150,81,0.15)',
          }}>
            <img
              src={profileImage}
              alt={p.profileTag}
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
          </div>
        </Fade>

        {/* ── BOTÃO — visível imediatamente ── */}
        <Fade delay={0.24}>
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
              marginBottom: 12,
              transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
            }}
          >
            CONTINUAR 🗝️
          </motion.button>
          <p style={{
            textAlign: 'center', fontSize: 12,
            color: 'rgba(245,239,230,0.28)', lineHeight: 1.8, fontStyle: 'italic',
            marginBottom: 36,
          }}>
            Deus não te trouxe até aqui para te deixar parada.
          </p>
        </Fade>

        {/* ── VSL — após o botão ── */}
        <Fade delay={0.3}>
          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <span style={{
              fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(190,150,81,0.75)', fontWeight: 700,
            }}>
              ▶ &nbsp; Assista até o final
            </span>
          </div>
          <div style={{
            width: '100%', marginBottom: 36,
            borderRadius: 18, overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
            border: '1px solid rgba(190,150,81,0.15)',
          }}>
            <vturb-smartplayer
              id="vid-6a35b5d8a01c983820390e8b"
              style={{ display: 'block', margin: '0 auto', width: '100%' }}
            />
          </div>
        </Fade>

        {/* ── DIVISOR ── */}
        <Fade delay={0.36}>
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 10, marginBottom: 28,
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(190,150,81,0.2))' }} />
            <span style={{ fontSize: 11, color: 'rgba(190,150,81,0.35)', letterSpacing: 6 }}>✦ ✝ ✦</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, rgba(190,150,81,0.2))' }} />
          </div>
        </Fade>

        {/* ── DESCRIPTION ── */}
        <Fade delay={0.4}>
          <div style={{ marginBottom: 28 }}>
            {p.description.map((d, i) => (
              <p key={i} style={{
                fontSize: 15, color: 'rgba(245,239,230,0.75)',
                lineHeight: 1.85, marginBottom: 12,
              }}>
                {d}
              </p>
            ))}
          </div>
        </Fade>

        {/* ── RED CHALLENGE ── */}
        <Fade delay={0.44}>
          <div style={{ display: 'flex', gap: 16, marginBottom: 28, paddingLeft: 2 }}>
            <div style={{
              width: 3, borderRadius: 99, flexShrink: 0,
              background: 'linear-gradient(180deg, #ef4444 0%, rgba(239,68,68,0.2) 100%)',
              minHeight: '100%',
            }} />
            <div>
              <p style={{
                fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#f87171', fontWeight: 700, marginBottom: 6,
              }}>
                Desafio silencioso no seu caminho
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
        <Fade delay={0.48}>
          <div style={{ textAlign: 'center', marginBottom: 28, padding: '0 8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.3))' }} />
              <span style={{ fontSize: 14, color: 'rgba(147,197,253,0.5)' }}>✝️</span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, rgba(96,165,250,0.3))' }} />
            </div>
            <p style={{
              fontSize: 32, lineHeight: 0.6, color: 'rgba(96,165,250,0.22)',
              marginBottom: 8, fontFamily: 'Georgia, serif', fontWeight: 700,
            }}>"</p>
            <p style={{
              fontSize: 15, fontStyle: 'italic',
              color: 'rgba(219,234,254,0.8)',
              lineHeight: 1.7, marginBottom: 10, letterSpacing: '0.01em',
            }}>
              {p.verse.replace(/^"|"$/g, '')}
            </p>
            <p style={{
              fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(147,197,253,0.5)', fontWeight: 700,
            }}>
              {p.verseRef}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16 }}>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.25))' }} />
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(96,165,250,0.25)' }} />
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, rgba(96,165,250,0.25))' }} />
            </div>
          </div>
        </Fade>

        {/* ── SIGNS ── */}
        <Fade delay={0.52}>
          <div style={{ marginBottom: 28 }}>
            <p style={{
              fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(190,150,81,0.65)', fontWeight: 700, marginBottom: 14,
            }}>
              💡 &nbsp; Sinais que falam com você
            </p>
            {p.signs.map((sign, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  padding: '10px 0',
                  borderBottom: i < p.signs.length - 1
                    ? '1px solid rgba(255,255,255,0.05)'
                    : 'none',
                }}
              >
                <span style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: '#be9651', flexShrink: 0, marginTop: 7,
                }} />
                <span style={{ fontSize: 14, color: 'rgba(245,239,230,0.7)', lineHeight: 1.6 }}>
                  {sign}
                </span>
              </div>
            ))}
          </div>
        </Fade>

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
