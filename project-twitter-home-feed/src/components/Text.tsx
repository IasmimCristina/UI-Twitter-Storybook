import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export interface Textprops {
  size?: 'sxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
  children: ReactNode;
  isDark?: boolean;
  isPrimary?: boolean;
  asChild?: boolean;
}
export function Text({ size = 'md', isDark = false, isPrimary = true, children, asChild }: Textprops) {

  const Comp = asChild ? Slot : 'span';

  return (
    <Comp className={
      clsx(
        'font-sans',
        {
          //Fazer a condição do texto nublado. 48min.

          // Variações dark e light
          'text-black': isDark === false && isPrimary,
          'text-white': isDark === true && isPrimary,

          'text-dark-5': isDark === false && isPrimary === false,
          'text-dark-6': isDark === true && isPrimary === false,


          //Variações do tamanho do texto
          'text-sxs': size === 'sxs',
          'text-xs': size === 'xs',
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
          'text-xlg': size === 'xlg',



        }

      )}>
      {children}
    </Comp>
  )
}