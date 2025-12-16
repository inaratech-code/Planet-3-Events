import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Planet 3 Events | We Design Experiences, Not Just Events',
  description: 'Premium event planning company specializing in creating unforgettable experiences. Luxury, energetic, and creative event design.',
  keywords: 'event planning, luxury events, corporate events, weddings, event design',
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
