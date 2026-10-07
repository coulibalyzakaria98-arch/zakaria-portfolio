import { motion } from 'framer-motion'
import Experience from '../components/Experience'

function ExperiencePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="mb-10 max-w-2xl"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">Experience</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Professional journey</h1>
      </motion.div>
      <Experience />
    </section>
  )
}

export default ExperiencePage
