import { Meta, StoryObj } from '@storybook/react'
import { MenuItem,  MenuItemRootProps } from './MenuItem'
import { House, HashStraight, Bell, EnvelopeSimple, ListChecks, BookmarkSimple, UserCircle, DotsThreeCircle  } from "phosphor-react";


export default {
  title: 'Components/MenuItem',
  component: MenuItem.Root,
  
  args: {
   
    style: 'hover:border-primary-blue',   
    children: (
      
      <>     
      
      <MenuItem.Icon style='text-black'>
      <House />
      </MenuItem.Icon>

      <MenuItem.Item style='text-black' children='Home'  />
      </>
    ),
  },
  argTypes: {
    
    children: {      
      table: {
        disable: true,
      }
    },
  }

} as Meta<MenuItemRootProps>
export const Default: StoryObj<MenuItemRootProps> = {

}





export const Inverted: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-white', 
    children: (
      <>
      
      <MenuItem.Icon style='text-white'>
      <House />
      </MenuItem.Icon>

      <MenuItem.Item style='text-white'  children='Home'   />
      </>
    ),
  },
}

export const Selected: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',
    
    children: (
      <>
      
      <MenuItem.Icon style='text-primary-blue'>
      <House />
      </MenuItem.Icon>

      <MenuItem.Item style='text-primary-blue'  children='Home'   />
      </>
    ),
  },
}

export const VariationsHome: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',    
    children: (
      <>
      
      <MenuItem.Icon style='text-primary-blue'>
      <House />
      </MenuItem.Icon>

      <MenuItem.Item style='text-primary-blue'  children='Home'   />
      </>
    ),
  },
}

export const VariationsExploreDefault: StoryObj<MenuItemRootProps> = {
  args: {
   
  style: 'hover:border-primary-blue',   
  children: (
    
    <>     
    
    <MenuItem.Icon style='text-black'>
    <HashStraight />
    </MenuItem.Icon>

    <MenuItem.Item style='text-black' children='Explore'  />
    </>
  ),
},
}

export const VariationsExploreInverted: StoryObj<MenuItemRootProps> = {
  args: {
   
  style: 'hover:border-white',   
  children: (
    
    <>     
    
    <MenuItem.Icon style='text-white'>
    <HashStraight />
    </MenuItem.Icon>

    <MenuItem.Item style='text-white' children='Explore'  />
    </>
  ),
},
}

export const VariationsExploreSelected: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',    
    children: (
      <>
      
      <MenuItem.Icon style='text-primary-blue'>
      <HashStraight />
      </MenuItem.Icon>

      <MenuItem.Item style='text-primary-blue'  children='Explore'   />
      </>
    ),
  },
}


export const VariationsNotificationsDefault: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',    
    children: (
      <>
      
      <MenuItem.Icon style='text-black'>
      <Bell />
      </MenuItem.Icon>

      <MenuItem.Item style='text-black'  children='Notifications'   />
      </>
    ),
  },
}

export const VariationsNotificationsInverted: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-white',    
    children: (
      <>
      
      <MenuItem.Icon style='text-white'>
      <Bell />
      </MenuItem.Icon>

      <MenuItem.Item style='text-white'  children='Notifications'   />
      </>
    ),
  },
}

export const VariationsNotificationsSelected: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',    
    children: (
      <>
      
      <MenuItem.Icon style='text-primary-blue'>
      <Bell />
      </MenuItem.Icon>

      <MenuItem.Item style='text-primary-blue'  children='Notifications'   />
      </>
    ),
  },
}

export const VariationsMessagesDefault: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',    
    children: (
      <>
      
      <MenuItem.Icon style='text-black'>
      <EnvelopeSimple />
      </MenuItem.Icon>

      <MenuItem.Item style='text-black'  children='Messages'   />
      </>
    ),
  },
}

export const VariationsMessagesInverted: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-white',    
    children: (
      <>
      
      <MenuItem.Icon style='text-white'>
      <EnvelopeSimple />
      </MenuItem.Icon>

      <MenuItem.Item style='text-white'  children='Messages'   />
      </>
    ),
  },
}

