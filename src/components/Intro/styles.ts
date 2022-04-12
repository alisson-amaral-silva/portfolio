import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0px;
  text-align: initial;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }
`
export const GreetingWrapper = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
  font-size: clamp(20px,5vw,24px);
  font-weight: 400;
`

export const HeadingNameWrapper = styled.h2`
  ${({ theme }) => css`
    color: ${theme.font.color};
  `}
  margin: 0;
  font-size: clamp(20px, 8vw, 50px);
`

export const HeadingSubtitleWrapper = styled.h3`
  ${({ theme }) => css`
    color: ${theme.font.color};
  `}
  margin: 0;
  font-size: clamp(20px, 8vw, 50px);
  max-width: 60rem;
`

export const IntroWrapper = styled.h4`
  ${({ theme }) => css`
    color: ${theme.font.color};
  `}
  margin: 20px 0 0;
  max-width: 540px;
`
