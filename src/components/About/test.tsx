import { render, screen } from '@testing-library/react'
import About  from '.'

describe('<About  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /About /i })
    ).toBeInTheDocument()
  })

})
