import Main from 'components/Main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  return <Main />
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home']))
    }
  }
}
