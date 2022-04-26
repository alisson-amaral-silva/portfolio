import { useRouter } from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { createContext, useEffect, useState } from 'react'

type ChangeLanguageContextType = {
  language: string
  toggleLanguage: () => void
}

export const ChangeLanguageContext = createContext(
  {} as ChangeLanguageContextType
)

export function ChangeLanguageProvider({ children }) {
  const { locale } = useRouter()
  const [language, setLanguage] = useState<string>('pt')

  const toggleLanguage = () => {
    locale === 'en' ? setLanguageMode('pt') : setLanguageMode('en')
  }

  const setLanguageMode = (mode: string) => {
    setCookie(null, 'USER_LANGUAGE', mode, {
      maxAge: 86400 * 7,
      path: '/'
    })
    setLanguage(mode)
  }

  useEffect(() => {
    const cookies = parseCookies()
    const localTheme = cookies.USER_LANGUAGE
    localTheme && setLanguage(localTheme)
  }, [])

  return (
    <ChangeLanguageContext.Provider
      value={{
        toggleLanguage,
        language
      }}
    >
      {children}
    </ChangeLanguageContext.Provider>
  )
}
