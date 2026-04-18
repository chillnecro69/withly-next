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
