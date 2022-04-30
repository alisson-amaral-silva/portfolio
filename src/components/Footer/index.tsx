import Icon from 'components/Icon'
import Logo from 'components/Logo'
import { SocialList } from 'components/Social'
import { ChangeLanguageContext } from 'context/ChangeLanguageContext'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const Footer = () => {
  const { t } = useTranslation('common')
  const { toggleLanguage, language } = useContext(ChangeLanguageContext)

  const hoverVariants = {
    hover: {
      opacity: 1
    },
    initial: {
      opacity: 0
    }
  }
  const socialMedias = t('socialMedias', {
    returnObjects: true
  }) as SocialList[]

  const handleTopEvent = () => {
    window.scrollTo(0, 0)
  }

  return (
    <S.Wrapper>
      <S.SocialLinksWrapper>
        <ul>
          {socialMedias &&
            socialMedias.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}

          <li>
            <a href={`/${language}`} onClick={toggleLanguage}>
              {language === 'en' ? (
                <S.Icon
                  src="/img/brazil-icon.png"
                  data-testid="brazil-icon"
                  aria-label="brazil icon"
                  alt="brazil icon"
                />
              ) : (
                <S.Icon
                  src="/img/usa-icon.png"
                  data-testid="usa-icon"
                  aria-label="usa icon"
                  alt="usa icon"
                />
              )}
            </a>
          </li>
        </ul>
      </S.SocialLinksWrapper>
      <S.LogoWrapper
        onClick={handleTopEvent}
        layout
        initial="initial"
        whileHover="hover"
      >
        <Logo />
        <S.FooterText variants={hoverVariants} transition={{ duration: 0.25 }}>
          {t('footer.text')}
        </S.FooterText>
      </S.LogoWrapper>
    </S.Wrapper>
  )
}
export default Footer
