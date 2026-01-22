import Link from 'next/link'
import Image from 'next/image'
import { MainNav } from './MainNav'
import { LanguageToggle } from './LanguageToggle'
import { Phone, Mail } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=100&h=100&fit=crop"
                alt="FENIX PLUS SA"
                fill
                className="rounded-lg object-cover"
 />
            </div>
            <div className="hidden sm:block">
              <span className="block text-lg font-bold text-slate-900">FENIX PLUS SA</span>
              <span className="block text-xs text-slate-600">Construction & Rénovation</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <MainNav />
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4 text-sm">
              <a href="tel:+41213201234" className="flex items-center gap-1 text-slate-600 hover:text-primary-600 transition-colors">
                <Phone size={16} />
                <span>+41 21 320 12 34</span>
              </a>
              <a href="mailto:contact@fenix-plus-sa.ch" className="flex items-center gap-1 text-slate-600 hover:text-primary-600 transition-colors">
                <Mail size={16} />
                <span>contact@fenix-plus-sa.ch</span>
              </a>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  )
}