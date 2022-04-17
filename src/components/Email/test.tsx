import { render, screen } from '@testing-library/react'
import Email  from '.'

describe('<Email  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Email /i })
    ).toBeInTheDocument()
  })

})
