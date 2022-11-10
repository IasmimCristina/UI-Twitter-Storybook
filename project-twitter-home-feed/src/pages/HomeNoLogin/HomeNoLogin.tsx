import { useState } from 'react'
import { Follow } from '../../components/Follow';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { LoginPopUp } from '../../components/LoginPopUp';

import { News } from '../../components/News';

import { SearchBar } from '../../components/SearchBar';
import { SideMenu } from '../../components/SideMenu';

import { TermsOfService } from '../../components/TermsOfService';
import { Tweet, TweetProps } from '../../components/Tweet';
import '../../styles/global.css';




function HomeNoLogin() {


  let listPosts: TweetProps[] = []

  let userLogged = JSON.parse(localStorage.getItem('currentUserLogged') || '')
  userLogged = {
    email: "",
    password: "",
    name: "",
    posts: listPosts,
  };
  localStorage.setItem('currentUserLogged', JSON.stringify(userLogged));


  return (
    <div className="   flex  flex-col h-2/3  overflow-hidden  bg-white dark:bg-black ">
      {/* <div style={{ display: "block" }} className=" absolute  top-0 left-0 w-full h-full z-10 ml-600px">
        <LoginPopUp />
      </div> */}
      <div className='grid grid-cols-4 '>
        <div className="flex justify-center">
          <SideMenu menuItemSelected={'Home'} page="HomeNoLogin" />
        </div>
        <div className='col-span-2 px-16 main-section-tweets scrollbar overflow-y-auto  h-screen' >
          <div className="border-x border-dark-7 dark:border-dark-4 gap-6 flex flex-col">
            <div className="flex flex-col gap-8 ">
              <Header />

            </div>

            <Tweet textPost={'Lorem jqhswjuw wwjhcu ghj jkj.'} />
            <Tweet textPost={'Lorem jqhswjuw wwjhcu ghj jkj.'} />
          </div>
        </div>

        <div className='flex flex-col gap-6 items-center  px-14 py-3'>
          <SearchBar />
          <News />
          <Follow />
          <TermsOfService />

        </div>
      </div>
      <div className="h-28">
        <Footer />
      </div>
    </div>


  )
}

export default HomeNoLogin;
