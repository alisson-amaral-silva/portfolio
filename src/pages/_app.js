import 'animate.css/animate.min.css'
import { ChangeThemeProvider } from 'context/ChangeThemeContext'
import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

function App({ Component, pageProps }) {
  const { t } = useTranslation('common')

  const seo = {
    title: process.env.TITLE,
    description: t('og.description'),
    image: process.env.IMAGE,
    url: process.env.URL,
    twitterUsername: process.env.TWITTER
  }

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
          <meta name="author" content={seo.title} />
          <meta name="description" content="A simple portfolio" />

          <meta name="image" content={seo.image} />

          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />
          <meta property="og:url" content={seo.url} />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={seo.twitterUsername} />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image} />
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
