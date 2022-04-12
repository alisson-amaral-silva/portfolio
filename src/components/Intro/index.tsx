import { useTranslation } from 'react-i18next'
import * as S from './styles'

const Intro = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <S.Wrapper>
        <S.GreetingWrapper>{t('greeting')}</S.GreetingWrapper>
        <S.HeadingNameWrapper>
          Alisson Alcântara Amaral da Silva
        </S.HeadingNameWrapper>
        <S.HeadingSubtitleWrapper>{t('subtitle')}</S.HeadingSubtitleWrapper>
        <S.IntroWrapper>
          {t('opening')}{' '}
          <a
            className="company-link"
            href="https://www.iteris.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <div style={{ transitionDelay: `${1}00ms` }}>{t('company')}</div>
          </a>
        </S.IntroWrapper>
      </S.Wrapper>
    </>
  )
}

export default Intro
