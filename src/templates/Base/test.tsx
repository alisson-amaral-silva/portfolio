import { render, screen } from '@testing-library/react'
import Base  from '.'

describe('<Base  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Base /i })
    ).toBeInTheDocument()
  })

})
