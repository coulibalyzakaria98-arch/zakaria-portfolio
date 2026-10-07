import { useState } from 'react'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../context/useLanguage'
import { useTheme } from '../context/useTheme'

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const isDark = theme === 'dark'

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <a href="#home" className="text-lg font-semibold tracking-[0.3em] text-slate-900 transition hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400">
          ZAKARIA
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 bg-white/70 p-2.5 text-slate-700 shadow-sm transition duration-300 hover:border-emerald-500 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-400/60 dark:hover:text-emerald-400"
            aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/cv/CV%20ZAKARIA.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
          >
            <Download size={16} />
            {t.nav.cv}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 transition duration-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 transition duration-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            aria-label="Ouvrir le menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden dark:border-white/10 dark:bg-slate-950">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-emerald-400"
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
              {t.nav.cv}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
