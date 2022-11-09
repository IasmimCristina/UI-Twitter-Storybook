import { clsx } from 'clsx';
import { ChatCircle, Heart, Share, Export } from "phosphor-react";

import imageFile from '../static/tweet-image.jpg';
import imageProfile from '../static/Profile.svg';


const images = {
  post: imageFile,
  profile: imageProfile,
};



export interface TweetProps {

  type?: 'dark' | 'normal';
  textPost: string;


}
export function Tweet({ type = 'normal', textPost = "Wait, no. Hold on I need at least a few minutes!", }: TweetProps) {

  return (
    <div className=' p-4  border-b-dark-7 border-b '>
      <div className="flex flex-row gap-5">
        <img className=
          'rounded-full bg-white text-sxs text-primary-blue border-0 h-12 w-12' src={images.profile} alt="User">
        </img>
        <div className="flex flex-col    h-12">
          <div className='flex flex-row gap-2'>
            <span className={clsx(' font-sans font-bold text-sm ', {
              'text-black': type == 'normal',
              'text-white': type == 'dark',


            })}>Devon Lane</span>
            <span className={clsx('font-sans text-sm font-semibold', {
              'text-dark-5': type == 'normal',
              'text-dark-6': type == 'dark',
            })}> @marcelocelosalomao <span > . 29s</span> </span>
          </div>
          <span className={clsx('font-sans font-semibold text-sm', {
            'text-black': type == 'normal',
            'text-white': type == 'dark',
          })}> {textPost} </span>
        </div>


      </div>

      <div className="ml-16 mt-2 ">
        <img className=' w-full rounded-lg mb-3' src={images.post} alt="Random example of an astrounaut floating." />
        <div className='flex flex-row gap-20 h-6'>

          <div className=" flex flex-row gap-3 items-center">
            <ChatCircle className={clsx('cursor-pointer h-4 w-4  transition-all hover:text-primary-blue hover:h-5 hover:w-5', {
              'text-dark-5': type == 'normal',
              'text-dark-6': type == 'dark',
            })} />
            <span className={clsx('font-sans font-semibold text-sxs', {

              'text-dark-5': type == 'normal',
              'text-dark-6': type == 'dark',

            })}>75</span>
          </div>
          <div className=" flex flex-row gap-3 items-center">
            <Share className={clsx('cursor-pointer h-4 w-4  transition-all hover:text-primary-blue hover:h-5 hover:w-5', {
              'text-dark-5': type == 'normal',
              'text-dark-6': type == 'dark',
            })} />
            <span className={clsx('font-sans font-semibold text-sxs', {

              'text-dark-5': type == 'normal',
              'text-dark-6': type == 'dark',

            })}>196</span>
          </div>
          <div className={clsx('flex flex-row gap-3 items-center ', {


          })}>
            <Heart className={clsx('cursor-pointer h-4 w-4  transition-all hover:text-red hover:h-5 hover:w-5  active:text-red focus:text-red', {
              'text-dark-5': type == 'normal',
              'text-dark-6': type == 'dark',
            })} />
            <span className={clsx('font-sans font-semibold text-sxs', {

              'text-dark-5': type == 'normal',
              'text-dark-6': type == 'dark',

            })}>25.5k</span>
          </div>
          <div className=" flex flex-row gap-3 items-center">
            <Export className={clsx('cursor-pointer h-4 w-4  transition-all hover:text-primary-blue hover:h-5 hover:w-5', {
              'text-dark-5': type == 'normal',
              'text-dark-6': type == 'dark',
            })} />
            <span className={clsx('font-sans font-semibold text-sxs', {

              'text-dark-5': type == 'normal',
              'text-dark-6': type == 'dark',

            })}>5.2k</span>
          </div>

        </div>
      </div>
      <span className={clsx('ml-16  transition-all cursor-pointer hover:text-xs font-sans text-primary-blue text-sxs font-semibold', {

      })}>Show this thread</span>

    </div >
  )
}