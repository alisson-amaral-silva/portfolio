import { createGlobalStyle, css, GlobalStyleComponent } from 'styled-components'

const GlobalStyles: GlobalStyleComponent<any, any> = createGlobalStyle`

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
    #__next {
      scroll-behavior: smooth;
      min-width: 75vh;
    }

    body {
      margin: 0;
      width: 100%;
      min-height: 100%;
      overflow-x: hidden;
      font-family: ${theme.font.family};
      font-size: 20px;
      line-height: 1.3;
      background-color: ${theme.colors.mainBg};
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;

      @media (max-width: 480px) {
        font-size: 18px;
      }

      &.hidden {
        overflow: hidden;
      }

      &.blur {
        overflow: hidden;

        header {
          background-color: transparent;
        }

        #content > * {
          filter: blur(5px) brightness(0.7);
          transition: ${theme.transition.all};
          pointer-events: none;
          user-select: none;
        }
      }
    }

    body::-webkit-scrollbar {
      width: 12px;
    }
    body::-webkit-scrollbar-track {
      background: ${theme.colors.mainBg};
    }
    body::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.darkMainBg};
      border: 3px solid ${theme.colors.mainBg};
      border-radius: 10px;
    }

    main {
      margin: 0 auto;
      width: 100%;
      max-width: 1600px;
      min-height: 100vh;
      padding: 200px 150px;

      @media (max-width: 1080px) {
        padding: 200px 100px;
      }
      @media (max-width: 768px) {
        padding: 150px 50px;
      }
      @media (max-width: 480px) {
        padding: 125px 25px;
      }

      &.fillHeight {
        padding: 0 150px;

        @media (max-width: 1080px) {
          padding: 0 100px;
        }
        @media (max-width: 768px) {
          padding: 0 50px;
        }
        @media (max-width: 480px) {
          padding: 0 25px;
        }
      }
    }

    section {
      margin: 0 auto;
      padding: 100px 0;
      max-width: 1000px;
      min-height: 100vh;

      @media (max-width: 768px) {
        padding: 80px 0;
      }

      @media (max-width: 480px) {
        padding: 60px 0;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 10px 0;
      font-weight: 600;
      color: ${theme.font.color};
      line-height: 1.1;
    }

    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      color: inherit;
      position: relative;
      transition: ${theme.transition.all};

      &:hover,
      &:focus {
        color: ${theme.colors.primary};
      }

      &.inline-link {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        position: relative;
        transition: ${theme.transition.all};
        color: ${theme.colors.primary};
        &:hover,
        &:focus,
        &:active {
          color: ${theme.colors.primary};
          outline: 0;
          &:after {
            width: 100%;
          }
          & > * {
            color: ${theme.colors.primary} !important;
            transition: ${theme.transition.all};
          }
        }
        &:after {
          content: '';
          display: block;
          width: 0;
          height: 1px;
          position: relative;
          bottom: 0.37em;
          background-color: ${theme.colors.primary};
          transition: ${theme.transition.all};
          opacity: 0.5;
        }
      }
    }

    .company-link {
      color: ${theme.colors.primary};
      text-decoration: none;
      padding: 0 0.2rem;
      line-height: 1.1;

      display: inline-block;
      position: initial;
      @media (max-width: 768px) {
        position: initial;
      }

      &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: '';
        display: block;
        height: 2px;
        left: 50%;
        position: initial;
        background: ${theme.colors.primary};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
      &:hover:after {
        width: 100%;
        left: 0;
      }

      &.hidden {
        overflow: hidden;
      }
    }

    .numbered-heading {
      display: flex;
      align-items: center;
      position: relative;
      margin: 10px 0 40px;
      width: 100%;
      font-size: clamp(26px, 5vw, 28px);
      white-space: nowrap;

      &:before {
        position: relative;
        bottom: 4px;
        padding-top: 0.5rem;
        counter-increment: section;
        content: '0' counter(section) '.';
        margin-right: 10px;
        color: ${theme.colors.primary};
        font-size: clamp(20px, 3vw, 24px);
        font-weight: 400;

        @media (max-width: 480px) {
          margin-bottom: -3px;
          margin-right: 5px;
        }
      }

      &:after {
        content: '';
        display: block;
        position: relative;
        top: 0;
        width: 300px;
        height: 1px;
        margin-left: 20px;
        background-color: ${theme.colors.lightPrimary};

        @media (max-width: 1080px) {
          width: 200px;
        }
        @media (max-width: 768px) {
          width: 100%;
        }
        @media (max-width: 600px) {
          margin-left: 10px;
        }
      }
    }

    .fadeup-enter {
      opacity: 0.01;
      transform: translateY(20px);
      transition: opacity 300ms ${theme.transition.all},
        transform 300ms ${theme.transition.all};
    }

    .fadeup-enter-active {
      opacity: 1;
      transform: translateY(0px);
      transition: opacity 300ms ${theme.transition.all},
        transform 300ms ${theme.transition.all};
    }

    /* Fade down */
    .fadedown-enter {
      opacity: 0.01;
      transform: translateY(-20px);
      transition: opacity 300ms ${theme.transition.all},
        transform 300ms ${theme.transition.all};
    }

    .fadedown-enter-active {
      opacity: 1;
      transform: translateY(0px);
      transition: opacity 300ms ${theme.transition.all},
        transform 300ms ${theme.transition.all};
    }

    /* Fade */
    .fade-enter {
      opacity: 0;
    }
    .fade-enter-active {
      opacity: 1;
      transition: opacity 300ms ${theme.transition.all};
    }
    .fade-exit {
      opacity: 1;
    }
    .fade-exit-active {
      opacity: 0;
      transition: opacity 300ms ${theme.transition.all};
    }

    img,
    svg {
      width: 100%;
      max-width: 100%;
      vertical-align: middle;
    }

    img[alt=''],
    img:not([alt]) {
      filter: blur(5px);
    }

    svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      vertical-align: middle;

      &.feather {
        fill: none;
      }
    }

    button {
      cursor: pointer;
      border: 0;
      border-radius: 0;
    }
  `}
`

export default GlobalStyles
