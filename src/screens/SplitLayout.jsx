import { motion } from 'framer-motion'
import Logo from '../components/Logo'
import ProgressBar from '../components/ProgressBar'

export default function SplitLayout({ question, onAnswer, step, total }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 0%, #ffe0ef 0%, #fce8f0 55%, #f9d5e8 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '32px 16px 48px',
    }}>
      <Logo />
      <ProgressBar current={step} total={total} />
      <div style={{ width: '100%', maxWidth: 500 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <h2 style={{
            textAlign: 'center', fontSize: 20, fontWeight: 700,
            color: '#1a1a1a', marginBottom: 24, lineHeight: 1.4
          }}>
            {question.question}
          </h2>

          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              {question.options.map((opt, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onAnswer(opt)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                    padding: '12px 14px', borderRadius: 12, border: '2px solid transparent',
                    background: '#f5d5e8', cursor: 'pointer', textAlign: 'left',
                    marginBottom: 8, fontSize: 15, color: '#1a1a1a',
                  }}
                >
                  <span style={{ fontSize: 20 }}>{opt.emoji}</span>
                  <span>{opt.text}</span>
                </motion.button>
              ))}
            </div>

            {question.image && (
              <div style={{ width: 180, flexShrink: 0 }}>
                <img
                  src={question.image}
                  alt=""
                  style={{ width: '100%', borderRadius: 16, objectFit: 'cover', maxHeight: 360 }}
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
