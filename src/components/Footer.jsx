import { BriefcaseBusiness, GitBranch, Mail, MessageCircle } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-xl font-semibold tracking-[0.18em] text-white">COULIBALY ZAKARIA</p>
          <p className="mt-2 text-sm text-slate-400">Développeur Web · IT Consultant · Entrepreneur Digital</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <a href="https://www.linkedin.com/in/zakaria-coulibaly-78a9822b2" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-emerald-400/60 hover:text-emerald-300"><BriefcaseBusiness size={15} /> LinkedIn</a>
          <a href="https://github.com/coulibalyzakaria98-arch" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-emerald-400/60 hover:text-emerald-300"><GitBranch size={15} /> GitHub</a>
          <a href="https://wa.me/2250556225039" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-emerald-400/60 hover:text-emerald-300"><MessageCircle size={15} /> WhatsApp</a>
          <a href="mailto:coulibalyzakaria98@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-emerald-400/60 hover:text-emerald-300"><Mail size={15} /> Email</a>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
        © 2026 Coulibaly Zakaria. Tous droits réservés.
      </div>
    </footer>
  )
}

export default Footer
