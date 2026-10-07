import { useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './languageContext'
import { DEFAULT_LANGUAGE, LANGUAGE_KEY, seoMeta, translations } from './languageConfig'

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_LANGUAGE
    }

    const savedLanguage = window.localStorage.getItem(LANGUAGE_KEY)
    return savedLanguage && translations[savedLanguage] ? savedLanguage : DEFAULT_LANGUAGE
  })

  const t = translations[language] ?? translations[DEFAULT_LANGUAGE]

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(LANGUAGE_KEY, language)
    document.documentElement.lang = language
    document.title = seoMeta[language]?.title ?? seoMeta[DEFAULT_LANGUAGE].title

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) {
      descriptionTag.setAttribute(
        'content',
        seoMeta[language]?.description ?? seoMeta[DEFAULT_LANGUAGE].description,
      )
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]')
    const ogDescriptionTag = document.querySelector('meta[property="og:description"]')
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', seoMeta[language]?.title ?? seoMeta[DEFAULT_LANGUAGE].title)
    }
    if (ogDescriptionTag) {
      ogDescriptionTag.setAttribute(
        'content',
        seoMeta[language]?.description ?? seoMeta[DEFAULT_LANGUAGE].description,
      )
    }
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      translations,
    }),
    [language, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export { LanguageProvider }
