import { render, screen } from '@testing-library/react'
import Social  from '.'

describe('<Social  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Social /i })
    ).toBeInTheDocument()
  })

})
