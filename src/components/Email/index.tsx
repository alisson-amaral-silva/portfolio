import Side from 'components/Side'
import { motion } from 'framer-motion'
import * as S from './styles'

const Email = () => {
  const variants = {
    hidden: {
      scale: 1,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1
      }
    }
  }
  return (
    <Side orientation="right">
      <S.EmailLinkWrapper>
        <a href={`mailto:${process.env.EMAIL}`}>{process.env.EMAIL}</a>
      </S.EmailLinkWrapper>
    </Side>
  )
}

export default Email
