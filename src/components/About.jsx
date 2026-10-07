import { motion } from 'framer-motion'

const identity = ['Développeur', 'IT Consultant', 'Entrepreneur Digital', 'Passionné par l’innovation']

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">À propos</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">À propos de moi</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              Passionné par les technologies numériques et leur capacité à résoudre des problèmes concrets,
              je développe des solutions web et numériques tout en explorant les domaines de l’intelligence artificielle,
              des réseaux et de la cybersécurité.
            </p>
            <p>
              Mon parcours m’a conduit à combiner développement, conseil, innovation et entrepreneuriat dans un objectif simple :
              créer des outils utiles, accessibles et adaptés aux besoins réels des utilisateurs et des organisations.
            </p>
            <p>
              Je m’intéresse particulièrement aux projets qui créent de la valeur concrète, qu’il s’agisse d’un produit numérique,
              d’une plateforme de services ou d’une solution à impact social et économique.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/40">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Profil</p>
            <div className="flex flex-wrap gap-3">
              {identity.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">Web</div>
                <div className="mt-2 text-sm text-slate-400">Développement & interfaces</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">IA</div>
                <div className="mt-2 text-sm text-slate-400">Solutions intelligentes</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">Réseaux</div>
                <div className="mt-2 text-sm text-slate-400">Architecture & systèmes</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">Sécurité</div>
                <div className="mt-2 text-sm text-slate-400">Analyse & vigilance</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
