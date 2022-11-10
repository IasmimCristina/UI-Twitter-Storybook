import clsx from "clsx"
import { Link } from "react-router-dom";




export interface FooterProps {

  type?: 'normal' | 'dark';

}
export function Footer({ type = 'normal' }: FooterProps) {



  return (
    <footer className=' w-full h-28 bg-primary-blue '>
      <div className="flex justify-between  items-center p-2">

        <section className="flex flex-col ml-72">
          <span className={clsx("  text-sxlg font-sans font-900 dark:text-black ", {
            'text-black': type === 'dark',
            'text-white': type === 'normal',
          })} >Don't miss what's happening</span>
          <span className={clsx("text-md font-400 dark:text-black", {
            'text-black': type === 'dark',
            'text-white': type === 'normal',

          })} >People on Twitter are the first to know.</span>
        </section>

        <section className="flex gap-4">
          <button className="  w-20 h-10 font-sans font-bold rounded-full transition-all border focus:ring-4 ring-dark-5 text-white   bg-transparent  border-white hover:text-black hover:bg-white  "
          >Log in</button>


          <Link to="/error404">
            <button className=" w-24 h-10  font-sans font-bold rounded-full transition-all border focus:ring-4 ring-dark-5 text-black   bg-white  border-white hover:text-white  hover:bg-transparent"
            >Sign up</button>
          </Link>
        </section>
      </div>
    </footer>
  )
}