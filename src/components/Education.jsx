import { motion } from 'framer-motion'
import { education } from '../data/experiences'

function Education() {
  return (
    <section className="bg-slate-900/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">Formation</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Éducation</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {education.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/75 p-6">
                <p className="text-sm uppercase tracking-[0.15em] text-slate-400">{item.period || 'Formation'}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-emerald-400">{item.institution}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
