import usePrefersReducedMotion from 'hooks/usePrefersReducedMotion'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CSSTransition } from 'react-transition-group'
import { KEY_CODES } from 'utils/constants'
import * as S from './styles'

export interface JobProps {
  company: string
  title: string
  url: string
  range: string
  html: string
}

const Jobs = () => {
  const [activeTabId, setActiveTabId] = useState(0)
  const [tabFocus, setTabFocus] = useState<any>(null)
  const tabs = useRef([])
  const revealContainer = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const { t } = useTranslation('common')
  const jobs = t('job', { returnObjects: true }) as JobProps[]

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    async function animate() {
      if (revealContainer.current) {
        const sr = (await import('scrollreveal')).default
        sr().reveal(revealContainer.current)
      }
    }
    animate()
  }, [])

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus])

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus()
      return
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0)
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1)
    }
  }

  const onKeyDown = (e: { key: any; preventDefault: () => void }) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault()
        setTabFocus(tabFocus - 1)
        break
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault()
        setTabFocus(tabFocus + 1)
        break
      }

      default: {
        break
      }
    }
  }
  return (
    <S.JobsSection id="jobs" ref={revealContainer}>
      <h4 className="numbered-heading">{t('session.work')}</h4>
      <div className="inner">
        <S.TabListWrapper
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={(e) => onKeyDown(e)}
        >
          {jobs &&
            jobs.map(({ company }, i) => {
              return (
                <S.TabButtonWrapper
                  key={i}
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  ref={(el) => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}
                >
                  <span>{company}</span>
                </S.TabButtonWrapper>
              )
            })}
          <S.HighlightWrapper activeTabId={activeTabId} />
        </S.TabListWrapper>

        <S.TabPanelsWrapper>
          {jobs &&
            jobs.map(({ title, url, company, range, html }, i) => {
              return (
                <CSSTransition
                  key={i}
                  in={activeTabId === i}
                  timeout={250}
                  classNames="fade"
                >
                  <S.TabPanelWrapper
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}
                  >
                    <span className="default-text-color">{title}</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a href={url} className="company-link">
                        {company}
                      </a>
                    </span>

                    <p className="range">{range}</p>

                    <div
                      className="default-text-color"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </S.TabPanelWrapper>
                </CSSTransition>
              )
            })}
        </S.TabPanelsWrapper>
      </div>
    </S.JobsSection>
  )
}
export default Jobs
