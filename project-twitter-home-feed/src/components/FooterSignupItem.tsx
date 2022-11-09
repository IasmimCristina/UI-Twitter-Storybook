import { clsx } from 'clsx';



export interface FooterSignupItemProps {

  type?: 'dark' | 'normal';

  itemText?: string;


}
export function FooterSignupItem({ type = 'normal', itemText = "About" }: FooterSignupItemProps) {

  return (

 
      <li className={clsx('font-sans font-400  text-sxs list-none mr-5   cursor-pointer transition-all hover:text-primary-blue dark:text-white ', {
        'text-black': type == 'normal',
        'text-white': type == 'dark',
      })}  >
        {itemText}
      </li>
      
   

  )
}