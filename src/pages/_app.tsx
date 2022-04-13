import { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { ChangeThemeProvider } from 'context/ChangeThemeContext'
import 'animate.css/animate.min.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChangeThemeProvider>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, react, nextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
    </ChangeThemeProvider>
  )
}

export default appWithTranslation(App)
