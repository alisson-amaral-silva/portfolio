import styled, { css } from 'styled-components'

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 2.5rem;
    color: ${theme.font.color};
  `}
`

export const Description = styled.h2`
  font-weight: 400;
  font-size: 2.5rem;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
