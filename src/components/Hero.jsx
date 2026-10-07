import { ArrowRight, BriefcaseBusiness, Cpu, ShieldCheck, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const highlights = ['Web Development', 'AI-Assisted Development', 'Vibe Coding', 'Networks', 'Cybersecurity']

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.18),_transparent_38%),radial-gradient(circle_at_right,_rgba(59,130,246,0.12),_transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
            <BriefcaseBusiness size={14} />
            Disponible pour de nouvelles opportunités
          </div>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            COULIBALY ZAKARIA
          </h1>

          <p className="mt-4 text-lg font-medium text-emerald-400 sm:text-xl">
            Développeur Web · AI Builder · IT Consultant · Entrepreneur Digital
          </p>

          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
            Web Development · AI-Assisted Development · Vibe Coding · Networks · Cybersecurity
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Je conçois et développe des solutions numériques innovantes en combinant développement web, intelligence artificielle et technologies modernes.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Voir mes projets
              <ArrowRight size={16} />
            </a>
            <a
              href="/cv/CV%20ZAKARIA.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/60 hover:text-emerald-300"
            >
              Télécharger mon CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-300"
              >
                {item === 'Développement Web' && <Sparkles size={14} className="text-emerald-400" />}
                {item === 'IA' && <Cpu size={14} className="text-sky-400" />}
                {item === 'Réseaux' && <ShieldCheck size={14} className="text-violet-400" />}
                {item === 'Cybersécurité' && <ShieldCheck size={14} className="text-amber-400" />}
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
          <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-emerald-950/20">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10" />
            <img
              src="/images/profile/Coulibaly%20Zakaria.jpg"
              alt="Portrait de Zakaria Coulibaly"
              className="relative z-10 h-[540px] w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
