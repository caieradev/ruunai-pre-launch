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
  metadataBase: new URL('https://ruunai.com'),
  title: 'RuunAI - Your AI Running Coach, Built for You',
  description: 'Get a personalized running training plan powered by AI. Adaptive, data-driven coaching that evolves with your progress.',
  keywords: ['running coach', 'training plan', 'AI coach', 'personalized training', 'running', 'marathon training'],
  authors: [{ name: 'Caio Miguel Fernandes' }],
  creator: 'Caio Miguel Fernandes',
  publisher: 'RuunAI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ruunai.com',
    siteName: 'RuunAI',
    title: 'RuunAI - Your AI Running Coach',
    description: 'Personalized running plans that adapt to you',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RuunAI - Your AI Running Coach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ruun_ai',
    creator: '@ruun_ai',
    title: 'RuunAI - Your AI Running Coach',
    description: 'Personalized running plans that adapt to you',
    images: ['/images/og-image.png'],
  },
  verification: {
    google: '', // Add your Google Search Console verification code here when ready
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
