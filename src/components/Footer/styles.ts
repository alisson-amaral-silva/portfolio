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
  width: 15%;
`
