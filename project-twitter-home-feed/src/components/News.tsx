import { clsx } from 'clsx';



import imageFile from '../static/news-image.jpg';
import imageFile02 from '../static/news-image-02.jpg';
import imageFile03 from '../static/news-image-03.jpg';



const image = {
  src: imageFile,
  alt: 'News image.',
  src02: imageFile02,
  src03: imageFile03,
};


export interface NewsProps {

  type?: 'dark' | 'normal';



}
export function News({ type = 'normal', }: NewsProps) {



  return (
    <div className={clsx('h-460px w-360px rounded-lg ', {

      'bg-white': type === 'normal',
      'bg-black': type === 'dark',
    })}>
      <h2 className={clsx('ml-4 font-sans font-bold text-xlg', {
        'text-black': type === 'normal',
        'text-white': type === 'dark',
      })}>What's happening</h2>

      <div className="h-96">
        <div className={clsx(' h-1/3 border-t flex flex-row p-2 items-center justify-around   cursor-pointer transition-all', {
          'border-black': type === 'normal',
          'border-white': type === 'dark',

          'hover:bg-dark-7': type === 'normal',
          'hover:bg-dark-4': type === 'dark',

        })}>
          <div className=" w-60">
            <span className={clsx('font-sans font-semibold text-xs', {
              'text-dark-5': type === 'normal',
              'text-dark-6': type === 'dark',
            })}>COVID <span>. Last night</span></span>
            <article className={clsx('font-sans font-bold text-sm', {
              'text-black': type === 'normal',
              'text-white': type === 'dark',
            })}>
              England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic
            </article>

            <span className={clsx('font-sans font-semibold text-xs ', {
              'text-dark-5': type === 'normal',
              'text-dark-6': type === 'dark',
            })}>Trending with <span className={clsx(' text-primary-blue', {
            })} >#covid19</span></span>
          </div>

          <img className={clsx('rounded-lg  w-16 h-16', {
          })} src={image.src} alt={image.alt} />

        </div>



        <div className={clsx('h-1/3 border-t flex flex-row p-2 items-center justify-around transition-all cursor-pointer', {
          'border-black': type === 'normal',
          'border-white': type === 'dark',

          'hover:bg-dark-7': type === 'normal',
          'hover:bg-dark-4': type === 'dark',

        })}>
          <div className=" w-60">
            <span className={clsx('font-sans font-semibold text-xs', {
              'text-dark-5': type === 'normal',
              'text-dark-6': type === 'dark',
            })}>India <span>. 6h ago</span></span>
            <article className={clsx('font-sans font-bold text-sm', {
              'text-black': type === 'normal',
              'text-white': type === 'dark',
            })}>
              India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test
            </article>

            <span className={clsx('font-sans font-semibold text-xs ', {
              'text-dark-5': type === 'normal',
              'text-dark-6': type === 'dark',
            })}>Trending with <span className={clsx(' text-primary-blue', {
            })} >#sport</span></span>
          </div>

          <img className={clsx('rounded-lg  w-16 h-16', {
          })} src={image.src03} alt={image.alt} />

        </div>

        <div className={clsx('h-1/3 border-t border-b flex flex-row p-2 items-center justify-around transition-all cursor-pointer', {
          'border-black': type === 'normal',
          'border-white': type === 'dark',

          'hover:bg-dark-7': type === 'normal',
          'hover:bg-dark-4': type === 'dark',


        })}>
          <div className=" w-60">
            <span className={clsx('font-sans font-semibold text-xs', {
              'text-dark-5': type === 'normal',
              'text-dark-6': type === 'dark',
            })}>US news <span>. 1h ago</span></span>
            <article className={clsx('font-sans font-bold text-sm', {
              'text-black': type === 'normal',
              'text-white': type === 'dark',
            })}>
              Parler may go offline following suspensions by Amazon, Apple and Google
            </article>

            <span className={clsx('font-sans font-semibold text-xs ', {
              'text-dark-5': type === 'normal',
              'text-dark-6': type === 'dark',
            })}>Trending with <span className={clsx(' text-primary-blue', {
            })} >#trump</span></span>
          </div>

          <img className={clsx('rounded-lg  w-16 h-16', {
          })} src={image.src02} alt={image.alt} />

        </div>
        <div className="flex items-center h-11  pl-2"><a className='ml-2  transition-all  font-sans text-sm font-semibold text-primary-blue hover:text-md' href="#">Show more</a></div>
      </div>

    </div >


  )
}