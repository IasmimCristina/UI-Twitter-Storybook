import { Meta, StoryObj } from '@storybook/react'
import { FooterSignupPage, FooterSignupPageProps } from './FooterSignupPage'

export default {
  title: 'Components/FooterSignupPage',
  component: FooterSignupPage,


} as Meta<FooterSignupPageProps>


export const Default: StoryObj<FooterSignupPageProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<FooterSignupPageProps> = {
  args: {
    type: 'dark',

  },


}




