import { clsx } from 'clsx';
import { TwitterLogo, CircleWavyWarning, LinkBreak, User, Bird } from "phosphor-react";






export interface LoginPopUpProps {

  type?: 'dark' | 'normal';



}
export function LoginPopUp({ type = 'normal' }: LoginPopUpProps) {

  //Variáveis do theme
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  //Checagem inicial
  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark")
      return;
    }

  }

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "normal")
      return;
    }
    document.documentElement.classList.add('dark')
    localStorage.setItem("theme", "dark")


  }

  const toggleClicked = () => {
    themeSwitch();
  }

  //Invocando a checagem do tema.
  themeCheck();

  return (


    <div className={clsx(' w-450px h-476px  dark:bg-dark-3 rounded-xl border-4 border-primary-blue', {
      'bg-dark-7': type === 'normal',
      'bg-dark-3': type === 'dark',
    })} >
      <div className=" modal-header flex flex-col items-center gap-4">
        <TwitterLogo onClick={toggleClicked} weight="fill" className={clsx('w-20 h-20  cursor-pointer hover:text-dark-4 transition-all dark:text-white', {
          'text-primary-blue': type === 'normal',
          'text-white': type === 'dark',
        })} />
        <h1 className={clsx('font-sans text-sxlg font-900 dark:text-white', {
          'text-black': type === 'normal',
          'text-white': type === 'dark',
        })}  >Not logged in yet!</h1>
      </div>

      <div className="modal-main flex items-center justify-center h-28  p-8 mt-10 ">
        <p className={clsx('font-sans text-xlg font-900 text-primary-blue text-center ', {

        })} >
          It seems you're not logged in. But, don't worry! You can easily do it in the next page. Do you wish to log in? Or will you keep browsing?
        </p>

      </div>






      <div className='flex justify-between  h-14 items-center  px-5 mt-16 text-primary-blue text-size18 ' >
        <span className={clsx('flex rounded-full border-2  p-2 gap-2  items-center font-400 transition-all cursor-pointer text-md hover:text-lg dark:bg-black ', {
          'bg-white': type === 'normal',
          'bg-black': type === 'dark',
        })} > <User /> Go to Log In page?</span>

        <span className={'flex rounded-full p-2 bg-dark-1 items-center font-400 text-md  gap-2 transition-all cursor-pointer hover:text-lg hover:text-red'} > <LinkBreak />  Keep browsing...  </span>

      </div>
    </div>




  )
}