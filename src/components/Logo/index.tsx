import * as S from './styles'

const Logo = () => {
  return (
    <S.LogoWrapper href="#" data-testid="logo" className="logo">
      Portf<span data-testid="second-logo">olio.</span>
    </S.LogoWrapper>
  )
}

export default Logo
