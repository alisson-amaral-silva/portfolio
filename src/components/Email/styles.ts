import styled, { css } from 'styled-components'

export const EmailLinkWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:after {
      content: '';
      display: block;
      width: 1px;
      height: 90px;
      margin: 0 auto;
      background-color: ${theme.font.color};
    }

    a {
      margin: 20px auto;
      padding: 10px;
      font-size: 12px;
      letter-spacing: 0.1em;
      writing-mode: vertical-rl;
      color: ${theme.font.color};

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }
    }
  `}
`
