import { motion } from 'framer-motion'
import { BadgeCheck, CircleDashed } from 'lucide-react'
import { badges } from '../data/badges'

const levels = ['Beginner', 'Intermediate', 'Advanced', 'Learning', 'Completed']

function ProgressPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="mb-10 max-w-2xl"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">Badges</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Progress & badges</h1>
      </motion.div>

      <div className="mb-8 flex flex-wrap gap-2">
        {levels.map((level) => (
          <span key={level} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-slate-600 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300">
            {level}
          </span>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {badges.map((badge) => (
          <article key={badge.id} className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none">
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                {badge.level === 'Completed' ? <BadgeCheck size={20} /> : <CircleDashed size={20} />}
              </div>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                {badge.type}
              </span>
            </div>

            <h2 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{badge.name}</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{badge.domain}</p>
            <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{badge.description}</p>
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
              {badge.level}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProgressPage
