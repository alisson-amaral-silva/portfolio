import { render, screen } from 'utils/test-utils'
import Email from '.'

const email = 'email@email.com'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

describe('<Email  />', () => {
  it('should render the email component correctly', () => {
    render(<Email email={email} orientation="right" />)

    expect(screen.getByTestId('email')).toBeInTheDocument()
    expect(screen.getByTestId('email')).toHaveAttribute(
      'href',
      `mailto:${email}`
    )
  })
})
