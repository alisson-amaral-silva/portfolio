import Menu, { LinkProps } from 'components/Menu'
import useScrollDirection, {
  UseScrollDirectionProps
} from 'hooks/useScrollDirection'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'
import { ChangeLinkWrapper } from '../Menu/styles'
import { ThemeButton } from 'components/ThemeButton'
import SwitchColorIcon from 'components/SwitchColorIcon'
import { ChangeThemeContext } from 'context/ChangeThemeContext'
import { ChangeLanguageContext } from 'context/ChangeLanguageContext'
import Logo from 'components/Logo'

const Nav = () => {
  const { t } = useTranslation('common')

  const navLinks = t('navigation', { returnObjects: true }) as LinkProps[]
  const scrollDirectionInitialProps: UseScrollDirectionProps = {
    initialDirection: 'down',
    thresholdPixels: 0,
    off: false
  }
  const scrollDirection = useScrollDirection(scrollDirectionInitialProps)
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const { toggleTheme, theme } = useContext(ChangeThemeContext)
  const { toggleLanguage, language } = useContext(ChangeLanguageContext)

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
            {/* <ChangeLinkWrapper
              onClick={toggleLanguage}
              href={`/${language}`}
              className="change-language-link"
            >
              {t('change-language')}
            </ChangeLinkWrapper> */}
            <li>
              <ThemeButton onClick={toggleTheme}>
                <SwitchColorIcon theme={theme}></SwitchColorIcon>
              </ThemeButton>
            </li>
          </ol>
        </S.LinkWrapper>
        <Menu navLinks={navLinks} />
      </S.NavWrapper>
    </S.Wrapper>
  )
}

export default Nav
