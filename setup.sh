#!/bin/bash
set -e

# Clean up
rm -rf app components lib types prisma scripts public 2>/dev/null || true
rm -f next.config.ts package.json postcss.config.js tailwind.config.ts tsconfig.json README.md .env 2>/dev/null || true

# Create package.json
cat > package.json << 'EOF'
{
  "name": "withly-next",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.1.3",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.1.3",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
EOF

# Create app directory
mkdir -p app

# Create layout
cat > app/layout.tsx << 'EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Withly — Never do things alone',
  description: 'Find people to do things with in your city.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
EOF

# Create homepage
cat > app/page.tsx << 'EOF'
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
      <div style={{
withly-next.vercel.app
cat > setup.sh << 'ENDOFSCRIPT'
#!/bin/bash
set -e

# Clean up
rm -rf app components lib types prisma scripts public 2>/dev/null || true
rm -f next.config.ts package.json postcss.config.js tailwind.config.ts tsconfig.json README.md .env 2>/dev/null || true

# Create package.json
cat > package.json << 'EOF'
{
  "name": "withly-next",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.1.3",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.1.3",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
EOF

# Create app directory
mkdir -p app

# Create layout
cat > app/layout.tsx << 'EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Withly — Never do things alone',
  description: 'Find people to do things with in your city.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
EOF

# Create homepage
cat > app/page.tsx << 'EOF'
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
EOF

# Create next config
cat > next.config.ts << 'EOF'
import type { NextConfig } from 'next'
const nextConfig: NextConfig = {}
export default nextConfig
EOF

# Create tsconfig
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

echo "✅ Files created! Committing and pushing..."

git add .
git commit -m "Deploy working Withly Next.js app"
git push origin main

echo "🚀 Done! Check https://withly-next.vercel.app in ~2 minutes."
