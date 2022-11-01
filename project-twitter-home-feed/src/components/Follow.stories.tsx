import { Meta, StoryObj } from '@storybook/react'
import { Follow, FollowProps } from './Follow'




export default {
  title: 'Components/Follow',
  component: Follow,


} as Meta<FollowProps>


export const Default: StoryObj<FollowProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<FollowProps> = {
  args: {
    type: 'dark',

  },


}

