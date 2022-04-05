import { darken } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export interface WrapperProps {
  scrollDirection: string
  scrolledToTop: any
}

export const Wrapper = styled.header<WrapperProps>`
  ${({ theme, scrollDirection, scrolledToTop }) => css`
    position: fixed;
    top: 0;
    width: 100%;
    height: 6.8rem;
    backdrop-filter: blur(10px);
    transition: ${theme.transition.all};
    background-color: ${theme.colors.mainBg};

    @media (max-width: 1080px) {
      padding: 0 40px;
    }
    @media (max-width: 768px) {
      padding: 0 25px;
    }

    ${scrollDirection === 'up' &&
    !scrolledToTop &&
    css`
      height: 6.8rem;
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

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.font.color};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position:absolute;
    left:50%;
    transform: translateX(-50%);
  `}
  width: 10%;
  height: 10%;
`

export const MenuNav = styled.nav`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
			margin-right: ${theme.spacings.xxlarge};
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 5rem;
		`}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.font.color};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
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

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.mainBg};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: ${theme.font.color};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
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
