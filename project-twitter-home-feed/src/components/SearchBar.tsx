import { clsx } from 'clsx';
import { MagnifyingGlass } from "phosphor-react";


export interface SearchBarProps {

  type?: 'dark' | 'normal';

}
export function SearchBar({ type = 'normal' }: SearchBarProps) {

  return (
    <div className={clsx(' flex w-80 h-10 rounded-full cursor-pointer focus-within:right-4 focus:ring-4 ring-dark-5 p-2', {

      'bg-white': type === 'normal',
      'bg-black': type === 'dark',

    })} >
      <MagnifyingGlass className={clsx('h-4 w-4', {

      })} />
      <input type="text" className='bg-black' />
    </div >
  )
}