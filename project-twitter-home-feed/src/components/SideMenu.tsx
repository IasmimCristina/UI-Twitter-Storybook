import { clsx } from 'clsx';
import { House, HashStraight, Bell, EnvelopeSimple, ListChecks, BookmarkSimple, UserCircle, DotsThreeCircle, TwitterLogo, DotsThreeOutline } from "phosphor-react";


import imageFile from '../static/Profile.svg';

const image = {
  src: imageFile,
  alt: 'User',
};


export interface SideMenuProps {

  type?: 'dark' | 'normal';
  menuItemSelected: 'Home' | 'Explore' | 'Notifications' | 'Messages' | 'Bookmarks' | 'Lists' | 'Profile' | 'More';


}
export function SideMenu({ type = 'normal', menuItemSelected = 'Home' }: SideMenuProps) {

 


  return (
    <div className='p-4 h-screen flex flex-col  justify-between ml-10 '>
      <div className="">
        <div className="ml-2">
          <TwitterLogo weight="fill" className={clsx(' h-7 w-6 dark:text-white ', {
            'text-primary-blue': type == 'normal',
            'text-white': type == 'dark',
          })} />


          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 dark:border-white`, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',




          })}>
            <House className={clsx(' text-lg ml-2 ', {

              'text-primary-blue': menuItemSelected === 'Home',

              'text-black dark:text-white ': type == 'normal' && menuItemSelected != 'Home',
              'text-white': type == 'dark' && menuItemSelected != 'Home',


            })} />
            <span className={clsx(`font-sans font-bold text-lg text-primary-blue `, {

              'text-primary-blue': menuItemSelected === 'Home',

              'text-black dark:text-white': type == 'normal' && menuItemSelected != 'Home',
              'text-white': type == 'dark' && menuItemSelected != 'Home',


            })} >
              Home
            </span>
          </div>

          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 dark:border-white `, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',

          })}>

            <HashStraight className={clsx(`text-lg   ml-2 `, {

              'text-primary-blue': menuItemSelected === 'Explore',

              'text-black  dark:text-white': type == 'normal' && menuItemSelected != 'Explore',
              'text-white': type == 'dark' && menuItemSelected != 'Explore',
            })} />
            <span className={clsx(`font-sans font-bold text-lg  `, {
              'text-primary-blue': menuItemSelected === 'Explore',

              'text-black dark:text-white': type == 'normal' && menuItemSelected != 'Explore',
              'text-white': type == 'dark' && menuItemSelected != 'Explore',
            })} >
              Explore
            </span>
          </div>
          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2  dark:border-white`, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',

          })

          }>
            <Bell className={clsx(`text-lg  ml-2 `, {
              'text-primary-blue': menuItemSelected === 'Notifications',

              'text-black dark:text-white': type == 'normal' && menuItemSelected != 'Notifications',
              'text-white': type == 'dark' && menuItemSelected != 'Notifications',
            })} />
            <span className={clsx(`font-sans font-bold text-lg  `, {
              'text-primary-blue': menuItemSelected === 'Notifications',

              'text-black dark:text-white': type == 'normal' && menuItemSelected != 'Notifications',
              'text-white': type == 'dark' && menuItemSelected != 'Notifications',
            })} >
              Notifications
            </span>
          </div>
          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 dark:border-white`, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',

          })

          }>
            <EnvelopeSimple className={clsx(`text-lg   ml-2`, {
              'text-primary-blue': menuItemSelected === 'Messages',

              'text-black dark:text-white': type == 'normal' && menuItemSelected != 'Messages',
              'text-white': type == 'dark' && menuItemSelected != 'Messages',
            })} />
            <span className={clsx(`font-sans font-bold text-lg  `, {
              'text-primary-blue': menuItemSelected === 'Messages',

              'text-black dark:text-white': type == 'normal' && menuItemSelected != 'Messages',
              'text-white': type == 'dark' && menuItemSelected != 'Messages',
            })} >
              Messages
            </span>
          </div>
          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 dark:border-white`, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',

          })

          }>
            <BookmarkSimple className={clsx(`text-lg   ml-2`, {
              'text-primary-blue': menuItemSelected === 'Bookmarks',

              'text-black dark:text-white': type == 'normal' && menuItemSelected != 'Bookmarks',
              'text-white': type == 'dark' && menuItemSelected != 'Bookmarks',
            })} />
            <span className={clsx(`font-sans font-bold text-lg  `, {
              'text-primary-blue': menuItemSelected === 'Bookmarks',

              'text-black dark:text-white': type == 'normal' && menuItemSelected != 'Bookmarks',
              'text-white': type == 'dark' && menuItemSelected != 'Bookmarks',
            })} >
              Bookmarks
            </span>
          </div>
          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 dark:border-white`, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',

          })

          }>
            <ListChecks className={clsx(`text-lg   ml-2`, {
              'text-primary-blue': menuItemSelected === 'Lists',

              'text-black dark:text-white': type == 'normal' && menuItemSelected != 'Lists',
              'text-white': type == 'dark' && menuItemSelected != 'Lists',
            })} />
            <span className={clsx(`font-sans font-bold text-lg  `, {
              'text-primary-blue': menuItemSelected === 'Lists',

              'text-black dark:text-white': type == 'normal' && menuItemSelected != 'Lists',
              'text-white ': type == 'dark' && menuItemSelected != 'Lists',
            })} >
              Lists
            </span>
          </div>
          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 dark:border-white `, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',

          })

          }>
            <UserCircle className={clsx(`text-lg   ml-2`, {
              'text-primary-blue': menuItemSelected === 'Profile',

              'text-black dark:text-white': type == 'normal' && menuItemSelected != 'Profile',
              'text-white': type == 'dark' && menuItemSelected != 'Profile',
            })} />
            <span className={clsx(`font-sans font-bold text-lg  `, {
              'text-primary-blue': menuItemSelected === 'Profile',

              'text-black dark:text-white': type == 'normal' && menuItemSelected != 'Profile',
              'text-white': type == 'dark' && menuItemSelected != 'Profile',
            })} >
              Profile
            </span>
          </div>
          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 dark:border-white `, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',

          })

          }>
            <DotsThreeCircle className={clsx(`text-lg   ml-2`, {
              'text-primary-blue': menuItemSelected === 'More',

              'text-black dark:text-white': type == 'normal' && menuItemSelected != 'More',
              'text-white': type == 'dark' && menuItemSelected != 'More',
            })} />
            <span className={clsx(`font-sans font-bold text-lg  `, {
              'text-primary-blue': menuItemSelected === 'More',

              'text-black dark:text-white': type == 'normal' && menuItemSelected != 'More',
              'text-white': type == 'dark' && menuItemSelected != 'More',
            })} >
              More
            </span>
          </div>
        </div>
        <button className={
          clsx(
            'mt-2 font-sans font-bold rounded-full transition-all border-2 focus:ring-4 ring-dark-5 py-3 px-24 text-white   bg-primary-blue hover:text-primary-blue  hover:bg-transparent  border-primary-blue',
            {
            }
          )}>
          Tweet
        </button>
      </div>
      <div className="flex flex-row gap-2   ">

        <div className="flex flex-row gap-2 w-64  justify-between items-center">
          <div className="flex flex-row gap-2">
            <img className='h-10 w-10 rounded-full ml-2 bg-white text-sxs text-primary-blue border-0' src={image.src} alt={image.alt} />
            <div className="flex flex-col ">
              <span className={clsx(` text-md dark:text-white `, {
                'text-black': type == 'normal',
                'text-white': type == 'dark',

              })}>Davide Biscuso</span>
              <span className={clsx(` text-md dark:text-dark-6 `, {
                'text-dark-5': type == 'normal',
                'text-dark-6': type == 'dark',

              })}>@biscuttu</span>
            </div>
          </div>
          <DotsThreeOutline className={clsx(' transition-all w-12 h-4 hover:w-14 hover:h-6 cursor-pointer hover:text-primary-blue dark:text-white', {

            'text-black ': type == 'normal',
            'text-white': type == 'dark',
          })} />
        </div>

      </div>


    </div >


  )
}