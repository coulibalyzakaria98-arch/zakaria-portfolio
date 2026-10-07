import { ArrowUpRight, GitBranch, Globe } from 'lucide-react'

function ProjectCard({ project, onSelect }) {
  const hasDemo = Boolean(project.demo)
  const hasGithub = Boolean(project.github)

  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-emerald-200/60 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-slate-950/30 dark:hover:shadow-emerald-950/25 ${hasDemo ? 'cursor-pointer' : ''}`}
      onClick={hasDemo ? () => onSelect(project) : undefined}
      role={hasDemo ? 'button' : undefined}
      tabIndex={hasDemo ? 0 : undefined}
      onKeyDown={
        hasDemo
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onSelect(project)
              }
            }
          : undefined
      }
    >
      <div className="relative overflow-hidden">
        <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-300">
            {project.filterCategory}
          </span>
          {hasDemo && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                onSelect(project)
              }}
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              Détails <ArrowUpRight size={14} />
            </button>
          )}
        </div>

        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{project.shortDescription}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          {hasDemo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-emerald-300"
            >
              Voir le projet
            </a>
          )}

          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-2.5 text-slate-600 transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-emerald-300"
              aria-label={`Voir le dépôt GitHub de ${project.title}`}
            >
              <GitBranch size={16} />
            </a>
          )}

          {!hasDemo && !hasGithub && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                onSelect(project)
              }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-emerald-300"
            >
              Voir le projet
            </button>
          )}

          {hasDemo && !hasGithub && (
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-2.5 text-slate-600 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200">
              <Globe size={16} />
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
