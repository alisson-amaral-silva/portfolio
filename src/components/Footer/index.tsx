import Icon from 'components/Icon'
import Logo from 'components/Logo'
import { SocialList } from 'components/Social'
import { useTranslation } from 'react-i18next'
import { StaticI18nLink } from 'utils/i18n-browser'
import * as S from './styles'

const Footer = () => {
  const { t, i18n } = useTranslation('common')

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
            {i18n.language === 'en' ? (
              <StaticI18nLink locale="pt">
                <S.Icon
                  src="/img/brazil-icon.png"
                  data-testid="brazil-icon"
                  aria-label="brazil icon"
                  alt="brazil icon"
                />
              </StaticI18nLink>
            ) : (
              <StaticI18nLink locale="en">
                <S.Icon
                  src="/img/usa-icon.png"
                  data-testid="usa-icon"
                  aria-label="usa icon"
                  alt="usa icon"
                />
              </StaticI18nLink>
            )}
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
