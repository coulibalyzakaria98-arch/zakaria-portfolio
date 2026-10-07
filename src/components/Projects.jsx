import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, GitBranch, Globe, X } from 'lucide-react'
import { projects, featuredProject } from '../data/projects'
import ProjectCard from './ProjectCard'

const filters = ['Tous', 'Web', 'IA', 'Entrepreneuriat', 'Impact', 'Réseaux / Cybersécurité']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [selectedProject, setSelectedProject] = useState(null)

  const visibleProjects =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((project) => {
          if (activeFilter === 'Réseaux / Cybersécurité') {
            return project.category.toLowerCase().includes('cyber') || project.category.toLowerCase().includes('réseaux')
          }
          return project.filterCategory === activeFilter
        })

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">Projets</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Projets & réalisations</h2>
      </div>

      <div className="mb-8 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeFilter === filter
                  ? 'bg-emerald-500 text-slate-950'
                  : 'border border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-400/50 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-emerald-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-12 overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-white/90 shadow-md shadow-slate-200/40 dark:bg-slate-950/90 dark:shadow-slate-950/60">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative h-[320px] overflow-hidden">
            <img src={featuredProject.image} alt={featuredProject.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
          </div>
          <div className="flex flex-col justify-center p-8">
            <span className="mb-3 inline-flex w-fit rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-300">
              Projet à la une
            </span>
            <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">{featuredProject.title}</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{featuredProject.category}</p>
            <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">{featuredProject.shortDescription}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setSelectedProject(featuredProject)}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
            >
              Voir le projet <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/60 sm:p-6 dark:border-white/10 dark:bg-slate-950 dark:shadow-slate-950/60"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                aria-label="Fermer le projet"
              >
                <X size={18} />
              </button>

              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 dark:border-white/10">
                <img src={selectedProject.image} alt={selectedProject.title} className="h-72 w-full object-cover sm:h-80" />
              </div>

              <div className="mt-6">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-300">
                  {selectedProject.category}
                </span>
                <h3 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">{selectedProject.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">{selectedProject.description}</p>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Problème</h4>
                  <p className="mt-2 text-slate-700 dark:text-slate-300">{selectedProject.problem}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Solution</h4>
                  <p className="mt-2 text-slate-700 dark:text-slate-300">{selectedProject.solution}</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Fonctionnalités</h4>
                <ul className="mt-3 grid gap-2 text-slate-700 dark:text-slate-300">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Technologies</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Résultats</h4>
                  <p className="mt-3 text-slate-700 dark:text-slate-300">{selectedProject.results || 'Aucun résultat public n’a été communiqué pour ce projet.'}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950">
                    <Globe size={16} />
                    Voir la démo
                  </a>
                )}
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-emerald-300">
                    <GitBranch size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
