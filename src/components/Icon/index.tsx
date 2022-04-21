import { Npm } from '@styled-icons/fa-brands/Npm'
import { Github } from '@styled-icons/feather/Github'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'

export interface IconProps {
  name: 'Npm' | 'GitHub' | 'Instagram' | 'Linkedin'
}

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case 'Npm':
      return <Npm />
    case 'GitHub':
      return <Github />
    case 'Instagram':
      return <Instagram />
    case 'Linkedin':
      return <LinkedinSquare />
    default:
      return <Npm />
  }
}

export default Icon
