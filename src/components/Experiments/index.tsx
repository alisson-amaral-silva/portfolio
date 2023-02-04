/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Icon from 'components/Icon'
import usePrefersReducedMotion from 'hooks/usePrefersReducedMotion'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

export interface ExperimentsProps {
  title: string
  html: string
  techs: string[]
  image: string
  github: string
  npm?: string
  url?: string
}

const Experiments = () => {
  const { t } = useTranslation('common')
  const prefersReducedMotion = usePrefersReducedMotion()
  const revealContainer = useRef<any>([])
  const revealTitle = useRef(null)
  const experiments = t('experiment-course.list', {
    returnObjects: true
  }) as ExperimentsProps[]

  const revealObject = {
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay: 200,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
  }

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
    async function animate() {
      if (revealContainer.current) {
        const sr = (await import('scrollreveal')).default
        sr().reveal(revealTitle!.current!, revealObject)

        revealContainer.current.forEach(
          (ref: string | HTMLElement | NodeListOf<Element>) =>
            sr().reveal(ref, revealObject)
        )
      }
    }
    animate()
  }, [])
  return (
    <S.ExperimentsSection id="experiments">
      <h4 className="numbered-heading" ref={revealTitle}>
        {t('session.experiments')}
      </h4>
      <S.ExperimentsGridWrapper>
        {experiments &&
          experiments.map(
            ({ title, techs, github, image, html, npm, url }, i) => {
              return (
                <S.ExperimentWrapper
                  key={i}
                  ref={(el) => (revealContainer.current[i] = el)}
                >
                  <div className="project-content">
                    <div>
                      <p className="project-overline">
                        {t('experiment-course.overline')}
                      </p>
                      <h5 className="project-title">
                        <a href={github}>{title}</a>
                      </h5>

                      <div
                        className="project-description"
                        dangerouslySetInnerHTML={{ __html: html }}
                      />

                      {techs.length && (
                        <ul className="project-tech-list">
                          {techs.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </ul>
                      )}

                      <div className="project-links">
                        {github && (
                          <a href={github} aria-label="GitHub Link">
                            <Icon name="GitHub" />
                          </a>
                        )}
                        {npm && (
                          <a href={npm} aria-label="Npm Link" className="npm">
                            <Icon />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="project-image">
                    <a href={url ? url : github}>
                      <img
                        src={image}
                        width={800}
                        height={400}
                        alt={title}
                        className="img"
                      />
                    </a>
                  </div>
                </S.ExperimentWrapper>
              )
            }
          )}
      </S.ExperimentsGridWrapper>
    </S.ExperimentsSection>
  )
}

export default Experiments
