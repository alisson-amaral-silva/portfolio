import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const ExperimentsSection = styled.section``

export const ExperimentsGridWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    position: relative;
    z-index: 1;
  }
`
export const ExperimentWrapper = styled.li`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    @media (max-width: 768px) {
      box-shadow: 0 10px 30px -15px ${darken(0.1, theme.colors.primary)};
      transition: ${theme.transition.all};
    }

    &:not(:last-of-type) {
      margin-bottom: 100px;

      @media (max-width: 768px) {
        margin-bottom: 70px;
      }

      @media (max-width: 480px) {
        margin-bottom: 30px;
      }
    }

    &:nth-of-type(odd) {
      .project-content {
        grid-column: 7 / -1;
        text-align: right;

        @media (max-width: 1080px) {
          grid-column: 5 / -1;
        }
        @media (max-width: 768px) {
          grid-column: 1 / -1;
          padding: 40px 40px 30px;
          text-align: left;
        }
        @media (max-width: 480px) {
          padding: 25px 25px 20px;
        }
      }
      .project-tech-list {
        justify-content: flex-end;

        @media (max-width: 768px) {
          justify-content: flex-start;
        }

        li {
          margin: 0 0 5px 20px;

          @media (max-width: 768px) {
            margin: 0 10px 5px 0;
          }
        }
      }
      .project-links {
        justify-content: flex-end;
        margin-left: 0;
        margin-right: -10px;

        @media (max-width: 768px) {
          justify-content: flex-start;
          margin-left: -10px;
          margin-right: 0;
        }
      }
      .project-image {
        grid-column: 1 / 8;

        @media (max-width: 768px) {
          grid-column: 1 / -1;
        }
      }
    }

    .project-content {
      position: relative;
      grid-column: 1 / 7;
      grid-row: 1 / -1;

      @media (max-width: 1080px) {
        grid-column: 1 / 9;
      }

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        z-index: 5;
      }

      @media (max-width: 480px) {
        padding: 30px 25px 20px;
      }
    }

    .project-overline {
      margin: 10px 0;
      color: ${theme.colors.midPrimary};
      font-size: 14px;
      font-weight: 400;
    }

    .project-title {
      color: ${theme.font.color};
      font-size: clamp(24px, 5vw, 28px);

      @media (min-width: 768px) {
        margin: 0 0 20px;
      }

      @media (max-width: 768px) {
        color: ${theme.colors.white};

        a {
          position: static;

          &:before {
            content: '';
            display: block;
            position: absolute;
            z-index: 0;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }
        }
      }
    }

    .project-description {
      box-shadow: 0 10px 30px -15px ${darken(0.1, theme.colors.primary)};
      position: relative;
      z-index: 2;
      padding: 25px;
      border-radius: 4px;
      background-color: ${theme.colors.lightMainBg};
      color: ${theme.font.color};
      font-size: 18px;

      @media (max-width: 768px) {
        padding: 20px 0;
        background-color: transparent;
        box-shadow: none;

        &:hover {
          box-shadow: none;
        }
      }

      a {
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

      strong {
        color: ${theme.colors.white};
        font-weight: normal;
      }
    }

    .project-tech-list {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      z-index: 2;
      margin: 25px 0 10px;
      padding: 0;
      list-style: none;

      li {
        margin: 0 20px 5px 0;
        color: ${theme.colors.midPrimary};
        font-size: 14px;
        white-space: nowrap;
      }

      @media (max-width: 768px) {
        margin: 10px 0;

        li {
          margin: 0 10px 5px 0;
          color: ${theme.colors.midPrimary};
        }
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      position: relative;
      margin-top: 10px;
      margin-left: -10px;
      color: ${theme.font.color};

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;

        &.npm {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    .project-image {
      box-shadow: 0 10px 30px -15px ${darken(0.1, theme.colors.primary)};
      transition: ${theme.transition.all};

      &:hover,
      &:focus {
        box-shadow: 0 10px 30px -15px ${darken(0.1, theme.colors.primary)};
      }
      grid-column: 6 / -1;
      grid-row: 1 / -1;
      position: relative;
      z-index: 1;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
        height: 100%;
        opacity: 0.25;
      }

      a {
        width: 100%;
        height: 100%;
        /* background-color: ${theme.colors.primary}; */
        border-radius: 4px;
        vertical-align: middle;

        &:hover,
        &:focus {
          background: transparent;
          outline: 0;

          &:before,
          .img {
            background: transparent;
            filter: none;
          }
        }

        &:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 3;
          transition: ${theme.transition.all};
          mix-blend-mode: screen;
        }
      }

      .img {
        border-radius: 4px;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1) brightness(90%);
        object-fit: cover;

        @media (max-width: 768px) {
          width: auto;
          height: 100%;
          filter: grayscale(100%) contrast(1) brightness(50%);
        }
      }
    }
  `}
`
