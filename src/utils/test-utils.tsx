import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/darkTheme'

const customRender = (ui: ReactNode) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

export * from '@testing-library/react'
export { customRender as render }
