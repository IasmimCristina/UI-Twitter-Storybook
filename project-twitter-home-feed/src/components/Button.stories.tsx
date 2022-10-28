import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Tweet'
  },

} as Meta<ButtonProps>


export const Default: StoryObj<ButtonProps> = {
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    },
  }
}

//Parei em 1 hora e seis!
// type?: 'primary' | 'follow' | 'login' | 'signup';

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Tweet",
    type: 'primary',
    size: 'normal',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    },
  },

}

export const Follow: StoryObj<ButtonProps> = {
  args: {
    children: "Follow",
    type: 'follow',
    size: 'normal',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    },
  },

}
export const Login: StoryObj<ButtonProps> = {
  args: {
    children: "Log in",
    type: 'login',
    size: 'normal',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    },
  },
}
export const Signup: StoryObj<ButtonProps> = {
  args: {
    children: "Sign up",
    type: 'signup',
    size: 'normal',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    },
  },
}

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: (
      <a>"a" tag</a>
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



