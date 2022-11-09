import { ReactNode, useState } from 'react';
import { clsx } from 'clsx';
import { Sparkle, ArrowLeft } from "phosphor-react";


export interface HeaderProps {

  type?: 'dark' | 'normal';
  page?: 'Home' | 'Profile';
  

}
export function Header({ type = 'normal', page = 'Home' }: HeaderProps) {
  let profileContent;
  if (page === 'Profile') {
    profileContent = {
      content: <span className={clsx('text-sxs inline-block leading-3', {
        'text-dark-5': type === 'normal',
        'text-dark-6': type === 'dark',

      })} > 9 tweets </span>,
      name: 'Name',
      icon: <div className=" w-9 h-8">
        <ArrowLeft weight="bold" className={clsx('text-primary-blue w-8 h-7 cursor-pointer transition-all hover:w-9 hover:h-8  ', {
          'hover:text-black ': type === 'normal',
          'hover:text-white ': type === 'dark',
        })} />
      </div>,
    };
  } else {
    profileContent = {
      content: "",
      name: 'Home',
      icon: '',
    };
  }
 


  return (
    <header className='h-4  p-2' >
      <div className="flex justify-between items-center">

        <div className=" flex  items-center ">
          {profileContent.icon}
          <div className={clsx('', {
            'ml-10': page === 'Profile'
          })}>
            <h1 className={clsx('font-bold text-lg leading-5 ', {
              'text-black': type === 'normal',
              'text-white': type === 'dark',

            })}>{profileContent.name}</h1>
            {profileContent.content}
          </div>
        </div>

        <div  className={clsx(' cursor-pointer h-8 text-primary-blue  flex  content-center', {

        })}>
          <Sparkle className={clsx('transition-all h-8 w-6  hover:h-9 hover:w-7', {

            'hover:text-black ': type === 'normal',
            'hover:text-white ': type === 'dark',

          })} />
        </div>
      </div>
      <hr className={clsx('mt-1', {

        'text-dark-7': type === 'normal',

        'text-dark-4': type === 'dark',


      })} />

    </header >
  )
}