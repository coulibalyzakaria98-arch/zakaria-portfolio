import { motion } from 'framer-motion'
import { ArrowUpRight, Clock3 } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { blogPosts } from '../data/blog'

function BlogPage() {
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
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">Blog</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          {language === 'fr' ? 'Articles & réflexions' : language === 'pt' ? 'Artigos e reflexões' : 'Articles & reflections'}
        </h1>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {blogPosts.map((post) => {
          const title = post.title[language] || post.title.fr
          const excerpt = post.excerpt[language] || post.excerpt.fr
          const category = post.category[language] || post.category.fr

          return (
            <article
              key={post.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none"
            >
              <img src={post.image} alt={title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 dark:border-white/10 dark:bg-white/5">{category}</span>
                  <span>{post.date}</span>
                </div>

                <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{excerpt}</p>

                <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Clock3 size={14} />
                  {post.readingTime}
                </div>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {language === 'fr' ? 'Lire l’article' : language === 'pt' ? 'Ler artigo' : 'Read article'}
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default BlogPage
