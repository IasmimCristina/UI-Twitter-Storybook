import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Sparkle } from "phosphor-react";


export interface HeaderProps {

  type?: 'dark' | 'normal';

}
export function Header({ type = 'normal' }: HeaderProps) {

  return (
    <div className='h-4 w-1/3 p-2' >
      <div className="flex justify-between">
        <h1 className={clsx('font-bold text-lg', {
            'text-white': type === 'dark',

            'text-black': type === 'normal',
        })}>Home</h1>

        <div className={clsx(' cursor-pointer h-8 text-primary-blue  flex  content-center', {

        })}>
          <Sparkle className={clsx('transition-all h-8 w-6  hover:h-9 hover:w-7', {

            'hover:text-black ': type === 'normal',
            'hover:text-white ': type === 'dark',

          })} />
        </div>
      </div>
      <hr className={clsx('mt-1', {

        'text-white': type === 'normal',

        'text-black': type === 'dark',


      })} />

    </div >
  )
}