import { render, screen } from '@testing-library/react'
import Side  from '.'

describe('<Side  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Side /i })
    ).toBeInTheDocument()
  })

})
