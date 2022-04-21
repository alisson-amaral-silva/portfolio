import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import { useDarkMode } from 'storybook-dark-mode'
import darkTheme from '../src/styles/darkTheme'
import lightTheme from '../src/styles/lightTheme'

export const decorators = [
  (Story) => {
    const currentTheme = useDarkMode() ? darkTheme : lightTheme

    return (
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    )
  }
]
