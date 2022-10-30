import { ReactNode } from 'react';
import { clsx } from 'clsx';


//Precisará das propriedades de type e state!
export interface MenuItemRootProps {
  children: ReactNode;
  
}

function MenuItemRoot(props: MenuItemRootProps) {
  return (
    <div className={
      clsx(
        'flex gap-6 bg-white h-16 w-64 pr-36 pl-3 justify-center  items-center cursor-pointer  ',
        {
        }

      )}>
        {props.children}
    </div>
  )
}
// function MenuItemIcon { }


export interface MenuItemItemProps {

  children: ReactNode;
  type: 'home' | 'explore' | 'notifications' | 'messages' | 'bookmarks' | 'lists' | 'profile' | 'more';
  state: 'inverted' | 'default' | 'selected';


}

function MenuItemItem({ state , type, children }: MenuItemItemProps) {

  return (

    <a className={clsx('font-sans font-bold text-lg', {

    })} href="#">{children}</a>

  )
}
export const MenuItem = {
  Root: MenuItemRoot,
  Item: MenuItemItem,

}