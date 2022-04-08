import MediaMatch from 'components/MediaMatch'
import useScrollDirection from 'hooks/useScrollDirection'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { useContext, useEffect, useRef, useState } from 'react'
import * as S from './styles'
import Link from 'next/link'
import Logo from 'components/Logo'
import { ChangeThemeContext } from 'context/ChangeThemeContext'
import { ThemeButton } from 'components/ThemeButton'
import SwitchColorIcon from 'components/SwitchColorIcon'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { useTranslation } from 'react-i18next'

type LinkProps = {
  url: string
  name: string
}

const Menu = () => {
  const { t } = useTranslation('common')

  const navLinks = t('navigation', { returnObjects: true }) as LinkProps[]
  const scrollDirection = useScrollDirection('down')
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const { toggleTheme, theme } = useContext(ChangeThemeContext)
  const toggleMenu = () => setIsOpen(!isOpen)
  const buttonRef = useRef(null)
  const navRef = useRef(null)

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
        <S.LogoWrapper className="logo">
          <Link href="/" passHref>
            <a>
              <Logo />
            </a>
          </Link>
        </S.LogoWrapper>
        <S.LinkWrapper>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                  <S.MenuLink href={url}>{name}</S.MenuLink>
                </li>
              ))}
            <li>
              <ThemeButton onClick={toggleTheme}>
                <SwitchColorIcon theme={theme} />
              </ThemeButton>
            </li>
          </ol>
        </S.LinkWrapper>

        <S.MenuWrapper>
          <body className={isOpen ? 'blur' : ''} />

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

                <a href="/resume.pdf" className="resume-link">
                  Resume
                </a>
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
