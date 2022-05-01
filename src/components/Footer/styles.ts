import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`

export const FooterText = styled(motion.div)`
  ${({ theme }) => css`
    color: ${theme.font.color};
  `}
`

export const LogoWrapper = styled(motion.div)`
  height: 10px;
  max-width: 270px;
`

export const SocialLinksWrapper = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (max-width: 768px) {
      display: block;
      width: 100%;
      max-width: 270px;
      margin: 0 auto 10px;
      color: ${theme.font.color};
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      margin: 0;
      list-style: none;

      a {
        padding: 10px;
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  `}
`

export const Icon = styled.img`
  height: 30px;
  cursor: pointer;
  width: 28px;
`
