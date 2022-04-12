import { render, screen } from '@testing-library/react'
import HardSkills  from '.'

describe('<HardSkills  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /HardSkills /i })
    ).toBeInTheDocument()
  })

})
