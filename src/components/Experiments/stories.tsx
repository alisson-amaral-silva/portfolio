import { Meta, Story } from '@storybook/react/types-6-0'
import Experiments from '.'

export default {
  title: 'Experiments',
  component: Experiments
} as Meta

export const Basic: Story = () => <Experiments />
