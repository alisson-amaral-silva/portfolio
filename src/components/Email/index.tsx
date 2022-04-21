import Side from 'components/Side'
import * as S from './styles'

export interface EmailProps {
  orientation: 'right' | 'left'
  email?: string
}

const Email = ({ orientation, email }: EmailProps) => {
  return (
    <Side orientation={orientation}>
      <S.EmailLinkWrapper>
        <a href={`mailto:${email}`}>{email}</a>
      </S.EmailLinkWrapper>
    </Side>
  )
}

export default Email
