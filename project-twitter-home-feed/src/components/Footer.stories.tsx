import { Meta, StoryObj } from '@storybook/react'
import { Footer, FooterProps } from './Footer'

export default {
  title: 'Components/Footer',
  component: Footer,


} as Meta<FooterProps>


export const Default: StoryObj<FooterProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<FooterProps> = {
  args: {
    type: 'dark',

  },


}




