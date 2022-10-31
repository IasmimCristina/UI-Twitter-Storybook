import { Meta, StoryObj } from '@storybook/react'
import { Tweet, TweetProps } from './Tweet'




export default {
  title: 'Components/Tweet',
  component: Tweet,


} as Meta<TweetProps>


export const Default: StoryObj<TweetProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<TweetProps> = {
  args: {
    type: 'dark',

  },


}

