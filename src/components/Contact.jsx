import { ArrowRight, BriefcaseBusiness, GitBranch, Mail, MessageCircle } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'

function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-white via-slate-50 to-white p-8 shadow-lg shadow-slate-200/50 sm:p-10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-none">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">{t.contact.label}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">{t.contact.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-700 dark:text-slate-300">
              {t.contact.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a href="mailto:coulibalyzakaria98@gmail.com" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-emerald-300">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"><Mail size={18} /></span>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{t.contact.email}</div>
                  <div className="font-medium text-slate-900 dark:text-white">{t.contact.sendEmail}</div>
                </div>
              </div>
              <ArrowRight size={16} />
            </a>

            <a href="https://wa.me/2250556225039" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-emerald-300">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"><MessageCircle size={18} /></span>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{t.contact.whatsapp}</div>
                  <div className="font-medium text-slate-900 dark:text-white">+225 0556225039</div>
                </div>
              </div>
              <ArrowRight size={16} />
            </a>

            <a href="https://www.linkedin.com/in/zakaria-coulibaly-78a9822b2" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-emerald-300">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"><BriefcaseBusiness size={18} /></span>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{t.contact.linkedin}</div>
                  <div className="font-medium text-slate-900 dark:text-white">{t.contact.viewLinkedIn}</div>
                </div>
              </div>
              <ArrowRight size={16} />
            </a>

            <a href="https://github.com/coulibalyzakaria98-arch" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-emerald-300">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"><GitBranch size={18} /></span>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{t.contact.github}</div>
                  <div className="font-medium text-slate-900 dark:text-white">{t.contact.viewGithub}</div>
                </div>
              </div>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
