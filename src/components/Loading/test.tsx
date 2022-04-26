import { render, screen } from 'utils/test-utils'
import Loading from '.'

describe('<Loading  />', () => {
  it('Should render correctly', () => {
    render(<Loading />)

    expect(screen.getByTestId(/loading/i)).toBeInTheDocument()
  })
})
