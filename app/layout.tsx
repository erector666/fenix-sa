import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCTA } from '@/components/layout/MobileCTA'
import { StructuredData } from '@/components/seo/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FENIX PLUS SA - Entreprise de construction à Lausanne',
  description: 'Entreprise de rénovation à Lausanne. Rénovation intérieure et extérieure, murs et plâtre, sols, restauration. Service professionnel dans le canton de Vaud.',
  keywords: 'rénovation Lausanne, entreprise de construction Vaud, rénovation intérieure, maçonnerie, sols, peinture',
  authors: [{ name: 'FENIX PLUS SA' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FENIX PLUS SA - Entreprise de construction à Lausanne',
    description: 'Rénovation professionnelle dans le canton de Vaud. Contactez-nous pour un devis gratuit.',
    type: 'website',
    locale: 'fr_CH',
    alternateLocale: ['en_US'],
    siteName: 'FENIX PLUS SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FENIX PLUS SA - Construction & Rénovation',
    description: 'Entreprise de rénovation professionnelle à Lausanne',
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
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  )
}