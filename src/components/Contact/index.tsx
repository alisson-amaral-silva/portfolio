import usePrefersReducedMotion from 'hooks/usePrefersReducedMotion'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const Contact = () => {
  const { t } = useTranslation('common')
  const revealContainer = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

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
    <S.ContactSection id="contact">
      <h2 className="numbered-heading overline">{t('session.contact')}</h2>

      <h2 className="title">{t('contact.title')}</h2>

      <S.ParagraphWrapper>{t('contact.text')}</S.ParagraphWrapper>

      <a className="email-link" href={`mailto:${process.env.EMAIL}`}>
        {t('contact.button-message')}
      </a>
    </S.ContactSection>
  )
}

export default Contact
