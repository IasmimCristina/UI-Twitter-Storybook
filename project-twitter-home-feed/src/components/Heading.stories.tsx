import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading.'
  },

} as Meta<HeadingProps>


export const Default: StoryObj<HeadingProps> = {}


export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
  }
}
export const Medium: StoryObj<HeadingProps> = {
  args: {
    size: 'md',
  }
}
export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
  }
}


export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with h1</h1>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    },
  }
}

