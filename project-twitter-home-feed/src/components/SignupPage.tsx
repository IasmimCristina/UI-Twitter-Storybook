import { clsx } from 'clsx';
import { TwitterLogo } from "phosphor-react";
import { FooterSignupPage } from './FooterSignupPage';







export interface SignupPageProps {

  type?: 'dark' | 'normal';



}
export function SignupPage({ type = 'normal' }: SignupPageProps) {

  return (
    <body className={clsx('w-full  ', {
      'bg-white': type === 'normal',
      'bg-black': type === 'dark',

    })}>

      <main className='h-screen '>

        <div></div>
        <section>
          <h1 className={clsx('text-enormous ', {
            'text-black': type === 'normal',
            'text-white': type === 'dark',
          })} >Happening now</h1>

          <h2 className={clsx('text-enormous ', {
            'text-black': type === 'normal',
            'text-white': type === 'dark',
          })}>Join Twitter today</h2>

          {/* Botões da
página. */}

          <div>
            <article>
              By singing up you agree to the <span>Terms of Service</span> and Privacy Policy, including <span>Cookie Use</span>.
            </article>
            <article>
              Already have an account? <span>Log in</span>
            </article>
          </div>
        </section>
      </main>


      <FooterSignupPage type={type} />


    </body >
  )
}