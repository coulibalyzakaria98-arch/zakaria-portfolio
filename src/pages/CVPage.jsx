import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

function CVPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">CV</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Curriculum Vitae</h1>
        <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
          Téléchargez mon CV pour consulter mon parcours, mes compétences et mes réalisations.
        </p>

        <a
          href="/cv/CV%20ZAKARIA.pdf"
          download
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
        >
          <Download size={18} />
          Télécharger mon CV
        </a>
      </motion.div>
    </section>
  )
}

export default CVPage
