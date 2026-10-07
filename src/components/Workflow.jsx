import { motion } from 'framer-motion'
import { useLanguage } from '../context/useLanguage'

function Workflow() {
  const { t } = useLanguage()
  const steps = t.workflow.steps

  return (
    <section className="bg-slate-100/70 py-20 dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">{t.workflow.label}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">{t.workflow.title}</h2>
          </div>

          <p className="mb-8 max-w-3xl text-base leading-8 text-slate-700 dark:text-slate-300">
            {t.workflow.intro}
          </p>

          <div className="grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="relative rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-200/50 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-none"
              >
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">{step.number}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{step.text}</p>
                {index < steps.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-emerald-400/60 md:block" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center text-lg font-medium text-slate-700 dark:text-slate-200">
            {t.workflow.summary}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Workflow
