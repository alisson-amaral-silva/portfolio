import { parseCookies, setCookie } from 'nookies'
import { createContext, useEffect, useState } from 'react'

type ChangeThemeContextType = {
  theme: string
  toggleTheme: () => void
}

export const ChangeThemeContext = createContext({} as ChangeThemeContextType)

export function ChangeThemeProvider({ children }) {
  const [theme, setTheme] = useState<string>('light')

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  const setMode = (mode: string) => {
    setCookie(null, 'USER_THEME', mode, {
      maxAge: 86400 * 7,
      path: '/'
    })
    setTheme(mode)
  }

  useEffect(() => {
    const cookies = parseCookies()
    const localTheme = cookies.USER_THEME
    localTheme && setTheme(localTheme)
  }, [])

  return (
    <ChangeThemeContext.Provider
      value={{
        toggleTheme,
        theme
      }}
    >
      {children}
    </ChangeThemeContext.Provider>
  )
}
