import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/useLanguage'

const options = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
]

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentOption = options.find((option) => option.code === language) ?? options[0]

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={t.switcher.ariaLabel}
        onClick={() => setOpen((previous) => !previous)}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-500 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-400/60 dark:hover:text-emerald-400"
      >
        <span>{currentOption.flag}</span>
        <span className="hidden sm:inline">{currentOption.code.toUpperCase()}</span>
        <span className="hidden sm:inline">{currentOption.label}</span>
        <span className="sm:hidden">{currentOption.code.toUpperCase()}</span>
        <ChevronDown size={16} className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 z-50 mt-2 min-w-[170px] overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-1 shadow-xl shadow-slate-200/60 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/95 dark:shadow-slate-950/60"
          >
            {options.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => {
                  setLanguage(option.code)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                  option.code === language
                    ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5'
                }`}
                aria-label={`Select language ${option.label}`}
                role="menuitemradio"
                aria-checked={option.code === language}
              >
                <span>{option.flag}</span>
                <span>{option.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSwitcher
