import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export interface HeadingProps {
  size?:  'sm' | 'md' | 'lg' ;
  children: ReactNode;
  isDark?: boolean; 
  asChild?: boolean;
}
export function Heading({ size = 'md', isDark = false,  children, asChild }: HeadingProps) {

  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp className={
      clsx(
        'font-sans font-bold',
        {
          

          // Variações dark e light
          'text-black': isDark === false ,
          'text-white': isDark === true ,

         


          //Variações do tamanho do título          
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
         


        }

      )}>
      {children}
    </Comp>
  )
}