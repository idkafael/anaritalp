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

const bonuses = [
  { icon: '🗺️', text: '7 etapas da travessia para sair dos ciclos emocionais e caminhar em direção à Terra Prometida.' },
  { icon: '🔍', text: 'Aulão Especial de Diagnóstico para identificar onde sua vida travou, por que travou e como começar a destravar.' },
  { icon: '🤝', text: 'Comunidade exclusiva Chamadas Para Vencer para caminhar com mulheres que também estão vivendo essa jornada.' },
  { icon: '🧬', text: 'Direção para identificar a Programação do Egito que ainda governa suas emoções, pensamentos e decisões.' },
  { icon: '🦋', text: 'Processo para romper com o DNA de Escrava e desenvolver uma nova mentalidade.' },
  { icon: '🛡️', text: 'Garantia incondicional de 7 dias para você entrar, assistir e decidir com segurança.' },
  { icon: '✨', text: 'Acesso completo por apenas R$ 37,90.', highlight: true },
]

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

function GuaranteeSeal() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: 20 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.9, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      style={{
        position: 'relative',
        width: 80, height: 80,
        margin: '0 auto 20px',
      }}
    >
      {/* Anel externo */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        border: '2px solid rgba(190,150,81,0.4)',
        animation: 'spin-slow 20s linear infinite',
      }} />
      {/* Anel dentado interno (simulado com dashed) */}
      <div style={{
        position: 'absolute', inset: 4, borderRadius: '50%',
        border: '1.5px dashed rgba(190,150,81,0.3)',
        animation: 'spin-slow-rev 15s linear infinite',
      }} />
      {/* Centro */}
      <div style={{
        position: 'absolute', inset: 8, borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 35%, rgba(190,150,81,0.25), rgba(190,150,81,0.08))',
        border: '1px solid rgba(190,150,81,0.35)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontSize: 18, lineHeight: 1 }}>🛡️</span>
        <span style={{ fontSize: 6.5, fontWeight: 800, color: '#d4ae6e', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2, textAlign: 'center', lineHeight: 1.2 }}>7 DIAS{'\n'}GARANTIA</span>
      </div>
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
      padding: '40px 24px 80px',
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
            <span style={{ color: '#ffffff' }}>{hl.tag}.</span>
          </h1>
        </Section>

        {/* ── 3. SUBHEADLINE ── */}
        <Section delay={0.18}>
          <p style={{
            textAlign: 'center', fontSize: 15,
            color: 'rgba(245,239,230,0.65)',
            lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic',
          }}>
            {hl.sub}
          </p>
        </Section>

        {/* ── 4. VSL ── */}
        <Section delay={0.22}>
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
        </Section>

        {/* ── 5. OFERTA ── */}
        <Section delay={0.28}>
          {/* Divisor ornamental */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(190,150,81,0.45))' }} />
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" fill="rgba(190,150,81,0.6)" />
            </svg>
            <svg width={13} height={13} viewBox="0 0 24 24" fill="none">
              <rect x="10" y="2" width="4" height="20" rx="2" fill="rgba(190,150,81,0.4)" />
              <rect x="2" y="8" width="20" height="4" rx="2" fill="rgba(190,150,81,0.4)" />
            </svg>
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" fill="rgba(190,150,81,0.6)" />
            </svg>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, rgba(190,150,81,0.45))' }} />
          </div>

          {/* Label decisão */}
          <div style={{ textAlign: 'center', marginBottom: 12 }}>
            <span style={{
              fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(190,150,81,0.9)', fontWeight: 700,
            }}>
              ✦ &nbsp; A Decisão &nbsp; ✦
            </span>
          </div>

          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(20px, 5vw, 26px)',
            fontWeight: 800, color: '#fff',
            lineHeight: 1.25, marginBottom: 14, letterSpacing: '-0.3px',
          }}>
            Agora, a decisão que pode transformar a sua vida está em suas mãos.
          </h2>

          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.82)',
            lineHeight: 1.8, marginBottom: 32, textAlign: 'center', fontStyle: 'italic',
          }}>
            Você pode continuar presa aos mesmos ciclos ou dar hoje o primeiro passo para viver a travessia que Deus preparou para você.
          </p>

          {/* Bônus com ícones */}
          <div style={{
            borderRadius: 20, marginBottom: 32, overflow: 'hidden',
            border: '1px solid rgba(190,150,81,0.15)',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(190,150,81,0.12), rgba(190,150,81,0.05))',
              padding: '14px 18px',
              borderBottom: '1px solid rgba(190,150,81,0.15)',
            }}>
              <p style={{
                fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#d4ae6e', fontWeight: 800, textAlign: 'center',
              }}>
                ✦ Ao entrar no desafio A Saída do Egito, você recebe: ✦
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '4px 18px 14px' }}>
              {bonuses.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.32 + i * 0.07, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    padding: '12px 0',
                    borderBottom: i < bonuses.length - 1
                      ? '1px solid rgba(255,255,255,0.06)'
                      : 'none',
                  }}
                >
                  <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>{b.icon}</span>
                  <span style={{
                    fontSize: 14,
                    color: b.highlight ? '#d4ae6e' : 'rgba(245,239,230,0.9)',
                    fontWeight: b.highlight ? 700 : 400,
                    lineHeight: 1.6,
                  }}>
                    {b.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Prova social */}
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0, marginBottom: 8 }}>
              {['👩', '👩‍🦱', '👩‍🦰', '👩‍🦳', '👩'].map((e, i) => (
                <span key={i} style={{
                  fontSize: 22, marginLeft: i > 0 ? -8 : 0,
                  filter: 'drop-shadow(0 0 3px rgba(0,0,0,0.5))',
                }}>{e}</span>
              ))}
            </div>
            <p style={{ fontSize: 13, color: 'rgba(245,239,230,0.6)', fontStyle: 'italic' }}>
              +2.300 mulheres já identificaram seu Egito e estão na travessia
            </p>
          </div>

          {/* Botão CTA com shimmer + pulse */}
          <div style={{ position: 'relative', marginBottom: 20 }}>
            <div style={{
              position: 'absolute', inset: -4, borderRadius: 20,
              border: '1.5px solid rgba(190,150,81,0.35)',
              animation: 'pulse-ring 2.5s ease-out infinite',
              pointerEvents: 'none',
            }} />
            <motion.button
              whileHover={{ scale: 1.025, boxShadow: '0 16px 50px rgba(190,150,81,0.55)' }}
              whileTap={{ scale: 0.975 }}
              onClick={() => { window.location.href = 'https://pay.cakto.com.br/3bu46ba_930908' }}
              style={{
                width: '100%', padding: '20px',
                borderRadius: 16, border: 'none',
                background: 'linear-gradient(135deg, #be9651 0%, #d4ae6e 60%, #c9a05a 100%)',
                color: '#ffffff', fontSize: 17, fontWeight: 900,
                cursor: 'pointer', letterSpacing: '0.03em',
                boxShadow: '0 6px 32px rgba(190,150,81,0.4)',
                position: 'relative', overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                animation: 'glow-pulse 3s ease-in-out infinite',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, bottom: 0, width: '50%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)',
                animation: 'shimmer-sweep 2.6s ease-in-out 0.5s infinite',
                pointerEvents: 'none',
              }} />
              <span style={{ position: 'relative', zIndex: 1 }}>
                QUERO COMEÇAR MINHA TRAVESSIA 🗝️
              </span>
            </motion.button>
          </div>

          {/* Garantia seal + texto */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <GuaranteeSeal />
            <div>
              <p style={{ fontSize: 14, color: 'rgba(245,239,230,0.9)', fontWeight: 700, marginBottom: 4 }}>
                7 dias de garantia incondicional.
              </p>
              <p style={{ fontSize: 13, color: 'rgba(245,239,230,0.65)', lineHeight: 1.6 }}>
                Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>

          <div style={{
            height: 1, marginBottom: 14,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          }} />

          <p style={{
            textAlign: 'center', fontSize: 12,
            color: 'rgba(245,239,230,0.35)', lineHeight: 1.8, fontStyle: 'italic',
          }}>
            Deus não te trouxe até aqui para te deixar parada.
          </p>
        </Section>

      </div>
    </div>
  )
}
