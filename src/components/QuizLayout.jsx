import Logo from './Logo'
import ProgressBar from './ProgressBar'
import quizBg from '../assets/IMAGEM-GERA.png'

export default function QuizLayout({ children, step, total, showProgress = true }) {
  return (
    <div className="app-screen" style={{
      minHeight: '100vh',
      backgroundImage: `url(${quizBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px 60px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Overlay escuro para legibilidade */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(7,22,22,0.72)',
        pointerEvents: 'none',
      }} />
      {/* Decorative glow */}
      <div style={{
        position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)',
        width: 500, height: 300,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -60, right: -80,
        width: 300, height: 300,
        background: 'radial-gradient(ellipse, rgba(190,150,81,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Logo />
      {showProgress && <ProgressBar current={step} total={total} />}

      <div style={{ width: '100%', maxWidth: 460, position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
