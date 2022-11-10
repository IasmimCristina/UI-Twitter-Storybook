
import './styles/global.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home';
import Error404Page from './pages/Error404/Error404Page';
import HomeNoLogin from './pages/HomeNoLogin/HomeNoLogin';
import Log from './pages/Log/Log';
import ProfPage from './pages/ProfPage/ProfPage';
import Sign from './pages/Sign/Sign';
import ProtectedRoutes from './ProtectedRoutes';
import SignLoginProtectedRoute from './SignLoginProtectedRoute';
function AppRouter() {

  return (
    //Rotas
    <Router>
      <Routes>

        <Route element={<SignLoginProtectedRoute />}>

          <Route path='/signup' element={<Sign />} />
          <Route path='/login' element={<Log />} />

          <Route path='/' element={<HomeNoLogin />} />

        </Route>



        <Route path='/error404' element={<Error404Page />} />


        <Route element={<ProtectedRoutes />} >

          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<ProfPage />} />

        </Route>



        {/* Configuração dapágina 404 */}
        <Route path='*' element={<Navigate to="/error404" />} />

      </Routes>
    </Router>
  )

}

export default AppRouter;






