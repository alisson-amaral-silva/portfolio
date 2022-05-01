import { darken } from 'polished'
import styled, { css } from 'styled-components'

export interface WrapperProps {
  scrollDirection: string
  scrolledToTop: any
}

export const Wrapper = styled.header<WrapperProps>`
  ${({ theme, scrollDirection, scrolledToTop }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: 4.8rem;
    background-color: ${theme.colors.mainBg};
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    backdrop-filter: blur(10px);
    transition: ${theme.transition.all};

    @media (max-width: 1080px) {
      padding: 0 40px;
    }
    @media (max-width: 1080px) {
      padding: 0;
    }

    @media (prefers-reduced-motion: no-preference) {
      ${scrollDirection === 'up' &&
      !scrolledToTop &&
      css`
        height: 4.8rem;
        transform: translateY(0px);
        background-color: ${theme.colors.mainBg};
        box-shadow: 0 10px 30px -10px ${darken(0.1, theme.colors.primary)};
      `};

      ${scrollDirection === 'down' &&
      !scrolledToTop &&
      css`
        height: 6.8rem;
        transform: translateY(calc(6.8rem * -1));
        box-shadow: 0 10px 30px -10px ${darken(0.1, theme.colors.primary)};
      `};
    }
  `}
`
export const LinkWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    @media (max-width: 1080px) {
      display: none;
    }

    ol {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        margin: 0 5px;
        position: relative;
        counter-increment: item 1;
        font-size: 16px;

        a {
          padding: 10px;
          &:before {
            content: '0' counter(item) '.';
            margin-right: 5px;
            color: ${theme.colors.primary};
            font-size: 16px;
            text-align: right;
          }
        }
      }
    }
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.font.color};
    font-size: clamp(14px, 4vw, 18px);
    margin: 0.3rem 1.4rem 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.1rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const NavWrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    color: ${theme.colors.primary};
    counter-reset: item 0;
    z-index: 12;
    padding: 1rem 2rem;

    .logo {
      a {
        color: ${theme.colors.primary};
        width: 42px;
        height: 42px;

        &:hover,
        &:focus {
          svg {
            color: ${theme.colors.primary};
          }
        }

        svg {
          fill: none;
          transition: ${theme.transition.all};
          user-select: none;
        }
      }
    }
  `}
`

export const ResumeWrapper = styled.a`
  ${({ theme }) => css`
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
    padding: 18px 50px;
    width: max-content;
    margin: 0.3rem 1.4rem 0;
  `}
`
