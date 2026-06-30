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
  '7 etapas da travessia para sair dos ciclos emocionais e caminhar em direção à Terra Prometida.',
  'Aulão Especial de Diagnóstico para identificar onde sua vida travou, por que travou e como começar a destravar.',
  'Comunidade exclusiva Chamadas Para Vencer para caminhar com mulheres que também estão vivendo essa jornada.',
  'Direção para identificar a Programação do Egito que ainda governa suas emoções, pensamentos e decisões.',
  'Processo para romper com o DNA de Escrava e desenvolver uma nova mentalidade.',
  'Garantia incondicional de 7 dias para você entrar, assistir e decidir com segurança.',
  'Acesso completo por apenas R$ 37,90.',
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

        {/* ── 2. HEADLINE PERSONALIZADA ── */}
        <Section delay={0.12}>
          <h1 style={{
            textAlign: 'center',
            fontSize: 'clamp(22px, 5.5vw, 30px)',
            fontWeight: 800, color: '#f5efe6',
            marginBottom: 10, lineHeight: 1.2,
            letterSpacing: '-0.4px',
          }}>
            Seu Egito foi identificado:{' '}
            <span style={{
              background: 'linear-gradient(135deg, #be9651, #d4ae6e)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              {hl.tag}.
            </span>
          </h1>
        </Section>

        {/* ── 3. SUBHEADLINE ── */}
        <Section delay={0.18}>
          <p style={{
            textAlign: 'center', fontSize: 15,
            color: 'rgba(245,239,230,0.6)',
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
        <Section delay={0.24}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
              {/* Divisor */}
              <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 10, marginBottom: 32,
              }}>
                <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(190,150,81,0.45))' }} />
                <span style={{ fontSize: 11, color: 'rgba(190,150,81,0.75)', letterSpacing: 6 }}>✦ ✝ ✦</span>
                <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, rgba(190,150,81,0.45))' }} />
              </div>

              {/* Headline da oferta */}
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

              {/* Bônus — container levemente mais claro */}
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 18,
                padding: '20px 18px',
                marginBottom: 32,
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <p style={{
                  fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: '#d4ae6e', fontWeight: 700,
                  marginBottom: 16,
                }}>
                  Ao entrar no desafio A Saída do Egito, você recebe:
                </p>

                {bonuses.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: 12,
                      padding: '11px 0',
                      borderBottom: i < bonuses.length - 1
                        ? '1px solid rgba(255,255,255,0.08)'
                        : 'none',
                    }}
                  >
                    <span style={{
                      color: '#d4ae6e', fontSize: 15, fontWeight: 900,
                      flexShrink: 0, marginTop: 1,
                    }}>✓</span>
                    <span style={{
                      fontSize: 14,
                      color: i === bonuses.length - 1
                        ? '#d4ae6e'
                        : 'rgba(245,239,230,0.92)',
                      fontWeight: i === bonuses.length - 1 ? 700 : 400,
                      lineHeight: 1.6,
                    }}>
                      {b}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Prova social */}
              <div style={{ textAlign: 'center', marginBottom: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
                  {['👩', '👩‍🦱', '👩‍🦰', '👩‍🦳', '👩'].map((e, i) => (
                    <span key={i} style={{
                      fontSize: 20, marginLeft: i > 0 ? -6 : 0,
                      filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))',
                    }}>{e}</span>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: 'rgba(245,239,230,0.65)' }}>
                  +2.300 mulheres já identificaram seu Egito e estão na travessia
                </p>
              </div>

              {/* CTA button dourado */}
              <motion.button
                whileHover={{ scale: 1.025, boxShadow: '0 12px 44px rgba(190,150,81,0.5)' }}
                whileTap={{ scale: 0.975 }}
                onClick={() => { window.location.href = 'https://pay.cakto.com.br/3bu46ba_930908' }}
                style={{
                  width: '100%', padding: '19px',
                  borderRadius: 16, border: 'none',
                  background: 'linear-gradient(135deg, #be9651 0%, #d4ae6e 60%, #c9a05a 100%)',
                  color: '#0F3A3A', fontSize: 17, fontWeight: 800,
                  cursor: 'pointer', letterSpacing: '0.02em',
                  boxShadow: '0 4px 28px rgba(190,150,81,0.35)',
                  marginBottom: 20,
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                }}
              >
                QUERO COMEÇAR MINHA TRAVESSIA 🗝️
              </motion.button>

              {/* Garantia */}
              <div style={{ textAlign: 'center', marginBottom: 16 }}>
                <div style={{
                  height: 1, marginBottom: 16,
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
                }} />
                <p style={{ fontSize: 13, color: 'rgba(245,239,230,0.7)', lineHeight: 1.7 }}>
                  <strong style={{ color: 'rgba(245,239,230,0.9)', fontWeight: 600 }}>
                    7 dias de garantia incondicional.
                  </strong>{' '}
                  Se não gostar, devolvemos 100% do seu dinheiro.
                </p>
                <div style={{
                  height: 1, marginTop: 16,
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
                }} />
              </div>

              <p style={{
                textAlign: 'center', fontSize: 12,
                color: 'rgba(245,239,230,0.45)', lineHeight: 1.8, fontStyle: 'italic',
              }}>
                Deus não te trouxe até aqui para te deixar parada.
              </p>
          </motion.div>
        </Section>

      </div>
    </div>
  )
}
