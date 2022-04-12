import styled, { css } from 'styled-components'

export const AboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`

export const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => css`
      box-shadow: 0 10px 30px -15px ${theme.colors.darkPrimary};
      transition: ${theme.transition.all};
      display: block;
      position: relative;
      width: 100%;
      border-radius: 4px;
      background-color: ${theme.colors.primary};

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:after {
          top: 15px;
          left: 15px;
        }

        .img {
          filter: none;
          mix-blend-mode: normal;
        }
      }

      .img {
        position: relative;
        border-radius: 4px;
        mix-blend-mode: multiply;
        filter: grayscale(100%);
        transition: ${theme.transition.all};
      }

      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        transition: ${theme.transition.all};
      }

      &:before {
        top: 0;
        left: 0;
        background-color: ${theme.colors.mainBg};
        mix-blend-mode: screen;
      }

      &:after {
        border: 2px solid ${theme.colors.primary};
        top: 20px;
        left: 20px;
        z-index: -1;
      }
    `};
  }
`

export const AboutParagraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.font.color};
  `}
  margin: 20px 0 0;
  max-width: 540px;
  text-align: initial;
`
