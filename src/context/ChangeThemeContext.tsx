import { parseCookies, setCookie } from 'nookies'
import { createContext, useEffect, useState } from 'react'

type ChangeThemeContextType = {
  theme: any
  toggleTheme: () => void
}

type ChangeThemeProviderProps = {
  children: React.ReactNode
}

export const ChangeThemeContext = createContext({} as ChangeThemeContextType)

export function ChangeThemeProvider({ children }: ChangeThemeProviderProps) {
  const [theme, setTheme] = useState<any>('light')

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  const setMode = (mode: 'dark' | 'light') => {
    setCookie(null, 'USER_THEME', mode, {
      maxAge: 86400 * 7,
      path: '/'
    })
    setTheme(mode)
  }

  useEffect(() => {
    const cookies = parseCookies()
    const localTheme = cookies.USER_THEME as 'dark' | 'light'
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
