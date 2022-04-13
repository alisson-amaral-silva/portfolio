import styled, { css } from 'styled-components'

export const HardSkillsSection = styled.section`
  max-width: 54rem;
  p {
    font-size: 18px;
  }
`

export const ParagraphWrapper = styled.p`
  ${({ theme }) => css`
    color: ${theme.font.color};
  `}
`

export const HardSkillsBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
  `}
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50rem;
  width: 60rem;
`

export const Icon = styled.img`
  height: 48px;
  width: auto;
`

export const FrontEndWrapper = styled.div`
  height: 100%;
  width: 92%;
  padding: 30px 30px;
  display: grid;
`

export const BackEndWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 30px 30px;
  display: grid;
`

export const TechTitle = styled.h5`
  font-weight: 800;
  font-size: clamp(26px, 5vw, 28px);
`

export const Database = styled.div`
  height: 100%;
  height: 100%;
  width: 100%;
  padding: 0.2rem 30px;
  display: grid;
  justify-content: center;
  align-items: center;
`

export const HardSkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
`

export const LanguagesWrapper = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

export const LiWrapper = styled.li`
  li + li {
    margin-top: 0.25em;
  }
  list-style: none;
  font-size: 18px;
  ${({ theme }) => css`
    color: ${theme.font.color};
  `}
`
export const UlWrapper = styled.ul`
  list-style: none;
  margin-left: 0;
  margin-top: 0;
`
