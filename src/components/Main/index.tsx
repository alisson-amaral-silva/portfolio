import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'
import * as S from './styles'

export default function Main(props) {
  const { t } = useTranslation('home')

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('This will be called after 2 seconds')
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <S.Wrapper>
      <S.Title>{t('welcome.title')}</S.Title>
      {/* <S.Description>{description}</S.Description> */}
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com um código"
      />
    </S.Wrapper>
  )
}