export const VariationsMessagesSelected: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',    
    children: (
      <>
      
      <MenuItem.Icon style='text-primary-blue'>
      <EnvelopeSimple />
      </MenuItem.Icon>

      <MenuItem.Item style='text-primary-blue'  children='Messages'   />
      </>
    ),
  },
}

export const VariationsBookmarksDefault: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',    
    children: (
      <>
      
      <MenuItem.Icon style='text-black'>
      <BookmarkSimple />
      </MenuItem.Icon>

      <MenuItem.Item style='text-black'  children='Bookmarks'   />
      </>
    ),
  },
}

export const VariationsBookmarksInverted: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-white',    
    children: (
      <>
      
      <MenuItem.Icon style='text-white'>
      <BookmarkSimple />
      </MenuItem.Icon>

      <MenuItem.Item style='text-white'  children='Bookmarks'   />
      </>
    ),
  },
}

export const VariationsBookmarksSelected: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',    
    children: (
      <>
      
      <MenuItem.Icon style='text-primary-blue'>
      <BookmarkSimple />
      </MenuItem.Icon>

      <MenuItem.Item style='text-primary-blue'  children='Bookmarks'   />
      </>
    ),
  },
}

export const VariationsListsDefault: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',    
    children: (
      <>
      
      <MenuItem.Icon style='text-black'>
      <ListChecks />
      </MenuItem.Icon>

      <MenuItem.Item style='text-black'  children='Lists'   />
      </>
    ),
  },
}

export const VariationsListsInverted: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-white',    
    children: (
      <>
      
      <MenuItem.Icon style='text-white'>
      <ListChecks />
      </MenuItem.Icon>

      <MenuItem.Item style='text-white'  children='Lists'   />
      </>
    ),
  },
}

export const VariationsListsSelected: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',    
    children: (
      <>
      
      <MenuItem.Icon style='text-primary-blue'>
      <ListChecks />
      </MenuItem.Icon>

      <MenuItem.Item style='text-primary-blue'  children='Lists'   />
      </>
    ),
  },
}


export const VariationsProfileDefault: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',    
    children: (
      <>
      
      <MenuItem.Icon style='text-black'>
      <UserCircle />
      </MenuItem.Icon>

      <MenuItem.Item style='text-black'  children='Profile'   />
      </>
    ),
  },
}

export const VariationsProfileInverted: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-white',    
    children: (
      <>
      
      <MenuItem.Icon style='text-white'>
      <UserCircle />
      </MenuItem.Icon>

      <MenuItem.Item style='text-white'  children='Profile'   />
      </>
    ),
  },
}

export const VariationsProfileSelected: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',    
    children: (
      <>
      
      <MenuItem.Icon style='text-primary-blue'>
      <UserCircle />
      </MenuItem.Icon>

      <MenuItem.Item style='text-primary-blue'  children='Profile'   />
      </>
    ),
  },
}


export const VariationsMoreDefault: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',    
    children: (
      <>
      
      <MenuItem.Icon style='text-primary-blue'>
      <DotsThreeCircle />
      </MenuItem.Icon>

      <MenuItem.Item style='text-primary-blue'  children='More'   />
      </>
    ),
  },
}

export const VariationsMoreInverted: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-white',    
    children: (
      <>
      
      <MenuItem.Icon style='text-white'>
      <DotsThreeCircle />
      </MenuItem.Icon>

      <MenuItem.Item style='text-white'  children='More'   />
      </>
    ),
  },
}

export const VariationsMoreSelected: StoryObj<MenuItemRootProps> = {
  args: { 
    style: 'hover:border-primary-blue',    
    children: (
      <>
      
      <MenuItem.Icon style='text-primary-blue'>
      <DotsThreeCircle />
      </MenuItem.Icon>

      <MenuItem.Item style='text-primary-blue'  children='More'   />
      </>
    ),
  },
}





