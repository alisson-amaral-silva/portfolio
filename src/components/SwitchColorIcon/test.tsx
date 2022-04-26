import { render, screen } from 'utils/test-utils'
import SwitchColorIcon from '.'

describe('<SwitchColorIcon  />', () => {
  it('should render the SwitchColorIcon component with the light as current mode', () => {
    render(<SwitchColorIcon theme="light" />)
    expect(screen.getByTestId('light-mode')).toBeInTheDocument()
  })

  it('should render the SwitchColorIcon component with the dark as current mode', () => {
    render(<SwitchColorIcon theme="dark" />)
    expect(screen.getByTestId('dark-mode')).toBeInTheDocument()
  })
})
