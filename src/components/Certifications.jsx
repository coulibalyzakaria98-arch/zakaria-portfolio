import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { certifications } from '../data/certifications'

function Certifications() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">Programmes</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Certifications & programmes</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((item) => (
            <div key={item.name} className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{item.year}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{item.name}</h3>
                </div>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-600 transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-emerald-300" aria-label={`Voir la ressource ${item.name}`}>
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <p className="mt-3 text-emerald-600 dark:text-emerald-400">{item.organization}</p>
              <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certifications
