import styled, { css } from 'styled-components'

export const ContactSection = styled.section`
  ${({ theme }) => css`
    max-width: 600px;
    margin: 0 auto 100px;
    min-height: 700px;
    text-align: center;

    @media (max-width: 768px) {
      margin: 0 auto 50px;
    }

    .overline {
      display: block;
      margin-bottom: 20px;
      color: ${theme.colors.primary};
      font-size: 16px;
      font-weight: 400;

      &:before {
        bottom: 0;
        font-size: 14px;
      }

      &:after {
        display: none;
      }
    }

    .title {
      font-size: clamp(40px, 5vw, 60px);
    }

    .email-link {
      color: ${theme.colors.primary};
      background-color: transparent;
      border: 1px solid ${theme.colors.primary};
      border-radius: 4px;
      padding: 1.25rem 1.75rem;
      font-size: 14px;
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      transition: ${theme.transition.all};
      &:hover,
      &:focus,
      &:active {
        background-color: ${theme.colors.darkMainBg};
        outline: none;
      }
      &:after {
        display: none !important;
      }
      margin-top: 50px;
    }
  `}
`

export const ParagraphWrapper = styled.p`
  ${({ theme }) => css`
    color: ${theme.font.color};
  `}
`
