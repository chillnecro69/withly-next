export default function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '4rem', margin: '0 0 1rem 0', fontWeight: 'bold' }}>
          Withly
        </h1>
        <p style={{ fontSize: '1.5rem', margin: '0 0 2rem 0' }}>
          Never do things alone in your city
        </p>
        <div style={{ 
          background: 'white', 
          color: '#333', 
          padding: '2rem', 
          borderRadius: '1rem',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <h2 style={{ margin: '0 0 1rem 0' }}>🚀 Live and Running!</h2>
          <p style={{ margin: 0 }}>
            Withly is now deployed. Full features coming soon!
          </p>
        </div>
      </div>
    </div>
  )
}
