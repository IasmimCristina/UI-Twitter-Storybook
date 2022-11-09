import { clsx } from 'clsx';
import { TwitterLogo } from "phosphor-react";
import { FooterSignupPage } from './FooterSignupPage';
import { SignupButtons } from './SignupButtons';

import background from '../static/back-twitter2.svg';

// const styleImage = {
//   backgroundImage: "url(" + Background + ")",
// }


export interface SignupPageProps {

  type?: 'dark' | 'normal';



}
export function SignupPage({ type = 'normal' }: SignupPageProps) {


  return (
    <body className={clsx('w-full  ', {
      'bg-white': type === 'normal',
      'bg-black': type === 'dark',

    })}>

      <main className='h-screen flex items-center '>

        <div style={{ backgroundImage: `url(${background})` }} className='h-screen bg-no-repeat w-1/2' > </div>
        <section className='ml-9' >

          <TwitterLogo weight="fill" className={clsx('w-12 h-10 cursor-pointer hover:text-dark-4 transition-all mb-14', {
            'text-primary-blue': type === 'normal',
            'text-white': type === 'dark',
          })} />

          <section className='h-48 flex flex-col justify-between mb-8'>
            <h1 className={clsx('text-enormous font-900 ', {
              'text-black': type === 'normal',
              'text-white': type === 'dark',
            })} >Happening now</h1>
            <h2 className={clsx('text-sxlg font-900 ', {
              'text-black': type === 'normal',
              'text-white': type === 'dark',
            })}>Join Twitter today</h2>
          </section>

          {/* Botões da página. */}
          <div className="flex flex-col gap-4 ml-4">
            <SignupButtons type={type} buttonType='Google' />
            <SignupButtons type={type} buttonType='Apple' />
            <SignupButtons type={type} buttonType='PhoneEmail' />
          </div>

          <div className='h-20 flex flex-col justify-between mt-6'>
            <article className={clsx('font-sans font-400 text-xs w-96 ', {
              'text-black': type === 'normal',
              'text-white': type === 'dark',
            })}>
              By singing up you agree to the <span className='font-sans font-400 text-xs text-primary-blue transition-all hover:text-dark-6 cursor-pointer'>Terms of Service</span> and <span className='font-sans font-400 text-xs text-primary-blue transition-all hover:text-dark-6 cursor-pointer'>Privacy Policy</span>, including <span className='font-sans font-400 text-xs text-primary-blue transition-all hover:text-dark-6 cursor-pointer'>Cookie Use</span>.
            </article>

            <article className={clsx('font-sans font-400 text-xs', {
              'text-black': type === 'normal',
              'text-white': type === 'dark',
            })}>
              Already have an account? <a href='login.html' className='font-sans font-400 text-xs text-primary-blue transition-all hover:text-dark-6 cursor-pointer'>Log in</a>
            </article>
          </div>
        </section>
      </main>


      <FooterSignupPage type={type} />


    </body >
  )
}