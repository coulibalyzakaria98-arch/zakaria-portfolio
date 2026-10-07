import { motion } from 'framer-motion'
import { experiences } from '../data/experiences'

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">Expérience</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Parcours professionnel</h2>
        </div>

        <div className="relative before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-slate-700 md:before:left-1/2">
          {experiences.map((experience, index) => (
            <div key={experience.role} className={`relative mb-8 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              <div className="absolute left-0 top-5 h-4 w-4 rounded-full border-4 border-emerald-400 bg-slate-950 md:left-1/2 md:-translate-x-1/2" />
              <div className={`rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                    <p className="mt-1 text-emerald-400">{experience.company}</p>
                  </div>
                  <span className="text-sm text-slate-400">{experience.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {experience.description.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
