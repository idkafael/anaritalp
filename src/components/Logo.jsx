import logoImg from '../assets/logo.png'

export default function Logo({ size = 110 }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
      <img
        src={logoImg}
        alt="Logo"
        style={{ width: size, height: size, objectFit: 'contain', opacity: 0.45 }}
      />
    </div>
  )
}
