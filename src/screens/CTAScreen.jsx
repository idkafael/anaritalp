import { motion } from 'framer-motion'
import Logo from '../components/Logo'

function Section({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const includes = [
  { icon: '🗝️', text: 'Identifique exatamente o que te prende no seu Egito' },
  { icon: '🧭', text: 'Receba um plano personalizado de saída em 7 dias' },
  { icon: '🔥', text: 'Desbloqueie sua identidade e seu verdadeiro potencial' },
  { icon: '🙏', text: 'Reconecte-se com o propósito que Deus preparou para você' },
  { icon: '✨', text: 'Comunidade de mulheres que saíram do Egito' },
]

export default function CTAScreen() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0a2e2e 0%, #0F3A3A 40%, #0d3535 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '40px 24px 72px',
      position: 'relative', overflowX: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 640, height: 380,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.09) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <Logo />

      <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 1 }}>

        {/* ── 1. LABEL ── */}
        <Section delay={0.05}>
          <div style={{ textAlign: 'center', marginBottom: 14 }}>
            <span style={{
              fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#be9651', fontWeight: 700, fontStyle: 'italic',
            }}>
              ✦ Próximo Passo ✦
            </span>
          </div>
        </Section>

        {/* ── 2. HEADLINE ── */}
        <Section delay={0.12}>
          <h1 style={{
            textAlign: 'center',
            fontSize: 'clamp(24px, 5.5vw, 32px)',
            fontWeight: 800, color: '#f5efe6',
            marginBottom: 28, lineHeight: 1.2,
            letterSpacing: '-0.4px',
          }}>
            Seu Egito foi identificado.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #be9651, #d4ae6e)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Agora é hora de agir.
            </span>
          </h1>
        </Section>

        {/* ── 3. VSL WARNING ── */}
        <Section delay={0.18}>
          <div style={{
            background: 'rgba(190,150,81,0.08)',
            border: '1px solid rgba(190,150,81,0.28)',
            borderRadius: 10, padding: '11px 16px',
            textAlign: 'center', marginBottom: 14,
          }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#d4ae6e', lineHeight: 1.45 }}>
              ⚠️ Assista o vídeo agora. Este é o seu primeiro passo para sair do Egito.
            </p>
          </div>

          {/* VSL Video placeholder */}
          <div style={{
            width: '100%', aspectRatio: '16/9',
            background: 'rgba(0,0,0,0.42)',
            border: '1px solid rgba(190,150,81,0.22)',
            borderRadius: 18,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 10,
            marginBottom: 32,
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'linear-gradient(135deg, #be9651, #d4ae6e)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 36px rgba(190,150,81,0.35)',
            }}>
              <svg width={26} height={26} viewBox="0 0 24 24" fill="#0F3A3A">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(245,239,230,0.28)', letterSpacing: '0.08em' }}>
              VÍDEO
            </p>
          </div>
        </Section>

        {/* ── 4. O CÉU TE VALIDA ── */}
        <Section delay={0.26}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(19px, 4.5vw, 25px)',
            fontWeight: 800, color: '#f5efe6',
            lineHeight: 1.35, marginBottom: 8, letterSpacing: '-0.3px',
          }}>
            O CÉU TE VALIDA:{' '}
            <span style={{
              background: 'linear-gradient(135deg, #be9651, #d4ae6e)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Descubra como sair do seu Egito e destravar sua identidade em 7 dias.
            </span>
          </h2>

          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.6)',
            lineHeight: 1.8, marginBottom: 28, textAlign: 'center', fontStyle: 'italic',
          }}>
            Com base nas suas respostas, você está pronta para uma transformação profunda.
          </p>
        </Section>

        {/* ── 5. INCLUDES ── */}
        <Section delay={0.32}>
          <div style={{ marginBottom: 28 }}>
            {includes.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.38 + i * 0.08, duration: 0.4 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '13px 16px', borderRadius: 12, marginBottom: 8,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <span style={{ fontSize: 20, flexShrink: 0 }}>{b.icon}</span>
                <span style={{ fontSize: 14, color: 'rgba(245,239,230,0.8)', fontWeight: 500, lineHeight: 1.4 }}>
                  {b.text}
                </span>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── 6. SOCIAL PROOF ── */}
        <Section delay={0.7}>
          <div style={{
            height: 1, marginBottom: 24,
            background: 'linear-gradient(90deg, transparent, rgba(190,150,81,0.3), transparent)',
          }} />

          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
              {['👩', '👩‍🦱', '👩‍🦰', '👩‍🦳', '👩'].map((e, i) => (
                <span key={i} style={{
                  fontSize: 20, marginLeft: i > 0 ? -6 : 0,
                  filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))',
                }}>{e}</span>
              ))}
            </div>
            <p style={{ fontSize: 13, color: 'rgba(245,239,230,0.45)' }}>
              +2.300 mulheres já identificaram seu Egito e estão na travessia
            </p>
          </div>
        </Section>

        {/* ── 7. CTA BUTTON ── */}
        <Section delay={0.76}>
          <motion.button
            whileHover={{ scale: 1.025, boxShadow: '0 12px 44px rgba(190,150,81,0.5)' }}
            whileTap={{ scale: 0.975 }}
            style={{
              width: '100%', padding: '19px',
              borderRadius: 16, border: 'none',
              background: 'linear-gradient(135deg, #be9651 0%, #d4ae6e 60%, #c9a05a 100%)',
              color: '#0F3A3A', fontSize: 17, fontWeight: 800,
              cursor: 'pointer', letterSpacing: '0.02em',
              boxShadow: '0 4px 28px rgba(190,150,81,0.35)',
              marginBottom: 16,
            }}
          >
            QUERO COMEÇAR MINHA TRAVESSIA 🗝️
          </motion.button>

          {/* Guarantee */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 12, padding: '13px 16px',
            textAlign: 'center', marginBottom: 20,
          }}>
            <p style={{ fontSize: 13, color: 'rgba(245,239,230,0.55)', lineHeight: 1.65 }}>
              ✅ <strong style={{ color: 'rgba(245,239,230,0.8)' }}>7 dias de garantia incondicional.</strong>{' '}
              Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas. Sem burocracia.
            </p>
          </div>

          <p style={{
            textAlign: 'center', fontSize: 12,
            color: 'rgba(245,239,230,0.3)', lineHeight: 1.8,
            fontStyle: 'italic',
          }}>
            Deus não te trouxe até aqui para te deixar parada. Ele está te chamando para algo maior.
          </p>
        </Section>

      </div>
    </div>
  )
}
