import { render, screen } from '@testing-library/react'
import Jobs  from '.'

describe('<Jobs  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Jobs /i })
    ).toBeInTheDocument()
  })

})
