import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';



export interface ProfileRootProps {
  children: ReactNode;  
 

}

function ProfileRoot(props: ProfileRootProps) {
  return (
    <div className={
      `flex   justify-between h-20 w-64 items-center cursor-pointer transition-all `

    }>
      {props.children}

    </div>
  )
}

export interface ProfileAvatarProps {
  children: ReactNode;
  styletext01: ReactNode;
  styletext02: ReactNode;

}


function ProfileAvatar(props: ProfileAvatarProps) {
  return (
    <div >
      <div className="flex flex-row gap-2    ">
        <div className="h-10 w-10 rounded-full ml-2 bg-white text-sxs text-primary-blue border-0">
          <img src="" alt="User" />
          </div>
        <div className="flex flex-col">
          <span className={` text-md ${props.styletext01} `}>Davide Biscuso</span>
          <span className={` text-md ${props.styletext02} `}>@biscuttu</span>
        </div>
      </div>
      
    </div>
  )
}


export interface ProfileIconProps {

  children: ReactNode;
  style: ReactNode;


}

function ProfileIcon(props: ProfileIconProps) {

  return (

  <Slot className={` w-7 h-6 mr-2 ${props.style} `}>
      {props.children}
    </Slot>

  )
}
export const Profile = {
  Root: ProfileRoot,
  Icon: ProfileIcon,
  Avatar: ProfileAvatar,

}