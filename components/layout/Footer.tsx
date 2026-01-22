import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const translations = {
  fr: {
    services: 'Services',
    contact: 'Contact',
    legal: 'Mentions Légales',
    address: '1004 Lausanne, Chemin des Retraites 3',
    hours: 'Lun-Ven: 8h-18h',
    copyright: 'Tous droits réservés',
  },
  en: {
    services: 'Services',
    contact: 'Contact',
    legal: 'Legal Notice',
    address: '1004 Lausanne, Chemin des Retraites 3',
    hours: 'Mon-Fri: 8am-6pm',
    copyright: 'All rights reserved',
  },
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">FENIX PLUS SA</h3>
            <p className="text-slate-400 mb-4">
              Entreprise de construction et rénovation professionnelle à Lausanne et dans le canton de Vaud.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>1004 Lausanne, Chemin des Retraites 3</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+41213201234" className="hover:text-white transition-colors">+41 21 320 12 34</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@fenix-plus-sa.ch" className="hover:text-white transition-colors">contact@fenix-plus-sa.ch</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Lun-Ven: 8h-18h</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Réalisations</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">À Propos</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legal" className="hover:text-white transition-colors">Mentions Légales</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Politique de Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm">
          <p>© {currentYear} FENIX PLUS SA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}