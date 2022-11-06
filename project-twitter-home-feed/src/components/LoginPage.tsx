import { clsx } from 'clsx';
import { TwitterLogo } from "phosphor-react";







export interface LoginPageProps {

  type?: 'dark' | 'normal';



}
export function LoginPage({ type = 'normal' }: LoginPageProps) {

  return (
    <div className={clsx('w-full h-screen flex items-center justify-center ', {
      'bg-white': type === 'normal',
      'bg-black': type === 'dark',

    })}>

      <section className=' w-450px h-476px  ' >
        <TwitterLogo weight="fill" className={clsx('w-12 h-10 cursor-pointer hover:text-dark-4 transition-all', {
          'text-primary-blue': type === 'normal',
          'text-white': type === 'dark',
        })} />

        <h1 className={clsx('font-sans text-sxlg font-900 ', {
          'text-black': type === 'normal',
          'text-white': type === 'dark',
        })}  >Log In to Twitter</h1>

        <div className="flex flex-col h-44 justify-between ">
          <input className={clsx('h-20 p-4 border border-dark-6 outline-none focus:ring-2 focus:bg-dark-8 ring-primary-blue rounded', {

          })} placeholder='Phone number, email address' type="email" required />

          <input className={clsx('h-20 p-4 border border-dark-6 outline-none focus:ring-2 focus:bg-dark-8 ring-primary-blue rounded', {

          })} placeholder='Password' type="password" required />

        </div>

        <button className={clsx(' mt-4 text-size18 font-sans font-bold rounded-full transition-all border focus:ring-4 ring-dark-5 h-16 w-full text-white  border-primary-blue     bg-primary-blue hover:text-primary-blue  hover:bg-transparent  ', {
          
        })}>Log In</button>

<div className='flex justify-between  h-14 items-center  px-3 mt-6 text-primary-blue text-size18 ' >
  <span className={' font-400 transition-all cursor-pointer hover:text-xlg'} >Forgot password?</span>
  <span className={' font-400 transition-all cursor-pointer hover:text-xlg'} >Sign up to Twitter</span>

</div>
      </section>



    </div >
  )
}