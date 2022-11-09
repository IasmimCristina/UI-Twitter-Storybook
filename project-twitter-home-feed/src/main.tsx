import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import {Log} from './pages/Log'
import { LoginPage, LoginPageProps } from './components/LoginPage'

//Todas as páginas do projeto e suas respectivas divs.


//Página Home
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <App/>  
  </React.StrictMode>
)


//Página Profile
ReactDOM.createRoot(document.getElementById('root02') as HTMLElement).render(
  <React.StrictMode>
   <Log/>  
  </React.StrictMode>
)
