import Intro from 'components/Intro'
import About from 'components/About'
import Loading from 'components/Loading'
import Jobs from 'components/Jobs'
import Menu from 'components/Menu'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Base from 'templates/Base'
import * as S from './styles'
import HardSkills from 'components/HardSkills'
import Experiments from 'components/Experiments'
import Contact from 'components/Contact'

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
    <>
      <Menu />
      <S.Content className="fillHeight">
        <Intro />
        <About />
        <HardSkills />
        <Jobs />
        <Experiments />
        <Contact />
      </S.Content>
    </>
  )
}

export default Home
