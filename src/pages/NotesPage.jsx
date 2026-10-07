import { motion } from 'framer-motion'
import { Code2, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { notes } from '../data/notes'

function NotesPage() {
  const { language } = useLanguage()

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="mb-10 max-w-3xl"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
          {language === 'fr' ? 'Notes & Solutions' : language === 'pt' ? 'Notas & Soluções' : 'Notes & Solutions'}
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          {language === 'fr' ? 'Solutions techniques courtes et pratiques' : language === 'pt' ? 'Soluções técnicas curtas e práticas' : 'Short practical technical solutions'}
        </h1>
      </motion.div>

      <div className="space-y-6">
        {notes.map((note) => {
          const title = note.title[language] || note.title.fr
          const problem = note.problem[language] || note.problem.fr
          const solution = note.solution[language] || note.solution.fr
          const code = note.code[language] || note.code.fr

          return (
            <article
              key={note.id}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{note.technologies.join(' · ')}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{title}</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <Sparkles size={12} />
                  {note.tags[0]}
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                    {language === 'fr' ? 'Problème' : language === 'pt' ? 'Problema' : 'Problem'}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{problem}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                    {language === 'fr' ? 'Solution' : language === 'pt' ? 'Solução' : 'Solution'}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{solution}</p>
                </div>
              </div>

              {code && (
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-slate-100 dark:border-white/10">
                  <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900 px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    <Code2 size={12} />
                    {language === 'fr' ? 'Exemple' : language === 'pt' ? 'Exemplo' : 'Example'}
                  </div>
                  <pre className="overflow-x-auto p-4 text-sm leading-7 whitespace-pre-wrap">{code}</pre>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default NotesPage
