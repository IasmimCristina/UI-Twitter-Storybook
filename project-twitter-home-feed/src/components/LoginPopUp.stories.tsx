import { Meta, StoryObj } from '@storybook/react'
import { LoginPopUp, LoginPopUpProps } from './LoginPopUp'




export default {
  title: 'Components/LoginPopUp',
  component: LoginPopUp,


} as Meta<LoginPopUpProps>


export const Default: StoryObj<LoginPopUpProps> = {
  args: {
    type: 'normal',
  },
}

export const DarkVersion: StoryObj<LoginPopUpProps> = {
  args: {
    type: 'dark',

  },

}

