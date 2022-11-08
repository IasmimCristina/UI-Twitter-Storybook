import { Meta, StoryObj } from '@storybook/react'
import { SignupButtons, SignupButtonsProps } from './SignupButtons'

export default {
  title: 'Components/SignupButtons',
  component: SignupButtons,


} as Meta<SignupButtonsProps>


export const Default: StoryObj<SignupButtonsProps> = {
  args: {
    type: 'normal',
    buttonType: 'PhoneEmail',

  },
}

export const DarkVersion: StoryObj<SignupButtonsProps> = {
  args: {
    type: 'dark',
    buttonType: 'PhoneEmail',
  },


}




