import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Home from 'templates/Home'
import i18nextConfig from '../../../next-i18next.config'
import { getI18nPaths } from '../../utils/i18n-server'

export default function Index(props) {
  return <Home {...props} />
}

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
})

export const getStaticProps = async (ctx) => ({
  props: {
    ...(await serverSideTranslations(
      ctx?.params?.locale,
      ['common', 'footer'],
      i18nextConfig
    ))
  }
})
