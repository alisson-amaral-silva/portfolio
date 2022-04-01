import * as S from './styles'

export interface SwitchColorIconProps {
  theme: boolean
}

const SwitchColorIcon = ({ theme }: SwitchColorIconProps) => {
  return theme ? (
    <S.Icon
      src="/img/themeOn.svg"
      data-testid="light-mode"
      aria-label="Light mode"
      alt="Light Mode"
    />
  ) : (
    <S.Icon
      src="/img/themeOff.svg"
      data-testid="dark-mode"
      aria-label="Dark mode"
      alt="Dark Mode"
    />
  )
}

export default SwitchColorIcon
