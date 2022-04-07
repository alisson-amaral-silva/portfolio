import { ChangeThemeContext } from 'context/ChangeThemeContext'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ThemedLogo = {
  white: '/img/icon-black-panther.svg',
  black: '/img/icon-killmonger.svg'
}

const About = () => {
  const { t } = useTranslation('common')
  const { theme } = useContext(ChangeThemeContext)
  return (
    <>
      <S.Wrapper>
        <S.GreetingWrapper>{t('greeting')}</S.GreetingWrapper>
        <S.HeadingNameWrapper>
          Alisson Alcântara Amaral da Silva
        </S.HeadingNameWrapper>
        <S.HeadingSubtitleWrapper>{t('subtitle')}</S.HeadingSubtitleWrapper>
        <S.IntroWrapper>
          {t('intro')}
          <S.CompanyLink
            href="https://www.iteris.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <div style={{ transitionDelay: `${1}00ms` }}>{t('company')}</div>
          </S.CompanyLink>
        </S.IntroWrapper>
      </S.Wrapper>
    </>
  )
}

export default About
