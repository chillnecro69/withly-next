export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui'
    }}>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Withly</h1>
        <p style={{ fontSize: '1.2rem' }}>Never do things alone in your city</p>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '1rem',
          borderRadius: '1rem',
          marginTop: '2rem',
          backdropFilter: 'blur(10px)'
        }}>
          🚀 Live and working!
        </div>
      </div>
    </div>
  )
}
