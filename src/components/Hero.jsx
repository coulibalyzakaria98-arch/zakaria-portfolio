import { ArrowRight, BriefcaseBusiness, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'

function Hero() {
  const { t } = useLanguage()
  const highlights = t.hero.badges

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.18),_transparent_38%),radial-gradient(circle_at_right,_rgba(59,130,246,0.12),_transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-300">
            <BriefcaseBusiness size={14} />
            {t.hero.available}
          </div>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {t.hero.title}
          </h1>

          <p className="mt-4 text-lg font-medium text-emerald-600 sm:text-xl dark:text-emerald-400">
            {t.hero.role}
          </p>

          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            {highlights.join(' · ')}
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 sm:text-lg dark:text-slate-300">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              {t.buttons.viewProjects}
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:text-emerald-300"
            >
              {t.buttons.contactMe}
            </Link>
            <a
              href="/cv/CV%20ZAKARIA.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-400/60 hover:text-emerald-600 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:text-emerald-300"
            >
              {t.buttons.downloadCv}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-600 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300"
              >
                <Sparkles size={14} className="text-emerald-400" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 p-3 shadow-2xl shadow-slate-200/60 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-emerald-950/20">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10" />
            <img
              src="/images/profile/Coulibaly%20Zakaria.jpg"
              alt="Coulibaly Zakaria"
              className="relative z-10 h-[540px] w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
