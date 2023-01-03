import React from 'react'
import ReactDOM from 'react-dom/client'
import  Home  from './pages/Home/Home'
import Log from './pages/Log/Log'
import { LoginPage, LoginPageProps } from './components/LoginPage'
import  AppRouter  from './App'
import Error404Page from './pages/Error404/Error404Page'
import HomeNoLogin from './pages/HomeNoLogin/HomeNoLogin'
import ProfPage from './pages/ProfPage/ProfPage'
import Sign from './pages/Sign/Sign'



//Todas as páginas do projeto e suas respectivas divs.
//Página Home
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <AppRouter/>  
  </React.StrictMode>
)


// //Página Login
// ReactDOM.createRoot(document.getElementById('rootLogin') as HTMLElement).render(
//   <React.StrictMode>
//    <Log/>  
//   </React.StrictMode>
// )

// //Página Error
// ReactDOM.createRoot(document.getElementById('rootError') as HTMLElement).render(
//   <React.StrictMode>
//    <Error404Page/>  
//   </React.StrictMode>
// )

// //Página HomeNologin
// ReactDOM.createRoot(document.getElementById('rootHomeNoLogin') as HTMLElement).render(
//   <React.StrictMode>
//    <HomeNoLogin/>  
//   </React.StrictMode>
// )

// //Página Profile
// ReactDOM.createRoot(document.getElementById('rootProfile') as HTMLElement).render(
//   <React.StrictMode>
//    <ProfPage/>  
//   </React.StrictMode>
// )

// //Página Signup
// ReactDOM.createRoot(document.getElementById('rootsign') as HTMLElement).render(
//   <React.StrictMode>
//    <Sign/>  
//   </React.StrictMode>
// )

