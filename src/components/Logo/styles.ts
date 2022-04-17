import styled, { css } from 'styled-components'

export const LogoWrapper = styled.a`
  ${({ theme }) => css`
    &.logo {
      font-size: 1.5rem;
      color: ${theme.font.color};
      letter-spacing: 1px;
    }
    &.logo span {
      color: ${theme.colors.primary};
    }
  `}
`
