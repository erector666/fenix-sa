import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">Page non trouvée</h2>
        <p className="text-slate-600 mb-6">La page que vous recherchez n'existe pas.</p>
        <Link 
          href="/"
          className="btn-primary inline-block"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}