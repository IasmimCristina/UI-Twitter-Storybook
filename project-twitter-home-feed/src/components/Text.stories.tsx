import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Example.'
  },

} as Meta<TextProps>


export const Default: StoryObj<TextProps> = {}

export const SuperExtraSmall: StoryObj<TextProps> = {
  args: {
    size: 'sxs',
  }
}
export const ExtraSmall: StoryObj<TextProps> = {
  args: {
    size: 'xs',
  }
}
export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  }
}
export const Medium: StoryObj<TextProps> = {
  args: {
    size: 'md',
  }
}
export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  }
}
export const ExtraLarge: StoryObj<TextProps> = {
  args: {
    size: 'xlg',
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with the 'p' tag</p>
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

