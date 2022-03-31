import Loading from 'components/Loading'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Base from 'templates/Base'
import * as S from './styles'

const Home = () => {
  const { t } = useTranslation('common')

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  if (loading)
    return (
      <Base isLoading>
        <Loading />
      </Base>
    )

  return (
    <Base>
      <S.Title>{t('welcome.title')}</S.Title>
      {/* <S.Description>{description}</S.Description> */}
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com um código"
      />
    </Base>
  )
}

export default Home
