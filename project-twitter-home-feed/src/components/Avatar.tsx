import { ImgHTMLAttributes} from 'react';
import { clsx } from 'clsx';

import imageFile from '../static/Profile.svg';

const image = {
  src: imageFile,
  alt: 'User',
};


export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {


  size?: 'small' | 'medium';
  asChild?: boolean;
  
}
export function Avatar({ size = 'small'  }: AvatarProps) {



  return (
    <> <div >
      <img className={
      clsx(
        'rounded-full bg-white text-sxs text-primary-blue border-0',
        {
          'h-10 w-10': size === 'small',
          'h-12 w-12': size === 'medium',


        }

      )} src={image.src} alt={image.alt}>

      </img>
    </div>

    </>

  )
}