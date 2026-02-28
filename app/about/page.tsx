import { Metadata } from 'next'
import Image from 'next/image'
import { Shield, Award, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À Propos - FENIX PLUS SA',
  description: 'Découvrez FENIX PLUS SA, entreprise de construction et rénovation professionnelle à Lausanne et dans le canton de Vaud.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Nous</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Entreprise de construction et rénovation professionnelle à Lausanne et dans le canton de Vaud.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre Histoire</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                FENIX PLUS SA est une entreprise de construction et rénovation basée à Lausanne, 
                spécialisée dans les travaux de rénovation intérieure et extérieure depuis plus de 15 ans.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Notre équipe de professionnels qualifiés intervient dans tout le canton de Vaud, 
                offrant des services de haute qualité pour tous types de projets de rénovation.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Nous nous engageons à respecter les délais, les budgets et à garantir la satisfaction 
                de nos clients avec des finitions impeccablement soignées.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                alt="Notre équipe"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900">15+</div>
              <div className="text-sm text-slate-600">Années d'expérience</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900">500+</div>
              <div className="text-sm text-slate-600">Projets réalisés</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900">98%</div>
              <div className="text-sm text-slate-600">Clients satisfaits</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <Award className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900">24/7</div>
              <div className="text-sm text-slate-600">Service d'urgence</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-slate-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Nos Certifications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <Shield className="w-10 h-10 text-emerald-600" />
                <div>
                  <div className="font-semibold text-slate-900">Entreprise certifiée</div>
                  <div className="text-sm text-slate-600">Assurance responsabilité civile</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Award className="w-10 h-10 text-emerald-600" />
                <div>
                  <div className="font-semibold text-slate-900">Qualité garantie</div>
                  <div className="text-sm text-slate-600">Normes SIA et ISO</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-10 h-10 text-emerald-600" />
                <div>
                  <div className="font-semibold text-slate-900">Délais respectés</div>
                  <div className="text-sm text-slate-600">Planning garanti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}