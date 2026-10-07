import { motion } from 'framer-motion'
import { education } from '../data/experiences'

function Education() {
  return (
    <section className="bg-slate-100/70 py-20 dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">Formation</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Éducation</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {education.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/50 dark:border-white/10 dark:bg-slate-950/75 dark:shadow-none">
                <p className="text-sm uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">{item.period || 'Formation'}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-emerald-600 dark:text-emerald-400">{item.institution}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
