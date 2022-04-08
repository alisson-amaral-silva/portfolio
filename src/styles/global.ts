import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  isDark?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v15-latin-300.woff2') format('woff2')
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v15-latin-regular.woff2') format('woff2')
}

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local(''),
          url('/fonts/poppins-v15-latin-600.woff2') format('woff2')
    }

  * {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }

  }

  ${({ theme }) => css`
    html,
    body,
    #__next {
      height: 100%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: 20px;
      line-height: 1.3;
      background-color: ${theme.colors.mainBg};

      &.fadeup-enter {
        opacity: 0.01;
        transform: translateY(20px);
        transition: opacity 300ms ${theme.transition.all},
          transform 300ms ${theme.transition.all};
      }

      &.fadeup-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms ${theme.transition.all},
          transform 300ms ${theme.transition.all};
      }

      /* Fade down */
      &.fadedown-enter {
        opacity: 0.01;
        transform: translateY(-20px);
        transition: opacity 300ms ${theme.transition.all},
          transform 300ms ${theme.transition.all};
      }

      &.fadedown-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms ${theme.transition.all},
          transform 300ms ${theme.transition.all};
      }

      /* Fade */
      &.fade-enter {
        opacity: 0;
      }
      &.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ${theme.transition.all};
      }
      &.fade-exit {
        opacity: 1;
      }
      &.fade-exit-active {
        opacity: 0;
        transition: opacity 300ms ${theme.transition.all};
      }

      &.blur {
        overflow: hidden;

        header {
          background-color: transparent;
        }

        #content > * {
          filter: blur(5px) brightness(0.7);
          transition: var(--transition);
          pointer-events: none;
          user-select: none;
        }
      }
    }
  `}

`

export default GlobalStyles
