import { Meta, StoryObj } from '@storybook/react'
import { SignupPage, SignupPageProps } from './SignupPage'




export default {
  title: 'Components/SignupPage',
  component: SignupPage,


} as Meta<SignupPageProps>


export const Default: StoryObj<SignupPageProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<SignupPageProps> = {
  args: {
    type: 'dark',

  },


}

