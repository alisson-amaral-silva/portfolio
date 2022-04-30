import Icon, { IconProps } from 'components/Icon'
import Side from 'components/Side'
import { ChangeLanguageContext } from 'context/ChangeLanguageContext'
import Link from 'next/link'
import { useContext } from 'react'
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
  const { toggleLanguage, language } = useContext(ChangeLanguageContext)

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
          {language === 'en' ? (
            <Link href="/" locale="pt">
              <a onClick={toggleLanguage}>
                <S.Icon
                  src="/img/brazil-icon.png"
                  data-testid="brazil-icon"
                  aria-label="brazil icon"
                  alt="brazil icon"
                />
              </a>
            </Link>
          ) : (
            <Link href="/" locale="en">
              <a onClick={toggleLanguage}>
                <S.Icon
                  src="/img/usa-icon.png"
                  data-testid="usa-icon"
                  aria-label="usa icon"
                  alt="usa icon"
                />
              </a>
            </Link>
          )}
        </li>
      </S.SocialListWrapper>
    </Side>
  )
}

export default Social
