import { Meta, Story } from '@storybook/react/types-6-0'
import SwitchColorIcon, { SwitchColorIconProps } from '.'

export default {
  title: 'SwitchColorIcon',
  component: SwitchColorIcon,
  argTypes: {
    theme: {
      options: ['light', 'dark']
    }
  }
} as Meta

export const Default: Story<SwitchColorIconProps> = (args) => (
  <SwitchColorIcon {...args} />
)

Default.args = { theme: 'light' }
