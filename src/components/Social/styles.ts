import styled, { css } from 'styled-components'

export const SocialListWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;

    &:after {
      content: '';
      display: block;
      width: 1px;
      height: 90px;
      margin: 0 auto;
      background-color: ${theme.font.color};
    }

    li {
      &:last-of-type {
        margin-bottom: 20px;
      }

      a {
        padding: 10px;
        color: ${theme.font.color};

        &:hover,
        &:focus {
          transform: translateY(-3px);
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  `}
`