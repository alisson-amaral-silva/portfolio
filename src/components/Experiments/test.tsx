import { render, screen } from '@testing-library/react'
import Experiments  from '.'

describe('<Experiments  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Experiments /i })
    ).toBeInTheDocument()
  })

})
