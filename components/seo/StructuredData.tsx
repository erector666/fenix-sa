'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface StructuredDataProps {
  type?: string
  name?: string
  description?: string
  url?: string
  image?: string
}

export function StructuredData({
  type = 'HomeAndConstructionBusiness',
  name = 'FENIX PLUS SA',
  description = 'Entreprise de rénovation professionnelle à Lausanne. Rénovation intérieure et extérieure, murs et plâtre, sols, restauration.',
  url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  image = '/api/og?title=FENIX%20PLUS%20SA'
}: StructuredDataProps = {}) {
  const pathname = usePathname()

  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type,
      name,
      description,
      url,
      image,
      telephone: '+41213111111',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rue du Grand-Pont 12',
        addressLocality: 'Lausanne',
        postalCode: '1003',
        addressCountry: 'CH',
        addressRegion: 'Vaud'
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00'
      },
      priceRange: '€€€'
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    script.setAttribute('data-structured-data', 'true')
    document.head.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[data-structured-data="true"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [pathname, type, name, description, url, image])

  return null
}
