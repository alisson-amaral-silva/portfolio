import { Meta, Story } from '@storybook/react/types-6-0'
import Social, { SocialProps } from '.'
import items from './mock'

export default {
  title: 'Social',
  component: Social,
  argTypes: {
    items: {
      type: ''
    }
  }
} as Meta

export const Default: Story<SocialProps> = (args) => <Social {...args} />

Default.args = {
  socialMedias: items
}
