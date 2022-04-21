import Email from 'components/Email'
import Social, { SocialList } from 'components/Social'
import { ChangeThemeContext } from 'context/ChangeThemeContext'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import darkTheme from 'styles/darkTheme'
import GlobalStyles from 'styles/global'
import lightTheme from 'styles/lightTheme'
import * as S from './styles'

const ThemeSwitcher = ({ children }) => {
  const { theme } = useContext(ChangeThemeContext)
  const { t } = useTranslation('common')
  const socialMedias = t('socialMedias', {
    returnObjects: true
  }) as SocialList[]

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <S.ContentWrapper>
        <Social socialMedias={socialMedias} />
        <Email orientation="right" email={process.env.EMAIL} />
        {children}
      </S.ContentWrapper>
    </ThemeProvider>
  )
}

export default ThemeSwitcher
