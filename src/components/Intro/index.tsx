import { useTranslation } from 'react-i18next'
import * as S from './styles'
import { motion } from 'framer-motion'

const Intro = () => {
  const { t } = useTranslation('common')
  const variants = {
    hidden: {
      scale: 0.8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4
      }
    }
  }

  return (
    <>
      <S.Wrapper>
        <motion.div initial="hidden" animate="visible" variants={variants}>
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
        </motion.div>
      </S.Wrapper>
    </>
  )
}

export default Intro
