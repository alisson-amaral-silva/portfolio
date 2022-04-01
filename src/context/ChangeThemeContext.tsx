import { createContext, useState } from 'react'

type ChangeThemeContextType = {
  theme: boolean
  toggleTheme: () => void
}

export const ChangeThemeContext = createContext({} as ChangeThemeContextType)

export function ChangeThemeProvider({ children }) {
  const [theme, setTheme] = useState<boolean>(true)

  const toggleTheme = () => {
    setTheme((theme) => !theme)
  }

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
