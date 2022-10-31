import { Meta, StoryObj } from '@storybook/react'
import { SearchBar, SearchBarProps } from './SearchBar'

export default {
  title: 'Components/SearchBar',
  component: SearchBar,


} as Meta<SearchBarProps>


export const Default: StoryObj<SearchBarProps> = {
  args: {
    type: 'normal',

  },
}

export const DarkVersion: StoryObj<SearchBarProps> = {
  args: {
    type: 'dark',

  },


}

