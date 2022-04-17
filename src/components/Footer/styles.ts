import { motion } from 'framer-motion'
import styled from 'styled-components'

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

export const FooterText = styled(motion.div)``

export const LogoWrapper = styled(motion.div)`
  height: 10px;
  width: 15%auto;
`
