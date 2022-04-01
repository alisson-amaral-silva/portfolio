import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import darkTheme from 'styles/darkTheme'
import lightTheme from 'styles/lightTheme'
import { useContext } from 'react'
import { ChangeThemeContext } from 'context/ChangeThemeContext'

const ThemeSwitcher = ({ children }: React.ReactElement) => {
  const { theme } = useContext(ChangeThemeContext)

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default ThemeSwitcher
