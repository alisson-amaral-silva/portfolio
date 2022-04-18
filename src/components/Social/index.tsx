import Icon from 'components/Icon'
import Side from 'components/Side'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

export interface SocialProps {
  url: string
  name: string
}

const Social = () => {
  const { t } = useTranslation('common')
  const socialMedias = t('socialMedias', {
    returnObjects: true
  }) as SocialProps[]
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
