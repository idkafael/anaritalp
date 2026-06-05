import { motion } from 'framer-motion'
import Logo from '../components/Logo'
import { resultProfiles } from '../data/questions'

function Section({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function ResultScreen({ profileId, onContinue }) {
  const p = resultProfiles.find(r => r.id === profileId) || resultProfiles[0]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0a2e2e 0%, #0F3A3A 45%, #0d3535 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '40px 24px 88px',
      position: 'relative', overflowX: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 420,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <Logo />

      <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 1 }}>

        {/* ── 1. SEAL ── */}
        <Section delay={0.05}>
          <div style={{ textAlign: 'center', marginBottom: 22 }}>
            <span style={{
              fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'rgba(190,150,81,0.7)', fontWeight: 700,
            }}>
              ✦ &nbsp; Seu Perfil &nbsp; ✦
            </span>
          </div>
        </Section>

        {/* ── 2. IMAGE PLACEHOLDER ── */}
        <Section delay={0.1}>
          <div style={{
            width: '100%', height: 210,
            background: p.imageGradient,
            borderRadius: 24,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 10,
            marginBottom: 22,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)',
            }} />
            <span style={{ fontSize: 68, lineHeight: 1, position: 'relative', zIndex: 1 }}>
              {p.imageEmoji}
            </span>
          </div>
        </Section>

        {/* ── 3. PROFILE TAG ── */}
        <Section delay={0.16}>
          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <span style={{
              fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(190,150,81,0.65)', fontWeight: 700,
            }}>
              {p.icon} &nbsp; {p.profileTag}
            </span>
          </div>
        </Section>

        {/* ── 4. MINI DESC ── */}
        <Section delay={0.2}>
          <p style={{
            textAlign: 'center', fontSize: 13, fontStyle: 'italic',
            color: 'rgba(212,174,110,0.65)',
            marginBottom: 18, lineHeight: 1.5,
          }}>
            {p.miniDesc}
          </p>
        </Section>

        {/* ── 5. PERSONA TITLE ── */}
        <Section delay={0.25}>
          <h1 style={{
            textAlign: 'center',
            fontSize: 'clamp(26px, 6vw, 34px)',
            fontWeight: 800, color: '#f5efe6',
            marginBottom: 28, lineHeight: 1.15,
            letterSpacing: '-0.5px',
          }}>
            {p.personaTitle}
          </h1>
        </Section>

        {/* ── 6. DESCRIPTION ── */}
        <Section delay={0.3}>
          <div style={{ marginBottom: 32 }}>
            {p.description.map((d, i) => (
              <p key={i} style={{
                fontSize: 15, color: 'rgba(245,239,230,0.75)',
                lineHeight: 1.85, marginBottom: 14,
              }}>
                {d}
              </p>
            ))}
          </div>
        </Section>

        {/* ── 7. RED CHALLENGE — editorial left-stripe ── */}
        <Section delay={0.36}>
          <div style={{
            display: 'flex', gap: 16,
            marginBottom: 32,
            paddingLeft: 2,
          }}>
            {/* Stripe */}
            <div style={{
              width: 3, borderRadius: 99, flexShrink: 0,
              background: 'linear-gradient(180deg, #ef4444 0%, rgba(239,68,68,0.2) 100%)',
              minHeight: '100%',
            }} />
            <div>
              <p style={{
                fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#f87171', fontWeight: 700, marginBottom: 8,
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
        </Section>

        {/* ── 8. VERSE — tipográfico, sem caixa ── */}
        <Section delay={0.42}>
          <div style={{ textAlign: 'center', marginBottom: 36, padding: '0 8px' }}>
            {/* linha decorativa */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20,
            }}>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.3))' }} />
              <span style={{ fontSize: 16, color: 'rgba(147,197,253,0.5)' }}>✝️</span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, rgba(96,165,250,0.3))' }} />
            </div>

            {/* aspas decorativas */}
            <p style={{
              fontSize: 38, lineHeight: 0.6, color: 'rgba(96,165,250,0.25)',
              marginBottom: 8, fontFamily: 'Georgia, serif', fontWeight: 700,
            }}>
              "
            </p>

            <p style={{
              fontSize: 16, fontStyle: 'italic',
              color: 'rgba(219,234,254,0.8)',
              lineHeight: 1.7, marginBottom: 12,
              letterSpacing: '0.01em',
            }}>
              {p.verse.replace(/^"|"$/g, '')}
            </p>

            <p style={{
              fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(147,197,253,0.5)', fontWeight: 700,
            }}>
              {p.verseRef}
            </p>

            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, marginTop: 20,
            }}>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.3))' }} />
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(96,165,250,0.3)' }} />
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, rgba(96,165,250,0.3))' }} />
            </div>
          </div>
        </Section>

        {/* ── 9. SIGNS — lista limpa, sem cards ── */}
        <Section delay={0.48}>
          <div style={{ marginBottom: 36 }}>
            <p style={{
              fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(190,150,81,0.65)', fontWeight: 700,
              marginBottom: 18,
            }}>
              💡 &nbsp; Sinais que falam com você
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {p.signs.map((sign, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.52 + i * 0.07, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    padding: '12px 0',
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
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Divisor ornamental */}
        <Section delay={0.56}>
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 10, marginBottom: 32,
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(190,150,81,0.25))' }} />
            <span style={{ fontSize: 11, color: 'rgba(190,150,81,0.4)', letterSpacing: 8 }}>✦ ✝ ✦</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, rgba(190,150,81,0.25))' }} />
          </div>
        </Section>

        {/* ── 10. FINAL PHRASE — tipográfico, sem caixa ── */}
        <Section delay={0.6}>
          <div style={{ textAlign: 'center', marginBottom: 36, padding: '0 4px' }}>
            <p style={{
              fontSize: 'clamp(17px, 4vw, 20px)',
              fontWeight: 800, fontStyle: 'italic',
              color: '#d4ae6e',
              lineHeight: 1.45, marginBottom: 14,
              letterSpacing: '-0.2px',
            }}>
              {p.finalLine1}
            </p>
            <p style={{
              fontSize: 14, color: 'rgba(245,239,230,0.55)',
              lineHeight: 1.85, fontStyle: 'italic',
            }}>
              {p.finalLine2}
            </p>
          </div>
        </Section>

        {/* ── 11. PURPLE CTA BUTTON ── */}
        <Section delay={0.65}>
          <motion.button
            whileHover={{ scale: 1.025, boxShadow: '0 16px 48px rgba(124,58,237,0.45)' }}
            whileTap={{ scale: 0.975 }}
            onClick={onContinue}
            style={{
              width: '100%', padding: '19px',
              borderRadius: 16, border: 'none',
              background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 60%, #9333ea 100%)',
              color: '#ffffff', fontSize: 16, fontWeight: 800,
              cursor: 'pointer', letterSpacing: '0.04em',
              boxShadow: '0 4px 32px rgba(124,58,237,0.35)',
              marginBottom: 20,
              transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
            }}
          >
            CONTINUAR 🗝️
          </motion.button>

          <p style={{
            textAlign: 'center', fontSize: 12,
            color: 'rgba(245,239,230,0.28)', lineHeight: 1.8,
            fontStyle: 'italic',
          }}>
            Deus não te trouxe até aqui para te deixar parada.
          </p>
        </Section>

      </div>
    </div>
  )
}
