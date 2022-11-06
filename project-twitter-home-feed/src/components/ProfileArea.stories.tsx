import { Meta, StoryObj } from '@storybook/react'
import { ProfileArea, ProfileAreaProps } from './ProfileArea'




export default {
  title: 'Components/ProfileArea',
  component: ProfileArea,


} as Meta<ProfileAreaProps>


export const Default: StoryObj<ProfileAreaProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<ProfileAreaProps> = {
  args: {
    type: 'dark',

  },


}

