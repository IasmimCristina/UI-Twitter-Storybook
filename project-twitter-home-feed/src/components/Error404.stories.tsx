import { Meta, StoryObj } from '@storybook/react'
import { Error404, Error404Props } from './Error404'




export default {
  title: 'Components/Error404',
  component: Error404,


} as Meta<Error404Props>


export const Default: StoryObj<Error404Props> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<Error404Props> = {
  args: {
    type: 'dark',

  },


}

