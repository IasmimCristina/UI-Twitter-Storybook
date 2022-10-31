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



  return (
    <div className='p-4 h-screen  w-1/3 flex flex-col  justify-between'>
      <div className="ml-10">
        <div className="ml-2">
          <TwitterLogo weight="fill" className={clsx(' h-7 w-6', {
            'text-primary-blue': type == 'normal',
            'text-white': type == 'dark',
          })} />
          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 border-primary-blue`, {

          })

          }>
            <House className='text-primary-blue text-lg ml-2 ' />
            <a className={`font-sans font-bold text-lg text-primary-blue `} href="#">
              Home
            </a>
          </div>
          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',

          })

          }>
            <HashStraight className={clsx(`text-lg   ml-2 `, {
              'text-black': type == 'normal',
              'text-white': type == 'dark',
            })} />
            <a className={clsx(`font-sans font-bold text-lg  `, {
              'text-black': type == 'normal',
              'text-white': type == 'dark',
            })} href="#">
              Explore
            </a>
          </div>
          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',

          })

          }>
            <Bell className={clsx(`text-lg  ml-2 `, {
              'text-black': type == 'normal',
              'text-white': type == 'dark',
            })} />
            <a className={clsx(`font-sans font-bold text-lg  `, {
              'text-black': type == 'normal',
              'text-white': type == 'dark',
            })} href="#">
              Notifications
            </a>
          </div>
          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',

          })

          }>
            <EnvelopeSimple className={clsx(`text-lg   ml-2`, {
              'text-black': type == 'normal',
              'text-white': type == 'dark',
            })} />
            <a className={clsx(`font-sans font-bold text-lg  `, {
              'text-black': type == 'normal',
              'text-white': type == 'dark',
            })} href="#">
              Messages
            </a>
          </div>
          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',

          })

          }>
            <BookmarkSimple className={clsx(`text-lg   ml-2`, {
              'text-black': type == 'normal',
              'text-white': type == 'dark',
            })} />
            <a className={clsx(`font-sans font-bold text-lg  `, {
              'text-black': type == 'normal',
              'text-white': type == 'dark',
            })} href="#">
              Bookmarks
            </a>
          </div>
          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',

          })

          }>
            <ListChecks className={clsx(`text-lg   ml-2`, {
              'text-black': type == 'normal',
              'text-white': type == 'dark',
            })} />
            <a className={clsx(`font-sans font-bold text-lg  `, {
              'text-black': type == 'normal',
              'text-white': type == 'dark',
            })} href="#">
              Lists
            </a>
          </div>
          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',

          })

          }>
            <UserCircle className={clsx(`text-lg   ml-2`, {
              'text-black': type == 'normal',
              'text-white': type == 'dark',
            })} />
            <a className={clsx(`font-sans font-bold text-lg  `, {
              'text-black': type == 'normal',
              'text-white': type == 'dark',
            })} href="#">
              Profile
            </a>
          </div>
          <div className={clsx(`flex justify-start  gap-4 h-16 w-64  items-center cursor-pointer transition-all hover:border-box hover:border-2 `, {
            'border-primary-blue': type == 'normal',
            'border-white': type == 'dark',

          })

          }>
            <DotsThreeCircle className={clsx(`text-lg   ml-2`, {
              'text-black': type == 'normal',
              'text-white': type == 'dark',
            })} />
            <a className={clsx(`font-sans font-bold text-lg  `, {
              'text-black': type == 'normal',
              'text-white': type == 'dark',
            })} href="#">
              More
            </a>
          </div>
        </div>
        <button className={
          clsx(
            'mt-2 font-sans font-bold rounded-full transition-all border-2 focus:ring-4 ring-dark-5 py-3 px-24 text-white   bg-primary-blue hover:text-primary-blue  hover:bg-white  border-primary-blue',
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
              <span className={clsx(` text-md  `, {
                'text-black': type == 'normal',
                'text-white': type == 'dark',

              })}>Davide Biscuso</span>
              <span className={clsx(` text-md  `, {
                'text-dark-5': type == 'normal',
                'text-dark-6': type == 'dark',

              })}>@biscuttu</span>
            </div>
          </div>
          <DotsThreeOutline className={clsx(' transition-all w-12 h-4 hover:w-14 hover:h-6 cursor-pointer hover:text-primary-blue', {

            'text-black': type == 'normal',
            'text-white': type == 'dark',
          })} />
        </div>

      </div>


    </div >


  )
}