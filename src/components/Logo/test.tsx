import { render, screen } from 'utils/test-utils'
import Logo from '.'

describe('<Logo  />', () => {
  it('should render the logo correctly', () => {
    render(<Logo />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getByTestId('logo')).toHaveAttribute('href', '#')

    expect(screen.getByTestId('logo')).toHaveStyle({
      color: 'rgb(250, 250, 250)'
    })

    expect(screen.getByTestId('second-logo')).toHaveStyle({
      color: 'rgb(255, 87, 87)'
    })
  })
})
