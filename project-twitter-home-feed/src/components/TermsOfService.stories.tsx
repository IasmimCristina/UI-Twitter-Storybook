import { Meta, StoryObj } from '@storybook/react'
import { TermsOfService, TermsOfServiceProps } from './TermsOfService'




export default {
  title: 'Components/TermsOfService',
  component: TermsOfService,


} as Meta<TermsOfServiceProps>


export const Default: StoryObj<TermsOfServiceProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<TermsOfServiceProps> = {
  args: {
    type: 'dark',

  },


}

