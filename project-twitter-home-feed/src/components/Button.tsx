import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export interface ButtonProps {

  children: ReactNode;
  type?: 'primary' | 'follow' | 'login' | 'signup';
  size?: 'normal' | 'large';
  asChild?: boolean;
}
export function Button({ size = 'normal', type = 'primary', children, asChild }: ButtonProps) {

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={
      clsx(
        'font-sans font-bold rounded-full transition-all border-2 focus:ring-4 ring-dark-5',
        {
          'py-3 px-7': size === 'normal',

          'py-3 px-24': size === 'large',




          'text-white   bg-primary-blue hover:text-primary-blue  hover:bg-white  border-primary-blue': type === 'primary',

          'text-primary-blue   bg-white  border-primary-blue hover:text-white  hover:bg-primary-blue ': type === 'follow',

          'text-white   bg-primary-blue  border-white hover:text-black  hover:bg-white ': type === 'login',

          'text-black   bg-white  border-white hover:text-white  hover:bg-primary-blue ': type === 'signup',



        }

      )}>
      {children}
    </Comp>
  )
}