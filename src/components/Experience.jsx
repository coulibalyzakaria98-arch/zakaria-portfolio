import { motion } from 'framer-motion'
import { useLanguage } from '../context/useLanguage'
import { experiences } from '../data/experiences'

function Experience() {
  const { t } = useLanguage()

  const timeline = experiences.map((experience, index) => {
    const translation = t.experience.items?.[index] ?? experience

    return {
      ...experience,
      role: translation.role ?? experience.role,
      company: translation.company ?? experience.company,
      period: translation.period ?? experience.period,
      description: translation.description ?? experience.description,
      domain: translation.domain ?? experience.domain,
    }
  })

  return (
    <section id="experience" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">{t.experience.label}</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">{t.experience.title}</h2>
        </div>

        <div className="relative before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-slate-300 md:before:left-1/2 dark:before:bg-slate-700">
          {timeline.map((experience, index) => (
            <div
              key={`${experience.company}-${experience.period}`}
              className={`relative mb-8 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
            >
              <div className="absolute left-0 top-6 h-4 w-4 rounded-full border-4 border-emerald-400 bg-white md:left-1/2 md:-translate-x-1/2 dark:bg-slate-950" />
              <div
                className={`rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/50 md:w-[calc(50%-2rem)] dark:border-white/10 dark:bg-slate-900/75 dark:shadow-none ${
                  index % 2 === 0 ? 'md:ml-auto' : ''
                }`}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{experience.role}</h3>
                    <p className="mt-1 text-emerald-600 dark:text-emerald-400">{experience.company}</p>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{experience.period}</span>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {experience.description.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {experience.domain && (
                  <div className="mt-4 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                    {experience.domain}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
