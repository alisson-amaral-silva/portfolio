import lottieJson from '../../../assets/loading.json'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Lottie from 'react-lottie-player'

const Loading = () => {
  const { t } = useTranslation('common')
  return (
    <Lottie
      aria-busy
      data-testid="loading"
      aria-label={t('loading')}
      loop
      animationData={lottieJson}
      play
    />
  )
}

export default Loading
