import { Meta, StoryObj } from '@storybook/react'
import { MenuItem, MenuItemItemProps, MenuItemRootProps } from './MenuItem'

export default {
  title: 'Components/MenuItem',
  component: MenuItem.Root,
  args: {
    children: (
      <MenuItem.Item state='default' type='home' children='Home' />
    ),
  },

} as Meta<MenuItemRootProps>


export const Default: StoryObj<MenuItemRootProps> = {

}




