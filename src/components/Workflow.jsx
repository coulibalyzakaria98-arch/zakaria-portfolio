import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'IDEA',
    text: 'Comprendre le problème et identifier le besoin.',
  },
  {
    number: '02',
    title: 'DESIGN',
    text: 'Définir l’expérience utilisateur et l’architecture de la solution.',
  },
  {
    number: '03',
    title: 'AI-ASSISTED BUILD',
    text: 'Utiliser intelligemment l’IA pour accélérer le prototypage et le développement.',
  },
  {
    number: '04',
    title: 'CODE & TEST',
    text: 'Analyser, comprendre, tester, corriger et optimiser le code.',
  },
  {
    number: '05',
    title: 'SHIP',
    text: 'Déployer une solution fonctionnelle et améliorer le produit à partir des retours.',
  },
]

function Workflow() {
  return (
    <section className="bg-slate-900/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">Méthode</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Ma méthode de création</h2>
          </div>

          <p className="mb-8 max-w-3xl text-base leading-8 text-slate-300">
            J’utilise l’intelligence artificielle comme un accélérateur, pas comme un substitut à la compréhension technique.
          </p>

          <div className="grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="relative rounded-3xl border border-white/10 bg-slate-950/80 p-5"
              >
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">{step.number}</div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
                {index < steps.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-emerald-400/60 md:block" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center text-lg font-medium text-slate-200">
            Human Creativity <span className="mx-2 text-emerald-400">×</span> AI <span className="mx-2 text-emerald-400">×</span> Engineering
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Workflow
