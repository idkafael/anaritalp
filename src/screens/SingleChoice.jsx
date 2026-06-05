import { motion } from 'framer-motion'
import QuizLayout from '../components/QuizLayout'
import OptionButton from '../components/OptionButton'

export default function SingleChoice({ question, onAnswer, step, total }) {
  return (
    <QuizLayout step={step} total={total}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <h2 style={{
          fontSize: 'clamp(18px, 4vw, 22px)',
          fontWeight: 700, color: '#f5efe6',
          textAlign: 'center', marginBottom: 28,
          lineHeight: 1.4, letterSpacing: '-0.2px',
        }}>
          {question.question}
        </h2>

        <div>
          {question.options.map((opt, i) => (
            <OptionButton
              key={i}
              index={i}
              emoji={opt.emoji}
              text={opt.text}
              onClick={() => onAnswer(opt)}
            />
          ))}
        </div>
      </motion.div>
    </QuizLayout>
  )
}
