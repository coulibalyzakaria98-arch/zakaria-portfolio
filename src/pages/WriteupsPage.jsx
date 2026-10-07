import { motion } from 'framer-motion'
import { ArrowUpRight, Clock3, FolderOpen } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { writeups } from '../data/writeups'

function WriteupsPage() {
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
          {language === 'fr' ? 'Writeups' : language === 'pt' ? 'Writeups' : 'Writeups'}
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          {language === 'fr' ? 'Travaux techniques & analyses' : language === 'pt' ? 'Trabalhos técnicos e análises' : 'Technical work & analysis'}
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
          {language === 'fr'
            ? 'Un espace pour partager les expérimentations, apprentissages et notes techniques en développement, réseaux et cybersécurité.'
            : language === 'pt'
              ? 'Um espaço para compartilhar experimentos, aprendizados e notas técnicas em desenvolvimento, redes e cibersegurança.'
              : 'A space to share experiments, learning notes and technical reflections around development, networking and cybersecurity.'}
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {writeups.map((item) => {
          const title = item.title[language] || item.title.fr
          const description = item.description[language] || item.description.fr
          const category = item.category[language] || item.category.fr
          const content = item.content[language] || item.content.fr

          return (
            <article
              key={item.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none"
            >
              <img src={item.image} alt={title} className="h-52 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-2.5 py-1 text-emerald-700 dark:text-emerald-300">
                    <FolderOpen size={12} />
                    {category}
                  </span>
                  <span>{item.date}</span>
                </div>

                <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{description}</p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-2">
                    <Clock3 size={14} />
                    {item.readingTime}
                  </span>
                  <span>{item.technologies.join(' · ')}</span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-slate-200 pt-4 dark:border-white/10">
                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {content[0] || 'Contenu à compléter avec les détails techniques du writeup.'}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    {language === 'fr' ? 'Voir le writeup' : language === 'pt' ? 'Ver writeup' : 'View writeup'}
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default WriteupsPage
