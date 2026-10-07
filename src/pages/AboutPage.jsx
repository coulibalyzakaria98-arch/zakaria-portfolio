import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Engagements from '../components/Engagements'
import { useLanguage } from '../context/useLanguage'

function AboutPage() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <About />
      <Experience />
      <Education />
      <Engagements />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="mt-6 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">CV</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{t.nav.cv}</h2>
          </div>
          <a href="/cv/CV%20ZAKARIA.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-400">
            <Download size={18} />
            {t.nav.cv}
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutPage
