import ThemeSwitcher from 'components/ThemeSwitcher'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Home from 'templates/Home'

export default function Index() {
  return (
    <ThemeSwitcher>
      <Home />
    </ThemeSwitcher>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common']))
    }
  }
}
