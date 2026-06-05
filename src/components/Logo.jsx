export default function Logo({ size = 56 }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
      <div style={{
        width: size, height: size,
        border: '1.5px solid #be9651',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(190,150,81,0.08)',
        boxShadow: '0 0 24px rgba(190,150,81,0.15)',
      }}>
        <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 28 28" fill="none">
          <path d="M14 3 L14 25" stroke="#be9651" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M14 3 C14 3 8 8 8 14 C8 18 10 21 14 23" stroke="#be9651" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          <path d="M14 3 C14 3 20 8 20 14 C20 18 18 21 14 23" stroke="#be9651" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          <path d="M8 11 C8 11 11 10 14 11 C17 12 20 11 20 11" stroke="#be9651" strokeWidth="1" strokeLinecap="round"/>
          <circle cx="14" cy="3" r="1.5" fill="#be9651"/>
        </svg>
      </div>
    </div>
  )
}
