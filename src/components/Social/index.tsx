import Icon from 'components/Icon'
import Side from 'components/Side'
import { useTranslation } from 'react-i18next'
import { StaticI18nLink } from 'utils/i18n-browser'
import * as S from './styles'

export interface SocialList {
  url: string
  name: 'Npm' | 'GitHub' | 'Instagram' | 'Linkedin'
}

export interface SocialProps {
  socialMedias: SocialList[]
  orientation: 'left' | 'right'
}

const Social = ({ orientation, socialMedias }: SocialProps) => {
  const { i18n } = useTranslation('common')

  return (
    <Side orientation={orientation}>
      <S.SocialListWrapper>
        {socialMedias &&
          socialMedias.map(({ url, name }, i) => (
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
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
      </S.SocialListWrapper>
    </Side>
  )
}

export default Social
