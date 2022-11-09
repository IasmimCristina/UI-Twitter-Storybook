import { clsx } from 'clsx';



import imageFile from '../static/Profile.svg';
import imageFile02 from '../static/Profile02.jpg';




const image = {
  src: imageFile,
  alt: 'User',
  src02: imageFile02,

};


export interface FollowProps {

  type?: 'dark' | 'normal';



}
export function Follow({ type = 'normal', }: FollowProps) {



  return (
    <div className={clsx('h-60 w-360px rounded-lg ', {

      'bg-dark-8': type === 'normal',
      'bg-dark-2': type === 'dark',
    })}>
      <h2 className={clsx('ml-4 font-sans font-bold text-xlg', {
        'text-black': type === 'normal',
        'text-white': type === 'dark',
      })}>Who to follow</h2>

      <div className="h-40">
        <div className={clsx(' h-1/2 border-t  flex flex-row p-2 items-center justify-around   cursor-pointer transition-all', {
          'hover:bg-dark-7 border-dark-7': type === 'normal',
          'hover:bg-dark-4 border-dark-4': type === 'dark',

        })}>

          <div className="flex flex-row justify-between content-between w-full items-center  ">
            <div className="flex gap-3 ">
              <img className='h-10 w-10 rounded-full ml-2 bg-white text-sxs text-primary-blue border-0' src={image.src} alt={image.alt} />
              <div className="flex flex-col">
                <span className={clsx(` text-md  `, {
                  'text-black': type === 'normal',
                  'text-white': type === 'dark',
                })}>Davide Biscuso</span>
                <span className={clsx(` text-md  `, {
                  'text-dark-5': type === 'normal',
                  'text-dark-6': type === 'dark',
                })}>@biscuttu</span>
              </div>
            </div>
            <button className=
              'font-sans font-bold rounded-full transition-all border focus:ring-4 ring-dark-5  h-8  w-20 text-sm text-primary-blue    bg-transparent   border-primary-blue hover:text-white  hover:bg-primary-blue'>
              Follow
            </button>




          </div>


        </div>


        <div className={clsx(' h-1/2 border-t border-b flex flex-row p-2 items-center justify-around   cursor-pointer transition-all', {
          'hover:bg-dark-7 border-dark-7': type === 'normal',
          'hover:bg-dark-4 border-dark-4': type === 'dark',

        })}>

          <div className="flex flex-row justify-between content-between w-full  items-center  ">
            <div className="flex gap-3 ">
              <img className='h-10 w-10 rounded-full ml-2 bg-white text-sxs text-primary-blue border-0' src={image.src} alt={image.alt} />
              <div className="flex flex-col">
                <span className={clsx(` text-md  `, {
                  'text-black': type === 'normal',
                  'text-white': type === 'dark',
                })}>Davide Biscuso</span>
                <span className={clsx(` text-md  `, {
                  'text-dark-5': type === 'normal',
                  'text-dark-6': type === 'dark',
                })}>@biscuttu</span>
              </div>
            </div>
            <button className=
                'font-sans font-bold rounded-full transition-all border focus:ring-4 ring-dark-5 h-8   w-20 text-sm text-primary-blue   bg-transparent  border-primary-blue hover:text-white  hover:bg-primary-blue '>
              Follow
            </button>




          </div>


        </div>



        <div className="flex items-center h-11  pl-2"><a className='ml-2  transition-all  font-sans text-sm font-semibold text-primary-blue hover:text-md' href="#">Show more</a></div>
      </div>

    </div >


  )
}