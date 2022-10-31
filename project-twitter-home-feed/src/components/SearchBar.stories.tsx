import { Meta, StoryObj } from '@storybook/react'
import { Spacer, SpacerProps } from './Spacer'

export default {
  title: 'Components/Spacer',
  component: Spacer,


} as Meta<SpacerProps>


export const Default: StoryObj<SpacerProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<SpacerProps> = {
  args: {
    type: 'dark',

  },


}

