import { clsx } from 'clsx';
import { MagnifyingGlass } from "phosphor-react";


export interface SearchBarProps {

  type?: 'dark' | 'normal';

}
export function SearchBar({ type = 'normal' }: SearchBarProps) {

  return (
    <div className={clsx(' flex gap-4 items-center w-full  h-10 rounded-full cursor-pointer  focus-within:ring-4 ring-dark-5  p-2 dark:bg-dark-3', {

      'bg-dark-7': type === 'normal',
      'bg-dark-3': type === 'dark',

    })} >
      <MagnifyingGlass className={clsx('h-5 w-5 text-bold dark:text-dark-6', {
        'text-dark-5': type === 'normal',
        'text-dark-6': type === 'dark',

      })} />
      <input type="text" placeholder='Search Twitter' className={clsx('bg-transparent outline-none w-60 text-md  dark:placeholder-dark-6', {

        'placeholder-dark-5': type === 'normal',
        'placeholder-dark-6': type === 'dark',
      })} />
    </div >
  )
}