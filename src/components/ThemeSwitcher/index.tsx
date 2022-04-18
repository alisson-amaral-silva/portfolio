import Email from 'components/Email'
import Social from 'components/Social'
import { ChangeThemeContext } from 'context/ChangeThemeContext'
import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import darkTheme from 'styles/darkTheme'
import GlobalStyles from 'styles/global'
import lightTheme from 'styles/lightTheme'
import * as S from './styles'

const ThemeSwitcher = ({ children }) => {
  const { theme } = useContext(ChangeThemeContext)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <S.ContentWrapper>
        <Social />
        <Email />
        {children}
      </S.ContentWrapper>
    </ThemeProvider>
  )
}

export default ThemeSwitcher
