import usePrefersReducedMotion from 'hooks/usePrefersReducedMotion'
import { useEffect, useState } from 'react'
import * as S from './styles'

export interface SideProps {
  orientation: 'left' | 'right'
  children: React.ReactElement
}

const Side = ({ children, orientation = 'left' }: SideProps) => {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
    const timeout = setTimeout(() => setIsMounted(true), 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <S.SideElementWrapper orientation={orientation}>
      {prefersReducedMotion ? (
        <>{children}</>
      ) : (
        <>{isMounted && <>{children}</>}</>
      )}
    </S.SideElementWrapper>
  )
}

export default Side
