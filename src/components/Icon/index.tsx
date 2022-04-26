import { Npm } from '@styled-icons/fa-brands/Npm'
import { Github } from '@styled-icons/feather/Github'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'

export interface IconProps {
  name?: 'Npm' | 'GitHub' | 'Instagram' | 'Linkedin'
}

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case 'GitHub':
      return <Github data-testid="github" />
    case 'Instagram':
      return <Instagram data-testid="instagram" />
    case 'Linkedin':
      return <LinkedinSquare data-testid="linkedin" />
    default:
      return <Npm data-testid="npm" />
  }
}

export default Icon
