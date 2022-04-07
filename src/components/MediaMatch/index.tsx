import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
  between?: boolean
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`
      display: flex;
      justify-content: space-between;
     `}
  `,

  between: () => css`
    ${media.between('medium', 'large')`
  display: flex;
  justify-content: space-between;
`}
  `,

  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`
      display: flex;
      justify-content: space-between;
    `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan, between }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!between && mediaMatchModifiers.between()}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
