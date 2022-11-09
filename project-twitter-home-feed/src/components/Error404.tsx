import { clsx } from 'clsx';
import { TwitterLogo, CircleWavyWarning, LinkBreak, User, Bird } from "phosphor-react";
import { Footer } from './Footer';







export interface Error404Props {

  type?: 'dark' | 'normal';



}
export function Error404({ type = 'normal' }: Error404Props) {

  return (
    <div className={clsx('w-full h-screen dark:bg-black   ', {
      'bg-white': type === 'normal',
      'bg-black': type === 'dark',

    })}>

      <section className=' w-full h-full  ' >
        <div className={clsx("h-1/2 bg-primary-blue flex flex-col items-center justify-center gap-4", {
          'bg-dark-8': type === 'normal',
          'border-b-2 ': type === 'normal',
          'border-b-2 border-white': type === 'dark',
          'bg-primary-blue': type === 'dark',
        })} >


          <div className=" flex flex-col items-center justify-center">
            <Bird weight="fill" className={clsx('w-36 h-36 cursor-pointer hover:text-dark-4 transition-all', {
              'text-primary-blue': type === 'normal',
              'text-white': type === 'dark',
            })} />
            <span className={clsx('font-sans text-sxlg font-900 flex items-center gap-2', {
              'text-black': type === 'normal',
              'text-white': type === 'dark',
            })}  > <CircleWavyWarning />  404 <CircleWavyWarning /> </span>
          </div>

          <h1 className={clsx('font-sans text-sxlg font-900 flex items-center gap-2', {
            'text-black': type === 'normal',
            'text-white': type === 'dark',
          })}  >  Page not found...  </h1>

        </div>


        <div className="flex justify-center items-center flex-col">
          <button className={clsx(' w-476px  mt-16 text-size18 font-sans font-bold rounded-full transition-all border focus:ring-4 ring-dark-5 h-16  text-white  border-primary-blue     bg-primary-blue hover:text-primary-blue  hover:bg-transparent  ', {
          })}>Go back to Home</button>


          <div className='  w-600px flex justify-between  h-14 items-center  px-3 mt-6 text-primary-blue text-size18 ' >
            <span className={'flex  gap-2  items-center font-400 transition-all cursor-pointer hover:text-xlg '} > <User /> Go to profile page?</span>


            <div className="">

              <span className={'flex  items-center font-400   gap-2 transition-all cursor-pointer hover:text-xlg hover:text-red'} > <LinkBreak />  Log out?  </span>
            </div>

          </div>
        </div>


       
      </section>

     

     
    </div >
  )
}