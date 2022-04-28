import { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import {
  ChangeThemeContext,
  ChangeThemeProvider
} from '../context/ChangeThemeContext'
import 'animate.css/animate.min.css'
import { ChangeLanguageProvider } from '../context/ChangeLanguageContext'
import darkTheme from '../styles/darkTheme'
import GlobalStyles from '../styles/global'
import lightTheme from '../styles/lightTheme'
import { ThemeProvider } from 'styled-components'
import { useContext } from 'react'

function App({ Component, pageProps }) {
  const { theme } = useContext(ChangeThemeContext)

  return (
    <ChangeThemeProvider>
      <ChangeLanguageProvider>
        <Head>
          <title>Portfolio</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link
            rel="manifest"
            crossOrigin="use-credentials"
            href="manifest.json"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <meta name="description" content="A simple portfolio" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ChangeLanguageProvider>
    </ChangeThemeProvider>
  )
}

export default appWithTranslation(App)
