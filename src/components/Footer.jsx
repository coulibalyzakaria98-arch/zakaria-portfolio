import { BriefcaseBusiness, GitBranch, Globe, Mail, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { getSectionPath } from '../utils/navigation'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-slate-200 bg-white/80 dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-xl font-semibold tracking-[0.18em] text-slate-900 dark:text-white">COULIBALY ZAKARIA</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t.hero.role}</p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
            <Link to="/" className="transition hover:text-emerald-600 dark:hover:text-emerald-300">Accueil</Link>
            <Link to={getSectionPath('about')} className="transition hover:text-emerald-600 dark:hover:text-emerald-300">À propos</Link>
            <Link to={getSectionPath('skills')} className="transition hover:text-emerald-600 dark:hover:text-emerald-300">Compétences</Link>
            <Link to={getSectionPath('projects')} className="transition hover:text-emerald-600 dark:hover:text-emerald-300">Projets</Link>
            <Link to={getSectionPath('experience')} className="transition hover:text-emerald-600 dark:hover:text-emerald-300">Expériences</Link>
            <Link to={getSectionPath('contact')} className="transition hover:text-emerald-600 dark:hover:text-emerald-300">Contact</Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
            <Link to="/writeups" className="transition hover:text-emerald-600 dark:hover:text-emerald-300">Writeups</Link>
            <Link to="/blog" className="transition hover:text-emerald-600 dark:hover:text-emerald-300">Blog</Link>
            <Link to="/notes" className="transition hover:text-emerald-600 dark:hover:text-emerald-300">Notes</Link>
            <Link to="/competitions" className="transition hover:text-emerald-600 dark:hover:text-emerald-300">Compétitions</Link>
            <Link to="/progress" className="transition hover:text-emerald-600 dark:hover:text-emerald-300">Progression</Link>
            <Link to="/certifications" className="transition hover:text-emerald-600 dark:hover:text-emerald-300">Certifications</Link>
            <Link to="/cv" className="transition hover:text-emerald-600 dark:hover:text-emerald-300">CV</Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
            <a href="https://www.linkedin.com/in/zakaria-coulibaly-78a9822b2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-emerald-300"><BriefcaseBusiness size={15} /> LinkedIn</a>
            <a href="https://github.com/coulibalyzakaria98-arch" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-emerald-300"><GitBranch size={15} /> GitHub</a>
            <a href="https://web.facebook.com/zakaria.coulibaly.866947" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-emerald-300"><Globe size={15} /> Facebook</a>
            <a href="https://wa.me/2250556225039" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-emerald-300"><MessageCircle size={15} /> WhatsApp</a>
            <a href="mailto:coulibalyzakaria98@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-emerald-300"><Mail size={15} /> Email</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
        {t.footer.rights}
      </div>
    </footer>
  )
}

export default Footer
