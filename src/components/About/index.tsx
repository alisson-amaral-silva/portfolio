import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import mypic from '../../../public/img/me.jpg'
import * as S from './styles'

const About = () => {
  const { t } = useTranslation('common')
  const revealContainer = useRef(null)

  useEffect(() => {
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
      <h2 className="numbered-heading">About Me</h2>
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
            <Image
              className="img"
              src={mypic}
              width={300}
              height={300}
              quality={100}
              alt=""
            />
          </div>
        </S.StyledPic>
      </div>
    </S.AboutSection>
  )
}

export default About
