import Logo from 'components/Logo'
import Menu, { LinkProps } from 'components/Menu'
import SwitchColorIcon from 'components/SwitchColorIcon'
import { ThemeButton } from 'components/ThemeButton'
import { ChangeThemeContext } from 'context/ChangeThemeContext'
import useScrollDirection, {
  UseScrollDirectionProps
} from 'hooks/useScrollDirection'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const Nav = () => {
  const { t, i18n } = useTranslation('common')

  const navLinks = t('navigation', { returnObjects: true }) as LinkProps[]
  const scrollDirectionInitialProps: UseScrollDirectionProps = {
    initialDirection: 'down',
    thresholdPixels: 0,
    off: false
  }
  const scrollDirection = useScrollDirection(scrollDirectionInitialProps)
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const { toggleTheme, theme } = useContext(ChangeThemeContext)
  const resumeEn =
    'https://raw.githubusercontent.com/alisson-amaral-silva/portfolio/main/public/docs/resume_en.pdf'

  const resumePt =
    'https://raw.githubusercontent.com/alisson-amaral-silva/portfolio/main/public/docs/resume_pt.pdf'

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <S.Wrapper scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <S.NavWrapper>
        <Logo />
        <S.LinkWrapper>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                  <S.MenuLink href={url}>{name}</S.MenuLink>
                </li>
              ))}
            <S.ResumeWrapper
              href={i18n.language === 'en' ? resumeEn : resumePt}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('resume')}
            </S.ResumeWrapper>
            <li>
              <ThemeButton onClick={toggleTheme}>
                <SwitchColorIcon theme={theme}></SwitchColorIcon>
              </ThemeButton>
            </li>
          </ol>
        </S.LinkWrapper>
        <Menu resumeEn={resumeEn} resumePt={resumePt} navLinks={navLinks} />
      </S.NavWrapper>
    </S.Wrapper>
  )
}

export default Nav
