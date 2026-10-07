import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { projects } from '../data/projects'

function ProjectsPage() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="mb-10 max-w-2xl"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">{t.projects.label}</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">{t.projects.title}</h1>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none">
            <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{project.filterCategory}</span>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-600 transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-emerald-300">
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{project.shortDescription}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={`${project.id}-${technology}`} className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
