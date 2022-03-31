import styled, { css, DefaultTheme } from 'styled-components'

export interface ContentProps {
  isLoading?: boolean
}

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 3rem;
  height: 100vh;
  justify-content: space-between;
`
const loadingModifiers = {
  default: (theme: DefaultTheme) => css`
    margin-top: ${theme.spacings.xlarge};
  `,
  loading: () => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `
}

export const Content = styled.div<ContentProps>`
  ${({ theme, isLoading }) => css`
    flex: 1 0 auto;
    ${!isLoading && loadingModifiers.default(theme)}
    ${isLoading && loadingModifiers.loading()}
  `}
`
