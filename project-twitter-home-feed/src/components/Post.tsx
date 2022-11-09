import { clsx } from 'clsx';
import { Image, Gif, ChartBarHorizontal, Smiley, CalendarCheck } from "phosphor-react";
import imageFile from '../static/Profile.svg';

const image = {
  src: imageFile,
  alt: 'User',
};


export interface PostProps {

  type?: 'dark' | 'normal';

}
export function Post({ type = 'normal' }: PostProps) {

  return (
    <div className='flex  h-28  items-center justify-between p-4' >
      <div className="flex flex-col ">
        <div className="flex flex-row items-center ">
         
            <img className=
            'rounded-full text-sxs text-primary-blue border-0 h-12 w-12' src={image.src} alt={image.alt}>
            </img>
         
          <input type="text" placeholder='What´s happening?' maxLength={350} className={clsx('transition-all text-xlg text-black ml-3 h-6  w-600px p-2 bg-transparent focus:border-b-2 border-dark-5 outline-none dark:placeholder-dark-6', {
            'placeholder-dark-5': type === 'normal',
            'placeholder-dark-6': type === 'dark',

          })} />
        </div>
        <div className='flex gap-3 ml-16'>
          <Image className='transition-all cursor-pointer text-primary-blue h-5 w-5 hover:text-dark-4'></Image>
          <Gif className='transition-all cursor-pointer text-primary-blue h-5 w-5 hover:text-dark-4' ></Gif>
          <ChartBarHorizontal className='transition-all cursor-pointer text-primary-blue h-5 w-5 hover:text-dark-4' ></ChartBarHorizontal>
          <Smiley className='transition-all cursor-pointer text-primary-blue h-5 w-5 hover:text-dark-4' ></Smiley>
          <CalendarCheck className='transition-all cursor-pointer text-primary-blue h-5 w-5 hover:text-dark-4' ></CalendarCheck>
        </div>
      </div>

      <div>     

        <button className='font-sans font-bold rounded-full transition-all border-2 focus:ring-4 ring-dark-5 py-2 px-6 text-white   bg-primary-blue hover:text-primary-blue  hover:bg-transparent  border-primary-blue mt-10 '>Tweet</button>
      </div>


    </div >
  )
}