import { ImgHTMLAttributes, ReactNode } from 'react';


import { clsx } from 'clsx';



export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {


  size?: 'small' | 'medium';
  asChild?: boolean;
  
}
export function Avatar({ size = 'small'  }: AvatarProps) {



  return (
    <> <div className={
      clsx(
        'rounded-full bg-white text-sxs text-primary-blue border-0',
        {
          'h-10 w-10': size === 'small',
          'h-12 w-12': size === 'medium',


        }

      )}>
      <img  src="" alt="User">

      </img>
    </div>

    </>

  )
}