import { render, screen } from 'utils/test-utils'
import Icon from '.'

describe('<Icon  />', () => {
  it('should render the default icon correctly', () => {
    render(<Icon />)
    expect(screen.getByTestId('npm')).toBeInTheDocument()
    expect(screen.queryByTestId('linkedin')).not.toBeInTheDocument()
    expect(screen.queryByTestId('instagram')).not.toBeInTheDocument()
    expect(screen.queryByTestId('github')).not.toBeInTheDocument()
  })

  it('should render the linkedin icon correctly', () => {
    render(<Icon name="Linkedin" />)
    expect(screen.queryByTestId('npm')).not.toBeInTheDocument()
    expect(screen.getByTestId('linkedin')).toBeInTheDocument()
    expect(screen.queryByTestId('instagram')).not.toBeInTheDocument()
    expect(screen.queryByTestId('github')).not.toBeInTheDocument()
  })

  it('should render the instagram icon correctly', () => {
    render(<Icon name="Instagram" />)
    expect(screen.queryByTestId('npm')).not.toBeInTheDocument()
    expect(screen.queryByTestId('linkedin')).not.toBeInTheDocument()
    expect(screen.getByTestId('instagram')).toBeInTheDocument()
    expect(screen.queryByTestId('github')).not.toBeInTheDocument()
  })

  it('should render the github icon correctly', () => {
    render(<Icon name="GitHub" />)
    expect(screen.queryByTestId('npm')).not.toBeInTheDocument()
    expect(screen.queryByTestId('linkedin')).not.toBeInTheDocument()
    expect(screen.queryByTestId('instagram')).not.toBeInTheDocument()
    expect(screen.getByTestId('github')).toBeInTheDocument()
  })
})
