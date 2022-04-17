import { render, screen } from '@testing-library/react'
import Contact  from '.'

describe('<Contact  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Contact /i })
    ).toBeInTheDocument()
  })

})
