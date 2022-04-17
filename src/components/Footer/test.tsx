import { render, screen } from '@testing-library/react'
import Footer  from '.'

describe('<Footer  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Footer /i })
    ).toBeInTheDocument()
  })

})
