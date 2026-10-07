import { ArrowRight, BriefcaseBusiness, GitBranch, Mail, MessageCircle } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">Contact</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Travaillons ensemble</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Vous avez un projet, une opportunité ou une idée à développer ? N’hésitez pas à me contacter.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a href="mailto:coulibalyzakaria98@gmail.com" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-emerald-400/60 hover:text-emerald-300">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300"><Mail size={18} /></span>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="font-medium text-white">Envoyer un email</div>
                </div>
              </div>
              <ArrowRight size={16} />
            </a>

            <a href="https://wa.me/2250556225039" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-emerald-400/60 hover:text-emerald-300">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300"><MessageCircle size={18} /></span>
                <div>
                  <div className="text-sm text-slate-400">WhatsApp</div>
                  <div className="font-medium text-white">+225 0556225039</div>
                </div>
              </div>
              <ArrowRight size={16} />
            </a>

            <a href="https://www.linkedin.com/in/zakaria-coulibaly-78a9822b2" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-emerald-400/60 hover:text-emerald-300">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300"><BriefcaseBusiness size={18} /></span>
                <div>
                  <div className="text-sm text-slate-400">LinkedIn</div>
                  <div className="font-medium text-white">Mon profil</div>
                </div>
              </div>
              <ArrowRight size={16} />
            </a>

            <a href="https://github.com/coulibalyzakaria98-arch" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-emerald-400/60 hover:text-emerald-300">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300"><GitBranch size={18} /></span>
                <div>
                  <div className="text-sm text-slate-400">GitHub</div>
                  <div className="font-medium text-white">Mon dépôt</div>
                </div>
              </div>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
