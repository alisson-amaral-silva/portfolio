import { render, screen } from '@testing-library/react'
import Menu  from '.'

describe('<Menu  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Menu /i })
    ).toBeInTheDocument()
  })

})
