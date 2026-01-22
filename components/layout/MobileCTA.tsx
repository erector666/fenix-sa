'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'

const translations = {
  fr: {
    call: 'Appeler',
    quote: 'Devis',
  },
  en: {
    call: 'Call',
    quote: 'Quote',
  },
}

export function MobileCTA() {
  const [showCTA, setShowCTA] = useState(true)
  const pathname = usePathname()
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowCTA(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const lang = pathname.startsWith('/en') ? 'en' : 'fr'
  const t = translations[lang]

  if (!isMobile || !showCTA) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50 md:hidden">
      <div className="flex gap-3">
        <a
          href="tel:+41213111111"
          className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-blue-700 transition-colors"
        >
          <Phone size={20} />
          {t.call}
        </a>
        <a
          href="/contact"
          className="flex-1 bg-orange-500 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-orange-600 transition-colors"
        >
          <MessageCircle size={20} />
          {t.quote}
        </a>
      </div>
    </div>
  )
}
