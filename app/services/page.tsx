import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nos Services - FENIX PLUS SA',
  description: 'Découvrez tous nos services de rénovation et construction à Lausanne et dans le canton de Vaud.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Une expertise complète pour tous vos projets de rénovation et construction dans le canton de Vaud.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-slate-50 hover:bg-white rounded-xl p-8 border border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                  <ArrowRight className="text-emerald-600 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title.fr}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.description.fr}</p>
                {service.features && service.features.fr && (
                  <ul className="space-y-2 text-sm text-slate-600 mb-4">
                    {service.features.fr.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                >
                  Demander un devis
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}