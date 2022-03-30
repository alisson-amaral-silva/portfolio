import lottieJson from '../../../assets/loading.json'
import React from 'react'
import { StyledLottie } from './styles'
// import { useTranslation } from 'react-i18next'

interface LoadingProps {
  isInProgress: boolean
}

const Loading = ({ isInProgress }: LoadingProps) => {
  // const { t } = useTranslation('common')

  if (!isInProgress) return null

  return (
    <StyledLottie
      role="progressbar"
      aria-busy
      // aria-label={t('loading')}
      animationData={lottieJson}
      play
      loop
    />
  )
}

export default Loading
