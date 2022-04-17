import Link from 'next/link'
import { darken } from 'polished'
import styled, { css } from 'styled-components'

export interface WrapperProps {
  scrollDirection: string
  scrolledToTop: any
}

export const Wrapper = styled.header<WrapperProps>`
  ${({ theme, scrollDirection, scrolledToTop }) => css`
    position: fixed;
    top: 0;
    z-index: 11;
    width: 100%;
    height: 4.8rem;
    backdrop-filter: blur(10px);
    transition: ${theme.transition.all};
    background-color: ${theme.colors.mainBg};
    backdrop-filter: blur(10px);
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    backdrop-filter: blur(10px);
    transition: ${theme.transition.all};

    @media (max-width: 1080px) {
      padding: 0 40px;
    }
    @media (max-width: 820px) {
      padding: 0;
    }

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
  `}
`

export const LinkWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    @media (max-width: 820px) {
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

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};
    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const MenuWrapper = styled.div`
  display: none;

  @media (max-width: 820px) {
    display: block;
  }
`

type HamburguerProps = {
  menuOpen: boolean
}

export const HamburguerButtonWrapper = styled.button<HamburguerProps>`
  ${({ theme, menuOpen }) => css`
    display: none;

    @media (max-width: 820px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      z-index: 10;
      margin-right: -15px;
      padding: 15px;
      border: 0;
      background-color: transparent;
      color: inherit;
      text-transform: none;
      transition-timing-function: linear;
      transition-duration: 0.15s;
      transition-property: opacity, filter;
    }

    .ham-box {
      display: inline-block;
      position: relative;
      width: 30px;
      height: 24px;
    }

    .ham-box-inner {
      position: absolute;
      top: 50%;
      right: 0;
      width: 30px;
      height: 2px;
      border-radius: 10px;
      background-color: ${theme.colors.primary};
      transition-duration: 0.22s;
      transition-property: transform;
      transition-delay: ${menuOpen ? `0.12s` : `0s`};
      transform: rotate(${menuOpen ? `225deg` : `0deg`});
      transition-timing-function: cubic-bezier(
        ${menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
      );
      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: auto;
        right: 0;
        width: 30px;
        height: 2px;
        border-radius: 4px;
        background-color: ${theme.colors.primary};
        transition-timing-function: ease;
        transition-duration: 0.15s;
        transition-property: transform;
      }
      &:before {
        width: ${menuOpen ? `100%` : `120%`};
        top: ${menuOpen ? `0` : `-10px`};
        opacity: ${menuOpen ? 0 : 1};
        transition: ${menuOpen
          ? 'bottom 0.1s ease-out'
          : 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in'};
      }
      &:after {
        width: ${menuOpen ? `100%` : `80%`};
        bottom: ${menuOpen ? `0` : `-10px`};
        transform: rotate(${menuOpen ? `-90deg` : `0`});
        transition: ${menuOpen
          ? 'bottom 0.1s ease-out'
          : 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in'};
      }
    }
  `}
`

export const SidebarWrapper = styled.aside<TestHamburguer>`
  ${({ theme, menuOpen }) => css`
    display: none;

    @media (max-width: 820px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      padding: 50px 10px;
      width: min(75vw, 400px);
      height: 100vh;
      outline: 0;
      background-color: ${theme.colors.mainBg};
      box-shadow: -10px 0px 30px -15px ${theme.colors.primary};
      z-index: 9;
      transform: translateX(${menuOpen ? 0 : 100}vw);
      visibility: ${menuOpen ? 'visible' : 'hidden'};
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      flex-direction: column;
      color: ${theme.font.color};
      text-align: center;
    }

    ol {
      padding: 0;
      margin: 0;
      list-style: none;
      width: 100%;

      li {
        position: relative;
        margin: 0 auto 20px;
        counter-increment: item 1;
        font-size: clamp(14px, 4vw, 18px);

        @media (max-width: 600px) {
          margin: 0 auto 10px;
        }

        &:before {
          content: '0' counter(item) '.';
          display: block;
          margin-bottom: 5px;
          color: ${theme.colors.primary};
          font-size: 14px;
        }
      }

      a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:hover,
        &:active,
        &:focus {
          color: ${theme.colors.primary};
          outline: 0;
        }
        width: 100%;
        padding: 3px 20px 20px;
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
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
          user-select: none;
        }
      }
    }
  `}
`

export const ThemeMobileWrapper = styled.li`
  list-style: none;
  margin-top: 1rem;
`
