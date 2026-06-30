import { motion } from 'framer-motion'
import Logo from '../components/Logo'

export default function IntroScreen({ onStart }) {
  return (
    <div className="app-screen" style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0a2e2e 0%, #0F3A3A 40%, #0d3535 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 24px',
      position: 'relative', overflowX: 'hidden', overflowY: 'auto',
    }}>
      {/* Background glows */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', right: '-10%',
        width: 350, height: 350,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ width: '100%', maxWidth: 440, textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Hero: logo + H1 sobrepostos */}
        <div style={{ position: 'relative', marginBottom: 20 }}>
          <Logo size={200} />
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: 12, left: 0, right: 0,
              padding: '0 12px',
              textAlign: 'center',
              fontSize: 'clamp(22px, 5.5vw, 32px)',
              fontWeight: 800, lineHeight: 1.2,
              color: '#f5efe6',
              letterSpacing: '-0.4px',
            }}
          >
            Você não nasceu para viver presa no{' '}
            <span style={{ color: '#ffffff' }}>
              Egito que te feriu.
            </span>
          </motion.h1>
        </div>

        {/* Gold label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <span style={{
            display: 'inline-block',
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#be9651', fontWeight: 600, marginBottom: 16,
            padding: '5px 16px', borderRadius: 99,
            border: '1px solid rgba(190,150,81,0.3)',
            background: 'rgba(190,150,81,0.06)',
          }}>
            Diagnóstico DNA de Escrava
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            fontSize: 16, fontWeight: 400,
            color: '#ffffff', marginBottom: 36, lineHeight: 1.7,
          }}
        >
          Descubra por que tantas mulheres continuam vivendo os mesmos ciclos de medo, insegurança e sensação de esgotamento, mesmo amando a Deus, e como iniciar uma travessia prática rumo à vida que Ele preparou para você.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            display: 'flex', justifyContent: 'center', gap: 28,
            marginBottom: 36,
          }}
        >
          {[
            { num: '12', label: 'Perguntas' },
            { num: '2min', label: 'Duração' },
            { num: '100%', label: 'Gratuito' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#be9651' }}>{s.num}</div>
              <div style={{ fontSize: 11, color: 'rgba(245,239,230,0.4)', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(190,150,81,0.4)' }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          style={{
            width: '100%', padding: '17px 24px',
            borderRadius: 14, border: 'none',
            background: 'linear-gradient(135deg, #be9651, #d4ae6e)',
            color: '#ffffff', fontSize: 16, fontWeight: 700,
            cursor: 'pointer', letterSpacing: '0.02em',
            boxShadow: '0 4px 24px rgba(190,150,81,0.3)',
          }}
        >
          COMEÇAR MEU DIAGNÓSTICO →
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 16, fontSize: 12, color: 'rgba(245,239,230,0.3)' }}
        >
          🔐 Suas respostas são 100% confidenciais.
        </motion.p>
      </div>
    </div>
  )
}
