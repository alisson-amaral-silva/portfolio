import SwitchColorIcon from 'components/SwitchColorIcon'
import { ThemeButton } from 'components/ThemeButton'
import { ChangeThemeContext } from 'context/ChangeThemeContext'
import useOnClickOutside, {
  UseOnClickOutsideProps
} from 'hooks/useOnClickOutside'
import Head from 'next/head'
import Link from 'next/link'
import { useContext, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StaticI18nLink } from 'utils/i18n-browser'
import * as S from './styles'

export interface LinkProps {
  url: string
  name: string
}

export interface MenuProps {
  navLinks: LinkProps[]
  resumeEn: string
  resumePt: string
}

const Menu = ({ navLinks, resumeEn, resumePt }: MenuProps) => {
  const { t, i18n } = useTranslation('common')

  const [isOpen, setIsOpen] = useState(false)
  const { toggleTheme, theme } = useContext(ChangeThemeContext)
  const toggleMenu = () => setIsOpen(!isOpen)
  const buttonRef = useRef(null)
  const navRef = useRef(null)

  const wrapperRef = useRef<any>()

  const useOnClickInitialProps: UseOnClickOutsideProps = {
    ref: wrapperRef,
    handler: () => setIsOpen(false)
  }

  useOnClickOutside(useOnClickInitialProps)

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
              <S.ResumeWrapper
                href={i18n.language === 'en' ? resumeEn : resumePt}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('resume')}
              </S.ResumeWrapper>
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
