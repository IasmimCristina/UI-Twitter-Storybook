import imageCookie from '../static/Profile.svg';
import imageCookieWallpaper from '../static/secondWalllpaper.svg';

import imageExample from '../static/exampleProfile.svg';
import imageExampleWallpaper from '../static/profileWallpaper.svg';

import imageIas from '../static/iasProfile.svg';




export interface UserData {
  name: string;
  nickname: string;
  profilePicture: string; //Será um link.
  profileWallpaper: string; //Será um link.
  profileDescription: string; 

}

//Resto dos dados das contas:
export const usersData: UserData[] = [
  {name: "Cookie Biscuit", nickname: "@cookingcookie", profilePicture: imageCookie, profileDescription: "Cook || Engineer❤️ || Looking for a better life 🫶|| Peace and love! <3", profileWallpaper:imageCookieWallpaper },



  {name: "Sai Sric", nickname: "@mimsai", profilePicture: imageIas, profileDescription: "Scholer for eternity ^⁻^ || Student || Having fun always 🫶|| Barbecue!!!!! ", profileWallpaper:imageCookieWallpaper },


  {name: "Joanna Doe", nickname: "@randomGal", profilePicture: imageExample, profileDescription: "Teacher ^⁻^ ||  💀Writer✨✨ || Singer🤎🤎 || Psychologist",profileWallpaper:imageExampleWallpaper },




] 