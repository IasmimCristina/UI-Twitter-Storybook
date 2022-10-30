import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';


//Precisará das propriedades de type e state!
export interface MenuItemRootProps {
  children: ReactNode;
  style: ReactNode;
 

}

function MenuItemRoot(props: MenuItemRootProps) {
  return (
    <div className={
      `flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2  ${props.style}`

    }>
      {props.children}

    </div>
  )
}

export interface MenuItemIconProps {
  children: ReactNode;
  style: ReactNode;


}


function MenuItemIcon(props: MenuItemIconProps) {
  return (
    <Slot className={` w-7 h-6  ${props.style} `}>
      {props.children}
    </Slot>
  )
}


export interface MenuItemItemProps {

  children: ReactNode;
  style: ReactNode;


}

function MenuItemItem(props: MenuItemItemProps) {

  return (

    <a className={`font-sans font-bold text-lg ${props.style}`} href="#">{props.children}</a>

  )
}
export const MenuItem = {
  Root: MenuItemRoot,
  Item: MenuItemItem,
  Icon: MenuItemIcon,

}