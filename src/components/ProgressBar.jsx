export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100)
  return (
    <div style={{ width: '100%', maxWidth: 460, margin: '0 auto 32px', padding: '0 4px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 11, color: 'rgba(190,150,81,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Diagnóstico
        </span>
        <span style={{ fontSize: 11, color: 'rgba(190,150,81,0.7)' }}>
          {current}/{total}
        </span>
      </div>
      <div style={{
        height: 3, borderRadius: 99,
        background: 'rgba(255,255,255,0.08)',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${pct}%`,
          borderRadius: 99,
          background: 'linear-gradient(90deg, #be9651, #d4ae6e)',
          transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '0 0 8px rgba(190,150,81,0.5)',
        }} />
      </div>
    </div>
  )
}
