import 'animate.css/animate.min.css'
import { ChangeThemeProvider } from 'context/ChangeThemeContext'
import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <>
      <ChangeThemeProvider>
        <Head>
          <title>Portfolio</title>
          <link rel="shortcut icon" href="/img/english-letter-a-512.png" />
          <link rel="apple-touch-icon" href="/img/english-letter-a-512.png" />
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
        <Component {...pageProps} />
      </ChangeThemeProvider>
    </>
  )
}

const WrapperApp = appWithTranslation(App)

export default function RouterEmulatedApp({ ...props }) {
  props.router.locale = props.router.query.locale
  return <WrapperApp {...props} />
}
