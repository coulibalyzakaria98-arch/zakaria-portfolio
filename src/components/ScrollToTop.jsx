import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace(/^#/, '')

    if (hash) {
      const frame = requestAnimationFrame(() => {
        const section = document.getElementById(hash)

        if (!section) {
          return
        }

        const top = section.getBoundingClientRect().top + window.scrollY - 88
        window.scrollTo({ top, behavior: 'smooth' })
      })

      return () => cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return null
}

export default ScrollToTop
