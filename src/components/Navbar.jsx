import { useState } from 'react'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'

const navItems = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <a href="#home" className="text-lg font-semibold tracking-[0.3em] text-white transition hover:text-emerald-400">
          ZAKARIA
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-400"
            aria-label="Basculer le thème"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/cv/CV%20ZAKARIA.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
          >
            <Download size={16} />
            Télécharger mon CV
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200"
            aria-label="Basculer le thème"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200"
            aria-label="Ouvrir le menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-emerald-400"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/cv/CV%20ZAKARIA.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-medium text-slate-950"
            >
              <Download size={16} />
              Télécharger mon CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
