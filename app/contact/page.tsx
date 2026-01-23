import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - FENIX PLUS SA',
  description: 'Contactez FENIX PLUS SA pour vos projets de rénovation à Lausanne et dans le canton de Vaud.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Demandez un devis gratuit pour votre projet de rénovation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Nos Coordonnées</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                  <div>
                    <div className="font-semibold text-slate-900">Adresse</div>
                    <div className="text-slate-600">1004 Lausanne, Chemin des Retraites 3</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-emerald-600" />
                  <div>
                    <div className="font-semibold text-slate-900">Téléphone</div>
                    <a href="tel:+41213201234" className="text-slate-600 hover:text-emerald-600 transition-colors">+41 21 320 12 34</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-emerald-600" />
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <a href="mailto:contact@fenix-plus-sa.ch" className="text-slate-600 hover:text-emerald-600 transition-colors">contact@fenix-plus-sa.ch</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-emerald-600" />
                  <div>
                    <div className="font-semibold text-slate-900">Horaires</div>
                    <div className="text-slate-600">Lun-Ven: 8h-18h</div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-4">Liens rapides</h3>
                <div className="space-y-2">
                  <Link href="/services" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                    → Nos services
                  </Link>
                  <Link href="/projects" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                    → Nos réalisations
                  </Link>
                  <Link href="/about" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                    → À propos
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Formulaire de contact</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="+41 XX XXX XX XX"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-2">
                    Type de projet
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  >
                    <option value="">Sélectionnez un type de projet</option>
                    <option value="interior">Rénovation intérieure</option>
                    <option value="exterior">Rénovation extérieure</option>
                    <option value="walls">Murs et plâtre</option>
                    <option value="painting">Peinture</option>
                    <option value="flooring">Sols</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none"
                    placeholder="Décrivez votre projet..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}