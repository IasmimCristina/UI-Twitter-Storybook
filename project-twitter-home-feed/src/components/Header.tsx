import { ReactNode, useState } from 'react';
import { clsx } from 'clsx';
import { Sparkle, ArrowLeft } from "phosphor-react";


export interface HeaderProps {

  type?: 'dark' | 'normal';
  page?: 'Home' | 'Profile';


}
export function Header({ type = 'normal', page = 'Home' }: HeaderProps) {
  let profileContent;
  if (page === 'Profile') {
    profileContent = {
      content: <span className={clsx('text-sxs inline-block leading-3 dark:text-dark-6', {
        'text-dark-5': type === 'normal',
        'text-dark-6': type === 'dark',

      })} > 9 tweets </span>,
      name: 'Name',
      icon: <div className=" w-9 h-8">
        <ArrowLeft weight="bold" className={clsx('text-primary-blue w-8 h-7 cursor-pointer transition-all hover:w-9 hover:h-8 dark:hover:text-white ', {
          'hover:text-black ': type === 'normal',
          'hover:text-white ': type === 'dark',
        })} />
      </div>,
    };
  } else {
    profileContent = {
      content: "",
      name: 'Home',
      icon: '',
    };
  }

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
    <header className='h-4  p-2' >
      <div className="flex justify-between items-center">

        <div className=" flex  items-center ">
          {profileContent.icon}
          <div className={clsx('', {
            'ml-10': page === 'Profile'
          })}>
            <h1 className={clsx('font-bold text-lg leading-5 dark:text-white ', {
              'text-black': type === 'normal',
              'text-white': type === 'dark',

            })}>{profileContent.name}</h1>
            {profileContent.content}
          </div>
        </div>

        <div onClick={toggleClicked} className={clsx(' cursor-pointer h-8 text-primary-blue  flex  content-center', {

        })}>
          <Sparkle className={clsx('transition-all h-8 w-6  hover:h-9 hover:w-7 dark:text-white', {

            'hover:text-black ': type === 'normal',
            'hover:text-white ': type === 'dark',

          })} />
        </div>
      </div>
      <hr className={clsx('mt-1 dark:text-dark-4', {

        'text-dark-7': type === 'normal',

        'text-dark-4': type === 'dark',


      })} />

    </header >
  )
}