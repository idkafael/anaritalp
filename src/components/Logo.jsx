import logoImg from '../assets/logo.png'

export default function Logo({ size = 220 }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
      <img
        src={logoImg}
        alt="Logo"
        className="app-logo"
        style={{ width: size, height: size, objectFit: 'contain' }}
      />
    </div>
  )
}
