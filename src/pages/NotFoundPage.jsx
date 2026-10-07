import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">404</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Page introuvable</h1>
        <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
          La page que vous cherchez n’existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
        >
          Retour à l’accueil
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
