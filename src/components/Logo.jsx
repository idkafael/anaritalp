export default function Logo({ size = 72 }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
      <img
        src="/logo.png"
        alt="Logo"
        style={{ width: size, height: size, objectFit: 'contain' }}
      />
    </div>
  )
}
