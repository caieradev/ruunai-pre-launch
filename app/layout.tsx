import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RuunAI - Your AI Running Coach, Built for You',
  description: 'Get a personalized running training plan powered by AI. Adaptive, data-driven coaching that evolves with your progress.',
  keywords: ['running coach', 'training plan', 'AI coach', 'personalized training', 'running', 'marathon training'],
  authors: [{ name: 'Caio Miguel Fernandes' }],
  openGraph: {
    title: 'RuunAI - Your AI Running Coach',
    description: 'Personalized running plans that adapt to you',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RuunAI - Your AI Running Coach',
    description: 'Personalized running plans that adapt to you',
    creator: '@ruun_ai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans overflow-x-hidden">{children}</body>
    </html>
  )
}
