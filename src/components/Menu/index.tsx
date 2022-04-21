import Logo from 'components/Logo'
import SwitchColorIcon from 'components/SwitchColorIcon'
import { ThemeButton } from 'components/ThemeButton'
import { ChangeLanguageContext } from 'context/ChangeLanguageContext'
import { ChangeThemeContext } from 'context/ChangeThemeContext'
import useOnClickOutside from 'hooks/useOnClickOutside'
import useScrollDirection from 'hooks/useScrollDirection'
import Head from 'next/head'
import Link from 'next/link'
import { useContext, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

export interface LinkProps {
  url: string
  name: string
}

export interface MenuProps {
  navLinks: LinkProps[]
}

const Menu = ({ navLinks }: MenuProps) => {
  const { t } = useTranslation('common')

  const [isOpen, setIsOpen] = useState(false)
  const { toggleTheme, theme } = useContext(ChangeThemeContext)
  const { toggleLanguage, language } = useContext(ChangeLanguageContext)
  const toggleMenu = () => setIsOpen(!isOpen)
  const buttonRef = useRef(null)
  const navRef = useRef(null)

  const wrapperRef = useRef()
  useOnClickOutside(wrapperRef, () => setIsOpen(false))

  useEffect(() => {
    document.body.className = isOpen ? 'blur' : ''
  }, [isOpen])

  return (
    <S.MenuWrapper>
      <Head>
        <body className={isOpen ? 'blur' : ''} />
      </Head>
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
              <S.ChangeLinkWrapper
                onClick={toggleLanguage}
                href={`/${language}`}
                className="change-language-link"
              >
                {t('change-language')}
              </S.ChangeLinkWrapper>
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
  )
}

export default Menu
