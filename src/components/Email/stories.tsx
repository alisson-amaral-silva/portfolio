import { Meta, Story } from '@storybook/react/types-6-0'
import Email, { EmailProps } from '.'

export default {
  title: 'Email',
  component: Email,
  argTypes: {
    orientation: {
      options: ['right', 'left']
    },
    email: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<EmailProps> = (args) => <Email {...args} />

Default.args = { orientation: 'right', email: 'email@email.com' }
