import { render, screen } from '@testing-library/react'
import Intro from '.'

describe('<Intro  />', () => {
  it('should render the heading', () => {
    expect(screen.getByRole('heading', { name: /Intro /i })).toBeInTheDocument()
  })
})
