export const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

export function getSectionPath(sectionId) {
  const normalized = sectionId?.replace(/^#/, '')

  if (!normalized || normalized === 'home') {
    return '/'
  }

  return `/#${normalized}`
}

export function scrollToSection(sectionId) {
  const normalized = sectionId?.replace(/^#/, '')

  if (!normalized) {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return
  }

  const element = document.getElementById(normalized)

  if (!element) {
    return
  }

  const top = element.getBoundingClientRect().top + window.scrollY - 88
  window.scrollTo({ top, behavior: 'smooth' })
}

export function navigateToSection(sectionId, navigate) {
  const normalized = sectionId?.replace(/^#/, '')

  if (!normalized) {
    navigate('/')
    return
  }

  const targetPath = getSectionPath(normalized)

  if (window.location.pathname === '/' && window.location.hash.replace(/^#/, '') === normalized) {
    scrollToSection(normalized)
    return
  }

  navigate(targetPath)
}
