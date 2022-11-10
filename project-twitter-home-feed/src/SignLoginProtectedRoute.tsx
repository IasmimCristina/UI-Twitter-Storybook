import { Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";

import { IUser } from "./types/User";


//Pegando dados do local storage:
let userLogged = JSON.parse(localStorage.getItem('currentUserLogged') || '')


//Autenticação das rotas quando o usuário já estiver logado:
const useAuth = () => {
  if (userLogged.name != "" ) {
    return true;
  } else {
    return false;
  }

}

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Home />  : <Outlet/> ;
}

export default ProtectedRoutes;