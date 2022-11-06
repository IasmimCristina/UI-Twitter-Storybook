import { Meta, StoryObj } from '@storybook/react'
import { TabBarItem, TabBarItemProps } from './TabBarItem'




export default {
  title: 'Components/TabBarItem',
  component: TabBarItem,


} as Meta<TabBarItemProps>


export const Default: StoryObj<TabBarItemProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<TabBarItemProps> = {
  args: {
    type: 'dark',

  },


}

