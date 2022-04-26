import { render, screen, waitFor } from 'utils/test-utils'
import Social from '.'
import socialMedias from './mock'
const scroll = jest.fn()

Object.defineProperty(window, 'scroll', scroll)

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

describe('<Social  />', () => {
  it('should render the Social component correctly', () => {
    render(<Social socialMedias={socialMedias} />)
    expect(screen.getByTestId('linkedin')).toBeInTheDocument()
    expect(screen.getByTestId('instagram')).toBeInTheDocument()
    expect(screen.getByTestId('github')).toBeInTheDocument()
    expect(screen.getByTestId('usa-icon')).toBeInTheDocument()
  })
})
