import { useState } from 'react'
import { motion } from 'framer-motion'
import QuizLayout from '../components/QuizLayout'
import OptionButton from '../components/OptionButton'

export default function MultiChoice({ question, onAnswer, step, total }) {
  const [selected, setSelected] = useState([])

  const toggle = (i) => {
    setSelected(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])
  }

  return (
    <QuizLayout step={step} total={total}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35 }}
      >
        <h2 style={{
          fontSize: 'clamp(18px,4vw,22px)', fontWeight: 700, color: '#f5efe6',
          textAlign: 'center', marginBottom: 28, lineHeight: 1.4,
        }}>
          {question.question}
        </h2>

        {question.options.map((opt, i) => (
          <OptionButton
            key={i} index={i}
            emoji={opt.emoji} text={opt.text}
            checkbox selected={selected.includes(i)}
            onClick={() => toggle(i)}
          />
        ))}

        <motion.button
          whileHover={{ scale: 1.02, boxShadow: '0 8px 28px rgba(190,150,81,0.35)' }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onAnswer(selected.map(i => question.options[i]))}
          style={{
            width: '100%', padding: '16px', borderRadius: 14, border: 'none',
            background: selected.length > 0
              ? 'linear-gradient(135deg, #be9651, #d4ae6e)'
              : 'rgba(190,150,81,0.15)',
            color: selected.length > 0 ? '#0F3A3A' : 'rgba(190,150,81,0.4)',
            fontSize: 16, fontWeight: 700, cursor: 'pointer',
            marginTop: 8, transition: 'all 0.3s',
            letterSpacing: '0.02em',
          }}
        >
          Continuar →
        </motion.button>
      </motion.div>
    </QuizLayout>
  )
}
