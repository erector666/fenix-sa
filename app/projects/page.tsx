import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nos Réalisations - FENIX PLUS SA',
  description: 'Découvrez nos projets de rénovation et construction réalisés dans le canton de Vaud.',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Réalisations</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Découvrez quelques-uns de nos projets récents dans le canton de Vaud.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-50 hover:bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title.fr}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category.fr}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title.fr}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {project.description.fr}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{project.location}</span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors"
                    >
                      Voir le projet
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}