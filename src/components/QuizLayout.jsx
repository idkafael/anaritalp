import Logo from './Logo'
import ProgressBar from './ProgressBar'

export default function QuizLayout({ children, step, total, showProgress = true }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0a2e2e 0%, #0F3A3A 40%, #0d3535 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px 60px',
      position: 'relative',
      overflow: 'hidden',
    }}>
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
