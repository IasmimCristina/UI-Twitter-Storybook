import { Meta, StoryObj } from '@storybook/react'
import { SignupModal, SignupModalProps } from './SignupModal'




export default {
  title: 'Components/SignupModal',
  component: SignupModal,


} as Meta<SignupModalProps>


export const Default: StoryObj<SignupModalProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<SignupModalProps> = {
  args: {
    type: 'dark',

  },


}

