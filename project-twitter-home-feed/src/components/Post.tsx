import { clsx } from 'clsx';
import { Image, Gif, ChartBarHorizontal, Smiley, CalendarCheck } from "phosphor-react";


export interface PostProps {

  type?: 'dark' | 'normal';

}
export function Post({ type = 'normal' }: PostProps) {

  return (
    <div className='flex w-2/5 h-28  items-center justify-between p-4' >
      <div className="flex flex-col ">
        <div className="flex flex-row items-center ">
          <div className=
            'rounded-full bg-white text-sxs text-primary-blue border-0 h-12 w-12'>
            <img src="" alt="User">
            </img>
          </div>
          <input type="text" placeholder='What´s happening?' maxLength={280} className={clsx('text-black ml-3 h-4 w-96 p-2 bg-transparent focus:ring-4 ring-dark-5 outline-none ', {
            'placeholder-dark-5': type === 'normal',
            'placeholder-dark-6': type === 'dark',

          })} />
        </div>
        <div className='flex gap-3 ml-16'>
          <Image className='transition-all cursor-pointer text-primary-blue h-5 w-5 hover:text-black'></Image>
          <Gif className='transition-all cursor-pointer text-primary-blue h-5 w-5 hover:text-black' ></Gif>
          <ChartBarHorizontal className='transition-all cursor-pointer text-primary-blue h-5 w-5 hover:text-black' ></ChartBarHorizontal>
          <Smiley className='transition-all cursor-pointer text-primary-blue h-5 w-5 hover:text-black' ></Smiley>
          <CalendarCheck className='transition-all cursor-pointer text-primary-blue h-5 w-5 hover:text-black' ></CalendarCheck>
        </div>
      </div>


      <div>
        <div></div>

        <button className='font-sans font-bold rounded-full transition-all border-2 focus:ring-4 ring-dark-5 py-2 px-6 text-white   bg-primary-blue hover:text-primary-blue  hover:bg-white  border-primary-blue mt-10 '>Tweet</button>
      </div>




    </div >
  )
}