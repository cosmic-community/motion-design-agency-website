import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Motion Design Agency - Premium Animation & Design Studio',
  description: 'High-end motion design agency specializing in brand animation, motion graphics, and visual storytelling. Transform your brand with cutting-edge animation.',
  keywords: 'motion design, animation, brand animation, motion graphics, visual effects, creative agency',
  authors: [{ name: 'Motion Design Agency' }],
  creator: 'Motion Design Agency',
  publisher: 'Motion Design Agency',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://motionagency.com',
    title: 'Motion Design Agency - Premium Animation & Design Studio',
    description: 'High-end motion design agency specializing in brand animation, motion graphics, and visual storytelling.',
    siteName: 'Motion Design Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Motion Design Agency - Premium Animation & Design Studio',
    description: 'High-end motion design agency specializing in brand animation, motion graphics, and visual storytelling.',
    creator: '@motionagency',
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Access environment variable on server side
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* Pass bucket slug as prop to client component */}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}