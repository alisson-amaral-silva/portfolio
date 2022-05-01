import styled, { css } from 'styled-components'

export const MenuWrapper = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: block;
  }
`

type HamburguerProps = {
  menuOpen: boolean
}

export const HamburguerButtonWrapper = styled.button<HamburguerProps>`
  ${({ theme, menuOpen }) => css`
    display: none;

    @media (max-width: 1080px) {
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
          ? 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s'
          : 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in'};
      }
      &:after {
        width: ${menuOpen ? `100%` : `80%`};
        bottom: ${menuOpen ? `0` : `-10px`};
        transform: rotate(${menuOpen ? `-90deg` : `0`});
        transition: ${menuOpen
          ? 'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s'
          : 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
      }
    }
  `}
`

export const SidebarWrapper = styled.aside<HamburguerProps>`
  ${({ theme, menuOpen }) => css`
    display: none;

    height: 100vh;

    @media only screen and (min-width: 375px) {
      height: 135vh;
    }

    @media only screen and (min-width: 376px) and (max-width: 390px) {
      height: 170vh;
    }

    @media only screen and (min-width: 392px) {
      height: 170vh;
    }

    @media only screen and (min-width: 390px) and (min-width: 414px) {
      height: 163vh;
    }

    @media only screen and (min-width: 411px) {
      height: 170vh;
    }

    @media (max-width: 360px) {
      height: 154vh;
    }

    @media (min-width: 1080px) {
      height: 142vh;
    }

    @media only screen and (min-width: 540px) {
      height: 102vh;
    }

    @media only screen and (min-width: 768px) {
      height: 100vh;
    }

    @media only screen and (min-width: 769px) {
      height: 110vh;
    }

    @media only screen and (min-width: 912px) {
      height: 114vh;
    }

    @media (max-width: 1080px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      padding: 50px 10px;
      width: min(75vw, 400px);
      outline: 0;
      background-color: ${theme.colors.mainBg};
      box-shadow: -10px 0px 30px -15px ${theme.colors.primary};
      z-index: 9;
      transform: translateX(${menuOpen ? 0 : 100}vw);
      visibility: ${menuOpen ? 'visible' : 'hidden'};
      transition: ${theme.transition.all};
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

        @media (max-width: 1024px) {
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
    li {
      list-style: none;
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

export const ThemeMobileWrapper = styled.li`
  list-style: none;
  margin-top: 1rem;
`
