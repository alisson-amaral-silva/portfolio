import Icon, { IconProps } from 'components/Icon'
import Side from 'components/Side'
import * as S from './styles'

export interface SocialList {
  url: string
  name: 'Npm' | 'GitHub' | 'Instagram' | 'Linkedin'
}

export interface SocialProps {
  socialMedias: SocialList[]
}

const Social = ({ socialMedias }: SocialProps) => {
  return (
    <>
      <Side orientation="left">
        <S.SocialListWrapper>
          {socialMedias &&
            socialMedias.map(({ url, name }, i) => (
              <li key={i}>
                <a
                  href={url}
                  aria-label={name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </S.SocialListWrapper>
      </Side>
    </>
  )
}

export default Social
