import { Meta, StoryObj } from '@storybook/react'
import { Text, Textprops } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Example.'
  },

} as Meta<Textprops>


export const Default: StoryObj<Textprops> = {}

export const SuperExtraSmall: StoryObj<Textprops> = {
  args: {
    size: 'sxs',
  }
}
export const ExtraSmall: StoryObj<Textprops> = {
  args: {
    size: 'xs',
  }
}
export const Small: StoryObj<Textprops> = {
  args: {
    size: 'sm',
  }
}
export const Medium: StoryObj<Textprops> = {
  args: {
    size: 'md',
  }
}
export const Large: StoryObj<Textprops> = {
  args: {
    size: 'lg',
  }
}
export const ExtraLarge: StoryObj<Textprops> = {
  args: {
    size: 'xlg',
  }
}

export const CustomComponent: StoryObj<Textprops> = {
  args: {
    asChild: true,
    children: (
      <p>Testing...</p>
    )
  }
}

