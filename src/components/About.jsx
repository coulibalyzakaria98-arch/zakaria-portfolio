import { motion } from 'framer-motion'
import { useLanguage } from '../context/useLanguage'

function About() {
  const { t } = useLanguage()
  const identity = t.about.identity
  const cards = [
    { title: t.about.cards.web, subtitle: t.about.cards.webSub },
    { title: t.about.cards.ai, subtitle: t.about.cards.aiSub },
    { title: t.about.cards.networks, subtitle: t.about.cards.networksSub },
    { title: t.about.cards.security, subtitle: t.about.cards.securitySub },
  ]

  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">{t.about.label}</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">{t.about.title}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-8 text-slate-700 dark:text-slate-300">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200/60 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-slate-950/40">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{t.about.profile}</p>
            <div className="flex flex-wrap gap-3">
              {identity.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-300"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {cards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{card.title}</div>
                  <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{card.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
