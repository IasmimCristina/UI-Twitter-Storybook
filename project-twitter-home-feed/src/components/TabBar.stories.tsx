import { Meta, StoryObj } from '@storybook/react'
import { TabBar, TabBarProps } from './TabBar'




export default {
  title: 'Components/TabBar',
  component: TabBar,


} as Meta<TabBarProps>


export const Default: StoryObj<TabBarProps> = {
  args: {
    appearance: 'normal',

  },
}

export const DarkVersion: StoryObj<TabBarProps> = {
  args: {
    appearance: 'dark',

  },


}

