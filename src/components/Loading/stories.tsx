import { Meta, Story } from '@storybook/react/types-6-0'
import Loading from '.'

export default {
  title: 'Loading',
  component: Loading
} as Meta

export const Default: Story = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Loading />
  </div>
)
