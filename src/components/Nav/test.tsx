import { render, screen } from '@testing-library/react'
import Nav  from '.'

describe('<Nav  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Nav /i })
    ).toBeInTheDocument()
  })

})
