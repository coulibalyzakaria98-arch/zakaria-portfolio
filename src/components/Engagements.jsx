import { motion } from 'framer-motion'

const engagements = [
  {
    title: 'Volontariat CAN23',
    description: 'Engagement dans des initiatives liées à l’innovation numérique, à la mobilisation des talents et à la participation citoyenne.',
  },
  {
    title: 'Innovation numérique',
    description: 'Développement de solutions technologiques orientées impact, utilité et accompagnement des acteurs de terrain.',
  },
  {
    title: 'Hackathons & initiatives communautaires',
    description: 'Participation et accompagnement dans des dynamiques de création, de prototypage et de mise en valeur de projets numériques.',
  },
  {
    title: 'Projets à impact',
    description: 'Conception de plateformes et outils contribuant à l’éducation, l’emploi, l’écologie et l’accès aux ressources numériques.',
  },
]

function Engagements() {
  return (
    <section className="bg-slate-900/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">Impact</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Au-delà du code</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Je m’intéresse aux technologies qui répondent à des problèmes concrets en Afrique, notamment dans l’emploi, l’éducation, l’environnement, l’entrepreneuriat et la gestion des crises.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {engagements.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/75 p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                  ✦
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Engagements
