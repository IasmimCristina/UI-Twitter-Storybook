import { Meta, StoryObj } from '@storybook/react'
import { LoginPage, LoginPageProps } from './LoginPage'




export default {
  title: 'Components/LoginPage',
  component: LoginPage,


} as Meta<LoginPageProps>


export const Default: StoryObj<LoginPageProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<LoginPageProps> = {
  args: {
    type: 'dark',

  },


}

