import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'
import { projects } from '@/data/projects'
import { testimonials } from '@/data/testimonials'
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle, Star, Shield, Clock3, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FENIX PLUS SA - Entreprise de construction à Lausanne',
  description: 'Entreprise de rénovation à Lausanne. Rénovation intérieure et extérieure, murs et plâtre, sols, restauration. Service professionnel dans le canton de Vaud.',
}

const Hero = () => (
  <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src="https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=1920&q=80"
        alt="Construction site"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Shield size={16} />
          Entreprise certifiée & assurée
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Rénovation de qualité
          <span className="text-emerald-400"> à Lausanne</span>
        </h1>
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          FENIX PLUS SA transforme vos espaces avec expertise et précision. 
          Rénovation intérieure, extérieure, et travaux de maçonnerie dans le canton de Vaud.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            Demander un devis gratuit
            <ArrowRight size={20} />
          </Link>
          <Link
            href="tel:+41211234567"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 backdrop-blur-sm"
          >
            <Phone size={20} />
            +41 21 123 45 67
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400">15+</div>
            <div className="text-sm text-slate-400">Années d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400">500+</div>
            <div className="text-sm text-slate-400">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400">98%</div>
            <div className="text-sm text-slate-400">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400">24/7</div>
            <div className="text-sm text-slate-400">Service d'urgence</div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
  </section>
)

const Services = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos services</h2>
        <p className="text-lg text-slate-600">Une expertise complète pour tous vos projets de rénovation et construction</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.slice(0, 6).map((service) => (
          <div key={service.id} className="group bg-slate-50 hover:bg-white rounded-xl p-8 border border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
              <Clock3 className="text-emerald-600 group-hover:text-white transition-colors duration-300" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title.fr}</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">{service.description.fr}</p>
            <ul className="space-y-2 mb-6">
              {service.features.fr.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={`/services/${service.id}`}
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              En savoir plus
              <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Voir tous les services
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
)

const Projects = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos réalisations</h2>
        <p className="text-lg text-slate-600">Découvrez quelques-uns de nos projets récents dans le canton de Vaud</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 6).map((project) => (
          <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.images[0]}
                alt={project.title.fr}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {project.beforeAfter && (
                <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  Avant/Après
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                <MapPin size={14} />
                {project.location}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title.fr}</h3>
              <p className="text-sm text-slate-600 line-clamp-2 mb-4">{project.description.fr}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.services.slice(0, 2).map((service, idx) => (
                  <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                    {service}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                Voir le projet
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Voir tous les projets
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
)

const Testimonials = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos clients parlent de nous</h2>
        <p className="text-lg text-slate-600">Découvrez les retours de nos clients satisfaits</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.slice(0, 6).map((testimonial) => (
          <div key={testimonial.id} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, idx) => (
                <Star key={idx} className="text-amber-400 fill-amber-400" size={16} />
              ))}
            </div>
            <p className="text-slate-700 mb-4 leading-relaxed">"{testimonial.text.fr}"</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-500">{testimonial.role} • {testimonial.location}</div>
              </div>
              {testimonial.date && (
                <div className="text-sm text-slate-400">{testimonial.date}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/temoignages"
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Voir tous les témoignages
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
)

const ContactCTA = () => (
  <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <Phone size={28} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
      <p className="text-xl text-slate-300 mb-8">
        Contactez-nous aujourd'hui pour une consultation gratuite et un devis personnalisé.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25"
        >
          Demander un devis
          <ArrowRight size={20} />
        </Link>
        <Link
          href="tel:+41211234567"
          className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 backdrop-blur-sm"
        >
          <Phone size={20} />
          +41 21 123 45 67
        </Link>
      </div>
    </div>
  </section>
)

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <ContactCTA />
    </main>
  )
}
