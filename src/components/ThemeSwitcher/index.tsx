import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import darkTheme from 'styles/darkTheme'
import lightTheme from 'styles/lightTheme'
import { useContext } from 'react'
import { ChangeThemeContext } from 'context/ChangeThemeContext'
import Social from 'components/Social'
import * as S from './styles'
import Email from 'components/Email'

const ThemeSwitcher = ({ children }: React.ReactElement) => {
  const { theme } = useContext(ChangeThemeContext)

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
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
