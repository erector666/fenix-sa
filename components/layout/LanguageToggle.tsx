'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Languages } from 'lucide-react'

export function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()
  
  const currentLocale = pathname.split('/')[1] as 'fr' | 'en'
  const otherLocale = currentLocale === 'fr' ? 'en' : 'fr'

  const toggleLanguage = () => {
    const pathWithoutLocale = pathname.replace(/^\/(fr|en)/, '')
    router.push(`/${otherLocale}${pathWithoutLocale || '/'}`)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
      aria-label="Toggle language"
    >
      <Languages size={16} />
      <span className="uppercase">{currentLocale}</span>
    </button>
  )
}