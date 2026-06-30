import { motion } from 'framer-motion'
import Logo from '../components/Logo'

const downsellItems = [
  'O GPS da Terra Prometida',
  'As 7 etapas da travessia',
  'O Aulão Especial de Diagnóstico',
  'A Comunidade Chamadas Para Vencer',
  'Garantia de 7 dias',
]

export default function DownsellScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      className="app-screen"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #1c1005 0%, #150c04 50%, #0f0902 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '52px 24px 80px',
        position: 'relative', overflowX: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400,
        background: 'radial-gradient(ellipse, rgba(190,130,40,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <Logo />

      <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 20 }}
        >
          <span style={{
            fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(212,174,110,0.6)', fontWeight: 700,
          }}>
            ✦ &nbsp; Condição Especial &nbsp; ✦
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(28px, 7vw, 40px)',
            fontWeight: 900, color: '#f5efe6',
            lineHeight: 1.1, marginBottom: 10,
            letterSpacing: '-0.8px',
          }}
        >
          ATENÇÃO, ESPERE.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5 }}
          style={{
            textAlign: 'center', fontSize: 16,
            color: 'rgba(245,239,230,0.65)',
            lineHeight: 1.7, marginBottom: 28, fontStyle: 'italic',
          }}
        >
          Antes de fechar esta página, eu quero fazer uma última proposta para você.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28 }}
          style={{
            height: 1, marginBottom: 28,
            background: 'linear-gradient(90deg, transparent, rgba(190,130,40,0.3), transparent)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.65)',
            lineHeight: 1.85, marginBottom: 16,
          }}>
            Talvez você tenha decidido não entrar hoje porque ainda está pensando.
            Talvez esteja em dúvida. Ou talvez apenas não seja o momento de investir os{' '}
            <strong style={{ color: 'rgba(245,239,230,0.85)' }}>R$37,90.</strong>
          </p>

          <p style={{
            fontSize: 15, color: 'rgba(245,239,230,0.75)',
            lineHeight: 1.85, marginBottom: 28, fontStyle: 'italic',
          }}>
            E eu não quero que o valor seja o motivo que impeça você de iniciar sua travessia.
            Por isso,{' '}
            <strong style={{ fontStyle: 'normal', color: '#d4ae6e' }}>
              somente nesta página,
            </strong>{' '}
            você pode garantir seu acesso completo com uma condição especial.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36, duration: 0.5 }}
        >
          <p style={{
            fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(212,174,110,0.7)', fontWeight: 700, marginBottom: 16,
          }}>
            Você continuará recebendo:
          </p>

          <div style={{ marginBottom: 32 }}>
            {downsellItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.07, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  padding: '11px 0',
                  borderBottom: i < downsellItems.length - 1
                    ? '1px solid rgba(255,255,255,0.05)'
                    : 'none',
                }}
              >
                <span style={{ color: '#be9651', fontWeight: 800, fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 15, color: 'rgba(245,239,230,0.8)', lineHeight: 1.55 }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
        >
          <p style={{
            textAlign: 'center', fontSize: 15,
            color: 'rgba(245,239,230,0.6)',
            lineHeight: 1.75, marginBottom: 24,
          }}>
            Tudo exatamente igual.{' '}
            <strong style={{ color: 'rgba(245,239,230,0.85)' }}>
              A única diferença é o valor.
            </strong>{' '}
            Ao invés de R$37,90…
          </p>

          <div style={{
            textAlign: 'center', marginBottom: 28,
            padding: '24px 20px',
            background: 'rgba(190,130,40,0.1)',
            borderRadius: 18,
            border: '1px solid rgba(190,130,40,0.25)',
          }}>
            <p style={{
              fontSize: 14, color: 'rgba(245,239,230,0.35)',
              marginBottom: 6, textDecoration: 'line-through', letterSpacing: '0.04em',
            }}>
              R$ 37,90
            </p>
            <p style={{ fontSize: 13, color: 'rgba(245,239,230,0.5)', marginBottom: 10 }}>
              Hoje você pode entrar por apenas
            </p>
            <p style={{
              fontSize: 'clamp(42px, 10vw, 54px)',
              fontWeight: 900, color: '#d4ae6e',
              lineHeight: 1, letterSpacing: '-1.5px', marginBottom: 8,
            }}>
              R$ 19,90
            </p>
            <p style={{ fontSize: 13, color: 'rgba(212,174,110,0.6)', fontWeight: 600, letterSpacing: '0.04em' }}>
              Menos da metade do investimento original
            </p>
          </div>

          <p style={{
            fontSize: 13, color: 'rgba(245,239,230,0.5)',
            lineHeight: 1.8, marginBottom: 8, textAlign: 'center',
          }}>
            <strong style={{ color: '#f87171', fontWeight: 700 }}>Atenção:</strong>{' '}
            Assim que você sair desta página, esta condição desaparece.
          </p>

          <p style={{
            fontSize: 14, color: 'rgba(245,239,230,0.7)',
            lineHeight: 1.8, marginBottom: 28, textAlign: 'center', fontStyle: 'italic',
          }}>
            A Programação do Egito já roubou tempo demais da sua vida.{' '}
            <strong style={{ fontStyle: 'normal', color: 'rgba(245,239,230,0.9)' }}>
              Não permita que mais um dia passe sem iniciar sua travessia.
            </strong>
          </p>

          <motion.button
            whileHover={{ scale: 1.025, boxShadow: '0 12px 44px rgba(190,130,40,0.5)' }}
            whileTap={{ scale: 0.975 }}
            onClick={() => { window.location.href = 'https://pay.cakto.com.br/34xcvbf' }}
            style={{
              width: '100%', padding: '19px',
              borderRadius: 16, border: 'none',
              background: 'linear-gradient(135deg, #be9651 0%, #d4ae6e 60%, #c9a05a 100%)',
              color: '#1c1005', fontSize: 17, fontWeight: 800,
              cursor: 'pointer', letterSpacing: '0.02em',
              boxShadow: '0 4px 28px rgba(190,130,40,0.35)',
              marginBottom: 20,
              transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
            }}
          >
            QUERO ENTRAR POR R$ 19,90 🗝️
          </motion.button>

          <p style={{
            textAlign: 'center', fontSize: 12,
            color: 'rgba(245,239,230,0.22)', lineHeight: 1.8, fontStyle: 'italic',
          }}>
            Deus não te trouxe até aqui para te deixar parada.
          </p>
        </motion.div>

      </div>
    </motion.div>
  )
}
