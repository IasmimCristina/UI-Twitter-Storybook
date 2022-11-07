import { Meta, StoryObj } from '@storybook/react'
import { FooterSignupItem, FooterSignupItemProps } from './FooterSignupItem'




export default {
  title: 'Components/FooterSignupItem',
  component: FooterSignupItem,


} as Meta<FooterSignupItemProps>


export const Default: StoryObj<FooterSignupItemProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<FooterSignupItemProps> = {
  args: {
    type: 'dark',

  },


}

