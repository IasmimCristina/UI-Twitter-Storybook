import clsx from "clsx"
import { ReactNode } from 'react';

import google from '../static/icons/google-icon.svg';
import apple from '../static/icons/apple-icon.svg';
//Pegar a simagens e temrina ro IF statement para modificar os botões.
const images = {
  iconGoogle: google,
  iconApple: apple,
};



export interface SignupButtonsProps {

  type?: 'normal' | 'dark'; 
  buttonType: 'Google' | 'Apple' | 'PhoneEmail';
}
export function SignupButtons({ type = 'normal', buttonType = 'PhoneEmail'  }: SignupButtonsProps) {

  let buttonContent;


  if (buttonType === 'PhoneEmail') {
    
    buttonContent = {
      text: "Sign up with phone or email",
      icon: '',
    }

  } else if (buttonType === 'Google') {
    buttonContent = {
      icon: <img src={images.iconGoogle} alt="Google Icon" />,
      text: 'Sign up with Google',
    }
  } else {

    buttonContent = {
      icon: <img src={images.iconApple} alt="Apple Icon" />,
      text: 'Sign up with Apple',
    }
  }

  return (
    <button className={clsx('bg-white rounded-full border  w-403px h-16 font-semibold font-sans  text-xlg box-border  hover:border-4 hover:font-bold  transition-all flex items-center justify-center', {
      'border-dark-7': type == 'normal',
      'border-dark-4': type == 'dark',

      'text-black': type == 'normal',
      'text-dark-4': type == 'dark',
    
    })} >
      {buttonContent.icon}
      {buttonContent.text}

    </button>
  )
}