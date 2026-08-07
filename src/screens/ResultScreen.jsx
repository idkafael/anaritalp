import { motion } from 'framer-motion'
import Logo from '../components/Logo'
import { resultProfiles } from '../data/questions'
import {
  familyContext,
  centralBelief,
  emotionalSymptom,
  internalConflict,
  behaviorPattern,
  desiredValue,
  levelClosing,
  levelNames,
} from '../data/copyLibrary'
import perfil1 from '../assets/perfil1.png'
import perfil2 from '../assets/perfil2.png'
import perfil3 from '../assets/perfil3.png'

const PROFILE_IMAGES = { 1: perfil1, 2: perfil2, 3: perfil3 }

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

function OrnamentalDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '26px 0' }}>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(190,150,81,0.22))' }} />
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" fill="rgba(190,150,81,0.4)" />
      </svg>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, transparent, rgba(190,150,81,0.22))' }} />
    </div>
  )
}

function StageBar({ stages, barProgress }) {
  const numStages = stages.length
  const activeIdx = Math.floor(Math.min(barProgress, numStages - 0.01))
  const pct = (barProgress / numStages) * 100

  return (
    <div style={{ marginBottom: 8 }}>
      {/* Régua text line */}
      <div style={{
        textAlign: 'center',
        marginBottom: 14,
        fontSize: 10.5,
        color: 'rgba(190,150,81,0.5)',
        letterSpacing: '0.05em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
        flexWrap: 'wrap',
        lineHeight: 1.6,
      }}>
        <span style={{ marginRight: 6 }}>🔖</span>
        <span style={{ color: 'rgba(212,174,110,0.85)', fontWeight: 600 }}>Régua:&nbsp;</span>
        {stages.map((s, i) => (
          <span key={i}>
            <span style={{
              color: i === activeIdx ? '#d4ae6e' : 'rgba(245,239,230,0.85)',
              fontWeight: i === activeIdx ? 800 : 400,
            }}>
              {s}
            </span>
            {i < stages.length - 1 && (
              <span style={{ color: 'rgba(245,239,230,0.55)', margin: '0 4px' }}>→</span>
            )}
          </span>
        ))}
      </div>

      {/* Bar with "Você" pill */}
      <div style={{ position: 'relative', paddingTop: 30, marginBottom: 10 }}>
        {/* Você pill */}
        <div style={{
          position: 'absolute',
          left: `${pct}%`,
          top: 0,
          transform: 'translateX(-50%)',
          zIndex: 5,
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #be9651, #d4ae6e)',
            color: '#0F3A3A',
            fontSize: 9.5,
            fontWeight: 900,
            padding: '3px 9px',
            borderRadius: 99,
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
            boxShadow: '0 2px 10px rgba(190,150,81,0.5)',
            position: 'relative',
          }}>
            Você
            {/* Arrow down */}
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0, height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '5px solid #d4ae6e',
            }} />
          </div>
        </div>

        {/* Track segments */}
        <div style={{ display: 'flex', gap: 4 }}>
          {stages.map((_, i) => {
            const fill = Math.min(1, Math.max(0, barProgress - i))
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 8,
                  borderRadius: 99,
                  background: 'rgba(255,255,255,0.13)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, bottom: 0,
                  width: `${fill * 100}%`,
                  borderRadius: 99,
                  background: fill >= 1
                    ? 'linear-gradient(90deg, #be9651, #d4ae6e)'
                    : fill > 0
                    ? 'linear-gradient(90deg, #d4ae6e, rgba(212,174,110,0.4))'
                    : 'transparent',
                }} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Stage labels */}
      <div style={{ display: 'flex', gap: 4 }}>
        {stages.map((stage, i) => {
          const isCurrent = i === activeIdx
          const isPast = i < activeIdx
          return (
            <div key={i} style={{ flex: 1, textAlign: 'center' }}>
              <p style={{
                fontSize: 8,
                color: isCurrent ? '#d4ae6e' : 'rgba(245,239,230,0.85)',
                fontWeight: isCurrent ? 800 : 400,
                lineHeight: 1.35,
                letterSpacing: '0.02em',
                userSelect: 'none',
              }}>
                {stage}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function InsightCard({ label, title, body, delay = 0 }) {
  return (
    <Fade delay={delay}>
      <div style={{
        marginBottom: 10,
        borderRadius: 14,
        background: 'rgba(5,22,22,0.55)',
        border: '1px solid rgba(190,150,81,0.1)',
        padding: '14px 16px',
      }}>
        {/* Label with dot */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 7,
          marginBottom: 6,
        }}>
          <div style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #be9651, #d4ae6e)',
            flexShrink: 0,
            boxShadow: '0 0 6px rgba(190,150,81,0.6)',
          }} />
          <p style={{
            fontSize: 9,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(190,150,81,0.75)',
            fontWeight: 700,
          }}>
            {label}
          </p>
        </div>
        {/* Title */}
        <p style={{
          fontSize: 14,
          color: '#ffffff',
          fontWeight: 700,
          marginBottom: 5,
          lineHeight: 1.3,
        }}>
          {title}
        </p>
        {/* Body */}
        <p style={{
          fontSize: 13.5,
          color: 'rgba(245,239,230,0.62)',
          lineHeight: 1.65,
        }}>
          {body}
        </p>
      </div>
    </Fade>
  )
}

function HighlightBlock({ label, text, accentColor = 'rgba(190,150,81,0.08)', borderColor = 'rgba(190,150,81,0.18)', delay = 0 }) {
  return (
    <Fade delay={delay}>
      <div style={{
        marginBottom: 10,
        padding: '14px 16px',
        borderRadius: 14,
        background: accentColor,
        border: `1px solid ${borderColor}`,
      }}>
        <p style={{
          fontSize: 9,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(190,150,81,0.7)',
          fontWeight: 700,
          marginBottom: 7,
        }}>
          {label}
        </p>
        <p style={{
          fontSize: 14.5,
          color: '#ffffff',
          lineHeight: 1.7,
          fontStyle: 'italic',
        }}>
          {text}
        </p>
      </div>
    </Fade>
  )
}

export default function ResultScreen({ profileId = 1, answers = [], onContinue }) {
  const p = resultProfiles.find(r => r.id === profileId) || resultProfiles[0]
  const profileImage = PROFILE_IMAGES[profileId] || PROFILE_IMAGES[1]

  const q1  = answers[0]?.optionIndex ?? 0
  const q2  = answers[1]?.optionIndex ?? 0
  const q3  = answers[2]?.optionIndex ?? 0
  const q4  = answers[3]?.optionIndex ?? 0
  const q6  = answers[5]?.optionIndex ?? 0
  const q8  = answers[7]?.optionIndex ?? 0
  const q10 = answers[9]?.optionIndex ?? 0

  const levelName = (levelNames[profileId] || levelNames[1])[q10]
  const { barProgress } = levelClosing[q10]
  const ctaText = desiredValue[q8].cta

  return (
    <div
      className="app-screen"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #0a2e2e 0%, #0F3A3A 45%, #0d3535 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '28px 24px 88px',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 420,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Sparkles */}
      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 84, right: 22, pointerEvents: 'none' }}
      >
        <svg width={13} height={13} viewBox="0 0 24 24" fill="none">
          <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" fill="rgba(190,150,81,0.5)" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ opacity: [0.12, 0.4, 0.12] }}
        transition={{ duration: 4.5, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 135, left: 18, pointerEvents: 'none' }}
      >
        <svg width={8} height={8} viewBox="0 0 24 24" fill="none">
          <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" fill="rgba(190,150,81,0.5)" />
        </svg>
      </motion.div>

      <Logo />

      <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 1 }}>

        {/* ── SECTION 1: ÍNDICE + NÍVEL + BARRA ── */}
        <Fade delay={0.04}>
          <p style={{
            textAlign: 'center',
            fontSize: 9,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(190,150,81,0.6)',
            fontWeight: 700,
            marginBottom: 8,
          }}>
            SEU PADRÃO
          </p>
        </Fade>

        <Fade delay={0.1}>
          <h1 style={{
            textAlign: 'center',
            marginBottom: 18,
            lineHeight: 1.15,
          }}>
            <span style={{
              display: 'block',
              fontSize: 13,
              fontWeight: 500,
              color: 'rgba(245,239,230,0.4)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 2,
            }}>
              Nível
            </span>
            <span style={{
              fontSize: 'clamp(22px, 5.5vw, 28px)',
              fontWeight: 800,
              color: '#d4ae6e',
              letterSpacing: '-0.2px',
            }}>
              {levelName}
            </span>
          </h1>
        </Fade>

        {/* Barra com Você */}
        <Fade delay={0.16}>
          <StageBar stages={p.stages} barProgress={barProgress} />
        </Fade>

        <OrnamentalDivider />

        {/* ── SECTION 2: PERFIL ── */}
        <Fade delay={0.24}>
          <p style={{
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#d4ae6e',
            fontWeight: 800,
            marginBottom: 10,
          }}>
            Padrão Invisível Identificado na Sua Jornada:
          </p>
          <h2 style={{
            fontSize: 'clamp(19px, 4.8vw, 24px)',
            fontWeight: 800,
            color: '#f5efe6',
            lineHeight: 1.2,
            letterSpacing: '-0.3px',
            marginBottom: 14,
          }}>
            {p.profileTag}
          </h2>
          <div style={{ marginBottom: 18 }}>
            {p.description.map((d, i) => (
              <p key={i} style={{
                fontSize: 14.5,
                color: 'rgba(245,239,230,0.72)',
                lineHeight: 1.85,
                marginBottom: 10,
              }}>
                {d}
              </p>
            ))}
          </div>
        </Fade>

        {/* ── CONTEXT FAMILIAR (Q1) ── */}
        <Fade delay={0.3}>
          <p style={{
            fontSize: 14,
            color: 'rgba(245,239,230,0.58)',
            lineHeight: 1.85,
            fontStyle: 'italic',
            marginBottom: 24,
            paddingLeft: 14,
            borderLeft: '2px solid rgba(190,150,81,0.22)',
          }}>
            {familyContext[q1]}
          </p>
        </Fade>

        {/* ── IMAGEM DO PERFIL ── */}
        <Fade delay={0.34}>
          <div style={{
            width: '100%',
            marginBottom: 26,
            borderRadius: 18,
            overflow: 'hidden',
            boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
            border: '1px solid rgba(190,150,81,0.13)',
            position: 'relative',
          }}>
            <img
              src={profileImage}
              alt={p.profileTag}
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: 70,
              background: 'linear-gradient(to top, rgba(10,46,46,0.65) 0%, transparent 100%)',
            }} />
          </div>
        </Fade>

        {/* ── 4 CARDS ── */}
        <Fade delay={0.38}>
          <p style={{
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#d4ae6e',
            fontWeight: 800,
            marginBottom: 12,
          }}>
            Sua Jornada em Detalhes:
          </p>
        </Fade>

        <InsightCard
          delay={0.41}
          label="Crença Central · Ciclo Percebido"
          title={centralBelief[q4].title}
          body={centralBelief[q4].body}
        />
        <InsightCard
          delay={0.45}
          label="Sintoma Emocional · Estado Atual"
          title={emotionalSymptom[q2].title}
          body={emotionalSymptom[q2].body}
        />
        <InsightCard
          delay={0.49}
          label="Conflito Interno · Fé e Vida Prática"
          title={internalConflict[q6].title}
          body={internalConflict[q6].body}
        />
        <InsightCard
          delay={0.53}
          label="Padrão de Comportamento · Decisões"
          title={behaviorPattern[q3].title}
          body={behaviorPattern[q3].body}
        />

        {/* ── BOTÃO CTA (Q8) ── */}
        <Fade delay={0.81}>
          <div style={{ position: 'relative', marginBottom: 10 }}>
            <div style={{
              position: 'absolute', inset: -3, borderRadius: 19,
              border: '1px solid rgba(190,150,81,0.28)',
              animation: 'pulse-ring 2.8s ease-out 0.8s infinite',
              pointerEvents: 'none',
            }} />
            <motion.button
              whileHover={{ scale: 1.025, boxShadow: '0 16px 48px rgba(190,150,81,0.45)' }}
              whileTap={{ scale: 0.975 }}
              onClick={onContinue}
              style={{
                width: '100%',
                padding: '19px 14px',
                borderRadius: 16,
                border: 'none',
                background: 'linear-gradient(135deg, #be9651 0%, #d4ae6e 60%, #c9a05a 100%)',
                color: '#ffffff',
                fontSize: 13.5,
                fontWeight: 800,
                cursor: 'pointer',
                letterSpacing: '0.05em',
                boxShadow: '0 4px 32px rgba(190,150,81,0.35)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, bottom: 0, width: '45%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
                animation: 'shimmer-sweep 3s ease-in-out 1.2s infinite',
                pointerEvents: 'none',
              }} />
              <span style={{ position: 'relative', zIndex: 1 }}>{ctaText}</span>
            </motion.button>
          </div>
          <p style={{
            textAlign: 'center',
            fontSize: 12,
            color: 'rgba(255,255,255,0.28)',
            lineHeight: 1.8,
            fontStyle: 'italic',
          }}>
            Deus não te trouxe até aqui para te deixar parada.
          </p>
        </Fade>

        {/* ── DISCLAIMER ── */}
        <Fade delay={0.86}>
          <p style={{
            fontSize: 11,
            color: 'rgba(245,239,230,0.22)',
            lineHeight: 1.75,
            textAlign: 'center',
            marginTop: 30,
            padding: '0 6px',
            fontStyle: 'italic',
          }}>
            Este resultado não representa um diagnóstico clínico. Ele apresenta uma leitura educativa baseada nas respostas fornecidas. Em casos de crises de ansiedade, pânico ou sofrimento emocional intenso, este processo não substitui acompanhamento psicológico ou médico.
          </p>
        </Fade>

      </div>
    </div>
  )
}
