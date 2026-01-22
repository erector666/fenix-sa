'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const translations = {
  fr: {
    home: 'Accueil',
    services: 'Services',
    projects: 'Réalisations',
    about: 'À Propos',
    contact: 'Contact',
    quote: 'Devis Gratuit',
  },
  en: {
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    quote: 'Free Quote',
  },
}

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const locale = pathname.split('/')[1] as 'fr' | 'en'
  const t = translations[locale] || translations.fr

  const navItems = [
    { href: `/${locale}`, label: t.home },
    { href: `/${locale}/services`, label: t.services },
    { href: `/${locale}/projects`, label: t.projects },
    { href: `/${locale}/about`, label: t.about },
    { href: `/${locale}/contact`, label: t.contact },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors hover:text-primary-600 ${
              isActive(item.href) ? 'text-primary-600' : 'text-slate-700'
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href={`/${locale}/contact`}
          className="btn-primary text-sm px-4 py-2"
        >
          {t.quote}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-slate-700 hover:text-primary-600"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-200 md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 text-sm font-medium ${
                  isActive(item.href) ? 'text-primary-600' : 'text-slate-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/contact`}
              className="btn-primary text-center py-2"
              onClick={() => setIsOpen(false)}
            >
              {t.quote}
            </Link>
          </div>
        </div>
      )}
    </>
  )
}