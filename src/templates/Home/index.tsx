import Loading from 'components/Loading'
import { useEffect, useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import Base from 'templates/Base'
import * as S from './styles'

import SwitchColorIcon from 'components/SwitchColorIcon'
import { ThemeButton } from 'components/ThemeButton'
import { ChangeThemeContext } from 'context/ChangeThemeContext'

const Home = () => {
  const { t } = useTranslation('common')
  const [loading, setLoading] = useState(true)
  const { toggleTheme, theme } = useContext(ChangeThemeContext)

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
      <ThemeButton onClick={toggleTheme}>
        <SwitchColorIcon theme={theme} />
      </ThemeButton>
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
