import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const JobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`
export const TabListWrapper = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`
export interface TabButtonWrapperProps {
  isActive: boolean
  tabIndex: any
}

export const TabButtonWrapper = styled.button<TabButtonWrapperProps>`
  ${({ theme, isActive }) => css`
    border: none;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition.all};
    &:hover,
    &:active,
    &:focus {
      color: ${theme.colors.primary};
      outline: 0;
    }
    display: flex;
    align-items: center;
    width: 100%;
    height: 42px;
    padding: 0 20px 2px;
    border-left: 2px solid ${theme.colors.lightestPrimary};
    background-color: transparent;
    color: ${isActive
      ? `${theme.colors.primary}`
      : `${theme.colors.midPrimary}`};
    text-align: left;
    white-space: nowrap;

    @media (max-width: 768px) {
      padding: 0 15px 2px;
    }
    @media (max-width: 600px) {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 120px;
      padding: 0 15px;
      border-left: 0;
      border-bottom: 2px solid ${theme.colors.lightestPrimary};
      text-align: center;
    }

    &:hover,
    &:focus {
      background-color: ${theme.colors.darkMainBg};
    }
  `}
`

export interface HighlightWrapperProps {
  activeTabId: number
}

export const HighlightWrapper = styled.div<HighlightWrapperProps>`
  ${({ theme, activeTabId }) => css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 2px;
    height: 42px;
    border-radius: 4px;
    background: ${theme.colors.primary};
    transform: translateY(calc(${activeTabId} * 42px));
    transition: ${theme.transition.all};
    transition-delay: 0.1s;

    @media (max-width: 600px) {
      top: auto;
      bottom: 0;
      width: 100%;
      max-width: 120px;
      height: 2px;
      margin-left: 50px;
      transform: translateX(calc(${activeTabId} * 120px));
    }
    @media (max-width: 480px) {
      margin-left: 25px;
    }
  `}
`

export const TabPanelsWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`
export interface TabPanelWrapperProps {
  tabIndex: any
}

export const TabPanelWrapper = styled.div<TabPanelWrapperProps>`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    padding: 10px 5px;

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: 18px;
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: ${theme.colors.primary};
        }
      }
    }

    .company {
      color: ${theme.colors.primary};
    }

    .range {
      margin-bottom: 25px;
      color: ${theme.colors.primary};
      font-weight: bold;
      font-size: 14px;
    }

    .default-text-color {
      color: ${theme.font.color};
    }
  `}
`
