import { Meta, StoryObj } from '@storybook/react'
import { SideMenu, SideMenuProps } from './SideMenu'




export default {
  title: 'Components/SideMenu',
  component: SideMenu,


} as Meta<SideMenuProps>


export const Default: StoryObj<SideMenuProps> = {
  args: {
    type: 'normal',
    page: 'pageHome'

  },
}

export const DarkVersion: StoryObj<SideMenuProps> = {
  args: {
    type: 'dark',
    page: 'pageHome'
  },


}

