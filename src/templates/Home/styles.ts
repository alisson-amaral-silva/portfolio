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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0px 150px;

  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 10rem 150px;

  @media (max-width: 1080px) {
    padding: 10rem 150px;
  }
  @media (max-width: 768px) {
    padding: 150px 50px;
  }
  @media (max-width: 480px) {
    padding: 125px 25px;
  }
`
