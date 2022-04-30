import ThemeSwitcher from '../components/ThemeSwitcher'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Home from 'templates/Home'
import { GetServerSidePropsContext } from 'next'

export default function Index() {
  return (
    <ThemeSwitcher>
      <Home />
    </ThemeSwitcher>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const locale = context.locale as string
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
