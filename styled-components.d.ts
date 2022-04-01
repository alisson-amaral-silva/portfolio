import darkTheme from 'styles/darkTheme'
import lightTheme from 'styles/lightTheme'
// inferência de tipos
type DarkTheme = typeof darkTheme
type LightTheme = typeof lightTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends DarkTheme, LightTheme {}
}
