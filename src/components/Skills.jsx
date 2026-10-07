import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import { useLanguage } from '../context/useLanguage'

function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="scroll-mt-24 bg-slate-100/70 py-20 dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">{t.skills.label}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">{t.skills.title}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((group) => (
              <div key={group.title} className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/50 dark:border-white/10 dark:bg-slate-950/70 dark:shadow-none">
                <h3 className="mb-5 text-xl font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
