
import { clsx } from 'clsx';
import { TwitterLogo } from "phosphor-react";
import { useCallback, useState } from 'react';
import Home from '../pages/Home/Home';
import { Tweet, TweetProps } from './Tweet';

import { IUser } from '../types/User';





export interface LoginPageProps {

  type?: 'dark' | 'normal';



}
export function LoginPage({ type = 'normal' }: LoginPageProps) {


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

  //------------------------------
  //Usuários falsos para a aplicação:
  let listPosts: TweetProps[] = []

  let user01: IUser = {
    name: 'Ias',
    email: 'ias@example.com',
    password: '1234',
    posts: listPosts,
  }
  let user02: IUser = {
    name: 'Example',
    email: 'example@example.com',
    password: 'example',
    posts: listPosts,
  }
  let user03: IUser = {
    name: 'Cookie',
    email: 'cookie@cookie.com',
    password: 'cookie',
    posts: listPosts,
  }
  const users: Array<IUser> = [user01, user02, user03];

  //Criação do tipo:
  interface IFormState {
    email: string;
    password: string;
  }

  const [formState, setFormState] = useState<IFormState>(
    {
      email: "",
      password: "",
    }
  );
  //-------------------------
  // Validação do usuário

  
  const [isValid, setIsValid] = useState(false);

  console.log({ formState });
  console.log(users);
  //-------------------------
  let userLogged: IUser; 
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = formState

    if (!email || !password) {
      //Para o caso do navegador não tratar o formulário e seus cmapos obrigatórios:
      window.alert("Preencha os dois campos de forma válida!")
      userLogged = {
        email: "",
        password: "",
        name: "",
        posts: listPosts,
      };
     
      
    } else {

      for (let i = 0; i < users.length; i++) {

        if (users[i].email == email && users[i].password == password) {
          setIsValid(true)
          console.log(users[i]);
          userLogged = users[i]
          
          
        } else {
         
          
        }
        
       
      }


    }


    if (isValid) {
      window.alert(`Sucesso! Olá novamente, ${userLogged.name}!`)
      //Criação do usuário no local storage.
      localStorage.setItem('currentUserLogged', JSON.stringify(userLogged))
      
      return (
        
        window.location.replace('http://localhost:5173/home')
       
        
      )
    } else {
      userLogged = {
        email: "",
        password: "",
        name: "",
        posts: listPosts,
      };
      localStorage.setItem('currentUserLogged', JSON.stringify(userLogged))
        window.alert("Dados inválidos!")
    }

  }, [formState]);

 

  return (
    <body className={clsx('w-full h-screen flex items-center justify-center dark:bg-black', {
      'bg-white': type === 'normal',
      'bg-black': type === 'dark',
    })}>
      <main className=' w-450px h-476px  ' >
        <TwitterLogo onClick={toggleClicked} weight="fill" className={clsx('w-12 h-10 cursor-pointer hover:text-dark-4 transition-all dark:text-white', {
          'text-primary-blue': type === 'normal',
          'text-white': type === 'dark',
        })} />

        <h1 className={clsx('font-sans text-sxlg font-900 dark:text-white', {
          'text-black': type === 'normal',
          'text-white': type === 'dark',
        })}  >Log In to Twitter</h1>

        <form onSubmit={handleSubmit} className="flex flex-col h-72 justify-between ">
          <input value={formState.email} onChange={(event) => setFormState({
            ...formState,
            email: event.currentTarget?.value || "",

          }

          )
          } id='email' className={clsx('h-20 mt-4 p-4 border border-dark-6 outline-none focus:ring-4 focus:bg-dark-8 ring-primary-blue rounded', {

          })} placeholder='Phone number, email address' type="email" required />

          <input value={formState.password} onChange={(event) => setFormState({
            ...formState,
            password: event.currentTarget?.value || "",
          }


          )
          } id='password' className={clsx('h-20 p-4 border border-dark-6 outline-none focus:ring-4 focus:bg-dark-8 ring-primary-blue rounded', {

          })} placeholder='Password' type="password" required />
          <button className={clsx(' mt-4 text-size18 font-sans font-bold rounded-full transition-all border focus:ring-4 ring-dark-5 h-16 w-full text-white  border-primary-blue     bg-primary-blue hover:text-primary-blue  hover:bg-transparent  ', {

          })}>Log In</button>

        </form>



        <div className='flex justify-between  h-14 items-center  px-3 mt-6 text-primary-blue text-size18 ' >
          <span className={' font-400 transition-all cursor-pointer hover:text-xlg'} >Forgot password?</span>
          <span className={' font-400 transition-all cursor-pointer hover:text-xlg'} >Sign up to Twitter</span>

        </div>
      </main>



    </body >
  )
}