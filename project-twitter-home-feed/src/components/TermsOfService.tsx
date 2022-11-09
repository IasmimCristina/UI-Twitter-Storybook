import { clsx } from 'clsx';



export interface TermsOfServiceProps {

  type?: 'dark' | 'normal';



}
export function TermsOfService({ type = 'normal' }: TermsOfServiceProps) {

  return (

    <span className={clsx('text-sxs h-9   leading-4   pr-16 font-semibold ', {
      'text-dark-5': type === 'normal',
      'text-dark-6': type === 'dark',

    })}>Terms of Service Privacy Policy Cookie Policy
      Ads info More © 2021 Twitter, Inc.</span>
  )
}