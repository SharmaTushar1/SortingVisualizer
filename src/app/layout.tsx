import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sorting Visualizer',
  description: 'Made with <3 by Tushar Sharma',
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
