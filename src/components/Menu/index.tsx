import MediaMatch from 'components/MediaMatch'
import useScrollDirection from 'hooks/useScrollDirection'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { useContext, useEffect, useState } from 'react'
import * as S from './styles'
import Link from 'next/link'
import Logo from 'components/Logo'
import { ChangeThemeContext } from 'context/ChangeThemeContext'
import { ThemeButton } from 'components/ThemeButton'
import SwitchColorIcon from 'components/SwitchColorIcon'

const Menu = () => {
  const scrollDirection = useScrollDirection('down')
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const { toggleTheme, theme } = useContext(ChangeThemeContext)

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
      <MediaMatch lessThan="small">
        <S.LogoWrapper>
          <Link href="/" passHref>
            <a>
              <Logo hideOnMobile />
            </a>
          </Link>
        </S.LogoWrapper>
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <MediaMatch between>
        <S.LogoWrapper>
          <Link href="/" passHref>
            <a>
              <Logo hideOnMobile />
            </a>
          </Link>
        </S.LogoWrapper>
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <MediaMatch greaterThan="large">
        <S.LogoWrapper>
          <Link href="/" passHref>
            <a>
              <Logo hideOnMobile />
            </a>
          </Link>
        </S.LogoWrapper>
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink href="/">Home</S.MenuLink>
          </Link>
          <Link href="#" passHref>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
        <ThemeButton onClick={toggleTheme}>
          <SwitchColorIcon theme={theme} />
        </ThemeButton>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="#" passHref>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
