import styled, { css } from 'styled-components'

export interface SideElementProps {
  orientation: 'left' | 'right'
}

export const SideElementWrapper = styled.div<SideElementProps>`
  ${({ theme, orientation }) => css`
    width: 40px;
    position: fixed;
    bottom: 0;
    left: ${orientation === 'left' ? '40px' : 'auto'};
    right: ${orientation === 'left' ? 'auto' : '40px'};
    z-index: 10;
    color: ${theme.colors.lightPrimary};

    @media (max-width: 1080px) {
      left: ${orientation === 'left' ? '20px' : 'auto'};
      right: ${orientation === 'left' ? 'auto' : '20px'};
    }

    @media (max-width: 768px) {
      display: none;
    }
  `}
`
