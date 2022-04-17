import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'
import { Github } from '@styled-icons/feather/Github'
import { Npm } from '@styled-icons/fa-brands/Npm'
import Image from 'next/image'
import usePrefersReducedMotion from 'hooks/usePrefersReducedMotion'

export interface ExperimentsProps {
  title: string
  html: string
  techs: string[]
  image: string
  github: string
  npm?: string
}

const Experiments = () => {
  const { t } = useTranslation('common')
  const prefersReducedMotion = usePrefersReducedMotion()
  const revealContainer = useRef(null)
  const experiments = t('experiment-course.list', {
    returnObjects: true
  }) as ExperimentsProps[]

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
  return (
    <S.ExperimentsSection id="experiments">
      <h4 className="numbered-heading" ref={revealContainer}>
        {t('experiment-course.title')}
      </h4>
      <S.ExperimentsGridWrapper>
        {experiments &&
          experiments.map(({ title, techs, github, image, html, npm }, i) => {
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
                          <Github name="GitHub" />
                        </a>
                      )}
                      {npm && (
                        <a href={npm} aria-label="Npm Link" className="npm">
                          <Npm name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={github ? github : '#'}>
                    <Image
                      src={image}
                      width={800}
                      quality={100}
                      height={400}
                      alt={title}
                      className="img"
                    />
                  </a>
                </div>
              </S.ExperimentWrapper>
            )
          })}
      </S.ExperimentsGridWrapper>
    </S.ExperimentsSection>
  )
}

export default Experiments
