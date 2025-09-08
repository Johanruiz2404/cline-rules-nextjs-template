import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/cn'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const fontDisplay = Inter({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Next.js Enterprise Template',
    template: '%s | Next.js Enterprise Template',
  },
  description: 'A sophisticated Next.js template with enterprise-level standards',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Enterprise'],
  authors: [{ name: 'Enterprise Team' }],
  creator: 'Enterprise Team',
  metadataBase: new URL('https://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localhost:3000',
    title: 'Next.js Enterprise Template',
    description: 'A sophisticated Next.js template with enterprise-level standards',
    siteName: 'Next.js Enterprise Template',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Enterprise Template',
    description: 'A sophisticated Next.js template with enterprise-level standards',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontMono.variable,
          fontDisplay.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
