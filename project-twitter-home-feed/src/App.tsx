
import { useState } from 'react'
import { Follow } from './components/Follow';
import { Footer } from './components/Footer';
import { Header  } from './components/Header';
import { News } from './components/News';
import { Post } from './components/Post';
import { SearchBar } from './components/SearchBar';
import { SideMenu } from './components/SideMenu';
import { Spacer } from './components/Spacer';
import { TermsOfService } from './components/TermsOfService';
import { Tweet } from './components/Tweet';
import './styles/global.css';

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import Error404Page from './pages/Error404/Error404Page';
import HomeNoLogin from './pages/HomeNoLogin/HomeNoLogin';
import Log from './pages/Log/Log';
import ProfPage from './pages/ProfPage/ProfPage';
import Sign from './pages/Sign/Sign';
function AppRouter() {

  return (
 //Rotas
 <Router>
 <Routes>
   <Route  path='/home' element ={<Home /> } />
   <Route  path='/error404' element ={<Error404Page /> } />
   <Route  path='/homeNoLogin'  element ={<HomeNoLogin />  } />
   
   <Route  path='/login' element ={<Log /> } />
   <Route  path='/profile' element ={<ProfPage /> } />
   <Route  path='/signup' element ={<Sign /> } />
   {/* Configuração dapágina 404 */}
   <Route path='*' element ={<Navigate to="/error404"/>} />

 </Routes>
</Router>
  )
 
}

export default AppRouter;






