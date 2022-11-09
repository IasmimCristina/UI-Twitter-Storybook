
import { useState } from 'react'
import { Follow } from '../../components/Follow';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { News } from '../../components/News';
import { Post } from '../../components/Post';
import { SearchBar } from '../../components/SearchBar';
import { SideMenu } from '../../components/SideMenu';
import { Spacer } from '../../components/Spacer';
import { TermsOfService } from '../../components/TermsOfService';
import { Tweet } from '../../components/Tweet';
import '../../styles/global.css';


 function Home() {
  //Dark mode ou não.



  return (

    <div className="  flex  flex-col h-2/3  overflow-hidden  bg-white dark:bg-black ">
      <div className='grid grid-cols-4 '>
        <div className="flex justify-center">
          <SideMenu menuItemSelected={'Home'} />
        </div>
        <div className='col-span-2 px-16 main-section-tweets scrollbar overflow-y-auto  h-screen' >
          <div className="border-x border-dark-7 dark:border-dark-4">
            <div className="flex flex-col gap-8 ">
              <Header />
              <Post />
            </div>
            <Spacer />
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

export default Home



