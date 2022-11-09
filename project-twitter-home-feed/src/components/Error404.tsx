import { clsx } from 'clsx';
import { TwitterLogo, CircleWavyWarning, LinkBreak, User, Bird } from "phosphor-react";
import { Link } from 'react-router-dom';
import { Footer } from './Footer';







export interface Error404Props {

  type?: 'dark' | 'normal';



}
export function Error404({ type = 'normal' }: Error404Props) {


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
    <div className={clsx('w-full h-screen dark:bg-black   ', {
      'bg-white': type === 'normal',
      'bg-black': type === 'dark',

    })}>

      <section className=' w-full h-full  ' >
        <div className={clsx("h-1/2  flex flex-col items-center justify-center gap-4 border-b-2 dark:border-white dark:bg-primary-blue ", {
          'bg-dark-8': type === 'normal',
          'border-white bg-primary-blue': type === 'dark',

        })} >


          <div className=" flex flex-col items-center justify-center">
            <Bird  onClick={toggleClicked} weight="fill" className={clsx('w-36 h-36 cursor-pointer hover:text-dark-4 dark:hover:text-dark-4  transition-all dark:text-white ', {
              'text-primary-blue': type === 'normal',
              'text-white': type === 'dark',
            })} />
            <span className={clsx('font-sans text-sxlg font-900 flex items-center gap-2 dark:text-white', {
              'text-black': type === 'normal',
              'text-white': type === 'dark',
            })}  > <CircleWavyWarning />  404 <CircleWavyWarning /> </span>
          </div>

          <h1 className={clsx('font-sans text-sxlg font-900 flex items-center gap-2 dark:text-white', {
            'text-black': type === 'normal',
            'text-white': type === 'dark',
          })}  >  Page not found...  </h1>

        </div>


        <div className="flex justify-center items-center flex-col">
          <Link to={"/home"}>
            <button className={clsx(' w-476px  mt-16 text-size18 font-sans font-bold rounded-full transition-all border focus:ring-4 ring-dark-5 h-16  text-white  border-primary-blue     bg-primary-blue hover:text-primary-blue  hover:bg-transparent  ', {
            })}>Go back to Home</button>
          </Link>


          <div className='  w-600px flex justify-between  h-14 items-center  px-3 mt-6 text-primary-blue text-size18 ' >
            <span className={'flex  gap-2  items-center font-400 transition-all cursor-pointer hover:text-xlg '} > <User /> Go to Profile Page?</span>


            <div >

              <span className={'flex  items-center font-400   gap-2 transition-all cursor-pointer hover:text-xlg hover:text-red'} > <LinkBreak />  Go to Log In Page?  </span>
            </div>

          </div>
        </div>



      </section>




    </div >
  )
}