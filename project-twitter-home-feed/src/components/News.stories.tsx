import { Meta, StoryObj } from '@storybook/react'
import { News, NewsProps } from './News'




export default {
  title: 'Components/News',
  component: News,


} as Meta<NewsProps>


export const Default: StoryObj<NewsProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<NewsProps> = {
  args: {
    type: 'dark',

  },


}

