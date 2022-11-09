import clsx from 'clsx';
import { useState } from 'react'
import { Follow } from './components/Follow';
import { Footer } from './components/Footer';
import { Header, HeaderProps } from './components/Header';
import { News } from './components/News';
import { Post } from './components/Post';
import { ProfileArea } from './components/ProfileArea';
import { SearchBar } from './components/SearchBar';
import { SideMenu } from './components/SideMenu';
import { Spacer } from './components/Spacer';
import { TabBar } from './components/TabBar';
import { TermsOfService } from './components/TermsOfService';
import { Tweet } from './components/Tweet';

import './styles/global.css';




export function App() {
   //Dark mode ou não.

const [typePage, setTypePage] = useState();
  const completePage = {
    content: <div className="flex  flex-col h-2/3  overflow-hidden  ">
      <div className='grid grid-cols-4 '>
        <div className="flex justify-center">
          <SideMenu menuItemSelected={'Home'} />
        </div>
        <div className='col-span-2 px-16 main-section-tweets scrollbar overflow-y-auto  h-screen' >
          <div className="border-x border-dark-7">
            <div className="flex flex-col gap-8 ">
          <Header   />
              <Post    />
            </div>
            <Spacer />
            <Tweet textPost={'Lorem jqhswjuw wwjhcu ghj jkj.'} />
            <Tweet textPost={'Lorem jqhswjuw wwjhcu ghj jkj.'} />
          </div>
        </div>

        <div className='flex flex-col gap-4 items-center  px-14 py-3'>
          <SearchBar />
          <News />
          <Follow />
          <TermsOfService />

        </div>
      </div>
      <div className="h-28">
        <Footer type='dark' />
      </div>
    </div>
  }

  return (

    <div className="  flex  flex-col h-2/3  overflow-hidden  ">
      <div className='grid grid-cols-4 '>
        <div className="flex justify-center">
          <SideMenu menuItemSelected={'Home'} />
        </div>
        <div className='col-span-2 px-16 main-section-tweets scrollbar overflow-y-auto  h-screen' >
          <div className="border-x border-dark-7">
            <div className="flex flex-col gap-8 ">
              <Header />
              <Post />
            </div>
            <Spacer />
            <Tweet textPost={'Lorem jqhswjuw wwjhcu ghj jkj.'} />
            <Tweet textPost={'Lorem jqhswjuw wwjhcu ghj jkj.'} />
          </div>
        </div>

        <div className='flex flex-col gap-4 items-center  px-14 py-3'>
          <SearchBar />
          <News />
          <Follow />
          <TermsOfService />

        </div>
      </div>
      <div className="h-28">
        <Footer  />
      </div>
    </div>



  )
}



