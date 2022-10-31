import { Meta, StoryObj } from '@storybook/react'
import { Post, PostProps } from './Post'

export default {
  title: 'Components/Post',
  component: Post,


} as Meta<PostProps>


export const Default: StoryObj<PostProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<PostProps> = {
  args: {
    type: 'dark',

  },


}

