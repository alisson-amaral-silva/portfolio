import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
  isLoading?: boolean
}
const Base = ({ children, isLoading = false }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      {isLoading && <S.Content isLoading>{children}</S.Content>}
      {!isLoading && <S.Content>{children}</S.Content>}
    </S.Wrapper>
  )
}

export default Base
