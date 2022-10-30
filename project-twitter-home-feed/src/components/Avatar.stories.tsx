import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from './Avatar'


export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
   
  },

} as Meta<AvatarProps>


export const Default: StoryObj<AvatarProps> = {
  args: {
        
    size: 'small',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    },
  }
}



export const Variations: StoryObj<AvatarProps> = {
  args: {
        
    size: 'medium',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    },
  },

}


