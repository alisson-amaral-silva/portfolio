import { useTranslation } from 'react-i18next'
import * as S from './styles'
import { useEffect, useRef } from 'react'

const HardSkills = () => {
  const { t } = useTranslation('common')
  const frontEndDevTools = [
    'Visual Studio Code',
    'Git',
    'Codepen',
    'Chrome Dev Tools',
    'Google Fonts',
    'Bootstrap',
    'Material UI',
    'Github'
  ]

  const backEndDevTools = [
    'Docker',
    'Postman',
    'Heroku',
    'GitLab',
    'Visual Studio',
    'IntelliJ',
    'Redis',
    'Github'
  ]

  const revealContainer = useRef(null)

  useEffect(() => {
    async function animate() {
      if (revealContainer.current) {
        const sr = (await import('scrollreveal')).default
        sr().reveal(revealContainer.current)
      }
    }
    animate()
  }, [])

  return (
    <S.HardSkillsSection id="hard-skills" ref={revealContainer}>
      <h3 className="numbered-heading">HardSkills</h3>
      <S.HardSkillsWrapper>
        <S.HardSkillsBox>
          <S.FrontEndWrapper>
            <div>
              <S.Icon
                src="/img/icon-front-end.png"
                data-testid="front-end-icon"
                aria-label="front end icon"
                alt="front end icon"
              />
            </div>
            <div>
              <S.TechTitle>Front-end</S.TechTitle>
            </div>
            <div>
              <S.ParagraphWrapper>{t('front-end-intro')}</S.ParagraphWrapper>
            </div>
            <div>
              <S.LanguagesWrapper>{t('languages')}</S.LanguagesWrapper>
              <S.ParagraphWrapper>
                React, Angular, TypeScript, Next.JS
              </S.ParagraphWrapper>
            </div>
            <div>
              <S.LanguagesWrapper>{t('dev-tools')}</S.LanguagesWrapper>
              <S.UlWrapper>
                {frontEndDevTools &&
                  frontEndDevTools.map((skill, i) => (
                    <S.LiWrapper key={i}>{skill}</S.LiWrapper>
                  ))}
              </S.UlWrapper>
            </div>
          </S.FrontEndWrapper>
          <S.BackEndWrapper>
            <div>
              <S.Icon
                src="/img/icon-back-end.png"
                data-testid="back-end-icon"
                aria-label="back end icon"
                alt="back end icon"
              />
            </div>
            <div>
              <S.TechTitle>Back-end</S.TechTitle>
            </div>
            <div>
              <S.ParagraphWrapper>{t('back-end-intro')}</S.ParagraphWrapper>
            </div>
            <div>
              <S.LanguagesWrapper>{t('languages')}</S.LanguagesWrapper>
              <S.ParagraphWrapper>Node.JS, Java, C#, .NET </S.ParagraphWrapper>
            </div>
            <div>
              <S.LanguagesWrapper>{t('dev-tools')}</S.LanguagesWrapper>
              <S.UlWrapper>
                {backEndDevTools &&
                  backEndDevTools.map((skill, i) => (
                    <S.LiWrapper key={i}>{skill}</S.LiWrapper>
                  ))}
              </S.UlWrapper>
            </div>
          </S.BackEndWrapper>
        </S.HardSkillsBox>
      </S.HardSkillsWrapper>
    </S.HardSkillsSection>
  )
}

export default HardSkills
