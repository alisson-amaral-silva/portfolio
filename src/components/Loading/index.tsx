import lottieJson from '../../../assets/loading.json'
import React from 'react'
import { StyledLottie } from './styles'
import { useTranslation } from 'react-i18next'

const Loading = () => {
  const { t } = useTranslation('common')

  return (
    <StyledLottie
      role="progressbar"
      aria-busy
      data-testid="loading"
      aria-label={t('loading')}
      animationData={lottieJson}
      play
      loop
    />
  )
}

export default Loading
