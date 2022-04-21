import { Meta, Story } from '@storybook/react/types-6-0'
import Icon, { IconProps } from '.'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    name: {
      options: ['Npm', 'GitHub', 'Instagram', 'Linkedin']
    }
  }
} as Meta

export const Default: Story<IconProps> = (args) => (
  <div style={{ height: 25, width: 25 }}>
    <Icon {...args} />
  </div>
)

Default.args = { name: 'GitHub' }
