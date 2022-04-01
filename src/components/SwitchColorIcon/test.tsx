import { render, screen } from '@testing-library/react'
import SwitchColorIcon  from '.'

describe('<SwitchColorIcon  />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /SwitchColorIcon /i })
    ).toBeInTheDocument()
  })

})
