import { motion } from 'framer-motion'
import { ArrowUpRight, CalendarRange, Trophy } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { competitions } from '../data/competitions'

function CompetitionsPage() {
  const { language } = useLanguage()

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="mb-10 max-w-3xl"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
          {language === 'fr' ? 'Compétitions' : language === 'pt' ? 'Competições' : 'Competitions'}
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          {language === 'fr' ? 'Hackathons, bootcamps & défis' : language === 'pt' ? 'Hackathons, bootcamps e desafios' : 'Hackathons, bootcamps & challenges'}
        </h1>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {competitions.map((item) => {
          const title = item.name[language] || item.name.fr
          const organization = item.organization[language] || item.organization.fr
          const project = item.project[language] || item.project.fr
          const role = item.role[language] || item.role.fr
          const description = item.description[language] || item.description.fr

          return (
            <article
              key={item.id}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{item.year}</p>
                    <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">{title}</h2>
                  </div>
                </div>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-600 transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-emerald-300">
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <div className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <p><span className="font-semibold text-slate-900 dark:text-white">{language === 'fr' ? 'Organisation' : language === 'pt' ? 'Organização' : 'Organization'}:</span> {organization}</p>
                <p><span className="font-semibold text-slate-900 dark:text-white">{language === 'fr' ? 'Projet' : language === 'pt' ? 'Projeto' : 'Project'}:</span> {project}</p>
                <p><span className="font-semibold text-slate-900 dark:text-white">{language === 'fr' ? 'Rôle' : language === 'pt' ? 'Função' : 'Role'}:</span> {role}</p>
                <p><span className="font-semibold text-slate-900 dark:text-white">{language === 'fr' ? 'Statut' : language === 'pt' ? 'Status' : 'Status'}:</span> {item.status}</p>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{description}</p>

              <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                <CalendarRange size={14} />
                {item.year}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default CompetitionsPage
