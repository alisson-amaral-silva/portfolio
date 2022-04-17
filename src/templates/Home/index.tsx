import About from 'components/About'
import Contact from 'components/Contact'
import Experiments from 'components/Experiments'
import Footer from 'components/Footer'
import HardSkills from 'components/HardSkills'
import Intro from 'components/Intro'
import Jobs from 'components/Jobs'
import Loading from 'components/Loading'
import Menu from 'components/Menu'
import { useEffect, useState } from 'react'
import Base from 'templates/Base'
import * as S from './styles'

const Home = () => {
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
        <Footer />
      </S.Content>
    </>
  )
}

export default Home
