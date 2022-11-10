import { Outlet } from "react-router-dom";
import Sign from "./pages/Sign/Sign";
import { IUser } from "./types/User";


//Pegando dados do local storage:
let userLogged = JSON.parse(localStorage.getItem('currentUserLogged') || '')


//Autenticação das rotas protegidas:
const useAuth = () => {
  if ( userLogged != '' ) {
    return true;
  } else {
    return false;
  }

}

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet/> : <Sign /> ;
}

export default ProtectedRoutes;