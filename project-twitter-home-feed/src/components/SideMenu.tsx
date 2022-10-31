import { clsx } from 'clsx';
import { House, HashStraight, Bell, EnvelopeSimple, ListChecks, BookmarkSimple, UserCircle, DotsThreeCircle, TwitterLogo, DotsThreeOutline } from "phosphor-react";


import imageFile from '../static/Profile.svg';

const image = {
  src: imageFile,
  alt: 'User',
};


export interface SideMenuProps {

  type?: 'dark' | 'normal';



}
export function SideMenu({ type = 'normal', }: SideMenuProps) {

  // <Slot className={` w-7 h-6  ${props.style} `}>
  //       {props.children}
  //     </Slot>

  {/* <a className={`font-sans font-bold text-lg ${props.style}`} href="#">{props.children}</a> */ }

  {/* <div className={
  `flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2  ${props.style}`

}>
  {props.children}

</div> */}

  return (
    <div className='h-screen bg-red  w-1/3 flex flex-col  justify-between'>
      <div className="ml-10">
        <TwitterLogo weight="fill" className={clsx(' h-7 w-6', {
          'text-primary-blue': type == 'normal',
          'text-white': type == 'dark',
        })} />
        <div className={
          `flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `
        }>
          <House />
          <a className={`font-sans font-bold text-lg `} href="#">
            Home
          </a>
        </div>
        <div className={
          `flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `
        }>
          <HashStraight />
          <a className={`font-sans font-bold text-lg `} href="#">
            Explore
          </a>
        </div>
        <div className={
          `flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `
        }>
          <Bell />
          <a className={`font-sans font-bold text-lg `} href="#">
            Notifications
          </a>
        </div>
        <div className={
          `flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `
        }>
          <EnvelopeSimple />
          <a className={`font-sans font-bold text-lg `} href="#">
            Messages
          </a>
        </div>
        <div className={
          `flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `
        }>
          <BookmarkSimple />
          <a className={`font-sans font-bold text-lg `} href="#">
            Bookmarks
          </a>
        </div>
        <div className={
          `flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `
        }>
          <ListChecks />
          <a className={`font-sans font-bold text-lg `} href="#">
            Lists
          </a>
        </div>
        <div className={
          `flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `
        }>
          <UserCircle />
          <a className={`font-sans font-bold text-lg `} href="#">
            Profile
          </a>
        </div>
        <div className={
          `flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `
        }>
          <DotsThreeCircle />
          <a className={`font-sans font-bold text-lg `} href="#">
            More
          </a>
        </div>
        <button className={
          clsx(
            'font-sans font-bold rounded-full transition-all border-2 focus:ring-4 ring-dark-5 py-3 px-24 text-white   bg-primary-blue hover:text-primary-blue  hover:bg-white  border-primary-blue',
            {
            }
          )}>
          Tweet
        </button>
      </div>
      <div className="flex flex-row gap-2  ">

        <div className="flex flex-row gap-2 w-64  justify-between items-center">
          <div className="flex flex-row gap-2">
            <img className='h-10 w-10 rounded-full ml-2 bg-white text-sxs text-primary-blue border-0' src={image.src} alt={image.alt} />
            <div className="flex flex-col ">
              <span className={` text-md  `}>Davide Biscuso</span>
              <span className={clsx(` text-md  `, {
              })}>@biscuttu</span>
            </div>
          </div>
          <DotsThreeOutline className={clsx('', {

          })} />
        </div>
        
      </div>


    </div >


  )
}