import { render, screen } from '@testing-library/react'
import ThemeSwitcher  from '.'

describe('<ThemeSwitcher  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /ThemeSwitcher /i })
    ).toBeInTheDocument()
  })

})
