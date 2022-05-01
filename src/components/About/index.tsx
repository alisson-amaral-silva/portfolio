import usePrefersReducedMotion from 'hooks/usePrefersReducedMotion'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

export interface ILogo {
  //   image: HTMLImageElement;
  src: string | undefined
}

const About = ({ src }: ILogo) => {
  const { t } = useTranslation('common')
  const prefersReducedMotion = usePrefersReducedMotion()
  const revealContainer = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
    async function animate() {
      if (revealContainer.current) {
        const sr = (await import('scrollreveal')).default
        sr().reveal(revealContainer.current)
      }
    }
    animate()
  }, [])

  return (
    <S.AboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">{t('session.about')}</h2>
      <div className="inner">
        <div>
          <S.AboutParagraph> {t('intro')}</S.AboutParagraph>
          <S.AboutParagraph>
            {t('current-work')}
            <a
              className="company-link"
              href="https://www.iteris.com.br/"
              target="_blank"
              rel="noreferrer"
              style={{ transitionDelay: `${1}00ms` }}
            >
              {t('company')}
            </a>
            {t('clients')}
          </S.AboutParagraph>
        </div>
        <S.StyledPic>
          <div className="wrapper">
            <img
              className="img"
              src={src}
              width={300}
              height={300}
              alt="Alisson"
            />
          </div>
        </S.StyledPic>
      </div>
    </S.AboutSection>
  )
}

export default About
