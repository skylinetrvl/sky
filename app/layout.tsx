import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Noto_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/components/language-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Skyline Travel Agency | Your Trusted Travel Partner',
  description: 'Skyline is a premier travel agency based in Mississauga, Ontario. We specialize in creating unforgettable travel experiences - flights, hotels, visa services, and tour packages.',
  keywords: 'travel agency, Mississauga, Ontario, Canada, flights, hotels, visa services, tour packages, travel, سفر, وكالة سفر, تأشيرات',
  authors: [{ name: 'Skyline Travel' }],
  creator: 'Skyline Travel Agency',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    alternateLocale: 'ar_SA',
    url: 'https://skylinetrvl.ca',
    siteName: 'Skyline Travel Agency',
    title: 'Skyline Travel Agency | Your Trusted Travel Partner',
    description: 'Discover the world with Skyline - Your trusted travel partner in Canada. Flights, hotels, visa services, and tour packages.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skyline Travel Agency',
    description: 'Your Trusted Travel Partner in Canada',
  },
  icons: {
    icon: '/favicon.jpg',
    apple: '/apple-icon.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#d4a853' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${notoArabic.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
