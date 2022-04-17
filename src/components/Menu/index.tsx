import Logo from 'components/Logo'
import SwitchColorIcon from 'components/SwitchColorIcon'
import { ThemeButton } from 'components/ThemeButton'
import { ChangeThemeContext } from 'context/ChangeThemeContext'
import useOnClickOutside from 'hooks/useOnClickOutside'
import useScrollDirection from 'hooks/useScrollDirection'
import Link from 'next/link'
import { useContext, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'
import { useRouter } from 'next/router'

type LinkProps = {
  url: string
  name: string
}

const Menu = () => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()

  const navLinks = t('navigation', { returnObjects: true }) as LinkProps[]
  const scrollDirection = useScrollDirection('down')
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const { toggleTheme, theme } = useContext(ChangeThemeContext)
  const toggleMenu = () => setIsOpen(!isOpen)
  const buttonRef = useRef(null)
  const navRef = useRef(null)
  const languageLink = locale === 'en' ? '/pt' : '/en'

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const wrapperRef = useRef()
  useOnClickOutside(wrapperRef, () => setIsOpen(false))

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
            <S.ChangeLinkWrapper
              href={languageLink}
              className="change-language-link"
            >
              {t('change-language')}
            </S.ChangeLinkWrapper>
            <li>
              <ThemeButton onClick={toggleTheme}>
                <SwitchColorIcon theme={theme}></SwitchColorIcon>
              </ThemeButton>
            </li>
          </ol>
        </S.LinkWrapper>

        <S.MenuWrapper>
          <div className={isOpen ? 'blur' : ''} />

          <div ref={wrapperRef}>
            <S.HamburguerButtonWrapper
              onClick={toggleMenu}
              menuOpen={isOpen}
              ref={buttonRef}
              aria-label="Menu"
            >
              <div className="ham-box">
                <div className="ham-box-inner" />
              </div>
            </S.HamburguerButtonWrapper>

            <S.SidebarWrapper
              menuOpen={isOpen}
              aria-hidden={!isOpen}
              tabIndex={isOpen ? 1 : -1}
            >
              <nav ref={navRef}>
                {navLinks && (
                  <ol>
                    {navLinks.map(({ url, name }, i) => (
                      <li key={i} onClick={() => setIsOpen(false)}>
                        <Link href={url}>{name}</Link>
                      </li>
                    ))}
                  </ol>
                )}
                <li>
                  <a href={languageLink} className="change-language-link">
                    {t('change-language')}
                  </a>
                </li>
                <S.ThemeMobileWrapper>
                  <ThemeButton onClick={toggleTheme}>
                    <SwitchColorIcon theme={theme} />
                  </ThemeButton>
                </S.ThemeMobileWrapper>
              </nav>
            </S.SidebarWrapper>
          </div>
        </S.MenuWrapper>
      </S.NavWrapper>
    </S.Wrapper>
  )
}

export default Menu
