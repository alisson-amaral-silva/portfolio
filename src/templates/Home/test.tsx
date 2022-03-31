import { render, screen } from '@testing-library/react'
import Home from '.'

describe('<Home  />', () => {
  it('should render the heading', () => {
    expect(screen.getByRole('heading', { name: /Home /i })).toBeInTheDocument()
  })
})
