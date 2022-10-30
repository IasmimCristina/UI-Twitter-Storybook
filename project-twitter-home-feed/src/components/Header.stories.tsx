import { Meta, StoryObj } from '@storybook/react'
import { Header, HeaderProps } from './Header'

export default {
  title: 'Components/Header',
  component: Header,


} as Meta<HeaderProps>


export const Default: StoryObj<HeaderProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<HeaderProps> = {
  args: {
    type: 'dark',

  },


}

