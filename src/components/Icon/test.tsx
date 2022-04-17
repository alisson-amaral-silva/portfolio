import { render, screen } from '@testing-library/react'
import Icon  from '.'

describe('<Icon  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Icon /i })
    ).toBeInTheDocument()
  })

})
