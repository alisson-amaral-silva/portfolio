import Email from 'components/Email'
import Social, { SocialList } from 'components/Social'
import { ChangeThemeContext } from 'context/ChangeThemeContext'
import React from 'react'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import darkTheme from 'styles/darkTheme'
import GlobalStyles from 'styles/global'
import lightTheme from 'styles/lightTheme'
import * as S from './styles'

export interface ThemeSwitcherProps {
  children: React.ReactNode
}

const ThemeSwitcher = ({ children }: ThemeSwitcherProps) => {
  const { theme } = useContext(ChangeThemeContext)
  const { t } = useTranslation('common')
  const socialMedias = t('socialMedias', {
    returnObjects: true
  }) as SocialList[]

  return (
    <ThemeProvider
      theme={theme === 'light' ? (lightTheme as any) : (darkTheme as any)}
    >
      <GlobalStyles />
      {children}
      <Social orientation="left" socialMedias={socialMedias} />
      <Email orientation="right" email={process.env.EMAIL} />
    </ThemeProvider>
  )
}

export default ThemeSwitcher
