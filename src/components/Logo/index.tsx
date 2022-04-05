import { ChangeThemeContext } from 'context/ChangeThemeContext'
import { useContext } from 'react'
import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
}

export const ThemedLogo = {
  white: '/img/icons-adobe-logo-white.svg',
  black: '/img/icons-adobe-logo-black.svg'
}

const Logo = ({
  color = 'white',
  size = 'normal',
  hideOnMobile
}: LogoProps) => {
  const { theme } = useContext(ChangeThemeContext)

  return (
    <S.Wrapper color={color} size={size} hideOnMobile={hideOnMobile}>
      <S.LogoWrapper
        src={theme ? ThemedLogo.black : ThemedLogo.white}
        data-testid="logo"
        aria-label="Logo"
        alt="Logo"
      />
    </S.Wrapper>
  )
}

export default Logo
