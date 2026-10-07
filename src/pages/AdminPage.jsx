function AdminPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">Admin</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Future content management</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300">
          This area is prepared for future structured content management with dedicated sections for projects, writeups, blog posts, notes, competitions, badges and certifications.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {['Projects', 'Writeups', 'Blog', 'Notes', 'Competitions', 'Badges', 'Certifications'].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{item}</div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Content ready to be managed in a dedicated admin layer later.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminPage
