import lottieJson from '../../../assets/loading.json'
import React from 'react'
import { StyledLottie } from './styles'
import { useTranslation } from 'react-i18next'

const Loading = () => {
  const { t } = useTranslation('common')

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieJson
  }

  return (
    <StyledLottie
      aria-busy
      data-testid="loading"
      aria-label={t('loading')}
      options={defaultOptions}
      style={{ width: '30%', height: '50%' }}
    />
  )
}

export default Loading
