import { clsx } from 'clsx';
import { MapPin, CalendarPlus } from "phosphor-react";

import imageWalllpaper from '../static/profileWallpaper.svg';
import imageProfile from '../static/Profile.svg';


const images = {
  wallpaper: imageWalllpaper,
  profile: imageProfile,
};



export interface ProfileAreaProps {

  type?: 'dark' | 'normal';
  description?: string;


}
export function ProfileArea({ type = 'normal', description = '💀Writer✨✨ || Singer🤎🤎 || Psychologist' }: ProfileAreaProps) {

  return (
    <div className='w-full '>

      <div className='relative  '  >
        <img className=' w-full    ' src={images.wallpaper} alt="Wallpaper example." />
        <img className='h-44 w-44 rounded-full  text-sxs border-4  absolute bottom-2 top-36 left-3' src={images.profile} alt="User" />
      </div>
      <div className="flex  justify-end">
        <button className='text-sm font-sans font-bold rounded-full transition-all border-2 focus:ring-4 ring-dark-5 text-primary-blue  w-32 h-10  border-primary-blue hover:text-white  hover:bg-primary-blue mt-3 mr-6' >Edit Profile</button>
      </div>

      <div className='flex flex-col  ml-5'  >
        <div className="flex flex-col">
          <span className={clsx('text-xlg font-bold dark:text-white', {
            'text-black': type == 'normal',
            'text-white': type == 'dark',
          })} >Davide Biscuso</span>
          <span className={clsx('text-md font-semibold dark:text-dark-6', {
            'text-dark-5': type == 'normal',
            'text-dark-6': type == 'dark',
          })}>@biscuttu</span>
        </div>
        <article className={clsx('mt-3 text-md font-semibold dark:text-white', {
          'text-black': type == 'normal',
          'text-white': type == 'dark',

        })} > {description} </article>

        <div>
          <div className='mt-3 flex flex-row gap-4'>


            <div className="flex items-center gap-2">
              <MapPin className={clsx('w-4 h-4 dark:text-dark-6', {
                'text-dark-5': type == 'normal',
                'text-dark-6': type == 'dark',
              })} />
              <span className={clsx('  font-sans font-semibold text-md dark:text-dark-6', {
                'text-dark-5': type == 'normal',
                'text-dark-6': type == 'dark',
              })}>
                London
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarPlus className={clsx('w-5 h-5 dark:text-dark-6', {
                'text-dark-5': type == 'normal',
                'text-dark-6': type == 'dark',
              })} />
              <span className={clsx('font-sans font-semibold text-md dark:text-dark-6', {
                'text-dark-5': type == 'normal',
                'text-dark-6': type == 'dark',
              })}>
                Joined April 2003
              </span>
            </div>
          </div>
          <div className='flex gap-4 '>
            <span className={clsx('font-semibold text-md dark:text-dark-6', {
              'text-dark-5': type == 'normal',
              'text-dark-6': type == 'dark',
            })}>
              <span className={clsx('font-bold mr-1 dark:text-white', {
                'text-black': type == 'normal',
                'text-white': type == 'dark',
              })}>542</span> Following
            </span>
            <span className={clsx('font-semibold text-md dark:text-dark-6', {
              'text-dark-5': type == 'normal',
              'text-dark-6': type == 'dark',
            })}>
              <span className={clsx('font-bold mr-1 dark:text-white', {
                'text-black': type == 'normal',
                'text-white': type == 'dark',
              })}>45</span> Followers
            </span>
          </div>
        </div>
      </div>


    </div >
  )
}