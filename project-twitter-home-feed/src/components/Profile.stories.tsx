import { Meta, StoryObj } from '@storybook/react'
import { Profile, ProfileRootProps } from './Profile'
import { DotsThreeOutline } from "phosphor-react";


export default {
  title: 'Components/Profile',
  component: Profile.Root,

  args: {

   
    children: (
      <>

        <Profile.Avatar styletext01='text-black' styletext02='text-dark-5'>
        </Profile.Avatar>

        <Profile.Icon style="text-black"  >
          <DotsThreeOutline />
        </Profile.Icon>
      </>
    ),
  },
  argTypes: {

    children: {
      table: {
        disable: true,
      }
    },
  }

} as Meta<ProfileRootProps>
export const Default: StoryObj<ProfileRootProps> = {

}





export const DarkVersion: StoryObj<ProfileRootProps> = {
  args: {
    
    children: (
      <>

        <Profile.Avatar styletext01='text-white' styletext02='text-dark-6'>
        </Profile.Avatar>

        <Profile.Icon style="text-white"  >
          <DotsThreeOutline />
        </Profile.Icon>
      </>
    ),
  },
}


