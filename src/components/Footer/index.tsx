import Logo from 'components/Logo'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const Footer = () => {
  const { t } = useTranslation('common')
  const hoverVariants = {
    hover: {
      opacity: 1
    },
    initial: {
      opacity: 0
    }
  }

  const handleTopEvent = () => {
    window.scrollTo(0, 0)
  }

  return (
    <S.Wrapper>
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
